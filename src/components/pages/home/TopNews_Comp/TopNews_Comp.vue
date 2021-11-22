<template>
    <div class="TopNews_Comp">
        <div class="container">
          <div class="row">
            <div class="col-12">

              <!--    Section Title    -->
              <SectionTitle_Comp :title="title" />

              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <!--   Top News   -->
                  <div class="top-news__items">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pmnewsnigeria.com%2F2019%2F07%2FJAMB-1.jpg&f=1&h=110" alt="Top New Image" class="img-fluid">
                    <p class="new__title">JAMB defends remittance of operating surplus</p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3">
                  <!--   Top News   -->
                  <div class="top-news__items">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.modernghana.com%2Fimages%2Fcontent%2F1115202133607-k5frj7u2h0-waec-assures-of-leak-free-exams-as-bece-begins1.jpg&f=1&h=110" alt="">
                    <p class="new__title">WAEC assures of 'leak-free' exams as 2021 BECE begins</p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3">
                  <!--   Top News   -->
                  <div class="top-news__items">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pmnewsnigeria.com%2F2019%2F07%2FJAMB-1.jpg&f=1&h=110" alt="">
                    <p class="new__title">JAMB defends remittance of operating surplus</p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3">
                  <!--   Top News   -->
                  <div class="top-news__items">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.modernghana.com%2Fimages%2Fcontent%2F1115202133607-k5frj7u2h0-waec-assures-of-leak-free-exams-as-bece-begins1.jpg&f=1&h=110" alt="">
                    <p class="new__title">WAEC assures of 'leak-free' exams as 2021 BECE begins</p>
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

    export default defineComponent({
      name: 'TopNews_Comp',

      data() {
        return {
          title: "Top News" as string,
        };
      },

      components: {
        SectionTitle_Comp,
      },
    });
</script>

<style lang="scss" scoped>
  @import "TopNews_Comp";
</style>
