import Configurator from './Configurator';

{
	const config = new Configurator();
	config.render();

	// Event listeners
	window.addEventListener('resize', config.resizeCanvas());
}