<template>
  <b-container class="gallery">
    <b-row>
      <b-col>
        <p class="subheader">Kolekcje ze zdjęciami, które wyjątkowo zapadły nam w pamięć.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <div class="gallery-container" @click="openGallery(0)">
          <b-img fluid :src="require('../assets/g11.jpg')"/>
          <div class="gallery-description background-gallery">
          </div>
          <p class="gallery-description">Sesja ślubna</p>
        </div>
      </b-col>
      <b-col md="4">
        <div class="gallery-container" @click="openGallery(1)">
          <b-img fluid :src="require('../assets/g21.jpg')"/>
          <div class="gallery-description background-gallery">
          </div>
          <p class="gallery-description">Sesja cosplay</p>
        </div>
      </b-col>
      <b-col md="4">
        <div class="gallery-container" @click="openGallery(2)">
          <b-img fluid :src="require('../assets/g31.jpg')"/>
          <div class="gallery-description background-gallery">
          </div>
          <p class="gallery-description">Sesja prom</p>
        </div>
      </b-col>
    </b-row>
    <LightGallery :index="0" v-if="galleryVisible" @close="hideGallery()" :images="galleryImages"></LightGallery>

  </b-container>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      galleryVisible: false,
      imagesSets: [
        [require('../assets/g11.jpg'),
          require('../assets/g12.jpg'),
          require('../assets/g13.jpg'),
          require('../assets/g14.jpg'),
          require('../assets/g15.jpg')],
        [require('../assets/g21.jpg'),
          require('../assets/g22.jpg'),
          require('../assets/g23.jpg')],
        [require('../assets/g31.jpg'),
          require('../assets/g32.jpg'),
          require('../assets/g33.jpg')]
      ],
      galleryImages: [],
    }
  },
  methods: {
    hideGallery() {
      this.galleryVisible = false;
    },
    openGallery(index) {
      this.galleryImages = this.imagesSets[index];
      this.galleryVisible = true;
    },
  }
}
</script>

<style scoped>

.gallery{
  margin-top: 1em;
}

.gallery-container {
  position: relative;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1em;
  margin-top: 1em;
}

.background-gallery {
  background: rgba(0, 0, 0, 0.49);
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-description {
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease;
  color: aliceblue;
}

p.gallery-description {
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 2.5em;
}

.gallery-container:hover .gallery-description {
  opacity: 1;
  transform: translateY(-50%);
}

</style>