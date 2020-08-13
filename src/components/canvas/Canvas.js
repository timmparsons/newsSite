import React from 'react';

const Canvas = () => {

  const startDrawing = () => {

  }

  const finishDrawing = () => {

  }

  const draw = () => {
    
  }

return (
  <canvas 
    onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    onMouseMove={draw}/>
)
}

export default Canvas;