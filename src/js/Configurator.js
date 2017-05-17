// Core components
import Engine from './core/engine';
import Scene from './core/scene';

// Entities
import Environment from './entities/Environment';
import Sun from './entities/Sun';
import Pole from './entities/Pole';
import Wall from './entities/Wall';
import Roof from './entities/Roof';

// Editors
import MaterialEditor from './editors/MaterialEditor';

// Constants
import { CAMERA_LIMITS, CAMERA_SETTINGS } from './data/constants';

/**
 * This class is the core of the application.
 */
class Configurator {
    constructor() {

        // defaults
        this.entities = new Map();

        // initialize 3D world
        this.initWorld();
    }

    /**
     * Initializes the world/scene with everything that is needed
     */
    initWorld() {

        // Grab the canvas
        const canvas = document.getElementById('renderContext');

        // Define cameras
        const arc = new BABYLON.ArcRotateCamera('arc', Math.PI, Math.PI / 2, CAMERA_LIMITS.UPPER_RADIUS, new BABYLON.Vector3.Zero(), Scene),
            free = new BABYLON.FreeCamera('free', new BABYLON.Vector3(0, 2, 50), Scene);

        // Rotation-camera settings
        arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
        arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
        arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
        arc.attachControl(canvas);

        // Freecamera settings
        free.attachControl(canvas);
        free.applyGravity = true;
        free.checkCollisions = true;
        free.keysUp.push(CAMERA_SETTINGS.KEYS_UP);
        free.keysDown.push(CAMERA_SETTINGS.KEYS_DOWN);
        free.keysLeft.push(CAMERA_SETTINGS.KEYS_LEFT);
        free.keysRight.push(CAMERA_SETTINGS.KEYS_RIGHT);
        free.speed = CAMERA_SETTINGS.SPEED;
        free.inertia = CAMERA_SETTINGS.INERTIA;
        free.angularSensibility = CAMERA_SETTINGS.NG_SENSIBILITY;

        this.cameras = {arc, free};

        // Deploy sun in the sky
        this.sun = new Sun();

        // Generate environment
        this.environment = new Environment();
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