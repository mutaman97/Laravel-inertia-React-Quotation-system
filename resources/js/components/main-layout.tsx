'use client'

import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import { cn } from '@/lib/utils'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full lg:ps-[--sidebar-width]">
          <Header />
          <main className={cn('min-h-full p-4')}>{children}</main>
        </div>
      </div>
    </>
  )
}
