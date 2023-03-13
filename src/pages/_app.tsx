import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'
// import GoogleAnalytics from '../components/GoogleAnalytics'

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <>
      {/* <GoogleAnalytics /> */}
      <Script
        id="google-analytics-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 1500,
            });
            gtag('set', 'ads_data_redaction', true);
          `,
        }}
      />
      <Script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js" data-culture={locale} type="text/javascript" />
      <Script
        id="google-analytics-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWCRZVS');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
