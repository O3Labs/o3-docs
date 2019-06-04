---
id: externalAccountsCoinbase
title: Coinbase
---

![](/img/coinbase/connect.png)

O3 now allows you to connect your Coinbase account to your existing wallet. This way you can have control over all of your assets in Coinbase custody alongside your local NEO/Ontology private keys in one place.

Currently the beta implementation allows you to connect your account, and to make simple payments via O3 Pay, on the dAPI. O3 Pay enabled apps can now request payments for popular curencies such as BTC/ETH/USDC, and you can pay directly from from your connected Coinbase account just as you would like a NEO/Ontology dAPI transaction.

![](/img/coinbase/dappPaymentRequest.png)

## How to connect

You can either connect your Coinbase account in the settings tab of the wallet, or you will be automatically prompted on your first payment request.

#### From the settings tab:
If you want to connect your Coinbase account beforehand. Click on "Manage External Accounts", and next to Coinbase, click "Connect".

![](/img/coinbase/settingsPage.png)

#### From a payment request
When request for payment comes from the dApp via O3 Pay on the dAPI, and there is no connected Coinbase account, you will be promped to connect. Click the "Connect" button.

![](/img/coinbase/connectOnRequest.png)

### Authorize the connection
You will be directed to the O3 Coinbase Connect page. Which contains a few instructions on how to setup the authorization in order to allow the user to properlly setup their account for payments.

Read the instructions carefully, then click the "Connect" button at the bottom of the page after.

Sign into your Coinbase account, or signup for a new account. If signing up for a new account, you will have to perform KYC and fund your account by attaching a payment method through Coinbase.

Be sure to update the "Debit money from your account" section to specify a daily send limit which matches the amount of fund you would like to be able to send from your account.

![](/img/coinbase/limitUpdate.png)

Once that is complete click "AUTHORIZE".

The O3 wallet should pop up asking you to set a password to secure your account details in your wallet.

This is NOT your Coinbase password. Please keep that to yourself. We do not want it. This is a new password you will set, similar to how you set a password to encrypt your NEO/Ontology private key, this will encrypt your Coinbase access key.

In traditional OAuth connections, a website may choose to keep your authentication credentials on their server on your behalf. Allowing them to execute operations on your behalf. However this would mean they they could debit any amount out of your account without your concent at any later point in time. O3 on the other hand is very commited to self custody where possible, and allows you to keep your access keys stored safely encrypted on your local computer.

![](/img/coinbase/coinbasePass.png)

Once set, you will either be returned to the settings page or continue on your way to making your payment (which ever flow you were previously in).

## Making a payment
Once you have an account connected, anytime a dApp requests a payment, the user will be presented with a notification very similar what they are already used to sending funds with NEO/Ontology.

![](/img/coinbase/paymentConfirm.png)

Upon reviewing the details and clicking "Submit", assuming the amount is within your daily limit, you will be presented with an input for your Coinbase 2FA code. Coinbase requires that you have 2FA enabled in order to make payments in this way.

![](/img/coinbase/payment2fa.png)

Once confirming, you can click "View Transaction" to see the track the state of the transaction on your Coinbase account, or "Ok" to continue back to the dApp.

![](/img/coinbase/paymentConfirmSent.png)

## Updating daily payment limit

In the case that you set a daily limit on the initial authorization that was less than you intented, Coinbase makes it simple for your to just reconnect and set the Daily limit in the say way from the initial connection. Your account will then be updated, you will be asked to reset the passwork in your O3 wallet, and you will be good to go!

In the case that you are in the middle of making a payment, and it detects that your daily limit is not enough, the wallet will automatically promt you to update your connection. Upon updating, it will return you to the requested payment authorization.

If you want to do it manually you can simply navigate to the Settings tab in your wallet, click on "Manage external accounts", click "disconnect", and then Connect again. From here the process will be the same as your first connection.

#### VERY IMPORTANT
When reconnecting, please be sure to up the daily limit. This is how much you can transfer from your account each day.

![](/img/coinbase/screenshotCoinbaseAuth.png)

![](/img/coinbase/screenshotSpendingLimit.png)

## Making the most of your Coinbase connection

Now that you are setup to make payments directly from your Coinbase account let's see how you can maximize it's benefits. First off, if you are in a region which allows you to make a bank transfer purchase of USDC, Coinbase allows you to load up your account with USDC directly from your bank account without any fees, and with that USDC you can make payments without any additional fees (except the Ethereum miner fee if sending on chain, at time of writing about 5 cents). This coupled with your connection in your O3 wallet, you can effectively buy your favorite NEO and Ontology based assets via the O3 Swap dApp. This end to end process provides the the quickest route from your bank account to NEO/ONT with the least amount of fees.

For those of you in regions that do not support the purchase of USDC on Coinbase, this new connection with the O3 wallet also works with other currencies found on Coinbase, such as BTC or ETH. So now when you are using the O3 Swap app to quickly swap your BTC for NEO/ONT, and skip any additionaly KYC, dealing with orderbooks on other exchanges, and paying additional withdraw fees. With this new integration you can make a purchase of NEO/ONT with BTC/ETH/USDC directly from your Coinbase account to your Ledger device.
