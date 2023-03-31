
<template>
  <default-field :field="field">
    <template #field>
      <wm-map1 :field="field" :edit=true @latlng="updateForm" :attribution="attribution"></wm-map1>
    </template>
  </default-field>
</template>
<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';

export default {
  mixins: [FormField, HandlesValidationErrors],
  props: ['field'],
  methods: {
    updateForm(value) {
      this.latlng = value;
    },
    fill(formData) {
      if (this.latlng !== undefined && this.latlng.length != 0) {
        formData.append(this.field.attribute, this.latlng);
      }
    }
  }
};
</script>
