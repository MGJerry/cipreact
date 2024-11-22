// src/actions/dTransaction.js
import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'TRANSACTION_CREATE',
    UPDATE: 'TRANSACTION_UPDATE',
    DELETE: 'TRANSACTION_DELETE',
    FETCH_ALL: 'TRANSACTION_FETCH_ALL',
    FETCH_BY_ID: 'TRANSACTION_FETCH_BY_ID',
}

export const fetchAll = () => dispatch => {
    //get api req.
    api.dTransaction().fetchAll()
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
    api.dTransaction().fetchById(id)
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
    api.dTransaction().create(data)
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
    api.dTransaction().update(data)
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
    api.dTransaction().delete(id)
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