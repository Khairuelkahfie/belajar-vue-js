var app = new Vue({
    el: '#app',
    data: {
        isi: '',
        keterangan: ''
    },
    watch: {
        isi: 'ketik'
    },
    methods: {
        ketik: function () {
            if (this.isi == 'cinta') {
                this.keterangan = 'aku juga cinta kamu'
            } else {
                this.keterangan = 'sedang mengetik'
            }

        }
    }
})