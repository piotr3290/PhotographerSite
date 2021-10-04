<template>
  <validation-observer
      ref="observer"
      v-slot="{ handleSubmit }">
    <b-form
        class="contact-form"
        @submit.prevent="handleSubmit(sendMessage)"
        @reset="resetForm">

      <p class="subheader text-center">Napisz do nas wiadomość już teraz!</p>

      <validation-provider
          :rules="{required: true}"
          name="imię"
          v-slot="{ valid, errors }">
        <b-form-group
            id="input-group-name"
            label="Twoje imię:"
            label-for="input-name">
          <b-form-input
              v-model="name"
              id="input-name"
              type="text"
              :state="inputState(valid, errors)">
          </b-form-input>
          <b-form-invalid-feedback id="input-name-feedback">
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>

      <validation-provider
          :rules="{required: true, email: true}"
          name="email"
          v-slot="{ valid, errors }">
        <b-form-group
            id="input-group-email"
            label="Twój email:"
            label-for="input-email">
          <b-form-input
              v-model="email"
              id="input-email"
              type="email"
              :state="inputState(valid, errors)">
          </b-form-input>
          <b-form-invalid-feedback id="input-email-feedback">
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>

      <validation-provider
          :rules="{required: true}"
          name="telefon"
          v-slot="{ valid, errors }">
        <b-form-group
            id="input-group-phone"
            label="Twój numer telefonu:"
            label-for="input-phone">
          <b-form-input
              v-model="phone"
              id="input-phone"
              type="tel"
              :state="inputState(valid, errors)">
          </b-form-input>
          <b-form-invalid-feedback id="input-phone-feedback">
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>

      <validation-provider
          :rules="{required: true}"
          name="wiadomość"
          v-slot="{ valid, errors }">
        <b-form-group
            id="input-group-message"
            label="Wiadomość:"
            label-for="input-message">
          <b-form-textarea
              v-model="message"
              id="input-message"
              type="text"
              :state="inputState(valid, errors)">
          </b-form-textarea>
          <b-form-invalid-feedback id="input-message-feedback">
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>

      <b-button
          class="send-button"
          type="submit">
        Wyślij
      </b-button>
    </b-form>
  </validation-observer>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    sendMessage() {
      alert('Twoja wiadomość została wysłana.');
      this.resetForm();
    },
    resetForm() {
      this.name = null;
      this.email = null;
      this.phone = null;
      this.message = null;
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
    inputState(valid, errors) {
      return errors[0] ? false : (valid ? true : null);
    }
  }
}
</script>

<style scoped>

.contact-form {
  border-left: 1px solid black;
  margin-top: 2rem;
  padding: 1rem;
}

@media screen and (max-width: 767px) {
  .contact-form {
    border: none;
  }
}

.send-button {
  margin: 0 auto;
  display: block !important;
  border: 1px solid rgba(24, 26, 27, 0.85) !important;
  background: transparent !important;
  color: rgba(24, 26, 27, 0.85) !important;
  font-family: 'Bebas Neue', cursive;
  font-size: 1em !important;
}

.send-button:hover {
  box-shadow: 0 0 0.2em 0.1em rgba(24, 26, 27, 0.75);
}

</style>