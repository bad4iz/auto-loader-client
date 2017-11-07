<template>
  <div>
    <h2>index</h2>
    <p>{{ msg }}</p>
    
    <p>Сообщение задом наперёд: "{{ reverseMessage }}"</p>
    <p>Сообщение задом наперёд: "{{ reverseMessage }}"</p>
  

  <input v-model="msg">
  </div>
</template>



<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Faaa',
      message: 'ssssssssaaaa'
    }
  },
// в компоненте
  computed: {
    reverseMessage: function () {
      return Date.now()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
