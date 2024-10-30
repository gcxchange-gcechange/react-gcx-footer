  - stage: E2E_test
    condition: always()
    jobs:
      - job: e2etests
        pool:
          vmImage: 'ubuntu-latest'

        steps:
          - task: CmdLine@2
            displayName: 'npm install'
            continueOnError: false
            inputs:
              script: |
                cd haibun
                npm install

          - task: CmdLine@2
            displayName: 'playwright deps'
            continueOnError: false
            inputs:
              script: |
                cd haibun
                npx playwright install

          - task: CmdLine@2
            displayName: 'make junit test directory'
            continueOnError: false
            inputs:
              script: |
                cd haibun
                mkdir junit

          - task: CmdLine@2
            displayName: 'Running basic e2e-basic tests'
            continueOnError: true
            inputs:
              script: |
                cd haibun
                HAIBUN_ENVC="USERNAME=$(test_username),PASSWORD=$(test_password)" HAIBUN_O_WEBPLAYWRIGHT_HEADLESS=true HAIBUN_OUTPUT_DEST=junit/basic.xml HAIBUN_OUTPUT=~@haibun/out-xunit/build/out-xunit HAIBUN_DESCRIPTION="gcx e2e tests" npm run e2e-basic

          # - task: CmdLine@2
          #   displayName: 'Publish test result history'
          #   continueOnError: true
          #   inputs:
          #     script: |
          #       npm run publish-history-azure

          # - task: CmdLine@2
          #   displayName: 'Publish dashboard'
          #   continueOnError: true
          #   inputs:
          #     script: |
          #       pwd
          #       ls -la
          #       npm run publish-reviewer-azure

          - task: PublishTestResults@2
            inputs:
              testResultsFormat: 'JUnit'
              testResultsFiles: 'junit/**.xml'

