'use client';
import logo from '@/app/icon.svg';
import Image from "next/image";
import { useEffect, useState } from 'react';

interface IProps{
  size?: number
  alt?: string
}
export const Logo: React.FC<IProps> = ({size, alt}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  return mounted ? <Image src={logo} alt={alt ?? ''} width={size} height={size}/> : <></>
}