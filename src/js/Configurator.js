// Core components
import Engine from './core/Engine';
import Scene from './core/Scene';

// Entities
import Ground from './entities/Ground';
import Skybox from './entities/Skybox';
import SquareWall from './entities/SquareWall';
import Sun from './entities/Sun';

// Constants
import { CAMERA_LIMITS, TEXTURES_DIR } from './data/Constants';

export default class Configurator {
    constructor() {

        // define data fields with initial values
        this.lights = {};
        this.cameras = {};
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
        free.keysUp.push(87); // W
        free.keysDown.push(83); // S
        free.keysLeft.push(65); // A
        free.keysRight.push(68); // D
        free.speed = 3;
        free.inertia = 0.5;
        free.angularSensibility = 1000;

        this.cameras = {
            arc,
            free
        };

        // deploy sun in the sky
        this.sun = new Sun();

        // generate shadows
        this.shadowGenerator = new BABYLON.ShadowGenerator(4096, this.sun.light);
        this.shadowGenerator.usePoissonSampling = true;

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