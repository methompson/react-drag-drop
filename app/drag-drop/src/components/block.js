import React from 'react';

const block = (props) => {

    let draggable = false;
    let classes = '';
    if (props.id === props.dragEl){
        draggable = true;
        classes += ' highlight ghost'
    }

    if (props.id === props.dragOverEl && props.id !== props.dragEl){
        
        classes += props.dragProp > 0.5 ? ' right-redline' : ' left-redline'
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

            onDragOver={ (ev) => {
                let t = ev.target;
                let dim = t.getBoundingClientRect();

                let posInEl = ev.clientX - dim.x;
                let proportion = posInEl / dim.width;

                props.addDragOver(ev, props.id, proportion);
            }}

            onDragLeave={ props.removeDragOver }
            draggable={draggable}
        >
            Block {props.id}
        </div>
    );
}

export default block;
