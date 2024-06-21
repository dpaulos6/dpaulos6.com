export default function Head() {
  return (
    <head>
      <title>Diogo Paulos</title>
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#40A2E3" />
      <meta name="msapplication-TileColor" content="#40A2E3" />
      <meta
        name="google-site-verification"
        content="GIEMYYdVuBC-MWItd08APF11prO3MTs2ko1Ifu2jINU"
      />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="https://dpaulos6.xyz/" />
      <meta property="og:site_name" content="Diogo Paulos' Portfolio" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="0" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Diogo Paulos",
              "url": "https://dpaulos6.xyz",
              "image": "https://www.dpaulos6.xyz/_next/image?url=%2Fdpaulos6_nobg.png&w=3840&q=75",
              "sameAs": [
                "https://www.linkedin.com/in/dpaulos6/",
                "https://discord.com/invite/Y7ujpKmmma",
                "https://github.com/dpaulos6",
                "https://www.instagram.com/dpaulos6"
              ],
              "jobTitle": "Frontend Developer Intern",
              "worksFor": {
                "@type": "Organization",
                "name": "Bomsite"
              }
            }
            `
        }}
      ></script>
      <script
        defer
        data-domain="dpaulos6.xyz"
        src="https://stats.wouldyoubot.gg/js/script.js"
      ></script>
    </head>
  )
}
