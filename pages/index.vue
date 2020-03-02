<template>
<section>
  <v-layout
    column
    justify-center
    align-center
  >
      <v-row no-gutters>
        <v-col
        cols="12"
        md="12">
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            height="10rem"
            src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1704/Bobber-motorcycle_1920x1080.jpg"
            >
            <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row
                      align="center"
                      class="white--text mx-auto"
                      justify="center"
                    >
                    <h1 class="headline">Hola mundo en <strong>Nuxt!!</strong> </h1>
                    </v-row>
                  </v-container>
                </v-theme-provider>
            </v-img>
        </v-col>
      </v-row>
  </v-layout>
</section>  
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { auth } from '../plugins/firebaseConfig'

export default {
  components: {
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    
  },
  computed: {
    ...mapState({
      cars: state => state.list,
      error: state => state.error
    })
  },
  mounted() {
      auth.onAuthStateChanged((user) => {
      if(user) {
        // this.$router.push('/login');
      } else {
        console.log("No existe un usuario, redirigiendo...")
        this.$router.push('/login');
      }
    });
  }

}
</script>
