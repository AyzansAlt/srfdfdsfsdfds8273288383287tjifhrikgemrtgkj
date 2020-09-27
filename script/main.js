/*var like_comment = document.getElementById("like-comment");

document_likes = document.getElementById("like");
function like() {
 likes = likes + 1;
 localStorage.setItem("likes", likes);
 like_comment.innerHTML = `This Post has ${likes} likes!`;
};

if (likes = 0) {
like_comment.innerHTML = localStorage.getItem("likes");
} */

console.log("Counting Start...");
var counts = localStorage.getItem('likes');//You can use
if (counts!==null){
  var likes = parseInt(counts) -1;
  localStorage.setItem('likes', likes);
  }
  else{
  localStorage.setItem('likes', "0");
}
document.getElementById("like-comment").innerHTML = `You've 👍ed this post ${counts} times!`;

function like(){
  console.log("Counting Start...");
  var counts = localStorage.getItem('likes');//You can use
  if (counts!==null){
    var likes = parseInt(counts) + 1;
    localStorage.setItem('likes', likes);
    }
    else{
    localStorage.setItem('likes', "0");
  }
  document.getElementById("like-comment").innerHTML = `You've 👍ed this post ${counts} times!`;
  }

  document_likes = document.getElementById("like");

  function updateLikes(){
    if (likes > 0) {
document_likes.src="assets/Heart-Fill.svg";
}

else {
  document_likes.src="assets/Heart-Outline.svg";
}

like();

  }
updateLikes();
