import { useEffect } from "react";

const PixelCanvas = ()=>{
    useEffect(()=>{
        const canvas = document.getElementById("pixel-canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);
    
    return (
        <canvas id="pixel-canvas"></canvas>
    );
};

export default PixelCanvas;