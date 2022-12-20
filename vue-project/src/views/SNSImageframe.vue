<template>
    <div class="Account-area">
      <h1>SNSimageframe</h1>
    </div>
</template>
<script setup>
  import { ref , onMounted } from 'vue'
  import {collection, onSnapshot , setDoc, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
  import {db} from '@/firebase'
  import { useRoute } from 'vue-router'

//   const puzzledatabase = doc(db,'puzzle-flag',route.params.id)
  

</script>

<style>
</style>