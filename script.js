
function showDropdown(element) {
    var dropdown = element.querySelector('.dropdown-menu');
    if (dropdown) {
        dropdown.style.display = 'block';
    }
}

function hideDropdown(element) {
    var dropdown = element.querySelector('.dropdown-menu');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Tüm dropdown menüleri seç
var dropdowns = document.querySelectorAll('.dropdown');

// Her bir dropdown menüsü için olay dinleyicilerini ekle
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseover', function() {
        showDropdown(this);
    });

    dropdown.addEventListener('mouseout', function() {
        hideDropdown(this);
    });
});

const hamburger = document.querySelector(".hamburger")
const bigUltiny = document.querySelector(".bigUltiny")

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active")
    bigUltiny.classList.toggle("active")
    
    
})

const footerPub = document.querySelector(".footerPub")
const footerAdv = document.querySelector(".footerAdv")

function footerPubFunction(){
    footerPub.style.display = "none";
    footerAdv.style.display = "block";
   
    
}
function footerAdvFunction(){
    footerAdv.style.display = "none";
    footerPub.style.display = "block";
   
    
}




// login register altta 10şubat
// blog ekle 10 şubat