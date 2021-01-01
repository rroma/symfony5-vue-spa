<template>
    <div class="container">
        <router-view></router-view>
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