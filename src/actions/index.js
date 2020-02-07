import http from './http'

//getUsers

const startGetUsers = () => { return { type: 'START_GET_USERS', ready: false } }
const completeGetUsers = (data) => { return { type: 'COMPLETE_GET_USERS', data } }
const errorGetUsers = (err) => { return { type: 'ERROR_GET_USERS', err } }

export const getUsers = () => {
    return (dispatch, getState) => {
        dispatch(startGetUsers());
        http.get('/users')
            .then((response) => {
                //console.log(response)
                dispatch(completeGetUsers(response.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(errorGetUsers(err));
            })
    }
}

export const addUser = (user, history) => {
    return (dispatch, getState) => {
        http
            .post("/users/store", user)
            .then(res => {
                console.log(res)
                //history.push("/admin/dashboard")
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const usersDelete = (listUsers, history) => {
    return (dispatch, getState) => {
        http
            .post("/users/list-delete", listUsers)
            .then(res => {
                console.log(res)                
            })
            .catch(err => {
                console.log(err)
            })
    }
}
