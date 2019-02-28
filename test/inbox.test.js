const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile');
const web3 = new Web3(ganache.provider());


let inbox;

beforeEach(()=>{

    //Get a list of all accounts
    web3.eth.getAccounts().then( accounts => {
        console.log(accounts);
    });

    new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: ['Hi there!']})
    .send({ from : accounts[0], gas: '1,000,000'})
});

describe('Inbox',()=>{
    it('it deploys a contract',()=>{});
});