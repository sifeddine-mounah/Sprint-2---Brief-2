import { voituresInitiales } from "./data.js";
let voitures = [...voituresInitiales];
const datainit = document.querySelector("#liste-voitures");
const marqueInput = document.getElementById("marque");
const modeleInput = document.getElementById("modele");
const matriculeInput = document.getElementById("immatriculation");
const categoryInput = document.getElementById("categorie");
const prixInput = document.getElementById("prix-jour");
const statusInput = document.getElementById("statut");
const ajoutButton = document.getElementById("bouton-enregistrer");
const formul = document.getElementById("formulaire-voiture");
const searchInput = document.getElementById("recherche");
const filtrecategory = document.getElementById("filtre-categorie");
const filtreStatus = document.getElementById("filtre-statut");
const trier = document.getElementById("tri-prix");
const reinitialiser = document.getElementById("reinitialiser-filtres");
const deuxForm = document.getElementById("toolbar");


let isCarModified = null;

function afficher(voituresInitiales = voitures) {
    datainit.textContent = "";
    voituresInitiales.forEach(voiture => {
        const rows = document.createElement("tr");

        const marque = document.createElement("td");
        marque.textContent = voiture.marque;
        marque.style.fontWeight = "bold";
        marque.classList.add("td");
        rows.appendChild(marque);

        const modele = document.createElement("td");
        modele.textContent = voiture.modele;
        modele.classList.add("td");
        rows.appendChild(modele);

        const immatricule = document.createElement("td");
        immatricule.textContent = voiture.immatriculation;
        immatricule.classList.add("registration", "td");
        rows.appendChild(immatricule);

        const category = document.createElement("td");
        category.textContent = voiture.categorie;
        category.classList.add("td");
        rows.appendChild(category);

        const prix = document.createElement("td");
        prix.textContent = voiture.prixJour + " DH / jour";
        prix.classList.add("price", "span");
        rows.appendChild(prix);

        const statut = document.createElement("td");
        const statutspan = document.createElement("span");


        statutspan.textContent = voiture.statut;
        if (voiture.statut == "Disponible") {
            statutspan.classList.add("td", "badge", "badge-disponible");

        } else if (voiture.statut == "Louée") {
            statutspan.classList.add("td", "badge", "badge-louee");

        } else if (voiture.statut == "En maintenance") {
            statutspan.classList.add("td", "badge", "badge-maintenance");
        }
        statut.appendChild(statutspan);
        rows.appendChild(statut);

        const editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.classList.add("button-edit", "button", "button-secondary");

        editButton.addEventListener("click", () => {
            ajoutButton.textContent = "Enregistrer les modifications"
            isCarModified = voiture.id;

            marqueInput.value = voiture.marque;
            modeleInput.value = voiture.modele;
            matriculeInput.value = voiture.immatriculation;
            categoryInput.value = voiture.categorie;
            prixInput.value = voiture.prixJour;
            statusInput.value = voiture.statut;
        });


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add("button-delete", "button", "button-secondary");

        deleteButton.addEventListener("click", () => {
            if (confirm("etes vous sur de supprimer cette voiture !?")) {
                voitures = voitures.filter((v) => v.id !== voiture.id);
                afficher();
            }
        })

        const actionsTd = document.createElement("td");
        const rowActionsST = document.createElement("div");

        rowActionsST.classList.add("row-actions");

        rowActionsST.appendChild(editButton);
        rowActionsST.appendChild(deleteButton);

        actionsTd.appendChild(rowActionsST);
        rows.appendChild(actionsTd);

        datainit.appendChild(rows);
    });
}

afficher();

ajoutButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (marqueInput.value == "" || modeleInput.value == "" || matriculeInput.value == "" || categoryInput.value == "" || prixInput.value == "" || statusInput.value == "") {
        alert("veuillez remplir les champs correctement");
        return;
    }

    if (prixInput.value <= 0) {
        alert("price should be positive");
        return;
    }
    if (isCarModified !== null) {
        const voitureAmodifier = voitures.find(
            (voiture) => voiture.id === isCarModified
        )

        voitureAmodifier.marque = marqueInput.value;
        voitureAmodifier.modele = modeleInput.value;
        voitureAmodifier.immatriculation = matriculeInput.value;
        voitureAmodifier.categorie = categoryInput.value;
        voitureAmodifier.prixJour = prixInput.value;
        voitureAmodifier.statut = statusInput.value;

        isCarModified = null;
        ajoutButton.textContent = "Ajouter une voiture";
        formul.reset();
        afficher();
    } else {
        const nouveauVoiture = {
            marque: marqueInput.value,
            modele: modeleInput.value,
            immatriculation: matriculeInput.value,
            categorie: categoryInput.value,
            prixJour: prixInput.value,
            statut: statusInput.value,
        }
        voitures.push(nouveauVoiture);
        formul.reset();
        afficher();
    }

});

function rechercheMulti() {
    const recherche = searchInput.value.toLowerCase();

    const resultat = voitures.filter((voiture) => {
        return voiture.marque.toLowerCase().includes(recherche) ||
            voiture.modele.toLowerCase().includes(recherche) ||
            voiture.immatriculation.toLowerCase().includes(recherche)
    })
    afficher(resultat);
}
function filtrageCategory() {
    const cateFiltre = filtrecategory.value;

    const selectedcate = voitures.filter((voiture) => {
        return voiture.categorie == cateFiltre

    })
    afficher(selectedcate);
}


function filtrageStatus(){

    const statFiltre = filtreStatus.value;
    const selectedstat = voitures.filter((voiture) => {
        return voiture.statut == statFiltre;
    });
    afficher(selectedstat);
}
function trierByPrix(){
    const trierprix = trier.value;
    const selectedTri = voitures.sort((a, b) => {
        if (trierprix === "croissant") {
            return a.prixJour - b.prixJour
        } else if (trierprix === "decroissant") {

        } return b.prixJour - a.prixJour;
    })
    afficher(selectedTri)
}




searchInput.addEventListener("input", () => {
    rechercheMulti();
});

filtrecategory.addEventListener("change", () => {
    rechercheMulti();
    filtrageCategory();
})

filtreStatus.addEventListener("change", () => {
    rechercheMulti();
    filtrageCategory();
    filtrageStatus();
});

trier.addEventListener("change", () => {
    rechercheMulti();
    filtrageCategory();
    filtrageStatus();
    trierByPrix();
})

reinitialiser.addEventListener("click", () => {
    searchInput.value = "";
    filtrecategory.value = "";
    filtreStatus.value = "";
    trier.value = "";
    afficher();
})
