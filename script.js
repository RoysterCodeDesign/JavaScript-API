
const api_key = "https://api.nasa.gov/planetary/apod?api_key=juMYsXjg7uuldkn779ElyHsnm3r9GeKj1G5ThdMq"

const fetchNASAData = async () => {
    try {
        const response = await fetch(`${api_key}`)
        const data = await response.json()
        console.log('SPACESTAGRAM DATA', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
    document.getElementById('copyright').textContent = data.copyright
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()

let liked = false;

const toggleLike = () => {
    let likeButton = document.getElementById('heart')
    if (!liked) {
        liked = true
        likeButton.innerHTML = '<i class="fa-solid fa-heart" aria-hidden="true"></i>'
    }
    else {
        liked = false
        likeButton.innerHTML = '<i class="fa-regular fa-heart" aria-hidden="true"></i>'
    }
}