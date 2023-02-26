import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {

        const success = true;
        const errors = {};

        const data = await request.formData();

        const test = data.get('test');

        console.log('Getting stuff', test, data);

        return { success, errors, test }
    }

} satisfies Actions