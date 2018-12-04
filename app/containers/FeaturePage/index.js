/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>
          <span>Features</span>
        </h1>
        <ul>
          <li>
            <p>
              <span>Quick scaffolding</span>
            </p>
            <p>
              <span>
                Automate the creation of components, containers, routes,
                selectors and sagas - and their tests - right from the CLI!
              </span>
            </p>
          </li>

          <li>
            <p>
              <span>Instant feedback</span>
            </p>
            <p>
              <span>
                Enjoy the best DX and code your app at the speed of thought!
                Your saved changes to the CSS and JS are reflected
                instantaneously without refreshing the page. Preserve
                application state even when you update something in the
                underlying code!
              </span>
            </p>
          </li>

          <li>
            <p>
              <span>Industry-standard routing</span>
            </p>
            <p>
              <span>
                Write composable CSS thats co-located with your components for
                complete modularity. Unique generated class names keep the
                specificity low while eliminating style clashes. Ship only the
                styles that are on the page for the best performance.
              </span>
            </p>
          </li>

          <li>
            <p>
              <span>Offline-first</span>
            </p>
            <p>
              <span>
                The next frontier in performant web apps: availability without a
                network connection from the instant your users load the app.
              </span>
            </p>
          </li>

          <li>
            <p>
              <span>
                Complete i18n Standard Internationalization and Pluralization
              </span>
            </p>
            <p>
              <span>
                Scalable apps need to support multiple languages, easily add and
                support multiple languages with `react-intl`.
              </span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
