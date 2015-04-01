import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import xhr from '../helpers/github-xhr'

export default Model.extend(githubMixin, {
  idAttribute: 'name',
  props: {
    name: 'string',
    color: 'f29513'
  },
  session: {
    saved: {
      type: 'boolean',
      default: true
    }
  },
  update (attrs) {
    const old = this.toJSON()
    xhr({
      url: this.url(),
      method: 'PATCH',
      json: attrs
    }, (err) => {
      if (err) {
        this.set(old)
        console.error('Failed to update label, check yo wifi, yo')
      }
    })
    this.set(attrs)
  }
})
