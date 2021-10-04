<template>
  <b-container class="staff">

    <b-row>
      <p class="staff-title">Do naszego zespołu należą:</p>
    </b-row>

    <b-row>
      <b-col md="4">
        <p class="photographer-name">Kenny</p>
        <div class="img-hover-zoom">
          <b-img class="photographer" fluid :src="require('../assets/kenny.png')" alt="Kenny"></b-img>
        </div>
        <p>
          Spokojna, cierpliwa i przemiła osoba. Tworzy zrównoważoną atmosferę na sesji, co w szczególności jest
          przydatne przy zdjęciach ślubnych oraz z dziećmi. Tworzy na swoich fotografiach jasną i lekką kolorystykę.
        </p>
      </b-col>

      <b-col md="4">
        <p class="photographer-name">Stan</p>
        <div class="img-hover-zoom">
          <b-img class="photographer" fluid :src="require('../assets/stan.png')" alt="Stan"></b-img>
        </div>
        <p>
          Jego wewnętrzny spokój sprawi, ze poczujesz się komfortowo a kreatywna dusza zagwarantuje wcielenie w życie
          nawet najbardziej szalonych pomysłów fotograficznych.
        </p>
      </b-col>

      <b-col md="4">
        <p class="photographer-name">Kyle</p>
        <div class="img-hover-zoom">
          <b-img class="photographer" fluid :src="require('../assets/kyle.png')" alt="Kyle"></b-img>
        </div>
        <p>
          Odpowiedzialny, zorganizowany, lubi porządek. Jak nikt inny zna się na sprzęcie. Wymagający perfekcjonista,
          który dba o każdy szczegół i czuwa nad stylistyczną spójnością naszej pracy.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Staff"
}
</script>

<style scoped>

.staff {
  margin-top: 2rem;
}

.staff .col-md-4 > * {
  display: block;
  text-align: center;
}

.photographer {
  margin: auto;
}

.photographer-name {
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
}

.staff-title {
  font-size: 2.5rem;
  font-weight: 550;
  font-family: 'Bebas Neue', cursive;
  margin-top: 1rem;
}

</style>