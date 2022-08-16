import { createSlice } from '@reduxjs/toolkit'
import { allRandom } from 'human-names'
import getJacksons from './jacksons'

const jacksons = getJacksons()
let count = jacksons.length

export const personsSlice = createSlice({
    name: 'persons',
    initialState: jacksons,

    reducers: {
      addPerson: state => [...state, {id: count++, key: count, firstName: allRandom(), lastName: "Jackson"}],
      addParasites: (state, action) => [...state, ...action.payload.map(el => ({...el, id: count++, key: count}))],
      sortPersons:  (state, action) => state.sort((a, b) => action.payload && a.firstName > b.firstName && 1 ||  
        !action.payload && a.firstName < b.firstName && 1 || -1),
      clearPersons: state => []
    }
  })
  
  export const { addPerson } = personsSlice.actions
  
  export default personsSlice.reducer