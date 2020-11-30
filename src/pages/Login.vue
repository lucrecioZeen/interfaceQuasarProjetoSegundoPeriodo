/* eslint-disable eol-last */
<template>
  <q-page class=" q-pa-md flex flex-center">
   <div class="row q-col-gutter-md">
      <p style="font-size: 30px; font-family:arial;">Fazer login </p>
      <p id="p" class="width100 q-col-gutter-md" style="font-size:18px;">Seja Bem-vindo a Religare</p>
      <q-input v-model="email" class="col-12" filled label="Email de login" /><br>
       <q-input type="password" v-model="senha"  class="col-12"  filled label="Senha" />
       <q-btn @click="login () " class="width100 marginTop8 marginBottom8" color="primary" label="login"/><br>
       <div class="col-30">
          <span  @click ="recover ()" style="color:#1976D2">Recuperar minha senha</span><br>
        <span>Não tem conta ? ---</span><span style="color: #1976D2" @click ="register ()"> Cadastre-se </span>
       </div>
   </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login () {
      this.$axios.post('http://localhost:3000/user/login', {
        email: this.email,
        password: this.senha
      }).then(res => {
        console.log(res)
      }).catch(err => {
        var msgErro = err.response.data
        this.error = msgErro
      })
      this.$router.push('/Home')
    },
    recover () {
      this.$router.push('/Recover')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>
