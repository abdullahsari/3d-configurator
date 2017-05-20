// Core components
import Engine from './core/engine';
import Scene from './core/scene';

// Entities
import Environment from './entities/Environment';
import Sun from './entities/Sun';
import Pole from './entities/Pole';
import Wall from './entities/Wall';
import Roof from './entities/Roof';
import Material from './entities/Material';

// Constants
import { CAMERA_LIMITS, CAMERA_SETTINGS, STEP_AMOUNT, SCALE_AMOUNT} from './data/constants';

/**
 * This class is the core of the application.
 */
class Configurator {
    constructor() {

        // Grab the canvas
        this.canvas = document.getElementById('renderContext');

        // Defaults
        this.entities = new Map();
        this.selected = null;
        this.material = new Material();

        // Initialize 3D world
        this.initWorld();

        // Start the picking system
        this.initPicking();
    }

    /**
     * Initializes the world/scene with everything that is needed
     */
    initWorld() {

        // Define cameras
        const arc = new BABYLON.ArcRotateCamera('arc', Math.PI, Math.PI / 2, CAMERA_LIMITS.UPPER_RADIUS, BABYLON.Vector3.Zero(), Scene),
            free = new BABYLON.FreeCamera('free', new BABYLON.Vector3(0, 2, 50), Scene);

        // Rotation-camera settings
        arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
        arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
        arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
        arc.attachControl(this.canvas);

        // Freecamera settings
        free.attachControl(this.canvas);
        free.applyGravity = true;
        free.checkCollisions = true;
        free.keysUp.push(CAMERA_SETTINGS.KEYS_UP);
        free.keysDown.push(CAMERA_SETTINGS.KEYS_DOWN);
        free.keysLeft.push(CAMERA_SETTINGS.KEYS_LEFT);
        free.keysRight.push(CAMERA_SETTINGS.KEYS_RIGHT);
        free.speed = CAMERA_SETTINGS.SPEED;
        free.inertia = CAMERA_SETTINGS.INERTIA;
        free.angularSensibility = CAMERA_SETTINGS.NG_SENSIBILITY;

        // Save cameras in one object
        this.cameras = {arc, free};

        // Deploy sun in the sky
        this.sun = new Sun();

        // Generate environment
        this.environment = new Environment();
    }

    /**
     * Initializes the picking system in the scene
     */
    initPicking() {
        this.canvas.addEventListener('click', () => {
            const result = Scene.pick(Scene.pointerX, Scene.pointerY);
            if (result.hit) {
                if (this.selected) {
                    this.entities.get(this.selected).mesh.material.wireframe = false;
                    this.selected = null;
                    this.hideSections(true);
                } else {
                    this.selected = result.pickedMesh.toString().split(' ')[1].slice(0, -1);
                    result.pickedMesh.material.wireframe = true;
                    this.hideSections(false);
                }
            } else {
                if (this.selected) {
                    this.entities.get(this.selected).mesh.material.wireframe = false;
                    this.selected = null;
                    this.hideSections(true);
                }
            }
        });
    }

    /**
     * (un)hides the sections that need to be togglable depending on the selected mesh
     * @param boolean hide or do not hide
     */
    hideSections(boolean) {
        const notice = document.querySelector('#editor p'),
            editSection = document.querySelector('#editor .content div');
        if (boolean) {
            notice.classList.remove('hide');
            editSection.classList.add('hide');
        } else {
            notice.classList.add('hide');
            editSection.classList.remove('hide');
        }
    }

    /**
     * Adds a pole structure to the scene at the origin
     */
    addPole() {
        const name = `pole-${this.entities.size}`;
        this.entities.set(name, new Pole(name));
    }

    /**
     * Adds a wall structure to the scene at the origin
     */
    addWall() {
        const name = `wall-${this.entities.size}`;
        this.entities.set(name, new Wall(name));
    }

    /**
     * Adds a roof structure to the scene at the origin
     */
    addRoof() {
        const name = `roof-${this.entities.size}`;
        this.entities.set(name, new Roof(name));
    }

    /**
     * Changes the material of the selected mesh
     * @param material name of the material
     */
    changeMaterial(material) {
        const mesh = this.entities.get(this.selected).mesh;
        mesh.material = this.material.getMaterial(material);
    }

    /**
     * Removes the selected mesh
     */
    removeMesh() {
        const mesh = this.entities.get(this.selected).mesh;
        this.entities.delete(this.selected);
        mesh.dispose();
        this.selected = null;
        this.hideSections(true);
    }

    /**
     * Rotates the selected mesh with 90 degrees
     */
    rotateMesh() {
        const mesh = this.entities.get(this.selected).mesh;
        mesh.rotate(BABYLON.Axis.Y, Utils.degreesToRadians(90), BABYLON.Space.LOCAL);
        mesh.bakeCurrentTransformIntoVertices();
    }

    /**
     * Translates the mesh along an axis
     * @param axis x, y or z
     * @param positive boolean
     */
    translateMesh(axis, positive) {
        const mesh = this.entities.get(this.selected).mesh;
        switch (axis.toUpperCase()) {
            case 'X':
                mesh.translate(BABYLON.Axis.X, (positive ? STEP_AMOUNT : -STEP_AMOUNT), BABYLON.Space.WORLD);
                break;
            case 'Y':
                if (!positive && mesh.intersectsMesh(this.environment.ground, false)) throw new Error('Stay above the ground.');
                mesh.translate(BABYLON.Axis.Y, (positive ? STEP_AMOUNT : -STEP_AMOUNT), BABYLON.Space.WORLD);
                break;
            case 'Z':
                mesh.translate(BABYLON.Axis.Z, (positive ? STEP_AMOUNT : -STEP_AMOUNT), BABYLON.Space.WORLD);
                break;
        }
        mesh.bakeCurrentTransformIntoVertices();
    }

    /**
     * Scales the mesh along an axis
     * @param axis x, y or z
     * @param positive boolean
     */
    scaleMesh(axis, positive) {
        const mesh = this.entities.get(this.selected).mesh;
        const amount = (positive ? SCALE_AMOUNT : -SCALE_AMOUNT);
        switch (axis.toUpperCase()) {
            case 'X':
                mesh.scaling.x += amount;
                break;
            case 'Y':
                mesh.scaling.y += amount;
                break;
            case 'Z':
                mesh.scaling.z += amount;
                break;
        }
        mesh.bakeCurrentTransformIntoVertices();
    }

    /**
     * Moves the sun to a given cardinal direction
     */
    moveSun(dir) {
        this.sun.move(dir);
    }

    /**
     * Makes the scene switch between camera modes
     * @param mode the camera type
     */
    setCameraMode(mode) {
        const camera = this.cameras[mode];
        Scene.activeCamera = camera;
    }

    /**
     * Starts rendering the scene on the HTML canvas
     */
    render() {
        Engine.runRenderLoop(() => {
            Scene.render();
        });
    }
}

export default new Configurator();