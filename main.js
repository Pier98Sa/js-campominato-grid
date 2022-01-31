const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}


for (let i = 1; i<=100; i++) {

    const node = createGridElement();

    node.innerHTML += i;
    
    node.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked');
    });

    gridElement.appendChild(node);

}