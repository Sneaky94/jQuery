// methode parent()
$("li").parent("#parents").css("border", "1px solid black");

// methode parents() AVEC UN S
$("ul").parents("div").css("background-color", "lightblue");

// methode parentsUntil()
$("#enfants").parentsUntil(".conteneur").css("border", "1px solid red");

// methode closest()

$("#parents").closest("div").css("border", "1px solid orange");

$(".li1").closest(".bleu").css("font-size", "40px");

// methode children() (retourne tout les enfants)

$(".conteneur").children("h1").css("color", "blue");

$("#methodes").children("p").first().css("color", "green");

//le selecteur jQuery retourne un objet jQuery
//qui est un objet semblable au tableau
console.log($("#liste").parent());

//convertisson cet objet en tableau
console.log([...$("#liste").parent()]);

//ajoutons en boucle la classe''bleu a tous les élement du tableau
[...$("#liste").parent()].forEach((el) => {
  el.classList.add("bleu");
});

// reset de la couleur de fond de la div conteneur2
// en utilisant la methode parent()

$("#liste").parent().css("background-color", "");

// la methode siblings()
$("#liste li:first-child").siblings(":odd").css("color", "blue");

// la methode next()
$("#liste li:first-child").next().css("color", "red");

// la methode nextAll()
$("#liste li:nth-child(3)").nextAll(":odd").css("text-decoration", "underline");

//La methode nextUntil
$("#liste li:nth-child(3)")
  .nextUntil("#liste li:nth-child(6)")
  .css({ "font-weight": "bold", "font-size": "50px" });
