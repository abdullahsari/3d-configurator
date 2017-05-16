import Scene from '../core/scene';
import { DEFAULTS } from '../data/constants'

export default class Pole {
    constructor(height = DEFAULTS.MESH_HEIGHT) {
        const mesh = BABYLON.MeshBuilder.CreateBox('pole', {width: 1, height, depth: 1, updatable: true}, Scene);
        mesh.checkCollisions = true;
        this.mesh = mesh;
    }
}