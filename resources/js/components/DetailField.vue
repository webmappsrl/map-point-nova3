<template>
  <panel-item :field="field">
    <template #value>
      <wm-map1 :field="field" :edit=false></wm-map1>
    </template>
  </panel-item>
</template>

<script>
export default {
    props: ['index','resource', 'resourceName', 'resourceId', 'field'],
}
</script>
