export async function login(user){

    const response = await fetch(
        "https://dummyjson.com/auth/login",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)

        }
    );


    if(!response.ok){

        throw new Error(
            "Invalid email or password"
        );

    }


    return response.json();

}