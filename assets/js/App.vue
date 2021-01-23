<template>
    <div class="container">
        <nav class="border-b-2 border-console-green flex items-center justify-between flex-wrap bg-console-green p-8 w-full">
            <button class="text-white mt-4 w-full flex-shrink-0 bg-console-pink-400 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-console-pink-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-300">Login</button>
        </nav>
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