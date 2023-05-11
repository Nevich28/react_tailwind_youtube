import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { Button } from '../button';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { MobileMenu } from '../mobile-menu';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
	const [selected, setSelected] = useState('');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const onSelected = (text) => {
		setSelected(text);
	}
  return (
	<header className='flex items-center'>
		<LogoIcon/>
		<nav className='hidden xl:flex space-x-6 ml-8'>
			<NavItem selected={selected} setSelected={onSelected} text='Feature'>
				<NavMenu items={ FEATURES }></NavMenu>
			</NavItem >
			<NavItem selected={selected} setSelected={onSelected} text='Company'>
				<NavMenu items={ COMPANY }></NavMenu>
			</NavItem>
			<NavItem text='Careers'/>
			<NavItem text='About'/>
		</nav>
		<div className='hidden ml-auto xl:flex space-x-5'>
			<Button> Loggin </Button>
			<Button hasBorder={true}> Register </Button>
		</div>
		<div 
			className='absolute top-3 right-3 xl:hidden ml-auto cursor-pointer z-30'
			onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
		>
			{ !isMobileMenuOpen ? <MenuIcon/> : <MenuCloseIcon/>}
		</div>
		<AnimatePresence>
			{isMobileMenuOpen && 
				<motion.div
					className='absolute top-0 left-0 right-0 bottom-0 overflow-hidden'
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					exit={{ width: '0%' }}
					transition={{ ease: "easeOut" }}
				>
					<MobileMenu isOpen={isMobileMenuOpen}/>
				</motion.div>
			}
		</AnimatePresence>
		
	</header>
  )
}
