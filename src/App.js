import React, { useEffect, useState } from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixels } from './factories/Pixels';

function App() {
  const [cursor, setCursor] = useState({});
  const [pixelCanvas, setPixelCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  
  let pixels = null;

  const getMousePos = (canvas, e) => {
    if(!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursor({x, y});
  }

  useEffect(()=>{
    setPixelCanvas(document.getElementById("pixel-canvas"));
    if(pixelCanvas) setCtx(pixelCanvas.getContext("2d"));
  });

  useEffect(()=>{
    if(ctx) pixels = Pixels(100, pixelCanvas, ctx, cursor);
    setInterval(()=>{
      if(ctx) ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
      if(pixels) pixels.render();
    }, 1000 / 60);
  }, [ctx]);

  return (
    <div className="App">
      <PixelCanvas getMousePos = {getMousePos}/>
    </div>
  );
}

export default App;
