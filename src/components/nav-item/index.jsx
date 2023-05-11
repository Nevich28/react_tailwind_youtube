import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';
import { motion, AnimatePresence } from 'framer-motion';

export const NavItem = ({ isMobile, setSelected, selected='', text='', children }) => {
  return (
	<div className="relative">
		<div className='flex space-x-2 cursor-pointer items-center'>
			<span 
				className='text-medium-gray hover:text-almost-black'
				onClick={() => children && setSelected(text !== selected ? text : '')}
			>
				{text}
			</span>
			<AnimatePresence initial={false}>
					{children && selected === text  && 
						<motion.div
							initial={{ rotate: 180 }}
							animate={{ rotate: 0 }}
							exit={{ rotate: 180 }}
							transition={{ ease: "easeOut" }}
						>
							<ArrowUpIcon/>
						</motion.div>
					}
					{children && selected !== text  && 
						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: 180 }}
							exit={{ rotate: 0 }}
							transition={{ ease: "easeOut" }}
						>
							<ArrowUpIcon/>
						</motion.div>
					}
			</AnimatePresence>
		</div>
		<AnimatePresence>
		{selected === text && (
			<motion.div
				className={`overflow-hidden ${!isMobile && 'absolute top-10 right-0'} rounded-lg drop-shadow`}
				initial={{ height: 0 }}
				animate={{ height: 'auto' }}
				exit={{ height: 0 }}
			>
				{children}
			</motion.div>			
		)}
		</AnimatePresence>
	</div>
  )
}
