export type Theme = {
  colors: {
    white: string
    background: string
    link: string
  }
  fontSizes: {
    regular: string
  }
  fontWeights: {
    bold: number
  }
}

export type Themes = {
  [name: string]: Theme
}

export type ThemeVariablesMap<T> = {
  [property in keyof T]: T[property] extends Record<string, unknown>
    ? ThemeVariablesMap<T[property]>
    : string
}
