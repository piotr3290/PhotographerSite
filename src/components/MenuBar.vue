<template>
  <b-navbar
      id="menu"
      :bg="!isOnTop">
    <b-navbar-brand
        id="logo"
        @click="emitScrollToTop">

      <b-img :src="require('../assets/logo.png')" alt="logo"></b-img>

      <a>Flash</a>

    </b-navbar-brand>

    <b-navbar-nav class="menu-sections" justified>
      <b-nav-item
          v-for="section in sections"
          :key="section.name+'2'"
          :href="section.link">
        {{ section.name }}
      </b-nav-item>
    </b-navbar-nav>


    <b-navbar-nav class="sidebar-show ml-auto">

      <b-button id="sidebar-menu-button" v-b-toggle.sidebar-menu>
        <b-icon icon="list"/>
      </b-button>

    </b-navbar-nav>

    <b-sidebar id="sidebar-menu" title="Menu" class="menu-sections sidebar-show">
      <b-nav-item
          v-for="section in sections"
          :key="section.name"
          :href="section.link">
        {{ section.name }}
      </b-nav-item>
    </b-sidebar>

  </b-navbar>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    isOnTop: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      sections: [
        {
          name: 'O nas',
          link: '#about-us-section'
        },
        {
          name: 'Oferta',
          link: '#offer-section'
        },
        {
          name: 'Portfolio',
          link: '#portfolio-section'
        },
        {
          name: 'Kontakt',
          link: '#contact-section'
        },
      ],
    }
  },
  methods: {
    emitScrollToTop() {
      this.$emit('scrollToTop');
    }
  }
}
</script>

<style scoped>

#sidebar-menu li {
  border: none;
  list-style-type: none;
  padding-top: 1em;
}

#sidebar-menu-button {
  background: rgba(24, 26, 27, 0.8) !important;
  border: none !important;
}

#menu {
  position: sticky;
  top: 0;
  z-index: 3;
  height: 3rem;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.8em;

  box-shadow: 0 5px 17px 0 rgba(0, 0, 0, 0.68);
}

.menu-sections {
  width: 100%;
}

.menu-sections a.active {
  text-shadow: 3px 3px 20px #5e6060, -2px 1px 30px #5e6060;
  font-weight: bold;
}

.menu-sections a {
  color: rgba(24, 26, 27, 0.85) !important;
  padding-bottom: 0;
  padding-top: 0;
}

.menu-sections a:hover {
  box-shadow: 0 0.5em 0.3em -0.4em rgba(24, 26, 27, 0.75);
  transform: translateY(-0.08em);
}

.menu-sections li:not(:first-child) {
  border-left: 3px solid rgba(24, 26, 27, 0.85);
}

#logo {
  cursor: pointer;
  font-size: 1.5em;
}

#logo > img {
  padding-right: 5px;
}

[bg] {
  background-color: rgba(245, 245, 250, 0.85);
}

@media screen and (max-width: 767px) {
  .menu-sections:not(.sidebar-show) {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .sidebar-show {
    display: none !important;
  }
}

</style>