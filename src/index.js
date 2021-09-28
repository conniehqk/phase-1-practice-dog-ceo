console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function renderImg(images) {
    images.message.forEach(function(imglink) {
        let imgContainer = document.getElementById('dog-image-container')
        let imgTag = document.createElement('img')
        imgTag.src = imglink
        imgContainer.appendChild(imgTag)
    });
}
function ceo() {
    fetch(imgUrl).then(resp=>resp.json()).then(json=>renderImg(json))
}
document.addEventListener('DOMContentLoaded', ceo)

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function changeColor(element) {
    element.style.color = 'blue'
}

function renderBreed(object) {
    for (const name in object.message) {
        let breedContainer = document.getElementById('dog-breeds')
        let breed = document.createElement('li')
        breed.id = name
        breed.textContent = name
        breed.addEventListener('click', function() {
            document.getElementById(name).style.color = 'blue'
        })
        document.getElementById('breed-dropdown').addEventListener('change', function(event) {
            const letter = event.target.value
            if (name[0]===letter) {
                breedContainer.appendChild(breed)
            }
        })
        breedContainer.appendChild(breed)
    }
}
function breed() {
    fetch(breedUrl).then(resp=>resp.json()).then(json=>renderBreed(json))
}
document.addEventListener('DOMContentLoaded', breed)