import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface ButtonProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const DestructiveButton = ({children, onConfirm}: ButtonProps) => {
  const [open, setOpen] = useState(false)

  const handleToggle = (open:boolean) => setOpen(open)
  
  const handleConfirm = () => {
    onConfirm()
    handleToggle(false)
  }

  return (
    <Popover onOpenChange={handleToggle} open={open}>
      <PopoverTrigger asChild>
        { children }
      </PopoverTrigger>

      <PopoverContent className="w-max flex flex-col gap-1 p-2">
        <p className="text-xs text-muted-foreground text-center">
          Deseja continuar?
        </p>
        <div className="flex w-full justify-between gap-2 ">
          <Button className="text-xs py-0 px-3" variant="destructive" type="button" onClick={handleConfirm} >
              Sim
          </Button>
          <Button className="text-xs py-0 px-3" type="button" onClick={() => handleToggle(false)} >
              Não
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}