<template>
  <div class="l-page--home">
    <form class="c-form"
          novalidate
          @submit.prevent="searchInfo">
      <div class="c-form_header">
        <h1 class="c-form_header_title">Buscar Github Informações</h1>
      </div>

      <div class="c-form_body">
        <div class="l-grid">
          <div class="l-col--12 l-col--Xs5 l-col--Md4"
               :key="ind"
               v-for="(radio, ind) in radioList">
            <label class="m-radio"
                   :for="radio.id">
              <input class="m-radio_input"
                     :id="radio.id"
                     name="typeSearch"
                     type="radio"
                     :value="radio.value"
                     v-model="form.type">
              <span class="m-radio_label">{{ radio.label }}</span>
            </label>
          </div>
        </div>

        <div class="l-grid s-marginTop--Md">
          <div class="l-col--12 l-col--Xs8">
            <input class="m-input"
                   :placeholder="`Nome ${form.type === 1 ? 'usuário' : 'repositório'}`"
                   type="text"
                   v-model="form.search">
          </div>

          <div class="l-col--12 l-col--Xs4">
            <button class="m-btn--search"
                    :class="{ 'm-btn--loading': searching }"
                    type="submit">Buscar</button>
          </div>
        </div>
      </div>
    </form>

    <RepoListContainer :repo-list="repoInfo"
                       v-if="repoInfo.length && !userInfo" />

    <p v-if="error">{{ error.message }}</p>
  </div>
</template>

<script>
  import { getUser } from '../services/user-service';
  import { getRepos, getReposByUrl } from '../services/repo-service';
  import RepoListContainer from '../components/RepoListContainer.vue';

  export default {
    name: 'Home',
    components: { RepoListContainer },
    data: () => {
      return {
        searching: false,
        userInfo: null,
        repoInfo: [],
        error: null,
        form: {
          type: 1,
          search: '',
        },
        radioList: [{
          id: 'user',
          label: 'Buscar por usuário',
          value: 1,
        }, {
          id: 'repo',
          label: 'Buscar por repositório',
          value: 2,
        }]
      };
    },
    methods: {
      searchInfo() {
        const { cleanStrCharacters } = this.$options.filters;
        let { search, type } = this.form;

        search = cleanStrCharacters(search);
        this.searching = true;
        return (type === 1) ? this.getDataUser(search) : this.getDataRepo(search);
      },
      async getDataUser(desc) {
        try {
          await getUser(desc).then(async (res) => {
            this.error = null;
            this.userInfo = res;
            this.repoInfo = await getReposByUrl(res.repos_url);
          });
          this.searching = false;
        } catch (e) {
          this.searching = false;
          return this.getError(e);
        }
      },
      async getDataRepo(desc) {
        try {
          await getRepos(desc).then(res => {
            this.error = null;
            this.userInfo = null;
            this.repoInfo = res.items;
            if (!res.items) { this.getError('Nada encontrado'); }
          });
          this.searching = false;
        } catch (e) {
          this.searching = false;
          return this.getError(e);
        }
      },
      getError(error) {
        this.userInfo = null;
        this.repoInfo = [];
        this.error = {
          active: true,
          message: 'Não encontrado'
        };
      }
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-form {
    border: pxToRem(2) solid $color-brand;
    margin-bottom: pxToRem(12);

    &_header {
      background-color: $color-brand;
      color: $color-lightBlue;
      padding: pxToRem(20) pxToRem(12);

      &_title {
        font-size: pxToRem(18);
        font-weight: 500;
      }
    }

    &_body {
      padding: pxToRem(20) pxToRem(12);
    }
  }

  .s-marginTop--Md {
    margin-top: pxToRem(20);
  }
</style>
