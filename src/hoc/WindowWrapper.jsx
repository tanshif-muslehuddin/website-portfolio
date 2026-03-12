import useWindowStore from "#store/window.js";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows} = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);
        // *checks if the window is open/closed
        useGSAP(() => {
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = "block";
            // *animation for the window appearing
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40},
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            )
        }, [isOpen]);

        // *allowing for draggable
        useGSAP(() => {
            const el = ref.current;
            if(!el) return;

            const [instance] = Draggable.create(el, {onPress: () => focusWindow(windowKey)});

            return () => instance.kill();
        }, []);

        // *this will allow for you to open and close when clicking on the terminal button on the dock
        // *and we start with no windows active
        useLayoutEffect(() => {
            const el = ref.current;
            if(!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref} style={{zIndex}}
                className="absolute"
            >
                <Component {...props}/>
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;


    return Wrapped;
};

export default WindowWrapper;