import React from 'react'

function Card(props) {
    // Picture, title, description props
    return (
        <div className='bg-[#D9D9D9] rounded-3xl h-[240px] w-[250px] m-2'>
            <div className='flex flex-col justify-center items-center align-center'>
                <img className='z-50 rounded-3xl m-2 my-5 justify-center items-end align-end' height={150} width={150} src={props.image} alt={props.description} />
                <div className='z-50 text-xl font-medium text-center'>{props.title}</div>
                <div className='z-50 text-sm m-2 text-center'>{props.description}</div>
            </div>
        </div>
    )
}

export default Card
