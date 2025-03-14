import React from "react"

import { Elixir } from "../../types"
import ElixirCard from "../ElixirCard"
import "./styles.css"

interface ElixirListProps {
  elixirs: Elixir[]
}

const ElixirList: React.FC<ElixirListProps> = ({ elixirs }) => {
  if (elixirs.length === 0) {
    return (
      <div className='no-results'>
        <p>
          No elixirs found matching your filters. Try adjusting your search
          criteria.
        </p>
      </div>
    )
  }

  return (
    <div className='elixir-list'>
      {elixirs.map((elixir) => (
        <ElixirCard key={elixir.id} elixir={elixir} />
      ))}
    </div>
  )
}

export default ElixirList
