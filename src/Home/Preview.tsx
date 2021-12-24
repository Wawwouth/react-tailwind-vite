import { Link } from 'react-router-dom'
import help from 'resources/img/help.svg'

type PreviewProps = {
  path: string,
  title: string,
  icon: string,
}
function Preview({ path, title, icon }: PreviewProps) {
  return (
    <Link
      to={path}
      className='bg-gray-200 h-40 w-40 rounded-xl 
      grid place-items-center
      cursor-pointer
      hover:bg-gray-400
      border-2 border-black
      '
    >
      <p className='text-xl'>{title}</p>
      <img src={icon || help} className='h-20 w-20' />
    </Link>
  )
}

export default Preview
