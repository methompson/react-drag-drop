import dispatches from '../reducers/dispatches';

const initialState = {
    blocks: {},
    draggedEl: '',
    dragOverEl: '',
    dragProp: null,
};

let reducers = {};

reducers.rootReducer = (state = initialState, action) => {
    //console.log(state);

    switch(action.type){
        case dispatches.ADD_NEW_BLOCK:

            let blocks = {
                ...state.blocks
            };
            blocks[action.id] = action.newBlock;
            return {
                ...state,
                blocks: blocks
            };

        case dispatches.ADD_DRAGGABLE_ELEMENT:
            return {
                ...state,
                draggedEl: action.draggedEl
            };

        case dispatches.REMOVE_DRAGGABLE_ELEMENT:
            return {
                ...state,
                draggedEl: '',
            };

        case dispatches.ADD_DRAG_OVER:
            return {
                ...state,
                dragOverEl: action.dragOverEl,
                dragProp: action.dragProp
            };

        case dispatches.REMOVE_DRAG_OVER:
            return {
                ...state,
                dragOverEl: '',
                dragProp: null,
            };

        default:
            //Nothing now
    }

    return state;
};

export default reducers;
