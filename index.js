let walletAddresses, walletAddress

void async function main() {
  // wait 2 second
  console.log('waiting 1/2 seconds...')
  await new Promise(cb => setTimeout(cb, 500))

  await detectMetaMask()

  console.log(walletAddress)

  if (walletAddress) {

  } else {
    $('#metamask-message').removeClass('hide')
  }

}()

async function detectMetaMask() {

  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      walletAddresses = await ethereum.enable();
      walletAddress = walletAddresses[0]
      // Acccounts now exposed
      // web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
      console.log('ask the user to login to their metamask to continue')
    }
  }

  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    // web3.eth.sendTransaction({/* ... */});
    walletAddresses = window.web3.eth.accounts
    walletAddress = walletAddresses[0]
  }

  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    $('#metamask-message').removeClass('hide')
  }

}
