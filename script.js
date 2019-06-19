var bouton = document.querySelector(".btn");
bouton.addEventListener("click", demandeInfos);

function demandeInfos(){
    var name = prompt("Ton prénom ?");
    var age = prompt("Ton âge ?");
    var mess = checkAge(age);
    donnees(name, age, mess);
    // supp(name, age, mess);
}

function checkAge(toto){
    if(toto < 18){
        return "Tu es bien trop jeune.";
    }
    else if(toto == 18 || toto == 19){
        return "Tu as bientôt la vingtaine.";
    }
    else if(20 <= toto && toto <= 29 ){
        return "La vingtaine il n'y a que ca de vrai.";
    }
    else if(30 <= toto && toto <= 39){
        return "Les trentenaires sont les meilleurs.";
    }
    else if(toto > 40){
        return "Tu es trop vieux pour jouer désolé papy.";
    }
    else{
        return "Vive les extra-terrestre";
    }
}

function donnees(nom, age, message){
    var create = document.createElement("tr");
    document.querySelector("#tableau").appendChild(create);
    create.innerHTML = "<td>" + nom + "</td> <td>" + age + "</td> <td>" + message + "</td>   <td><button class='btn btn-danger btsupp' onclick = 'supp(this)' id='delate'>Supprimer la création</button></td>";
}



function supp(b){
    var b = b.parentNode.parentNode.remove();
}