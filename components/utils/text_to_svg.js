const TextToSVG = require( 'text-to-svg' );
const textToSVG = TextToSVG.loadSync( '../../public/fonts/CourierPrime-Regular.ttf' );
const attributes = { fill: 'white', stroke: 'white' };
const options = { x: 0, y: 0, fontSize: 16, anchor: 'top', attributes: attributes };
const svg = textToSVG.getSVG( 'sebastian.remm@gmail.com', options );
console.log( svg );