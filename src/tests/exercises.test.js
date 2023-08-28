const { nombre, usuario, ourPlanet, name, userName, lastName, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10 } = require("../exercises/exercises")

test("exercise1 to be denfined, and user to be denfined", () => {
  expect(nombre).toBeDefined()
  expect(usuario).toBeDefined()
  expect(usuario).toBe(nombre)
})

test("exercise2 to be undenfined", () => {
  expect(ourPlanet).toBeUndefined()
  expect(name).toBeUndefined()
})

test("exercise3 to be denfined", () => {
  expect(userName).toBeDefined()
  expect(lastName).toBeDefined()
})

test("exercise4 to be false", () => {
  expect(exercise4).toBe(false)
})

test("exercise5 to be false", () => {
  expect(exercise5).toBe(false)
})

test("exercise6 to be false", () => {
  expect(exercise6).toBe(false)
})

test("exercise7 to be false", () => {
  expect(exercise7).toBe(false)
})

test("exercise8 to be false", () => {
  expect(exercise8).toBe(false)
})

test("exercise9 to be true", () => {
  expect(exercise9).toBe(true)
})

test("exercise10 to be false", () => {
  expect(exercise10).toBe(false)
})




