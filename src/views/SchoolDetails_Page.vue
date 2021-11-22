<template>
  <div class="SchoolList_Comp">

    <DirectorySearch_Comp />

    <div class="container p-0">
      <div class="row">
        <div class="col-12">

          <BreadComb_Comp :currentPage="currentPage" />

          <div class="row my-2 my-md-5">

            <!--   School Details Left Side   -->
            <div class="col-lg-8">
              <SchoolDetailsLeftAside_Comp />
            </div>

            <!--   School Details Right Side   -->
            <div class="col-lg-4 mt-sm-5 mt-md-0">
              <SchoolDetailsRightAside_Comp />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import DirectorySearch_Comp from "@/components/layouts/DirectorySearch_Comp/DirectorySearch_Comp.vue";
import BreadComb_Comp from "@/components/layouts/BreadComb_Comp/BreadComb_Comp.vue";
import SchoolDetailsLeftAside_Comp
  from "@/components/pages/school_details/SchoolDetailsLeftAside_Comp/SchoolDetailsLeftAside_Comp.vue";
import SchoolDetailsRightAside_Comp
  from "@/components/pages/school_details/SchoolDetailsRightAside_Comp/SchoolDetailsRightAside_Comp.vue";

export default defineComponent({
  name: "SchoolDetails_Page",

  data() {
    return {
      currentPage: "School Details" as string,
    };
  },

  components: {
    DirectorySearch_Comp,
    BreadComb_Comp,
    SchoolDetailsLeftAside_Comp,
    SchoolDetailsRightAside_Comp,
  },
});
</script>

<style lang="scss" scoped>

</style>