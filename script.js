// odkazy na objekty UI
const bVyhodnot = document.getElementById("bVyhodnot");
const tbCJL = document.getElementById("tbCJL");
const tbANJ = document.getElementById("tbANJ");
const tbPRG = document.getElementById("tbPRG");
const tbMAT = document.getElementById("tbMAT");
const msgCJL = document.getElementById("msgCJL");
const msgANJ = document.getElementById("msgANJ");
const msgPRG = document.getElementById("msgPRG");
const msgMAT = document.getElementById("msgMAT");
const dVystup = document.getElementById("dVystup");
const ikona = document.getElementById("ikona");

// výchozí nastavení (inicializace)
dVystup.style.display = "none";

// událostní funkce
tbCJL.onclick = function() {
    dVystup.style.display = "none"; 
}
tbANJ.onclick = function() {
    dVystup.style.display = "none"; 
}
tbPRG.onclick = function() {
    dVystup.style.display = "none"; 
}
tbMAT.onclick = function() {
    dVystup.style.display = "none"; 
}
bVyhodnot.onclick = function() {
        let cjl = parseInt(tbCJL.value);
        let mat = parseInt(tbMAT.value);
        let prg = parseInt(tbPRG.value);
        let anj = parseInt(tbANJ.value);
        let prumer = (cjl + mat + prg + anj) / 4;
        if (cjl===5 || mat===5 || prg===5 || anj===5) {
            // NEPROSPEL
            ikona.src = "img/neprospel.png";
            dVystup.innerTEXT = "Prospečný";
        }
        else {
            if (prumer<=1.5 && mat<3 && prg<3 && anj<3 && cjl<3) {
                // PROSPEL S VYZNAMENANI
                ikona.src = "img/vyznamenani.png";
                dVystup.innerTEXT = "Prospečný";
            }
            else {
                // PROSPEL
                ikona.src = "img/prospel.png";
                dVystup.innerTEXT = "Prospečný";
            }
        }
        dVystup.style.display = "inline"; 
}