<template>
  <div>
    <nav
      class="navbar header has-shadow is-light is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style="box-shadow: 0 0px 10px rgb(0 0 0 / 0.2);"
    >
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
        <img
            src="~assets/twt.png"
            alt="Buefy"
            height="28"
          >
          <span>
            <h1><b>Saved My Tweets</b></h1>
          </span>
        </NuxtLink>
        <!-- <li v-for="color of colors" :key="color"> -->
        <div class="btn-switch">
          <component
          :is="`icon-${btnLabel}`"
          :class="getClasses(btnLabel)"
          @click="$colorMode.preference = btnLabel"

        />
        </div>

      <!-- </li> -->

        <!-- <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div> -->
      </div>
    </nav>

    <section class="main-content">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside> -->

      <div class="container">
        <Nuxt />
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'
export default {
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia,
    Footer
},
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],
      colors: ['light', 'dark', 'sepia']
    }
  },
  computed: {
    mode() {
      return this.$colorMode;
    },
    btnLabel() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style>
.navbar {
  background-color: #0a0a0a;
  color: white;
  height: 9%;
  display:flex;
  justify-content:center;
}
</style>
