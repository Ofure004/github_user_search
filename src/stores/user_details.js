import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import moment from 'moment/moment';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: ref({
      name:'',
      login:'',
      bio:'',
      public_repos:'',
      followers:'',
      following:'',
      location:'',
      blog:'',
      company:'',
      created_At:'',
      twitter_username:'',
      avatar_url:'',

    }),
    username: ref('')
  }),
  actions: {
    getUser(){
      axios.get(`https://api.github.com/users/${this.username}`) 
      .then((response) => {
        console.log(response)
        this.users = response.data; 
        console.log(this.users)
      })
    }
  },
  getters: {
    formatDate: (state) => {
      let createdAt = moment(state.users.created_At).format('MMMM Do YYYY');
      return createdAt;
    } 
  }

})

