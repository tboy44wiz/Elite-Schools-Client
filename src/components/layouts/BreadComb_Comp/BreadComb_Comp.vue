<template>
    <div class="BreadComb_Comp">
        <p class="current-page__title">
          <router-link to="/">Home</router-link>
          >
          <span>{{ currentPage }}</span>
        </p>
    </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'BreadComb_Comp',

    props: {
      currentPage: {
        type: String,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "BreadComb_Comp";
</style>