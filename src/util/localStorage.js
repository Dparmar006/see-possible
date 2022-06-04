const getLocalItem = name => {
  return JSON.parse(localStorage.getItem(name))
}

export default getLocalItem
