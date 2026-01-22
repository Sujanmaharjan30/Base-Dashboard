import React from 'react'
import { Bag, Brefcase, Game, Heart } from '../../../../public/icons/Svg'


const Application = () => {
    const stats = [
        {
            value: 178,
            label: "Save Product",
            icons: <Heart />,
            color: '#5B93FF'

        },
        {
            value: 20,
            label: "Stock Product",
            icons: <Game />,
            color: '#FFD66B'

        },
        {
            value: 190,
            label: "Sales Product",
            icons: <Brefcase />,
            color: '#FF8F6B'

        },
        {
            value: 20,
            label: "Job Application",
            icons: <Bag />,
            color: '#605BFF'

        },
    ]
    return (
        <div className='my-7.5 mx-4 md:mx-7.5 flex flex-col  md:flex-row gap-4 md:gap-7.5 md:items-center justify-start' style={{ fontFamily: "Nunito" }}>
            {
                stats.map((stats, id) => (
                    <div key={id} className='w-full md:w-[268px] h-[116px] rounded-[10px] bg-white flex gap-[23px] items-center justify-center cursor-pointer'>
                        <div className='w-[60px] h-[60px] rounded-[38px] flex items-center justify-center' style={{
                            backgroundColor: stats.color + "1a",
                            color: stats.color
                        }}>
                            {stats.icons}


                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-[22px] leading-[100%]'>{stats.value}+</h1>
                            <span className='font-normal text-sm leading-[100%]'>{stats.label}</span>
                        </div>


                    </div>
                ))
            }




        </div>
    )
}

export default Application