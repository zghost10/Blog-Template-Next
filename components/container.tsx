export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children, className}) => {
  return (
    <div className={`container px-4 sm:px-6 md:px-0 mx-auto max-w-3xl ${className ?? ''}`}>
      {children}
    </div>
  )
}