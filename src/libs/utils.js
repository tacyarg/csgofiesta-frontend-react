exports.parseItem = item => {
  item.color = item.color.includes('#') ? item.color : `#${item.color}`

  var data = {
    image: item.image,
    price: item.price,
    color: item.color,
    id: item.id,
    colorFaded: exports.hexToRGB(item.color.replace('#', '')),
  }

  var name = item.name
  var regex = /(★ )?(StatTrak™ )?(.+) \| (.+) \((.+)\)/.exec(name)

  // seperate weapons from misc
  if (regex)
    regex[0] = name
      .replace(/\((.+)\)/.exec(name)[0], '')
      .replace('StatTrak™ ', '')
  else regex = [name]

  // get item name
  if (/\((.+)\)/.exec(regex[0]) !== null)
    data.name = regex[0].replace(/\((.+)\)/.exec(regex[0])[0], '')
  else data.name = regex[0]

  if (regex[4]) data.skin = regex[4]

  data.condition = regex[5]
  data.stattrak = regex[2] ? true : false

  console.log(data)

  return data
}

exports.hexToRGB = hex => {
  var arrBuff = new ArrayBuffer(4)
  var vw = new DataView(arrBuff)
  vw.setUint32(0, parseInt(hex, 16), false)
  var arrByte = new Uint8Array(arrBuff)

  return arrByte[1] + ',' + arrByte[2] + ',' + arrByte[3]
}
