import { useEffect } from "react";

const PixelCanvas = ({getMousePos})=>{
    useEffect(()=>{
        const canvas = document.getElementById("pixel-canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);
    
    return (
        <canvas id="pixel-canvas" onPointerMove={(e)=> getMousePos(document.getElementById("pixel-canvas"), e)}>
        </canvas>
    );
};

export default PixelCanvas;