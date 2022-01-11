<script>
    import { onMount } from "svelte";

    export let count;
    export let border;
    let size = 30;

    let inputField;

    onMount(() => {
        inputField.onkeydown = (e) => {
            if(!e.code.startsWith("Digit") && !e.code.startsWith("Backspace") && !e.code.startsWith("Arrow")) {
                return false;
            }

            if(size.length >= 3) {
                return false;
            }
        }
    });
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