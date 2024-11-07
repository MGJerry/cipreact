// src/actions/api.js
import axios from "axios";

const baseUrl = "http://ec2-3-25-71-245.ap-southeast-2.compute.amazonaws.com:8080/api/";

export default {
    dCustomer(url = baseUrl + "Customer/") {
        return {
            fetchAll: () => axios.get(url + "getAllCustomer"),
            fetchById: (id) => axios.get(url + "getCustomerById?id=" + id),
            create: (newRecord) => axios.post((url + "createCustomer"), newRecord),
            update: (updateRecord) => axios.put((url + "updateCustomer"), updateRecord),
            delete: (id) => axios.delete(url + "deleteCustomer?id=" + id)
        };
    },
    dProduct(url = baseUrl + "Product/") {
        return {
            fetchAll: () => axios.get(url + "getAllProduct"),
            fetchById: (id) => axios.get(url + "getProductById?id=" + id),
            create: (newRecord) => axios.post((url + "createProduct"), newRecord),
            update: (updateRecord) => axios.put((url + "updateProduct"), updateRecord),
            delete: (id) => axios.delete(url + "deleteProduct?id=" + id)
        };
    },
    dTransaction(url = baseUrl + "Transaction/") {
        return {
            fetchAll: () => axios.get(url + "getAllTransaction"),
            fetchById: (id) => axios.get(url + "getTransactionById?id=" + id),
            create: (newRecord) => axios.post((url + "createTransaction"), newRecord),
            update: (updateRecord) => axios.put((url + "updateTransaction"), updateRecord),
            delete: (id) => axios.delete(url + "deleteTransaction?id=" + id)
        };
    },
    dTransactionDetail(url = baseUrl + "TransactionDetail/") {
        return {
            fetchAll: () => axios.get(url + "getAllTransactionDetail"),
            fetchById: (id) => axios.get(url + "getTransactionDetailById?id=" + id),
            create: (newRecord) => axios.post((url + "createTransactionDetail"), newRecord),
            update: (updateRecord) => axios.put((url + "updateTransactionDetail"), updateRecord),
            delete: (id) => axios.delete(url + "deleteTransactionDetail?id=" + id)
        };
    }
};
