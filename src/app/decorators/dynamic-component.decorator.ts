const DYNAMIC_COMPONENTS_MAP = new Map<string, any>();

export function DynamicComponent(type: string) {
    return function _DynamicComponent<T extends { new(...args: any[]): any }>(constr: T) {
        DYNAMIC_COMPONENTS_MAP.set(type, constr);
        console.log("DYNAMIC_COMPONENTS_MAP", DYNAMIC_COMPONENTS_MAP);
    };
}

export function getDynamicComponent(type: string) {
    return DYNAMIC_COMPONENTS_MAP.get(type);
}