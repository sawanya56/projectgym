<template>
  <div>
    <v-row style="margin: 10px">
      <v-col v-for="(couse, index) in couses" :key="index">
        <v-card style="width: 250px">
          <v-img
            class="align-center"
            :src="require(`../assets/${couse.image}`)"
          />
          <v-card-actions>
            <v-spacer />
            <v-btn block @click="addCart(couse)"> เลือก </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-footer color="grey darken-1" padless>
      <v-card-title class="white--text">
        <v-spacer />
        Contacts US
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <v-row class="white--text">
          <v-col>
            <v-row>
              <v-col cols="auto"> ที่อยู่ : </v-col>
              <v-col> 299 หมู่ 5 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290 </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto"> โทร : </v-col>
              <v-col> 097 - 865 - 4563 </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="auto">
                <v-icon> mdi-facebook </v-icon>
              </v-col>
              <v-col> Sportgym </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-icon> mdi-instagram </v-icon>
              </v-col>
              <v-col> Sport_gym </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-icon> mdi-linkedin </v-icon>
              </v-col>
              <v-col> @Gym123 </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couses: [
        {
          image: "course1.png",
          price: 1500,
          name: "สมาชิกรายเดือน",
        },
        {
          image: "course2.png",
          price: 100,
          name: "บุคคลทั่วไป",
        },
        {
          image: "course3.png",
          price: 999,
          name: "บุฟเฟ่ต์ฟิตเนส",
        },
        {
          image: "course4.png",
          price: 8990,
          name: "บุฟเฟ่ต์ฟิตเนส2",
        },
        {
          image: "course5.png",
          price: 59000,
          name: "บุฟเฟ่ต์ฟิตเนสรายปี",
        },
        {
          image: "tranner1.png",
          price: 700,
          name: "เทรนเนอร์ทั่วไป",
        },
        {
          image: "tranner2.png",
          price: 10000,
          name: "เทรนเนอร์ส่วนตัว",
        },
        {
          image: "tranner3.png",
          price: 15000,
          name: "บุฟเฟต์เทรนเนอร์",
        }
      ],
    };
  },
  methods: {
    addCart(e) {
      this.$store.commit("addCart", e);
    },
  },
};
</script>