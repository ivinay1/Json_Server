var container = document.querySelector('.all-blog-info')


const renderPosts = async() =>{

    let uri = 'http://localhost:3000/posts';

    const response = await fetch(uri);

    const posts = await response.json();

    // console.log(data);

    let template = '';

    posts.forEach((post) => {
        
        template += 
        `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p>${post.likes}</p>
                <a href = "/details.html">read more....</a>                
            </div>
        `;

    });

    container.innerHTML = template;

}


window.addEventListener('DOMContentLoaded',()=>{ renderPosts()});

