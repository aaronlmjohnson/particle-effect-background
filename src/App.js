import React, { useEffect, useState } from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixels } from './factories/Pixels';
import { Pixel } from './factories/Pixel';
import useCanvas from './customHooks/useCanvas';

function App() {
  const CANVAS_HEIGHT = window.innerHeight;
  const CANVAS_WIDTH = window.innerWidth;
  const pixel1 = Pixel(10, 10, CANVAS_WIDTH, CANVAS_HEIGHT, "#0000FF");
  const draw = (ctx, x, y, hex="")=>{
    ctx.fillStyle = hex;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  const canvasRef  = useCanvas(draw, CANVAS_WIDTH, CANVAS_HEIGHT, [pixel1]);


  // useEffect(()=>{
  //   const pixels = Pixels(100, CANVAS_WIDTH, CANVAS_HEIGHT);

  // })
  //restructure how Pixels and pixel work
  //shouldn't need the ctx or canvas intially


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
