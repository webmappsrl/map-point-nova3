Nova.booting((Vue, router, store) => {
  Vue.component(
    'index-map-point-nova3',
    require('./components/IndexField').default
  )
  Vue.component(
    'detail-map-point-nova3',
    require('./components/DetailField').default
  )
  Vue.component(
    'form-map-point-nova3',
    require('./components/FormField').default
  )
  Vue.component(
    'wm-map',
    require('./components/mapComponent').default
  )
})
