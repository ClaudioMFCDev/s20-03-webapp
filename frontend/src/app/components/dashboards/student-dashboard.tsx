import { Section } from '@/components/atoms/section'
import { PendingEvents } from '@/components/organisms/pending-events'
import { SummarySubjectsGrid } from '@/components/organisms/summary-subjects-grid'

export const StudentDashboard = () => {
  return (
    <Section className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2">
        <SummarySubjectsGrid randomTips className="w-full" />
      </div>
      <PendingEvents className="col-span-1" />
    </Section>
  )
}
