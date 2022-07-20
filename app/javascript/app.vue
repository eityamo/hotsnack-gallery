<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheBottomNavigation />
  </div>
</template>

<script>
import TheHeader from "components/shared/TheHeader"
import TheBottomNavigation from "./components/shared/TheBottomNavigation";

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