
// trumcate Card Title

// chỉ chạy khi thư viện load xong mới thể bị đè
window.addEventListener("load", function(){
    trumcateCardTitle();
});
function trumcateCardTitle(){
    var cardList = document.getElementsByClassName("card-title")
    for(var i=0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = trumcateString(text, 35);
        cardList[i].innerHTML = newText;
    }
}
function trumcateString(str, num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    }
    else{
        return str;
    }
}

// side bar mini
var toggleBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function(){
    sidebarMini.classList.toggle("is-opened");
})

switchBtn.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("darkMode")
})



