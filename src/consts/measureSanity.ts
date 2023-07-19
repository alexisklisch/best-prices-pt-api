export const measureSanity = (origin: string) => {
  const measureSanityConverter: { [key: string]: string } = {
    KGM: 'kg',
    LTR: 'lt',
    UN: 'un',
  }

  return measureSanityConverter[origin] || origin
}
