export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children, className}) => {
  return (
    <div className={`container px-4 sm:px-6 mx-auto max-w-screen-lg ${className ?? ''}`}>
      {children}
    </div>
  )
}