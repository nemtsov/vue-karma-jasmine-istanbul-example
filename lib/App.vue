<template>
  <div>name: {{name}}</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'nom'
    }
  },

  mounted() {
    this.name = 'joe';
  }
}
</script>