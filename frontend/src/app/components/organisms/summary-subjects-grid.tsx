import { cn } from '@/lib/utils'
import { RandomTipAlert } from '@/components/atoms/random-tip-alert'
import { SubjectCard } from '@/components/molecules/cards/subject-card'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SUBJECTS_JSON from '@/data/subjects.json'

interface SummarySubjectsGridProps {
  className?: string
}

export const SummarySubjectsGrid = ({
  className,
}: SummarySubjectsGridProps) => {
  return (
    <Card className={cn('h-fit w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Resumen de asignaturas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SUBJECTS_JSON.map(subject => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            title={subject.title}
            teacher={'Augusta Ada Byron'}
            location={subject.location}
          />
        ))}
      </CardContent>
      <CardFooter>
        <RandomTipAlert />
      </CardFooter>
    </Card>
  )
}
