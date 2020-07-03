<template>
  <div class="c-boxUser">
    <figure class="c-boxUser_boxImg">
      <img alt=""
           class="c-boxUser_img"
           src="">
    </figure>

    <div class="c-boxUser_content"></div>

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
  export default {
    name: 'UserContainer',
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

<style scoped>

</style>
