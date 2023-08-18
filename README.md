## FakeComm

This is a Fake Ecommerce website created using React (Frontend) and Amazon Web Services (Backend). 

In the frontend, I made use of the context/provider infrastructure, the outlet component for routing, and as componentwise logic as there could be. 

In the backend, I used AWS lambda functions and connected them to APIs I created in API Gateway. All data is stored in DynamoDB and the APIs make calls to it accordingly. Some of the APIs made use of a JWT Authorizer configured from AWS Cognito. All user authentication and authorization was done using Amplify and Cognito. I ensured most best practices I could find were adhered to in the codebase, some of which is ensuring scalability. 

The website is fully deployed on https://d15teow29239xi.cloudfront.net/

For deployment, I used an S3 bucket to store the static assets (came from the production version of the local aka from `npm run build`) of the web application. After testing static deployment using just the bucket, I used the AWS CDN Cloudfront to deploy the website globally. It can be checked out in the above link. 

