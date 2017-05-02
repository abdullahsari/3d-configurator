import BABYLON from 'babylonjs';
import { CAMERA_LIMITS, TEXTURES_DIR } from './data/Constants';

export default class Configurator {
	constructor() {

		// define data fields with initial values
		this.engine = null;
		this.scene = null;
		this.lights = {};
		this.cameras = {};

		// initialize application
		this.init();
	}

	init() {

		// create canvas and append to document body
		const canvas = document.createElement('canvas');
		canvas.style.width = '100%';
		document.body.appendChild(canvas);

		// boot the engine
		this.engine = new BABYLON.Engine(canvas, true);

		// create the scene
		this.scene = new BABYLON.Scene(this.engine);
		this.scene.clearColor = new BABYLON.Color3(0, 0, 1);

		// define lights
		this.lights = {
			hemi: new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, 0), this.scene),
		};

		// define cameras
		this.cameras = {
			arc: new BABYLON.ArcRotateCamera('arc', 1, 0.8, 10, new BABYLON.Vector3.Zero(), this.scene),
		};
		this.cameras.arc.lowerRadiusLimit = CAMERA_LIMITS.LOWER_RADIUS;
		this.cameras.arc.upperRadiusLimit = CAMERA_LIMITS.UPPER_RADIUS;
		this.cameras.arc.upperBetaLimit = CAMERA_LIMITS.UPPER_BETA;
		this.cameras.arc.attachControl(canvas);

        // create skybox
        this.skybox = BABYLON.Mesh.CreateBox('skybox', 1000, this.scene);
        const skyMat = new BABYLON.StandardMaterial('skybox', this.scene);
        skyMat.backFaceCulling = false;
        skyMat.reflectionTexture = new BABYLON.CubeTexture(TEXTURES_DIR + 'skybox/skybox', this.scene);
        skyMat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyMat.specularColor = new BABYLON.Color3(0, 0, 0);
        this.skybox.material = skyMat;
	}

	resizeCanvas() {
		this.engine.resize();
	}

	render() {
		this.engine.runRenderLoop(() => {
			this.scene.render();
		});
	}
}