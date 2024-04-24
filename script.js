var likeButtons = document.getElementsByClassName("like-boton");

var likeButtonsArray = Array.from(likeButtons);

var likeCounts = [];

likeButtonsArray.forEach(function(button, index) {
  var likeCountElement = document.getElementsByClassName("like-numero")[index];
  var likeCount = parseInt(likeCountElement.textContent);
  likeCounts.push(likeCount);

  button.addEventListener("click", function() {
    likeCounts[index]++;
    likeCountElement.textContent = likeCounts[index];
  });
});