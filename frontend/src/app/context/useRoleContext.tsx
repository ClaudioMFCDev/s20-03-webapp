// context/UserRoleContext.tsx
'use client'

import React, { createContext, useContext, useState } from 'react'

type Role = 'SchoolAdmin' | 'Teacher' | 'Student' | 'Parent'

type UserRoleContextType = {
  userRole: Role
  setUserRole: (role: Role) => void
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined)

export const UserRoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState<Role>('Teacher')

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  )
}

export const useUserRole = () => {
  const context = useContext(UserRoleContext)
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider')
  }
  return context
}