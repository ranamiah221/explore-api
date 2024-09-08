function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> displayUser(data))
}
function displayUser(users){
    const ul=document.getElementById("user-list")
      for(let user of users){
        const li= document.createElement('li')
        li.innerText=user.name;
        ul.appendChild(li)
      }
}