<template>
  <div class="details">
    <div class="details-prof">
      <div class="prof-details">
        <div class="details-name">
          Jade
        </div>
        <div class="details-more">
          <div class="details-info">
            chairperson
          </div>
          <div class="details-year">
            <div class="details-dot"></div>
            year 2
          </div>
        </div>
      </div>
      <div class="details-dp">
        <img
          class="details-profile-pic"
          src="https://randomuser.me/api/portraits/med/women/31.jpg"
          alt="pic"
        />
      </div>
    </div>
    <div class="details-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi repudiandae accusantium corporis, temporibus veritatis aliquam architecto natus, nobis officia ex. Delectus assumenda vitae sed laborum voluptatum velit, cupiditate deleniti?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi repudiandae accusantium corporis, temporibus veritatis aliquam architecto natus, nobis officia ex. Delectus assumenda vitae sed laborum voluptatum velit, cupiditate deleniti?
    </div>
    <div class="details-declarations">
      Declarations 
      <div v-for="(declaration, i) in declarations" :key="i" class="details-declarations-info">
        <svg class="details-declaration-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 110-2 1 1 0 010 2z"/></svg>
        <div class="details-declaration-text">
          {{declaration.info}}
        </div>
      </div>
    </div>
    <div class="details-back">
      <div class="details-back-btn">
        BACK
      </div>
    </div>
  </div>
</template>

<script>
// import Menu from '../mobile/Menu'

export default {
  name: "Details",
  components: {
      // Menu
  },
  data(){
      return {
        status: 'dropdown-menu hide',
        declarations: [
          {
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia, architecto'
          },
          {
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia, architecto'
          },
          {
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia, architecto'
          },
          {
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia, architecto'
          }
        ]
      }
  }
};
</script>

<style lang="sass" scoped>
    @import '../../styles/mobile/details.scss';
</style>