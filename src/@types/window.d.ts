declare global {
    interface Window {
        DAMAGE_SELECTOR_API: {
            init: (options: {selector?: string}) => void;
        };
    }
}