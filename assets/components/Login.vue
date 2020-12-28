<template>
    <div>
        <form @submit="authenticate">
            <div>
                <div>
                    <label>Email </label>
                    <input v-model="username" name="email"/>
                </div>
                <div>
                    <label>Password </label>
                    <input v-model="password" name="password"/>
                </div>
            </div>
            <input type="submit"/>
        </form>
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