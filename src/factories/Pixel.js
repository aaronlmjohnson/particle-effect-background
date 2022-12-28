export const Pixel = (x, y, canvasWidth, canvasHeight, hex)=>{
    let _posX = x; 
    let _posY = y;
    let directionX = Math.random() < .49 ? -1 : 1;
    let directionY = Math.random() < .49 ? -1 : 1;
    const speed = (Math.random()* .1) + .1;
    let _hex = hex;
    let _nearbyPixels = [];
    const _boundryRadius = 40;

    const render = (ctx, cursor)=>{
        ctx.fillStyle = _hex;
        ctx.beginPath();
        ctx.arc(_posX, _posY, 1.5, 0, 2 * Math.PI);
        ctx.fill();
        if(isPixelInbounds(cursor.x, cursor.y))_renderBoundry(ctx);
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

    const isPixelInbounds = (x, y)=>{
        const d = Math.sqrt(Math.pow(Math.abs((x - _posX)), 2) + Math.pow(Math.abs((y - _posY)), 2));
        if(d <= _boundryRadius ) return true;
    }

    const move = (x, y)=>{
        _posX += (directionX * x) * speed;
        _posY += (directionY * y) * speed;
    }

    const setNearbyPixels = (arr)=> _nearbyPixels = arr;
    const getNearbyPixels = ()=> _nearbyPixels; 

    const getX = ()=> _posX;
    const getY = ()=> _posY;

    const isOutOfBounds = ()=> _posX < 0 || _posX > canvasWidth || _posY < 0 || _posY > canvasHeight; 
    
    return{
        render,
        applyColor,
        move,
        isOutOfBounds,
        getX,
        getY,
        isPixelInbounds,
        setNearbyPixels,
        getNearbyPixels,
    }

}
