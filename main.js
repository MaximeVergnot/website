// menu déroulant + fond noir
document.getElementById('menuIcon').addEventListener('click', () => {
    const menu = document.getElementById('dropdownMenu');
    const overlay = document.createElement('div');
    overlay.classList.add('dropdown-overlay');
    document.body.appendChild(overlay);

    menu.classList.toggle('show'); // Affiche/masque le menu
    overlay.style.display = menu.classList.contains('show') ? 'block' : 'none';

    overlay.addEventListener('click', () => {
        menu.classList.remove('show');
        overlay.remove();
    });
});

// dark Mode

// Quand on clique sur le bouton de dark mode (darkModeToggle)
document.getElementById('darkModeToggle').addEventListener('click', () => {
    // On recupere l'élément <body> du site
    const body = document.body;

    // On bascule la classe 'dark-mode' sur <body>, si elle est deja la on l'enleve, sinon on l'ajoute
    body.classList.toggle('dark-mode');

    // On récupère le bouton pour changer son texte
    const button = document.getElementById('darkModeToggle');

    // Si le mode sombre est activé, on change le texte du bouton pour "Light Mode"
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        // Sinon, on rebascule le texte du bouton a "Dark Mode"
        button.textContent = 'Dark Mode';
    }
});


// sign In
document.getElementById('signInBtn').addEventListener('click', () => {
    alert('Sign In button clicked!');
});