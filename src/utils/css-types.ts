export type cssMeasurementUnits = 'px' | '%' | 'rem'
export type cssGridTemplateMeasurementUnits = cssMeasurementUnits | 'fr'

export type cssMeasurement = `${number}${cssMeasurementUnits}` | `calc(${string})` | '0' | 'auto'
