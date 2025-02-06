// pages/DashboardPage.tsx
'use client'

import { redirect } from 'next/navigation'
import { ParentDashboard } from '@/components/dashboards/parent-dashboard'
import { StudentDashboard } from '@/components/dashboards/student-dashboard'

import { useUserRole } from '@/app/context/useRoleContext'
import TeacherDashboard from '@/components/dashboards/teacher-dashboard'
import { AdminDashboard } from '#/src/app/components/dashboards/admin-dashboard'

export default function DashboardPage() {
  const { userRole } = useUserRole()

  if (userRole === 'SchoolAdmin') redirect('/dashboard/users')

  const dashboards = {
    Teacher: <TeacherDashboard />,
    Student: <StudentDashboard />,
    Parent: <ParentDashboard />,
  }

  const CurrentDashboard = dashboards[userRole] || null
  return CurrentDashboard
}