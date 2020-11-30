<template>
  <div style="background-color:#DCDCDC">
    <q-carousel id="carrosel"
      v-model="slide"
      swipeable
      animated
      :padding="padding"
      :vertical="vertical"
      :arrows="arrows"
      :navigation="navigation"
      :navigation-position="navPos"
      height="300px"
      class="bg-indigo-7 text-white rounded-borders"
    >
      <q-carousel-slide style name="style" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h6>O que é a Religare ?</h6>
          {{ lorem1 }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h6>Como funciona ?</h6>
          {{ lorem2 }}
        </div>
      </q-carousel-slide>
    </q-carousel><br>
    <div class="flex-center" style="text-align: center">
      <strong id="texto" style="font-size: 15px ;">O nosso principal objetivo é disponibilizar uma plataforma que atenda o publico católico, que está impossibilitado de ir as cerimonias e missas devido ao isolamento para conter pandemia da Covid-19.A plataforma vai tentar trazer maioria do conteúdo católico possível para atender tornar a rotina desse grupo o mais próximo da normalidade.Além de disponibilizar conteúdo multimídia com áudios e vídeos, o aplicativo vai disponibilizar uma área para textos, citações e lembretes no qual vão se atualizando conforme a semana, uma área para cadastros de pessoas que desejam receber notificações e aviso sobre novos eventos(missas) e uma área de sugestão em fale conosco para os membros cadastrados relatarem algum erro ou opinião de conteúdo para melhoria da plataforma.</strong>
    </div>
    <div class=" flex flex-center">
    <q-card id="video" class="my-card flex-center q-mt-md q-pa-sm bg-grey-3  " >
      <q-video src="https://www.youtube.com/embed/Fi1oClBcA8c" />

      <q-card-section>
        <div class="text-h6">Prototipo Religare</div>
        <div class="text-subtitle2">Religare</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        O nosso principal objetivo é disponibilizar uma plataforma que atenda o publico católico, que está impossibilitado de ir as cerimonias e missas devido ao isolamento para conter pandemia da Covid-19. A plataforma vai tentar trazer maioria do conteúdo católico possível para atender tornar a rotina desse grupo o mais próximo da normalidade.
      </q-card-section>
    </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,

      navPos: 'bottom',
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],

      slide: 'style',
      lorem1: 'Religare CNT é uma plataforma desenvolvida em 2020 que tem por finalidade possibilitar a interação de membros de uma determinada Igreja Católica com os demais membros dessa comunidade e também disponibilizar conteúdos multimídia, tentando aproximar essas pessoas de sua rotina o mais próximo do normal, devido a não reabertura das igrejas por conta da pandemia do Covid-19. Seu lançamento vai estar disponível em 2020 e a plataforma vai está disponível gratuitamente aos usuários da igreja que desejam se cadastrar para utilizar seus serviços.',
      lorem2: 'De acordo com os desenvolvedores do aplicativo, o Religare CNT disponibilizara um sistema que vai contar com diversas funcionalidades na plataforma, o usuário(membro da igreja) ao que deseja utilizar no aplicativo, vão ter funcionalidades que o levam ao conteúdo desejado e opção de cadastramento para que o mesmo receba notificação e aviso de postagem de novos conteúdos que serão disponibilizados.No aplicativo o usuário cadastrado pode acessar diversos conteúdos como multimídia (vídeos, áudios, textos), contato direto com as atividades religiosas locais, agenda de transmissões, links com missa ao vivo, entre outros.'
    }
  },

  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
}
</script>
