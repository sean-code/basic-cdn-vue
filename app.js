
const app = Vue.createApp({
    data() {
        return {
            activePage: 0,
            theme: 'dark',
            heading: "The Final Empire",
            author: "Terrence Howard",
            age: "47",
            showMovies: true,
            x: 0,
            y: 0,
            url: "https://github.com/sean-code",
            movies: [
                {movieTitle: 'Mayor of Kingstown', mainCharacter:'Jeremy Rener', poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShwJkdxVuzPPEeruvkZCM_mEe2rkaSG91j5sQ0bs4hceKEB38', isFav: true},
                {movieTitle:'Yellowstone', mainCharacter: 'Kevin Costner', poster:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQInNjxD2YfMvSzf2yTrxwzH7ryo5qNevL4MCjOaXmL_YIxN28L', isFav: true},
                {movieTitle: 'Tulsa King', mainCharacter:'Sylvester Stallone', poster:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRc2-u9RoWRtzt2Y7wqA5hyMu4fRJOVTiI74H_4e-ARbyP-DpMH', isFav: false}
            ],
            pages: [
                {
                    link: {text: "Home", url: 'index.html'},
                    pageTitle: 'Home page!',
                    paragraph: 'This is the Home page of Vue'
                },
                {
                    link: {text: "About", url: 'about.html'},
                    pageTitle: 'About page!',
                    paragraph: 'This is the About Page of Vue'
                },
                {
                    link: {text: "Contact", url: 'contact.html'},
                    pageTitle: 'Contact page!',
                    paragraph: 'This is the Contact Page'
                }
            ],
        };
    },
    methods: {
        changeTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            },
        changeHeading(heading){
            // console.log("You Clicked Me")
            // this.heading = "The Hustle"
            this.heading = heading
        },
        toggleShowMovies(){
            this.showMovies=!this.showMovies
        },
        toggleColor(movie){
            // console.log("Toggled Color")
            movie.isFav = !movie.isFav
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }else{
                console.log("No Second Argument")
            }
        },
        handleMouseMove(e){
            // console.log("Handle Mouse Move")
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('body')

// const app2 = Vue.createApp({
//     // template:'<h2>Section 2</h2>'
//     data() {
//         return{
//          heading: "The Final Empire",

//         }
//     }
// })
// app2.mount('#section2')