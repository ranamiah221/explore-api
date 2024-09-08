function loadPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>displayPost(data))
}
function displayPost(posts){
    const postContainer=document.getElementById("post-container")
    for(let post of posts){
        
        const postDiv=document.createElement('div')
        postDiv.classList.add("post")
        postDiv.innerHTML=`
        <h2>User Id: ${post.userId}</h2>
        <h3>Title: ${post.title}</h3>
        <p>Description: ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}
loadPost();