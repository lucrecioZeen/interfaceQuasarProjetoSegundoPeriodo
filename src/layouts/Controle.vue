<template>
    <q-layout >
     <q-toolbar class="bg-black text-white">
       <q-separator dark vertical inset />
         <q-btn stretch flat label="Religare" />
       <q-space />
     </q-toolbar>
        <q-page-container>
         <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
export default {
  name: 'Controle',
  data () {
    return {

    }
  }
}
</script>

<style></style>
