const deleteTodo = async( token , id) =>{
    
    const response = await fetch(`${process.env.REACT_APP_URL_API}/todo/${id}`, {
            method: 'DELETE',
            headers: {
                "Access-Control-Allow-Origin":"http://localhost:3000",
                "Access-Control-Allow-Headers" : "Content-Type",
                'Content-type': 'application/json',
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
                'Authorization': `Bearer ${token}`, // notice the Bearer before your token
            },
        })
    const data = response.json()
    return data;
}
export default deleteTodo;