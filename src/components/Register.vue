<template>
  <v-card>
    <v-card-title>
      <v-spacer />
      ลงทะเบียน
      <v-spacer />
    </v-card-title>
    <v-form>
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
          <v-subheader> LastName : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.lastname" />
        </v-col>
      </v-row>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Telephone : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.telephone" />
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
      <v-card-actions>
        <v-spacer />
        <v-btn color="green" @click="addUser"> ลงทะเบียน </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      user: {
        name: "",
        lastname: "",
        telephone: "",
        password: "",
      },
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", this.user).then(this.$emit("colse"));
    },
  },
};
</script>