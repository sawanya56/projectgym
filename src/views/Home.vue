<template>
  <div class="home">
    <v-row>
      <v-col style="padding:0px" cols="auto">
        <home1 />
      </v-col>
    </v-row>
    <v-row v-if="this.$store.state.haveUser">
      <home2 />
    </v-row>
  </div>
</template>

<script>
import home1 from '../components/Home1'
import home2 from '../components/Home2'
export default {
  components: {
    home1,
    home2
  }
}
</script>
