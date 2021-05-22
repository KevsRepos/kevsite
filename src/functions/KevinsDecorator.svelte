<script>
  import { getContext } from 'svelte';
  import BaseTransition from '@roxi/routify/runtime/decorators/BaseTransition.svelte';
  import { fly } from 'svelte/transition';
  export let scoped = {}
  const ctx = getContext('routify');

  const spectacular = (node, {
    delay = 0,
    duration = 1100
  }) => {
    const o = +getComputedStyle(node).x;

    return {
      delay,
      duration,
      css: t => {
        console.log(t);
        return `transform: translateX(${t * o}) ${t * o}`
      }
    };
  }
  
  $: width = scoped.width || $ctx.parentNode.getBoundingClientRect().width;
  
  $: configs = [
    {
      condition: c => c.routes[0] === c.routes[1],
      transition: fly,
      inParams: {
        x: 2500,
        duration: 50000
      },
      outParams: {
        x: -2500,
        duration: 10000
      }
    },
    {
      // No matching config. We don't want a transition
      condition: () => true,
      transition: fly,
      inParams: {
        x: 2500,
        duration: 900
      },
      outParams: {
        x: -2500,
        duration: 900
      }
    },
  ];
</script>

<BaseTransition {configs} {...scoped}>
  <slot />
</BaseTransition>