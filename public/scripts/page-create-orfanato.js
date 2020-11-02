
// create map
const map = L.map('mapid').setView([-3.8433428,-38.499445], 13);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

// create and add marker

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer

    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//add o campo de fotos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se sim, não add ao container de imagens
    const input = newFieldContainer.children[0]
    
    if(input.value == "") {
        return // este return faz com que se o campo estiver vazio não continue a aplicação.(add campo de foto)
    }
    //limpar o campo antes de add ao container de imagens
    input.value = ''
    // adicionar o clone ao container de #images 
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ''
        return
    }
    // deletar o campo
    span.parentNode.remove();
}

// selecionar do sim e nao
function toggleSelect(event) {
    // retirar a class .active
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    // colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="opening-on-weekends"]')

    // verificar se sim ou não
    input.value = button.dataset.value
}

/* function validate(event) {
    const lat = document.querySelector('input[lat]').value
    const lng = document.querySelector('input[lng]').value
    
    //validar se lat e lng estao preenchidos
    if(lat.value = '' && lng.value = '') {
        event.preventDefault()
        alert('Selecione um ponto no mapa') 
    }
    
}
 */



