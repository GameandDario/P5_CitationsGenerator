const selectNumber = document. getElementById('heroNumber');
const logNumber = document.getElementById('res-number');


selectNumber.addEventListener('change', updateNumberValue);
let value;

function updateNumberValue(e) {
  logNumber.textContent = e.target.value; 
  value= logNumber.textContent;
  console.log("valeur demandée value :"+value);
  return value; 
};

const heros = ["Tintin", " Milou", " Haddock", " La Castafiore", " Dupond" ];

const showHeros = () => {
  console.log('valeur demandée héros'+' '+value);
  i=0;
  let text="";
  let globalText="";
  while (i<value) {
    text+= '<br/>'+heros[i];   
    i++;
    console.log(text);
    globalText ="Vos héros sont : <span class='font-weight-bold'>"+text+'</span>.<br/>'+value+" héro(s) parmi <span class='font-italic'>"+heros+'.</span>'; 
  }
  document.getElementById("listHero").innerHTML = globalText ;
  console.log(globalText);
  console.log (value+" héro(s) parmi "+heros);
};
showHeros();