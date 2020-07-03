<template>
  <div class="c-boxUser">
    <div class="c-boxUser_content">
      <figure class="c-boxUser_boxImg">
        <img :alt="userInfo.name"
             class="c-boxUser_img"
             :src="userInfo.avatar_url ? userInfo.avatar_url : 'https://via.placeholder.com/150'">
      </figure>

      <div class="c-boxUser_content_info">
        <h3 class="c-boxUser_title">{{ userInfo.name }}</h3>
        <p class="c-boxUser_text"
           v-if="userInfo.blog">{{ userInfo.blog }}</p>
        <p class="c-boxUser_text"
           v-if="userInfo.company">{{ userInfo.company }}</p>
      </div>
    </div>

    <div class="c-boxUser_list"
         v-if="repoList.length">
      <div class="l-grid">
        <div class="l-col--12 l-col--Xs6 l-col--Md4 l-grid--noGap"
             :key="ind"
             v-for="(item, ind) in repoList">
          <BoxRepo :name="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BoxRepo from './BoxRepo.vue';

  export default {
    name: 'UserContainer',
    components: { BoxRepo },
    props: {
      repoList: {
        type: Array,
        default: () => [],
      },
      userInfo: {
        type: Object,
        default: () => {},
      },
    }
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-boxUser {
    &_boxImg {
      display: flex;
      flex-direction: column;
      height: pxToRem(48);
      width: pxToRem(48);

      @media(min-width: pxToRem(568)) {
        height: pxToRem(92);
        width: pxToRem(92);
      }
    }

    &_img {
      height: auto;
      object-fit: contain;
      max-width: 100%;
    }

    &_content {
      border: pxToRem(2) solid $color-brand;
      display: flex;
      justify-content: space-between;
      margin-bottom: pxToRem(12);
      padding: pxToRem(8);
      width: 100%;

      &_info {
        width: calc(100% - #{pxToRem(64)});

        @media(min-width: pxToRem(568)) {
          width: calc(100% - #{pxToRem(112)});
        }
      }
    }

    &_title,
    &_text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    &_title {
      font-size: pxToRem(18);
      margin: 0 0 pxToRem(8);
      padding: 0;
      position: relative;

      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        width: pxToRem(48);
      }
    }

    &_text {
      color: $color-dark;
      font-size: pxToRem(14);
      margin: 0 0 pxToRem(4);
      word-break: break-all;
    }

    &_list {
      width: 100%;
    }
  }
</style>
