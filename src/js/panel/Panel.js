import Illumination from './components/Illumination';

const BTN_CLASS = 'btn',
    ACTIVE_CLASS = 'open';
export default class Panel {
    constructor() {
        this.buttons = document.getElementsByClassName(BTN_CLASS);
        this.bindEvents();
        this.illumination = new Illumination();
    }

    bindEvents() {
        for (let button of this.buttons) {
            button.addEventListener('click', () => {
                this.toggleComponent(button.parentNode);
            });
        }
    }

    toggleComponent(target) {
        target.classList.toggle(ACTIVE_CLASS);
    }
}