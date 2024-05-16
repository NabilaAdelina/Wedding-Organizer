import React from 'react'


const Location = (props) => {
    const { name, url } = props
    return (
        <div>
            <div className='xl:w-[200px] 2xl:w-[246px] h-[153px] rounded-lg flex flex-col justify-end' style={{
                backgroundImage: `url(${url})`
            }} >
                <p className='font-switzer text-[16px] font-medium pl-3 py-2 text-white'>{name}</p>
            </div>
        </div>
    )
}

export default Location
