<script setup>
import FormsAdd from '@/components/FormsAdd.vue'
import DisplayAdd from '@/components/DisplayAdd.vue'
import { ref } from 'vue'

const user = ref({
  name: '',
  email: '',
  password: '',
  dataNasc: '',
  endereco: '',
  cidade: '',
  estado: 'none',
  linguagens: [],
  bio: ''
})

const mostrarInformacoes = ref(true)

function editarInfos() {
  mostrarInformacoes.value = true
}


function salvarInfos(valor) {
  user.value = valor
  mostrarInformacoes.value = false
}
</script>

<template>
<div v-if="mostrarInformacoes">
<forms-add @salvar="salvarInfos"  />
</div>
<div v-else>
  <display-add :user="user" @editar="editarInfos"/>
</div>
</template>

<style scoped></style>
