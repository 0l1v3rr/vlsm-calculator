<script>
    import { onMount } from "svelte";

    export let count;
    export let margin;

    export let size;
    export let network;
    export let prefix;
    export let broadcast;
    export let mask;

    let maxSize = 254;
    if(size > 126) maxSize = 254;

    export let error = false;

    let row;

    onMount(() => {
        if(margin) {
            row.classList.add("mt-3");
        }
    });
</script>

<main bind:this={row} class="row px-3">
    <ul class="list-group">

        { #if error }
            <li class="list-group-item active bg-danger border-danger" aria-current="true">Subnet #{ count } - { size } hosts</li>
        { :else }
            <li class="list-group-item active bg-success border-success" aria-current="true">Subnet #{ count } - { size } hosts</li>
        { /if }

        <li class="list-group-item d-flex justify-content-between align-items-start">
            { #if error }
                <div class="fw-bold">-</div>
            { :else }
                <div class="col-6">
                    <div class="fw-bold">Network</div>
                    { network }/{ prefix }
                </div>
                <div class="col-6">
                    <div class="fw-bold">Broadcast</div>
                    { broadcast }
                </div>
            { /if }
        </li>
        { #if !error }
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="col-12">
                    <div class="fw-bold">Subnet mask</div>
                    { mask }
                </div>
            </li>
        { /if }
    </ul>
</main>

<style>

</style>