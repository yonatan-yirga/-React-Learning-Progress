import { getToken
}
from "./Token";


import LoginPage 
from "./LoginPage";



export default function ProtectedRoute(
{
children
}
){


const token = getToken();



if(!token){

return <LoginPage/>

}



return children;


}