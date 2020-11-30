<template>
  <q-page class=" q-pa-md flex flex-center">
   <div id="registro" class="row q-col-gutter-md" style="font-size: 10px">
     <div>
      <p style="font-size: 30px "> Cadastro </p>
      <p class="marginTop32" style="font-size: 25px">Religare</p>
   </div>
      <q-input :rules="[ val => this.checkEmail || 'Insira um email válido' ]" v-model="email" class="width100 q-col-gutter-md" outlined label="Email" placeholder="teste@gmail.com"/><br>
      <q-input :type="isPwd ? 'password' : 'text'" :rules="[ val => this.senha.length >= 8 || 'Pelo menos 8 caracteres' ]" v-model="senha" outlined class="width100 q-col-gutter-md"  label="Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>

      </q-input>
      <q-input :type="isPwd2 ? 'password' : 'text'"  :rules="[ val => this.confirmarsenha === this.senha >= 8 || 'Confirme sua senha' ]" v-model="confirmarsenha" outlined class="width100 q-col-gutter-md"  label="Repetir Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd2 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd2 = !isPwd2"
          />
        </template>
      </q-input>
      <q-btn id="cadatro" :disabled="checarFormulario" @click="cadastrar ()" class="width100" color="primary" label="Cadastre-se"/>
       <span>Já tem conta ? ---</span> <span style="color: #1976D2" @click ="login ()"> Fazer login </span>
   </div>
 </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      isPwd: true,
      isPwd2: true,
      email: '',
      senha: '',
      confirmarsenha: '',
      error: undefined
    }
  },
  computed: {
    checkEmail () {
      let checker = false
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      const regex = pattern.test(this.email.replace(' ', ''))
      if (regex === true && this.email !== '') {
        checker = true
      }
      return checker
    },

    checarFormulario () {
      let checker = true
      if ((this.senha === this.confirmarsenha) && this.senha !== '' && this.senha.length >= 8 && this.checkEmail) {
        checker = false
      }
      return checker
    }
  },
  methods: {
    cadastrar () {
      this.$axios.post('http://localhost:3000/user', {
        email: this.email,
        password: this.senha
      }).then(res => {
        console.log(res)
      }).catch(err => {
        var msgErro = err.response.data
        this.error = msgErro
      })
      this.$q.notify({
        type: 'positive',
        message: 'Cadastro Realizado com sucesso.'
      })
      this.$router.push('/')
    },
    login () {
      this.$router.push('/')
    }
  }
}
</script>
