<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { ActionData, PageData } from './$types';
	export let data: PageData;
	export let form: ActionData;

	$: console.log('Form received', form, form?.test, data);
	$: console.log('Form from page', $page.form, data);
</script>

<form method="POST" use:enhance>
	<input name="test" value={$page.form?.test ?? ''} />
	<button type="submit">sub</button>
</form>

back
<a href="/">back</a>
