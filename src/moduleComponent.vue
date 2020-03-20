<template>
  <div class="container">
    hello world. foo {{ foo }}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  interface ModuleComponentData {
    foo: string
  }

  export default Vue.extend({
    name: "moduleComponent",
    data(): ModuleComponentData {
      return {
        foo: 'bar'
      }
    }
  })
</script>

<style lang="scss">
  .container {
    color: red
  }
</style>
