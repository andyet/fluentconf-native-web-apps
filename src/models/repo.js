import Model from 'ampersand-model'

export default Model.extend({
  props: {
    id: 'number',
    'full_name': 'string',
    'name': 'string'
  },
  derived: {
    appUrl: {
      deps: ['full_name'],
      fn () {
        return this.full_name.toLowerCase()
      }
    }
  }
})
