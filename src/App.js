import { useEffect } from 'react';
import './App.css';
import PixelCanvas from './components/PixelCanvas/PixelCanvas';
import { Pixel } from './factories/Pixel';

function App() {
  
  useEffect(()=>{
    const pixelCanvas = document.getElementById("pixel-canvas");
    const ctx = pixelCanvas.getContext("2d");
    const pixel1 = Pixel(10, 10, "#FF0000", ctx);

    setInterval(()=>{
      ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
      pixel1.render();
      pixel1.move(1, 1);
      
      //pixel1.move(100, 10);
    }, 1000 / 60);
  }, []);

  return (
    <div className="App">
      <PixelCanvas />
    </div>
  );
}

export default App;
