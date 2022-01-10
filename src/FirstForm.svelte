<script>
    import { onMount } from "svelte";    

    let subnets = 2;
    let decreaseBtn;
    let increaseBtn;

    onMount(() => {
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
    });
</script>

<main>
    <div class="card">
        <div class="card-body">
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
                <label for="ip" class="form-label">Base IP Address</label>
                <div class="input-group">
                    <input id="ip" type="text" class="form-control" placeholder="192.168.0.1">
                    <span class="input-group-text">/24</span>
                </div>
            </div>
            
            <button class="btn btn-primary">NEXT</button>
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