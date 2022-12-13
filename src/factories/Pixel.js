export const Pixel = (x, y, hex, ctx, canvas)=>{
    let _posX = x; 
    let _posY = y;
    const _canvas = canvas;
    let directionX = Math.random() < .49 ? -1 : 1;
    let directionY = Math.random() < .49 ? -1 : 1;
    const speed = (Math.random()* .1) + .1;
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
        _posX += (directionX * x) * speed;
        _posY += (directionY * y) * speed;
    }

    const isOutOfBounds = ()=> _posX < 0 || _posX > _canvas.width|| _posY < 0 || _posY > _canvas.height; 

    render(x, y);
    
    return{render, applyColor, move, isOutOfBounds}
}
