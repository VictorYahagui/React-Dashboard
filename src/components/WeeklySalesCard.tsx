import '../style/weekly.css'
import { TrendDown, TrendUp } from "phosphor-react";
import { WeeklyGraph } from './WeeklyGraph';


type WeeklySalesCardProps = {
    weekPercentage: Array<number>;
}
type Day = "dom" | "seg" | "ter" | "qua" | "qui" | "sex" | "sab";

export function WeeklySalesCard(props: WeeklySalesCardProps) {
    const weekDays: Array<{ day: Day, percentage: number }> = [
        { day: 'dom', percentage: props.weekPercentage[0] },
        { day: 'seg', percentage: props.weekPercentage[1] },
        { day: 'ter', percentage: props.weekPercentage[2] },
        { day: 'qua', percentage: props.weekPercentage[3] },
        { day: 'qui', percentage: props.weekPercentage[4] },
        { day: 'sex', percentage: props.weekPercentage[5] },
        { day: 'sab', percentage: props.weekPercentage[6] },
    ]

    const [biggestSale, indexOfMaxValue] = props.weekPercentage.reduce(([maxValue, indexOfMaxValue], currentValue, currentIndex) => currentValue > maxValue ? [currentValue, currentIndex] : [maxValue, indexOfMaxValue], [-Infinity, -1]);

    const [lowestSale, indexOfMinValue] = props.weekPercentage.reduce(([minValue, indexOfMinValue], currentValue, currentIndex) => currentValue < minValue ? [currentValue, currentIndex] : [minValue, indexOfMinValue], [Infinity, -1]);

    const selectTransformDay = (index: number) => {
        const weekTransform: { [key in Day]: () => string } = {
            "dom": () => "domingo",
            "seg": () => "segunda",
            "ter": () => "terça",
            "qua": () => "quarta",
            "qui": () => "quinta",
            "sex": () => "sexta",
            "sab": () => "sabado",
        }
        const trasfromDay = weekTransform[weekDays[index].day]
        return (trasfromDay())
    }

    return (
        <div className=" w-full min-w-[18em] h-auto shadow-xl rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 bg-black-200 px-12 py-7">
            <h1 className="font-semibold text-2xl">Vendas por dia da semana</h1>
            <div className="w-full flex max-lg:flex-col justify-between items-start gap-8">
                <div className="w-full flex lg:flex-col justify-between lg:items-start lg:gap-8">
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <div className="flex justify-center items-center gap-1">
                            <TrendUp size={16} className='text-green-500' />
                            <p className="font-medium text-sm">Dia com mais vendas</p>
                        </div>
                        <strong className="lowercase font-medium text-2xl">
                            {selectTransformDay(indexOfMaxValue)}
                        </strong>
                    </div>
                    <div className='flex flex-col justify-center items-end lg:items-start gap-2'>
                        <div className="flex justify-center items-center gap-1">
                            <TrendDown size={16} className='text-red-500' />
                            <p className="font-medium text-sm">Dia com mais vendas</p>
                        </div>
                        <strong className="lowercase font-medium text-2xl">
                            {selectTransformDay(indexOfMinValue)}
                        </strong>
                    </div>
                </div>
                <div className='relative'>
                    <div className='w-full h-1 rounded bg-black-0 opacity-75 absolute bottom-2/3 left-0 -mb-3'></div>
                    <div className="flex gap-7 md:gap-10 lg:gap-14 justify-center items-end">
                        {weekDays.map((weekDay, index) => {
                            return (
                                <WeeklyGraph key={index} weekday={`${weekDay.day}`} percentage={weekDay.percentage} />
                            )
                        })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}