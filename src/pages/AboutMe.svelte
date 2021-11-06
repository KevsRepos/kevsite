<script>
  import { url } from '@roxi/routify';
  import { TabsTransition } from '@roxi/routify/decorators';
</script>

<style>
.noPadding {
  padding: 0px;
}
</style>

<svelte:head>
  <title>Über Mich - Kevin Sheard</title>
</svelte:head>

<main>
  <div decorator={TabsTransition} class="flex aboutMe">
    <div class="row">
      <p>
        Im Jahr 2000 geboren und im schönen Münsterland aufgewachsen.
      </p>
      <p>
        Seit meiner Jugend beschäftige ich mich mit dem Thema Programmieren. Seit den letzten Jahren nahezu täglich<br />
        Dabei fokussiere ich mich auf die Webentwicklung mit HTML/CSS, Javascript und PHP.
      </p>
      <p>
        Von 2019 bis 2020 habe ich in einem lokalen Getränkehandel und Zeltverleih<br />
        gearbeitet viele Erfahrungen sammeln können - auch in der Webentwicklung.<br />
        Um dort meine Arbeit zu erleichtern, habe ich eine Webapp entwickelt,<br />
        welche mir beim Verwalten der Lieferscheine und Bestellungen geholfen hat.<br />
        <a class="externalLink" target="_blank"  href="https://github.com/KevsRepos/Workers-0.2">Zum Repo der App</a>
      </p>
      <p>
        Derzeit arbeite ich bei <a class="externalLink noPadding" target="_blank"  href="https://grillfuerst.de">Grillfürst</a> als PHP Entwickler.
      </p>
    </div>
    <img alt="Ein weiteres Bild von mir" src="/./images/aboutMe.jpeg" />
  </div>
  <a class="nextSiteBtn" href={$url('./MySkillz')}>Meine Skills ></a>
</main>