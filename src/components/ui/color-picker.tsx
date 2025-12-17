import { Popover } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { HexColorPicker } from 'react-colorful'

function ColorPickerRoot(props: React.ComponentProps<typeof Popover.Root>) {
  return <Popover.Root {...props} />
}

function ColorPickerTrigger(props: React.ComponentProps<typeof Popover.Trigger>) {
  return <Popover.Trigger {...props} />
}

function ColorPickerContent({
  value,
  onValueChange,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Content> & {
  value?: string
  onValueChange?: (value: string) => void
}) {
  return (
    <Popover.Content
      className={cn('p-2', className)}
      {...props}
    >
      <HexColorPicker
        className={cn(
          'gap-2',
          String.raw`[&_.react-colorful\_\_saturation]:rounded-md! [&_.react-colorful\_\_saturation]:border-none!`,
          String.raw`[&_.react-colorful\_\_hue]:h-3.5! [&_.react-colorful\_\_hue]:rounded-full!`,
          String.raw`[&_.react-colorful\_\_pointer]:size-3! [&_.react-colorful\_\_pointer]:transform-[translate(-50%,-50%)]!`,
        )}
        color={value}
        onChange={onValueChange}
      />
    </Popover.Content>
  )
}

export const ColorPicker = {
  Root: ColorPickerRoot,
  Trigger: ColorPickerTrigger,
  Content: ColorPickerContent,
}
