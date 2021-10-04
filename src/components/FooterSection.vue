<template>
  <footer>
    <b-container>
      <b-row>
        <b-col sm="6" class="footer-navigation">
          <a class="d-block" v-for="section in sections" :key="section.name" :href="section.link">
            {{ section.name }}
          </a>
        </b-col>
        <b-col sm="6" class="footer-contact">
          <p>Telefon: 666-666-666</p>
          <p>Email: kontakt@flash.pl</p>
          <p>Adres: ul. Fotograficzna 11a</p>
          <p>00-000 Warszawa</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center footer-company">
          <a>FLASH</a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
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
}
</script>

<style scoped>

.footer-company {
  font-family: 'Bebas Neue', cursive;
  margin-top: 1.5rem;
  font-size: 2rem;
}


footer {
  padding-top: 3rem;
  padding-bottom: 1rem;
  background: rgb(25, 26, 26);
  color: aliceblue;
}

footer p {
  text-align: center;
}

.footer-navigation {
  border-right: 1px solid aliceblue;
}

.footer-navigation a {
  color: aliceblue;
  cursor: pointer;
  margin-bottom: 1em;
  text-align: center;
}

.footer-navigation a:hover {
  font-weight: bold;
  color: aliceblue;
  text-decoration: none;
}

.footer-contact, .footer-navigation {
  padding-top: 1rem;
}

@media screen and (max-width: 575px) {
  .footer-navigation {
    border-right: none;
    border-bottom: 1px solid aliceblue;
  }
}

</style>