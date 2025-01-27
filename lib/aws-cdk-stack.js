const { Stack, CfnOutput } = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
// const sqs = require('aws-cdk-lib/aws-sqs');

class AwsCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const myFunction = new lambda.Function(this , "HelloWorldFunction" , {
      runtime : lambda.Runtime.NODEJS_20_X,
      handler : 'index.handler',
      code: lambda.Code.fromInline(
        `
          exports.handler = async function(event) {
            return {
              statusCode: 200,
              body: JSON.stringify('Hello World')
            };
          };
        `
      )
    });


    const myFunctionUrl = myFunction.addFunctionUrl({
      authType : lambda.FunctionUrlAuthType.NONE
    });


    new CfnOutput(this , 'myFunctionUrlOutput' , {
      value:myFunctionUrl.url,
    })
   
  }
}

module.exports = { AwsCdkStack }
