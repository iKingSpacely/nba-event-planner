//need to grab the comment, and fetch the form where the user are inputting the comments 

const newComment = async (event) => {
  console.log('working');  
  event.preventDefault();

    // const comment = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  console.log(body);
    if (body) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            // comment,
            description: body
          }),
          headers: {
            'Content-Type': 'application/json'
          }
          
        });
        const json = await response.json()
        console.log(json);
        // console.log(body);
        document.location.reload();
      }

};

document
.querySelector('#new-comment-form')
.addEventListener('submit', newComment);


// document.querySelector('#new-comment-form').addEventListener('click', function () {
//   var newComment = document.getElementById('input[name="post-id"]')
// })




// const commentFormHandler = async function(event) {
//     event.preventDefault();
  
//     const postId = document.querySelector('input[name="post-id"]').value;
//     const body = document.querySelector('textarea[name="comment-body"]').value;
  
//     if (body) {
//       await fetch('/api/comment', {
//         method: 'POST',
//         body: JSON.stringify({
//           postId,
//           body
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
  
//       document.location.reload();
//     }
//   };
  
//   document
//     .querySelector('new-comment-form')
//     .addEventListener('btn btn-success','btn btn-danger', commentFormHandler);
