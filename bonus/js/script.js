console.log('VUE OK', Vue);

const root = new Vue({
    el: '#root',
    data: {
        endpoint: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailList: []
    },
    created() {
        for(let i = 0; i < 10; i++){
            axios.get(this.endpoint)
            .then((res) => {
                const randomEmail = res.data.response
                this.emailList.push(randomEmail);
            })
            
        }
    }
})