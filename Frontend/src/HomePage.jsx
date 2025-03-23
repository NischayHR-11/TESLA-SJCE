import React from 'react';
import SplineViewer from "./Spline_Element"

function HomePage(){  
  const splineSceneUrl = "https://prod.spline.design/l3ATVUGuNCI6FSu5/scene.splinecode";  // Provided Spline URL.
    return(        
      <SplineViewer sceneUrl={splineSceneUrl} />
    );
}

export default HomePage