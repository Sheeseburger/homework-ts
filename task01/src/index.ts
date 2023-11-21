interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getAllPosts():Promise<IPost[]>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(res);
    const posts:IPost[] = await res.json() as IPost[];
    return posts;

}
function createPostDiv(post:IPost):HTMLElement {
    const divElement = document.createElement('div');
    const title = document.createElement('h3')
    title.textContent = post.id + ') ' + post.title;
    const body = document.createElement('p')
    body.textContent = post.body;
    const footer =document.createElement('p');
    footer.textContent = `Post id: ${post.id}. User id: ${post.userId}`
    divElement.appendChild(title);
    divElement.appendChild(body);
    divElement.appendChild(footer)
    return divElement;
}


function renderAllPosts(posts: IPost[], destination:string ="divForPosts"): void{
    const container = document.getElementById(destination);
    if (!container)
        return;
    posts.forEach(post =>{
        const postDiv = createPostDiv(post);
        container.appendChild(postDiv)
    })
    return;
}


window.onload = async () =>{
    const allPosts = await getAllPosts();
    renderAllPosts(allPosts);
}