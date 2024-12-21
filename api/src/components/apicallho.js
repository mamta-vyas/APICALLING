// below is only function not a component
export const getPosts = async() => {
 
    const data = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: "GET",
    });
    
   return  await data.json();

}

export const userPosts = async() => {
    const data = await fetch('https://randomuser.me/api/', {
        method: "GET",
    });

    return await data.json();
}