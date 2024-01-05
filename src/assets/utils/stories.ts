export const argResolver = (name: string, type: string, defaultValue: any, options?: any[]) => {
  return {
    name,
    control: {
      type,
    },
    options,
    table: {
      defaultValue: {
        summary: defaultValue,  
      },
    },
  }
}