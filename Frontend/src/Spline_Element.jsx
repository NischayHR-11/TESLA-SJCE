import React, { useEffect } from 'react';
import "./Spline_Element.css"

const SplineViewer = ({ sceneUrl }) => {
  useEffect(() => {
    // Dynamically load the Spline viewer script from CDN
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
    script.type = 'module';
    script.onload = () => {
      console.log('Spline viewer script loaded');

      // Access the <spline-viewer> element and wait for it to load
      const viewerElement = document.querySelector('spline-viewer');
      if (viewerElement) {
        viewerElement.addEventListener('load', () => {
          // Ensure we target the Shadow DOM and look for the button
          const shadowRoot = viewerElement.shadowRoot;

          if (shadowRoot) {
            // Attempt to select the button inside the Shadow DOM
            const buttonElement = shadowRoot.querySelector('button');
            if (buttonElement) {
              // Option 1: Remove the button element
              buttonElement.remove();
              
              // Option 2: Alternatively, you can hide the button element
              // buttonElement.style.display = 'none';
            }
          }
        });
      }
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Create the <spline-viewer> element and set its URL
    const splineViewerElement = document.createElement('spline-viewer');
    splineViewerElement.setAttribute('url', sceneUrl);

    // Append the <spline-viewer> element to the DOM
    document.getElementById('spline-viewer-container').appendChild(splineViewerElement);

    // Clean up when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.getElementById('spline-viewer-container').removeChild(splineViewerElement);
    };
  }, [sceneUrl]); // Depend on sceneUrl so the component updates properly

  return <div id="spline-viewer-container"></div>;
};

export default SplineViewer;