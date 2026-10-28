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



// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#header-section nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Récupère le texte du lien cliqué (ex: "Accueil", "Menu", "Contact")
            const sectionName = this.textContent;
            console.log("L'utilisateur a cliqué sur la section : " + sectionName);
        });
    });
});