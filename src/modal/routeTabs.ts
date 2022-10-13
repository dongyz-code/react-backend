import create from 'zustand'

interface routeTabModal {
  label: string
  key: string
}

interface store {
  routeTabs: routeTabModal[]
  addTabs: (tab: routeTabModal) => void
  removeTab: (key: string) => void
}

export const useRouteTabs = create<store>((set) => ({
  routeTabs: [],
  addTabs: (tab) => set((state) => ({ routeTabs: [...state.routeTabs, tab] })),
  removeTab: (key) =>
    set((state) => {
      return { routeTabs: state.routeTabs.filter((tab) => tab.key !== key) }
    })
}))
