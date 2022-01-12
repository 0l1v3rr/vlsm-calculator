<script>
    import SubnetRow from "./SubnetRow.svelte";
    import ResultRow from "./ResultRow.svelte";
    import { networks } from './store.js';
    import { onMount } from "svelte";
    import { ipaddr } from './store.js';
    import { subnet } from './store.js';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let subnets = $subnet;
    let ip = $ipaddr;

    $networks.sort(compare);
    let nw = $networks;

    let phase = 2;

    let backBtn;
    let nextBtn;

    onMount(() => {
        backBtn.onclick = () => {
            dispatch("backClicked");
            networks.set([]);
            phase = 2;
        }

        nextBtn.onclick = () => {
            phase = 3;
        }
    });

    function compare(a, b) {
        if (Number(a.size) < Number(b.size)) return 1;
        if (Number(a.size) > Number(b.size)) return -1;
        return 0;
    }

    function calculate(sortedArr) {
        let split = ip.split('.');
        let ipfirst = `${split[0]}.${split[1]}.${split[2]}.`
        let last = -1; 
        
        for(let i = 0; i < sortedArr.length; i++) {
            if(sortedArr[i].size > 256) {
                continue;
            } else if(sortedArr[i].size > 126) {
                if((last + 255) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 255;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "24";
                    sortedArr[i].mask = "255.255.255.0";
                    continue;
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 62) {
                if((last + 127) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 127;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "25";
                    sortedArr[i].mask = "255.255.255.128";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 30) {
                if((last + 63) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 63;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "27";
                    sortedArr[i].mask = "255.255.255.192";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 14) {
                if((last + 31) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 31;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "28";
                    sortedArr[i].mask = "255.255.255.224";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 6) {
                if((last + 15) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 15;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "28";
                    sortedArr[i].mask = "255.255.255.240";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 2) {
                if((last + 7) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 7;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "29";
                    sortedArr[i].mask = "255.255.255.248";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else if(sortedArr[i].size > 0) {
                if((last + 3) < 256) {
                    last += 1;
                    sortedArr[i].network = `${ipfirst}${last}`;
                    last += 3;
                    sortedArr[i].broadcast = `${ipfirst}${last}`;
                    sortedArr[i].prefix = "30";
                    sortedArr[i].mask = "255.255.255.252";
                } else {
                    sortedArr[i].error = true;
                    continue;
                }
            } else {
                sortedArr[i].error = true;
            }
        }

        for(let i = 0; i < sortedArr.length; i++) {
            if(sortedArr[i].broadcast == "") {
                sortedArr[i].error = true;
            }
        }

        return sortedArr;
    }

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

            { #if phase == 2 }
                { #each Array(subnets) as _, i }
                    { #if i == 0 }
                        <SubnetRow border={false} count={i + 1} />
                    { :else }
                        <SubnetRow border={true} count={i + 1} />
                    { /if }
                { /each }
            { :else if phase == 3 }
                { #each calculate(nw.sort(compare)) as net }
                    <ResultRow size={net.size} network={net.network} broadcast={net.broadcast} prefix={net.prefix} mask={net.mask} margin={true} count={net.count} error={net.error} />
                { /each }
            { /if }
            
            <div class="row mt-3"><hr></div>

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