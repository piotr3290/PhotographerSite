<template>
  <div>
    <b-container>
      <b-row>
        <h1>Portfolio</h1>
      </b-row>
    </b-container>

    <b-img fluid :src="require('../assets/portfolio.jpg')" alt=""/>

    <gallery/>

  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
export default {
  name: "PortfolioSection",
  components: {Gallery}
}
</script>

<style scoped>

</style>