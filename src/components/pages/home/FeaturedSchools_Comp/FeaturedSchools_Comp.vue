<template>
    <div class="FeaturedSchools_Comp">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">

            <!--    Section Title    -->
            <SectionTitle_Comp :title="title" />

            <!--    Our Partners   -->
            <div class="container">
              <div class="row">
                <div
                    v-for="featuredSchool in featuredSchools"
                    :key="featuredSchool.name"
                    class="col-6 col-md-4 col-lg-3 mt-5 mt-lg-0 featured-schools-item__wrapper">
                  <img :src="featuredSchool.image" alt="Partners Logo" class="img-fluid">
                  <p>{{ featuredSchool.name }}</p>
                  <div class="school-type__wrapper">
                    <box-icon name='user-badge' type='solid' color="#9D9D9D" />
                    <span>{{ featuredSchool.schoolType }}</span>
                  </div>

                  <router-link to="/school_details" class="">
                    <button class="view-more-school-detail__button">View More</button>
                  </router-link>
                </div>
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
    import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";
    import schoolBadge1 from "@/assets/images/logos/logo1.png";
    import schoolBadge2 from "@/assets/images/logos/logo2.png";
    import schoolBadge3 from "@/assets/images/logos/logo3.png";
    import schoolBadge4 from "@/assets/images/logos/logo4.png";

    export default defineComponent({
      name: 'FeaturedSchools_Comp',

      data() {
        return {
          title: "Featured Schools" as string,
          featuredSchools: [
            {image: schoolBadge1, name: "Girls Grammar School, Enugu.", schoolType: "Public Mission"},
            {image: schoolBadge2, name: "Kings Collage, Enugu.", schoolType: "Private"},
            {image: schoolBadge3, name: "St Pauls Nursery & Primary School, Enugu.", schoolType: "Mission"},
            {image: schoolBadge4, name: "Kings Collage, Enugu.", schoolType: "Private"},
          ],
        };
      },

      components: {
        SectionTitle_Comp,
      },
    });
</script>

<style lang="scss" scoped>
  @import "FeaturedSchools_Comp";
</style>
