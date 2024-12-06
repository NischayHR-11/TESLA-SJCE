import Navbar from "./Navbar"
import SplineViewer from "./Spline_Element"

function App() {

  const splineSceneUrl = "https://prod.spline.design/l3ATVUGuNCI6FSu5/scene.splinecode";  // Provided Spline URL.


  return (
    <>
      <Navbar></Navbar>
      <SplineViewer sceneUrl={splineSceneUrl} />
    </>
  )
}

export default App
