<template>
  <div class="pagination__wrap">
    <div>
      <q-btn
          v-if="scope.pagesNumber > 2"
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
      >
        <IconKBArrowDoubleLeft />
      </q-btn>
      <q-btn
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
      >
        <IconKBArrowLeft />
      </q-btn>
    </div>
    <q-input
        v-model.number="scope.pagination.page"
        outlined
        class="cs__input pagination__input"
    >
    </q-input>
    <span>из</span>
    <span>{{ scope.pagesNumber }}</span>
    <div>
      <q-btn
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
      >
        <IconKBArrowRight />
      </q-btn>
      <q-btn
          v-if="scope.pagesNumber > 2"
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
      >
        <IconKBArrowDoubleRight />
      </q-btn>
    </div>
  </div>
</template>

<script>
import IconKBArrowLeft from "@/components/svg/IconKBArrowLeft.vue";
import IconKBArrowDoubleLeft from "@/components/svg/IconKBArrowDoubleLeft.vue";
import IconKBArrowRight from "@/components/svg/IconKBArrowRight.vue";
import IconKBArrowDoubleRight from "@/components/svg/IconKBArrowDoubleRight.vue";

export default {
  props: ['scope'],
  components: {
    IconKBArrowLeft,
    IconKBArrowDoubleLeft,
    IconKBArrowRight,
    IconKBArrowDoubleRight,
  },
}
</script>

