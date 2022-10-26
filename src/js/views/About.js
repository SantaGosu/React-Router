import React, {useContext} from 'react';
import { Context } from "../store/appContext";


export const About = () => {
     const { store, actions } = useContext(Context);
console.log(store)
    return ( <>
    <h1> hello </h1>
    </>
    );
}