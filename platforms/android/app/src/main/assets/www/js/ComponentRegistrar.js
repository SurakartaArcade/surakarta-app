import { log, tag } from 'missionlog'

export const ComponentRegistrar = {
  requireComponent: function (name, callback) {
    log.info(tag.skComponentRegistrar, `required: ${name}`)

    switch (name) {
      case 'skFirebase':
        import(/* webpackChunkName: "surakarta-firebase" */ './SurakartaFirebase')
          .then(callback)
        break
    }

    return ComponentRegistrar
  }
}
