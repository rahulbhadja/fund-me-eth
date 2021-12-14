import React, { useState, Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <Layout>
          {' '}
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css'
          />
          <h3>Open Campaigns</h3>
          <Button
            floated='right'
            content='Create Campaign'
            icon='add circle'
            primary
          />
          {this.renderCampaigns()}
        </Layout>
      </div>
    );
  }
}

export default CampaignIndex;

// FUNCATIONAL COMPONENT

// const CampaignIndex = ({ campaigns }) => {
//   console.log(campaigns);

//   return <div>{campaigns[0]}</div>;
// };
// CampaignIndex.getInitialProps = async (ctx) => {
//   const campaigns = await factory.methods.getDeployedCampaigns().call();

//   return { campaigns };
// };
