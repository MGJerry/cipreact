import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formatData = (data) => {
    const { dateOfBirth, ...otherData } = data;

    // Parse dateOfBirth if it exists
    const parsedDateOfBirth = dateOfBirth ? (
        dateOfBirth.getFullYear() + "-" + String(dateOfBirth.getMonth() + 1).padStart(2, '0') + "-" + String(dateOfBirth.getDate()).padStart(2, '0')
    ) : dateOfBirth;

    return {
        ...otherData,
        dateOfBirth: parsedDateOfBirth
    };
};

export const fetchAll = () => dispatch => {
    //get api req.
    api.dCustomer().fetchAll()
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

export const create = (data, onSuccess) => dispatch => {
    //prep data
    data = formatData(data)
    //get api req.
    api.dCustomer().create(data)
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
    //prep data
    data = formatData(data)
    //get api req.
    api.dCustomer().update(data)
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
    api.dCustomer().delete(id)
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


// export const create = data => {
//     return {
//         type: 'create',
//         payload: data
//     }
// }

// dispatch(create({firstName: ''}))