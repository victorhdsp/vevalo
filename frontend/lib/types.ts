export interface ServiceInputOption {
    id: string,
    key: string,
    label: string,
    value: string
}

export interface ServiceInput {
    id: string,
    label: string,
    name: string,
    options: ServiceInputOption[]
}

export interface Service {
    id: string,
    title: string,
    inputs: ServiceInput[]
}

export interface User {
    services: Service[]
}