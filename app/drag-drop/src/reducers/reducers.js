import dispatches from '../reducers/dispatches';

const initialState = {
    blocks: {},
};

let reducers = {};

reducers.rootReducer = (state = initialState, action) => {
    //console.log(state);

    switch(action.tyle){
        case dispatches.ADD_NEW_BLOCK:
            let blocks = {
                ...state.blocks
            };
            blocks[action.id] = action.newBlock;
            return state;
        default:
            //Nothing now
    }

    return state;
};

export default reducers;