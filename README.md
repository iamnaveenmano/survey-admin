# survey-admin

Live Demo: https://master.d1htewdfqlz7ha.amplifyapp.com/

Pre-requisites:
1. AWS account
2. AWS Amplify, AWS CLI configured in your system

Deployment Steps:
1. Clone this project to your system 
2. cd into the project folder
3. amplify folder will be available on the root level
4. Perform the following commands

* amplify init
 - You will be prompted to enter name of the environment, if you see any existing configurations 
   ignore them and provide a new name for your environment (Eg. dev, prod etc.)
 - Choose your default code editor
 - Choose your configured AWS Profile where you want to deploy your resources
 - Once the project initialization is done run

* amplify status
 - This will show you all the resources which are initialized

* amplify push
 - This will update all the initialized resources

Now all the backend resources are deployed to your respective account.

Running the react app locally:
1. cd frontend/survey-admin
2. npm install
3. Check the aws-exports.js file. The details should exactly match the resources in amplify/backend folder
4. If there are any mismatch, manually update the resources details in aws-exports.js file as this is going to connect
   react app to the backend resources which are deployed in your AWS account
5. npm start. This will start the app at http://localhost:3000/

Publishing the app:
1. Create a repository in your Github account and push this code
2. Log into to your AWS console
3. Go to AWS Amplify
4. Click on "Get Started" under Deploy
5. Select Github as repository and continue
6. Authenticate with GitHub and return to the Amplify console. Choose the repository and master branch you created earlier, then select Next
7. Accept the default build settings and select Next
8. Review the final details and select Save and Deploy
9. AWS Amplify will now build your source code and deploy your app at https://...amplifyapp.com
10. Once the build completes, select the thumbnail to see your web app up and running live
