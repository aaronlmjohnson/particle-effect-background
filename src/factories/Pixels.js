import { useEffect } from "react";
import { Pixel } from "./Pixel";

export const Pixels = (size, canvas, ctx, cursor)=>{
    
    let _pixels = [];
    const _randomHex = ()=>{
        const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hex = "#";

        for(let i = 0; i < 6; i++)
          hex += hexValues[Math.floor((Math.random() * 16))];
    
        return hex;
    }

    const _randomVector = ()=>{
        const magnitude = Math.ceil(Math.random() * canvas.width);
        const direction = Math.ceil(Math.random() * canvas.height);
        return {magnitude, direction};
    }
     
    const _createPixels = ()=>{
        for(let i = 0; i < size; i++) addPixel();
    }

    const render = ()=>{
        if(_pixels.length < size) addPixel();
        filterInboundPixels();
        _pixels.map((pixel)=>{
            pixel.move(1, 1);
            pixel.render();
        })
    }

    const addPixel = ()=>{
        const vector = _randomVector();
        _pixels.push(Pixel(vector.magnitude, vector.direction, _randomHex(), ctx, canvas));
    }

    const filterInboundPixels = ()=> _pixels =_pixels.filter((pixel)=> !pixel.isOutOfBounds());

    const getPixels = ()=> _pixels;

    _createPixels(); 
    
    return{ getPixels, render }
}
