import Scene from '../core/scene';
import { TEXTURES_DIR, GROUND } from '../data/constants';

const URL = {
    skybox: `${TEXTURES_DIR}/skybox/skybox`,
    ground: `${TEXTURES_DIR}/ground/lawn.jpg`,
    wall  : `${TEXTURES_DIR}/wall/bricks.jpg`
};

/**
 * Generates the environment for the scene
 */
export default class Environment {
    constructor() {
        this.createSkybox();
        this.createGround();
        this.createWalls();
    }

    /**
     * Generates the skybox
     */
    createSkybox() {
        const skyMesh = BABYLON.Mesh.CreateBox('skybox', 1000, Scene);
        const skyMat = new BABYLON.StandardMaterial('skybox', Scene);
        skyMat.backFaceCulling = false;
        skyMat.reflectionTexture = new BABYLON.CubeTexture(URL.skybox, Scene);
        skyMat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyMat.specularColor = new BABYLON.Color3(0, 0, 0);
        skyMesh.material = skyMat;
        this.skybox = skyMesh;
    }

    /**
     * Generates the surface
     */
    createGround() {
        const groundMesh = BABYLON.MeshBuilder.CreateGround('ground', {
            width       : GROUND.SIZE,
            height      : GROUND.SIZE,
            subdivisions: GROUND.SIZE / 2
        }, Scene);
        const groundMat = new BABYLON.StandardMaterial('matGround', Scene);
        groundMat.diffuseTexture = new BABYLON.Texture(URL.ground, Scene);
        groundMat.diffuseTexture.uScale = GROUND.SUBDIVISIONS;
        groundMat.diffuseTexture.vScale = GROUND.SUBDIVISIONS;
        groundMat.specularColor = new BABYLON.Color3(0, 0, 0);
        groundMesh.material = groundMat;
        groundMesh.position = new BABYLON.Vector3.Zero();
        groundMesh.checkCollisions = true;
        this.ground = groundMesh;
    }

    /**
     * Generates the walls
     * @param height the height of the walls
     */
    createWalls(height = 10) {

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
        material.diffuseTexture = new BABYLON.Texture(URL.wall, Scene);
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
        walls[2].rotation.y = Utils.degreesToRadians(90);

        // fourth wall
        walls[3].position.x = -distance;
        walls[3].rotation.y = Utils.degreesToRadians(90);

        // merge individual walls to one unit so it forms a square
        const mesh = BABYLON.Mesh.MergeMeshes(walls);
        mesh.checkCollisions = true;
        this.wall = mesh;
    }
}