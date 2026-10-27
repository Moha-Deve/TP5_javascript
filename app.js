// Javascript membre du footer
function majFooter() {
    // Statut ouvert / fermé (12h à 23h)
    const statut = document.getElementById("statut-ouverture");
    if (statut) {
        const heure = new Date().getHours();
        const ouvert = heure >= 12 && heure < 23;
        statut.textContent = ouvert ? "🟢 Ouvert maintenant" : "🔴 Fermé actuellement";
    }
}

majFooter();

/*code javascrip de Hassane(main)*/

// 1. Sélection du formulaire dans le HTML
const form = document.querySelector('form');

// 2. Écoute de l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêche la page de se recharger lors du clic sur le bouton
    event.preventDefault();

    // 3. Récupération de la liste déroulante et du champ quantité
    const selectPlat = document.getElementById('dish-select');
    const inputQuantite = document.getElementById('quantity');

    // 4. Récupération du nom du plat sélectionné et de la quantité
    const nomDuPlat = selectPlat.options[selectPlat.selectedIndex].text;
    const quantite = inputQuantite.value;

    // 5. Affichage d'un message simple à l'utilisateur
    alert(`Commande ajoutée !\nPlat : ${nomDuPlat}\nQuantité : ${quantite}`);
});
