import { Pixel } from "./Pixel";
import Cursor from '../factories/Cursor';

export const Pixels = (size, canvasWidth, canvasHeight)=>{
    
    let _pixels = [];
    const _edges = [];

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
            pixel.setNearbyPixels(_isPixelIntersecting(pixel));
            pixel.render(ctx, Cursor);
            traversePixelNodes(pixel, ctx);
        })
    }

    const _isPixelIntersecting = (pixel)=>{
        const pixelsArr = _pixels.filter(pixel2 => pixel2 !== pixel);
        return pixelsArr.filter((pixel2)=>{
            return pixel.isPixelInbounds(pixel2.getX(), pixel2.getY());
        })
    }

    const move =(x, y)=> _pixels.forEach(pixel=> pixel.move(1, 1))

    const addPixel = (mag = 0, dir = 0)=>{
        const vector = _randomVector();
        _pixels.push(Pixel(mag || vector.magnitude, dir || vector.direction, canvasWidth, canvasHeight, _randomHex()));
    }

    const filterInboundPixels = ()=> _pixels =_pixels.filter((pixel)=> !pixel.isOutOfBounds());
    // const nearbyEdges = (pixel) => {
    //     return pixel.getNearbyPixels().map((node) => [pixel, node])
    // };

    const traversePixelNodes = (pixel, ctx)=>{
        const nodes = pixel.getNearbyPixels();
        if(nodes.length < 1) return;
        nodes.forEach((node)=>{
            //*** check and see if edge already exists if so skip this node else do code below */
            //console.log(nearbyEdges(node));
            if(doesEdgeExist([node, pixel])) return;
            ctx.beginPath();
            ctx.moveTo(pixel.getX(), pixel.getY());
            ctx.lineTo(node.getX(), node.getY());
            ctx.stroke();
            _edges.push([pixel, node]);
            traversePixelNodes(node, ctx);            
        });
    }

    const arrayEquals = (a, b) => {
        if(!Array.isArray(a) && !Array.isArray(b)) return;
        if(a.length !== b.length) return;
        const sortedA = a.sort();
        const sortedB = b.sort();
        return a.every((val, index) => val === b[index]);
    }

    const doesEdgeExist = (newEdge) =>{
        if(_edges.length < 1) return;
        return _edges.find((edge)=>arrayEquals(edge, newEdge));
    }

    const getPixels = ()=> _pixels;


    _createPixels(); 
    
    return{ getPixels, render, move}
}

/*
    *******Drawing lines (edges) between pixel nodes*******
    
*/


