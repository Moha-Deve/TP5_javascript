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