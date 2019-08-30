<template>
  <div class="add">
    <h1>Add</h1>
    <form @submit.prevent="getCadastro">
        <div class="form_field_row">
            <input type="text" v-model="form.name" required/>
            <label for="name">Nome</label>
        </div>

        <div class="form_field_row">
            <input type="email" v-model="form.email" required/>
            <label for="email">E-mail</label>
        </div>

        <div class="form_field_row">
            <input type="text" v-model="form.avatarURL" required/>
            <label for="avatarURL">Avatar</label>
        </div>
        <div class="form_field_row">
            <button class="btn" type="submit">Adicionar Contato</button>
            <br />
            <button class="btn" type="button" @click="$router.push('/')">Voltar</button>
        </div>
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

<style lang="stylus" scoped>
.add
    margin 20px auto
    width 980px
*
    box-sizing border-box

.form_field_row
    margin 8px
    position relative
    label
        color #aaa
        line-height 30px
        position absolute
        left 9px
        top 1px
        z-index -1
        user-select none
    input
        border: 1px solid #ccc;
        padding: 6px;
        margin: 0;
        font: 12px Arial, Helvetica, sans-serif;
        background: transparent;
        border-radius: 6px;
.form_field_row input:valid {
    background: #fff;
}
.form_field_row input {
    width: 194px;
    height: 30px;
}

.btn
    display block
    width 194px;
    padding 10px 20px
    color: #336b6b;
    background #E1EFF7
    border: solid 1px #dee;
</style>