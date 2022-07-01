// Declaraciones
//--------------
let allLibros


let Carrito = JSON.parse(localStorage.getItem('Carrito')) || []



// Spread Operator





// Query de elementos
//-------------------

const librosListcontainer = document.querySelector('.menu_libros')

const cardname = document.querySelector('.cardname')

const autor = document.querySelector('.autor')

const date = document.querySelector('.date')
const format = document.querySelector('.format')
const price = document.querySelector('.price')
const foto = document.querySelector('.foto')
const cardCTA = document.querySelector('.cardCTA')

const teamContainer = document.querySelector('.teamContainer')



// Funciones
//----------



const renderizarListaLibros = () => {
    allLibros.forEach((libros) => {
        const librobutton = document.createElement('button')
        librobutton.className = 'menuTab'
        librobutton.setAttribute('data-id', libros.id)
        librobutton.innerHTML = `
        <div class="menuTabImg">
            <img src="${libros.img}" alt="${libros.name}">
        </div>
        <span class="menuTabText"> ${libros.name} </span>
        `
        librosListcontainer.append(librobutton)

    })
    
    agregarListenerbotones()


}

const renderizarDatosLibros = (e) => {
    const libroIdSelected = e.target.closest('.menuTab').getAttribute('data-id')
    const libroSelected = allLibros.find((libros) => libros.id == libroIdSelected )
    console.log(libroSelected)

    cardname.textContent = libroSelected.name
    autor.textContent = libroSelected.autor
    date.textContent = libroSelected.date
    format.textContent = libroSelected.format
    price.textContent = libroSelected.price
    foto.setAttribute('src',libroSelected.img)
    cardCTA.setAttribute('data-id', libroSelected.id)

}

const renderizarCarrito = () => {
    teamContainer.innerHTML = ''
    Carrito.forEach((libros) => {
        const librosCarritobutton = document.createElement('div')
        librosCarritobutton.className = 'teamPokemon'
        librosCarritobutton.innerHTML = `
        <img src="${libros.img}" alt="${libros.name}"></img>
        `
        teamContainer.append(librosCarritobutton)

    })


}




const agregarLibroaCarrito = (e) => {
    const libroIdSelected = e.target.getAttribute('data-id')
    const libroSelected = allLibros.find((libros) => libros.id == libroIdSelected )
    
    Carrito.length < 5 && Carrito.push(libroSelected)

    

    renderizarCarrito()

}





const agregarListenerbotones = () => {
    const librobutton = document.querySelectorAll('.menuTab')
    librobutton.forEach((button) => {
        button.addEventListener('click',renderizarDatosLibros)
    })
}



// EventListeners
//---------------


cardCTA.addEventListener('click', agregarLibroaCarrito)







// libreria 23/06

document.querySelector('#BotonComprar').addEventListener('click',() => {
    Swal.fire(
        'Compra Exitosa',
        'Gracias por su compra,vuelva pronto!',
        'success'
      )
})

// Ejecuciones 
//------------

// renderizarListaLibros()

fetch('../data/libros.json')
    .then((res) => res.json())
    .then((jsonResponse) =>{
        allLibros = jsonResponse.data
        renderizarListaLibros(allLibros)
    })







