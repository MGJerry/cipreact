// src/actions/dProduct.js
import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'PRODUCT_CREATE',
    UPDATE: 'PRODUCT_UPDATE',
    DELETE: 'PRODUCT_DELETE',
    FETCH_ALL: 'PRODUCT_FETCH_ALL',
    FETCH_BY_ID: 'PRODUCT_FETCH_BY_ID',
}

export const fetchAll = () => dispatch => {
    //get api req.
    api.dProduct().fetchAll()
    .then(response => {
        // console.log(response.data)
        //dispatch req.
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}

export const fetchById = (id) => dispatch => {
    //get api req.
    api.dProduct().fetchById(id)
    .then(response => {
        // console.log(response.data)
        //dispatch req.
        dispatch({
            type: ACTION_TYPES.FETCH_BY_ID,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    //get api req.
    api.dProduct().create(data)
    .then(response => {
        //dispatch req.
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: response.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const update = (data, onSuccess) => dispatch => {
    //get api req.
    api.dProduct().update(data)
    .then(response => {
        //dispatch req.
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: response.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    //get api req.
    api.dProduct().delete(id)
    .then(response => {
        //dispatch req.
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}