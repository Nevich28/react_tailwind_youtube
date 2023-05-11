import React from 'react'
import { MenuItem } from '../menu-item'

export const NavMenu = ({ items = [] }) => {
  return (
	// <div className=' flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'>
	<div className=' flex flex-col px-4 py-2 bg-almost-white w-36 space-y-2 z-30'>
		{items.map(({text, icon}, i) => <MenuItem key={i} text={text} icon={icon}/>)}
	</div>
  )
}
