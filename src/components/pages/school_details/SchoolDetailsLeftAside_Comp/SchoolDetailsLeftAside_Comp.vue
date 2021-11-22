<template>
    <div class="SchoolDetailsLeftAside_Comp">

      <div class="school-logo-and-name__wrapper">

        <img :src="schoolLogo" alt="School Logo" class="school__logo" />

        <div class="school-name__wrapper">
          <h2 class="school__name">St Pauls Nursery & Primary School, Enugu.</h2>
          <div class="school-type-and-LGA">
            <box-icon name='buildings' color="#9D9D9D"></box-icon>
            <span class="me-2">Public Mission</span> /
            <span class="ms-2">Enugu North Local Government</span>
          </div>
        </div>
      </div>

      <!--   School Mission   -->
      <h4 class="sub__heading">Our Mission Statement</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda dicta enim fugiat in optio qui quis
        saepe sapiente ut. Ad eius fuga nulla officia quidem. Cum dolor quis sunt!
      </p>

      <!--   School History   -->
      <h4 class="sub__heading">School History</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda dicta enim fugiat in optio qui quis
        saepe sapiente ut. Ad eius fuga nulla officia quidem. Cum dolor quis sunt! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid assumenda dicta enim fugiat in optio qui quis saepe sapiente ut. Ad eius fuga nulla
        officia quidem. Cum dolor quis sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda
      </p>

      <!--   Future Plans for the School   -->
      <h4 class="sub__heading">Future Plans for the School</h4>
      <p>To make the school a centre of academic excellence and creativity. Integration of IGCSE "A" level into the school
        curriculum. To raise the school standard and use education as a tool to promote discipline and self confidence in
        our students.
      </p>

      <!--   Calendar of School Activities for the Current Year   -->
      <h4 class="sub__heading">Calendar of School Activities for the Current Year</h4>
      <table class="school-calender__table" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th><span>Activities</span></th>
          <th><span>Dates</span></th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Borders Resumption</td>
            <td>Monday, 19<sup>th</sup> April 2021</td>
          </tr>
          <tr>
            <td>Whole School Resumption</td>
            <td>Friday, 24<sup>th</sup> April 2021</td>
          </tr>
          <tr>
            <td>Workers Day</td>
            <td>Friday, 1<sup>st</sup> May 2021</td>
          </tr>
          <tr>
            <td>Mid Term Break</td>
            <td>Monday, 3<sup>rd</sup> June 2021</td>
          </tr>
        </tbody>
      </table>

      <!--   Club & Societies   -->
      <h4 class="sub__heading">Club & Societies</h4>
      <p>Get Club, Press Club, Maths Club, Drama/Theater Club, Quiz & Debate Club</p>

      <!--   Examinations Taken   -->
      <h4 class="sub__heading">Examinations Taken</h4>
      <p>W.A.E.C, N.E.C.O, etc.</p>

      <!--   Awards & Achievements   -->
      <h4 class="sub__heading">Awards & Achievements </h4>
      <table class="school-calender__table" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th>Awards</th>
          <th>Position</th>
          <th>Dates</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>NTA Inter-School Debate 2019</td>
          <td>Second</td>
          <td>February 2019</td>
        </tr>
        <tr>
          <td>Indomie Noddle Post Primary School Competition</td>
          <td>First</td>
          <td>May 2021</td>
        </tr>
        <tr>
          <td>Enugu State Secondary School Essay Quiz</td>
          <td>Second</td>
          <td>Septrmber 2021</td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  //  Import Images.
  import schoolBadge from '@/assets/images/logos/logo1.png';

  export default defineComponent({
    name: 'SchoolDetailsLeftAside_Comp',

    data() {
      return {
        schoolLogo: schoolBadge,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "SchoolDetailsLeftAside_Comp";
</style>