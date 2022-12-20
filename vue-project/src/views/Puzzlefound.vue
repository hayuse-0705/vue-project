<template>
    <div class="puzzle-found">
      <h1>Puzzle found{{$route.params.id}}</h1>
      <iframe src="https://lottie.host/?file=6f6575e7-cf29-4f5e-a4d8-7351df40d853/znqV94rdCd.json"></iframe>
      <p id="params">{{}}</p>
    </div>
</template>
<script setup>
  import { ref , onMounted } from 'vue'
  import {collection, onSnapshot , setDoc, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
  import {db} from '@/firebase'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const puzzledatabase = doc(db,'puzzle-flag',route.params.id)
  
  const paramsdata = route.params.id

  console.log(route.params.id)
  console.log(toString.call(paramsdata))


  const unsub = onSnapshot(doc(db, "puzzle-flag", "id",), (doc) => {
    console.log("Current data: ", doc.data());
});
    // const getparams = () =>{
    //     console.log(route.params.id)
    // }
    // addDoc(puzzledatabase, {
    //     id:route.params.id,
    //     flag:true
    //   });
    setDoc(puzzledatabase,{
        id:route.params.id,
        flag:true
    })




</script>

<style>
nav{
    display: none;
}
iframe{
    border: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
a{
    display: none !important; 
}
</style>