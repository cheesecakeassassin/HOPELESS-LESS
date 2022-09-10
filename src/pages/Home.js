import React from 'react'
import manRight from '../assets/svgs/manRight.svg'
import manLeft from '../assets/svgs/manLeft.svg'
import woman from '../assets/svgs/woman.svg'
import computer from '../assets/svgs/computer.svg'
import peaks from '../assets/svgs/peaks.svg'
import bag from '../assets/svgs/bag.svg'
import cards from '../assets/svgs/cards.svg'
import donut from '../assets/svgs/donut.svg'
import ball from '../assets/svgs/ball.svg'
import boxes from '../assets/svgs/boxes.svg'

function Home() {
    return (
        <div>
            <div className='bg-[url("./assets/images/background.png")]'>
                <div className='pt-20 pl-12'>
                    <div className='text-7xl font-bold'>Got Hope ...</div>
                    <div className='pl-3 font-medium text-3xl'>is here</div>
                </div>
                <div className='relative'>
                    {/* <div>
                        <img src={woman} alt='woman' />
                    </div>
                    <div>
                        <img src={manLeft} alt='man left' />
                    </div>
                    <div>
                        <img src={manRight} alt='man right' />
                    </div>
                    <div>
                        <img src={computer} alt='computer' />
                    </div>
                    <div>
                        <img src={peaks} alt='peaks' />
                    </div>
                    <div>
                        <img src={bag} alt='bag' />
                    </div>
                    <div>
                        <img src={cards} alt='cards' />
                    </div>
                    <div>
                        <img src={donut} alt='donut' />
                    </div>
                    <div>
                        <img src={ball} alt='ball' />
                    </div>
                    <div>
                        <img src={boxes} alt='boxes' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
