<template>
    <div class="SchoolDetailsRightAside_Comp">

      <!--   Contact Address   -->
      <div class="contact__wrapper">
        <h4 class="contact-sub__heading">Contact Us</h4>

        <div class="school-contact__items">
          <box-icon name='map' color="#9D9D9D"></box-icon>
          <span>6B Joseph Shyngle Street, Enugu State.</span>
        </div>
        <div class="school-contact__items">
          <box-icon name='envelope' color="#9D9D9D"></box-icon>
          <span>st_paulschool@yahoo.com</span>
        </div>
        <div class="school-contact__items">
          <box-icon name='phone' color="#9D9D9D"></box-icon>
          <span>+234 80x xxxx xxx</span>
        </div>
      </div>

      <!--   Management Team And Head Principal   -->
      <div class="management-and-principal-team__wrapper">
        <h4 class="management-and-principal-team__heading">Management Team</h4>
        <ul>
          <li>Sir Eben Okafor</li>
          <li>Rev Philip Nwachukwu</li>
          <li>Mrs Ngozi Grace</li>
        </ul>

        <h4 class="management-and-principal-team__heading mt-2">Principals</h4>
        <p>
          Mr Paul Odoh
          <small>(Principal)</small>
        </p>
        <p>
          Mr Larry Eze
          <small>(Vice Principal)</small>
        </p>
      </div>

      <!--   Staff And Students Count   -->
      <div class="staff-and-student__wrapper">
        <h4 class="staff-and-student__heading">Staff</h4>
        <p>
          <strong>Males</strong>: 9
        </p>
        <p>
          <strong>Females</strong>: 13
        </p>
        <p>
          <strong>Total</strong>: 22
        </p>

        <h4 class="staff-and-student__heading mt-2">Students</h4>
        <p>
          <strong>Boys</strong>: 118
        </p>
        <p>
          <strong>Girls</strong>: 94
        </p>
        <p>
          <strong>Total</strong>: 212
        </p>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'SchoolDetailsRightAside_Comp',
  });
</script>

<style lang="scss" scoped>
  @import "SchoolDetailsRightAside_Comp";
</style>
