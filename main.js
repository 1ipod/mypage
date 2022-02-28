function addmodule(name, path){
    let pkgs = document.cookie
    if (pkgs != '') {

    } else {
        
    }
}
function loadmodules(){
    let json = document.cookie
    let x = JSON.parse(json).cards
    for(let i = 0; i < hmods.length; i++){
        let partshtml = JSON.parse(hmods[i]).html
        let partsname = JSON.parse(hmods[i]).name
        let deck = document.getElementById("deck")
        deck.insertAdjacentHTML("beforeend",'<iframe class="popup card" id="'+partsname+'" src="'+partshtml[i]+'></iframe>' );
    }

}