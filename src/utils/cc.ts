export function cc(...classes: unknown[]) {
return classes.filter(c => typeof c === "string").join(" ")
}

// What this function does is allow you to manage conditional render of classes in a simpler way. 