<template>
  <main>
    <Calculator />
  </main>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'home',
  components: {
    Calculator
  }
}
</script>
