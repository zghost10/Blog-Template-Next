import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Button from './button'
import ReactInputMask from 'react-input-mask'

type TField = {
  id: string
  label: string
  type?: 'text'| 'email' | 'password' | 'date' | 'phone' | 'checkbox'
  value?: string | number
  required?: boolean
}

type TSelect = {
  id: string
  label: string
  type: 'select'
  options: {
    name: string
    value: string | number
  }[]
  required: boolean
}

interface IForm {
  type?: "creator" | "login"
  className?: string
  action?: (data?: any) => void
  fields: (TField | TSelect)[]
}

export const Form: FC<IForm> = ({className, action, fields, type}) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => action && action(data)

  return (
    <form className={`${className??"flex flex-col gap-4"}`} onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-3'>
        {fields.map((field, key) =>
          field.type === "select" ?
          <div key={key} className="sm:col-span-2">
            <label htmlFor={field.id} className="block text-start text-sm font-semibold leading-6">
              {field.label}{typeof field.label === "string" ? ':' : ''}
            </label>
            <select 
              id={field.id}
              className="my-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-ledax-500 focus:border-ledax-500"
              {...register(field.id, {required: field.required ?? false})}
            >
              <option selected={true}>Escolha uma opção...</option>
              {field.options.map((option, index) => (
                <option key={index} value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
            :
          field.type === "date" ?
          <div key={key} className='relative flex flex-col items-start justify-center gap-2'>
            <label htmlFor={field.id}>{field.label}:</label>
            <input 
              id={field.id} type={field.type} 
              {...register(field.id, { required: field.required ?? false })}
              className="outline-none bg-stone border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-amber-300 focus:border-amber-300 block w-full p-2.5"
            />
          </div>
            :
          field.type === "phone" ?
          <div key={key} className='relative flex flex-col items-start justify-center gap-2'>
            <label htmlFor={field.id}>{field.label}:</label>
            <ReactInputMask
              className="outline-none bg-stone border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-amber-300 focus:border-amber-300 block w-full p-2.5"
              mask={"(99)\\99999-9999"}
              alwaysShowMask={false}
              placeholder=''
              type={'text'}
              {...register(field.id, { required: field.required ?? false })}
            />
          </div>
            :
          field.type === "checkbox" ?
          <div key={key} className='flex flex-col items-start justify-center gap-2'>
            <label htmlFor={field.id}>{field.label}:</label>
            <input 
              id={field.id} type={field.type??"checkbox"} 
              {...register(field.id, { required: field.required ?? false })}
            />
          </div>
            :
          <div key={key} className='flex flex-col items-start justify-center gap-2'>
            <label htmlFor={field.id}>{field.label}:</label>
            <input 
              id={field.id} type={field.type??"text"} 
              {...register(field.id, { required: field.required ?? false })}
              className="outline-none bg-stone border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-amber-300 focus:border-amber-300 block w-full p-2.5"
            />
          </div>
        )}
      </div>
      
      <div className="flex justify-end">
        <Button type="button" variant='primary' submit bold>
          {type==="creator"?"Criar":type==="login"?"Entrar":"Enviar"}
        </Button>
      </div>
    </form>
  )
}