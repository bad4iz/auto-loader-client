<template>
  <div>
    <H1>Main</H1>
    {{ name }}
    <router-view/>
  </div>
</template>



<script>
export default {
  data: function () {
    return {
      name: 'aaaaaaaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
