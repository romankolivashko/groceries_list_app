// $(document).ready(function() {
//   $(".content").click(function() {
//     $(".card-showing").toggle();
//     $(".card-hidden").toggle();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const madArr = [$("input#person1").val(), $("input#person2").val(), $("input#animal").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#noun").val()];

    let i = 1;
    madArr.forEach(elem => {
      $(".filler" + i).append(elem);
      i++;
    });


    // $(".person1").text(madArr[0]);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();
  });
});