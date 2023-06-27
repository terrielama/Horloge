function mettreAJourHeure()
 {
    var date = new Date();

    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();

    var heureFormattee = heures + ":" + ajouterZero(minutes) + ":" + ajouterZero(secondes);
    var dateFormattee = jour + "/" + ajouterZero(mois) + "/" + annee;

    document.getElementById("heure").textContent = heureFormattee;
    document.getElementById("date").textContent = dateFormattee;
}

function ajouterZero(nombre) {
    if (nombre < 10) {
        return "0" + nombre;
    } else {
        return nombre;
    }
}

setInterval(mettreAJourHeure, 1000);