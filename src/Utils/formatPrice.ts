const formatPrice = (value: any, suffix: string = '$') => {
  value = parseFloat(value)
  value = value.toLocaleString('ru-RU')
  return `${value} ${suffix}`
}

export default formatPrice
