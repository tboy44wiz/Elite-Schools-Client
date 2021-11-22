<template>
    <div class="SchoolListAside_Comp">

      <!--   Top Wrapper   -->
      <div class="school-list-top__wrapper">
        <p class="mb-0">{{ matchCounter }} matches found</p>
        <div class="sort-by-and-orientation__wrapper">

            <!--   Sort by   -->
            <select class="form-select form-select-sm" aria-label=".form-select-lg example">
              <option selected>Sort By</option>
              <option value="names">Names</option>
              <option value="date_created">Date Created</option>
            </select>

            <!--   Sort Order   -->
            <select class="form-select form-select-sm" aria-label=".form-select-lg example">
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>

          <!--   Layout View   -->
          <div v-if="layoutView === 'listView'" class="layout__icon" title="List View">
            <box-icon name='list-ul' color="#05139f"></box-icon>
          </div>
          <div v-else class="layout__icon" title="Grid View">
            <box-icon name='grid-alt' color="#05139f"></box-icon>
          </div>
        </div>
      </div>

      <!--   List Wrapper   -->
      <ul class="school__list">

        <li class="mCard school-list__items">
          <div class="row">

            <!--   School Details   -->
            <div class="col-lg-8 d-flex justify-content-between">
              <div class="school-logo-and-name__wrapper">
                <img :src="schoolLogo1" alt="School Logo" />
                <div class="school-details__wrapper">
                  <strong class="school__name">St Pauls Nursery & Primary School, Enugu.</strong>
                  <div class="school-details__items">
                    <box-icon name='map' color="#9D9D9D"></box-icon>
                    <span>6B Joseph Shyngle Street, Enugu State.</span>
                  </div>
                  <div class="school-details__items">
                    <box-icon name='user-badge' type='solid' color="#9D9D9D"></box-icon>
                    <span>Public Mission</span>
                  </div>
                </div>
              </div>

              <div class="d-sm-none d-lg-block v__divider" />
            </div>

            <!--   School Contact   -->
            <div class="col-lg-4 mt-sm-4 mt-lg-0">

              <hr class="d-sm-block d-lg-none h__divider" />

              <div class="school-contact__wrapper">
                <div class="school-contact__items">
                  <box-icon name='envelope' color="#9D9D9D"></box-icon>
                  <span>st_paulschool@yahoo.com</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='phone' color="#9D9D9D"></box-icon>
                  <span>+234 80x xxxx xxx</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='buildings' color="#9D9D9D"></box-icon>
                  <span>Public Mission</span>
                </div>

                <router-link to="/school_details">
                  <button class="view-more__button">View More</button>
                </router-link>
              </div>
            </div>
          </div>
        </li>

        <li class="mCard school-list__items">
          <div class="row">

            <!--   School Details   -->
            <div class="col-lg-8 d-flex justify-content-between">
              <div class="school-logo-and-name__wrapper">
                <img :src="schoolLogo2" alt="School Logo" />
                <div class="school-details__wrapper">
                  <strong class="school__name">Girls Grammar School, Enugu.</strong>
                  <div class="school-details__items">
                    <box-icon name='map' color="#9D9D9D"></box-icon>
                    <span>6B Joseph Shyngle Street, Enugu State.</span>
                  </div>
                  <div class="school-details__items">
                    <box-icon name='user-badge' type='solid' color="#9D9D9D"></box-icon>
                    <span>Public Mission</span>
                  </div>
                </div>
              </div>

              <div class="d-sm-none d-lg-block v__divider" />
            </div>

            <!--   School Contact   -->
            <div class="col-lg-4 mt-sm-4 mt-lg-0">

              <hr class="d-sm-block d-lg-none h__divider" />

              <div class="school-contact__wrapper">
                <div class="school-contact__items">
                  <box-icon name='envelope' color="#9D9D9D"></box-icon>
                  <span>st_paulschool@yahoo.com</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='phone' color="#9D9D9D"></box-icon>
                  <span>+234 80x xxxx xxx</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='buildings' color="#9D9D9D"></box-icon>
                  <span>Public Mission</span>
                </div>

                <router-link to="/school_details">
                  <button class="view-more__button">View More</button>
                </router-link>
              </div>
            </div>
          </div>
        </li>

        <li class="mCard school-list__items">
          <div class="row">

            <!--   School Details   -->
            <div class="col-lg-8 d-flex justify-content-between">
              <div class="school-logo-and-name__wrapper">
                <img :src="schoolLogo3" alt="School Logo" />
                <div class="school-details__wrapper">
                  <strong class="school__name">Kings Collage, Enugu.</strong>
                  <div class="school-details__items">
                    <box-icon name='map' color="#9D9D9D"></box-icon>
                    <span>6B Joseph Shyngle Street, Enugu State.</span>
                  </div>
                  <div class="school-details__items">
                    <box-icon name='user-badge' type='solid' color="#9D9D9D"></box-icon>
                    <span>Private</span>
                  </div>
                </div>
              </div>

              <div class="d-sm-none d-lg-block v__divider" />
            </div>

            <!--   School Contact   -->
            <div class="col-lg-4 mt-sm-4 mt-lg-0">

              <hr class="d-sm-block d-lg-none h__divider" />

              <div class="school-contact__wrapper">
                <div class="school-contact__items">
                  <box-icon name='envelope' color="#9D9D9D"></box-icon>
                  <span>st_paulschool@yahoo.com</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='phone' color="#9D9D9D"></box-icon>
                  <span>+234 80x xxxx xxx</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='buildings' color="#9D9D9D"></box-icon>
                  <span>Public Mission</span>
                </div>

                <router-link to="/school_details" class="">
                  <button class="view-more__button">View More</button>
                </router-link>
              </div>
            </div>
          </div>
        </li>

        <li class="mCard school-list__items">
          <div class="row">

            <!--   School Details   -->
            <div class="col-lg-8 d-flex justify-content-between">
              <div class="school-logo-and-name__wrapper">
                <img :src="schoolLogo4" alt="School Logo" />
                <div class="school-details__wrapper">
                  <strong class="school__name">Kings Collage, Enugu.</strong>
                  <div class="school-details__items">
                    <box-icon name='map' color="#9D9D9D"></box-icon>
                    <span>6B Joseph Shyngle Street, Enugu State.</span>
                  </div>
                  <div class="school-details__items">
                    <box-icon name='user-badge' type='solid' color="#9D9D9D"></box-icon>
                    <span>Private</span>
                  </div>
                </div>
              </div>

              <div class="d-sm-none d-lg-block v__divider" />
            </div>

            <!--   School Contact   -->
            <div class="col-lg-4 mt-sm-4 mt-lg-0">

              <hr class="d-sm-block d-lg-none h__divider" />

              <div class="school-contact__wrapper">
                <div class="school-contact__items">
                  <box-icon name='envelope' color="#9D9D9D"></box-icon>
                  <span>st_paulschool@yahoo.com</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='phone' color="#9D9D9D"></box-icon>
                  <span>+234 80x xxxx xxx</span>
                </div>
                <div class="school-contact__items">
                  <box-icon name='buildings' color="#9D9D9D"></box-icon>
                  <span>Public Mission</span>
                </div>

                <router-link to="/school_details" class="">
                  <button class="view-more__button">View More</button>
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    //  Import Images.
    import schoolBadge1 from '@/assets/images/logos/logo1.png';
    import schoolBadge2 from '@/assets/images/logos/logo2.png';
    import schoolBadge3 from '@/assets/images/logos/logo3.png';
    import schoolBadge4 from '@/assets/images/logos/logo4.png';

    export default defineComponent({
      name: 'SchoolListAside_Comp',

      data() {
        return {
          layoutView: "listView" as string,
          // layoutView: "gridView",
          matchCounter: 4 as number,
          schoolLogo1: schoolBadge1,
          schoolLogo2: schoolBadge2,
          schoolLogo3: schoolBadge3,
          schoolLogo4: schoolBadge4,
        };
      },
    });
</script>

<style lang="scss" scoped>
  @import "SchoolListAside_Comp";
</style>
