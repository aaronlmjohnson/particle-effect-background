import React, { useEffect, useRef } from 'react';


const useCanvas = (draw, width, height,[...drawables])=>{
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d'); 
        let animationFrameId;

        const update = ()=>{
            render();

            drawables.forEach((drawable)=>{
                drawable.move(1, 1);
            })

            animationFrameId = window.requestAnimationFrame(update);
        }
        
        const render = ()=>{
            ctx.clearRect(0, 0, canvas.height, canvas.width);

            drawables.forEach((drawable)=>{
                drawable.render(ctx);
            })
        }

        update();

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);
    
    return canvasRef;
}

export default useCanvas;