import {create} from "zustand";

const useUserStore = create((set)=>({
    token: false ,
    setToken : (token) => set ({token})
}))

export default useUserStore;