require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street dash scrub purpose half enroll slot gate'; 
let testAccounts = [
"0x61fcb2e4efef72e2b39e0aea4bb06beb400a6e8a3f064044457f8223fe677c41",
"0x2a47c8eab430326ddec2b6cc272fd9f599f95c57de8708f864df0a945a69b0e3",
"0xb39cfefad5b86a4096244f52a70e7d38a21e8f415c67cb54be4fc57aa535705f",
"0x7f66fbe959e866f65c5abd5746161f228493a583efa36a1f152a1a86aff1c74c",
"0xfdd96cee1d4345b984d5e025989c236f8a6ba82cfcedbd683acc567e391d3d77",
"0x264731c1e9e477eed852397c356b820e332020d05fe084aeee142b2a6cf78aa6",
"0x0c0728e0d4e34888b44ddaba176d84f5ce34d23666beaf2d2782ff7c0caef1c7",
"0x74ec52b3660137e42503ccf7595acead492dc70436b6af37da2cc2934b030eca",
"0x81c4ec497dace83b8a1f1f7b1dcce55077f4956bef140fc60ef4092a619463e6",
"0x276b6e028bc0bbb4c4b737bf14f721402b39178caa7c6fb7fae25f6f34928848"
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


