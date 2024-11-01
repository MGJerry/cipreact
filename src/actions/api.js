import axios from "axios";
import { dCustomer } from "../reducers/dCustomer";
import { fetchAll } from "./dCustomer";

const baseUrl = "http://ec2-3-25-71-245.ap-southeast-2.compute.amazonaws.com:8080/api/";

export default {
    dCustomer(url = baseUrl + "Customer/") {
        return {
            fetchAll: () => axios.get(url + "getAllCustomer"),
            fetchById: (id) => axios.get(url + "getCustomerById" + id),
            create: (newRecord) => axios.post((url + "createCustomer"), newRecord),
            update: (updateRecord) => axios.put((url + "updateCustomer"), updateRecord),
            delete: (id) => axios.delete(url + "deleteCustomer?id=" + id)
        };
    }
};
