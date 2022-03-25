import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './app.styl';

import UniversalComponent from './components/UniversalComponent';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>ssr</title>
                </Helmet>

                <h1>share ssr ssr srr</h1>
                <UniversalComponent name="getting-started" />
            </div>
        );
    }
}
