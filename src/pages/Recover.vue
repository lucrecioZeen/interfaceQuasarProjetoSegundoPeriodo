<template>
  <div class="q-pa-md felx flex center">
      <div>
        <p style="font-size: 20px "> Recuperar senha </p><hr>
      <p class="marginTop32" style="font-size: 30px">Religare</p>
      </div>
      <q-input class="width100" filled label="Email de Recuperação"   /><br>
      <q-btn class="width100 marginTop16 marginBottom8" style="height: 50px;" color="primary" label="Recuperar senha"/><br>
      <div>
        <br>
        <span >Já tem conta ? ---</span> <span style="color: #1976D2" @click ="login ()"> Fazer login </span><br>
      <span >Não tem conta ? ---</span> <span style="color: #1976D2" @click ="register ()"> Cadastre-se </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    login () {
      this.$router.push('/')
    }
  }
}
