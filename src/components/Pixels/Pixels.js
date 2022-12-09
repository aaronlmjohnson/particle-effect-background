
import Pixel from "../Pixel/Pixel";


const Pixels = ()=>{
    const pixels = [];
    const MAX_HEIGHT = window.innerHeight;
    const MAX_WIDTH = window.innerWidth;

    for(let i = 0; i < 1000; i++){
        const x = Math.ceil(Math.random() * MAX_WIDTH);
        const y = Math.ceil(Math.random() * MAX_HEIGHT);
        pixels.push([x, y])
    }

    return (
        <div>
            {pixels.map((coords)=>{
                return <Pixel x={coords[0]} y={coords[1]} />
            })}
        </div>
    )
}

export default Pixels;