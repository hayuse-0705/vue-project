<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'



</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    
      <nav>
        <h1>HOME</h1>
        <RouterLink to="/account"><li>Account</li></RouterLink>
        <RouterLink to="/accountlogin"><li>Account Login</li></RouterLink>
        <RouterLink to="/puzzle"><li>Puzzle</li></RouterLink>
        <RouterLink to="/puzzlefound/1"><li>Pease get</li></RouterLink>
        <RouterLink to="/puzzleconsole"><li>Puzzleconsole</li></RouterLink>
        <RouterLink to="/snsupload"><li>SNSupload</li></RouterLink>
        <RouterLink to="/sns"><li>SNS</li></RouterLink>
        <RouterLink to="/snsgood"><li>SNSgood</li></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
.wrapper {
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
a li {
  color:#000000;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
a{
  color:#000000;
  text-decoration: none;
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
  border-color: #FFF;
}
.wrapper a:nth-child(2) li{
  background: #e1b2c5;
}
.wrapper a:nth-child(3) li{
  background: #e1b2c5;
}
.wrapper a:nth-child(4) li{
  background: #fffacd;
}
.wrapper a:nth-child(5) li{
  background: #fffacd;
}
.wrapper a:nth-child(6) li{
  background: #fffacd;
}
.wrapper a:nth-child(7) li{
  background: #c8d8ff;
}
.wrapper a:nth-child(8) li{
  background: #c8d8ff;
}
.wrapper a:nth-child(9) li{
  background: #c8d8ff;
}
@media (min-width: 1024px) {
  
}
</style>
