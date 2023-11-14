import { useContext } from "react"
import { Context } from "./Events"

export const EVENT_COLORS = ["red", "green", "blue"] as const; // to make sure the colors wont change.

// create a custom hook
export function useEvents() {
    const value = useContext(Context)
    if (value == null) {
        throw new Error("useEvents must be used within an EventsProvider")
    } 
    
    return value
    }