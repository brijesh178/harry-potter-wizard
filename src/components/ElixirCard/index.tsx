import React from "react"

import { Elixir } from "../../types"
import "./styles.css"

interface ElixirCardProps {
  elixir: Elixir
}

const ElixirCard: React.FC<ElixirCardProps> = ({ elixir }) => {
  return (
    <div className='elixir-card'>
      <h3 className='elixir-title'>{elixir.name}</h3>

      <div className='elixir-details'>
        {elixir.difficulty && (
          <div className='detail-row'>
            <div className='detail-label'>Difficulty:</div>
            <div className='detail-value'>{elixir.difficulty}</div>
          </div>
        )}

        {elixir.ingredients && elixir.ingredients.length > 0 && (
          <div className='detail-row ingredients-container'>
            <div className='detail-label'>Ingredients:</div>
            <ul className='item-list'>
              {elixir.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        )}

        {elixir.inventors && elixir.inventors.length > 0 && (
          <div className='detail-row'>
            <div className='detail-label'>Inventors:</div>
            <ul className='item-list'>
              {elixir.inventors.map((inventor) => (
                <li key={inventor.id}>
                  {inventor.firstName} {inventor.lastName}
                </li>
              ))}
            </ul>
          </div>
        )}

        {elixir.manufacturer && (
          <div className='detail-row'>
            <div className='detail-label'>Manufacturer:</div>
            <div className='detail-value'>{elixir.manufacturer}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ElixirCard
