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
// met à jour le contenu des éléments HTML ayant pour identifiants "heure" et "date" en utilisant document.getElementById().textContent.

function ajouterZero(nombre) {
    if (nombre < 10) {
        return "0" + nombre;
    } else {
        return nombre;
    }
}
// Si le nombre est inférieur à 10, elle ajoute un zéro devant le nombre

setInterval(mettreAJourHeure, 1000);
// C'est une fonction JavaScript qui exécute la fonction mettreAJourHeure toutes les 1000 millisecondes (soit toutes les secondes), ce qui assure la mise à jour régulière de l'heure et de la date.
