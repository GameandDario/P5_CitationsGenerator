
/* Déclaration de la fonction pour afficher une citation */

const generateCrazZytation = () => {
    /* Génération d'un bloc de contextes aléatoire */
    const randomContext = allContextBlocks[Math.floor(Math.random() * allContextBlocks.length)];
    /* Génération d'un bloc de sujets aléatoire */
    const randomSubject = allSubjectBlocks[Math.floor(Math.random() * allSubjectBlocks.length)];
    /* Génération d'un bloc de verbes aléatoire */
    const randomVerb = allVerbBlocks[Math.floor(Math.random() * allVerbBlocks.length)];
    /* Génération d'un bloc d'objets' aléatoire */
    const randomObject = allObjectBlocks[Math.floor(Math.random() * allObjectBlocks.length)];
    
    /* Tests */
    console.log("longueur Tableau " + allContextBlocks.length);
    console.log(randomContext);
    console.log(randomContext.content);
    /* .content est la clé déclarée dans la classe citationBlock ; accessible dans chaque objet instance de cette classe */
    const myCitation = randomContext.content + randomSubject.content + randomVerb.content + randomObject.content;
    if (myCitation[0]== ' ') {
        return '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
    }
    else {
        return '"' + myCitation + '"';
    }
}

const initialize = () => { return " Citation réinitialisée<br/>"; }





