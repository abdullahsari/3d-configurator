import Illumination from './components/Illumination';

const BTN_CLASS = 'btn',
    ACTIVE_CLASS = 'open';

/**
 * Consolidates the seperate controls into one container
 */
export default class Panel {
    constructor() {
        this.buttons = document.getElementsByClassName(BTN_CLASS);
        this.bindEvents();
        this.illumination = new Illumination();
    }

    /**
     * Attach events to panel buttons
     */
    bindEvents() {
        for (let button of this.buttons) {
            button.addEventListener('click', () => {
                this.toggleComponent(button.parentNode);
            });
        }
    }

    /**
     * Toggle the panel buttons on/off
     * @param target The chosen panel button
     */
    toggleComponent(target) {
        target.classList.toggle(ACTIVE_CLASS);
    }
}