import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";


// Login - get user token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost/api-myoffer/public/api/auth/login", userData)
    .then(res => {    
      const token  = res.data.token;      
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthorizationToken(token);
      history.push("/admin/dashboard")
      //const decoded = jwt_decode(token);    
      // Set current user
      //dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};


// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthorizationToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

/*export function login(data) {
  return dispatch => {
    return axios.post('http://localhost/api-myoffer/public/api/auth/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      //dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}*/