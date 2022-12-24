import React from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixels } from './factories/Pixels';
import useCanvas from './customHooks/useCanvas';

function App() {
  const CANVAS_HEIGHT = window.innerHeight;
  const CANVAS_WIDTH = window.innerWidth;
  const pixels  = Pixels(10, CANVAS_WIDTH, CANVAS_HEIGHT)
  const canvasRef  = useCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, [pixels]);

  return (
    <div className="App">
      <PixelCanvas canvasRef = {canvasRef}  />
    </div>
  );
}

export default App;


