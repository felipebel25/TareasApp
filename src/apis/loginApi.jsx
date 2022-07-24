const loginApi = async (formValues) => {
  const values = formValues;
  const response = await fetch(process.env.REACT_APP_URL_API + "/auth/login/", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  let data = await response.json();
  localStorage.setItem("usuario", JSON.stringify(data));
  return data;
};
export default loginApi;
