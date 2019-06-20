import React, { Component } from 'react';
import { connect } from 'react-redux';

import dispatches from '../reducers/dispatches';
import Block from '../components/block';

class Blocks extends Component {

    activateDrag() {
        console.log("Hey!");
    }

    render(){
        return (
            <Block
                activateDrag={ this.activateDrag }
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Blocks);