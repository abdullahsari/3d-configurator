import Scene from '../core/Scene';
import { TEXTURES_DIR, GROUND } from '../data/Constants';

const URL = `${TEXTURES_DIR}/wall/bricks.jpg`;
export default class SquareWall {
    constructor(height = 10) {

        // array that will hold the individual walls
        const walls = [
            BABYLON.MeshBuilder.CreatePlane('wall1', {width: GROUND.SIZE, height}, Scene),
            BABYLON.MeshBuilder.CreatePlane('wall2', {width: GROUND.SIZE, height}, Scene),
            BABYLON.MeshBuilder.CreatePlane('wall3', {width: GROUND.SIZE, height}, Scene),
            BABYLON.MeshBuilder.CreatePlane('wall4', {width: GROUND.SIZE, height}, Scene)
        ];

        // create material with texture
        const material = new BABYLON.StandardMaterial('wallMat', Scene);
        material.backFaceCulling = false;
        material.diffuseTexture = new BABYLON.Texture(URL, Scene);
        material.diffuseTexture.uScale = GROUND.SIZE / 10;

        // move walls to appropriate height level and attach material
        walls.forEach(wall => {
            wall.position.y = height / 2;
            wall.material = material;
        });

        // determine the distance of the walls from the centre along the edges of the ground
        const distance = GROUND.SIZE / 2;

        // first wall
        walls[0].position.z = distance;

        // second wall
        walls[1].position.z = -distance;

        // third wall
        walls[2].position.x = distance;
        walls[2].rotation.y = Utils.convertToRadian(90);

        // fourth wall
        walls[3].position.x = -distance;
        walls[3].rotation.y = Utils.convertToRadian(90);

        // merge individual walls to one unit so it forms a square
        this.mesh = BABYLON.Mesh.MergeMeshes(walls);
    }
}