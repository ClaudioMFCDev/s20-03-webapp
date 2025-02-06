// components/Providers.tsx
'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { UserRoleProvider } from '@/app/context/useRoleContext'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <UserRoleProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </UserRoleProvider>
      </ThemeProvider>
    </>
  )
}