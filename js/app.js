var app = new Vue({
    el: '#app',
    data: {
        isi1: '',
        isi2: '',
        keterangan: '',
        tampil: false
    },
    watch: {
        isi2: 'ketik'
    },
    methods: {
        ketik: function () {
            if (this.isi2 == this.isi1) {
                this.keterangan = '<i class="text-success">hati kita selalu sama</i>';
                this.tampil = true;
            } else {
                this.keterangan = '<i class="text-danger">hati kita berbeda</i>'
                this.tampil = false;
            }
        }
    }
})