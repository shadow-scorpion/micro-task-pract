import { decksAPI } from './decks-api.ts'
import { fetchDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

// type FetchDecksTC = (dispatch: AppDispatch) => void


export const fetchDecksTC = () => async (dispatch: AppDispatch) => {
    await decksAPI.fetchDecks().then((res) => {
      try {
        dispatch(fetchDecksAC(res.data.items))
      } catch (e) {
        throw new Error('Some error')
      }
    })
}