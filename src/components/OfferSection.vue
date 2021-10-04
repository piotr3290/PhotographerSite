<template>
  <div>
    <b-container>
      <b-row>
        <h1>Oferta</h1>
      </b-row>

      <b-row>
        <b-col>
          <p class="text-right subheader">
            Fotografia ślubna to wspaniała pamiątka na całe życie...
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-img fluid :src="require('../assets/photo4.jpg')" alt=""/>

    <b-container class="wedding">
      <b-row>
        <b-col>
          <p class="subheader">
            ...dlatego przygotowaliśmy specjalną ofertę ślubną właśnie dla Was.
          </p>
        </b-col>
      </b-row>
      <p class="offer-bundle">Reportaż skrócony</p>
      <b-row>

        <b-col md="6">
          <ul>
            <li>
              reportaż od przygotowań do maksymalnie trzech pierwszych godzin przyjęcia weselnego
            </li>
            <li>
              6 godzin reportażu
            </li>
            <li>
              krótka sesja plenerowa w dniu ślubu
            </li>
            <li>
              100 fotografii wydrukowanych w formacie 15cm x 21cm w stylowym boxie, poddanych autorskiej obróbce
              graficznej
            </li>
            <li>
              300 fotografii nagranych na pendrive
            </li>
          </ul>
        </b-col>

        <b-col md="6">
          <b-img :src="require('../assets/offer1.jpg')" fluid alt="offer1"></b-img>
        </b-col>
      </b-row>

      <p class="offer-bundle text-right">Reportaż standardowy</p>

      <b-row>
        <b-col md="6">
          <b-img :src="require('../assets/offer2.jpg')" fluid alt="offer2"></b-img>
        </b-col>
        <b-col md="6">

          <ul>
            <li>
              reportaż od przygotowań do późnych godzin nocnych
            </li>
            <li>
              14 godzin reportażu
            </li>
            <li>
              krótka sesja plenerowa w dniu ślubu
            </li>
            <li>
              200 fotografii wydrukowanych w formacie 15cm x 21cm w stylowym boxie, poddanych autorskiej obróbce
              graficznej
            </li>
            <li>
              500 fotografii nagranych na pendrive
            </li>
          </ul>
        </b-col>
      </b-row>

      <p class="offer-bundle">Reportaż rozszerzony</p>

      <b-row>
        <b-col md="6">

          <ul>
            <li>
              reportaż od przygotowań do późnych godzin nocnych
            </li>
            <li>
              14 godzin reportażu
            </li>
            <li>
              krótka sesja plenerowa w dniu ślubu
            </li>
            <li>
              300 fotografii wydrukowanych w formacie 15cm x 21cm w stylowym boxie, poddanych autorskiej obróbce
              graficznej
            </li>
            <li>
              800 fotografii nagranych na pendrive
            </li>
          </ul>
        </b-col>
        <b-col md="6">
          <b-img :src="require('../assets/offer3.jpg')" fluid alt="offer3"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "OfferSection"
}
</script>

<style scoped>

.wedding {
  margin-top: 1rem;
}

.wedding ul {
  margin-top: 1rem !important;
}

.wedding ul > li {
  padding: 0.7rem 0;
}

.offer-bundle {
  font-size: 2.5rem;
  font-weight: 550;
  font-family: 'Bebas Neue', cursive;
  margin-top: 1rem;
}

</style>