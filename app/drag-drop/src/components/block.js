import React from 'react';

const block = (props) => {

    let draggable = false;
    let classes = '';
    if (props.id === props.dragEl){
        draggable = true;
        classes = ' highlight ghost'
    }

    return (
        <div
            key={props.id}
            className={'block' + classes }

            onMouseDown={ (ev) => {
                props.startDrag(ev, props.id);
            } }

            onMouseUp={ props.stopDrag }
            onDragEnd={ props.stopDrag }

            draggable={draggable}
        >
            Block {props.id}
        </div>
    );
}

export default block;
