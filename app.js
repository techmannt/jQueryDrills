$(document).ready(function () {

  $('#btnSubmit').attr("disabled", true); // Disabled = false... TRUE.
  $('body').append('<div></div>');
  $('body').append('<ul></ul>');

  $("#btnSubmit").on("click", function () {
    alert($("input[type=text]").val());
    event.preventDefault();
    // $('div').append('<h2></h2>');

    // $('h2').append($("#inputText").val());

    // $('h2').on("mouseover", function () {
    //   $('h2').css("background-color", "yellow");
    //   $('h2').css("border", "2px solid red");
    // })

    $('ul').append('<li>' + $("#inputText").val() + '</li>');

    $("li").click(function (e) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      $(e.target).css("color", "rgb(" + r + ", " + g + ", " + b + ")");  // We could've also substituted the above "Math.floor" function calls in place of the variables: "r", "g", and "b". It works the same.

    })

    $("li").on("dblclick", function (e) {
      e.target.remove();
    })

  })


  $("#inputText").on("keyup", function () {
    let textEntered = $("#inputText").val();
    if (textEntered.length > 0) {
      $('#btnSubmit').attr("disabled", false);
    } else {
      $('#btnSubmit').attr("disabled", true);
    }

  })

});
