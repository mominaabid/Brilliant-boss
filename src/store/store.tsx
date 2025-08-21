import { create } from "zustand";

const useStore = create<{
  isContactFormOpen: boolean;
  setIsContactFormOpen: (isOpen: boolean) => void;
}>((set) => ({
  isContactFormOpen: false,
  setIsContactFormOpen: (isOpen) =>
    set(() => ({
      isContactFormOpen: isOpen,
    })),
}));

export { useStore };
