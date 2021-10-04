<template>
  <div class="social-media">
    <p class="subheader text-center">Znajdziesz też nas na social mediach</p>
    <div class="social-media-icons text-center">
      <b-img :src="require('../assets/facebook.svg')" alt="facebook" width="50px" height="50px"/>
      <b-img :src="require('../assets/instagram.svg')" alt="instagram" width="50px" height="50px"/>
      <b-img :src="require('../assets/youtube.svg')" alt="youtube" width="50px" height="50px"/>
      <b-img :src="require('../assets/twitter.svg')" alt="twitter" width="50px" height="50px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialInfo"
}
</script>

<style scoped>

.social-media {
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(24, 26, 27, 0.85);
}

.social-media p {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(24, 26, 27, 0.85);
}

.social-media-icons {
  margin-top: 2rem;
}

.social-media-icons img {
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>