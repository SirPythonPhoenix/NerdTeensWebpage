import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#3eb87b',
          secondary: '#054468'
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#3eb87b',
          secondary: '#054468'
        }
      }
    }
  }
})
