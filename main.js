/*Funzioni*/
const createGridElement = (classe) => {
    const node = document.createElement('div');
    node.classList.add('square');
    node.classList.add(classe);
    return node;
}
/*variabili*/
const gridElement = document.getElementById('grid');
const htmlGridTitle = document.getElementById('grid-title');
let buttonPlay = document.getElementById("play");



buttonPlay.addEventListener('click',
    function(){
        //variabili inizializzate all'interno dell'evento di click
        let level = document.getElementById("level").value;
        let numBox;
        let size ;

        //aggiunta della classe ms_none per rendere invisibile il titolo
        htmlGridTitle.classList.add('ms_none')

        //ciclo if else if per determinare il numero di box
        if(level == "Easy"){
            numBox = 100;
            size = "easy";
        }else if (level == "Hard"){
            numBox = 81;
            size = "hard";
        }else if (level == "Crazy"){
            numBox = 49;
            size = "crazy";
        }else{
            alert("scegli un livello di difficoltà")
        }

        //creazione dei quadrati nell'HTML
        for (let i = 1; i<=numBox; i++) {
        //richiamo della funzione per scrivere all'interno del HTML
        const node = createGridElement(size);

        //aggiunta del numero all'interno del box
        node.innerHTML += i;

        //aggiunta dell'ascoltatore di eventi sui box
        node.addEventListener('click', function() {
            this.classList.add('clicked');
        });

        gridElement.appendChild(node);

        }
    }
);

