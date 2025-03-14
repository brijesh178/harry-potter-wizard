import React from "react"

import { ElixirFilters } from "../../types"
import "./styles.css"

interface FilterPanelProps {
  filters: ElixirFilters
  setFilters: React.Dispatch<React.SetStateAction<ElixirFilters>>
  applyFilters: () => void
  resetFilters: () => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  setFilters,
  applyFilters,
  resetFilters
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applyFilters()
  }

  return (
    <div className='filter-panel'>
      <h2 className='filter-heading'>Filter Elixirs</h2>
      <form onSubmit={handleSubmit}>
        <div className='filter-grid'>
          <div className='filter-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={filters.name || ""}
              onChange={handleInputChange}
              placeholder='Filter by name'
              className='filter-input'
            />
          </div>

          <div className='filter-group'>
            <label htmlFor='difficulty'>Difficulty</label>
            <input
              type='text'
              id='difficulty'
              name='difficulty'
              value={filters.difficulty || ""}
              onChange={handleInputChange}
              placeholder='Filter by difficulty'
              className='filter-input'
            />
          </div>

          <div className='filter-group'>
            <label htmlFor='ingredient'>Ingredient</label>
            <input
              type='text'
              id='ingredient'
              name='ingredient'
              value={filters.ingredient || ""}
              onChange={handleInputChange}
              placeholder='Filter by ingredient'
              className='filter-input'
            />
          </div>

          <div className='filter-group'>
            <label htmlFor='inventorFullName'>Inventor Full Name</label>
            <input
              type='text'
              id='inventorFullName'
              name='inventorFullName'
              value={filters.inventorFullName || ""}
              onChange={handleInputChange}
              placeholder='Filter by inventor'
              className='filter-input'
            />
          </div>

          <div className='filter-group'>
            <label htmlFor='manufacturer'>Manufacturer</label>
            <input
              type='text'
              id='manufacturer'
              name='manufacturer'
              value={filters.manufacturer || ""}
              onChange={handleInputChange}
              placeholder='Filter by manufacturer'
              className='filter-input'
            />
          </div>
        </div>

        <div className='filter-actions'>
          <button type='submit' className='apply-btn'>
            Apply Filters
          </button>
          <button
            className='reset-btn'
            onClick={resetFilters}
            disabled={
              Object.values(filters).filter((value) => value.trim() !== "")
                .length === 0
            }
          >
            Reset Filters
          </button>
        </div>
      </form>
    </div>
  )
}

export default FilterPanel
