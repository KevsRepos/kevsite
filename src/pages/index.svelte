<script>
  const age = Math.abs(new Date(Date.now() - new Date(2000, 3, 17)).getUTCFullYear() - 1970);
</script>

<main>
  <div class="flex home">
    <p>
      Ich bin Kevin Sheard,<br /> 
      {age} Jahre alt und<br />
      Webentwickler.
    </p>
    <img alt="Das bin ich" src="/./images/landing.jpeg" />
  </div>
  <a class="nextSiteBtn" href="/AboutMe">Über Mich ></a>
</main>