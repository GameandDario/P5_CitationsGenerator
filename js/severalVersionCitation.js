let generatedCitation;

const generateSeveralCitations = () => {
    let selectVersion = document.getElementById('res-citationVersion');
    console.log('select version ' + selectVersion.textContent);
    let severalCitations;
    let i;
    for( i=0; i < valueSelectCitation; i++) {
      

  /* Générer la version des citations demandées */
if (!selectVersion.textContent) {
  generatedCitation = 'Veuillez sélectionner vos options.';
}

  else if (selectVersion.textContent ==" française") {
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
      generatedCitation = '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
      //return generatedCitation;
    }
    else {
      generatedCitation = '"' + myCitation + '"';

      //return generatedCitation;
    }
  }
  /* version anglaise */
  else if (selectVersion.textContent ==" anglaise") {
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
      generatedCitation = '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
      //return generatedCitation;
    }
    else {
      generatedCitation = '"' + myCitation + '"';
      //return generatedCitation;
    }
  }
  else {
    generatedCitation = 'Veuillez sélectionner vos options.';
  }
  /* récupérer la version des citations demandées */
  document.body.addEventListener('change', function (event) {
    let target = event.target;
    let message;
    switch (target.value) {
      case 'version_fr':
        message = " française";
        break;

      case 'version_eng':
        message = " anglaise";
        break;
    }
    selectVersion.textContent = message;
    console.log('select version 2 ' + selectVersion.textContent);
  })
  
  
  console.log('valeur demandée citations '+ valueSelectCitation + ' toutes citations : ' + generatedCitation);
  
    severalCitations += generatedCitation + '<br/>';
    severalCitations = severalCitations.replace('undefined', '');
  
      
      console.log("resultat :" + generatedCitation + "/ " + severalCitations);
    }
  document.getElementById('listCitation').innerHTML = severalCitations;
  //return generatedCitation;

};

