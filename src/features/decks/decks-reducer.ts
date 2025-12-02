import { DecksUsers } from './decks-api.ts'

export const initialState = {
  decks: [] as DecksUsers[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: FetchDecksAT): DecksState => {
  switch (action.type) {
    case 'fetchDecks':
      return { decks: action.payload.decks, searchParams: { name: '' } }
    default:
      return state
  }
}

export const fetchDecksAC = (decksUsers: DecksUsers[]) => {
  return {
    type: 'fetchDecks',
    payload: {
      decks: decksUsers,
    }
  } as const
}


type FetchDecksAT = ReturnType<typeof fetchDecksAC>
