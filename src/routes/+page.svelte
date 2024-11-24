<script lang="ts">
    import { logger } from '$lib/logger';
    import Hero from '$lib/components/Hero.svelte';
    import UpdateProfile from '$lib/components/UpdateProfile.svelte';

    let { data } = $props();

    let userProfile = $state(data?.userProfile || '');
    let avatar = $state(data?.user?.user_metadata?.avatar_url || '');

    logger.trace('data : ', JSON.stringify(data));
    logger.trace('userProfile : ', userProfile);
</script>

{#if data?.userProfile}
    <UpdateProfile {userProfile} {avatar} />
{:else}
    <Hero />
{/if}
