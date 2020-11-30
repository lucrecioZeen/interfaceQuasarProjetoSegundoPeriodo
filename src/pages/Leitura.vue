<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 400px"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="simple"
            node-key="label"
            selected-color="primary"
            :selected.sync="selected"
            default-expand-all
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="selected"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="Leitura Diaria">
            <div class="text-h4 q-mb-md">Bem Vindo</div>
            <p>Nesta sessão você encontra em tempo real o'que pensam os principais líderes.</p>
          </q-tab-panel>

          <q-tab-panel name="Pope Francis">
            <div class="text-h4 q-mb-md">Pope Francis</div>
            <p><a href="https://twitter.com/Pontifex?ref_src=twsrc%5Etfw"> Click Aqui Para Acessar</a></p>
          </q-tab-panel>

          <q-tab-panel name="Marelo Rossi">
            <div class="text-h4 q-mb-md">Marcelo Rossi</div>
            <p><a href="https://twitter.com/pemarcelorossi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> Click Aqui Para Acessar</a></p>
          </q-tab-panel>

          <q-tab-panel name="Papa Francisco">
            <div class="text-h4 q-mb-md">Papa Francisco</div>
           <p><a href="https://twitter.com/pemarcelorossi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> Click Aqui Para Acessar</a></p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
export default {
  data () {
    return {
      splitterModel: 50,
      selected: 'Leitura Diaria',
      simple: [
        {
          label: 'Leitura Diaria',
          children: [
            {
              label: 'Pope Francis',
              icon: 'account_circle'
            },
            {
              label: 'Marelo Rossi',
              icon: 'account_circle'
            },
            {
              label: 'Papa Francisco',
              icon: 'account_circle'
            }
          ]
        }
      ]
    }
  }
}

</script>
