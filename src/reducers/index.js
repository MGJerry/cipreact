import { combineReducers } from "redux";
import { dCustomer } from "./dCustomer";
import { dProduct } from "./dProduct";
import { dTransaction } from "./dTransaction";
import { dTransactionDetail } from "./dTransactionDetail";

export const reducers = combineReducers({
    dCustomer: dCustomer,
    dProduct: dProduct,
    dTransaction: dTransaction,
    dTransactionDetail: dTransactionDetail,
})