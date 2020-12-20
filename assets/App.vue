<template>
    <div class="container">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    message: () => {
      return 'Hello'
    }
  }
};
</script>