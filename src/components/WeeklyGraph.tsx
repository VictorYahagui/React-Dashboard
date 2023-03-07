
type WeeklyGraphProps = {
    weekday: string;
    percentage: number;
}

export function WeeklyGraph(props: WeeklyGraphProps) {
    return (
        <div className="flex h-40 flex-col justify-end items-center z-0">
            <div className="w-4 rounded-lg bg-green-gradient transition-all duration-300 ease-in-out" id="dom" style={{ "--percentage": `${props.percentage}%` } as React.CSSProperties}>
            </div>
            <span className='font-medium text-sm'>{props.weekday}</span>
        </div>
    )
}