import Scene from '../../core/scene';
import Config from '../../Configurator';

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

    mute(boolean) {
        Config.settings.mute = boolean;
    }

    showAxes(boolean) {
        if (boolean) {
            Config.createAxes();
        } else {
            for (let axis of Config.axes)
                axis.dispose();
        }
    }
}