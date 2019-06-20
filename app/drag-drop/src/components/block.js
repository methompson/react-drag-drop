import React from 'react';

const block = (props) => {

    return (
        <div
            className='block'
            onMouseDown={ (ev) => {
                props.startDrag(ev.target);
            }  }
            onMouseUp={ (ev) => {
                props.stopDrag(ev.target);
            } }
        >
            Block
        </div>
    );
}

export default block;