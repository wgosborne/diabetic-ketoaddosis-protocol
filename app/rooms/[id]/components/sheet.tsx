import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

interface SheetProps {
  potassium: number;
  onNew: (value: number) => void;
}


const MySheet = ({ potassium, onNew }: SheetProps) => {

  const [inputVal, setInputVal] = useState(0);

  //change this to not be any once I figure out what it is
  const handleChange = (event: any) => {
    console.log(event.target.value)
    onNew(event.target.value);
    console.log(potassium);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Button>Start Here</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Potassium Primary Fluid Adjustment</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          {/* figure out how to add the apostrophe */}
            <Label>Enter the patients K+ level </Label>
            <Input
              type="number"
              placeholder="Enter as a decimal number"
              onChange={handleChange}
            />
            {/* may not need the button because it doesnt do anything */}
            <SheetClose />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MySheet;
