import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks: () => {
    return instance.get<Response>('/v2/decks')
  }
}

export type DecksUsers = {
  isFavorite: string,
  author: {
    id: string,
    name: string
  },
  id: string,
  userId: string,
  name: string,
  isPrivate: true,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number
}

type Response = {
  items: DecksUsers[],
  pagination: {
  currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number,
}
};
