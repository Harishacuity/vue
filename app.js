const app = Vue.createApp({ //contains root components and it contains 'data' and 'functions' that we use in the "app"
    data() {
        return {
            showSalary: true,
            name: 'Harish',
            designation: 'AI Engineer',
            salary: 300000,
            x: 0,
            y: 0,
            url: 'https://github.com/Harishacuity',
            books: [{
                    name: "CHRIS RYAN's standBy, standBy",
                    author: "Chris Ryan",
                    img: 'assets/chrisSB.jpg',
                    fav: true
                },
                {
                    name: "BIG ANSWERS TO BIG QUESTIONS",
                    author: "Stephen Hawking",
                    img: 'assets/BABQ.jpg',
                    fav: true
                },
                {
                    name: "ICON",
                    author: "Fedrick Foreseith",
                    img: 'assets/ICON.jpg',
                    fav: false
                }
            ]
        }
    },
    methods: {
        resetSalary() {
            console.log('came to reset')
            this.salary = 300000
        },
        changeDesignation(designation) {
            this.designation = designation
        },
        resetDesignation() {
            this.designation = 'AI Engineer'
        },
        toggleSalaryView() {
            this.showSalary = !this.showSalary
        },
        handleEvent(e, arg) {
            console.log('event', arg, e)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.fav = !book.fav
        }
    },

    computed:{
        favBooks(){
            return this.books.filter((book)=> book.fav)
        }
    }
})

app.mount('#app')