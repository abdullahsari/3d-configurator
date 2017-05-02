// BabylonJS
import BABYLON from 'babylonjs';

// Core components
import Engine from './core/Engine';
import Scene from './core/Scene';

// Entities
import Ground from './entities/Ground';
import Skybox from './entities/Skybox';

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

        // define lights
        this.lights = {
            hemi: new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, 0), Scene),
        };

        // define cameras
        this.cameras = {
            arc: new BABYLON.ArcRotateCamera('arc', 1, 0.8, 10, new BABYLON.Vector3.Zero(), Scene),
        };
        this.cameras.arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
        this.cameras.arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
        this.cameras.arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
        this.cameras.arc.attachControl(document.getElementById('renderContext'));

        // create skybox
        this.skybox = new Skybox(Scene);

        // create ground
        this.ground = new Ground(Scene);
    }

    render() {
        Engine.runRenderLoop(() => {
            Scene.render();
        });
    }
}