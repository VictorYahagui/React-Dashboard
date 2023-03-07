
import { SatisfactionSmile } from "./SatisfactionSmile";

type SatisfactionCardProps = {
    npsScore: number,
}

export function SatisfactionCard(props: SatisfactionCardProps) {
    return (
        <div className="w-full min-w-[18em] h-96 shadow-xl rounded-2xl flex flex-col justify-between items-center gap-8 bg-black-200 px-12 py-7">
            <span className="font-semibold text-2xl">
                NPS geral
            </span>
            <SatisfactionSmile npsAmount={props.npsScore} />
            <p className="text-sm font-medium">NPS Score <span>{props.npsScore}</span></p>
        </div>
    )
}