import { format } from "date-fns"
import { ptBR } from 'date-fns/locale'

export const now = () => {
  return format(new Date(), "dd MMMM, yyyy", {locale: ptBR})
}