import { useEffect, useRef } from 'react';
const useCanvas = (width, height, [...drawables])=>{
    const canvasRef = useRef(null);

    const render = (ctx, canvas)=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawables.forEach((drawable)=>{
            drawable.render(ctx);
        })
    }

    const update = (ctx, canvas, animationFrameId)=>{
        render(ctx, canvas);
        drawables.forEach((drawable)=>{
            drawable.move(1, 1);
        })

        animationFrameId = window.requestAnimationFrame(()=>update(ctx, canvas));
    }

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d'); 
        let animationFrameId;
        update(ctx, canvasRef.current, animationFrameId);

        return ()=>{
            canvas.cancelAnimationFrame(animationFrameId);
        }
    }, []);
    
    return canvasRef;
}

export default useCanvas;