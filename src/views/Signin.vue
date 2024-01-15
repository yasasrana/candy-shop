<template>
  <div class="home">
    <h1 class="text-3xl text-red-700 font-bold underline">Sign in</h1>
    <form @submit.prevent="signInWithEmailAndPassword">
      <label>Email</label>
      <input type="email" v-model="email"/>
      <label>Password</label>
      <input type="password" v-model="password"/>
      <button @click="signInWithEmailAndPassword">
      <img src="">
      Sign in Email
    </button>
    </form>
    <button @click="signinwithGoogle">
      <img src="">
      Sign in With Google
    </button>
    <br>
    <br>
    <p v-if="message" >{{ message }}</p>
  </div>
</template>

<script>

import {getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
export default {
  name: 'RegisterView',
  data(){
    return{
      email:'',
      password:'',
      message:'',
    }
  },
  methods:{
    async signInWithEmailAndPassword(){
      const auth= getAuth();
      try{
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.message ='Sign in with email successful';
        this.$router.push('/profile');
      }
        catch(err){
          console.error(err);
          this.message ='Sign in with email failed';
        }
      },
      async signinwithGoogle (){
        const auth = getAuth();
        try {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth,provider);
          this.message = 'Sign in with Google successfull';
          this.$router.push('/');
        } catch (error) {
          console.error(error);
          this.message= 'Sign in with Google failed';
          
        }
      }
    }

}

</script>
