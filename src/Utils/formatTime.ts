function formatTrackTime(time: number) {
  time = Math.round(+time)

  let formattedTime = ''

  const hours =
    Math.floor(time / 3600) >= 1
      ? Math.floor(time / 3600)
      : ''

  const days =
    Math.floor(time / 3600 / 24) >= 1
      ? Math.floor(time / 3600 / 24)
      : ''

  const minutes = Math.floor((time - +hours * 3600) / 60)

  const seconds = time - +hours * 3600 - minutes * 60

  if (days !== '') {
    formattedTime += days < 10 ? '0' + days : days
    formattedTime += 'д : '
  }

  if (hours !== '') {
    formattedTime += hours < 10 ? '0' + hours : hours
    formattedTime += 'ч : '
  }

  formattedTime += minutes < 10 ? '0' + minutes : minutes
  formattedTime += 'мин'

  if (seconds !== 0) {
    formattedTime += ' : '
    formattedTime += seconds < 10 ? '0' + seconds : seconds
    formattedTime += 'сек'
  }

  return formattedTime
}

export default formatTrackTime
