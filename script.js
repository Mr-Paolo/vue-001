
Vue.createApp({
    data() {
        return {
            // selectIndex : 0,
            // images : ["giacomo.png", "matteo.png"],
            giacomoHp: 100,
            matteoHp: 100,
            level: 0,
        }
    },
    methods: {
        keyClick(e) {
            console.log(e)
            console.log(e.key)
            if (e.key == 'm'){
                this.hitMatteo()
            }
        },
        levelUp() {
            this.level++
        },
        hitMatteo() {
            // to decrease the value, you will need to change 
            // the this.giacomoHp variable
            // this.giacomoHp = .......
            this.matteoHp = this.matteoHp - 10

            if ( this.matteoHp <= 0){
                // do something when it is dead
            }
        },
        hitGiacomo() {
            if (this.giacomoHp < 1){
                return false
            }
            this.giacomoHp = this.giacomoHp - 10
            if ( this.giacomoHp <= 0){
                // do something when it is dead
                // YOU CAN LIKE FOR EXAPLE PLAY A ASOUND
                console.log(this.giacomoHp)
            }

        },
    },
    mounted() {
        window.onkeydown = (e) => {
            this.keyClick(e)
        }
    }
}).mount('.container')