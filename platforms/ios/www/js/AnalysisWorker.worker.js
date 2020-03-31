import { Surakarta } from 'surakarta'
import * as SurakartaEngine from 'surakarta-ai'

self.onmessage = function (messageEvent) {
  const [action, surakarta] = messageEvent.data

  console.log('action: ' + action)
  if (action === 'suggestPlay') {
    const surakarta_ = Surakarta.fromState(surakarta.states)
    surakarta_.turn = surakarta.turn
    console.log(surakarta)
    console.log(surakarta_)
    const computedPlay = SurakartaEngine.suggestPlay(surakarta_)
    console.log('here')
    self.postMessage([computedPlay])
  } else {
    throw new Error('Illegal actino code')
  }
}
