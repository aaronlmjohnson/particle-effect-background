import { useEffect } from "react";
import { Pixel } from "./Pixel";

export const Pixels = (size, canvasWidth, canvasHeight)=>{
    
    let _pixels = [];
    let canvas = null;
    let ctx = null;
    let cursor = null;

    const _randomHex = ()=>{
        const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hex = "#";

        for(let i = 0; i < 6; i++)
          hex += hexValues[Math.floor((Math.random() * 16))];
    
        return hex;
    }

    const _randomVector = ()=>{
        const magnitude = Math.ceil(Math.random() * canvasWidth);
        const direction = Math.ceil(Math.random() * canvasHeight);
        return {magnitude, direction};
    }
     
    const _createPixels = ()=>{
        for(let i = 0; i < size; i++) addPixel();
    }

    const render = (ctx)=>{
        if(_pixels.length < size) addPixel();
        filterInboundPixels();
        _pixels.forEach((pixel)=>{
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

    const getCursor = (cursor)=> cursor;

    //_createPixels(); 
    
    return{ getPixels, render, getCursor }
}
