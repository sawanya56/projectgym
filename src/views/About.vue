<template>
  <div class="about">
   <v-card>
     <v-card-title>
        ค่าบริการของคุณ  {{this.$store.state.user.name}}
     </v-card-title>
<v-card-text>
      <v-row>
        <v-col>
          รายการ
        </v-col>
        <v-col>
          ราคา
        </v-col>
      </v-row>
      <v-row v-for="(menu, index) in this.$store.state.cart" :key="index">
        <v-col>
          {{menu.name}}
        </v-col>
        <v-col>
          {{menu.price}} บาท
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          รวมเป็นเงิน
        </v-col>
        <v-col>
            {{this.$store.state.price}} บาท
        </v-col>
      </v-row>
</v-card-text>
   </v-card>
  </div>
</template>
