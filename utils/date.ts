export const toLongDateString = (date: Date) => {
  const option: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: ('long' || 'short' || 'numeric'),
    weekday: ('long' || 'short'),
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: ('long' || 'short')
  }

  const locale = 'pt-br'
  return new Date(date).toLocaleDateString( locale, option)
}