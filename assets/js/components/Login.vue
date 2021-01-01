<template>
    <div class="flex gray-600 items-center h-screen w-full">
        <div class="bg-pmyellow-default w-full bg-white rounded shadow-lg p-8 pb-4 m-4 md:max-w-sm md:mx-auto" style="border: 1px solid #fffcf1;">
            <form @submit="authenticate" class="mb-4 md:flex md:flex-wrap md:justify-between">
                <div class="flex flex-col mb-4 w-full">
                    <label  class="mb-2 uppercase tracking-wide font-bold text-sm text-grey-darkest">Email </label>
                    <input type="email" v-model="username" name="email" class="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                </div>
                <div class="flex flex-col mb-4 w-full">
                    <label  class="mb-2 uppercase tracking-wide font-bold text-sm text-grey-darkest">Password </label>
                    <input type="password" v-model="password" name="password" class="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                </div>
                <input class="mt-4 w-full flex-shrink-0 bg-green-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-300" type="submit" value="Submit"/>
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