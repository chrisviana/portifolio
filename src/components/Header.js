import { DownloadSimple } from 'phosphor-react'
export function Header() {
    return (
        <div className='sm:grid grid-cols-3 mt-2 '>
            Christian Viana
            <div>
                <ul className='flex gap-4 justify-center text-font-400'>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Skills</li>
                </ul>
            </div>
            <div className='flex gap-2 items-center justify-end'>
                <button className=' w-36 text-font-300 border-solid border-2 border-font-verde p-2 rounded-lg flex items-center justify-center gap-1'>Resume <DownloadSimple size={24} /></button>
            </div>
        </div>
    )

}