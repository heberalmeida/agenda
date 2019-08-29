<template>
  <div class="home">
    <BuscarContato @setBusca="setBusca" />
    <table>
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
                <td>
                    <img class="avatar" :src="contato.avatarURL" />
                </td>
                <td>{{contato.name}}</td>
                <td>{{contato.email}}</td>
                <td>
                    <a href="#" @click.prevent="getApagar(contato.id)">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
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
.avatar
    width 100px
</style>