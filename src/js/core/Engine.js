// create canvas and append to document body
const canvas = document.getElementById('renderContext');
canvas.style.width = '100%';

// boot the core
const engine = new BABYLON.Engine(canvas, true);

// handle resize event
window.addEventListener('resize', () => {
    engine.resize();
});

export default engine;