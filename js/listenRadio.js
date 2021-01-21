let citationVersion = document.querySelector('#res-citationVersion');
document.body.addEventListener('change', function(e) {
    let target = e.target;
    let message;
    switch (target.value) {
        case 'version_fr' : 
            message = "Vous avez choisi une version fr";
            break;

        case 'version_eng' :
            message = "Vous avez choisi une version anglaise";
            break;
    }
citationVersion.textContent = message;
})