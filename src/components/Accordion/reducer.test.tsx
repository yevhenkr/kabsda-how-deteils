import React from 'react'
import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer'

test('collapset shoutb be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true)
})

test('action error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //expect
    expect(() => {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError()
})