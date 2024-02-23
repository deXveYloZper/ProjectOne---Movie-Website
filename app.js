const movies = [
    {
      id: 1,
      title: "Inglourious Basterds",
      desc: "A tale of vengeance during Nazi-occupied France.",
      img: "/images/1.jpg"
    },
    {
      id: 2,
      title: "Django Unchained",
      desc: "A freed slave's brutal journey for justice.",
      img: "/images/2.jpg"
    },
    {
      id: 3,
      title: "Icarus",
      desc: "The dark truth behind sports doping.",
      img: "/images/3.jpg"
    },
    {
      id: 4,
      title: "The Green Mile",
      desc: "Miracles and mystery on death row.",
      img: "/images/4.jpg"
    },
    {
      id: 5,
      title: "The Godfather",
      desc: "An epic tale of Mafia family power.",
      img: "/images/5.jpg"
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      desc: "Hope and resilience in the face of despair.",
      img: "/images/6.jpg"
    },
    {
      id: 7,
      title: "The Wolf of Wall Street",
      desc: "Excess and ambition in American finance.",
      img: "/images/7.jpg"
    },
    {
      id: 8,
      title: "No Country for Old Men",
      desc: "A violent cat-and-mouse chase in the desert.",
      img: "/images/8.jpg"
    },
    {
      id: 9,
      title: "Mad Max: Fury Road",
      desc: "A high-octane fight for survival.",
      img: "/images/9.jpg"
    }
  ];
  

//Creating a function to dynamically display my favourite movies from the movies array
function generateMovieList(movies){
    const movieList = document.getElementById('movieList')

    movies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movieListItem');

        movieItem.innerHTML = 
        `
        <img src="${movie.img}" alt="" class="movieListItemIMG">
        <span class="movieListItemTitle">${movie.title}</span>
        <p class="movieListItemDesc">${movie.desc}</p>
        <button class="movieListItemButton">WATCH</button>
        `;

        movieList.appendChild(movieItem)
    })
}
generateMovieList(movies)

//movieListArrow functionality

const arrows = document.querySelectorAll(".movieListCarouselArrow");
const movieLists = document.querySelectorAll(".movieList")

arrows.forEach((arrow, index) =>{
    const movieListLength = movies.length
    let clickCounter = 0 
    arrow.addEventListener("click", () => {
        clickCounter++
        if (movieListLength - (6 + clickCounter) >=0 ){

            movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value-300}px)`
        } else{
            movieLists[index].style.transform = "translateX(0)"
            clickCounter = 0
        }
    })
})