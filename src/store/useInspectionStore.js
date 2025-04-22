import create from 'zustand'

export const useInspectionStore = create(set => ({
  projectName: '',
  projectNumber: '',
  companyName: '',
  dateOfInspection: new Date().toISOString().split('T')[0],
  scope: '',
  inspector: { name: '', position: '', date: '' },
  setField: (field, value) => set({ [field]: value }),
}))