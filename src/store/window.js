import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) =>
            set((state) => {
                // *allows you to access the window
                const win = state.windows[windowKey];
                // *if there is no window, exit out of function
                if(!win) return;
                // *changes the isOpen from false to true, saying window is open
                win.isOpen = true;
                // *zindex of current window is the current nextZIndex that has been stored
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                // *increase the nextZIndex for the next window that would be opened
                state.nextZIndex++;
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if(!win) return;
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.zIndex = state.nextZIndex++;
            }),
    }))
);

export default useWindowStore;
