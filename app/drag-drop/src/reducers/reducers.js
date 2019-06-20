import dispatches from '../reducers/dispatches';

const initialState = {};

let reducers = {};

reducers.rootReducer = (state = initialState, action) => {
    //console.log(state);

    switch(action.tyle){
        case dispatches.ADD_TO_CART:
            return state;
        default:
            //Nothing now
    }

    return state;
};

export default reducers;