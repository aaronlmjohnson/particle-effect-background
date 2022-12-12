export const Pixel = (x, y, hex, ctx)=>{
    let _posX = x; 
    let _posY = y;
    let directionX = Math.random() < .49 ? -1 : 1;
    let directionY = Math.random() < .49 ? -1 : 1;
    let _hex = hex;

    const render = (hex="")=>{
        ctx.beginPath();
        ctx.arc(_posX, _posY, 1.5, 0, 2 * Math.PI);
        applyColor(_hex);
    }

    const applyColor = (hex)=>{
        ctx.fillStyle = hex;
        ctx.fill();
        ctx.strokeStyle= hex;
        ctx.stroke();
    }

    const move = (x, y)=>{
        _posX += directionX * x;
        _posY += directionY * y;
    }

    render(x, y);
    
    return{render, applyColor, move}
}
