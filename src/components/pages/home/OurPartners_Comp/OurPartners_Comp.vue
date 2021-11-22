<template>
    <div class="OurPartners_Comp">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!--    Section Title    -->
            <SectionTitle_Comp :title="title" />

            <!--    Our Partners   -->
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="partners-logo__wrapper">
                    <div
                        v-for="partnersDetail in partnersDetails"
                        :key="partnersDetail.name"
                    class="single-partner__wrapper">
                      <img :src="partnersDetail.image" alt="Partners Logo" class="img-fluid">
                      <p>{{ partnersDetail.name }}</p>
                    </div>
                  </div>
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

    //  Import Images.
    import jambLogo from '@/assets/images/logos/jamb_logo.png';
    import waecLogo from '@/assets/images/logos/waec_logo.png';
    import necoLogo from '@/assets/images/logos/neco_logo.png';
    import federalMinistryOfEducation from '@/assets/images/logos/federal_ministry_of_education.png';

    export default defineComponent({
      name: 'OurPartners_Comp',

      data() {
        return {
          title: "Our Partners" as string,
          partnersDetails: [
            {image: jambLogo, name: "J.A.M.B"},
            {image: waecLogo, name: "W.A.E.C"},
            {image: necoLogo, name: "N.E.C.O"},
            {image: federalMinistryOfEducation, name: "W.A.E.C"},
          ],
        };
      },

      components: {
        SectionTitle_Comp
      },
    });
</script>

<style lang="scss" scoped>
  @import "OurPartners_Comp";
</style>
