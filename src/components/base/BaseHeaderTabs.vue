<template>
  <q-tabs
      no-caps
      class="header__tabs"
  >
    <q-route-tab to="/">
      <q-tab-label class="header__tabs-label">В работе</q-tab-label>
    </q-route-tab>
    <q-route-tab to="/results">
      <q-tab-label class="header__tabs-label">Результаты</q-tab-label>
    </q-route-tab>
    <q-route-tab to="/archive">
      <q-tab-label class="header__tabs-label">Архив</q-tab-label>
    </q-route-tab>
  </q-tabs>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../../assets/css/variables.sass'

.header
  &__tabs
    height: 64px

    &-label
      font: 600 16px / 24px Inter

    .q-tab
      padding: 0 24px
      color: $color-text-icon-base-tertiary

      &--active
        color: $color-accent-brand-normal
</style>
