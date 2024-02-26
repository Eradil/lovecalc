function checkloveper() {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;

  // Проверка наличия имени
  if (name == "") {
    alert("Атыңызды жазыңыз");
  }
  // Проверка длины имени
  else if (name.length <= 2) {
    alert("жок дегенде 3 тамга жазуу керек");
  }
  // Проверка наличия цифр в имени
  else if (!isNaN(name)) {
    alert("сандар ат болуп эсептелбейт");
  }
  // Проверка наличия фамилии
  else if (lname == "") {
    alert("Сүйгөнүңүздүн атын жазыңыз");
  }
  // Проверка длины фамилии
  else if (lname.length <= 2) {
    alert("жок дегенде 3 тамга жазуу керек");
  }
  // Проверка наличия цифр в фамилии
  else if (!isNaN(lname)) {
    alert("сандар ат болуп эсептелбейт");
  }
  // Вычисление процента "любви"
  else {
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    document.getElementById("lovevalue").value = lovdata + "%";

    // Вывод сообщения в зависимости от уровня "любви"
    if (lovdata > 70) {
      alert(`Той качан? сиздин шайкештигиңиз ${lovdata}% барабар♥`);
    } else if (lovdata > 50 && lovdata < 70) {
      alert(`Жакшы жанылык! Cиздин шайкештигиңиз ${lovdata}% барабар♥`);
    } else {
      alert(`Cиздин шайкештигиңиз ${lovdata}% барабар♥`);
    }
    // Вывод сообщения в зависимости от уровня "любви"
  }
}
