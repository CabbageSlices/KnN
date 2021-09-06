export type Theme = {
  colors: {
    whitest: string
    white: string
    backgroundPrimary: string
    backgroundSecondary: string
    backgroundTertiary: string
    divider: string
    darkest: string
    lime: string
    link: string
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
