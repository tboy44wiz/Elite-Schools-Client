<template>
  <div class="Home_Comp">

    <Carousel_Comp />
    <FeaturedSchools_Comp />
    <TopNews_Comp />
    <OurPartners_Comp />

  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from 'vue';
  import Carousel_Comp from "@/components/pages/home/Carousel_Comp/Carousel_Comp.vue";
  import FeaturedSchools_Comp from "@/components/pages/home/FeaturedSchools_Comp/FeaturedSchools_Comp.vue";
  import TopNews_Comp from "@/components/pages/home/TopNews_Comp/TopNews_Comp.vue";
  import OurPartners_Comp from "@/components/pages/home/OurPartners_Comp/OurPartners_Comp.vue";

  export default defineComponent({
    name: 'Home_Comp',

    components: {
      Carousel_Comp,
      FeaturedSchools_Comp,
      TopNews_Comp,
      OurPartners_Comp,
    },

  });
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/GlobalVariables";

  .Home {
    //background: #ff814e;
  };
</style>
