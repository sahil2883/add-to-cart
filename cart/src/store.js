import { createStore } from "redux";
import rootreducer from "./redux/reducers/rootreducers";

const store = createStore(rootreducer);


export default store;