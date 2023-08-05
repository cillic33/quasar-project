<template>
  <q-dialog v-model="currentColumnDialog">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="dialog__title">Столбцы</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup class="dialog__close" />
      </q-card-section>

      <q-separator />

      <q-card-section class="scroll dialog__content">
        <div class="col">
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="tp" label="ТП" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="frequency" label="Периодичность" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="pd" label="ДП" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="sm" label="МПр" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="informed" label="Информируемые" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="year" label="Год" />
          </div>
          <div>
            <q-checkbox v-model="currentVisibleColumns" val="status" label="Статус" />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="row items-center justify-between">
        <div>
          <q-btn flat :ripple="false" label="Выбрать все" class="cs__button cs__button_limpid cs__button_s" @click="selectAll" />
          <q-btn flat :ripple="false" label="Снять все выделения" class="cs__button cs__button_limpid cs__button_s" @click="removeAll" />
        </div>
        <q-btn flat label="Применить" v-close-popup class="cs__button" :ripple="false" @click="apply" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      currentVisibleColumns: ref([ 'name', 'tp', 'frequency', 'pd', 'sm', 'informed', 'year', 'status' ]),
    }
  },
  props: ['modelValue', 'visibleColumns'],
  computed: {
    currentColumnDialog: {
      get() {
        return this.modelValue;
      },
      set(modelValue) {
        this.$emit("update:modelValue", modelValue);
      },
    },
  },
  methods: {
    apply() {
      this.$emit("update:visibleColumns", this.currentVisibleColumns);
    },
    selectAll() {
      this.currentVisibleColumns = [ 'name', 'tp', 'frequency', 'pd', 'sm', 'informed', 'year', 'status' ];
    },
    removeAll() {
      this.currentVisibleColumns = [];
    },
  },
})
</script>
