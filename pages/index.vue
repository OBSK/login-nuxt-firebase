<template>
  <v-layout
    column
    justify-center
    align-center
  >
      <v-row>
        <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3eoQnrFcha6Ztgj7_xaO3SW-Bl9dj58PilalwXj0gSwXEh0CU"
        lazy-src="https://image.freepik.com/foto-gratis/silueta-motocicleta-fondo-puesta-sol_40923-16.jpg"
        ></v-img>
      </v-row>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
