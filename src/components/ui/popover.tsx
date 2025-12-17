import { cn } from '@/lib/utils'
import { Popover as BasePopover } from '@base-ui/react/popover'
import * as React from 'react'

function PopoverRoot({ ...props }: BasePopover.Root.Props) {
  return <BasePopover.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: BasePopover.Trigger.Props) {
  return <BasePopover.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 4,
  ...props
}: BasePopover.Popup.Props &
  Pick<BasePopover.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <BasePopover.Popup
          data-slot="popover-content"
          className={cn(
            'z-50 flex max-w-(--available-width) origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-4 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden',
            className,
          )}
          {...props}
        />
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="popover-header" className={cn('flex flex-col gap-0.5', className)} {...props} />
}

function PopoverTitle({ className, ...props }: BasePopover.Title.Props) {
  return (
    <BasePopover.Title data-slot="popover-title" className={cn('text-md font-semibold', className)} {...props} />
  )
}

function PopoverDescription({ className, ...props }: BasePopover.Description.Props) {
  return (
    <BasePopover.Description
      data-slot="popover-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Header: PopoverHeader,
  Title: PopoverTitle,
}
