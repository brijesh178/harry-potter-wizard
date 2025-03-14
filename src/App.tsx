import React, { useState, useEffect, Suspense } from "react"

import { fetchElixirs } from "./api/wizardWorldApi"
import { Elixir, ElixirFilters } from "./types"
import { formatDisplayText } from "./util"
import "./App.css"

const FilterPanel = React.lazy(() => import("./components/FilterPanel"))
const ElixirList = React.lazy(() => import("./components/ElixirList"))
const Loader = React.lazy(() => import("./components/Loader"))
const ErrorMessage = React.lazy(() => import("./components/ErrorMessage"))

const App: React.FC = () => {
  const [elixirs, setElixirs] = useState<Elixir[]>([])
  const [filters, setFilters] = useState<ElixirFilters>({
    name: "",
    difficulty: "",
    ingredient: "",
    inventorFullName: "",
    manufacturer: ""
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [activeFilters, setActiveFilters] = useState<ElixirFilters>({})

  useEffect(() => {
    loadElixirs()
  }, [])

  const loadElixirs = async (filterParams: ElixirFilters = {}) => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchElixirs(filterParams)
      setElixirs(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch elixirs"
      setError(errorMessage)
      console.error("Error fetching elixirs:", err)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    const activeFilters: ElixirFilters = Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value && value.trim() !== "") {
          acc[key as keyof ElixirFilters] = value.trim()
        }
        return acc
      },
      {} as ElixirFilters
    )

    setActiveFilters(activeFilters)

    loadElixirs(activeFilters)
  }

  const resetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventorFullName: "",
      manufacturer: ""
    })
    setActiveFilters({})

    loadElixirs({})
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Harry Potter Wizard World</h1>
        <p>Explore magical elixirs from the wizarding world</p>
      </header>

      <main className='app-main'>
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
          />
        </Suspense>

        {Object.keys(activeFilters).length > 0 && (
          <div className='active-filters'>
            <h3>Active Filters:</h3>
            <ul>
              {Object.entries(activeFilters).map(([key, value]) => (
                <li key={key}>
                  <strong>{formatDisplayText(key)}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <Suspense fallback={<Loader />}>
            <ElixirList elixirs={elixirs} />
          </Suspense>
        )}
      </main>

      <footer className='app-footer'>
        <p>Data provided by Wizard World API</p>
      </footer>
    </div>
  )
}

export default App
