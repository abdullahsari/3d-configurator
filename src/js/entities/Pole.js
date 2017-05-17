import Scene from '../core/scene';
import { DEFAULTS } from '../data/constants'

export default class Pole {
    constructor(name = 'pole', height = 15) {
        const mesh = BABYLON.MeshBuilder.CreateBox(name, {width: 0.5, height, depth: 0.5}, Scene);
        mesh.checkCollisions = true;
        this.mesh = mesh;
    }
}