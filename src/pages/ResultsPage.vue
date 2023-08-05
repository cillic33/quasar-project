<template>
  <q-page>
    Результаты

    <TestTable/>
  </q-page>
</template>

<script>
import TestTable from "@/components/tables/TestTable.vue";

export default {
  components: {
    TestTable,
  },
}
</script>

<style lang="stylus" scoped>

</style>
