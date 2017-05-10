// create canvas and append to document body
const canvas = document.getElementById('renderContext');

// boot the core
const engine = new BABYLON.Engine(canvas, true);

// handle resize event for the engine
window.addEventListener('resize', () => {
    engine.resize();
});

export default engine;