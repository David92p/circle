
// inseriamo un div container all'interno del body 
let body = document.getElementsByTagName('body')
let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

// inseriamo all'interno del container un nuovo div
let circle = document.createElement('div')
circle.classList.add('circle')
container.appendChild(circle)

// inseriamo un elemento <p> figlio di .container  
let par = document.createElement('p')
par.innerHTML = 'HOVER'
par.classList.add('par')
circle.appendChild(par)


// Attraverso la gestione di eventi del mouse aggiungiamo o rimuoviamo una funzione che richiama le classsi di animazione

circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('circleAnimationZoomIn')){
        circle.classList.remove('circleAnimationZoomOff')
        circle.classList.add('circleAnimationZoomIn')
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('circleAnimationZoomIn')){
        circle.classList.remove('circleAnimationZoomIn')
        circle.classList.add('circleAnimationZoomOff')
    }
});