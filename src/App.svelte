<script>
	import FirstForm from "./FirstForm.svelte";
</script>

<main class="container">
	<div class="row justify-content-center my-4">
		<div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-6">
			<h2 class="display-6">VLSM calculator</h2>
			<hr>
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-6">
			<FirstForm />
		</div>
	</div>
</main>

<style>
	.display-6 {
		text-align: center;
	}
</style>