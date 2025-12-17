import { useState } from 'react'
import { Popover } from '@/components/ui/popover'
import { ColorPicker } from '@/components/ui/color-picker'

function App() {
  const [color, setColor] = useState('#3b82f6')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Popover.Root>
        <Popover.Trigger className="px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5">
          Open Popover
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex items-center gap-3">
            <ColorPicker.Root>
              <ColorPicker.Trigger
                className="w-8 h-8 rounded border border-foreground/20"
                style={{ backgroundColor: color }}
              />
              <ColorPicker.Content value={color} onValueChange={setColor} />
            </ColorPicker.Root>
            <span className="text-sm font-mono">{color}</span>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

export default App
