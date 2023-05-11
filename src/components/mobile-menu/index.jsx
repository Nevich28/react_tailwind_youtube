import React, {useState} from 'react'
import { Button } from '../button'
import { COMPANY, FEATURES } from '../header/constants'
import { MenuItem } from '../menu-item'
import { NavItem } from '../nav-item'

export const MobileMenu = ({ isOpen = false}) => {
	const [selected, setSelected] = useState('');
	const onSelected = (text) => {
		setSelected(text);
	}
  return (
	<>
		{/* <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen  ? 'flex' : 'hidden'}`}></div> */}
		<div className='absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] flex'></div>
		{/* <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen  ? 'flex' : 'hidden'}`}> */}
		<div className='absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] flex'>
			<nav className="my-20 mx-5 space-y-5 text-lg w-full">
				<NavItem isMobile={isOpen} selected={selected} setSelected={onSelected} text='Features'>
					<div className="flex flex-col space-y-5 p-2">
						{ FEATURES.map(({ text, icon}, i) => <MenuItem key={i} text={text} icon={icon}/>)}
					</div>
				</NavItem>
				<NavItem isMobile={isOpen} selected={selected} setSelected={onSelected} text='Company'>
					<div className="flex flex-col space-y-5 p-2">
						{ COMPANY.map(({ text, icon}, i) => <MenuItem key={i} text={text} icon={icon}/>)}
					</div>
				</NavItem>
				<NavItem text='Careers'/>
				<NavItem text='About'/>
				<div className="flex flex-col space-y-5">
					<Button>Loggin</Button>
					<Button hasBorder={true}>Register</Button>
				</div>
			</nav>
		</div>

	</>
  )
}
