

const param = new URLSearchParams(window.location.search) //Reciving Query param from Url
const id = param.get("postId")  //extract Query param
showFullPost(id)


function showFullPost(id) {
  axios.get(`${baseUrl}/posts/${id}`)
  .then(function (response) {
    let post = response.data.data

    
        if(typeof(post.author["profile_image"]) != "string") {
            post.author["profile_image"] = "./imgs/no-img.png"
        }
        if(post.title == null ) {
            post.title = ""
        }

        let content = `<div class="post cursor-pointer mb-12 bg-white ">
        <div class="post-header" >
          <img class="inline-block mr-2 rounded-full w-12 h-12" src=${post.author["profile_image"]} alt="">
          <span class=" text-lg font-medium">${post.author.name}</span>
        </div>
        <img class=" mt-4 shadow-md rounded-md w-full" src=${post.image} alt="">
        <p class=" p-1">${post["created_at"]}</p>
        <div class="post-content my-3">
          <h3 class="text-xl font-medium">${post.title}</h3>
          <p>${post.body}</p>
        </div>
        <hr>
        <svg class="inline-block w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
        
        </svg>
        <p class="inline-block mt-3">(${post.comments_count}) Comments</p>

      </div>
      <!-- End post -->`
      if(document.querySelector(".show-post")) {
        console.log(document.querySelector(".show-post"))
        document.querySelector(".show-post").innerHTML += content
      }
      
    }
  )
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}
