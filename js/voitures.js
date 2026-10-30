
// import { voituresInitiales } from "./data.js";
// let voitures = [...voituresInitiales];
// const marqueInput = document.getElementById("marque");
// const modeleInput = document.getElementById("modele");
// const matriculeInput = document.getElementById("immatriculation");
// const categoryInput = document.getElementById("categorie");
// const prixInput = document.getElementById("prix-jour");
// const statusInput = document.getElementById("statut");
// const ajouterBtn = document.getElementById("bouton-enregistrer");
// const dataInit = document.querySelector("#liste-voitures");

// let IsvoitureModifierID = null;
// //=====================================================AFFICHAGE========================================================// 
// function afficher() {

//     dataInit.textContent = "";
//     for (let i = 0; i < voitures.length; i++) {
//         let statRows = voitures[i];
//         const rows = document.createElement("tr");
//         rows.classList.add("tr");

//         const marqueStatic = document.createElement("td");
//         marqueStatic.style.fontWeight = "bold";
//         marqueStatic.textContent = statRows.marque;
//         marqueStatic.classList.add("td");
//         rows.appendChild(marqueStatic);


//         const modeleStatic = document.createElement("td");
//         modeleStatic.textContent = statRows.modele;
//         modeleStatic.classList.add("td");
//         rows.appendChild(modeleStatic);

//         const immatriculeStatic = document.createElement("td");
//         immatriculeStatic.textContent = statRows.immatriculation;
//         immatriculeStatic.classList.add("registration", "td");
//         rows.appendChild(immatriculeStatic);

//         const categorieStatic = document.createElement("td");
//         categorieStatic.textContent = statRows.categorie;
//         categorieStatic.classList.add("td");
//         rows.appendChild(categorieStatic);

//         const prixJourStatic = document.createElement("td");
//         prixJourStatic.textContent = statRows.prixJour + " DH / jour";
//         prixJourStatic.classList.add("price", "span");
//         rows.appendChild(prixJourStatic);

//         const statutStatic = document.createElement("td");
//         const statutStspan = document.createElement("span");
//         statutStspan.textContent = statRows.statut;
//         if (statRows.statut == "Disponible") {
//             statutStspan.classList.add("td", "badge", "badge-disponible");

//         } else if (statRows.statut == "Louée") {
//             statutStspan.classList.add("td", "badge", "badge-louee");

//         } else if (statRows.statut == "En maintenance") {
//             statutStspan.classList.add("td", "badge", "badge-maintenance");
//         }
//         statutStatic.appendChild(statutStspan);
//         rows.appendChild(statutStatic);


//         const buttonModifierST = document.createElement("button");
//         buttonModifierST.textContent = "Modifier";
//         buttonModifierST.classList.add("button-edit", "button", "button-secondary");

//         buttonModifierST.addEventListener("click", () => {
//             IsvoitureModifierID = voituresInitiales[i].id;

//             marqueInput.value = voituresInitiales[i].marque;
//             modeleInput.value = voituresInitiales[i].modele;
//             matriculeInput.value = voituresInitiales[i].immatriculation;
//             categoryInput.value = voituresInitiales[i].categorie;
//             prixInput.value = voituresInitiales[i].prixJour;
//             statusInput.value = voituresInitiales[i].statut;
//             ajouterBtn.textContent = "Enregistrer les modifications";

//         });




//         const buttonDeleteST = document.createElement("button");
//         buttonDeleteST.textContent = "Supprimer";
//         buttonDeleteST.classList.add("button-delete", "button", "button-secondary");


//         buttonDeleteST.addEventListener("click", () => {
//             if (confirm("etes vous sur de supprimer cette voiture !?")) {
//                 voitures = voitures.filter((v) => v.id !== statRows.id);
//                 buttonDeleteST.closest("tr").remove();
//             }
//         });
//         const actionsTd = document.createElement("td");
//         const rowActionsST = document.createElement("div");

//         rowActionsST.classList.add("row-actions");

//         rowActionsST.appendChild(buttonModifierST);
//         rowActionsST.appendChild(buttonDeleteST);

//         actionsTd.appendChild(rowActionsST);
//         rows.appendChild(actionsTd);

//         dataInit.appendChild(rows);



//     }
// }
// afficher();
// //===================recuperer value===================================================
// ajouterBtn.addEventListener("click", (event) => {
//     event.preventDefault();

//     if (IsvoitureModifierID !== null) {
//         const voitureAmodifier = voituresInitiales.find(
//             (voitures) => voitures.id === IsvoitureModifierID
//         );
//         voitureAmodifier.marque = marqueInput.value;
//         voitureAmodifier.modele = modeleInput.value;
//         voitureAmodifier.matricule = matriculeInput.value;
//         voitureAmodifier.categorie = categoryInput.value;
//         voitureAmodifier.prixJour = prixInput.value;
//         voitureAmodifier.statut = statusInput.value;
//         //======================================================================================
//         marqueInput.value = "";
//         modeleInput.value = "";
//         matriculeInput.value = "";
//         categoryInput.value = "";
//         prixInput.value = "";
//         statusInput.value = "";
//         IsvoitureModifierID = null;
//         ajouterBtn.textContent = "Ajouter la voiture";
//         afficher();
//         return;
//     }

//         const marque = marqueInput.value;
//         const modele = modeleInput.value;
//         const matricule = matriculeInput.value;
//         const categorie = categoryInput.value;
//         const prix = prixInput.value;
//         const status = statusInput.value;

//         //========================verification des champs=================================

//         if (marque == "" || modele == "" || matricule == "" || categorie == "" || prix == "" || status == "") {
//             alert("veuillez remplir les champs correctement");
//             return;
//         }

//         if (prix < 0 || prix == 0) {
//             alert("price should be positive");
//             return;
//         }

//         const newRows = document.createElement("tr");
//         newRows.classList.add("tr");
//         dataInit.appendChild(newRows);

//         const marqueNew = document.createElement("td");
//         marqueNew.style.fontWeight = "bold";
//         marqueNew.textContent = marque;
//         if (marque.trim() === "" || marque === null) {
//             alert("inputs cant be empty");
//             return;
//         }
//         marqueNew.classList.add("td");
//         newRows.appendChild(marqueNew);


//         const modeleNew = document.createElement("td");
//         modeleNew.textContent = modele;
//         if (modele.trim() === "" || modele === null) {
//             alert("inputs cant be empty");
//             return;
//         }
//         modeleNew.classList.add("td");
//         newRows.appendChild(modeleNew);


//         const immatriculeNew = document.createElement("td");
//         immatriculeNew.textContent = matricule;

//         if (matricule.trim() === "" || matricule === null) {
//             alert("inputs cant be empty");
//             return;
//         }
//         immatriculeNew.classList.add("registration", "td");
//         newRows.appendChild(immatriculeNew);


//         const categorieNew = document.createElement("td");
//         categorieNew.textContent = categorie;
//         if (categorie.trim() === "" || categorie === null) {
//             alert("inputs cant be empty");
//             return;
//         }
//         categorieNew.classList.add("td");
//         newRows.appendChild(categorieNew);


//         const prixNew = document.createElement("td");
//         prixNew.textContent = prix + " DH / jour";
//         prixNew.classList.add("price", "span");
//         newRows.appendChild(prixNew);


//         const statutNew = document.createElement("td");
//         const statutNewSpan = document.createElement("span");
//         statutNewSpan.textContent = status;

//         if (status == "Disponible") {
//             statutNewSpan.classList.add("td", "badge", "badge-disponible");

//         } else if (status == "Louée") {
//             statutNewSpan.classList.add("td", "badge", "badge-louee");

//         } else if (status == "En maintenance") {
//             statutNewSpan.classList.add("td", "badge", "badge-maintenance");
//         }
//         statutNew.appendChild(statutNewSpan);
//         newRows.appendChild(statutNew);

//         //===============================modifier button======================================

//         const buttonModifierNew = document.createElement("button");
//         buttonModifierNew.textContent = "Modifier";
//         buttonModifierNew.classList.add("button-edit", "button", "button-secondary");


//         //===============================delete button======================================

//         const buttonDeleteNew = document.createElement("button");
//         buttonDeleteNew.textContent = "Supprimer";
//         buttonDeleteNew.classList.add("button-delete", "button", "button-secondary");

//         buttonDeleteNew.addEventListener("click", () => {
//             if (confirm("etes vous sur de supprimer cette voiture !?")) {
//                 voitures = voitures.filter((v) => v.id !== newRows.id);
//                 // buttonDeleteNew.closest("tr").remove();
//                 afficher();
//             }

//         });


//         //===============================style button======================================


//         const actionsTdNew = document.createElement("td");
//         const rowActionsNew = document.createElement("div");

//         rowActionsNew.classList.add("row-actions");

//         rowActionsNew.appendChild(buttonModifierNew);
//         rowActionsNew.appendChild(buttonDeleteNew);

//         actionsTdNew.appendChild(rowActionsNew);
//         newRows.appendChild(actionsTdNew);

//         marqueInput.value = "";
//         modeleInput.value = "";
//         matriculeInput.value = "";
//         categoryInput.value = "";
//         prixInput.value = "";

// });


// //RECHERCHE +++++++++++++++++++++++++++++++++++++++++++++++

// // const searchMarque = document.getElementById("recherche");

// // function searchData(value)
// // {
// //     console.log(value)
// // }