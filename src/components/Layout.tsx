interface Props {
    children: React.ReactNode
}

export function Layout ({ children }: Props) {
  return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
  )
}
