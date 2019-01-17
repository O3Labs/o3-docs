---
id: ontStake
title: Ontology Staking
---

## What is staking?

Ontology uses the VBFT consensus mechanism to secure it's network. At any given time, there will be 7 nodes who have been voted in by the community to participate in consensus every block. Users vote for nodes that they trust by staking their ONT tokens in multiples of 500 tokens per stake. Users are free to stake in any node they please, change the node they would like to stake their tokens with, and withdraw their staked ONT back into their wallets.

Staking is managed in terms of rounds, which are comprised of 120,000 blocks each. Each block can range from 1 second to 30 seconds (1 when there are transactions queued in the block, and 30 when there are not), which means each round can range in time anywhere from 33 hours to 42 days. When a user stakes their ONT for a node, they are actually locking their ONT in a smart contract for a round to secure their vote. Any time a user would like to add or remove stakes for a node, they can submit a request to carry out that action in the following round.

## Why should you stake?

Besides securing the Ontology network, staking your ONT for a node will help your to earn ONG rewards. Every block that a consensus node processes it will earn a portion of the ONG paid per transaction. At the end of each staking round, the node will distribute any ONG earned to users who staked in to node. The nodes can set a percentage of the ONG to distribute to users, but currently all nodes are contributing 100% of the rewards back to users who authorize their stake (this may change in the future). The amount of ONG you receive will be based on the amount of network traffic from transactions for each round.

In addition to the rewards earned from network fees, staking your ONT for a full calendar month entitles you to bonus ONG rewards provided by Ontology themselves. These additional rewards a promotion for the first year only. The promotional rewards are fixed amounts per stake, and are not affected by the amount of network traffic.

Each ONT you stake will still earn the same amount of ONG (whether it is staked or not).

## How to stake?

First off, in order to stake, you will need at least 500 ONT since each stake is in multiples of 500. If you don't have this amount, but would like to aquire some, here are a few options available to you. You can exchange any other crypto currency into ONT (eg. BTC, ETH), or in come cases even USD via Visa or Mastercard.

- Change Now - Trade brokerage service, BTC, ETH, NEO, etc.
  - [Referral link](https://changenow.io/?link_id=40139a86e3e823)
- Changelly - Trade brokerage service, USD, BTC, ETH, etc.
  - [USD to ONT link](https://old.changelly.com/widget/v1?auth=email&from=USD&to=ONT&merchant_id=rsnwvml870y7nkuf&amount=1000&ref_id=rsnwvml870y7nkuf&color=218fff)
  - [BTC to ONT link](https://old.changelly.com/widget/v1?auth=email&from=BTC&to=ONT&merchant_id=rsnwvml870y7nkuf&amount=1&ref_id=rsnwvml870y7nkuf&color=218fff)
  - [ETH to ONT link](https://old.changelly.com/widget/v1?auth=email&from=ETH&to=ONT&merchant_id=rsnwvml870y7nkuf&amount=10&ref_id=rsnwvml870y7nkuf&color=218fff)
- Binance - Centralized exchange, BTC, ETH, etc.
  - [Referral link](https://www.binance.com/?ref=35555453)

[Download](https://o3.network/) and install the latest O3 desktop app if you have not already done so. If you need help getting set up, please referr to our getting started guides.

- [https://o3.network/](https://o3.network/) - Direct app downloads and links to Apple and Windows app stores
- [Getting started guides](https://medium.com/o3-labs/o3-desktop-setup-guide-dd132ad39d8c)

Staking can be accessed via the Staketology dapp, powered by the O3 Ontology dAPI.

- Open the O3 app
- Navigate to the Apps screen
- Select the Staketology dapp

![](/img/ontStake/appsScreen.png)

Upon opening the Staketology dapp, you will be prompted to connect one of your accounts. Please select the account you would like to manage your stake with, and click "Accept" to initial the connection between your O3 wallet and the Staketology dapp.

![](/img/ontStake/selectWallet.png)

After connecting, you will be on the home screen where your list of current stakes will be present. If you do not currently have any stakes, it should like this. Click on "Create New Stake" or "View all consensus nodes" to start staking or just view the list of available nodes.

![](/img/ontStake/noStakes.png)

After reviewing the list of nodes, select a node to stake by clicking on it's row.

![](/img/ontStake/nodeList.png)

On the node details page you can review and manage any existing stakes or add new stakes. To add a new stake, click the "Stake ONT" button on the top right. In the case where you have less than 500 ONT, this button will be disabled.

![](/img/ontStake/nodeDetails.png)

You will be presented with a modal where you can select the amount of ONT your would like to stake. Please move the slider to adjust the amount of ONT your would like to stake, and click "Stake Ontology". The slider will move in intervals of 500, each representing 1 stake.

![](/img/ontStake/addStake.png)

Upon submitting, the O3 wallet will request your approval to sign and submit the stake transaction requested by the Staketology dapp. Review the transaction details, and click "Approve" if you would like to proceed.

![](/img/ontStake/approveAdd.png)

On the next block, your newly added stake will be listed as a "Pending deposit", and will be automatically moved to "Active" at the beginning of the next staking round.

![](/img/ontStake/pendingAdd.png)

Now you are all set! Once the next staking round starts, you will start earning staking rewards!

## How to claim rewards?

On the left-hand side of the Staketology home screen you will find the total rewards that you have earned. This will be updated at the end of each staking round. You can then at anytime collect your rewards by clicking on the "Redeem" button.

![](/img/ontStake/rewards.png)

Upon approving the transaction in your O3 wallet, your ONG will be in your wallet in the following block.

![](/img/ontStake/approveRewards.png)

## How to claim ONG?

On the left-hand side of the Staketology home screen you will find the unclaimed ONG that your staked ONT has accumulated. The accumulate rate is exactly the same as if the ONT were not staked, however the way to claim this ONG is different. You can claim your ONG at anytime by clicking on the "Claim" button.

![](/img/ontStake/claim.png)

Upon approving the transaction in your O3 wallet, your ONG will be in your wallet in the following block.

![](/img/ontStake/approveClaim.png)
