// variable
var readline = require("readline-sync");

var joueur1 = {
    nom : "Toto",
    age : 28,
    est_un_homme : true,
}

var joueur2 = {
    nom : "Tata",
    age : 32,
    est_un_homme : false,
}

var joueur3 = {
    nom : "Coco",
    age : 30,
    est_un_homme : false,
}

lesJoueurs = [joueur1, joueur2, joueur3];

var choix_menu = 1
const SEPARATEUR = "-"


// MAIN
while (choix_menu !== 5) {

    ligne_separation(SEPARATEUR);
    afficher_menu();
    console.log("");
    choix_menu = readline.questionInt("Entrez votre choix : ");

    switch(choix_menu){
        case 1: 
            afficher_joueur_1();
            afficher_joueur_2();
        break;
        case 2:
            difference_age_joueur();
        break;
        case 3:
            afficher_difference_age()
        break;
        case 4:
            ajouter_joueur();
        break;
        case 5:
            console.log("A bientot");
        break;
        default:
            console.log("cas non traiter");
        break;

    }
}



// fonction
function afficher_menu(){
    var text_menu = "";
    text_menu += "1 - afficher les joueurs";
    text_menu += "\n2 - comparer les deux joueurs";
    text_menu += "\n3 - calculer la différence d'age";
    text_menu += "\n4 - ajouter joueur";
    text_menu += "\n5 - quitter"; 
    console.log(text_menu);
}

function ajouter_joueur(){
    var joueur = {
        nom : "Pablo",
        age : 31,
        est_un_homme : false,
    }
    lesJoueurs.push(joueur);
}

function afficher_joueur_1(){
        // joueur 1
    ligne_separation(SEPARATEUR);
    console.log("Nom du joueur 1 : " + joueur1.nom + "\nAge du joueur : " + joueur1.age);
    afficher_genre(joueur1.est_un_homme);
    ligne_separation(SEPARATEUR);
}

function afficher_joueur_2(){
    // joueur 2
    console.log("Nom du joueur 2 : " + joueur2.nom + "\nAge du joueur : " + joueur2.age);
    afficher_genre(joueur2.est_un_homme);
    ligne_separation(SEPARATEUR);
}


function difference_age_joueur(){
    ligne_separation(SEPARATEUR);
    if (joueur1.age < joueur2.age) {
        console.log("Le joueur 2 est le plus age");
    } else if (joueur1.age > joueur2.age){
        console.log("Le joueur 1 est le plus age");
    } else {
        console.log("Les joueurs on le même ages");
    }
    ligne_separation(SEPARATEUR);

}

function afficher_genre(bool){
    if (bool){
        console.log("Sexe : Homme");
    } else {
        console.log("Sexe : Femme");
    }

}

function ligne_separation(separteur){
    var ligne = "";
    for (var i = 0; i <= 50; i++){
        ligne += separteur;
    }
    console.log(ligne);

}

function calcule_dif_age_joueur(){
    ligne_separation(SEPARATEUR);
    var difference_age = joueur1.age - joueur2.age;
    if (difference_age < 0){
        difference_age = -difference_age;
    }
    return difference_age;
}

function afficher_difference_age(){
    var difference_age_joueur = calcule_dif_age_joueur();
    console.log("La différence d'age entre les joueurs est de : "+ difference_age_joueur);
}