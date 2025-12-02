import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDesks } from './useFetchDesks.ts'

export const DecksList = () => {
  const { decks } = useFetchDesks()

  return (
    <ul className={s.list}>
      {decks.decks.map((deck, key) => (
        <DeckItem key={key} deck={deck} />
      ))}
    </ul>
  )
}
