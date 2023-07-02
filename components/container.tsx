export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children, className}) => {
  return (
    <div className={`container mx-auto max-w-3xl ${className ?? ''}`}>
      {children}
    </div>
  )
}