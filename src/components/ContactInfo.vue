<template>
  <div class="contact-info">
    <p class="subheader">Wszystkie potrzebne dane znajdują się tutaj</p>
    <div>
      <div class="d-block">
        <b-icon font-scale="1.5" icon="envelope"/>
        <a>kontakt@flash.pl</a>
      </div>
      <div class="d-block">
        <b-icon font-scale="1.5" icon="phone"/>
        <a>666-666-666</a>
      </div>
      <div class="d-block">
        <b-icon font-scale="1.5" icon="building"/>
        <a>Adres<br>ul. Fotograficzna 11a<br>00-000 Warszawa</a>
      </div>
      <div class="d-block">
        <b-icon font-scale="1.5" icon="calendar3-week"/>
        <a>Pracujemy<br>poniedziałek - piątek<br>od 9:00 do 17:00</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo"
}
</script>

<style scoped>

.contact-info > div > div:not(:last-of-type) {
  border-bottom: 1px solid black;
}

.contact-info > div > div {
  padding-bottom: 1em;
  padding-top: 1em;
}

.contact-info a {
  margin-left: 1em;
}

</style>