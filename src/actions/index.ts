export enum ActionType {
    EXAMPLE = 'EXAMPLE',
    EXAMPLE_1 = 'EXAMPLE_1',
};

export type Action = {
    type: ActionType.EXAMPLE,
} | {
    type: ActionType.EXAMPLE_1,
}

export function example_action(): Action {
    return {
        type: ActionType.EXAMPLE,
    }
}