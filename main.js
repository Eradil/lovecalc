// prompt("Сиздин атыныз?");
// prompt("Сиз жактыран адамдын аты?");

// let loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//   alert(`Той качан? сиздин шайкештигиңиз ${loveScore}% барабар♥`);
// } else if (loveScore < 70 && loveScore > 50) {
//   alert(`Жакшы жанылык! Cиздин шайкештигиңиз ${loveScore}% барабар♥`);
// } else {
//   alert(`Cиздин шайкештигиңиз ${loveScore}% барабар♥`);
// }

function checkloveper() {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;

  if (name == "") {
    alert("Атыңызды жазыңыз");
  } else if (name.length <= 2) {
    alert("жок дегенде 3 тамга жазуу керек");
  } else if (!isNaN(name)) {
    alert("сандар ат болуп эсептелбейт");
  } else if (lname == "") {
    alert("Сүйгөнүңүздүн атын жазыңыз");
  } else if (lname.length <= 2) {
    alert("жок дегенде 3 тамга жазуу керек");
  } else if (!isNaN(lname)) {
    alert("сандар ат болуп эсептелбейт");
  } else {
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    document.getElementById("lovevalue").value = lovdata + "%";
  }
  if (lovdata > 70) {
    alert(`Той качан? сиздин шайкештигиңиз ${lovdata}% барабар♥`);
  } else if (lovdata > 50 && lovdata < 70) {
    alert(`Жакшы жанылык! Cиздин шайкештигиңиз ${lovdata}% барабар♥`);
  } else {
    alert(`Cиздин шайкештигиңиз ${lovdata}% барабар♥`);
  }
}
