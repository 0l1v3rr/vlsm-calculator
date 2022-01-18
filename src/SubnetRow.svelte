<script>
    import { onMount } from "svelte";
    import { networks } from './store.js';

    export let count;
    export let border;
    let size = 30;

    let range;

    let nw = $networks;
    nw.push({
        count: count,
        size: size,
        network: "",
        broadcast: "",
        prefix: "",
        mask: "",
        error: false
    });
    networks.set(nw);

    onMount(() => {
        range.onchange = () => {
            let index = findIndex();
            if(index != -1) {
                if(!isNaN(Number(size))) {
                    nw[index].size = Number(size);
                }
            }
        }
    });

    function findIndex() {
        for(let i = 0; i < nw.length; i++) {
            if(nw[i].count == count) {
                return i;
            }
        }

        return -1;
    }
</script>

<main class="row">
    <div class="col-1 text-align-center">
        { #if border }
            <hr class="mt-0 mb-2"> 
        { /if }
        { count }
    </div>
    <div class="col-3 text-align-center">
        { #if border }
            <hr class="mt-0 mb-2"> 
        { /if }
        <span>{size}</span>
    </div>
    <div class="col-8 text-align-center">
        { #if border }
            <hr class="mt-0 mb-2"> 
        { /if }

        <input type="range" bind:this={range} bind:value={size} class="form-range" min="2" max="256">
    </div>
</main>

<style>
    .text-align-center {
        text-align: center;
    }
</style>