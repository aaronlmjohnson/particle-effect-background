import React, { useEffect, useState } from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixels } from './factories/Pixels';
import useCanvas from './customHooks/useCanvas';

function App() {
  const draw = (ctx, x, y, hex="")=>{
    ctx.fillStyle = hex;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  const canvasRef  = useCanvas(draw);

  const getMousePos = (canvas, e) => {
    if(!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    //setCursor({x, y});
  }

  


  return (
    <div className="App">
      <PixelCanvas getMousePos = {getMousePos} canvasRef = {canvasRef}/>
    </div>
  );
}

export default App;
