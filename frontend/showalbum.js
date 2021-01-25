const backendURL = 'http://localhost:9000/'
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const id = queryParams.get('id')

fetch(backendURL + `albums/${id}`)
    .then(response => response.json())
    .then(album => {
        const $albumLocation = document.querySelector('#display-album')
        const $showAlbum = document.createElement('section')

        $showAlbum.innerHTML = `
        <h1>This record is ${album.title} by ${album.artist}!</h1>
        <h2>It has been classified as a <a href='/showgenre.html?id=${album.genre.id}'>${album.genre.name}</a> album.</h2>
        `

        $albumLocation.append($showAlbum)
    })