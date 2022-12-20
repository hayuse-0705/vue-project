<template>
    <div class="Account-area">
      <h1>SNSUpload</h1>
        <input type="file" @change="fileUpload" />
<!-- アップロードされた画像が以下に表示される -->
        <img v-if="img_url" :src="img_url" />
        <img src="gs://realtime-chat-b3cde.appspot.com/images/clay-banks-_2Y4C5ZnYs4-unsplash.jpg" alt="">

    </div>
</template>
<script setup>
  import { onMounted } from 'vue'
  import {collection, onSnapshot , setDoc, addDoc, doc, deleteDoc, updateDoc, snapshotEqual} from 'firebase/firestore'
  import {db} from '@/firebase'
  import { useRoute } from 'vue-router'
  import { getStorage, ref , uploadBytes } from "firebase/storage";

// Create a root reference
const storage = getStorage();

const Fileimagepath = collection(db,'image_path')

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
//   const puzzledatabase = doc(db,'puzzle-flag',route.params.id)
const fileUpload = (e) => {
    
    let file = e.target.files[0];
  const storageRef = ref(storage,"images/" + file.name);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    })
    console.log(file)
//   addDoc(Fileimagepath, {
//         filepath: file
//   })
}

</script>

<style>
</style>