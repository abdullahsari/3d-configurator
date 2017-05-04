import Scene from '../core/Scene';
import { TEXTURES_DIR, GROUND } from '../data/Constants';

const URL = `${TEXTURES_DIR}/ground/lawn.jpg`;
export default class Ground {
    constructor() {
        this.mesh = BABYLON.MeshBuilder.CreateGround('ground', {
            width       : GROUND.SIZE,
            height      : GROUND.SIZE,
            subdivisions: GROUND.SIZE / 2
        }, Scene);
        const material = new BABYLON.StandardMaterial('matGround', Scene);
        material.diffuseTexture = new BABYLON.Texture(URL, Scene);
        material.diffuseTexture.uScale = GROUND.SUBDIVISIONS;
        material.diffuseTexture.vScale = GROUND.SUBDIVISIONS;
        material.specularColor = new BABYLON.Color3(0, 0, 0)
        this.mesh.material = material;
        this.mesh.position = new BABYLON.Vector3.Zero();
    }
}