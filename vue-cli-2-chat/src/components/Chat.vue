<template>
  <div class="chat container">
     <h2 class="center teal-text">Vue CLI-2 Chat</h2>
     <div class="card">
       <div class="card-content">
         <ul class="messages">
           <li>{{name}}</li>
         </ul>
       </div>
     </div>
  </div>
</template>

<script>
export default {
name:'Chat',
props:['name'],
data(){
    return{
        messages:[]
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
  font-size: 0.8em;
}
.messages{
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
 
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
 
.messages::-webkit-scrollbar-thumb {
  background: #aaa; 
}
</style>
