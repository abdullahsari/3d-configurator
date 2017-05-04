import Engine from './Engine';
import { GRAVITATIONAL_ACCELERATION } from '../data/Constants';

// Setup scene
const scene = new BABYLON.Scene(Engine);

// Enable gravity
scene.gravity = new BABYLON.Vector3(0, -GRAVITATIONAL_ACCELERATION, 0);

// Enable camera collisions
scene.collisionsEnabled = true;

export default scene;
