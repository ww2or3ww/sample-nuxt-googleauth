import Vue from 'vue'
import Amplify from 'aws-amplify'
//import awsmobile from '@/aws-exports'
const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    "aws_cognito_identity_pool_id": "",
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": "",
    "aws_user_pools_web_client_id": "",
    "oauth": {
        "domain": "",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "",
        "redirectSignOut": "",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};
awsmobile.aws_cognito_identity_pool_id          = process.env.ENVVAL_AWS_EXPORTS_aws_cognito_identity_pool_id;
awsmobile.aws_user_pools_id                     = process.env.ENVVAL_AWS_EXPORTS_aws_user_pools_id;
awsmobile.aws_user_pools_web_client_id          = process.env.ENVVAL_AWS_EXPORTS_aws_user_pools_web_client_id;
awsmobile.oauth.domain                          = process.env.ENVVAL_AWS_EXPORTS_oauth_domain;
awsmobile.oauth.redirectSignIn                  = process.env.ENVVAL_AWS_EXPORTS_oauth_redirectSignIn;
awsmobile.oauth.redirectSignOut                 = process.env.ENVVAL_AWS_EXPORTS_oauth_redirectSignOut;

Amplify.configure(awsmobile)
Vue.use(Amplify)
