import { create } from 'zustand'

import { ProfileType, ProjectsTypes, ServiceTypes, UserTypes } from '@/assets/data/type'
import { generateId } from '@/assets/utils'

import starter from '@/assets/data/starter'
import { getUser } from '@/services/firebase/database'

type UserStore = UserTypes & {
  saveUserProfile: (profile: ProfileType) => void
  createNewProject: (project:ProjectsTypes) => void
  createNewService: (service:ServiceTypes) => void
  removeProject: (id:string) => void
  removeService: (id:string) => void
  saveUser: (user:UserTypes) => void
  resetUser: () => void
}

const initialState: () => UserTypes = () => ({
  ...starter,
  id: generateId()
})

export const useUser = create<UserStore>((set) => ({
  ...initialState(),

  saveUserProfile: (profile) => set(store => ({ profile })),
  createNewProject: (project) => set(store => ({ projects: [ ...store.projects, project ]})),
  createNewService: (service) => set(store => ({ services: [ ...store.services, service ]})),
  removeProject: (id) => set(store => ({ projects: store.projects.filter(project => project.id !== id) })),
  removeService: (id) => set(store => ({ services: store.services.filter(service => service.id !== id) })),
  saveUser: (user) => set(store => ({ ...user })),
  resetUser: async () => { await getUser() }
}))