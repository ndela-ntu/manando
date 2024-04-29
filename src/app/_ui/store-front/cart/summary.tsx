'use client';

import { useAppSelector } from '@/app/_lib/redux/hooks';
import React from 'react'
import { Button } from '../../button';

type Props = {}

export default function Summary({}: Props) {
  const productsInCart = useAppSelector((state) => state.cart.productsInCart);

  const total = productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

  return (
    <div className='p-10 w-1/2 h-full'>
      <h2 className='text-2xl'>Summary</h2>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h4>Subtotal</h4>
          <h4>R{total}</h4>
        </div>
        <div className="flex justify-between">
          <h4>Taxes</h4>
          <h4>R{total}</h4>
        </div>
        <Button>Go to checkout</Button>
      </div>
    </div>
  )
}