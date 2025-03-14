import { Elixir, ElixirFilters } from "../types"

const API_BASE_URL = "https://wizard-world-api.herokuapp.com"

export const fetchElixirs = async (
  filters: ElixirFilters = {}
): Promise<Elixir[]> => {
  try {
    const queryParams = Object.entries(filters)
      .filter(([, value]) => value && value.trim() !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join("&")

    const url = `${API_BASE_URL}/Elixirs${queryParams ? `?${queryParams}` : ""}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch elixirs: ${error.message}`)
    }
    throw new Error("An unknown error occurred")
  }
}
