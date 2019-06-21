import React, { Component } from 'react';
import { connect } from 'react-redux';

import dispatches from '../reducers/dispatches';
import Block from '../components/block';

class Blocks extends Component {

    componentDidMount() {
        document.onmouseup = this.stopDrag;
    }

    startDrag = (ev, id) => {
        if (ev.button !== 0){
            return;
        }

        this.props.dispatch({
            type: dispatches.ADD_DRAGGABLE_ELEMENT,
            draggedEl: id,
        });
    };

    stopDrag = () => {
        this.props.dispatch({
            type: dispatches.REMOVE_DRAGGABLE_ELEMENT,
        });
    };

    addDragOver = (ev, id, proportion) => {
        this.props.dispatch({
            type: dispatches.ADD_DRAG_OVER,
            dragOverEl: id,
            dragProp: proportion,
        });
    };

    removeDragOver = () => {

        this.props.dispatch({
            type: dispatches.REMOVE_DRAG_OVER,
        });
    };

    makeId = () => {
        //Random character ID creator.
        //Not cryptographically secure. Simply for use with making unique IDs
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 16; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    addNewBlock = () => {

        let id = this.makeId();
        let newBlock = {
            id: id,
            width: 0,
        };

        this.props.dispatch({
            type: dispatches.ADD_NEW_BLOCK,
            id: id,
            newBlock: newBlock
        });

    };

    render(){
        //simplifying the variable name
        let b = this.props.blocks;

        let blocks = Object.keys( b ).map( (block) => {
            return (
                <Block
                    key={ block }
                    id={ b[block].id }
                    dragEl={ this.props.draggedEl }
                    dragOverEl={this.props.dragOverEl}
                    startDrag={ this.startDrag }
                    stopDrag={ this.stopDrag }
                    addDragOver={this.addDragOver}
                    removeDragOver={this.removeDragOver}
                    dragProp={this.props.dragProp}
                />
            );
        });

        return (
            <div className="blocksContainer">
                <div>
                    <button
                        onClick={ this.addNewBlock }
                    >
                        Add New Block
                    </button>
                </div>
                <div>
                    {blocks}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks,
        draggedEl: state.draggedEl,
        dragOverEl: state.dragOverEl,
        dragProp: state.dragProp,
    };
}

export default connect(mapStateToProps)(Blocks);
