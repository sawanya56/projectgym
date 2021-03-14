<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
      color="grey darken-1"
      class="white--text"
    >
    <v-btn text to="/">
    Sport Gym
    </v-btn>
    <v-spacer />
    
    <v-btn @click="logout">
      logout
    </v-btn>
    <v-btn @click="loginUser" v-if="!this.$store.state.haveUser">
      login
    </v-btn>
    <div v-else>
      ยินดีต้อนรับคุณ {{this.$store.state.user.name}}
      <v-btn v-if="this.$store.state.cart.length > 0" text to="/about">
        คลิกชำระสินค้า {{this.$store.state.cart.length}} รายการ
      </v-btn>
    </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <!-- <footerView /> -->
    <v-dialog v-model="loginDialog">
      <loginUser @colse="closeLogin"/>
    </v-dialog>
  </v-app>
</template>

<script>
import loginUser from './components/Login'
// import firebase from 'firebase'
// import footerView from './components/Footer'
export default {
  components: {
    // footerView,
    loginUser
  },
  data() {
    return {
      loginDialog: false
    }
  },
  methods: {
    loginUser() {
      this.loginDialog = true
    },
    closeLogin() {
      this.loginDialog = false
    // },
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       // Sign-out successful.
    //       console.log('sign-out successful')
    //       this.$router.replace(' ')
    //     })
    //     .catch((error) => {
    //       // An error happened.
    //       console.log(error)
  
    },
  }
}
</script>
