/*
 * AutoPark â€” Partie 2 : Composez votre location
 * Starter JavaScript â€” Ã  complÃ©ter par les apprenants.
 * Charger ce fichier dans votre HTML avec l'attribut defer.
 *
 * Parcours : vÃ©hicule et dates â†’ rÃ©cupÃ©ration â†’ options â†’ rÃ©capitulatif.
 * Les tarifs sont exprimÃ©s en MAD.
 */

// 1. CONFIGURATION : les donnÃ©es proposÃ©es par l'agence.
const config = {
  voitures: [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ],

  modesRecuperation: [
    { id: "agence", nom: "Ã€ lâ€™agence", fraisFixes: 0 },
    { id: "aeroport", nom: "Ã€ lâ€™aÃ©roport", fraisFixes: 150 },
    { id: "adresse", nom: "Ã€ une adresse", fraisFixes: 100 },
  ],

  agences: ["Casablanca â€” Centre-ville", "Rabat â€” Agdal", "Marrakech â€” GuÃ©liz"],

  aeroports: ["Casablanca â€” Mohammed V", "Rabat â€” SalÃ©", "Marrakech â€” MÃ©nara"],

  options: [
    { id: "siegeBebe", nom: "SiÃ¨ge bÃ©bÃ©", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplÃ©mentaire",
      prixParJour: 200,
    },
  ],
};

// 2. SÃ‰LECTION : les choix de l'utilisateur, Ã  actualiser avec les formulaires.
// Les identifiants correspondent aux id dÃ©finis dans config.
// Les dates seront des chaÃ®nes au format AAAA-MM-JJ (valeur d'un input date).
const selectedConfig = {
  etape: 1,
  voitureId: null,
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",

  recuperation: {
    // Mode agence uniquement.
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },

  options: {
    siegeBebe: false,
    conducteurSupplementaire: false,
  },
};

/*
 * 3. Ã€ VOUS DE JOUER
 *
 * 1) SÃ©lectionner vos Ã©lÃ©ments HTML et afficher les voitures depuis config.
 * 2) Ã‰couter les Ã©vÃ©nements et mettre Ã  jour selectedConfig.
 *    Attention : la valeur d'un select est une chaÃ®ne ; voitureId est un nombre.
 *    Pour une case Ã  cocher, utiliser checked pour rÃ©cupÃ©rer true ou false.
 * 3) GÃ©rer les boutons PrÃ©cÃ©dent / Suivant et afficher une seule Ã©tape.
 * 4) Afficher les champs du mode de rÃ©cupÃ©ration sÃ©lectionnÃ©.
 *    Masquer et dÃ©sactiver les autres ; adapter required.
 * 5) Valider l'Ã©tape courante avant de passer Ã  la suivante.
 * 6) Calculer et actualiser le prix quand les choix changent.
 * 7) Afficher le rÃ©capitulatif des seuls champs concernÃ©s, puis confirmer.
 * 8) Permettre de recommencer avec les valeurs initiales.
 *
 * RÃˆGLES DU PRIX
 * - Les deux dates sont incluses : du 10 au 12 = 3 jours.
 * - Une location sur une mÃªme date = 1 jour.
 * - Le dÃ©but ne peut pas Ãªtre passÃ© ; la fin ne peut pas prÃ©cÃ©der le dÃ©but.
 * - Total = jours Ã— (prixParJour de la voiture + options par jour)
 *           + fraisFixes du mode de rÃ©cupÃ©ration.
 * - Les frais de rÃ©cupÃ©ration sont ajoutÃ©s une seule fois.
 * - Aucun renseignement supplÃ©mentaire pour le conducteur.
 * - Ne pas afficher un total numÃ©rique tant que la voiture ou les dates
 *   sont manquantes ou invalides.
 *
 * Exemple de contrÃ´le : Sandero, du 10 au 12, siÃ¨ge bÃ©bÃ©, aÃ©roport
 * â†’ 3 Ã— (250 + 30) + 150 = 990 MAD.
 */


const progress = document.getElementById("progress");
const recommencer = document.getElementById("resetId");
const suivant = document.getElementById("nextId");
const dots = document.querySelectorAll(".dot");
const steps = document.querySelectorAll(".nextstepbar");


const panel = document.querySelector(".panel")
const parentContainer = document.querySelector(".carteContainer");

config.voitures.forEach(voiture => {

  const carteContainer = document.createElement("div");
  carteContainer.classList.add("carteContainer");

  const cartes = document.createElement("article");
  cartes.classList.add("cartes");

  const radioButton = document.createElement("input");
  radioButton.style.width = "15px";
  radioButton.style.height = "15px";
  radioButton.setAttribute("type", "radio");
  radioButton.name = "checked"
  radioButton.classList.add("radio-input");
  cartes.appendChild(radioButton);

  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = voiture.categorie;
  cartes.appendChild(category);

  const carteTitle = document.createElement("h2");
  carteTitle.classList.add("h2");
  carteTitle.textContent = voiture.marque + " " + voiture.modele;
  cartes.appendChild(carteTitle);

  const carteStatut = document.createElement("h2");
  carteStatut.classList.add("statut");
  carteStatut.textContent = voiture.statut;
  cartes.appendChild(carteStatut);

  const cartePrix = document.createElement("h2");
  cartePrix.classList.add("prix");
  cartePrix.textContent = voiture.prixJour + " " + "MAD / jour";
  cartes.appendChild(cartePrix);

  carteContainer.appendChild(cartes);
  parentContainer.appendChild(carteContainer);
  panel.appendChild(parentContainer);

});
const separator = document.createElement("hr");
separator.classList.add("separator");
panel.appendChild(separator);


const secondsection = document.createElement("div");
secondsection.classList.add("secondSection");

const titreDates = document.createElement("h2");
titreDates.textContent = "Votre période de location";

secondsection.appendChild(titreDates);

const inputContainer = document.createElement("div");
inputContainer.classList.add("inputsDate");

const firstLabel = document.createElement("label")
firstLabel.textContent = "Date de début *";

const brk = document.createElement("br");
inputContainer.appendChild(firstLabel);
inputContainer.appendChild(brk);

const debutInput = document.createElement("input")
debutInput.type = "date"
debutInput.classList.add("inputWidth")
inputContainer.appendChild(debutInput);
firstLabel.appendChild(debutInput);

const secondLabel = document.createElement("label")
secondLabel.textContent = "Date de fin *";

const brktwo = document.createElement("br");
inputContainer.appendChild(secondLabel);
inputContainer.appendChild(brktwo);

const finInput = document.createElement("input")
finInput.type = "date"
finInput.classList.add("inputWidth")
inputContainer.appendChild(finInput);
secondLabel.appendChild(finInput);


secondsection.appendChild(inputContainer);




const dureeRule = document.createElement("p");
dureeRule.classList.add("dureeRule");
dureeRule.textContent = ">Durée : 3 jours. Les dates de début et de fin sont incluses.";

secondsection.appendChild(dureeRule)

const buttons = document.createElement("div");
buttons.classList.add("buttons");
secondsection.appendChild(buttons);

const resetButton = document.createElement("button");
resetButton.classList.add("btn", "resetButton");
resetButton.textContent = "Recommencer";
resetButton.id = "resetId"
buttons.appendChild(resetButton);

const nextButton = document.createElement("button");
nextButton.id = "nextId"
nextButton.classList.add("btn", "nextButton");
nextButton.textContent = "Suivant";
buttons.appendChild(nextButton);

secondsection.appendChild(buttons)

panel.appendChild(secondsection);


//============================side card==========================//

// const headingContainer = document.createElement("div");
// headingContainer.classList.add("headingthree");
// panel.appendChild(headingContainer);
// const headTitle = document.createElement("p");
// headTitle.classList.add("eyebrow");
// headTitle.textContent = "VOTRE LOCATION";
// headingContainer.appendChild(headTitle);

// const selectedCar = document.createElement("h2")
// selectedCar.classList.add("h2")




let currentActive = 0;
nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > dots.length) {
    currentActive = dots.length
  }
  updateSteps()
  updatedots();
})


resetButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateSteps()
  updatedots();
});

function updatedots(){
  dots.forEach((dot , index) =>{
    if (index < currentActive) {

      dot.classList.add("active")
    }else{
      dot.classList.remove("active");
    }
  })
}

function updateSteps(){
  steps.forEach((step,idx)=>{
    if (idx < currentActive) {
      step.classList.add("active")
    }else{
      step.classList.remove("active");
    }
  })
}