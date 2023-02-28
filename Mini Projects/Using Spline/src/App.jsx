import React, { useRef } from "react"
import Spline from "./Spline"
import anime from "animejs"
function App() {
  const cube = useRef()

  function moveCube(direction) {
    if (!cube.current) {
      return
    }

    const newPosition = { ...cube.current.position }
    switch (direction) {
      case "x":
        newPosition.x += 100
        break
      case "y":
        newPosition.y += 100
        break
      case "z":
        newPosition.z += 100
        break
    }

    anime({
      targets: cube.current.position,
      ...newPosition,
      duration: 500
    })
  }

  return (
    <>
      <div className="buttons">
        <button type="button" onClick={() => moveCube("x")}>
          Move in x axis
        </button>
        <button type="button" onClick={() => moveCube("y")}>
          Move in y axis
        </button>
        <button type="button" onClick={() => moveCube("z")}>
          Move in z axis
        </button>
      </div>
      <Spline
        scene="https://prod.spline.design/HeuUc3UJAiNn3bPX/scene.splinecode"
        onLoad={spline => {
          cube.current = spline.findObjectByName("Cube")
        }}
      />
    </>
  )
}

export default App
