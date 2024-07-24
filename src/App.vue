<script setup>
import FormsAdd from '@/components/FormsAdd.vue'
import DisplayAdd from '@/components/DisplayAdd.vue'
import { reactive } from 'vue'

const user = reactive({
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


</script>

<template>
  <forms-add :user="user"/>

</template>

<style scoped>
</style>
