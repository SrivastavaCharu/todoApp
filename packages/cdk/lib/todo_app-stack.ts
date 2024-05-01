import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_lambda,
        aws_dynamodb,
        } from 'aws-cdk-lib'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TodoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const toDoLambda = new cdk.aws_lambda_nodejs.NodejsFunction(this, "ToDoLambda",{
      runtime: aws_lambda.Runtime.NODEJS_20_X,
      architecture: aws_lambda.Architecture.ARM_64,
      entry: "../lambda/src/todoFunc/index.ts"
    })

    const toDoTable = new cdk.aws_dynamodb.Table(this, "ToDoTable",{
      partitionKey: {
        name: "task_num",
        type: aws_dynamodb.AttributeType.NUMBER
      }
    })

    // const toDoAPI = new cdk.aws_apigateway.RestApi(this, "ToDoAPI")
    
  }
}
