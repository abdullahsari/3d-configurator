import Configurator from './Configurator';

{
	const config = new Configurator();
	
	// Event listeners
	window.addEventListener('resize', config.resizeCanvas());
}