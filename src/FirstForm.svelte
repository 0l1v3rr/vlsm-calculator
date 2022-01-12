<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from 'svelte';
    import { ipaddr } from './store.js';
    import { subnet } from './store.js';
    const dispatch = createEventDispatcher();

    let subnets = $subnet;
    let ip = $ipaddr;

    let decreaseBtn;
    let increaseBtn;
    let errorBox;
    let ipInput;

    let nextBtn;
    let clearBtn;

    onMount(() => {
        nextBtn.disabled = true;

        ipInput.onkeyup = () => {
            if(ip != "") {
                errorBox.style.display = 'none';
            }

            if(isValidIp(ip)) {
                nextBtn.disabled = false;
            } else {
                nextBtn.disabled = true;
            }
        }
        
        errorBox.style.display = 'none';
        
        if(subnets <= 2) {
            decreaseBtn.disabled = true;
            increaseBtn.disabled = false;
        } else if (subnets >= 128) {
            decreaseBtn.disabled = false;
            increaseBtn.disabled = true;
        } else {
            decreaseBtn.disabled = false;
            increaseBtn.disabled = false;
        }

        decreaseBtn.onclick = () => {
            subnets--;

            if(subnets <= 2) {
                decreaseBtn.disabled = true;
                increaseBtn.disabled = false;
            } else if (subnets >= 128) {
                decreaseBtn.disabled = false;
                increaseBtn.disabled = true;
            } else {
                decreaseBtn.disabled = false;
                increaseBtn.disabled = false;
            }
        }

        increaseBtn.onclick = () => {
            subnets++;

            if(subnets <= 2) {
                decreaseBtn.disabled = true;
                increaseBtn.disabled = false;
            } else if (subnets >= 128) {
                decreaseBtn.disabled = false;
                increaseBtn.disabled = true;
            } else {
                decreaseBtn.disabled = false;
                increaseBtn.disabled = false;
            }
        }

        nextBtn.onclick = () => {
            if(isValidIp(ip)) {
                errorBox.style.display = 'none';
                dispatch("nextClicked");
                
                ip = ip.split('.');
                ip[ip.length - 1] = 0;
                ip = ip.join('.');
                ipaddr.set(ip);
                subnet.set(subnets);
            } else {
                errorBox.style.display = 'block';
                errorBox.innerText = 'This IP address is not valid.'
            }
        }

        clearBtn.onclick = () => {
            ip = "";
            subnets = 2;
            nextBtn.disabled = true;
            decreaseBtn.disabled = true;
        }
    });

    function isValidIp(ipaddr) {
        let splitted = ipaddr.split('.');
        if(splitted.length != 4) {
            return false;
        }

        for(let o of splitted) {
            if(o == null || o == "") return false;

            let converted = Number(o);
            if(isNaN(converted)) return false

            if(converted < 0) return false;

            if(converted > 255) return false;
        }

        return true;
    }
</script>

<main>
    <div class="card">
        <div class="card-body">
            <div bind:this={errorBox} class="alert alert-danger" role="alert">
                This IP address is not valid.
            </div>

            <div class="mb-4">
                <label for="subnets" class="form-label">How many subnets do you need?</label>
                <div class="row">
                    <div class="m-0 col-1"><button bind:this={decreaseBtn} class="btn btn-danger w-100">-</button></div>
                    <div class="m-0 col-10"><input type="number" id="subnets" class="form-control text-align-center" bind:value={subnets} disabled></div>
                    <div class="m-0 col-1"><button bind:this={increaseBtn} class="btn btn-success w-100">+</button></div>
                </div>
            </div>

            <hr class="my-3">

            <div class="my-4">
                <label for="ip" class="form-label">Major Network</label>
                <div class="input-group">
                    <input bind:this={ipInput} bind:value={ip} id="ip" type="text" class="form-control" placeholder="192.168.1.0" required>
                    <span class="input-group-text">/24</span>
                </div>
            </div>
            
            <button bind:this={clearBtn} class="btn btn-secondary">CLEAR</button>
            <button bind:this={nextBtn} class="btn btn-primary">NEXT</button>
        </div>
    </div>
</main>

<style>
    .w-100 {
        width: 100%;
        font-weight: 500;
    }
    .text-align-center {
        text-align: center;
    }
</style>