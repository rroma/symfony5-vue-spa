<template>
    <div class="text-console-green bg-console-dark font-mono flex gray-600 items-center h-screen w-full">
        <div class="bg-console-black border-2 border-console-green w-full bg-white rounded shadow-lg p-8 pb-4 m-4 md:max-w-sm md:mx-auto">
            <form @submit="authenticate" class="mb-4 md:flex md:flex-wrap md:justify-between">
                <div class="flex flex-col mb-4 w-full">
                    <label class="mb-2 uppercase tracking-wide font-bold text-sm">Email </label>
                    <input type="email" v-model="username" name="email" class="text-white flex-1 font-bold appearance-none border border-transparent w-full py-2 px-4 bg-console-gray placeholder-gray-400 shadow-md rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"/>
                </div>
                <div class="flex flex-col mb-4 w-full">
                    <label class="mb-2 uppercase tracking-wide font-bold text-sm">Password </label>
                    <input type="password" v-model="password" name="password" class="text-white flex-1 font-bold appearance-none border border-transparent w-full py-2 px-4 bg-console-gray placeholder-gray-400 shadow-md rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"/>
                </div>
                <input class="text-white mt-4 w-full flex-shrink-0 bg-console-pink-400 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-console-pink-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-300" type="submit" value="Submit"/>
            </form>
        </div>
    </div>
</template>

<script>
    import auth from '../services/authentication'

    export default {
      name: "Login",
      data() {
          return {
               username: '',
               password: ''
          }
      },
      methods: {
          authenticate(e) {
              e.preventDefault();
              const username = this.$data.username;
              const password = this.$data.password;
              this.$store.dispatch('login', { username, password });
          }
      }
    };
</script>