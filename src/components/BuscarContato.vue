<template>
<div class="container">
    <div class="container-input">
        <div class="input">
            <input type="text" v-model='busca'>
        </div>
        <div class="label">
            Buscar Contato
        </div>
    </div>

    <div class="btn">
        <router-link to="/add">Add</router-link>
    </div>
</div>
</template>

<script>
export default {
    watch: {
        busca () {
            this.$emit('setBusca', this.busca)
        }
    },
    data () {
        return {
            busca: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    justify-content space-around
    .input
        flex 1
    .label
        flex 1
    .btn
        flex 3
</style>