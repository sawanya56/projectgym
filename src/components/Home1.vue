<template>
  <v-card width="100%" class="fill-height" fluid>
    <v-dialog v-model="openRegisterFroms" width="500">
      <register @colse="closeDialog" />
    </v-dialog>
    <v-dialog v-model="openReadmore" width="500">
      <readmore />
    </v-dialog>
    <v-img class="align-center" max-height="600" src="../assets/fitness1.png">
      <v-card-title class="align-center">
        <v-spacer />
        <v-btn @click="openRegisterDialog"> ลงทะเบียน </v-btn>
        <v-spacer />
      </v-card-title>
    </v-img>
    <v-img class="align-center" max-height="500" src="../assets/welcome.png">
      <v-card-title class="align-center">
        <v-spacer />
        <v-btn @click="openReadMore"> อ่านเพิ่มเติม </v-btn>
        <v-spacer />
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
import readmore from "./ReadMore";
import register from "./Register";
export default {
  data() {
    return {
      openRegisterFroms: false,
      openReadmore: false,
    };
  },
  components: {
    register,
    readmore,
  },
  methods: {
    openRegisterDialog() {
      this.openRegisterFroms = true;
    },
    closeDialog() {
      this.openRegisterFroms = false;
    },
    openReadMore() {
      this.openReadmore = true;
    },
    closeReadMore() {
      this.openReadmore = false;
    },
  },
};
</script>