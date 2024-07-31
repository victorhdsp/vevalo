import { create } from 'zustand'

type SelectState = {
    key: string
    value: string
}[]

interface AdditionalState {
    type: "select",
    data: SelectState
}

interface ServiceState {
    id: number
    name: string
    hourValue: number
    additionals: AdditionalState[]
    isDeleted?: boolean
}

interface ServiceStore {
    services: ServiceState[]
    addService: (name: string, hourValue: number, additionals: AdditionalState[]) => void
    changeService: (id: number, name: string, hourValue: number, additionals: AdditionalState[]) => void
    removeService: (id: number) => void
}

const useProfileFormStore = create<ServiceStore>((set) => ({
    services: [],

    addService: (name, hourValue, additionals) => set(({services}) => {
        const id = services.length;
        const newService:ServiceState = { id, name, hourValue, additionals }
        return { services: [ ...services, newService ] }
    }),
    changeService: (id, name, hourValue, additionals) => set((state) => ({
        services: state.services.map((service) => {
            if (service.id === id) {
                service.name = name;
                service.hourValue = hourValue;
                service.additionals = additionals;
            }
            return service;
        })
    })),
    removeService: (id) => set((state) => ({
        services: state.services.map((service) => {
            if (service.id === id) service.isDeleted = true;
            return service;
        })
    }))
}))

export default useProfileFormStore;