import React, { Component } from 'react';
import { connect } from 'react-redux';

import dispatches from '../reducers/dispatches';
import Block from '../components/block';

class Blocks extends Component {

    startDrag(el) {
        el.classList.add('highlight');
    }

    stopDrag(el) {
        el.classList.remove('highlight');
    }

    makeId() {
        //Random character ID creator.
        //Not cryptographically secure. Simply for use with making unique IDs
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 16; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    addNewBlock() {

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

        console.log(this.props.blocks);

    }

    render(){
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
                    <Block
                        startDrag={ this.startDrag }
                        stopDrag={ this.stopDrag }
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks,
    };
}

export default connect(mapStateToProps)(Blocks);