<template>
  <b-container>
    <b-row>
      <h1>Skontaktuj się z nami</h1>
    </b-row>

    <b-row>
      <b-col md="4">
        <contact-info/>
      </b-col>

      <b-col md="8">
        <contact-form/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <social-info/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import SocialInfo from "@/components/SocialInfo";
export default {
  name: "ContactSection",
  components: {SocialInfo, ContactForm, ContactInfo}
}
</script>

<style scoped>

</style>