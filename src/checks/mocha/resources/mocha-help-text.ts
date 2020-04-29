/* eslint-disable @typescript-eslint/camelcase */

export const mochaSuccesfulOutput = `{ "stats": { "suites": 960, "tests": 2787, "passes": 2787, "pending": 0, "failures": 0, "start": "2018-06-19T11:39:51.415Z", "end": "2018-06-19T11:39:54.615Z", "duration": 3200 }, "tests": [ { "title": "gets default preferences", "fullTitle": "business/notification-preferences getDefaultPreferences gets default preferences", "duration": 4, "currentRetry": 0, "err": {} }, { "title": "gets invites", "fullTitle": "business/user-invites getInvitesByGroup gets invites", "duration": 2, "currentRetry": 0, "err": {} } ], "failures": [] } `

export const mochaFailedOutput: MochaData = {
  stats: {
    suites: 1043,
    tests: 3073,
    passes: 3068,
    pending: 1,
    failures: 4,
    start: '2018-07-02T09:07:25.320Z',
    end: '2018-07-02T09:07:29.044Z',
    duration: 3724
  },
  tests: [
    {
      title: 'gets optimizations by empty allowed workshop ids',
      fullTitle: 'db/vehicles getOptimizations gets optimizations by empty allowed workshop ids',
      duration: 5,
      currentRetry: 0,
      err: {}
    }
  ],
  failures: [
    {
      title: 'gets optimizations by allowed workshop ids',
      fullTitle: 'db/vehicles getOptimizations gets optimizations by allowed workshop ids',
      duration: 12,
      currentRetry: 0,
      err: {
        errorMode: 'default',
        stack:
          "UnexpectedError: \n\u001b[31m\u001b[1mexpected\u001b[22m\u001b[39m \u001b[36m'select `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId!` is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?'\u001b[39m\n\u001b[31m\u001b[1mto be\u001b[22m\u001b[39m \u001b[36m'select `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId` is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?'\u001b[39m\n\n\u001b[31mselect `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId\u001b[39m\u001b[41m\u001b[30m!`\u001b[39m\u001b[49m\u001b[31m is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?\u001b[39m\n\u001b[32mselect `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId\u001b[39m\u001b[42m\u001b[30m`\u001b[39m\u001b[49m\u001b[32m is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?\u001b[39m\n\n    at Context.it (src/data/db/vehicles.get-optimizations.test.js:825:7)\n    set UNEXPECTED_FULL_TRACE=true to see the full stack trace",
        parent: {
          errorMode: 'default',
          parent: {
            errorMode: 'default',
            parent: null,
            name: 'UnexpectedError',
            label: 'should equal'
          },
          name: 'UnexpectedError'
        },
        name: 'UnexpectedError',
        message:
          "\n\u001b[31m\u001b[1mexpected\u001b[22m\u001b[39m \u001b[36m'select `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId!` is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?'\u001b[39m\n\u001b[31m\u001b[1mto be\u001b[22m\u001b[39m \u001b[36m'select `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId` is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?'\u001b[39m\n\n\u001b[31mselect `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId\u001b[39m\u001b[41m\u001b[30m!`\u001b[39m\u001b[49m\u001b[31m is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?\u001b[39m\n\u001b[32mselect `cars`.`id`, `cars`.`obdId`, `cars`.`vin`, `cars`.`name`, `cars`.`label`, `cars`.`imageFilename`, `cars`.`activated`, `cars`.`deviceActivated`, `cars`.`workshopId`, null as `closedAt`, null as `assignedUserId`, `cars`.`createdAt`, `cars`.`updatedAt`, max(`LicensePlates`.`licensePlate`) as `licensePlate` from `cars` left join `LicensePlates` on `LicensePlates`.`carId` = `cars`.`id` where (`cars`.`workshopId` in (?, ?) or `cars`.`workshopId\u001b[39m\u001b[42m\u001b[30m`\u001b[39m\u001b[49m\u001b[32m is null) and `cars`.`archived` = ? group by `cars`.`id` limit ?\u001b[39m\n",
        hasSerializedErrorMessage: true
      }
    },
    {
      currentRetry: 0,
      duration: 8,
      err: {
        hasSerializedErrorMessage: true,
        errorMode: 'default',
        stack:
          "UnexpectedError: expected 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJjb25uZWN0ZWRjYXJzL2FwcCIsImlzcyI6Imh0dHBzOi8vYXV0aC1hcGkiLCJpYXQiOjE1ODIyNDMyMDAsImV4cCI6MTU4MjI0NjgwMH0.gOdbG9xSWKvBbUx9aiO_6QB_iZh4aM2Hw2YTp4XAdqGAq40k43ytaFq26QWe3oOst7l3FyEnzEDpahwWFOoL2S_Ep-GBRhZMPq9MU00gWIPPojVga89qi4-lgEmZtlo2_AL3_wmUMc35VlWfUVmNV0iL1UVyzuLIuMpbS6OBnLQ' to equal 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJjb25uZWN0ZWRjYXJzL2FwcCIsImlzcyI6Imh0dHBzOi8vYXV0aC1hcGkiLCJpYXQiOjE1ODIyMzk2MDAsImV4cCI6MTU4MjI0MzIwMH0.ba977JlCDuIA4L1RIutbvDdqtJ4__Nh8-TF33xZtY0bEf0ggGis_55IGxms_J1UraTZ8IavfebT7m18Op6Fl8ML8LU0esDadhl83VmQA6n77MvtOiiu2fR4VwMPX4Ih6avRKEfIa4DxBc4rhEv90ZYmyhpUfDFemreta92K1rpw' -eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJjb25uZWN0ZWRjYXJzL2FwcCIsImlzcyI6Imh0dHBzOi8vYXV0aC1hcGkiLCJpYXQiOjE1ODIyNDMyMDAsImV4cCI6MTU4MjI0NjgwMH0.gOdbG9xSWKvBbUx9aiO_6QB_iZh4aM2Hw2YTp4XAdqGAq40k43ytaFq26QWe3oOst7l3FyEnzEDpahwWFOoL2S_Ep-GBRhZMPq9MU00gWIPPojVga89qi4-lgEmZtlo2_AL3_wmUMc35VlWfUVmNV0iL1UVyzuLIuMpbS6OBnLQ +eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJjb25uZWN0ZWRjYXJzL2FwcCIsImlzcyI6Imh0dHBzOi8vYXV0aC1hcGkiLCJpYXQiOjE1ODIyMzk2MDAsImV4cCI6MTU4MjI0MzIwMH0.ba977JlCDuIA4L1RIutbvDdqtJ4__Nh8-TF33xZtY0bEf0ggGis_55IGxms_J1UraTZ8IavfebT7m18Op6Fl8ML8LU0esDadhl83VmQA6n77MvtOiiu2fR4VwMPX4Ih6avRKEfIa4DxBc4rhEv90ZYmyhpUfDFemreta92K1rpw at Context.<anonymous> (src/utils/cc-api/connected-cars-api.test.js:111:7) set UNEXPECTED_FULL_TRACE=true to see the full stack trace",
        fullTitle:
          'utils/cc-api/connectedcars-api.js getAccessToken gets a new token if none exists and then reuses it',
        title: 'gets a new token if none exists and then reuses it'
      }
    }
  ]
}
