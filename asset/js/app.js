jQuery(document).ready(function () {
  console.log("Le DOM est Chargé...1");
});

// Abrégé pour 'jQuery'
$(document).ready(function () {
  console.log("Le DOM est Chargé...2");
});

//Lea version la plus utilisée
$(function () {
  console.log("Le DOM est Chargé...3");
});

// d'autres librairies peuvent utiliser le $
// Pour éviter un conflit au cas ou une autre librairie
// utilise le $, on peut utiliser les syntaxe suivantes
(function ($) {
  // On peut utiliser le $ pour jQuery
})(jQuery);

// on peut également utilisée:
jQuery(document).ready(function ($) {
  // on peut utiliser $ pour jQuery ici...
});

// on peut ega  lement transferer l'alias $ de jQuery
// dans une autre variable

var _$ = jQuery.noConflict(true);
console.log(_$);

// syntaxe jQuery

$("selecteur CSS").methode1().methode2();

$("div.bleu").first(); // selectionne la premiere div avec la class bleu
$("div.bleu").last(); // selectionne la derniere div avec la class Bleu

/* 
 Sélécteur particuliers a jQuery. Facilitent la manipulation des formulaires:
 :text,
 :password,
 :checkbox,
 :radio,
 :submit,
 :file,
 :image,
 :button,
 :reset,
 input ... cible tout les elements input, textarea et button 
 :checked ... cible tout les elements checkbox ou radio button cochés
:selected ... cible les elements selectionnés dnas un elment select
:disabled ...cible tous les elements qui ont un attribut disabled 
*/
