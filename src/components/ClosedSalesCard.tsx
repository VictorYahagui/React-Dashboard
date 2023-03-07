import '../style/svg.css';

type ClosedSalesCardProps = {
    percentage: number;
}

export function ClosedSalesCard(props: ClosedSalesCardProps) {

    const percentage = props.percentage;

    return (
        <div className="w-full min-w-[18em] h-96 shadow-xl rounded-2xl flex flex-col justify-between items-center gap-8 bg-black-200 px-12 py-7">
            <span className="font-semibold text-2xl">
                Vendas fechadas
            </span>
            <div className='relative'>
                <svg className="w-40 h-40 -rotate-90 " style={{ "--percentage": `${percentage}` } as React.CSSProperties} viewBox="0 0 232 232">
                    <circle id='graph' cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#d9d9d9">

                    </circle>
                    <circle className='transition-all duration-300 ease-in-out' id='graph' cx="50%" cy="50%" r="98.5" opacity="1" stroke="url(#linear-purple)">

                    </circle>
                    <defs>
                        <linearGradient id="linear-purple" x1='1' y1='82' x2='145' y2='178'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor="#ce9ffc" />
                            <stop offset='1' stopColor='#7367f0' />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute flex flex-col justify-center items-center gap-2 mx-8 inset-0" >
                    <strong className="font-bold text-4xl">
                        {percentage}%
                    </strong>
                    <span>alcançada</span>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center">
                <div className="flex justify-center items-center">
                    <div className="bg-black-100 w-4 h-4 rounded-full mr-1"></div>
                    <p className="text-sm font-medium mr-2">Esperado</p>
                    <span>100%</span>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-purple-gradient w-4 h-4 rounded-full mr-1"></div>
                    <p className="text-sm font-medium mr-2">Alcançado</p>
                    <span>{percentage}%</span>
                </div>
            </div>
        </div>
    )
}