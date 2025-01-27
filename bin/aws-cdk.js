#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { AwsCdkStack } = require('../lib/aws-cdk-stack');

const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {

  env: { account: '123456789012', region: 'us-east-1' },

  
});
