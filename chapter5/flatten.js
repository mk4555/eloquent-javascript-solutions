function flatten(array) {
  let arr = []
  arr = array.reduce((total, amount) => {
    return total.concat(amount)
  }, [])
  return arr
}
