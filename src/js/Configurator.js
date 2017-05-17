// Core components
import Engine from './core/engine';
import Scene from './core/scene';

// Entities
import Environment from './entities/Environment';
import Sun from './entities/Sun';
import Pole from './entities/Pole';
import Wall from './entities/Wall';
import Roof from './entities/Roof';

// Constants
import { CAMERA_LIMITS, CAMERA_SETTINGS } from './data/constants';

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
        const arc = new BABYLON.ArcRotateCamera('arc', Math.PI, Math.PI / 2, CAMERA_LIMITS.UPPER_RADIUS, new BABYLON.Vector3.Zero(), Scene),
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
                } else {
                    this.selected = result.pickedMesh.toString().split(' ')[1].slice(0, -1);
                    result.pickedMesh.material.wireframe = true;
                }
            } else {
                if (this.selected) {
                    this.entities.get(this.selected).mesh.material.wireframe = false;
                    this.selected = null;
                }
            }
        });
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

    changeMaterial(material) {
        
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