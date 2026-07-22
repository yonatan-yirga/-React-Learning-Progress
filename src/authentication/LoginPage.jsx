import {
useState
}
from "react";


import { useLogin
}
from "./useLogin";



export default function LoginPage(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const loginMutation = useLogin();



function handleSubmit(e){


e.preventDefault();
if(!email || !password){
    alert("Please enter email and password");
    return;
}



loginMutation.mutate({

    email: email,
    password: password

});


}




return (

<div>


<h1>
Login
</h1>



<form onSubmit={handleSubmit}>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

/>



<br/>

<br/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

/>



<br/>

<br/>



<button
type="submit"
>

{

loginMutation.isPending

?

"Logging..."

:

"Login"

}


</button>



</form>


</div>

);


}