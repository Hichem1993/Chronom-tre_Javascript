// Les variables :
let sp, btn_start, btn_stop, t, ms, s, mn, h;

// Fonction pour initialiser les variable quand la page se charge

window.onload = function(){
    sp = document.getElementsByTagName("span");
    btn_start = document.getElementById("start");
    btn_stop = document.getElementById("stop");
    t;
    ms = 0, s = 0, mn = 0, h = 0 ;
}

// Mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms = 1;
        s += 1;
    }
    if(s == 60){
        s = 0;
        mn += 1;
    }
    if(mn == 60){
        mn = 0;
        h += 1;
    }
    // Insertion des valeurs dans les span
    // [0] permet de selectionner le premier span 
    sp[0].innerHTML = h + "h";
    // [1] permet de selectionner le 2eme span 
    sp[1].innerHTML = mn + "min";
    // [2] permet de selectionner le 3eme span 
    sp[2].innerHTML = s + "s";
    // [3] permet de selectionner le 4eme span 
    sp[3].innerHTML = ms + "ms";
}


// Mettre en place la fonction du bouton start

const start = () => {
    // Execute la function update_chrono() toute les 100ms
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

// Stoper le chronometre

const stop = () => {
    // Suppression de l'interval t que nous avions créer
    clearInterval(t); 
    btn_start.disabled = false;
}


// Initialiser les valeur du compteur

const reset = () => {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    // inserer ces nouvelles valeur dans les spans
    // [0] permet de selectionner le premier span 
    sp[0].innerHTML = h + "h";
    // [1] permet de selectionner le 2eme span 
    sp[1].innerHTML = mn + "min";
    // [2] permet de selectionner le 3eme span 
    sp[2].innerHTML = s + "s";
    // [3] permet de selectionner le 4eme span 
    sp[3].innerHTML = ms + "ms";
}