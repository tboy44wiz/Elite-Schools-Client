<template>
  <div class="App">
    <!--  Header  -->
    <header>
      <AppHeader_Comp :title="title" />
    </header>

    <!--  Body  -->
    <div class="app-body__wrapper">
      <router-view/>
    </div>

    <!--  Footer  -->
    <footer>
      <AppFooter_Comp :title="title" />
    </footer>

  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";
  import AppHeader_Comp from "@/components/layouts/AppHeader_Comp/AppHeader_Comp.vue";
  import AppFooter_Comp from "@/components/layouts/AppFooter_Comp/AppFooter_Comp.vue";


  export default defineComponent({
    components: {
      AppHeader_Comp,
      AppFooter_Comp,
    },

    data() {
      return {
        title: "Elite Schools" as string,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "App";
</style>
