const backendURL = 'http://localhost:9000/'

fetch(backendURL + 'albums')
    .then(response => response.json())
    .then(albums => albums.forEach(album => {
        const $albumDisplayLocation =  document.querySelector('#display-albums')
        const $displayALbumInfo = document.createElement('h3')

        $displayALbumInfo.innerHTML = `<a href='/showalbum.html?id=${album.id}'>${album.title}</a>`

        $albumDisplayLocation.append($displayALbumInfo)
    }))

fetch(backendURL + 'genres')
    .then(response => response.json())
    .then(genres => genres.forEach(genre => {
        const $genreFormLocation = document.querySelector('#genre-form')
        const $genreTitle = document.createElement('option')

        $genreTitle.value = genre.id
        $genreTitle.textContent = genre.name

        $genreFormLocation.append($genreTitle)
    }))
