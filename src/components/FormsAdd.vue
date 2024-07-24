<script setup>
import {ref} from 'vue'

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

const estados = ref([
  { name: 'Acre', sigla: 'AC' },
  { name: 'Alagoas', sigla: 'AL' },
  { name: 'Amapá', sigla: 'AP' },
  { name: 'Amazonas', sigla: 'AM' },
  { name: 'Bahia', sigla: 'BA' },
  { name: 'Ceará', sigla: 'CE' },
  { name: 'Distrito Federal', sigla: 'DF' },
  { name: 'Espírito Santo', sigla: 'ES' },
  { name: 'Goiás', sigla: 'GO' },
  { name: 'Maranhão', sigla: 'MA' },
  { name: 'Mato Grosso', sigla: 'MT' },
  { name: 'Mato Grosso do Sul', sigla: 'MS' },
  { name: 'Minas Gerais', sigla: 'MG' },
  { name: 'Pará', sigla: 'PA' },
  { name: 'Paraíba', sigla: 'PB' },
  { name: 'Paraná', sigla: 'PR' },
  { name: 'Pernambuco', sigla: 'PE' },
  { name: 'Piauí', sigla: 'PI' },
  { name: 'Rio de Janeiro', sigla: 'RJ' },
  { name: 'Rio Grande do Norte', sigla: 'RN' },
  { name: 'Rio Grande do Sul', sigla: 'RS' },
  { name: 'Rondônia', sigla: 'RO' },
  { name: 'Roraima', sigla: 'RR' },
  { name: 'Santa Catarina', sigla: 'SC' },
  { name: 'São Paulo', sigla: 'SP' },
  { name: 'Sergipe', sigla: 'SE' },
  { name: 'Tocantins', sigla: 'TO' },
  { name: 'Estrangeiro', sigla: 'EX' }
])

/*Função - Status do Eye Icon (Visualizar Senha) */
const eyeType = ref('bi-eye-fill')
function tradeEyeType() {
  if (eyeType.value == 'bi-eye-fill') {
    eyeType.value = 'bi-eye-slash-fill'
  } else {
    eyeType.value = 'bi-eye-fill'
  }
}

/*Função - Revelar Senha (Mudar type para text/password) */
const showPassword = ref('password')
function hidePassword() {
  if (showPassword.value == 'password') {
    showPassword.value = 'text'
  } else {
    showPassword.value = 'password'
  }
}
/*Validar se o estado está 'none'*/
const estadoNulo = ref(false)

/*Validar se senhas estão idênticas */
const senhaDivergente = ref(false)
const confirmPassword = ref('')

const linguagens = ref([
  ' C#',
  ' Python',
  ' C++',
  ' JavaScript',
  ' PHP',
  ' Swift',
  ' Java',
  ' Go',
  ' SQL',
  ' Ruby'
])

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
  <main>
    <div
      v-if="senhaDivergente"
      class="w-screen h-screen absolute flex items-center justify-center backdrop-blur-sm z-10"
    >
      <div
        class="w-96 h-54 bg-purple-900 font-bold text-white flex flex-col items-center rounded-xl p-10"
      >
        <h1>Senhas incompatíveis!</h1>
        <button
          class="bg-white py-2 px-5 rounded-xl my-5 text-purple-900"
          @click="senhaDivergente = !senhaDivergente"
        >
          OK
        </button>
      </div>
    </div>
    <div
      v-if="estadoNulo"
      class="w-screen h-screen absolute flex items-center justify-center backdrop-blur-sm z-10"
    >
      <div
        class="w-96 h-54 bg-purple-900 font-bold text-white flex flex-col items-center rounded-xl p-10"
      >
        <h1>Adicione seu estado!</h1>
        <button
          class="bg-white py-2 px-5 rounded-xl my-5 text-purple-900"
          @click="estadoNulo = !estadoNulo"
        >
          OK
        </button>
      </div>
    </div>
    <transition name="form" mode="out-in"/>
      <form
        v-if="mostrarInformacoes"
        class="flex justify-center items-center w-screen h-screen bg-purple-900"
        @submit.prevent="InfoBtn"
      >
        <div class="flex flex-col w-40/1 h-95/1 rounded-xl bg-white overflow-y-auto px-16">
          <div class="flex sticky justify-center w-full font-poppins py-5">
            <h1 class="text-6xl">Forms</h1>
          </div>
          <div class="flex flex-row w-full px-10 justify-between">
            <div class="w-45/1">
              <input
                class="input-css w-full border-greenp border-b-2"
                v-model="user.name"
                placeholder="Nome"
                type="text"
                required
              />
            </div>
            <div class="w-45/1">
              <input
                class="input-css w-full"
                v-model="user.email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
          </div>

          <div class="flex flex-row w-full px-10 justify-between pt-5">
            <div class="w-45/1">
              <input
                class="input-css"
                v-model="user.password"
                placeholder="Senha"
                :type="showPassword"
                required
              />
            </div>

            <button @click="hidePassword" type="button">
              <i class="bi" @click="tradeEyeType()" :class="eyeType" fill="black"></i>
            </button>

            <div class="w-45/1">
              <input
                class="input-css"
                v-model="confirmPassword"
                placeholder="Confirme sua senha"
                :type="showPassword"
                required
              />
            </div>
          </div>

          <div class="flex flex-col w-full px-10 gap-5 mt-5">
            <div class="sobre-input">
              <input
                class="input-css"
                v-model="user.dataNasc"
                placeholder="Data de Nascimento"
                type="text"
                onfocus="this.type='date'"
                required
              />
            </div>

            <div class="sobre-input">
              <input
                class="input-css"
                v-model="user.endereco"
                placeholder="Endereço"
                type="text"
                required
              />
            </div>

            <div class="sobre-input">
              <input
                class="input-css"
                v-model="user.cidade"
                placeholder="Cidade"
                type="text"
                required
              />
            </div>

            <div class="sobre-input">
              <select v-model="user.estado" class="input-css select-css" name="" id="">
                <option disabled selected value="none">Estado</option>
                <option class="op-css" v-for="(value, index) in estados" :key="index">
                  {{ value.name }} - {{ value.sigla }}
                </option>
              </select>
            </div>
            <div class="sobre-input">
              <input
                class="input-css"
                v-model="user.hobbies"
                placeholder="Hobbies"
                type="text"
                required
              />
            </div>
            <div class="sobre-input">
              <textarea
                class="input-css border-2 border-gfn border-solid rounded-xl"
                type="text"
                v-model="user.bio"
                placeholder="Biografia"
              />
            </div>
            <div class="sobre-inputs-2">
              <div class="text-center">
                <label class="label-prog">Linguagens de programação</label>
              </div>
              <div class="columns-5 pt-5">
                <label
                  v-for="(value, index) of linguagens"
                  :key="index"
                  class="flex flex-col items-center container"
                >
                  {{ value }}
                  <input
                    checked="checked"
                    type="checkbox"
                    v-model="user.linguagens"
                    :value="value"
                  />
                  <div class="checkmark"></div>
                </label>
              </div>
            </div>
          </div>
          <div class="flex justify-center p-5">
            <input
              class="bg-purple-900 text-white rounded-2xl w-28 p-2 cursor-pointer font-medium"
              type="submit"
            />
          </div>
        </div>
      </form>
      </main>
</template>

<style scoped>
* {
  font-family: 'poppins';
}

input:focus,
.select-css:focus {
  outline: none;
  color: #000;
}

.select-css {
  appearance: none;
  border-bottom: 2px solid rgb(88 28 135 / var(--tw-bg-opacity));
  background-color: transparent;
}

.input-css,
.op-css {
  border-bottom: 2px solid rgb(88 28 135 / var(--tw-bg-opacity));
  background-color: transparent;
}

.select-css {
  position: relative;
}

.sobre-input {
  width: 100%;
}

.input-css {
  padding: 10px;
  width: 100%;
  font-size: larger;
}

.input-css::placeholder {
  color: #000;
}

.label-prog {
  font-size: larger;
  padding: 10px;
}

.border-gfn {
  border: 0.16rem solid rgb(88 28 135 / var(--tw-bg-opacity));
}

.border-greenp {
  border-color: rgb(88 28 135 / var(--tw-bg-opacity));
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.checkmark {
  --clr: rgb(70, 180, 70);
  position: relative;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #ccc;
  border-radius: 50%;
  transition: 300ms;
}

.container input:checked ~ .checkmark {
  background-color: var(--clr);
  border-radius: 0.5rem;
  animation: pulse 500ms ease-in-out;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #e0e0e2;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 #0b6e4f90;
    rotate: 20deg;
  }

  50% {
    rotate: -20deg;
  }

  75% {
    box-shadow: 0 0 0 10px #0b6e4f60;
  }

  100% {
    box-shadow: 0 0 0 13px #0b6e4f30;
    rotate: 0;
  }
}

.infoLabel {
  font-size: 10px;
  padding-bottom: px;
  color: rgb(90, 90, 90);
}</style>