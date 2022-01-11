<script>
	import FirstForm from "./FirstForm.svelte";
	import SecondForm from "./SecondForm.svelte";
	import { ipaddr } from './store.js';
    import { subnet } from './store.js';

	let phase = 1;

	function firstFormClick() {
		phase = 2;
	}

	function backClick() {
		phase = 1;
		ipaddr.set("");
		subnet.set(2);
	}
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
			{ #if phase == 1 }
				<FirstForm on:nextClicked={firstFormClick} />
			{ :else if phase == 2 }
				<SecondForm on:backClicked={backClick} />
			{ /if }
		</div>
	</div>
</main>

<style>
	.display-6 {
		text-align: center;
	}
</style>