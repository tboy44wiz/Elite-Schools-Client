<template>
    <div class="DirectorySearch_Comp">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">

              <!--     Directory Search     -->
              <div class="container p-0">
                <div class="row">
                  <div class="col-12">
                    <form class="directory-search__form">
                      <fieldset>
                        <!--   States   -->
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                          <option selected>Select State</option>
                          <option value="abia">Abia State</option>
                          <option value="anambra">Anambra State</option>
                          <option value="ebonyi">Ebonyi State</option>
                          <option value="enugu">Enugu State</option>
                          <option value="imo">Imo State</option>
                        </select>

                        <!--      -->
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                          <option selected>Select Local Government</option>
                          <option value="abia">Aninri</option>
                          <option value="anambra">Awgu</option>
                          <option value="ebonyi">Enugu East</option>
                          <option value="enugu">Oji River</option>
                          <option value="imo">Udi</option>
                        </select>

                        <!--   Local Government   -->
                        <!-- <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                        <option selected>Select Region</option>
                        <option value="abia">Rural</option>
                        <option value="anambra">Urban</option>
                        <option value="ebonyi">Semi-Urban</option>
                      </select>-->

                        <!--   School Ownership   -->
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                          <option selected>Select Ownership</option>
                          <option value="nursery">All</option>
                          <option value="primary">Public Government</option>
                          <option value="primary">Public Mission</option>
                          <option value="secondary">Private</option>
                        </select>

                        <!--   School Type   -->
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                          <option selected>Select School Type</option>
                          <option value="nursery">Creche/Nursery</option>
                          <option value="primary">Primary</option>
                          <option value="secondary">Secondary</option>
                          <option value="tertiary">Tertiary</option>
                        </select>

                        <router-link to="/school_list">
                          <button type="submit" class="search__button">Search</button>
                        </router-link>
                      </fieldset>
                    </form>
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

  export default defineComponent({
    name: 'DirectorySearch_Comp',
  });
</script>

<style lang="scss" scoped>
  @import "DirectorySearch_Comp";
</style>
