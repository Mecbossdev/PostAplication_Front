import ThemeSwitch from "./theme-switch";
import moment from "moment";
import 'moment/locale/pt-br';

type PropsLayout = {
  children?: React.ReactNode
}

export default function HeaderDefault({children}: PropsLayout) {

  return (
    <div className="flex items-center justify-between bg-gray-50 font-sans font-bold h-16 border-b dark:bg-gray-900">
      <div className="flex text-sm">
        <p className="p-1 text-gray-500">{moment().locale('pt').format('dddd')}, </p>
        <p className="p-1 text-blue-600">{moment().locale('pt').format('D')} de </p>
        <p className="p-1 text-blue-600">{moment().locale('pt').format('MMMM')}</p>
      </div>
      

      <ThemeSwitch />
      {children}
    </div>  
  )
}