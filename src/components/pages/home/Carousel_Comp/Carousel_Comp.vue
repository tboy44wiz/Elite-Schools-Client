<template>
    <div class="Carousel_Comp">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">

            <div class="carousel-inner__wrapper">
              <!--   ELite Logo   -->
              <div class="elite__logo" />
              <!--      <img :src="eliteLogo" alt="Elite Logo" class="elite__logo">-->

              <video autoplay loop muted class="background-footage__video">
                <source :src="videoFootage2" type="video/mp4">
              </video>
              <div class="overlay" />

              <!--   Search Section   -->
              <section class="search__section">
                <h2>Find the Best School to Be</h2>
                <p>All the top elite schools in the South-East of Nigeria starting from Creche/Nursery, Primary, Secondary, Tertiary.</p>

                <div class="directory-search__wrapper">
                  <form class="search__form">

                    <fieldset>
                      <!--   States   -->
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Select State</option>
                        <option value="abia">Abia State</option>
                        <option value="anambra">Anambra State</option>
                        <option value="ebonyi">Ebonyi State</option>
                        <option value="enugu">Enugu State</option>
                        <option value="imo">Imo State</option>
                      </select>

                      <!--      -->
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Select Local Government</option>
                        <option value="abia">Aninri</option>
                        <option value="anambra">Awgu</option>
                        <option value="ebonyi">Enugu East</option>
                        <option value="enugu">Oji River</option>
                        <option value="imo">Udi</option>
                      </select>

                      <!--   Local Government   -->
                      <!-- <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>Select Region</option>
                      <option value="abia">Rural</option>
                      <option value="anambra">Urban</option>
                      <option value="ebonyi">Semi-Urban</option>
                    </select>-->

                      <!--   School Ownership   -->
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Select Ownership</option>
                        <option value="nursery">All</option>
                        <option value="primary">Public Government</option>
                        <option value="primary">Public Mission</option>
                        <option value="secondary">Private</option>
                      </select>

                      <!--   School Type   -->
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Select School Type</option>
                        <option value="nursery">Creche/Nursery</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="tertiary">Tertiary</option>
                      </select>
                    </fieldset>

                    <router-link to="/school_list">
                      <button type="submit" class="search__button">Search</button>
                    </router-link>
                  </form>
                </div>


                <div class="school-level__wrapper">
                  <div class="nursery">
                    <box-icon name='message-square' size="md" animation="tada-hover" color="#ff814e"></box-icon>
                    <p>Nursery</p>
                  </div>
                  <div class="primary">
                    <box-icon name='polygon' size="md" animation='tada-hover' color="#19ff00"></box-icon>
                    <p>Primary</p>
                  </div>
                  <div class="secondary">
                    <box-icon name='shape-square' size="md" animation='tada-hover' color="#3a7dfd"></box-icon>
                    <p>Secondary</p>
                  </div>
                  <div class="tertiary">
                    <box-icon name='book-content' size="md" animation='tada-hover' color="#FF367E"></box-icon>
                    <p>Tertiary</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";

  //  Import assets.
  import eliteLogo from '@/assets/images/logos/elite_schools_logo1.png';
  import videoFootage1 from '@/assets/videos/video_footage1.mp4';
  import videoFootage2 from '@/assets/videos/video_footage2.mp4';

  export default defineComponent({
    name: 'Carousel_comp',

    data() {
      return {
        eliteLogo: eliteLogo,
        videoFootage1,
        videoFootage2,
      };
    }
  });
</script>

<style lang="scss" scoped>
  @import "Carousel_Comp";
</style>
