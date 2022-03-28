<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
         <h2 class="teal-text">Welcome</h2>
         <form @submit.prevent="enterChat">
     <div>
       <label for="name">Name:</label>
       <input type="text" v-model="userName" name="name"  placeholder="Enter Name"></div>
        <div>
           <p v-if="error">{{ error }}</p>
        <button class="btn teal">Enter Chat</button>
      </div>
   </form>
      </div>
    </div>
   
   </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
     userName: null,
     error:null
    }
  },
  methods:{
    // Function to handle user chat room entry 
    enterChat(){
      if(this.userName){
        this.error = null;
        alert(`hi ${this.userName}!`)
      }else{
        this.error = "Please enter your user name.";
      }
    }
  }
}
</script>


<style>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
</style>