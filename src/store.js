import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from './reducers/orderReducer';

const initialState = {

};

const  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

 export default store;