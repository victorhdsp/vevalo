"use client";

import Hotjar from '@hotjar/browser';
import { clarity } from 'clarity-js'

const siteId = 3822247;
const hotjarVersion = 6;


import { useEffect } from "react";

const Controller = () => {
  
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
    clarity.identify('kjbojm1rzq')
  }, [])

  return (
    <></>
  )
}

export default Controller