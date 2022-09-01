const app = new Vue({
    el: '#app',
    data: {
        num: 10,
        mailingList: []
    },
    methods: {
        fetchMail(num) {
            for (let i = 0; i < num; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        this.mailingList.push(res.data.response);
                    });
            }
        }
    },
    beforeMount() {
        this.fetchMail(this.num);
    }
});

console.log(app);