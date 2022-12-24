<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
<h1>HOME</h1>
      <nav>
        <li><RouterLink to="/account">account</RouterLink></li>
        <li><RouterLink to="/accountlogin">account Login</RouterLink></li>
        <li><RouterLink to="/puzzle">Puzzle</RouterLink></li>
        <li><RouterLink to="/puzzlefound/1">pease get</RouterLink></li>
        <li><RouterLink to="/puzzleconsole">puzzleconsole</RouterLink></li>
        <li><RouterLink to="/snsupload">snsupload</RouterLink></li>
        <li><RouterLink to="/sns">SNS</RouterLink></li>
        <li><RouterLink to="/snsgood">snsgood</RouterLink></li>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 30px;
  height: 30px;
}
li a{
  color:#000000;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.wrapper li{
    background: #fff;
    border-radius: 50px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto;
    width: 260px;
    padding: 10px 25px;
    color: #000000;
    transition: 0.3s ease-in-out;
    font-weight: 500;
    border: 1px solid #000000;
}
.wrapper li:after{
  content: '';
    width: 10px;
    height: 10px;
    border-top: 3px solid #000000;
    border-right: 3px solid #000000;
    transform: rotate(45deg) translateY(-50%);
    position: absolute;
    top: 50%;
    right: 20px;
    border-radius: 1px;
    transition: 0.3s ease-in-out;
}
.wrapper li:hover:after{
  border-color: rgb(181, 181, 181);
}
.wrapper li:nth-child(1){
  background: #e1b2c5;
}
.wrapper li:nth-child(2){
  background: #e1b2c5;
}
.wrapper li:nth-child(3){
  background: #fffacd;
}
.wrapper li:nth-child(4){
  background: #fffacd;
}
.wrapper li:nth-child(5){
  background: #fffacd;
}
.wrapper li:nth-child(6){
  background: #c8d8ff;
}
.wrapper li:nth-child(7){
  background: #c8d8ff;
}
.wrapper li:nth-child(8){
  background: #c8d8ff;
}
@media (min-width: 1024px) {
  
}
</style>
