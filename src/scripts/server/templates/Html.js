import serialize from 'serialize-javascript';

const { object, string } = PropTypes;

const Html = ({ state, assets, head, body }) => {
  const { scripts, styles } = assets;
  const serializedState = serialize(state);

  // TODO: appcache disabled for now, learn all the things & set it up correctly
  // const htmlProps = { manifest: 'manifest.appcache' };

  return (
    <html lang='en-us'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta httpEquiv='cleartype' content='on' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {head && head.title.toComponent()}
        {head && head.meta.toComponent()}
        {head && head.link.toComponent()}

        <link rel='apple-touch-icon' sizes='57x57' href='/apple-touch-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-touch-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-touch-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-touch-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-touch-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-touch-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />

        <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='/android-chrome-192x192.png' sizes='192x192' />
        <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />

        <meta name='mobile-web-app-capable' content='yes' />

        <meta name='apple-mobile-web-app-title' content={settings.name} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

        <meta name='format-detection' content='telephone=no' />
        <meta name='format-detection' content='address=no' />

        <meta name='HandheldFriendly' content='True' />

        <meta name='application-name' content={settings.name} />

        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />

        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />

        {styles.map((href, i) => <link key={i} href={`/${href}`} rel='stylesheet' />)}
      </head>

      <body>
        <div id='root' dangerouslySetInnerHTML={{ __html: body }} />
        <script dangerouslySetInnerHTML={{ __html: `window.__state = ${serializedState};` }} />
        {scripts.map((src, i) => <script key={i} src={`/${src}`} defer />)}
      </body>
    </html>
  );
};

Html.propTypes = {
  state: object.isRequired,
  head: object.isRequired,
  assets: object.isRequired,
  body: string.isRequired,
};

export default Html;
