function showDropdown(element) {
    var dropdown = element.querySelector('.dropdown-content');
    if (dropdown) {
        dropdown.style.display = 'block';
    }
}

function hideDropdown(element) {
    var dropdown = element.querySelector('.dropdown-content');
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
