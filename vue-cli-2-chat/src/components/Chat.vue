<template>
  <div class="chat container">
     <h2 class="center teal-text">Vue CLI-2 Chat</h2>
     <div class="card">
       <div class="card-content">
         <ul class="messages">
           <li>Message</li>
         </ul>
       </div>
     </div>
  </div>
</template>

<script>
export default {
name:'Chat',
data(){
    return{
        
    }
}
}
</script>

<style>
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 1.2em;
}
</style>
