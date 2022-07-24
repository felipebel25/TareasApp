const createTodo = async (dataProp, token, id) => {
  const response = await fetch(process.env.REACT_APP_URL_API + "/todo/", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-type": "application/json",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      Authorization: `Bearer ${token}`, // notice the Bearer before your token
    },
    body: JSON.stringify({ name: dataProp, estatus: false, userId: id }),
  });
  const data = response.json();
  return data;
};
export default createTodo;
