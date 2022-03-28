<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome To Vue CLI-2 Chat!</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Name:</label>
          <input type="text" v-model="name" name="name" />
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    // Function to handle user chat room entry
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name }})
        this.feedback = null;
        this.name = null
      } else {
        this.feedback = "Please enter your user name.";
      }
    },
  },
};
</script>


<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>