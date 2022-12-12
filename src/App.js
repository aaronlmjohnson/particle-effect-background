import { useEffect } from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixels } from './factories/Pixels';

function App() {
  
  
  useEffect(()=>{
    const pixelCanvas = document.getElementById("pixel-canvas");
    const ctx = pixelCanvas.getContext("2d");
    const pixels = Pixels(15, pixelCanvas, ctx);
    
    setInterval(()=>{
      ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
      pixels.getPixels().map((pixel)=>{
        pixel.move(1, 1);
        pixel.render();
      })
      
    }, 1000 / 60);
  }, []);

  return (
    <div className="App">
      <PixelCanvas />
    </div>
  );
}

export default App;
