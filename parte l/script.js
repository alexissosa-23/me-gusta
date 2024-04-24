
var likeButton = document.getElementById("like-button");
var likeCount = document.getElementById("like-numero");

likeButton.addEventListener("click", function() {
  var currentCount = parseInt(likeCount.textContent);

  var newCount = currentCount + 1;

  likeCount.textContent = newCount;
});