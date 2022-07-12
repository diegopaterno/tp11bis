let link = document.querySelector('link')

let normal = () => {
    link.setAttribute("href", "css/estilos.css")
}

let retro = () => {
    link.setAttribute("href", "css/retro.css")
}

let urbano = () => {
    link.setAttribute("href", "css/urbano.css")
}



document.querySelector('#retro').addEventListener('click', retro)
document.querySelector('#urbano').addEventListener('click', urbano)
document.querySelector('#normal').addEventListener('click', normal)