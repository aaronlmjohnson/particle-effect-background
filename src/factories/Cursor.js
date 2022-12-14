export const Cursor = ()=>{ //make this into useCursor custom hook
    let x = 0;
    let y = 0;

    const getMousePos = (canvas, e) => {
        const rect = canvas.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

        //console.log(`${x}|${y}`)
    }
    return{ getMousePos, x}
}
