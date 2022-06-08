// methode has
$("p").has("span").css("color", "green");

// methode filter
$("span").filter(".souligne").css("color", "orange");

// not
$("span").not(".souligne").css("color", "red");

// first() , last()
$("p").last().css("color", "pink");

// eq()
$("p").eq(1).css("color", "blue");
