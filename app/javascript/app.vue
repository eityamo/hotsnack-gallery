<template>
  <div id="app">
    <v-app>
      <TheHeader />
      <v-main>
        <transition
          name="slide"
          mode="out-in"
        >
          <router-view />
        </transition>
        <v-row class="ma-6" />
      </v-main>
      <v-bottom-navigation
        app
        color="primary"
        height="70"
      >
        <TheBottomNavigation />
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
import TheHeader from "components/shared/TheHeader"
import TheBottomNavigation from "./components/shared/TheBottomNavigation"

export default {
  components: {
    TheHeader,
    TheBottomNavigation
  },
  data() {
    return {
    };
  },
}
</script>

<style>

</style>