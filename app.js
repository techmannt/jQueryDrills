$(document).ready(function () {

  $('#btnSubmit').attr("disabled", true); // Disabled = false... TRUE.
  $('body').append('<div></div>');

  $("#btnSubmit").on("click", function () {
    // alert("Test!");
    alert($("input[type=text]").val());
    event.preventDefault();
    $('div').append('<h2></h2>');

    $('h2').append($("#inputText").val());

    $('h2').on("mouseover", function () {
      $('h2').css("background-color", "yellow");
      $('h2').css("border", "2px solid red");
    })

  })

  $("#inputText").on("keyup", function () {
    console.log('Input text has been changed!');

    let textEntered = $("#inputText").val();
    if (textEntered.length > 0) {
      // console.log(textEntered.length);
      $('#btnSubmit').attr("disabled", false);
    } else {
      $('#btnSubmit').attr("disabled", true);
    }

  })




});
