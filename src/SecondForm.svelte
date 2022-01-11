<script>
    import SubnetRow from "./SubnetRow.svelte";
    import { onMount } from "svelte";
    import { ipaddr } from './store.js';
    import { subnet } from './store.js';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let subnets = $subnet;
    let ip = $ipaddr;

    let backBtn;

    onMount(() => {
        backBtn.onclick = () => {
            dispatch("backClicked");
        }
    });
</script>

<main>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-2">
                    <button bind:this={backBtn} class="btn btn-secondary w-100">BACK</button>
                </div>
                <div class="col-8">
                    <h3 class="text-align-center">{ ip }</h3>
                </div>
                <div class="col-2">
                    <button class="btn btn-primary w-100">NEXT</button>
                </div>
                <hr class="my-3">
            </div>

            <div class="row">
                <div class="col-2 text-align-center"><b>#</b><hr class="mt-1 mb-3"></div>
                <div class="col-10 text-align-center"><b>Size</b><hr class="mt-1 mb-3"></div>
            </div>
            { #each Array(subnets) as _, i }
                { #if i == 0 }
                    <SubnetRow border={false} count={i + 1} />
                { :else }
                    <SubnetRow border={true} count={i + 1} />
                { /if }
            { /each }
        </div>
    </div>
</main>

<style>
    .text-align-center {
        text-align: center;
        font-weight: 400;
    }
    .w-100 {
        width: 100%;
    }
</style>