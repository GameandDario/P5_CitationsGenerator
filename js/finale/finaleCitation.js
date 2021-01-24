let finaleCitation;
let severalFinaleCitations;


const generateFinalCitations = () => {
  document.getElementById('secondOption').style.display = 'none';
  if (!message || !valueSelectCitation){ 
    console.log(' Att message' + message + 'valeur ' + valueSelectCitation);
    //severalFinaleCitations = 'Veuillez sélectionner vos options.';
    document.getElementById('listFinaleCitation').innerHTML = "Veuillez préciser le nombre et la version de citation souhaités."
  }
  else {

  //let severalFinaleCitations;
  let i;
  for (i = 0; i < valueSelectCitation; i++) {

    /* Générer la version des citations demandées */
    if (!message) {
      finaleCitation = 'Veuillez sélectionner vos options.';
    }
    else if (message == ' française') {
      /* Génération d'un bloc de contextes aléatoire */
      const randomContext = allContextBlocks[Math.floor(Math.random() * allContextBlocks.length)];
      /* Génération d'un bloc de sujets aléatoire */
      const randomSubject = allSubjectBlocks[Math.floor(Math.random() * allSubjectBlocks.length)];
      /* Génération d'un bloc de verbes aléatoire */
      const randomVerb = allVerbBlocks[Math.floor(Math.random() * allVerbBlocks.length)];
      /* Génération d'un bloc d'objets' aléatoire */
      const randomObject = allObjectBlocks[Math.floor(Math.random() * allObjectBlocks.length)];

      const myCitation = randomContext.content + randomSubject.content + randomVerb.content + randomObject.content;
      if (myCitation[0] == ' ') {
        finaleCitation = '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
      }
      else {
        finaleCitation = '"' + myCitation + '"';
      }
    }
    /* version anglaise */
    else if (message == " anglaise") {
      /* Génération d'un bloc de contextes aléatoire */
      const randomContext = allEngContextBlocks[Math.floor(Math.random() * allEngContextBlocks.length)];
      /* Génération d'un bloc de sujets aléatoire */
      const randomSubject = allEngSubjectBlocks[Math.floor(Math.random() * allEngSubjectBlocks.length)];
      /* Génération d'un bloc de verbes aléatoire */
      const randomVerb = allEngVerbBlocks[Math.floor(Math.random() * allEngVerbBlocks.length)];
      /* Génération d'un bloc d'objets' aléatoire */
      const randomObject = allEngObjectBlocks[Math.floor(Math.random() * allEngObjectBlocks.length)];

      const myCitation = randomContext.content + randomSubject.content + randomVerb.content + randomObject.content;
      if (myCitation[0] == ' ') {
        finaleCitation = '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
      }
      else {
        finaleCitation = '"' + myCitation + '"';
      }
    }
    else {
      finaleCitation = 'Veuillez sélectionner vos options.';
    }
    console.log(finaleCitation);
    severalFinaleCitations += finaleCitation + '<br/>';
    severalFinaleCitations = severalFinaleCitations.replace('Veuillez sélectionner vos options.', '').replace('undefined', '');
  }
  document.getElementById('listFinaleCitation').innerHTML = severalFinaleCitations;
  document.getElementById('secondOption').style.display = 'flex';
}
}

const initiliaze = () => {
  severalFinaleCitations ="";
  document.getElementById('listFinaleCitation').innerHTML = '';
  document.getElementById("version_Radios1").checked = false;
  document.getElementById("version_Radios2").checked = false;
  document.getElementById("citationNumber").value= "0";
  message = "";
  valueSelectCitation = "";

};

const generateNewCitations = () => {
  severalFinaleCitations ="";
  generateFinalCitations();
};