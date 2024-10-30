type Props = {
    children:string;
}

const PageTitle = ({children}: Props) => {
  return (
    <h3 className="text-4xl font-bold tracking-tight mb-4 lg:mb-6">{children}</h3>
  )
}

export default PageTitle
