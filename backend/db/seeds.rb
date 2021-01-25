Album.destroy_all
Genre.destroy_all

ambient = Genre.create(
    name: "Ambient",
    description: "Ambient is a genre that aims to be as ignorable as it is accessible.",
    url: "https://en.wikipedia.org/wiki/Ambient_music"
)

experimental = Genre.create(
    name: "Experimental",
    description: "Experimental is a genre that seeks to defy convention and create something new.",
    url: "https://en.wikipedia.org/wiki/Experimental_music"
)

fusion = Genre.create(
    name: "Fusion",
    description: "Fusion is a term implying multiple genre elements are being combined.",
    url: "https://en.wikipedia.org/wiki/fusion_music"
)

Album.create(
    title: "The Secret Life of Plants",
    artist: "Stevie Wonder",
    genre: fusion
)

Album.create(
    title: "Aloe Extract Sound",
    artist: "Momoe Soeda",
    genre: experimental
)

Album.create(
    title: "Plantasia",
    artist: "Mort Garson",
    genre: ambient
)

Album.create(
    title: "The Wild Palms",
    artist: "Croatian Amor",
    genre: experimental
)

Album.create(
    title: "Sage & Spirit",
    artist: "The Grateful Dead",
    genre: fusion
)

Album.create(
    title: "Music To Grow Plants",
    artist: "George Milstein",
    genre: fusion
)

Album.create(
    title: "Sounds from the Soil",
    artist: "Anthurium Andreanum",
    genre: ambient
)

Album.create(
    title: "Rhapsody in Green",
    artist: "Roger Roger",
    genre: experimental
)