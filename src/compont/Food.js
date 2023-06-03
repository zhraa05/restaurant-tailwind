import React, { useState } from 'react'
import { data } from '../data/data'

export default function Food() {
    const [food, setfood] = useState(data)
    const filtertyp = (category) => {
        setfood(data.filter((item) => {
            return item.category === category
        }))
    }
    const filterpric = (pric) => {
        setfood(data.filter((item) => {
            return item.price === pric
        }))
    }


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'> Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justfiy-between flex-wrap'>
                        <button
                            onClick={() => setfood(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            All
                        </button>
                        <button
                            onClick={() => filtertyp('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            Burgers
                        </button>
                        <button
                            onClick={() => filtertyp('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filtertyp('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filtertyp('chicken')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            Chicken
                        </button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button
                            onClick={() => filterpric('$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            $
                        </button>
                        <button
                            onClick={() => filterpric('$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            $$
                        </button>
                        <button
                            onClick={() => filterpric('$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            $$$
                        </button>
                        <button onClick={() => filterpric('$$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >
                            $$$$
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item, index) => (
                    <div
                        key={index}
                        className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
