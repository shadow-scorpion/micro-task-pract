import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksTC } from '../decks-thunks.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { useEffect } from 'react'


export const useFetchDesks = () => {
  const decks = useAppSelector((state)=> state.decksReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks: decks
  }
}