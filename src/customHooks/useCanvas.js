import React, { useEffect, useRef } from 'react';


const useCanvas = (draw)=>{
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d'); 
        let animationFrameId;
        let x = 10;
        let y = 10;

        const render = ()=>{
            ctx.clearRect(0, 0, canvas.height, canvas.width);
            draw(ctx, x+=1, y+=1, "#00FF00");

            animationFrameId = window.requestAnimationFrame(render);
        }

        render();

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw]);
    
    return canvasRef;
}

export default useCanvas;