import { getToken } from "./Token";


export default function Dashboard(){


const token = getToken();



return (

<div>


<h1>
Dashboard
</h1>



<p>

Your Token:

{token}

</p>


</div>

);


}