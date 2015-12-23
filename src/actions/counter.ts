export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const increment = (id, amount) => {
  return {
    type: INCREMENT_COUNTER,
    increment: amount,
    id
  }
}

export const decrement = (id, amount) => {
  return {
    type: DECREMENT_COUNTER,
    decrement: amount,
    id
  }
}
