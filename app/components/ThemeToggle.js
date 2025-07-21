'use client'

import { AddProjectButton } from './AddProjectButton'

export function ThemeToggle() {
  return (
    <div className="fixed bottom-4 right-4">
      <AddProjectButton className="hover:bg-window-bg/80 rounded-full bg-window-bg p-3 shadow-lg" />
    </div>
  )
}
