class CitationBlock {
    constructor(content, isPluriel) {
        this.content = content;
        this.isPluriel = isPluriel;
    }
}

/* VERSION FRANÇAISE = premier générateur de citations*/
/* Création bloc de contextes */
const contextBlock_1 = new CitationBlock("La nuit, ", false);
const contextBlock_2 = new CitationBlock("En avril, ", false);
const contextBlock_3 = new CitationBlock("A Paris, ", false);
const contextBlock_4 = new CitationBlock("Quand la lune est rousse, ", false);
const contextBlock_5 = new CitationBlock(" ", false);
const contextBlock_6 = new CitationBlock("Comme chaque vendredi, ", false);

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
const allContextBlocks = [contextBlock_1, contextBlock_2, contextBlock_3, contextBlock_4, contextBlock_5, contextBlock_6];
/* Regroupement des bloc de sujets en tableau */
const allSubjectBlocks = [subjectBlock_1, subjectBlock_2, subjectBlock_3, subjectBlock_4, subjectBlock_5];
/* Regroupement des bloc de verbes en tableau */
const allVerbBlocks = [verbBlock_1, verbBlock_2, verbBlock_3, verbBlock_4, verbBlock_5];
/* Regroupement des bloc de d'objets en tableau */
const allObjectBlocks = [objectBlock_1, objectBlock_2, objectBlock_3, objectBlock_4, objectBlock_5];


/* VERSION ANGLAISE = deuxième générateur de citations*/
/* Création bloc de contextes */
const eng_contextBlock_1 = new CitationBlock("At midnight, ", false);
const eng_contextBlock_2 = new CitationBlock("In april, ", false);
const eng_contextBlock_3 = new CitationBlock("In Paris, ", false);
const eng_contextBlock_4 = new CitationBlock("When the moon is red, ", false);
const eng_contextBlock_5 = new CitationBlock(" ", false);

/* Création bloc de sujet */
const eng_subjectBlock_1 = new CitationBlock("Marie ", false);
const eng_subjectBlock_2 = new CitationBlock("birds ", true);
const eng_subjectBlock_3 = new CitationBlock("we ", false);
const eng_subjectBlock_4 = new CitationBlock("Captain Brain ", false);
const eng_subjectBlock_5 = new CitationBlock("a recent picture ", false);

/* Création bloc de verbes */
const eng_verbBlock_1 = new CitationBlock("sings ", false);
const eng_verbBlock_2 = new CitationBlock("gives ", false);
const eng_verbBlock_3 = new CitationBlock("dances with ", false);
const eng_verbBlock_4 = new CitationBlock("is very close to ", false);
const eng_verbBlock_5 = new CitationBlock("peck ", true);

/* Création bloc d'objets */
const eng_objectBlock_1 = new CitationBlock("dry bread.", false);
const eng_objectBlock_2 = new CitationBlock("a pretty frog.", false);
const eng_objectBlock_3 = new CitationBlock("Chantilly cream.", false);
const eng_objectBlock_4 = new CitationBlock("a new masterpiece.", false);
const eng_objectBlock_5 = new CitationBlock("Robert Palmer.", true);

/* Regroupement des bloc de contextes en tableau */
const allEngContextBlocks = [eng_contextBlock_1, eng_contextBlock_2, eng_contextBlock_3, eng_contextBlock_4, eng_contextBlock_5];
/* Regroupement des bloc de sujets en tableau */
const allEngSubjectBlocks = [eng_subjectBlock_1, eng_subjectBlock_2, eng_subjectBlock_3, eng_subjectBlock_4, eng_subjectBlock_5];
/* Regroupement des bloc de verbes en tableau */
const allEngVerbBlocks = [eng_verbBlock_1, eng_verbBlock_2, eng_verbBlock_3, eng_verbBlock_4, eng_verbBlock_5];
/* Regroupement des bloc de d'objets en tableau */
const allEngObjectBlocks = [eng_objectBlock_1, eng_objectBlock_2, eng_objectBlock_3, eng_objectBlock_4, eng_objectBlock_5];