var app = new Vue({
    el: '#app',
    data: {
        aku: 2,
        kamu: 5,
        tambah: null,
        kurangi: null,
        kalian: null,
        bagian: null
    },
    computed: {
        jumlah: function () {
            return this.aku + this.kamu
        },
        kurang: function () {
            return this.aku - this.kamu
        },
        kali: function () {
            return this.aku * this.kamu
        },
        bagi: function () {
            return this.aku / this.kamu
        }
    },
    methods: {
        nikahkan: function () {
            this.tambah = this.aku + this.kamu,
                this.kurangi = this.aku - this.kamu,
                this.kalian = this.aku * this.kamu,
                this.bagian = this.aku / this.kamu
        }
    }
})