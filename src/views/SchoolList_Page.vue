<template>
  <div class="SchoolList_Comp">

    <DirectorySearch_Comp />

    <div class="container p-0">
      <div class="row">
        <div class="col-12">

          <BreadComb_Comp :currentPage="currentPage" />

          <div class="row mt-2 mt-md-5">

            <!--   School List Side   -->
            <div class="col-md-8 col-lg-9">
              <SchoolListAside_Comp />
            </div>

            <!--   Right Advert Side   -->
            <div class="col-md-4 col-lg-3 mt-sm-5 mt-md-0">
              <AdvertAside_Comp />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";
  import DirectorySearch_Comp from "@/components/layouts/DirectorySearch_Comp/DirectorySearch_Comp.vue";
  import BreadComb_Comp from "@/components/layouts/BreadComb_Comp/BreadComb_Comp.vue";
  import SchoolListAside_Comp from "@/components/pages/school_lists/SchoolListAside_Comp/SchoolListAside_Comp.vue";
  import AdvertAside_Comp from "@/components/pages/school_lists/AdvertAside_Comp/AdvertAside_Comp.vue";

  export default defineComponent({
    name: "SchoolList_Comp",

    data() {
      return {
        currentPage: "SchoolList" as string,
      };
    },

    components: {
      BreadComb_Comp,
      DirectorySearch_Comp,
      SchoolListAside_Comp,
      AdvertAside_Comp,
    },
  });

</script>

<style lang="scss" scoped>

</style>