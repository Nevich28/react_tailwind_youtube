import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import { Button } from '../button';


export const MainSection = () => {
  return (
	<section className=' w-full flex flex-col xl:flex-row mt-6 h-screen justify-between'>
		<div className='relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-60'>
			<h1	h1 className="text-3xl xl:text-8xl mt-6 font-black xl:whitespace-pre-line">{`Make\n remove work`}</h1>
			<p className=' text-medium-gray text-lg my-12 whitespace-pre-line'>{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}</p>
			<Button isFilled={true}>Learn more</Button>
			<div className="flex flex-col items-center space-y-4 mb-4 xl:flex-row xl:justify-around xl:absolute bottom-2 w-full mt-20">
				<Databiz/>
				<Audiophile/>
				<Meet/>
				<Maker/>
			</div>
		</div>
		<div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
			<img src={MenImage} alt="Men" />
		</div>
		<div className="flex xl:hidden w-full mt-2 justify-center mb-8 order-1">
			<img src={MenImageMobile} alt="Men" />
		</div>
	</section>
  )
}