import "./Pixel.css";
import { useEffect } from 'react';

const Pixel = ({x, y})=>{
    const pixel = <span className="pixel" id={`pixel-${x}-${y}`}></span>;
    const coords = [x, y];
    const xdir = Math.random() > .49 ? -1 : 1;
    const ydir = Math.random() > .49 ? -1 : 1;

    const setPosition = (x, y)=>{
        document.getElementById(`pixel-${x}-${y}`).style.top = `${coords[1]}px`;
        document.getElementById(`pixel-${x}-${y}`).style.left = `${coords[0]}px`;
    }

    const setColor = (x, y, hex)=>{
        const color = Math.random() > 0.69 ? "#FF0000" : "#0000FF";
        document.getElementById(`pixel-${x}-${y}`).style.background = color;
    }

    const move = (x, y)=>{
        document.getElementById(`pixel-${x}-${y}`).style.left = `${coords[0] += .5 * xdir}px`;
        document.getElementById(`pixel-${x}-${y}`).style.top = `${coords[1] += .5 * ydir}px`;
    }


    useEffect(()=>{
        setPosition(x, y);
        setColor(x, y, "hex");
        
        
        setInterval(() => {
            move(x, y);
                
          }, 1000 / 60);
    },[]);
 
    return (
        pixel
    )
}

export default Pixel;