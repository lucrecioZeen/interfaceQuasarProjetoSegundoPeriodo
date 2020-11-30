<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 1000px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="movies" icon="movie" label="Missas" /><br>
          <q-tab name="alarms" icon="audiotrack" label="Audios" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="movies">
            <div class="text-h6 q-mb-md">REDEVIDA e Vaticano Media Live </div>
            <p><b>duplo click para tela cheia, click sobre o nome para abrir no youtube:</b></p>
            <p>
              <iframe width="300" height="300" src="https://www.youtube.com/embed/b07OShArDdw?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe width="300" height="300" src="https://www.youtube.com/embed/Xwq2krOIltE?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Audios</div>
            <iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/296809585&color=%230b00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/a12-977192981" title="a12" target="_blank" style="color: #cccccc; text-decoration: none;">a12</a> · <a href="https://soundcloud.com/a12-977192981/oracao-a-nossa-senhora-imaculada-conceicao" title="Oração a Nossa Senhora Imaculada Conceição" target="_blank" style="color: #cccccc; text-decoration: none;">Oração a Nossa Senhora Imaculada Conceição</a></div>
            <iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205776029&color=%230b00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/s-a-gra-a" title="Só a Graça" target="_blank" style="color: #cccccc; text-decoration: none;">Só a Graça</a> · <a href="https://soundcloud.com/s-a-gra-a/pai-nosso-com-padre-marcelo-rossi" title="PAI NOSSO COM PADRE MARCELO ROSSI" target="_blank" style="color: #cccccc; text-decoration: none;">PAI NOSSO COM PADRE MARCELO ROSSI</a></div>
            <iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/47459992&color=%230b00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/gramofone" title="Gramofone" target="_blank" style="color: #cccccc; text-decoration: none;">Gramofone</a> · <a href="https://soundcloud.com/gramofone/sets/crian-as-em-ora-o-vol-1" title="Crianças em Oração Vol 1" target="_blank" style="color: #cccccc; text-decoration: none;">Crianças em Oração Vol 1</a></div>
            <iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430832931&color=%230b00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/partituras-cat-licas" title="Partituras Católicas" target="_blank" style="color: #cccccc; text-decoration: none;">Partituras Católicas</a> · <a href="https://soundcloud.com/partituras-cat-licas/liturgicast-18-o-catolico-e-a-musica-secular" title="Liturgicast #18 - O Católico e a música secular" target="_blank" style="color: #cccccc; text-decoration: none;">Liturgicast #18 - O Católico e a música secular</a></div>
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
      tab: 'mails',
      splitterModel: 20
    }
  }
}
</script>
