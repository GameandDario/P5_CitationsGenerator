class CitationBlock {
    constructor(content, isPluriel) {
        this.content = content;
        this.isPluriel = isPluriel;
    }
}

/* Création bloc de contextes */
const contextBlock_1 = new CitationBlock("La nuit, ", false);
const contextBlock_2 = new CitationBlock("En avril, ", false);
const contextBlock_3 = new CitationBlock("A Paris, ", false);
const contextBlock_4 = new CitationBlock("Quand la lune est rousse, ", false);
const contextBlock_5 = new CitationBlock(" ", false);

/* Création bloc de sujet */
const subjectBlock_1 = new CitationBlock("Marie ", false);
const subjectBlock_2 = new CitationBlock("les oiseaux ", true);
const subjectBlock_3 = new CitationBlock("on ", false);
const subjectBlock_4 = new CitationBlock("le capitaine ", false);
const subjectBlock_5 = new CitationBlock("la chaîne alimentaire ", false);

/* Création bloc de verbes */
const verbBlock_1 = new CitationBlock("chante ", false);
const verbBlock_2 = new CitationBlock("crée ", false);
const verbBlock_3 = new CitationBlock("épouse ", false);
const verbBlock_4 = new CitationBlock("se juxtapose à ", false);
const verbBlock_5 = new CitationBlock("picorent ", true);

/* Création bloc d'objets */
const objectBlock_1 = new CitationBlock("du pain dur.", false);
const objectBlock_2 = new CitationBlock("une jolie grenouille.", false);
const objectBlock_3 = new CitationBlock("de la chantilly.", false);
const objectBlock_4 = new CitationBlock("un nouveau chef d'œuvre.", false);
const objectBlock_5 = new CitationBlock("Robert Palmer.", true);

/* Regroupement des bloc de contextes en tableau */
const allContextBlocks = [contextBlock_1, contextBlock_2, contextBlock_3, contextBlock_4, contextBlock_5];
/* Regroupement des bloc de sujets en tableau */
const allSubjectBlocks = [subjectBlock_1, subjectBlock_2, subjectBlock_3, subjectBlock_4, subjectBlock_5];
/* Regroupement des bloc de verbes en tableau */
const allVerbBlocks = [verbBlock_1, verbBlock_2, verbBlock_3, verbBlock_4, verbBlock_5];
/* Regroupement des bloc de d'objets en tableau */
const allObjectBlocks = [objectBlock_1, objectBlock_2, objectBlock_3, objectBlock_4, objectBlock_5];



/* Déclaration de la fonction pour afficher une citation */
const actionOnBtn = () => {
    document.getElementById("generateCitation");
    actionOnBtn.addEventListener("click", generateCrazZytation);
    actionOnBtn.addEventListener("click", generateCrazZytation);
}
const generateCrazZytation = () => {
    /* Génération d'un bloc de contextes aléatoire */
    const randomContext = allContextBlocks[Math.floor(Math.random() * allContextBlocks.length)];
    /* Génération d'un bloc de sujets aléatoire */
    const randomSubject = allSubjectBlocks[Math.floor(Math.random() * allSubjectBlocks.length)];
    /* Génération d'un bloc de verbes aléatoire */
    const randomVerb = allVerbBlocks[Math.floor(Math.random() * allVerbBlocks.length)];
    /* Génération d'un bloc d'objets' aléatoire */
    const randomObject = allObjectBlocks[Math.floor(Math.random() * allObjectBlocks.length)];

    const myCitation = randomContext.content + randomSubject.content + randomVerb.content + randomObject.content;
    if (myCitation[0]== ' ') {
        return '"' + myCitation[1].toUpperCase() + myCitation.substring(2) + '"';
    }
    else {
        return '"' + myCitation + '"';
    }
}

const initialize = () => { return " <br/>"; }





