
import { ClosedSalesCard } from './components/ClosedSalesCard'
import { MonthlyGoalCard } from './components/MonthlyGoalCard'
import { SatisfactionCard } from './components/SatisfactionCard'
import { WeeklySalesCard } from './components/WeeklySalesCard'
import './style/global.css'

export function App() {
  return (
    <div className="w-full h-auto lg:h-screen flex justify-center items-center bg-black-500 text-white py-8">
      <div className='flex flex-col justify-center items-center gap-8 lg:grid lg:gap-8 px-8 lg:px-0'>
        <div className='lg:col-span-1 w-full flex justify-center items-center'>
          <SatisfactionCard npsScore={20} />
        </div>
        <div className='lg:col-span-1 w-full flex justify-center items-center'>
          <ClosedSalesCard percentage={10} />
        </div>
        <div className='lg:col-span-1 w-full flex justify-center items-center'>
          <MonthlyGoalCard expectedMoneyAmount={100} percentage={21} />
        </div>
        <div className='lg:col-span-3 w-full flex justify-center items-center'>
          <WeeklySalesCard weekPercentage={[30, 100, 70, 20, 10, 60, 35]} />
        </div>
      </div>
    </div>
  )
}
