import Logo from '../assets/logo.png'
import { Moon } from 'phosphor-react'
export function Header(){
    return (
        <div className='sm:grid grid-cols-3 mt-2 '>
            <img src={Logo} alt="Logo" className='w-44'/>
            <div>
                <ul className='flex gap-4 justify-center text-font-300'>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Experience</li>
                </ul>
            </div>
            <div className='flex gap-2 items-center justify-end'>
                <Moon size={24} color="#FFF"/>
                <button className='text-font-300'>Resume</button>
            </div>
        </div>
    )

}