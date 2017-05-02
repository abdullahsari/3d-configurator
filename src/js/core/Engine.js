import BABYLON from 'babylonjs';

// create canvas and append to document body
const canvas = document.createElement('canvas');
canvas.style.width = '100%';
document.body.appendChild(canvas);

// boot the core
const engine = new BABYLON.Engine(canvas, true);

// handle resize event
window.addEventListener('resize', () => {
    engine.resize();
});

export default engine;