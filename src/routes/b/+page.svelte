<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../a/$types';

	export let form: ActionData;

	$: console.log('Form received b', form);
	$: console.log('Form from page', $page.form);
</script>

<form method="POST" use:enhance action="/a">
	<input name="test2" value={form?.formData.test2} />

	<button type="submit">sub</button>
</form>
back
<a href="/">back</a>
