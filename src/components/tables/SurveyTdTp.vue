<template>
  <q-td :props="props">
    <span v-for="(item, num) in props.value" :key="item">
      <span v-if="num > 0">, </span>
      {{ item }}
    </span>
  </q-td>
</template>

<script>
export default {
  props: ['props'],
}
</script>
