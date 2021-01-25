const backendURL = 'http://localhost:9000/'
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const id = queryParams.get('id')

fetch(backendURL + `genres/${id}`)
.then(response => response.json())
.then(genre => {
        console.log(genre)
        const $genreLocation = document.querySelector('#display-genre')
        const $showGenre = document.createElement('section')

        $showGenre.innerHTML = `
        <h1>${genre.description}</h1>
        <h2>Read more about it here: <a href='${genre.url}'>${genre.url}</a></h2>
        `

        $genreLocation.append($showGenre)
    })