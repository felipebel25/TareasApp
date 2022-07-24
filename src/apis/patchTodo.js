const updateTodo = async (dataProp, token, id) => {


    const response = await fetch(`${process.env.REACT_APP_URL_API}/todo/${id}`, {
        method: 'PATCH',
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "Content-Type",
            'Content-type': 'application/json',
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
        body: JSON.stringify({ name: dataProp})
    })
    const data = response.json()

}
export default updateTodo;