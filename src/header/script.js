// // main();
// window.onload = main;
//
// //
// // start here
// //
// function main() {
//     return;
//     const canvas = document.getElementById("gl-canvas");
//     //   const canvas = document.createElement('canvas');
//     // Initialize the GL context
//     const gl = canvas.getContext("webgl");
//
//     // Only continue if WebGL is available and working
//     if (gl === null) {
//         alert(
//         "Unable to initialize WebGL. Your browser or machine may not support it.",
//         );
//         return;
//     }
//
//     gl.clearColor(1.0, 1.0, 1.0, 0.0);
//     // Clear the color buffer with specified clear color
//     gl.clear(gl.COLOR_BUFFER_BIT);
// }

import { JSONCanvasViewer, parser, fetchCanvas, Minimap } from 'https://unpkg.com/json-canvas-viewer/dist/chimp.js';
// import { Minimap } from 'cdn://unpkg.com/json-canvas-viewer/modules/chimp.js';

// function fetchCanvas(path) {
// 	return (fetch(path).then((res) => res.json()));
// }
var a = document.getElementsByClassName("obsidian-canvas");
console.log(a)

for (var i = 0; i < a.length; i++)
{
    // Get referenced chart.
    var current_canvas = await fetchCanvas(a[i].id);
    console.log(current_canvas)

    new JSONCanvasViewer({
        container: a[i], // The element to attach the viewer to
        canvas: current_canvas,  // remember to prepare your canvas
        markdownParser: parser,
        theme: 'dark'
    }, [Minimap]);
}
