const registerApi =  (datas) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  sessionStorage.setItem('email',datas.email)
  var raw = JSON.stringify(datas);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  const data = fetch(process.env.REACT_APP_URL_API + '/users', requestOptions)
    .then(response => response.json())
    .then(result =>{return result})
    .catch(error => console.log('error', error));
    return data
};
export default registerApi