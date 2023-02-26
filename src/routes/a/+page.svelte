<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	$: console.log('Form received', form, form?.formData?.test);
</script>

<form method="POST" use:enhance>
	<input name="test" value={form?.formData?.test} />

	<button type="submit">sub</button>
</form>

back
<a href="/">back</a>
