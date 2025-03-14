export interface Ingredient {
  id: string
  name: string
}

export interface Inventor {
  id: string
  firstName: string
  lastName: string
}

export interface Elixir {
  id: string
  name: string
  effect?: string
  sideEffects?: string
  characteristics?: string
  time?: string
  difficulty?: string
  ingredients: Ingredient[]
  inventors?: Inventor[]
  manufacturer?: string
}

export interface ElixirFilters {
  name?: string
  difficulty?: string
  ingredient?: string
  inventorFullName?: string
  manufacturer?: string
}
