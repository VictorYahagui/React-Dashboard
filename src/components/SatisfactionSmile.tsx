import { Smiley, SmileyMeh, SmileySad } from "phosphor-react";

type SatisfactionSmileProps = {
    npsAmount: number,
}

export function SatisfactionSmile(props: SatisfactionSmileProps) {

    const color = (npsAmount: number) => {
        if (npsAmount <= 25) {
            return 'text-red-500'
        } else if (npsAmount >= 75) {
            return 'text-green-500'
        } else {
            return 'text-orange-500'
        }
    };

    const description = (npsAmount: number) => {
        if (npsAmount <= 25) {
            return 'Ruim'
        } else if (npsAmount >= 75) {
            return 'Excelente'
        } else {
            return 'Neutro'
        }
    }

    return (
        <div className={`${color(props.npsAmount)} flex flex-col justify-center  items-center gap-2`} >
            <SmileySad size={54} className={`${(color(props.npsAmount) === 'text-red-500') ? '' : 'hidden'}`} />
            <SmileyMeh size={54} className={`${color(props.npsAmount) === 'text-orange-500' ? '' : 'hidden'}`} />
            <Smiley size={54} className={`${color(props.npsAmount) === 'text-green-500' ? '' : 'hidden'}`} />
            <strong className="font-semibold text-2xl">
                {description(props.npsAmount)}!
            </strong>
        </div>
    )
}