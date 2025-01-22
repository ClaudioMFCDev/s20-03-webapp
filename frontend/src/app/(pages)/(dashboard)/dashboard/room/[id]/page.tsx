import { Section } from '@/components/atoms/section'

export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <Section>
      <h2>{`</Page> - <DashboardPage> - ${params.id}`}</h2>
    </Section>
  )
}
