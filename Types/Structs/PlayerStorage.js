function PlayerStorage() {
  let levels = localStorage.getItem('levels')
  levels = levels ? JSON.parse(levels) : {}

  function getLevel(name) {
    return levels[name]
  }

  function getCompletedLevels() {
    return Object.keys(levels)
  }

  function save() {
    localStorage.setItem('levels', JSON.stringify(levels))
  }

  function setLevel(name, data) {
    levels[name] = data
    save()
  }

  function clear() {
    levels = {}
    save()
  }

  return {
    get levels() {
      return levels
    },
    clear,
    getCompletedLevels,
    getLevel,
    setLevel,
  }
}
