'use client'

import { cn } from '@/lib/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...properties }, reference) => (
  <SwitchPrimitives.Root
    className={cn(
      'cursor-pointer focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed data-[state=unchecked]:bg-input peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent bg-light-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 data-[state=checked]:bg-oren-3',
      className,
    )}
    {...properties}
    ref={reference}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'bg-background pointer-events-none block h-5 w-5 rounded-full bg-oren-1 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
