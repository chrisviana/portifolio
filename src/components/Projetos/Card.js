import { LinkSimpleHorizontal } from 'phosphor-react'

export function Card(props) {

    return (
        <div className="sm:w-96 h-[402px] mt-8">
            <img src={props.urlImg} alt="" />
            <div className='ml-6'>
                <p className='mt-8 font-plus text-base text-font-400'>{props.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                    {
                        props.technologies.map((technology) => {
                            return <span key={technology} className='rounded border-solid border-fontbranca-200 border text-xs w-auto flex items-center px-2 py-1 text-font-200'>{technology}</span>

                        })
                    }
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <LinkSimpleHorizontal size={18} color="#656D72" />
                    </a>
                </div>
            </div>
        </div>
    )
}