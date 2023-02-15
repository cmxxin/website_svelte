<script lang="ts">
	import type { PageServerData } from './$types';
	import Pagination from '$lib/Pagination/index.svelte';

	export let data: PageServerData;
</script>

<p>{data.total}</p>

<Pagination pages={data.total} href={(n) => `/post/page/${n}`} />
