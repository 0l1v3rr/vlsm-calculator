import { writable } from 'svelte/store'

export const ipaddr = writable("");
export const subnet = writable(2);
export const networks = writable([]);