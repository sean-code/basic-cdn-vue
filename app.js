
const app = Vue.createApp({
    data() {
        return {
            activePage: 0,
            theme: 'dark',
            heading: "The Final Empire",
            author: "Terrence Howard",
            age: "47",
            showMovies: true,
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