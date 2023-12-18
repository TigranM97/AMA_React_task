
import { createEffect, createStore } from "effector";
import { TPositionResponse } from "../@types/positions";
import axios from "axios";

// API
async function fetchPositions() {
    const response = await axios.get(import.meta.env.VITE_API_URL);
    return response.data as TPositionResponse;
}

async function postPositions(data: string[]) {
    const response = await axios.post(import.meta.env.VITE_API_URL, data);

    return response.data as TPositionResponse;
}

// Store
export const $positions = createStore<TPositionResponse>([]);

// Effects
export const fetchPositionsFx = createEffect<void, TPositionResponse>();
fetchPositionsFx.use(fetchPositions);

export const postPositionsFx = createEffect<string[], TPositionResponse>();
postPositionsFx.use(postPositions);


// Handlers
$positions.on(fetchPositionsFx.doneData, (state, payload) => {
    // Skip the empty object storing
    if (!Array.isArray(payload)) return state

    return payload;
});

$positions.on(postPositionsFx.doneData, (_, payload) => {
    return payload;
});







