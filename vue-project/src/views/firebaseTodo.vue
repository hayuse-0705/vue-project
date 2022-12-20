<template>
    <div class="badass-todo">
      <div class="title has-text-centered">
          Badass Todo
      </div>
      <form
       @submit.prevent="addTodo"
      >
        <div class="field has-addons mb-5">
          <div class="control">
            <input v-model="newTodoContent" class="input" type="text" placeholder="Add a todo">
          </div>
          <div class="control">
            <button :disabled="!newTodoContent" class="button is-info">
              Add
            </button>
          </div>
        </div>
      </form>
      
  
      <div v-for="todo in todos"
      class="card mb-5"
      :class="{'has-background-success-light' : todo.done}"
      >
        <div class="card-content"> 
          <div class="content">
            <div class="columns is-mobile is-vcentered">
              <div class="column" :class="{'has-text-success line-through' : todo.done}">
                {{ todo.content}}
              </div>
              <div class="column is-5 has-text-right">
                <button @click="toggleDone(todo.id)" class="button is-light"
                :class="todo.done ? 'is-success' : 'is-light' "
                >
                  &check;
                </button>
                <button @click="deleteTodo(todo.id)" class="button is-danger ml-2">
                  &cross;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
    import { ref , onMounted } from 'vue'
    import {collection, onSnapshot , addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
    import {db} from '@/firebase'
  
  
    const todosCollectionRef = collection(db,'todos')
  
    const audio = new Audio('./src/assets/se/add-SE-1.mp3')
  
    const todos = ref([
      // {
      //   id: 'id1',
      //   content : 'test-todo1',
      //   done:false
      // },
      // {
      //   id: 'id2',
      //   content : 'test-todo2',
      //   done:true
      // },
      // {
      //   id: 'id3',
      //   content : 'test-todo3',
      //   done:false
      // },
    ])
  
  
  
    onMounted ( () => {
      // const querySnapshot = await getDocs(collection(db, 'todos'))
      // let fbTodos=[]
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, "=>" , doc.data())
      //   const todo ={
      //     id:doc.id,
      //     content:doc.data().content,
      //     done: doc.data().done
      //   }
      //   fbTodos.push(todo)
      // })
      // todos.value = fbTodos
      
      onSnapshot(todosCollectionRef, (querySnapshot) => {
        audio.play()
        const fbTodos = []
        querySnapshot.forEach((doc) => {
          
          const todo ={
            id:doc.id,
            content:doc.data().content,
            done: doc.data().done
          }
          fbTodos.push(todo)
        })
        todos.value=fbTodos
      })
  
    })
  
  
  
    const newTodoContent =ref('')
  
    const addTodo=()=>{
      // const newTodo ={
      //   id: uuidv4(),
      //   content: newTodoContent.value,
      //   done:false
      // }
      // todos.value.unshift(newTodo)
      addDoc(todosCollectionRef, {
        content: newTodoContent.value,
        done: false
      });
      newTodoContent.value=''
    }
  
    const deleteTodo = id =>{
      deleteDoc(doc(todosCollectionRef, id));
    }
  
  
    const toggleDone = id =>{
      // console.log('toggleDone', id)
      const index = todos.value.findIndex(todo => todo.id == id)
      // console.log('index:' ,index)
      
      // const washingtonRef = doc(db, "cities", "DC");
  
      // Set the "capital" field of the city 'DC'
      updateDoc(doc(todosCollectionRef, id), {
        done: !todos.value[index].done
      });
    }
  
  
  </script>
  <style>
    @import 'bulma/css/bulma.min.css';
    .badass-todo{
      max-width: 400px;
      padding: 20px;
      margin:0 auto;
    }
    .line-through{
      text-decoration:line-through ;
    }
  </style>