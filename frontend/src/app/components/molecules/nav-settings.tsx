import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Palette, User } from 'lucide-react'

export const NavSettings = () => {
  return (
    <nav className="flex w-[180px] flex-col gap-2">
      <Button variant="ghost" className="justify-start" asChild>
        <Link href="/dashboard/settings">
          <User />
          Perfil
        </Link>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <Link href="/dashboard/settings/appearance">
          <Palette />
          Apariencia
        </Link>
      </Button>
    </nav>
  )
}
