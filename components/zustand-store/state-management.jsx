import { create } from "zustand";

export const useStateManagementStore = create((set) => ({
  selectedMenu: "",
  setSelectedMenu: (menu) => set(() => ({ selectedMenu: menu })),
  currentRoute: "",
  setCurrentRoute: (route) => set(() => ({ currentRoute: route })),
  showMenu: false,
  setShowMenu: (menu) => set(() => ({ showMenu: menu })),
  sidebarTitles: [],
  setSidebarTitles: (titles) =>
    set({ sidebarTitles: Array.isArray(titles) ? titles : [] }),
}));
