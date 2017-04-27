import BABYLON from 'babylonjs';

export default class Configurator {
	constructor() {
		
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
			hemi : new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, 0), this.scene),
		};
		
		// define cameras
		this.cameras = {
			arc : new BABYLON.ArcRotateCamera('arc', 1, 0.8, 10, new BABYLON.Vector3.Zero(), this.scene),
		};
		this.cameras.arc.lowerRadiusLimit = 50;
		this.cameras.arc.upperRadiusLimit = 150;
		this.cameras.arc.upperBetaLimit = 1.5;
		this.cameras.arc.attachControl(canvas);
		
		// render
		this.engine.runRenderLoop(() => {
			this.scene.render();
		});
	}
	
	resizeCanvas() {
		this.engine.resize();
	}
}