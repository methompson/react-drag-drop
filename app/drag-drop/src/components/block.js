import React from 'react';

const block = (props) => {

    return (
        <div
            onMouseDown={ props.activateDrag }
        >Block</div>
    );
}

export default block;