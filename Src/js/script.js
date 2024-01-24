let resultat = document.getElementById("resultat");
let btn = document.getElementById("add_Santa");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let compteur = document.getElementById("compteur");
let tirage = document.getElementById("tirage");
let participant = 0;
let tabParticipant = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  participant++;

  let nouveauParticipant = {
    nom: nom.value,
    prenom: prenom.value,
  };
  tabParticipant.push(nouveauParticipant);

  compteur.innerHTML = "Vous etes : " + participant + " participants";
  resultat.innerHTML =
    resultat.innerHTML + `<div> ${nom.value} ${prenom.value} </div>`;
  console.log(tabParticipant);
  tirage.innerHTML = '<button type="submit" id="btnTirage">Tirage</button>';

  let btnTirage = document.getElementById("btnTirage");
  btnTirage.addEventListener("click", function (e) {
    e.preventDefault();

    for (let i = tabParticipant.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tabParticipant[i], tabParticipant[j]] = [
        tabParticipant[j],
        tabParticipant[i],
      ];
    }

    let lignes = "";
    for (let i = 0; i < tabParticipant.length; i++) {
      let donneur = tabParticipant[i];
      let receveur = tabParticipant[(i + 1) % tabParticipant.length];
      lignes += `<tr><td>${donneur.nom} ${donneur.prenom}</td><td>${receveur.nom} ${receveur.prenom}</td></tr>`;
    }

    resultat.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Donneur</th>
          <th>Receveur</th>
        </tr>
      </thead>
      <tbody>
        ${lignes}
      </tbody>
    </table>
    `;
    compteur.innerHTML = "";
    tirage.innerHTML = "";
  });
});
