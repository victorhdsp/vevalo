import { create } from 'zustand'

import { ProfileType, ProjectsTypes, ServiceTypes, UserTypes } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import starter from '@/assets/data/starter'

type UserStore = UserTypes & {
  saveUserProfile: (profile: ProfileType) => void
  createNewProject: (project:ProjectsTypes) => void
  createNewService: (service:ServiceTypes) => void
}

const initialState: () => UserTypes = () => ({
  ...starter,
  id: generateId()
})

export const useUser = create<UserStore>((set) => ({
  ...initialState(),

  saveUserProfile: (profile) => set(store => ({ profile })),
  createNewProject: (project) => set(store => ({ projects: [ ...store.projects, project ]})),
  createNewService: (service) => set(store => ({ services: [ ...store.services, service ]}))
}))