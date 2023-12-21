import { appRouter } from '@/router/router'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    redirect(appRouter.LOGIN)
  )
}
