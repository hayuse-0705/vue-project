<template>
    <div class="puzzle-console">
      <!-- <h1>Puzzle console</h1> -->
      <p id="puzzlereset" @click="resetpuzzle()">Reset Puzzle</p>
      <p id="puzzleallopen" @click="allopenpuzzle()">Open Puzzle</p>
    </div>
</template>
<script setup>
  import { ref , onMounted } from 'vue'
  import {collection, onSnapshot , setDoc, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
  import {db} from '@/firebase'
  
  


    // const getparams = () =>{
    //     console.log(route.params.id)
    // }
    // addDoc(puzzledatabase, {
    //     id:route.params.id,
    //     flag:true
    //   });
    
    const resetpuzzle = () =>{
        let resetcheck =confirm("パズルをリセットしますか？")
        // console.log(toString.call(puzzleid))
        // console.log(toString.call(puzzleid.toString()))
        // const puzzledatabase = doc(db,'puzzle-flag',puzzleid.toString())
        //     setDoc(puzzledatabase,{
        //         id:puzzleid,
        //         flag:false
        //     })
        if(resetcheck==true){
        for(var puzzleid = 1 ; puzzleid<=144 ; puzzleid ++){
            
            const puzzledatabase = doc(db,'puzzle-flag',''+puzzleid.toString()+'')
            setDoc(puzzledatabase,{
                id:puzzleid,
                flag:false
            })
            // console.log(puzzleid)
            // const puzzledatabase = doc(db,'puzzle-flag',puzzleid)
            // setDoc(puzzledatabase,{
            //     id:puzzleid,
            //     flag:false
            // })
        }
        }
        

    }
    const allopenpuzzle = () =>{
        let opencheck=confirm("パズルを全て開けますか？")
        // console.log(toString.call(puzzleid))
        // console.log(toString.call(puzzleid.toString()))
        // const puzzledatabase = doc(db,'puzzle-flag',puzzleid.toString())
        //     setDoc(puzzledatabase,{
        //         id:puzzleid,
        //         flag:false
        //     })
        if(opencheck == true){
        for(var puzzleid = 1 ; puzzleid<=144 ; puzzleid ++){
            
            const puzzledatabase = doc(db,'puzzle-flag',''+puzzleid.toString()+'')
            setDoc(puzzledatabase,{
                id:puzzleid,
                flag:true
            })
            // console.log(puzzleid)
            // const puzzledatabase = doc(db,'puzzle-flag',puzzleid)
            // setDoc(puzzledatabase,{
            //     id:puzzleid,
            //     flag:false
            // })
        }
        }
        

    }


</script>

<style>
h1{
    text-align:center;
}
.puzzle-console{
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    font-size: 1rem;
    justify-content: center;
}
#puzzlereset{
    border: 2px solid #f55;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    margin: 20px;
    color: white;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#puzzlereset:hover{
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    padding: 10px;
    cursor: pointer;
}
#puzzleallopen{
    border: 2px solid #55f;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    max-width: 300px;
    transition: 0.3s;
    color: white;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
    margin: 20px;
}
#puzzleallopen:hover{
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    padding: 10px;
    cursor: pointer;
}
</style>