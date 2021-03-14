<template>
  <v-card>
    <v-card-title> ลงชื่อเข้าใช้ </v-card-title>
    <v-card-text>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Name : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.name" />
        </v-col>
      </v-row>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Password : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="login"> login </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$emit("colse");
      this.$store.dispatch("login", this.user);
    },
  },
};
</script>