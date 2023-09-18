import { AdditionalType } from "./types"

export const defaultAdditionalItem = () => {
  const value:AdditionalType = {
    id: Math.random().toString(36).substr(2, 9),
    name: "",
    type: "porcentage",
    value: 0
  }

  return value
}