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
                    <v-card class="elevation-12" max-width="300px" width="300px">
                        <v-toolbar
                          color="transparent"
                          dark
                          flat
                          prominent
                          src="/Logo.png"
                        >
                          <v-spacer />
                        </v-toolbar>
                        <form @submit.prevent="initSesion">
                        <v-card-text>
                            <v-text-field
                              label="Correo electronico"
                              v-model="email"
                              required
                              name="login"
                              prepend-icon="mdi-account"
                              type="text"
                            />

                            <v-text-field
                              v-model="password"
                              required
                              label="Contraseña"
                              name="password"
                              prepend-icon="mdi-lock"
                              type="password"
                            />
                            <div>
                              {{ error }}
                            </div>
                        </v-card-text>
                        <v-card-actions>
                          
                          <v-spacer />
                          <v-btn color="teal" small type="submit">Iniciar sesión</v-btn>
                        </v-card-actions>
                        </form>
                      </v-card>
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
    initSesion() {
      this.iniciar({
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      iniciar: 'iniciarSesion'
    }),
    
  },
  computed: {
    ...mapState({
      cars: state => state.list,
      error: state => state.error
    })
  }

}
</script>
