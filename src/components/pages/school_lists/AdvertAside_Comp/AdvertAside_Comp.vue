<template>
    <div class="AdvertAside_Comp">

      <!--   Popular Schools   -->
      <div class="popular-school-list__Wrapper">
        <h5 class="popular-school__caption">Popular Schools</h5>

        <ul class="popular-school__list">
          <li class="popular-school__items">
            <img :src="schoolLogo1" alt="School Logo" />
            <div class="popular-school-details__wrapper">
              <p class="popular-school__name">St Pauls Nursery & Primary School, Enugu.</p>
              <div class="popular-school-details__items">
                <box-icon name='map' color="#9D9D9D" />
                <span>6B Joseph Shyngle Street, Enugu State.</span>
              </div>
            </div>
          </li>

          <li class="popular-school__items">
            <img :src="schoolLogo3" alt="School Logo" />
            <div class="popular-school-details__wrapper">
              <p class="popular-school__name">Kings Collage, Enugu.</p>
              <div class="popular-school-details__items">
                <box-icon name='map' color="#9D9D9D" />
                <span>6B Joseph Shyngle Street, Enugu State.</span>
              </div>
            </div>
          </li>
        </ul>
      </div>


      <!--   Top News   -->
      <div class="news-lists__Wrapper">
        <h5 class="news-lists__caption">Top News</h5>

        <ul class="news__lists">
          <li class="news__items">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pmnewsnigeria.com%2F2019%2F07%2FJAMB-1.jpg&f=1&h=110" alt="">
            <p class="advert__title">JAMB defends remittance of operating surplus</p>
          </li>
          <li class="news__items">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.modernghana.com%2Fimages%2Fcontent%2F1115202133607-k5frj7u2h0-waec-assures-of-leak-free-exams-as-bece-begins1.jpg&f=1&h=110" alt="">
            <p class="advert__title">WAEC assures of 'leak-free' exams as 2021 BECE begins</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    //  Import Images.
    import schoolBadge1 from '@/assets/images/logos/logo1.png';
    import schoolBadge3 from '@/assets/images/logos/logo3.png';

    export default defineComponent({
      name: 'AdvertAside_Comp',

      data() {
        return {
          schoolLogo1: schoolBadge1,
          schoolLogo3: schoolBadge3,
        };
      },
    });
</script>

<style lang="scss" scoped>
  @import "AdvertAside_Comp";
</style>
