// Core components
import Engine from './core/Engine';
import Scene from './core/Scene';

// Entities
import Ground from './entities/Ground';
import Skybox from './entities/Skybox';
import SquareWall from './entities/SquareWall';
import Sun from './entities/Sun';

// Constants
import { CAMERA_LIMITS, CAMERA_SETTINGS } from './data/Constants';

export default class Configurator {
    constructor() {

        // define data fields with initial values
        this.cameras = {};
        this.sun = null;
        this.skybox = null;
        this.ground = null;
        this.wall = null;
        this.skybox = null;

        // initialize application
        this.init();
    }

    init() {

        // grab the canvas
        const canvas = document.getElementById('renderContext');

        // define cameras
        const arc = new BABYLON.ArcRotateCamera('arc', 1, 0.8, 10, new BABYLON.Vector3.Zero(), Scene),
            free = new BABYLON.FreeCamera('free', new BABYLON.Vector3(0, 2, 50), Scene);

        // rotation camera settings
        arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
        arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
        arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
        arc.attachControl(canvas);

        // free camera settings
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

        // create skybox
        this.skybox = new Skybox();

        // create ground
        this.ground = new Ground();

        // build wall
        this.wall = new SquareWall();
    }

    render() {
        Engine.runRenderLoop(() => {
            Scene.render();
        });
    }
}