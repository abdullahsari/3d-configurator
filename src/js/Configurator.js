// Core components
import Engine from './core/engine';
import Scene from './core/scene';

// Entities
import Environment from './entities/Environment';
import Sun from './entities/Sun';

// Constants
import { CAMERA_LIMITS, CAMERA_SETTINGS } from './data/constants';

/**
 * This class is the core of the application.
 */
export default class Configurator {
    constructor() {

        // initialize 3D world
        this.initWorld();
    }

    /**
     * Initializes the world/scene with everything that is needed
     */
    initWorld() {

        // grab the canvas
        const canvas = document.getElementById('renderContext');

        // define cameras
        const arc = new BABYLON.ArcRotateCamera('arc', 1, 0.8, 10, new BABYLON.Vector3.Zero(), Scene),
            free = new BABYLON.FreeCamera('free', new BABYLON.Vector3(0, 2, 50), Scene);

        // rotation-camera settings
        arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
        arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
        arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
        arc.attachControl(canvas);

        // freecamera settings
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

        // deploy sun in the sky
        this.sun = new Sun();

        // generate environment
        this.environment = new Environment();
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