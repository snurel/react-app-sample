import {CounterType} from "../models/Counter.model";
import {LoginType} from "../models/Login.model";
import axios from 'axios';
import {UserActions} from "../models/Faq.model";

export const increment = () =>{
  return {
      type: CounterType.INC
  }
};

export const decrement = () =>{
  return {
      type: CounterType.DEC
  }
};

export const logIn = () =>{
    return {
        type: LoginType.SIGN_IN
    }
};

export const fetchUsers =  () => async dispatch =>  {
    try {
        dispatch({ type: UserActions.WAITING });
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: UserActions.FETCH, payload: data });
    }catch (e) {
        console.log("Error: " + e.message);
        dispatch({ type: UserActions.FAIL, payload: e });
    }
};
