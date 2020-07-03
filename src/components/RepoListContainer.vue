<template>
  <div class="l-grid">
    <div class="l-col--12 l-col--Xs6 l-col--Md4 l-grid--noGap"
         :key="ind"
         v-for="(item, ind) in repoList">
      <BoxRepo :name="item.name"
               :owner="item.owner.login" />
    </div>
  </div>
</template>

<script>
  import BoxRepo from './BoxRepo.vue';

  export default {
    name: 'RepoListContainer',
    components: { BoxRepo },
    props: {
      repoList: {
        type: Array,
        default: () => [],
      },
    }
  };
</script>

<style scoped>

</style>
