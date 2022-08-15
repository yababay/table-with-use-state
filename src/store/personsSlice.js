import { createSlice } from '@reduxjs/toolkit'
import { allRandom } from 'human-names'

let count = 1

export const personsSlice = createSlice({
    name: 'persons',
    initialState: [
      {
        id: count++,
        key: count,
        "firstName": "Joe",
        "lastName": "Jackson"
      },
      {
        id: count++,
        key: count,
        "firstName": "Jackie",
        "lastName": "Jackson"
      },
      {
        id: count++,
        key: count,
        "firstName": "Tito",
        "lastName": "Jackson"
      },
      {
        id: count++,
        key: count,
        "firstName": "Jermaine",
        "lastName": "Jackson"
      },
      {
        id: count++,
        key: count,
        "firstName": "Jermaine",
        "lastName": "Jackson"
      },
      {
        id: count++,
        key: count,
        "firstName": "Michael",
        "lastName": "Jackson"
      }
    ],

    reducers: {
      addPerson: state => ([...state, {id: count++, key: count, firstName: allRandom(), lastName: "Jackson"}]),
      sortPersons: (state, action) => state.sort((a, b) => action.payload && a.firstName > b.firstName && 1 ||  
        !action.payload && a.firstName < b.firstName && 1 || -1)
    }
  })
  
  export const { addPerson } = personsSlice.actions
  
  export default personsSlice.reducer