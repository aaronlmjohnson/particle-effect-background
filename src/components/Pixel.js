import "./Pixel.css";
import { useEffect } from 'react';

const Pixel = ({x, y})=>{
    const pixel = <span className="pixel" id={`pixel-${x}-${y}`}></span>;

    const setPosition = (x, y)=>{
        document.getElementById(`pixel-${x}-${y}`).style.top = `${y}px`;
        document.getElementById(`pixel-${x}-${y}`).style.left = `${x}px`;
    }

    useEffect(()=>{
        setPosition(x, y);
    });
   
    return (
        pixel
    )
}

export default Pixel;