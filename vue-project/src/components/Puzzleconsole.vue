<template>
    <div class="puzzle-console">
      <h1>Puzzle console</h1>
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
        // console.log(toString.call(puzzleid))
        // console.log(toString.call(puzzleid.toString()))
        // const puzzledatabase = doc(db,'puzzle-flag',puzzleid.toString())
        //     setDoc(puzzledatabase,{
        //         id:puzzleid,
        //         flag:false
        //     })

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
        confirm("Puzzle all reseted")

    }
    const allopenpuzzle = () =>{
        // console.log(toString.call(puzzleid))
        // console.log(toString.call(puzzleid.toString()))
        // const puzzledatabase = doc(db,'puzzle-flag',puzzleid.toString())
        //     setDoc(puzzledatabase,{
        //         id:puzzleid,
        //         flag:false
        //     })

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
        alert("Puzzle all opened")

    }


</script>

<style>
h1{
    text-align:center;
}
.puzzle-console{
    position: absolute;
    top: 0%;
    left: 0%;

}
#puzzlereset{
    border: 2px solid #000;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    margin: 20px;
}
#puzzlereset:hover{
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
}
#puzzleallopen{
    border: 2px solid #000;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    margin: 20px;
}
#puzzleallopen:hover{
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
}
</style>