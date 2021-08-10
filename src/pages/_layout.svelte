<script>
  import { afterPageLoad } from '@roxi/routify';
  import { isActive, url } from '@roxi/routify';
  import KevinsDecorator from '../functions/KevinsDecorator.svelte';
  import shuffle from '../functions/shuffle';
  import { fly } from 'svelte/transition';

  let colors = [
    '954976', // lila
    '650e0c', // dunkel rot
  	'37b2a6', // cyan blau
    'c6c427' // gelb
  ];

  $afterPageLoad(page => {
    colors = shuffle(colors);
    document.documentElement.style.setProperty('--mainBackgroundColor', '#' + colors[0]);
  });

  const links = [
    ['./index', 'Home'],
    ['./AboutMe', 'Über Mich'],
    ['./MySkillz', 'Meine Skills'],
    ['./Contact', 'Kontakt']
  ];

  let header, menuOpend = false;
</script>

<style>
  :root {
    --mainBackgroundColor: #954976;
    --border: 1px var(--mainBackgroundColor) solid;
  }
  header {
    border-bottom: var(--border);
  }
  header a:hover {
    background-color: var(--mainBackgroundColor);
    color: #ffffff;
  }
  .showMenu {
    display: flex;
    width: 100vw;
    z-index: 99999999;
  }
  .showMenu a {
    color: #ffffff;
  }
  footer {
    border-top: var(--border);
  }
  .active {
    border-bottom: 2px var(--mainBackgroundColor) solid;
  }
</style>

<header transition:fly={{ y: 200, duration: 1055 }} bind:this={header} class:showMenu={menuOpend === true}>
  {#each links as [path, name]}
  <a on:click={() => menuOpend = false} id="Home" class:active={$isActive(path)} href={$url(path)}>{name}</a>
  {/each}
</header>
<slot decorator={KevinsDecorator} />
<footer>
  <a href={$url('./Impressum')}>Impressum</a>
  <a href={$url('./Datenschutz')}>Datenschutz</a>
</footer>
<nav>
  <button on:click={() => menuOpend = !menuOpend} id="menuBtn" class="menuBtn">Menü</button>
</nav>