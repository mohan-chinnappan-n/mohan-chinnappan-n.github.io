#!groovy
import groovy.json.JsonSlurperClassic
node {

    def BUILD_NUMBER=env.BUILD_NUMBER
    def RUN_ARTIFACT_DIR="tests/${BUILD_NUMBER}"
    def SFDC_USERNAME
    def ALIAS="SORG_${BUILD_NUMBER}"
    def PRE_ALIAS = "SORG_${BUILD_NUMBER - 1}" 

    def HUB_ORG=env.HUB_ORG_DH
    def SFDC_HOST = env.SFDC_HOST_DH
    def JWT_KEY_CRED_ID = env.JWT_CRED_ID_DH
    def CONNECTED_APP_CONSUMER_KEY=env.CONNECTED_APP_CONSUMER_KEY_DH

    def toolbelt = "/usr/local/bin"
    def SORG_DUR = "30"
    def SORG_DEF_FILE ="/tmp/project-scratch-def.json"
    def SOBJ = "Contact"

 
 
 

    withCredentials([file(credentialsId: JWT_KEY_CRED_ID, variable: 'jwt_key_file')]) {

        stage('Create Scratch Org') {
            rc = sh returnStatus: true, script: "${toolbelt}/sfdx force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile ${jwt_key_file} --setdefaultdevhubusername --instanceurl ${SFDC_HOST}"
            if (rc != 0) { error 'hub org authorization failed' }

            // need to pull out assigned username
            rmsg = sh returnStdout: true, script: "${toolbelt}/sfdx force:org:create -d${SORG_DUR} -f ${SORG_DEF_FILE} --json -s -a ${ALIAS}"
            printf rmsg
            def jsonSlurper = new JsonSlurperClassic()
            def robj = jsonSlurper.parseText(rmsg)
            //printf robj.status
            // if (robj.status != "ok") { error 'org creation failed: ' + robj.message }
            SFDC_USERNAME=robj.result.username
            robj = null
        }


        stage('About this org') {
                rc = sh returnStatus: true, script: "${toolbelt}/sfdx mohanc:hello:org --targetusername ${SFDC_USERNAME} "
                if (rc != 0) {
                    error 'about this org failed'
                }
        }


        stage('Get Object Metadata') {
                rc = sh returnStatus: true, script: "${toolbelt}/sfdx mohanc:md:describe -s ${SOBJ} -l none --targetusername ${SFDC_USERNAME} "
                if (rc != 0) {
                    error 'metadata describe failed'
                }
        }

        stage('RT Transform ') {
                rmsg = sh returnStdout: true, script: "${toolbelt}/sfdx mohanc:data:transform:rt  -i /tmp/Accounts.in.json -o /tmp/Accounts.out.json  --targetusername ${SFDC_USERNAME} "
                if (rc != 0) {
                    error 'RT Transform failed'
                }
        }





       /*
        stage('Delete Test Org') {
            timeout(time: 120, unit: 'SECONDS') {
                rc = sh returnStatus: true, script: "${toolbelt}/sfdx force:org:delete --targetusername ${PRE_ALIAS} --noprompt"
                if (rc != 0) {
                    error 'org deletion request failed'
                }
            }
        }
        */




        

       
    } // node
}

