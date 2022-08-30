menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Panner Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];
menu_list = "Chicken Tandoori Pizza"
menu_list2 = "Veg Supreme Pizza"
menu_list3 = "Panner Tikka Pizza"
menu_list4 = "Deluxe Veggie Pizza"
menu_list5 = "Veg Extravaganza"
function getmenu(){
    var htmldata;
    htmldata ="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0 ; i < menu_list_array; i++){
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = menu_list;
    document.getElementById("display_menu2").innerHTML = menu_list2;
    document.getElementById("display_menu3").innerHTML = menu_list3;
    document.getElementById("display_menu4").innerHTML = menu_list4;
    document.getElementById("display_menu5").innerHTML = menu_list5;
}
function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i = 0 ; i <menu_list_array.length ; i++){
        htmldata = htmldata + '<div class="cards">' + '<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}