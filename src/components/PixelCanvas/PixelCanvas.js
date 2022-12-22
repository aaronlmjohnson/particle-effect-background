import Cursor from "../../factories/Cursor";
const PixelCanvas = ({canvasRef})=>{  
   
    return (
        <canvas id="pixel-canvas" ref={canvasRef} onMouseMove={(e)=> {
            Cursor.x = e.clientX;
            Cursor.y = e.clientY;
        }}>
        </canvas>
    );
};

export default PixelCanvas;