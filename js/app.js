var app = new Vue({
    el: '#app',
    data: {
        aku: 1,
        kamu: 1
    },
    computed: {
        jumlah: function () {
            return this.aku + this.kamu
        }
    }
})