import BABYLON from 'babylonjs';
import { TEXTURES_DIR } from '../data/Constants';

const URL = `${TEXTURES_DIR}/skybox/skybox`;
export default class Skybox {
    constructor(scene) {
        this.skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene);
        const skyMat = new BABYLON.StandardMaterial('skybox', scene);
        skyMat.backFaceCulling = false;
        skyMat.reflectionTexture = new BABYLON.CubeTexture(URL, scene);
        skyMat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyMat.specularColor = new BABYLON.Color3(0, 0, 0);
        this.skybox.material = skyMat;
    }
}
