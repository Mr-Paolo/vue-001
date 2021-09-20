
Vue.createApp({
    data() {
        return {
            selectIndex : 0,
            images : ["giacomo.png", "matteo.png"]
        }
    },
    methods: {
        setMatteo() {
            this.selectIndex = 1
        },
        setGiacomo() {
            this.selectIndex = 0
        },
    }
}).mount('.container')