<template>
  <q-layout view="hHh LpR fFf" style="height: 100vh">

    <BaseHeader/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";

export default {
  components: {
    BaseHeader,
  },
}
</script>
