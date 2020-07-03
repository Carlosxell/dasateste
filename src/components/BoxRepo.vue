<template>
  <div class="c-boxRepo">
    <span class="c-boxRepo_iconBox">
      <svg class="c-boxRepo_icon m-icon--sm"
           title="icone de pasta/repositório">
        <use :xlink:href="`#${folder.id}`" />
      </svg>
    </span>

    <div class="c-boxRepo_content">
      <h3 class="c-boxRepo_title"
          v-if="name">[Repo] {{ name }}</h3>
      <p class="c-boxRepo_text"
          v-if="owner">{{ owner }}</p>
    </div>
  </div>
</template>

<script>
  import folder from '../assets/icons/ic-folder.svg?sprite';

  export default {
    name: 'BoxRepo',
    props: {
      name: {
        type: String,
        default: () => '',
      },
      owner: {
        type: String,
        default: () => '',
      },
    },
    data: () => {
      return {
        folder
      };
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-boxRepo {
    border: pxToRem(2) solid $color-brand;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: pxToRem(12);
    width: 100%;

    &_iconBox {}

    &_icon {
      fill: $color-brand;
    }

    &_content {
      letter-spacing: pxToRem(.8);
      width: calc(100% - #{pxToRem(42)});
    }

    &_title {
      font-size: pxToRem(14);
      font-weight: 500;
      margin: 0;
    }

    &_text {
      font-size: pxToRem(12);
      margin: pxToRem(4) 0 0;
    }
  }
</style>
