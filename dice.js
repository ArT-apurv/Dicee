function myFunction() {
    var a = Math.random();
    a = (a * 6) + 1;
    a = Math.floor(a);

    var image1 = "https://art-apurv.github.io/Dicee/images/dice" + a + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);

    var b = Math.random();
    b = (b * 6) + 1;
    b = Math.floor(b);

    var image2 = "https://art-apurv.github.io/Dicee/images/dice" + b + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);

    if (a === b) {
        document.querySelector("h1").innerHTML = ("No Winner");
    } else if (a > b) {
        document.querySelector("h1").innerHTML = ("First player won");
    } else if (a < b) {
        document.querySelector("h1").innerHTML = ("Second player won");
    }
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}