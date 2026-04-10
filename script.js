// On attend que le bouton soit cliqué
document.getElementById('btnAction').addEventListener('click', function() {
    // On affiche le message caché
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    
    // Petit effet de console pour vérifier
    console.log("Le bouton a été cliqué !");
});
