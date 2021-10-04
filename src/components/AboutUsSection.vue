<template>
  <div>
    <b-container class="about-us-container">
      <b-row>
        <h1>Kilka słów o nas</h1>
      </b-row>

      <b-row>
        <b-col md="6">
          <p class="text-justify">
            Jesteśmy zgraną ekipą miłośników fotografii. Wspólnie tworzymy subtelne i estetyczne zdjęcia, które na
            zawsze zachowują pamięć o najlepszych chwilach życia.</p>
          <b-img fluid :src="require('../assets/photo2.jpg')" alt="photo2"></b-img>
        </b-col>

        <b-col md="6">
          <p class="text-justify">
            Kochamy swoją pracę przede wszystkim dlatego, że robimy rzeczy naprawdę istotne i wartościowe. Poznajemy
            wielu wspaniałych ludzi, przeżywamy wraz z nimi najważniejsze i najpiękniejsze momenty w ich życiu, a przy
            okazji tworzymy dla nich cenną pamiątkę na długie lata. Cieszy nas, że zatrzymujemy piękno otaczającego nas
            świata i sprawiamy, że ludzie stają się choć odrobinę szczęśliwsi.
          </p>
          <p class="text-justify">
            To wszystko inspiruje nas na co dzień, pozwala rozwijać się i dawać z siebie 100% przy każdym kolejnym
            projekcie. Jesteśmy dumni z każdej zrealizowanej sesji, ale naszym najlepszym zdjęciem jest zawsze to, które
            zrobimy jutro.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <p class="text-justify">
            W swoich klientach cenimy przede wszystkich otwartość, przyjazne nastawienie, dobry gust i miłość do
            fotografii. Lubimy pracę z ludźmi, którzy mają podobne wyobrażenie piękna – to podstawa udanej współpracy.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-img fluid :src="require('../assets/photo3.jpg')" alt=""/>

    <staff/>

  </div>
</template>

<script>
import Staff from "@/components/Staff";
export default {
  name: "AboutUsSection",
  components: {Staff}
}
</script>

<style scoped>

.about-us-container{
  margin-bottom: 1em;
}

p {
  margin-top: 1em;
}

</style>