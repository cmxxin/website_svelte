<script lang="ts">
	export let pages: number;
	export let href: (n: number) => string;

	let range: number[];

	$: {
		range = Array(pages)
			.fill(0)
			.map((_, i) => i + 1);
	}
</script>

{#if pages}
	<nav>
		<ul class="pagination">
			{#each range as page}
				<li class="page-item">
					<a class="page-link" href={href(page)}>{page}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
