import { createFileRoute, redirect } from '@tanstack/react-router'
export const Route = createFileRoute('/apartments')({ beforeLoad: () => { throw redirect({ to: '/gallery' }) } })
