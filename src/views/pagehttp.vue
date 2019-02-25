<template>
  <div class="pagehttp">
    <h1> get response data</h1> 
    {{ gets }}
  </div>
</template>

<script>
  import{ mapState } from 'vuex'
  export default {
    name: 'pagehttp',
    data() {
      return {
        loading: true
      }
    },
    computed: {
      ...mapState({
        gets: state => state.httpbin.gets
      })
    },
    created() {
      this.$store.dispatch('httpbin/get')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
