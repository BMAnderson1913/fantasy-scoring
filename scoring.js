const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return calcPassingScore(player) + calcRushingScore(player)

    case 'RB':
      return calcRushingScore(player) + calcReceivingScore(player) + calcReturningKickScore(player) + calcReturningPuntScore(player)

    case 'WR':
      return calcRushingScore(player) + calcReceivingScore(player) + calcReturningKickScore(player) + calcReturningPuntScore(player)

    case 'TE':
      return calcReceivingScore(player)

    default:
      return 0
  }
}

const calcPassingScore = (player) => {
  const yards = player.stats.passing.yards / 25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3
  return yards + touchdowns + interceptions
}

const calcRushingScore = (player) => {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3
  return yards + touchdowns + fumbles
}

const calcReceivingScore = (player) => {
  const receptions = player.stats.receiving.receptions / 1
  const yards = player.stats.receiving.yards / 10
  const touchdowns = player.stats.receiving.touchdowns * 6
  const fumbles = player.stats.receiving.fumbles * -3
  return receptions + yards + touchdowns + fumbles
}

const calcReturningKickScore = (player) => {
  const kickyards = player.stats.return.kickreturn.yards / 15
  const kicktouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const kickfumbles = player.stats.return.kickreturn.fumbles * -3
  return kickyards + kicktouchdowns + kickfumbles
}

const calcReturningPuntScore = (player) => {
  const puntyards = player.stats.return.puntreturn.yards / 15
  const punttouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const puntfumbles = player.stats.return.puntreturn.fumbles * -3
  return puntyards + punttouchdowns + puntfumbles
}

module.exports = calculateScore