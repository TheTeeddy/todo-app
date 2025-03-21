export function addToLocalStorage(value) {
  localStorage.setItem('todos', JSON.stringify(value))
}

export function getFromLocalStorage() {
  return localStorage.getItem('todos')
}

export function capitalizeText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
