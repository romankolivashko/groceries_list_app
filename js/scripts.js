function validateForm() {
  event.preventDefault();
  var a = document.forms["inputForm"]["item1"].value;
  var b = document.forms["inputForm"]["item2"].value;
  var c = document.forms["inputForm"]["item3"].value;
  var d = document.forms["inputForm"]["item4"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
    alert("Please Fill All Required Field");
    return false;
  }
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $(".card-showing").hide();

    const shopArr = [
      $("input#item1").val(), 
      $("input#item2").val(), 
      $("input#item3").val(), 
      $("input#item4").val(), 
      $("input#item5").val(), 
      $("input#item6").val()
    ];
    
    shopArr.sort();
    let shopArrCap = shopArr.map(item => item.toUpperCase());

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