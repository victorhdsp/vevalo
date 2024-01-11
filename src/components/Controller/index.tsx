"use client";

import Hotjar from '@hotjar/browser';

const siteId = 3822247;
const hotjarVersion = 6;


import { useEffect } from "react";

const Controller = () => {
  
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, [])

  return (
    <></>
  )
}

export default Controller