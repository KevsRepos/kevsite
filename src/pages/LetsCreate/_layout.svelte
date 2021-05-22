<script>
  import { isActive, url } from '@roxi/routify';

  const links = [
    ['./Apps', 'Apps'],
    ['./Websites', 'Websites']
    // ['./Photography', 'Fotografie']
  ];
</script>

<style>
  main {
    margin: 0;
    top: 5vh;
  }
  nav {
    width: auto;
    background-color: #e0e0e0;
    border: none;
    border-bottom: 1px #e0e0e0 solid;
    border-top: 1px #e0e0e0 solid;
  }
  nav a:hover, .active {
    background-color: #eaeaea;
    color: var(--mainBackgroundColor);
  }
</style>


<nav class="referenceNav">
  {#each links as [path, name]}
    <a class:active={$isActive(path)} href={$url(path)}>{name}</a>
  {/each}
</nav>
<main>
  <slot />
</main>