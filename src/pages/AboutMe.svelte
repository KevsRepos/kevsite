<script>
  import { url } from '@roxi/routify';
  import { TabsTransition } from '@roxi/routify/decorators';
</script>

<main>
  <div decorator={TabsTransition} class="flex aboutMe">
    <div class="row">
      <p>
        Im Jahr 2000 geboren und im schönen Münsterland aufgewachsen.
      </p>
      <p>
        Mit viel Leidenschaft hab ich die Anwendungsentwicklung mit 13 Jahren entdeckt.<br />
        Dass mir die Webentwicklung am meisten Spaß macht, hat sich langsam mit 14 Jahren<br />
        herauskristallisiert.
      </p>
      <p>
        Von 2019 bis 2020 habe ich in einem lokalen Getränkehandel und Zeltverleih<br />
        gearbeitet viele Erfahrungen sammeln können - auch in der Webentwicklung.<br />
        Um dort meine Arbeit zu erleichtern, habe ich eine Webapp entwickelt,<br />
        welche mir beim Verwalten der Lieferscheine und Bestellungen geholfen hat.<br />
        <a class="externalLink" href="https://github.com/KevsRepos/Workers-0.2">Zum Repo der App</a>
      </p>
    </div>
    <img alt="Ein weiteres Bild von mir" src="/./images/aboutMe.jpeg" />
  </div>
  <a class="nextSiteBtn" href={$url('./MySkillz')}>Meine Skills ></a>
</main>