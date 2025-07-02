/**
 * Home IoT Elements
 */

class HTMLIoTAudioElement extends HTMLElement {
    constructor() {
        super();
    }
}

class HTMLIoTCurtainElement extends HTMLElement {
    constructor() {
        super();
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
 * Home Elements Collection
 */
const homeElements = new HTMLElementCollection();

homeElements.add('iot-audio', HTMLIoTAudioElement);
homeElements.add('iot-curtain', HTMLIoTCurtainElement);
homeElements.add('iot-lamp', HTMLIoTLampElement);
homeElements.add('iot-room', HTMLIoTRoomElement);
homeElements.add('iot-video', HTMLIoTVideoElement);
homeElements.add('iot-window', HTMLIoTWindowElement);
