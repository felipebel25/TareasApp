const getTodosApi = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/users/${id}`)
    const data = await response.json()
    // setTodos(data.todos)
    return data.todos
  }

  export default getTodosApi