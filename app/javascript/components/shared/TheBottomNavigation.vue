<template>
  <v-row align="center" justify="center" class="mb-0 mt-0">
    <v-btn
      value="home"
      to="/"
    >
      <span>Gallely</span>

      <v-icon>mdi-bank</v-icon>
    </v-btn>

      <v-btn value="random">
      <span>Random</span>

      <v-icon>mdi-palette-swatch</v-icon>
    </v-btn>

    <v-btn value="category">
      <span>Category</span>

      <v-icon>mdi-palette</v-icon>
    </v-btn>

    <v-btn value="share">
      <span>Share</span>

      <v-icon>mdi-twitter</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
  export default {
    data: () => ({ value: 'recent' }),
  }
</script>