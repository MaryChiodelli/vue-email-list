const app = new Vue({
    el: '#app',
    data: {
        mailingList: []
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mailingList.push(res.data.response);
                });
        }
    }
});

console.log(app);