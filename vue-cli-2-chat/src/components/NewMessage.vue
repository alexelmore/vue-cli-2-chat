<template>
  <div class="new-message">
      <form>
          <label for="new-message">New message (press enter to add)</label>
          <input type="text" name="new-message" v-model="newMessage">
           <p v-if="feedback" class="red-text">{{ feedback }}</p>
      </form>
  </div>
</template>

<script>
import db from '../firebase/init'
export default {
name:'NewMessage',
props:['name'],
data(){
    return{
        newMessage:null,
        feedback:null
    }
    console.log(db)
}

}
</script>

<style>

</style>