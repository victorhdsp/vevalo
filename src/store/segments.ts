import { create } from 'zustand'

interface SegmentStore {
  segments: { value: string, label: string }[]
}

export const useSegment = create<SegmentStore>((set) => ({
  segments: [
    { value: 'technology', label: 'Tecnologia' },
  ]
}))