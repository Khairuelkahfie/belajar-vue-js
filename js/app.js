var app = new Vue({
    el: '#app',
    data: {
        aku: 1,
        kamu: 1,
        jumlah: null,
    },
    methods: {
        nikahkan: function () {
            return this.jumlah = this.aku + this.kamu
        }
    }
})