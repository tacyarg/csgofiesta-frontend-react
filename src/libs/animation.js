import { TimelineMax, Circ, TweenMax } from 'gsap'
import { random } from 'lodash'

let tw = new TimelineMax()

function setupAudio(sound) {
  const volume = sound ? 1 : 0

  const start = new Audio('START_SOUND_URL')
  start.volume = volume
  start.playbackRate = 2
  const click = new Audio('TICK_SOUND_URL')
  click.playbackRate = 5
  click.volume = volume
  const stop = new Audio('END_SOUND_URL')
  stop.volume = volume

  return {
    start,
    click,
    stop,
  }
}

export default {
  kill() {
    // TweenMax.killAll()
    tw.clear()
  },
  roll({ target, duration, winningIndex, width, sound }, cb) {
    const tileSize = 240
    const tickPos = width / 2
    const centerTile = tickPos - tileSize / 2
    const offset = random(-100, 100)
    const pos = tileSize * winningIndex - centerTile - offset

    const { start, click, stop } = setupAudio(sound)

    let lastTile = 0

    return tw
      .to(target, duration, {
        onUpdateParams: ['{self}'],
        x: -pos,
        ease: Circ.easeOut,
        onStart() {
          // start.play()
        },
        onUpdate(tween) {
          const x = tween.target[0]._gsTransform.x
          const tile = Math.abs(Math.round(x / tileSize))
          if (lastTile < tile) {
            lastTile = tile
            // click.play()
          }
        },
        roundProps: 'x',
      })
      .to(target, 0.5, {
        delay: 0.3,
        x: -pos - offset,
        // clearProps: 'transform',
        onStart() {
          // stop.play()
        },
        onComplete() {
          cb()
        },
      })
  },
}