/**
 * Hospitality IoT Elements
 */

class HTMLIoTAudioElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTButtonElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTCurtainElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTDoorElement extends HTMLElement {
    constructor() {
        super();
        this._lastLockedState = null;
    }

    // Only observe the locked attribute
    static get observedAttributes() {
        return ['locked'];
    }

    // Handle attribute changes and fire change event
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'locked') {
            const currentLocked = this.locked;
            // Only fire if the actual boolean state changed
            if (this._lastLockedState !== currentLocked) {
                this._lastLockedState = currentLocked;
                this.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    }

    // Property getter for locked state
    get locked() {
        return this.hasAttribute('locked');
    }

    // Property setter for locked state
    set locked(value) {
        if (value) {
            this.setAttribute('locked', '');
        } else {
            this.removeAttribute('locked');
        }
    }
}

class HTMLIoTLampElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTRoomElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTVideoElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTWindowElement extends HTMLElement {
    constructor() {
        super();
    }
}

/**
 * Hospitality Elements Collection
 */
const hospitalityElements = new HTMLElementCollection();

hospitalityElements.add('iot-audio', HTMLIoTAudioElement);
hospitalityElements.add('iot-button', HTMLIoTButtonElement);
hospitalityElements.add('iot-curtain', HTMLIoTCurtainElement);
hospitalityElements.add('iot-door', HTMLIoTDoorElement);
hospitalityElements.add('iot-lamp', HTMLIoTLampElement);
hospitalityElements.add('iot-room', HTMLIoTRoomElement);
hospitalityElements.add('iot-video', HTMLIoTVideoElement);
hospitalityElements.add('iot-window', HTMLIoTWindowElement);
