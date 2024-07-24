<script setup>
import { ref } from 'vue'

/*Função - Validar Formulario*/
const mostrarInformacoes = ref(true)
function InfoBtn() {
  if (user.value.password == confirmPassword.value) {
    if (user.value.estado !== 'none') {
      mostrarInformacoes.value = !mostrarInformacoes.value
    } else {
      estadoNulo.value = !estadoNulo.value
    }
  } else {
    senhaDivergente.value = !senhaDivergente.value
  }
}
</script>
<template>

  <!--Reultado Formulario-->
  <main>
    <div class="flex flex-col justify-center items-center w-screen h-screen bg-purple-900">
      <div class="flex flex-col w-70/1 h-50/1 rounded-xl bg-white overflow-y-auto px-16">
        <div class="flex sticky justify-center w-full font-poppins py-5">
          <h1 class="text-6xl font-poppins">Infos</h1>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col w-45/1 gap-4">
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="nomeID">Nome:</label>
              <input class="px-1" type="text" disabled id="nomeID" :value="user.name" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="senhaID">Senha:</label>
              <input class="px-1" type="text" disabled id="senhaID" :value="user.password" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="endereçoID">Endereço:</label>
              <input class="px-1" type="text" disabled id="endereçoID" :value="user.endereco" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="estadoID">Estado:</label>
              <input class="px-1" type="text" disabled id="estadoID" :value="user.estado" />
            </div>
          </div>
          <div class="flex flex-col w-45/1 gap-4">
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="emailID">Email:</label>
              <input class="px-1" type="text" disabled id="emailID" :value="user.email" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="dataNascID">Data de Nascimento:</label>
              <input class="px-1" type="text" disabled id="dataNascID" :value="user.dataNasc" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="cidadeID">Cidade:</label>
              <input class="px-1" type="text" disabled id="cidadeID" :value="user.cidade" />
            </div>
            <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md">
              <label class="infoLabel" for="hobbiesID">Hobbies:</label>
              <input class="px-1" type="text" disabled id="hobbiesID" :value="user.hobbies" />
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md my-4 items-center">
            <label class="infoLabel" for="linguagensID">Linguagem(s) de programação:</label>
            <input
              class="px-1 w-full text-center"
              type="text"
              id="linguagensID"
              disabled
              :value="user.linguagens"
            />
          </div>
          <div class="flex flex-col border-2 border-gray bg-gray-200 rounded-md mb-4">
            <label class="infoLabel" for="bioID">Biografia:</label>
            <textarea class="px-1" type="text" disabled id="bioID" :value="user.bio"> </textarea>
          </div>
        </div>
      </div>
      <input
        @click="InfoBtn()"
        class="bg-white text-purple-900 rounded-2xl w-28 p-2 cursor-pointer mt-4 text-center font-medium"
        type="button"
        value="Editar"
      />
    </div>
  </main>
</template>
<style scoped></style>
