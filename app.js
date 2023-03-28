
Vue.createApp({
    data() {
        return {
            activePage: 0,
            theme: 'dark',
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
            }
    }
}).mount('body')