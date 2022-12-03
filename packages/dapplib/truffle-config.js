require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stool decrease place artwork hover civil army genuine'; 
let testAccounts = [
"0x82043b8870e92a1b4dfb2aee7d5f7faba9fd8bde7c6a4bfcbd6e5b1deef5ad3f",
"0x28536d7bd543c9b549ee5265d4811a2105c643b8853afa0520bc51ab13787aeb",
"0x0a9cdbecb1219f1499fe899efcfd3ab7281edd314c243d279e841e5c1689a756",
"0xf08f92961e6f624b10975f7a2a8f839639a81deb2277891ab37986481e2910a2",
"0x5a395ca1935c3e47d27a77747f518ccbeb0a253b5e0ab7afc252c2bf77eb9184",
"0xcfe11174bb9b2532574eef33c9ad1fd111c60f2ec82958e56afa8aec6a338767",
"0xb51df23c57c5579668d4a18844ee676f59e5ddf433e485b4d4d3d6e1ca888266",
"0x2250f76b2081ea22922516386296e58ac63dcf1aea16c8418e4a0ed2a40d9037",
"0xf5a7950ce8052ef41ca13e887e0fdb3b4c218329e78c54e812709a29a2e4b9e1",
"0xd21abdc3014e50f901f87beabf811db3d8293e1d3f2b464f014768ce6730667f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


