import Scene from '../../core/scene';
import Config from '../../Configurator';

/**
 * This class represents the settings section
 */
export default class Settings {
    constructor() {
        this.bindEvents();
    }

    /**
     * Attaches events to various controls
     */
    bindEvents() {

        // Mute setting
        document.getElementById('mute').addEventListener('change', e => {this.mute(e.target.checked)});

        // Axes setting
        document.getElementById('axes').addEventListener('change', e => {this.showAxes(e.target.checked)});
    }

    /**
     * Sets the mute setting of the config
     * @param boolean true or false
     */
    mute(boolean) {
        Config.settings.mute = boolean;
    }

    /**
     * Creates or deletes the assist axes in the scene
     * @param boolean true or false
     */
    showAxes(boolean) {
        if (boolean) {
            Config.createAxes();
        } else {
            for (let axis of Config.axes)
                axis.dispose();
        }
    }
}