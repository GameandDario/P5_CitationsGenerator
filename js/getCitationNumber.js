/* récupérer la quantité de citations demandée */
const selectCitationNumber = document.getElementById('citationNumber');
const logCitationNumber = document.getElementById('res-citationNumber');
selectCitationNumber.addEventListener('change', updateNumberValue);

let valueSelectCitation;

function updateNumberValue(e) {
  logCitationNumber.textContent = e.target.value;
  e.stopPropagation();
  valueSelectCitation = logCitationNumber.textContent;
  console.log("valeur demandée value :" + valueSelectCitation);
  return valueSelectCitation;
};

