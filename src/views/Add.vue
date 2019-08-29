<template>
  <div class="about">
    <h1>Add</h1>
    <form @submit.prevent="getCadastro">
        <input type="text" v-model="form.name" placeholder="Nome">
        <input type="text" v-model="form.email" placeholder="E-mail">
        <input type="text" v-model="form.avatarURL" placeholder="Avatar">
        <button type="submit">Adicionar Contato</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Add',
    data () {
        return {
            form: {
                name: '',
                email: '',
                avatarURL: ''
            }
        }
    },
    methods: {
        getCadastro () {
            axios.post('/contacts', {
                name: this.form.name,
                email: this.form.email,
                avatarURL: this.form.avatarURL
            }).then(resp => {
                console.log(resp)
                this.$router.push('/')
            })
        }
    }
}
</script>