<template>
  <RegisterContainer>
    <header>
      <img :src="'/images/logo.svg'" />
      <router-link> Already registered? </router-link>
    </header>
    <div v-if="step == 1">
      <form @submit.prevent="submit">
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
            required
            autofocus
            autocomplete="name"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="form.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="form.password"
            required
            autocomplete="new-password"
          />
        </div>
        <div>
          <label for="password_confirmation">Confirm password</label>
          <input
            id="password_confirmation"
            type="password"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password"
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
    <div v-if="step == 2">
      <form @submit.prevent="finish">
        <div>
          <label for="height">Your Height</label>
          <input
            id="height"
            type="number"
            v-model="form.height"
            required
            pattern="^\d*(\.\d{0,2})?$"
            autocomplete="height"
            placeholder="100 cm"
          />
        </div>
        <div>
          <label for="weigth">Your weight</label>
          <input
            id="weigth"
            type="number"
            v-model="form.weight"
            required
            placeholder="80 Kg"
            autocomplete="weigth"
          />
        </div>
        <footer>
          <button type="submit">Next</button>
          <button type="button" v-on:click="back">Back</button>
        </footer>
      </form>
    </div>
  </RegisterContainer>
</template>

<script>
import { RegisterContainer } from "../styles/Register.js";
export default {
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        height: 0,
        width: 0,
        password_confirmation: "",
      }),
      step: 1,
      message: false,
    };
  },
  components: {
    RegisterContainer,
  },
  methods: {
    finish() {
      this.form
        .transform((data) => ({
          ...data,
        }))
        .post(this.route("register"));
    },
    submit() {
      if (this.form.password !== this.form.password_confirmation) {
        this.message = true;
      } else {
        this.step += 1;
      }
    },
    next() {
      this.step += 1;
    },
    back() {
      this.step -= 1;
    },
  },
};
</script>
