var app = new Vue({
    el: '#app',
    data: {
        isi: '',
        keterangan: ''
    },
    watch: {
        isi: function () {
            this.keterangan = "sedang mengetik"
        }
    }
})