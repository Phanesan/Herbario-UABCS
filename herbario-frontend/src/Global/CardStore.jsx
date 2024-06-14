import {create} from "zustand";

const useCardStore = create((set)=>({
    view : false,
    setView : (view) => set ({view})
}))

export default useCardStore;