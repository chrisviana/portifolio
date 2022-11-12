import { LinkSimpleHorizontal } from 'phosphor-react'
import ImgProjeto from '../../assets/img-projeto01.png'

export function Card(props) {
    return (
        <div className="sm:w-96 h-[402px] mt-8">
            <img src={ImgProjeto} alt="" />
            <div className='ml-6'>
                <p className='mt-8 font-plus text-base text-font-400'>Agency WebSite</p>
                <div className='flex items-center gap-5 mt-2'>
                    <span className='rounded border-solid border-fontbranca-200 border text-xs w-20 flex items-center px-2 py-1 text-font-200'>WordPress</span>
                    <a href='/'>
                        <LinkSimpleHorizontal size={18} color="#656D72" />
                    </a>

                </div>
            </div>


        </div>
    )
}