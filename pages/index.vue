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
            height="300px"
            src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1704/Bobber-motorcycle_1920x1080.jpg"
            >
            <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row
                      align="center"
                      class="white--text mx-auto"
                      justify="center"
                    >
                    <v-card class="elevation-12">
                        <v-toolbar
                          color="transparent"
                          dark
                          flat
                          prominent
                          src="/Logo.png"
                        >
                          <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                          <v-form>
                            <v-text-field
                              label="Correo electronico"
                              name="login"
                              prepend-icon="mdi-account"
                              type="text"
                            />

                            <v-text-field
                              id="password"
                              label="Contraseña"
                              name="password"
                              prepend-icon="mdi-lock"
                              type="password"
                            />
                          </v-form>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn color="primary">Iniciar sesión</v-btn>
                        </v-card-actions>
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
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
