<template>
  <div id="app">
    <transition name="button-fade">
      <div v-if="!isOnTop" id="up-button">
        <b-button @click="scrollTop" size="md">
          <b-icon icon="arrow-up-short" scale="1.2"></b-icon>
        </b-button>
      </div>
    </transition>

    <menu-bar
        :is-on-top="isOnTop"
        @scrollToTop="scrollTop"/>


    <div class="img-container">
      <img :src="require('./assets/home.jpg')" alt="">
    </div>

    <about-us-section id="about-us-section" class="page-section"/>

    <offer-section id="offer-section" class="page-section"/>

    <portfolio-section id="portfolio-section" class="page-section"/>

    <contact-section id="contact-section" class="page-section"/>

    <footer-section/>

  </div>

</template>

<script>

import $ from 'jquery';
import MenuBar from "@/components/MenuBar";
import AboutUsSection from "@/components/AboutUsSection";
import OfferSection from "@/components/OfferSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'App',
  components: {FooterSection, ContactSection, PortfolioSection, OfferSection, AboutUsSection, MenuBar},
  data() {
    return {
      isOnTop: true
    }
  },
  methods: {
    scrollHandler() {

      let scrollDistance = $(window).scrollTop();

      if (this.isOnTop !== scrollDistance <= 100) {
        this.isOnTop = scrollDistance <= 100;
      }

      let activeSection = null;
      let menuHeight = $('#menu').height();

      $('.page-section').each(function () {
        if ($(this).position().top <= (scrollDistance + menuHeight)) {
          activeSection = this;
        }
      });

      $('.menu-sections a').each(function () {
        $(this).removeClass('active');
      });
      if (activeSection != null) {
        $("[href='#" + $(activeSection).attr('id') + "']").addClass('active');
      }
    },
    scrollTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },

}
</script>

<style>

h1 {
  font-family: 'Bebas Neue', cursive;
  font-size: 5rem !important;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.page-section:before {
  display: block;
  margin-top: -2rem;
}

.page-section {
  padding-top: 4rem;
  margin-bottom: 1rem;
}

.page-section * {
  font-size: 1.2rem;
}

#up-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 2;
}

#up-button button {
  background: rgba(0, 0, 0, 0.35) !important;
  border: none !important;
}

.img-container {
  overflow: hidden;
  height: 100vh;
  margin-top: -3rem;
  font-size: 2em;
}

.img-container > img {
  vertical-align: middle;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
}

.subheader {
  font-size: 1.7rem;
}

.button-fade-enter-active {
  transition: all .3s ease;
}

.button-fade-leave-active {
  transition: all .3s ease;
}

.button-fade-enter, .button-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.img-hover-zoom {
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid rgba(32, 34, 34, 0.75);
  max-width: 261px;
  margin: auto;
}

.img-hover-zoom img {
  transition: transform .7s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.1);
}

</style>
