/**
 * Retail IoT Elements
 */


class HTMLIoTAisleElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTAudioElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTBasketElement extends HTMLElement {
    constructor() {
        super();
    }
}


class HTMLIoTButtonElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTColumnElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTCompartmentElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTCubbyElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTCustomerElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTDisplayUnitElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTEndcapElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTGondolaElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTItemElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTLineElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTPodiumElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTRoomElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTShelfElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTShelvingUnitElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTTileElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTVideoElement extends HTMLElement {
    constructor() {
        super();
        
        // Internal state
        this._currentTime = 0;
        this._duration = 0;
        this._paused = true;
        this._ended = false;
        this._autoplay = false;
        this._loop = false;
    }

    /**
     * Gets the src attribute value.
     */
    get src() {
        return this.getAttribute('src') || '';
    }

    /**
     * Sets the src attribute value
     * This will trigger setAttribute("src", ...)
     * which can be monitored by bindings.
     */
    set src(value) {
        if (value) {
            this.setAttribute('src', value);
        } else {
            this.removeAttribute('src');
        }
    }

    /**
     * Gets the current playback time in seconds
     */
    get currentTime() {
        return this._currentTime;
    }

    /**
     * Sets the current playback time in seconds
     */
    set currentTime(value) {
        const newTime = Math.max(0, Math.min(value, this._duration || 0));
        if (this._currentTime !== newTime) {
            this._currentTime = newTime;
        }
    }

    /**
     * Gets whether the video is paused
     */
    get paused() {
        return this._paused;
    }

    /**
     * Gets/sets autoplay attribute
     */
    get autoplay() {
        return this._autoplay;
    }

    set autoplay(value) {
        this._autoplay = Boolean(value);
        if (value) {
            this.setAttribute('autoplay', '');
        } else {
            this.removeAttribute('autoplay');
        }
    }

    /**
     * Gets/sets loop attribute
     */
    get loop() {
        return this._loop;
    }

    set loop(value) {
        this._loop = Boolean(value);
        if (value) {
            this.setAttribute('loop', '');
        } else {
            this.removeAttribute('loop');
        }
    }

    /**
     * Loads the video
     * This method can be overridden by bindings
     * to send commands to devices.
     */
    load() {
        this._currentTime = 0;
        this._ended = false;
        this._duration = 20; // Default duration for video-sim
    }

    /**
     * Plays the video
     * This method can be overridden by bindings
     * to send commands to IoT devices.
     */
    play() {
        if (!this._paused) {
            return Promise.resolve();
        }

        this._paused = false;
        this._ended = false;
        
        return Promise.resolve();
    }

    /**
     * Pauses the video
     * This method can be overridden by bindings
     * to send commands to IoT devices.
     */
    pause() {
        if (this._paused) {
            return;
        }

        this._paused = true;
    }

    /**
     * Seeks to a specific time
     */
    seek(time) {
        this.currentTime = time;
    }
}

/**
 * Retail Elements Collection
 */
const retailElements = new HTMLElementCollection();

retailElements.add('iot-aisle', HTMLIoTAisleElement);
retailElements.add('iot-audio', HTMLIoTAudioElement);
retailElements.add('iot-basket', HTMLIoTBasketElement);
retailElements.add('iot-button', HTMLIoTButtonElement);
retailElements.add('iot-column', HTMLIoTColumnElement);
retailElements.add('iot-compartment', HTMLIoTCompartmentElement);
retailElements.add('iot-cubby', HTMLIoTCubbyElement);
retailElements.add('iot-customer', HTMLIoTCustomerElement);
retailElements.add('iot-display-unit', HTMLIoTDisplayUnitElement);
retailElements.add('iot-endcap', HTMLIoTEndcapElement);
retailElements.add('iot-gondola', HTMLIoTGondolaElement);
retailElements.add('iot-item', HTMLIoTItemElement);
retailElements.add('iot-line', HTMLIoTLineElement);
retailElements.add('iot-podium', HTMLIoTPodiumElement);
retailElements.add('iot-room', HTMLIoTRoomElement);
retailElements.add('iot-shelf', HTMLIoTShelfElement);
retailElements.add('iot-shelving-unit', HTMLIoTShelvingUnitElement);
retailElements.add('iot-tile', HTMLIoTTileElement);
retailElements.add('iot-video', HTMLIoTVideoElement);
