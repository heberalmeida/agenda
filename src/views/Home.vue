<template>
  <div class="home">
    <BuscarContato @setBusca="setBusca" />
    <table class="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="contato in listaContatos" :key="contato.id">
                <td class="text-center">
                    <img class="avatar" :src="contato.avatarURL" />
                </td>
                <td>{{contato.name}}</td>
                <td>{{contato.email}}</td>
                <td class="text-center">
                    <a class="btn" href="#" @click.prevent="getApagar(contato.id)">Apagar</a>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import BuscarContato from '@/components/BuscarContato'

export default {
  name: 'home',
  components: {
    BuscarContato
  },
  computed: {
      listaContatos () {
          window.contatos = this.contatos
          return this.busca ? this.contatos.filter(i => {
              return i.name.toLowerCase().includes(this.busca.toLowerCase())
          }) : this.contatos
      }
  },
  data () {
      return {
          busca: '',
          contatos: []
      }
  },
  methods: {
    setBusca (e) {
        console.log(e)
        this.busca = e
    },
    getAgenda () {
        axios('/contacts').then(resp => {
            this.contatos = resp.data.contacts
        })
    },
    getApagar (id) {
        axios.delete(`/contacts/${id}`).then(resp => {
            this.getAgenda()
            alert('apagado com sucesso')
        })
    }
  },
  mounted () {
      this.getAgenda()
  }
}
</script>

<style lang="stylus" scoped>
.home
    margin 20px auto
    width 980px
.avatar
    width 100px
.text-center
    text-align center
.table
    border solid 1px #DDEEEE
    border-collapse collapse
    border-spacing 0
    width 100%
    thead th
        background-color: #DDEFEF
        border: solid 1px #DDEEEE
        color: #336B6B
        padding: 10px
        text-align: left

    tbody td
        border: solid 1px #DDEEEE
        color: #333
        padding: 10px
        text-shadow: 1px 1px 1px #fff
.btn
    display block
    padding 10px 20px
    color #336b6b
    background #E1EFF7
    border solid 1px #dee
    text-decoration none
</style>