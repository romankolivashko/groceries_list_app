$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $(".card-showing").hide();
    // $(".card-hidden").show();
    const shopArr = [
        $("input#item1").val(), 
        $("input#item2").val(), 
        $("input#item3").val(), 
        $("input#item4").val(), 
        $("input#item5").val(), 
        $("input#item6").val()
    ];

    shopArr.sort();
    shopArrCap = shopArr.map(item => item.toUpperCase());

    let i = 1;
    shopArrCap.forEach(elem => {
      $(".item" + i).append(elem);
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