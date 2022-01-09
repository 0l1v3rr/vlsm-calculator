<script>

</script>

<main>
    <div class="card">
        <div class="card-body">
            <div class="mb-4">
                <label for="subnets" class="form-label">How many subnets do you need?</label>
                <div class="row">
                    <div class="m-0 col-1"><button class="btn btn-danger w-100">-</button></div>
                    <div class="m-0 col-10"><input type="number" id="subnets" class="form-control" value="2" disabled></div>
                    <div class="m-0 col-1"><button class="btn btn-success w-100">+</button></div>
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
</style>