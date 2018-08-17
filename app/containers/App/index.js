/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import StakePage from 'containers/StakePage/Loadable';
import ProxyPage from 'containers/ProxyPage/Loadable';
import TransferPage from 'containers/TransferPage/Loadable';
import AirgrabPage from 'containers/AirgrabPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <Layout>
      <Helmet
        titleTemplate="%s - 佳能大户专属投票工具(离线版)"
        defaultTitle="佳能大户专属投票工具(离线版)"
      >
        <meta name="description" content="佳能大户专属投票工具(离线版)" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={StakePage} />
        <Route path="/stake" component={StakePage} />
        <Route path="/proxy" component={ProxyPage} />
        <Route path="/transfer" component={TransferPage} />
        <Route path="/airgrab" component={AirgrabPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Layout>
  );
}
