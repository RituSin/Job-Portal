

export const registerData = (data) => 
{
    
    return async () => {
        const sendRequest = async () => {

            const response = await fetch(
                'https://jobs-api.squareboat.info/api/v1/auth/register',
                {
                    method:'PUT',
                    body: JSON.stringify(data)
                }
            )
    
            if(!response.ok){
                throw new Error("Error while registering.")
            }
        }

        try{
            await sendRequest();
        }
        catch{
            console.log("Registering of data failed!");
        }
    } 
    
}