<template>
  <div>
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-img
            :src="require(`../assets/${slide}`)"
            contain
            class="grey darken-4"
          />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: ["manager.png", "time.png"],
    };
  },
};
</script>