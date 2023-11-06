<script setup>
</script>

<template>
  <RouterView />
  <footer>
		<section class="footer-links">
			<ul>
				<li><RouterLink to="/">Home</RouterLink></li>
				<li><RouterLink to="/allfilms">Películas</RouterLink></li>
			</ul>
		</section>
		<section class="footer-logo">
			<div>
				<img src="@/assets/logo.svg" alt="Studio Ghibli">
			</div>
		</section>
	</footer>
</template>

<style scoped>

</style>
