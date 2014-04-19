$("#nohuman").hide();
var mail = $("#mail").html().replace(/DOT/g, ".");
mail = mail.replace(/AT/g, "@");
$("#mail").html('<a href="mailto:'+mail+'" class="mail">'+mail+'</a>');
var text = $("#mail_text").html();
$("#mail_text").html('<a href="mailto:'+mail+'" class="mail">'+text+'</a>');
