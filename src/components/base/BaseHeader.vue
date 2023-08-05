<template>
  <q-header reveal class="header">
    <q-toolbar class="header__toolbar">

      <div class="header__logo">
        <q-avatar>
          <IconLogo/>
        </q-avatar>
        <span class="header__logo-text">Опросы заказчиков</span>
      </div>

      <BaseHeaderTabs/>

      <div class="header__right">
        <q-btn class="cs__button" label="Создать опрос" flat :ripple="false" />

        <BaseHeaderPersonal/>
      </div>

    </q-toolbar>

  </q-header>
</template>

<script>
import IconLogo from "@/components/svg/IconLogo.vue";
import BaseHeaderTabs from "@/components/base/BaseHeaderTabs.vue";
import BaseHeaderPersonal from "@/components/base/BaseHeaderPersonal.vue";

export default {
  components: {
    IconLogo,
    BaseHeaderTabs,
    BaseHeaderPersonal,
  },
}
</script>

<style lang="sass" scoped>
@import '../../assets/css/variables.sass'

.header
  height: 64px
  background: #ffffff

  &__toolbar
    justify-content: space-between

  &__logo
    display: flex
    align-items: center

    &-text
      font: 700 18px / 24px $inter
      color: $color-accent-brand-normal
      padding-left: 12px
      border-left: 1px solid $color-accent-brand-normal
      margin-left: 12px

  &__right
    display: flex
    align-items: center
    gap: 32px
</style>
