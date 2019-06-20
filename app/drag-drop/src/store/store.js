import { createStore } from "redux";

import reducers from "../reducers/reducers";

const store = createStore(reducers.rootReducer);

export default store;