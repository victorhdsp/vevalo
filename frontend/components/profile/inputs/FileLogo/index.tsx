"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

interface InputFileLogoProps {
    src?: string,
    size?: number
}

function InputFileLogo(props: InputFileLogoProps) {
    const size = props.size || 20;
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [logoSrc, setLogoSrc] = useState<string>(props.src || "");

    function fileChange(event: ChangeEvent<HTMLInputElement>) {
        const {files} = event.target
        if (!files) return;
        for (let index = 0; index < files.length; index++) {
            if (logoSrc) URL.revokeObjectURL(logoSrc)
            const file = files[index];
            setLogoSrc(URL.createObjectURL(file))
        }
    }

    return (
        <div 
            className={classNameRoot(size)}
            onClick={() => fileInputRef.current?.click()}
        >
            <input 
                type="file" 
                name="logo" 
                id="logo"
                className="absolute -z-10 w-full h-full opacity-0"
                onInput={fileChange}
                accept="image/*"
                ref={fileInputRef}
            />
            <Avatar className="pointer-events-none w-full h-full">
                <AvatarImage src={logoSrc}/>
                <AvatarFallback><Upload/></AvatarFallback>
            </Avatar>
        </div>
    );
}

export default InputFileLogo;

function classNameRoot(size: number) {
    const classList = [
        "relative", 
        `w-${size}`, 
        `h-${size}`, 
        "cursor-pointer", 
        "bg-slate-50", 
        "rounded-full"
    ];
    return classList.join(" ")
}