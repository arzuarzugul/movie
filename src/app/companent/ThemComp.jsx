"use client"

import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { CiDark, CiLight } from "react-icons/ci";

const ThemComp = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const themeMode = theme === "system" ? systemTheme : theme;

    return (
        <div>
            {mounted && (
                themeMode === "dark" ? 
                <CiLight onClick={()=>setTheme('light')} size={25} className='cursor-pointer' /> : 
                <CiDark onClick={()=>setTheme('dark')} size={25} className='cursor-pointer' />
            )}
        </div>
    );
}

export default ThemComp;
