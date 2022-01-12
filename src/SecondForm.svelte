<script>
    import SubnetRow from "./SubnetRow.svelte";
    import { onMount } from "svelte";
    import { ipaddr } from './store.js';
    import { subnet } from './store.js';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let subnets = $subnet;
    let ip = $ipaddr;

    let phase = 2;

    let backBtn;
    let nextBtn;

    onMount(() => {
        backBtn.onclick = () => {
            dispatch("backClicked");
            phase = 2;
        }

        nextBtn.onclick = () => {
            phase = 3;
        }
    });
</script>

<main>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <h3 class="text-align-center">{ ip }/24</h3>
                </div>
                
                <hr class="my-3">
            </div>

            { #if phase == 2 }
                <div class="row">
                    <div class="col-2 text-align-center"><b>#</b><hr class="mt-1 mb-3"></div>
                    <div class="col-10 text-align-center"><b>Size</b><hr class="mt-1 mb-3"></div>
                </div>
            { /if }

            { #each Array(subnets) as _, i }
                { #if phase == 2 }
                    { #if i == 0 }
                        <SubnetRow border={false} count={i + 1} />
                    { :else }
                        <SubnetRow border={true} count={i + 1} />
                    { /if }
                { /if }
            { /each }

            <div class="clear"></div>

            <hr>
            <button bind:this={backBtn} class="btn btn-secondary">BACK</button>
            { #if phase == 2 }
                <button bind:this={nextBtn} class="btn btn-primary">NEXT</button>
            { /if }
        </div>
    </div>
</main>

<style>
    .text-align-center {
        text-align: center;
        font-weight: 400;
    }
</style>