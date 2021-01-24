
let message;
let target;

let result = document.getElementById('finale_res-citationVersion');
document.body.addEventListener('change', function(e) {
  target = e.target;
  

  switch (target.value) {
    case  'version_fr' : 
    message = ' française';
    break;
    case  'version_eng' : 
    message = ' anglaise';
    break;
  }
  result.textContent = message;
  console.log("version demandée : " + message);
  return message; 
});