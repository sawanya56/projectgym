<template>
  <div class="about">
    <v-card>
      <v-card-title>
        ค่าบริการของคุณ {{ this.$store.state.user.name }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col outlined > รายการ </v-col>
          <v-col outlined > ราคา </v-col>
        </v-row>
        <v-row v-for="(menu, index) in this.$store.state.cart" :key="index">
          <v-col>
            {{ menu.name }}
          </v-col>
          <v-col> {{ menu.price }} บาท </v-col>
        </v-row>
        <v-row>
          <v-col> รวมเป็นเงิน </v-col>
          <v-col> {{ this.$store.state.price }} บาท </v-col>
        </v-row>
      </v-card-text>

      <v-btn
        :disabled="loading"
        class="ma-1"
        color="cyan"
        plain
        outlined
        @click="submitSale"
      >
        Comfirm
      </v-btn>

      <v-btn
        :loading="loading"
        class="ma-1"
        color="error"
        plain
        outlined
        @click="clearSale"
      >
        Cancle
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      user: {
        menu1: "",
        price1: "",
      },
    };
  },
  methods: {
    addMenu() {
      this.$store.dispatch("addUser", this.user).then(this.$emit("colse"));
    },
    submitSale() {
      const playload = {
        user : this.$store.state.user,
        cart : this.$store.state.cart
      }
      this.$store.dispatch('submitSale', playload)
      this.$router.push('/')
    },
    clearSale() {
      this.$store.commit('clearSale')
      this.$router.push('/')
    }
  },
};
</script>
