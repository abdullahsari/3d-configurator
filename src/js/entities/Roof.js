import Scene from '../core/scene';
import { ROOF_TYPE } from '../data/constants';

export default class Roof {
    constructor() {
        const mesh = BABYLON.MeshBuilder.CreateBox('flat', {width: 10, height: 0.25, depth: 15}, Scene);
        mesh.position.y = 10;
        this.mesh = mesh;
    }
}