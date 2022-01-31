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
        let level = document.getElementById("level").value;
        let numBox;
        let size ;

        htmlGridTitle.classList.add('ms_none')

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

        const node = createGridElement(size);

        node.innerHTML += i;

        node.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked');
        });

        gridElement.appendChild(node);

        }
    }
);

