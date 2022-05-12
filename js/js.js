var count = 0
function addShopping(cnt) {
    if (cnt != null) {
        count += parseInt(cnt);
    }
    else {
        count++;
    }
    document.getElementById("badgeForShopping").innerHTML = count
    alert("Product have added successfully!!")
}

//

var isShow = false;
function showColors() {
    if (isShow == false) {
        document.getElementById("openColorDiv").style.right = "0px"
        document.getElementById("openColorDiv").style.transition = "0.5s"
    }
    else {
        document.getElementById("openColorDiv").style.right = "-30px"
        document.getElementById("openColorDiv").style.transition = "0.5s"
    }
    isShow = !isShow
}
function changeColor(color) {
    
    if (color == "red") {
        document.getElementById("navContainer").style.backgroundColor = "#dc3545"
        document.getElementById("footterBg").style.backgroundColor = "#dc3545"
        document.querySelectorAll(".inpCl").forEach(element => {
            element.style.backgroundColor = "#ffbdc6"
        });
        if (document.getElementById("btnId") != null) {
            document.getElementById("btnId").style.backgroundColor = "#dc3545"
        }
        document.querySelectorAll(".nav-link").forEach(element => {
            element.style.color = "white"
        })
        if(document.getElementsByClassName("tabNav").length!=0){
            document.getElementById("nav-contact-tab").style.color="black"
            document.getElementById("nav-profile-tab").style.color="black"
            document.getElementById("nav-home-tab").style.color="black"
        }
        document.getElementById("shopIcon").style.color = "white"
        document.getElementById("navA").style.color = "white"
    }
    else if (color == "blue") {
        document.getElementById("navContainer").style.backgroundColor = "#201c5e"
        document.getElementById("footterBg").style.backgroundColor = "#201c5e"
        document.querySelectorAll(".inpCl").forEach(element => {
            element.style.backgroundColor = "#c5cae9"
        });
        if (document.getElementById("btnId") != null) {
            document.getElementById("btnId").style.backgroundColor = "#201c5e"
        }
        document.querySelectorAll(".nav-link").forEach(element => {
            element.classList.remove("text-white")
            element.style.color = "white"
        })
        if(document.getElementsByClassName("tabNav").length!=0){
            document.getElementById("nav-contact-tab").style.color="black"
            document.getElementById("nav-profile-tab").style.color="black"
            document.getElementById("nav-home-tab").style.color="black"
        }
        document.getElementById("shopIcon").style.color = "white"
        document.getElementById("navA").style.color = "white"
    }
}
function showImg(src) {
    document.getElementById("largeImgId").src = src;
}