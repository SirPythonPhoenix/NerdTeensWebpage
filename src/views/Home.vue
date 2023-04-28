<template>
  <v-responsive class="d-flex align-center text-center" style="height: calc(100dvh - 64px)">
    <v-img
      contain
      src="@/assets/nerd-teens.svg"
      class="mx-auto teens-logo"
    />
  </v-responsive>
  <v-carousel
    cycle
    hide-delimiter-background
    style="height: 600px"
    hide-delimiters
  >
    <template v-slot:next="{ props }">
      <v-btn icon="fas fa-chevron-right" @click="props.onClick" variant="elevated"/>
    </template>
    <template v-slot:prev="{ props }">
      <v-btn icon="fas fa-chevron-left" @click="props.onClick" variant="elevated"/>
    </template>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/4.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/7.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/8.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/3.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/2.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/5.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/6.jpg" cover></v-img>
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="../assets/cycleImages/1.jpg" cover></v-img>
    </v-carousel-item>
  </v-carousel>
  <div class="my-16 py-16"/>
</template>

<script>

import ShapeDivider from "@/components/ShapeDivider.vue";

export default {
  name: "Home",
  components: {ShapeDivider}
}

</script>

<style scoped>

.container {
  display: grid;
}

.layer {
  grid-column: 1;
  grid-row: 1;
}

.teens-logo {
  width: 60%;
  transition: 0.4s;
  filter: drop-shadow(0px 0px 20px rgba(5, 68, 104, 0.6));
}

</style>
