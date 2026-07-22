import {
    useMutation
}
from "@tanstack/react-query";

import LoginPage from "./LoginPage";


import {
    login
}
from "./Authapi";

import { saveToken } from "./Token";



export function useLogin(){


return useMutation({



    mutationFn:login,



    onSuccess:(data)=>{


        saveToken(
            data.token
        );


        console.log(
            "Token saved",
            data.token
        );


    },



    onError:(error)=>{


        console.log(
            error.message
        );


    }



});



}