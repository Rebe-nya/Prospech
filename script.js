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
const txtVystup = document.getElementById("hodnoceni");

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
function tbCheck(cjl, mat, prg, anj){
    !cjl || cjl <= 0 || cjl >= 6 ? msgCJL.classList.remove("invisible") : msgCJL.classList.add("invisible");
    !mat || mat <= 0 || mat >= 6 ? msgMAT.classList.remove("invisible") : msgMAT.classList.add("invisible");
    !prg || prg <= 0 || prg >= 6 ? msgPRG.classList.remove("invisible") : msgPRG.classList.add("invisible");
    !anj || anj <= 0 || anj >= 6 ? msgANJ.classList.remove("invisible") : msgANJ.classList.add("invisible");
}

// tlačítko pro vyhodnocení
bVyhodnot.onclick = function() {
        let cjl = parseInt(tbCJL.value);
        let mat = parseInt(tbMAT.value);
        let prg = parseInt(tbPRG.value);
        let anj = parseInt(tbANJ.value);
        let prumer = (cjl + mat + prg + anj) / 4;
        let predmety = Array(cjl, mat, prg, anj);

        tbCheck(cjl, mat, prg, anj);

        if ((predmety.every(num => num > 0 && num < 6))){
            if (cjl===5 || mat===5 || prg===5 || anj===5) {
                // NEPROSPEL
                ikona.src = "img/neprospel.png";
                txtVystup.textContent = "Student neprospěl";
            }
            else {
                if (prumer<=1.5 && mat<3 && prg<3 && anj<3 && cjl<3) {
                    // PROSPEL S VYZNAMENANI
                    ikona.src = "img/vyznamenani.png";
                    txtVystup.textContent = "Student prospěl s vyznamenáním";
                }
                else {
                    // PROSPEL
                    ikona.src = "img/prospel.png";
                    txtVystup.textContent = "Student prospěl";
                }
            }
            dVystup.style.display = ""; 
        }
        else {
            dVystup.style.display = "none"; 
        }
}