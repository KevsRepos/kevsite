<script>
  import { url } from '@roxi/routify';
</script>

<svelte:head>
  <title>Mein Stack - Kevin Sheard</title>
</svelte:head>

<main>
  <div class="flex mySkillz">
    <div class="row">
      <p>
        Über die letzten Jahre habe ich mir ein umfassendes Wissen<br />
        über aktuelle Webtechnologien wie HTML5/CSS3,<br />
        PHP und ReactJS aufgebaut<br />
      </p>
      <p>
        Momentan beschäftige ich mich mit dem Framework Ionic.<br />
        Diese Seite zum Beispiel ist mein erstes Projekt in Svelte.
      </p>
      <p>
        Grundsätzlich bin ich offen für alles erdenkliche<br />
        in der Anwendungsentwicklung. Ich lese mich gerne in<br />
        Neue Themen ein und habe keine Scheu davor,<br />
        auch völlig neues zu lernen.
      </p>
    </div>
    <img alt="Dieses Foto habe ich in Jordanien aufgenommen" src="/./images/skillz.jpg" />
  </div>
  <a class="nextSiteBtn" href={$url('./Contact')}>Kontakt ></a>
</main>