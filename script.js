// Fichier script.js

// Sélectionne les éléments
const openModalBtn = document.getElementById('openModalBtn'); // Bouton d'ouverture
const modal = document.getElementById('myModal'); // La modal elle-même
const closeModalBtn = document.querySelector('.close-btn'); // Bouton de fermeture

// Fonction pour afficher la modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Change le display en 'flex' pour montrer la modal
});

// Fonction pour fermer la modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Change le display en 'none' pour masquer la modal
});

// Ferme la modal si on clique en dehors du contenu de la modal
window.addEventListener('click', (event) => {
    if (event.target === modal) { // Vérifie si le clic est sur l'overlay (fond de la modal)
        modal.style.display = 'none';
    }
});
