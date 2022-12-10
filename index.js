$(document).ready(function () {
  $('#play-btn').click(function (event) {
    var name = $("#name").val();

    if (!name) {
      return alert("Please enter your name!");
    } else if (name.length < 3) {
      return alert("Name should at least of 3 character!");
    }

    return window.location.href = `casino.html?name=${name}`;
  });
});

function getRandomArrayOfNos(len) {
  var arr = [];
  while (arr.length < len) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);

  return arr;
}
