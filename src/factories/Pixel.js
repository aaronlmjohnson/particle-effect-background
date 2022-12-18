export const Pixel = (x, y, canvasWidth, canvasHeight, hex)=>{
    let _posX = x; 
    let _posY = y;
    let directionX = Math.random() < .49 ? -1 : 1;
    let directionY = Math.random() < .49 ? -1 : 1;
    const speed = (Math.random()* .1) + .1;
    let _hex = hex;
    const _boundryRadius = 40;

    const render = (ctx)=>{
        ctx.fillStyle = _hex;
        ctx.beginPath();
        ctx.arc(_posX, _posY, 1.5, 0, 2 * Math.PI);
        ctx.fill();
        //_renderBoundry();
    }

    const applyColor = (hex, ctx)=>{
        ctx.fillStyle = hex;
        ctx.fill();
        ctx.strokeStyle= hex;
        ctx.stroke();
    }

    const _renderBoundry = (ctx)=>{
        ctx.beginPath();
        ctx.arc(_posX, _posY, _boundryRadius, 0, 2 * Math.PI);
        ctx.stroke();
        
    }

    const isCursourInbounds = (cursor)=>{
        console.log(cursor);
    }

    const move = (x, y)=>{
        _posX += (directionX * x) * speed;
        _posY += (directionY * y) * speed;
    }

    const isOutOfBounds = ()=> _posX < 0 || _posX > canvasWidth || _posY < 0 || _posY > canvasHeight; 
    
    return{render, applyColor, move, isOutOfBounds}
}
