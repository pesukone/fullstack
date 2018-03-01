import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  const differentState = {
    good: 3,
    ok: 4,
    bad: 2
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  const tryIncrementing = (state, type) => {
    const action = {
      type: type
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    const expectedState = {
      good: 0,
      ok: 0,
      bad: 0
    }

    expect(newState).toEqual({ ...state, [type.toLowerCase()]: state[type.toLowerCase()] + 1 })
  }

  it('good is incremented', () => {
    tryIncrementing(initialState, 'GOOD')
    tryIncrementing(differentState, 'GOOD')
  })

  it('ok is incremented', () => {
    tryIncrementing(initialState, 'OK')
    tryIncrementing(differentState, 'OK')
  })

  it('bad is incremented', () => {
    tryIncrementing(initialState, 'BAD')
    tryIncrementing(differentState, 'BAD')
  })

  it('zeroing works', () => {
    const action = {
      type: 'ZERO'
    }

    deepFreeze(differentState)
    const newState = counterReducer(differentState, action)
    expect(newState).toEqual(initialState)
  })
})
