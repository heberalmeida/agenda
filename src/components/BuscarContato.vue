<template>
<div class="container">
    <div class="container-input">
        <div class="input">
            <div class="form_field_row">
                <input type="text" v-model='busca' placeholder="Buscar Contato">
                <label for="buscar">Buscar Contato</label>
            </div>
        </div>
    </div>

    <div class="btn-container">
        <div class="form_field_row">
            <router-link class="btn" to="/add">Add</router-link>
        </div>
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
    margin 10px 0
    .container-input
        flex 3
    .btn-container
        flex 1
.btn
    display block
    padding 10px 20px
    color: #336b6b;
    background #E1EFF7
    border solid 1px #dee
    text-decoration none
    text-align center
.form_field_row
    margin 0
    position relative
    label
        color: #aaa
        line-height: 30px
        position: absolute;
        left: 9px;
        top: 1px;
        z-index: -1;
        user-select: none;
.form_field_row input {
    border: 1px solid #ccc;
    padding: 6px;
    margin: 0;
    font: 12px Arial, Helvetica, sans-serif;
    background: transparent;
    border-radius: 6px;
}
.form_field_row input:valid {
    background: #fff;
}
.form_field_row input {
    width: 90%
    height: 30px;
    -webkit-appearance: textfield;
}
</style>