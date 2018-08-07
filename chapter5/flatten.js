function flatten(array) {
  let arr = []
  arr = array.reduce((final, current) => {
    return final.concat(current)
  }, [])
  return arr
}
