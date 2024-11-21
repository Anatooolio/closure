function createNextIdFunction() {
  let Id = 0
  return function nextId() {
    return Id += 1
}
}
// const IdCount = createNextIdFunction()


module.exports = createNextIdFunction;
