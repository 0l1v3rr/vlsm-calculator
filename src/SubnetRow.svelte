<script>
    import { onMount } from "svelte";
    import { networks } from './store.js';

    export let count;
    export let border;
    let size = 30;

    let inputField;

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
        inputField.onkeydown = (e) => {
            if(size.length >= 3) {
                if(!e.code.startsWith("Digit") && !e.code.startsWith("Backspace") && !e.code.startsWith("Arrow") && !e.code.startsWith("Backquote")) {
                    return false;
                }
            }
            
            if(!e.code.startsWith("Digit") && !e.code.startsWith("Backspace") && !e.code.startsWith("Arrow") && !e.code.startsWith("Backquote")) {
                return false;
            }

            let index = findIndex();
            if(index != -1) {
                if(!isNaN(Number(e.key))) {
                    nw[index].size = Number(size + Number(e.key));
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
    <div class="col-2 text-align-center">
        { #if border }
            <hr class="mt-0 mb-2"> 
        { :else }
            <hr class="mt-0 mb-2 color-transparent"> 
        { /if }
        { count }. 
    </div>
    <div class="col-10 text-align-center">
        <input type="text" id="size" bind:this={inputField} bind:value={size} class="form-control">
    </div>
</main>

<style>
    .text-align-center {
        text-align: center;
    }
    .color-transparent {
        color: transparent;
    }
</style>