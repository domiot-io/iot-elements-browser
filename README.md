# HTML/DOM IoT Elements for Browser

Collections of HTML/DOM IoT elements for browser environments by domain (home, retail, hospitality, etc.).

## Elements

Elements refer to a single node in the HTML document structure, typically representing part of the logical structure (e.g. `<iot-room></iot-room>`, `<iot-door/>`).

Element classes implement their specific behaviors. For example, a door element should fire a `change` event when its state changes from locked to unlocked and vice versa.

Elements are organized by domain because their meaning may change depending on the domain of application.

## Installation

Include the domain-specific element scripts in your HTML:

```
<!-- Choose domain-specific collections -->
<script src="retail-elements.js"></script>
<script src="home-elements.js"></script>
<script src="hospitality-elements.js"></script>
```

After including the scripts, the element collections are available globally.

## Usage

```
<html>
<head>
    <script src="retail-elements.js"></script>
    <script src="iot-bindings.js"></script>
    <script src="bdcom.js"></script>
    <script src="domiot-browser.js"></script>
</head>

<iot-section style="display:none;">
    <iot-aisle id="aisle6" name="Coffee, Hot Beverages, Cookies & Chocolate">
        <iot-ibits-button-binding id="a6ButtonBinding" location="/dev/ihubx24-sim0">
        <iot-obits-color-binding id="a6ColorBinding" channels-per-element="2" colors-channel="white;blue" location="/dev/ohubx24-sim0">

        <iot-button id="a6Product1Button" shelving-unit-id="a6L1" binding="a6ButtonBinding">
        <iot-button id="a6Product2Button" shelving-unit-id="a6L2" binding="a6ButtonBinding">

        <iot-shelving-unit id="a6L1" name="Ground Coffee" video-src="videos/coffee-beans-by-Mixkit.mp4" style="color:white;" binding="a6ColorBinding">
        <iot-shelving-unit id="a6L2" name="Coffee Pods & K-Cups" video-src="videos/coffee-machine-by-Coverr.mp4" style="color:white;" binding="a6ColorBinding">


    </iot-aisle>
</iot-section>

<body>
    <video id="fullscreenVideo" muted></video>
</body>
<script>
    // Initialize DOMIoT with element collections
    DOMIoT([retailElements, iotBindings]);

    // Retrieve all the buttons of the aisle number 6 in order
    const buttons = document.querySelectorAll('#aisle6 iot-button');

    // Retrieve all the shelving units of the aisle number 6 in order
    const shelvingUnits = document.querySelectorAll('#aisle6 iot-shelving-unit');

    // Make each shelving unit to light up in blue when its button 
    // is pressed and play the corresponding video.
    // And make the rest of the shelving units to light up in white.
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        // light up in blue the corresponding shelving unit when a button is pressed
        // and play the corresponding video.
        button.addEventListener('press', (ev) => {
            const shelvingUnitId = ev.target.getAttribute('shelving-unit-id');
            if (!shelvingUnitId) return;

            const shelvingUnit = document.getElementById(shelvingUnitId);
            if (!shelvingUnit) return;

            // Change the color of the shelving unit to blue,
            // this changes the light color
            shelvingUnit.style.setProperty('color', 'blue');

            // Change the color of the rest of shelving units to white.
            for (let j = 0; j < shelvingUnits.length; j++) {
                if (shelvingUnits[j].id == shelvingUnitId) continue;
                shelvingUnits[j].style.setProperty('color', 'white');
            }

            // play video on a projector using HTML5 video
            fullscreenVideo.src = videoSrc;
            fullscreenVideo.loop = true;
            fullscreenVideo.load();
            fullscreenVideo.play();
        });
    }

    // ...
</script>
</html>
```

In this example, pressing a physical button causes the shelving unit to light up in blue and triggers a video to play on a projector using the HTML5 <video> element.

This example demonstrates how physical components can interact with web components.

## Create your collections using `HTMLElementCollection`

You can create your own collection of elements using `HTMLElementCollection`:

```javascript
const myElementCollection = new HTMLElementCollection();

myElementCollection.add('iot-aisle', HTMLIoTAisleElement);
myElementCollection.add('iot-shelving-unit', HTMLIoTShelvingUnitElement);
myElementCollection.add('iot-button', HTMLIoTButtonElement);
myElementCollection.add('iot-video', HTMLIoTVideoElement);
myElementCollection.add('iot-audio', HTMLIoTAudioElement);

// Initialize DOMIoT with custom collection
DOMIoT([myElementCollection, iotBindings]);
```

## Domain-specific collections

### Retail (`retailElements`)
`HTMLIoTAisleElement`

`HTMLIoTAudioElement`

`HTMLIoTBasketElement`

`HTMLIoTButtonElement`

`HTMLIoTColumnElement`

`HTMLIoTCompartmentElement`

`HTMLIoTCubbyElement`

`HTMLIoTCustomerElement`

`HTMLIoTDisplayUnitElement`

`HTMLIoTEndcapElement`

`HTMLIoTGondolaElement`

`HTMLIoTItemElement`

`HTMLIoTLineElement`

`HTMLIoTPodiumElement`

`HTMLIoTRoomElement`

`HTMLIoTShelfElement`

`HTMLIoTShelvingUnitElement`

`HTMLIoTTileElement`

`HTMLIoTVideoElement`

### Home (`homeElements`)
`HTMLIoTAudioElement`

`HTMLIoTCurtainElement`

`HTMLIoTLampElement`

`HTMLIoTRoomElement`

`HTMLIoTVideoElement`

`HTMLIoTWindowElement`

### Hospitality (`hospitalityElements`)
`HTMLIoTAudioElement`

`HTMLIoTButtonElement`

`HTMLIoTCurtainElement`

`HTMLIoTDoorElement`

`HTMLIoTLampElement`

`HTMLIoTRoomElement`

`HTMLIoTVideoElement`

`HTMLIoTWindowElement`

## License

MIT.