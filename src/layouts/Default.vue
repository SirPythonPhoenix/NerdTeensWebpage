<template>
  <NavBar/>
  <v-main>
    <router-view/>
  </v-main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Default",
  components: {NavBar}
}
</script>

<style scoped>

</style>
