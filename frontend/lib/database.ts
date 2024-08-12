import { User } from "./types"

interface Database {
    user: User
}

export const database:Database = {
    user: {
        services: [
            {
                id: "Service1",
                title: "Projeto",
                inputs: [
                    {
                        id: "InputService1",
                        label: "Tamanho do espaço",
                        name: "size",
                        options: [
                            { 
                                id: "InputServiceOption1",
                                key: "grande", 
                                label: "Grande", 
                                value: "500"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}