
Vue.createApp({
    data() {
        return {
            // selectIndex : 0,
            // images : ["giacomo.png", "matteo.png"],
            giacomoHp: 100,
            matteoHp: 100,
        }
    },
    methods: {
        hitMatteo() {
            // to decrease the value, you will need to change 
            // the this.giacomoHp variable
            // this.giacomoHp = .......
            this.matteoHp = this.matteoHp - 10
        },
        hitGiacomo() {
            this.giacomoHp = this.giacomoHp - 10
        },
    }
}).mount('.container')