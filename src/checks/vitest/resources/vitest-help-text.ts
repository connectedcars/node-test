import { FormattedTestResults } from '../vitest'

export const vitestNotFound = `{ "error": { "code": "ELIFECYCLE", "summary": "ci-tools@1.0.0 test: \`vitest\`\\nExit status 1", "detail": "\\nFailed at the ci-tools@1.0.0 test script.\\nThis is probably not a problem with npm. There is likely additional logging output above." } }`

export const vitestSuccessfulOutput = {
  numTotalTestSuites: 65,
  numPassedTestSuites: 65,
  numFailedTestSuites: 0,
  numPendingTestSuites: 0,
  numTotalTests: 116,
  numPassedTests: 116,
  numFailedTests: 0,
  numPendingTests: 0,
  numTodoTests: 0,
  startTime: 1687336134645,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount handles no fleets and workshops',
          status: 'passed',
          title: 'handles no fleets and workshops',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets fleet product count',
          status: 'passed',
          title: 'gets fleet product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets workshop product count',
          status: 'passed',
          title: 'gets workshop product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with single entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with single entries',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with multiple entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with multiple entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet',
          status: 'passed',
          title: 'only has one fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one workshop',
          status: 'passed',
          title: 'only has one workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336138578,
      endTime: 1687336138579,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/permissions/product-scope.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle seconds correctly',
          status: 'passed',
          title: 'should handle seconds correctly',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle minutes correctly',
          status: 'passed',
          title: 'should handle minutes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle hours correctly',
          status: 'passed',
          title: 'should handle hours correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle days correctly',
          status: 'passed',
          title: 'should handle days correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle months correctly',
          status: 'passed',
          title: 'should handle months correctly',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle years correctly',
          status: 'passed',
          title: 'should handle years correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle relative time',
          status: 'passed',
          title: 'should handle relative time',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336138579,
      endTime: 1687336138586,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/date.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'day', 'getDayFromDate'],
          fullName: ' day getDayFromDate returns the correct day of week',
          status: 'passed',
          title: 'returns the correct day of week',
          duration: 2,
          failureMessages: []
        }
      ],
      startTime: 1687336138870,
      endTime: 1687336138872,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/day.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'hhmm', 'formatHHMM'],
          fullName: ' hhmm formatHHMM formats hours',
          status: 'passed',
          title: 'formats hours',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687336138783,
      endTime: 1687336138784,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/hhmm.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour-slots', 'getOpenHourSlotsFromOpenHours'],
          fullName: ' open-hour-slots getOpenHourSlotsFromOpenHours formats summaries',
          status: 'passed',
          title: 'formats summaries',
          duration: 2,
          failureMessages: []
        }
      ],
      startTime: 1687336136640,
      endTime: 1687336136642,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour-slots.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours without siestas',
          status: 'passed',
          title: 'parses open hours without siestas',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours with siestas',
          status: 'passed',
          title: 'parses open hours with siestas',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName:
            ' open-hour getMappedOpenHoursFromOpenHours parses multiple open hours same day with siesta disabled',
          status: 'passed',
          title: 'parses multiple open hours same day with siesta disabled',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses overlapping open hours',
          status: 'passed',
          title: 'parses overlapping open hours',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses invalid open hour where from is after to',
          status: 'passed',
          title: 'parses invalid open hour where from is after to',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses malformed open hour',
          status: 'passed',
          title: 'parses malformed open hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHoursFromMappedOpenHours'],
          fullName: ' open-hour getOpenHoursFromMappedOpenHours to work',
          status: 'passed',
          title: 'to work',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule returns the next opening hour',
          status: 'passed',
          title: 'returns the next opening hour',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule only open once per week',
          status: 'passed',
          title: 'only open once per week',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule overnight',
          status: 'passed',
          title: 'overnight',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next open with hole',
          status: 'passed',
          title: 'next open with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next overnight with hole',
          status: 'passed',
          title: 'next overnight with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule 24/7',
          status: 'passed',
          title: '24/7',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles no hours',
          status: 'passed',
          title: 'handles no hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles a single hour',
          status: 'passed',
          title: 'handles a single hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours without overlaps',
          status: 'passed',
          title: 'handles multiple hours without overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours with overlaps',
          status: 'passed',
          title: 'handles multiple hours with overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour'],
          fullName: ' open-hour sortOpenHour',
          status: 'passed',
          title: 'sortOpenHour',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336136099,
      endTime: 1687336136106,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByUserName',
          status: 'passed',
          title: 'sortByUserName',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByVehicleActivity',
          status: 'passed',
          title: 'sortByVehicleActivity',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336139320,
      endTime: 1687336139321,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/sort.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336136501,
      endTime: 1687336136503,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/testing-domains.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getProviderFromUnitHardwareProvider'],
          fullName: ' unit-hardware-provider getProviderFromUnitHardwareProvider returns correct providers',
          status: 'passed',
          title: 'returns correct providers',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getUnitHardwareProviderPrefix'],
          fullName: ' unit-hardware-provider getUnitHardwareProviderPrefix prefixes correctly',
          status: 'passed',
          title: 'prefixes correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes traffilog',
          status: 'passed',
          title: 'correctly sanitizes traffilog',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes iwave',
          status: 'passed',
          title: 'correctly sanitizes iwave',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes sti',
          status: 'passed',
          title: 'correctly sanitizes sti',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336136666,
      endTime: 1687336136668,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/unit-hardware-provider.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX supports all valid vin characters',
          status: 'passed',
          title: 'supports all valid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX fails on invalid vin characters',
          status: 'passed',
          title: 'fails on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX can validate valid vins',
          status: 'passed',
          title: 'can validate valid vins',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on vins with invalid characters (I, O, Q)',
          status: 'passed',
          title: 'fails on vins with invalid characters (I, O, Q)',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too long vins',
          status: 'passed',
          title: 'fails on too long vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too short vins',
          status: 'passed',
          title: 'fails on too short vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX succeeds on invalid vin characters',
          status: 'passed',
          title: 'succeeds on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX fails on valid vins',
          status: 'passed',
          title: 'fails on valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'validateVIN'],
          fullName: ' vin validateVIN can validate',
          status: 'passed',
          title: 'can validate',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336135638,
      endTime: 1687336135639,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/vin.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricTarget'],
          fullName: ' workshop-metrics getWorkshopMetricTarget returns the correct target',
          status: 'passed',
          title: 'returns the correct target',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend ignores null current values',
          status: 'passed',
          title: 'ignores null current values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports stale values',
          status: 'passed',
          title: 'supports stale values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports increasing values',
          status: 'passed',
          title: 'supports increasing values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports decreasing values',
          status: 'passed',
          title: 'supports decreasing values',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336136164,
      endTime: 1687336136166,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/workshop-metrics.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns null on system messages',
          status: 'passed',
          title: 'returns null on system messages',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a first name',
          status: 'passed',
          title: 'returns a first name',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a last name',
          status: 'passed',
          title: 'returns a last name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name',
          status: 'passed',
          title: 'returns a full name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and workshop',
          status: 'passed',
          title: 'returns a full name and workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and fleet',
          status: 'passed',
          title: 'returns a full name and fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns empty string when no name',
          status: 'passed',
          title: 'returns empty string when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns workshop when no name',
          status: 'passed',
          title: 'returns workshop when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns fleet when no name',
          status: 'passed',
          title: 'returns fleet when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336138578,
      endTime: 1687336138582,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Chat/conversation-helpers.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a normal week',
          status: 'passed',
          title: 'should render a normal week',
          duration: 7,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should have multiple open hours in a single day',
          status: 'passed',
          title: 'should have multiple open hours in a single day',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render overnights',
          status: 'passed',
          title: 'should render overnights',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a one day week',
          status: 'passed',
          title: 'should render a one day week',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render permanently closed',
          status: 'passed',
          title: 'should render permanently closed',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687336138577,
      endTime: 1687336138591,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/OpenHours/OpenHoursToday.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render',
          status: 'passed',
          title: 'should render',
          duration: 10,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render with JSX',
          status: 'passed',
          title: 'should render with JSX',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should return null',
          status: 'passed',
          title: 'should return null',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should return null',
          status: 'passed',
          title: 'should return null',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should return not allowed',
          status: 'passed',
          title: 'should return not allowed',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336136100,
      endTime: 1687336136114,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Permission/Permission.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission both simple',
          status: 'passed',
          title: 'both simple',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple',
          status: 'passed',
          title: 'complex with simple',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex',
          status: 'passed',
          title: 'simple with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex and scope',
          status: 'passed',
          title: 'simple with complex and scope',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple and scope',
          status: 'passed',
          title: 'complex with simple and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with complex',
          status: 'passed',
          title: 'complex with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with different scopes',
          status: 'passed',
          title: 'complex with different scopes',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasRequired',
          status: 'passed',
          title: '_hasRequired',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasOneOf',
          status: 'passed',
          title: '_hasOneOf',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687336136099,
      endTime: 1687336136103,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/access-logic.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can set permissions',
          status: 'passed',
          title: 'can set permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can get permissions',
          status: 'passed',
          title: 'can get permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any workshop permissions',
          status: 'passed',
          title: 'has any workshop permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any fleet permissions',
          status: 'passed',
          title: 'has any fleet permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any vehicle permissions',
          status: 'passed',
          title: 'has any vehicle permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions require',
          status: 'passed',
          title: 'require',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions oneOf',
          status: 'passed',
          title: 'oneOf',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions both require and oneOf',
          status: 'passed',
          title: 'both require and oneOf',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687336136094,
      endTime: 1687336136097,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/index.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator parses columns to structure',
          status: 'passed',
          title: 'parses columns to structure',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator is immutableish',
          status: 'passed',
          title: 'is immutableish',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator adds variables to structure',
          status: 'passed',
          title: 'adds variables to structure',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator correctly renders graphql union/interface types',
          status: 'passed',
          title: 'correctly renders graphql union/interface types',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687336138907,
      endTime: 1687336138912,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/graphql/query-generator.test.ts'
    }
  ]
}

export const vitestPassedOutput: FormattedTestResults = {
  numTotalTestSuites: 65,
  numPassedTestSuites: 65,
  numFailedTestSuites: 0,
  numPendingTestSuites: 0,
  numTotalTests: 116,
  numPassedTests: 116,
  numFailedTests: 0,
  numPendingTests: 0,
  numTodoTests: 0,
  startTime: 1687333101479,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount handles no fleets and workshops',
          status: 'passed',
          title: 'handles no fleets and workshops',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets fleet product count',
          status: 'passed',
          title: 'gets fleet product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets workshop product count',
          status: 'passed',
          title: 'gets workshop product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with single entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with single entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with multiple entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with multiple entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet',
          status: 'passed',
          title: 'only has one fleet',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one workshop',
          status: 'passed',
          title: 'only has one workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333105151,
      endTime: 1687333105153,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/permissions/product-scope.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle seconds correctly',
          status: 'passed',
          title: 'should handle seconds correctly',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle minutes correctly',
          status: 'passed',
          title: 'should handle minutes correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle hours correctly',
          status: 'passed',
          title: 'should handle hours correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle days correctly',
          status: 'passed',
          title: 'should handle days correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle months correctly',
          status: 'passed',
          title: 'should handle months correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle years correctly',
          status: 'passed',
          title: 'should handle years correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle relative time',
          status: 'passed',
          title: 'should handle relative time',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333105148,
      endTime: 1687333105154,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/date.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'day', 'getDayFromDate'],
          fullName: ' day getDayFromDate returns the correct day of week',
          status: 'passed',
          title: 'returns the correct day of week',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333105458,
      endTime: 1687333105459,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/day.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'hhmm', 'formatHHMM'],
          fullName: ' hhmm formatHHMM formats hours',
          status: 'passed',
          title: 'formats hours',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333103276,
      endTime: 1687333103277,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/hhmm.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour-slots', 'getOpenHourSlotsFromOpenHours'],
          fullName: ' open-hour-slots getOpenHourSlotsFromOpenHours formats summaries',
          status: 'passed',
          title: 'formats summaries',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333105467,
      endTime: 1687333105468,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour-slots.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours without siestas',
          status: 'passed',
          title: 'parses open hours without siestas',
          duration: 4,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours with siestas',
          status: 'passed',
          title: 'parses open hours with siestas',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName:
            ' open-hour getMappedOpenHoursFromOpenHours parses multiple open hours same day with siesta disabled',
          status: 'passed',
          title: 'parses multiple open hours same day with siesta disabled',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses overlapping open hours',
          status: 'passed',
          title: 'parses overlapping open hours',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses invalid open hour where from is after to',
          status: 'passed',
          title: 'parses invalid open hour where from is after to',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses malformed open hour',
          status: 'passed',
          title: 'parses malformed open hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHoursFromMappedOpenHours'],
          fullName: ' open-hour getOpenHoursFromMappedOpenHours to work',
          status: 'passed',
          title: 'to work',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule returns the next opening hour',
          status: 'passed',
          title: 'returns the next opening hour',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule only open once per week',
          status: 'passed',
          title: 'only open once per week',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule overnight',
          status: 'passed',
          title: 'overnight',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next open with hole',
          status: 'passed',
          title: 'next open with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next overnight with hole',
          status: 'passed',
          title: 'next overnight with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule 24/7',
          status: 'passed',
          title: '24/7',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles no hours',
          status: 'passed',
          title: 'handles no hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles a single hour',
          status: 'passed',
          title: 'handles a single hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours without overlaps',
          status: 'passed',
          title: 'handles multiple hours without overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours with overlaps',
          status: 'passed',
          title: 'handles multiple hours with overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour'],
          fullName: ' open-hour sortOpenHour',
          status: 'passed',
          title: 'sortOpenHour',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333102924,
      endTime: 1687333102935,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByUserName',
          status: 'passed',
          title: 'sortByUserName',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByVehicleActivity',
          status: 'passed',
          title: 'sortByVehicleActivity',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333105888,
      endTime: 1687333105889,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/sort.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333102471,
      endTime: 1687333102472,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/testing-domains.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getProviderFromUnitHardwareProvider'],
          fullName: ' unit-hardware-provider getProviderFromUnitHardwareProvider returns correct providers',
          status: 'passed',
          title: 'returns correct providers',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getUnitHardwareProviderPrefix'],
          fullName: ' unit-hardware-provider getUnitHardwareProviderPrefix prefixes correctly',
          status: 'passed',
          title: 'prefixes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes traffilog',
          status: 'passed',
          title: 'correctly sanitizes traffilog',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes iwave',
          status: 'passed',
          title: 'correctly sanitizes iwave',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes sti',
          status: 'passed',
          title: 'correctly sanitizes sti',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333103446,
      endTime: 1687333103447,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/unit-hardware-provider.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX supports all valid vin characters',
          status: 'passed',
          title: 'supports all valid vin characters',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX fails on invalid vin characters',
          status: 'passed',
          title: 'fails on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX can validate valid vins',
          status: 'passed',
          title: 'can validate valid vins',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on vins with invalid characters (I, O, Q)',
          status: 'passed',
          title: 'fails on vins with invalid characters (I, O, Q)',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too long vins',
          status: 'passed',
          title: 'fails on too long vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too short vins',
          status: 'passed',
          title: 'fails on too short vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX succeeds on invalid vin characters',
          status: 'passed',
          title: 'succeeds on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX fails on valid vins',
          status: 'passed',
          title: 'fails on valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'validateVIN'],
          fullName: ' vin validateVIN can validate',
          status: 'passed',
          title: 'can validate',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333104025,
      endTime: 1687333104027,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/vin.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricTarget'],
          fullName: ' workshop-metrics getWorkshopMetricTarget returns the correct target',
          status: 'passed',
          title: 'returns the correct target',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend ignores null current values',
          status: 'passed',
          title: 'ignores null current values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports stale values',
          status: 'passed',
          title: 'supports stale values',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports increasing values',
          status: 'passed',
          title: 'supports increasing values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports decreasing values',
          status: 'passed',
          title: 'supports decreasing values',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333102866,
      endTime: 1687333102868,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/workshop-metrics.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns null on system messages',
          status: 'passed',
          title: 'returns null on system messages',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a first name',
          status: 'passed',
          title: 'returns a first name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a last name',
          status: 'passed',
          title: 'returns a last name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name',
          status: 'passed',
          title: 'returns a full name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and workshop',
          status: 'passed',
          title: 'returns a full name and workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and fleet',
          status: 'passed',
          title: 'returns a full name and fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns empty string when no name',
          status: 'passed',
          title: 'returns empty string when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns workshop when no name',
          status: 'passed',
          title: 'returns workshop when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns fleet when no name',
          status: 'passed',
          title: 'returns fleet when no name',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333105148,
      endTime: 1687333105151,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Chat/conversation-helpers.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a normal week',
          status: 'passed',
          title: 'should render a normal week',
          duration: 5,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should have multiple open hours in a single day',
          status: 'passed',
          title: 'should have multiple open hours in a single day',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render overnights',
          status: 'passed',
          title: 'should render overnights',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a one day week',
          status: 'passed',
          title: 'should render a one day week',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render permanently closed',
          status: 'passed',
          title: 'should render permanently closed',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333105148,
      endTime: 1687333105161,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/OpenHours/OpenHoursToday.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render',
          status: 'passed',
          title: 'should render',
          duration: 7,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render with JSX',
          status: 'passed',
          title: 'should render with JSX',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should return not allowed',
          status: 'passed',
          title: 'should return not allowed',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333102913,
      endTime: 1687333102924,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Permission/Permission.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission both simple',
          status: 'passed',
          title: 'both simple',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple',
          status: 'passed',
          title: 'complex with simple',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex',
          status: 'passed',
          title: 'simple with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex and scope',
          status: 'passed',
          title: 'simple with complex and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple and scope',
          status: 'passed',
          title: 'complex with simple and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with complex',
          status: 'passed',
          title: 'complex with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with different scopes',
          status: 'passed',
          title: 'complex with different scopes',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasRequired',
          status: 'passed',
          title: '_hasRequired',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasOneOf',
          status: 'passed',
          title: '_hasOneOf',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333105459,
      endTime: 1687333105462,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/access-logic.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can set permissions',
          status: 'passed',
          title: 'can set permissions',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can get permissions',
          status: 'passed',
          title: 'can get permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any workshop permissions',
          status: 'passed',
          title: 'has any workshop permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any fleet permissions',
          status: 'passed',
          title: 'has any fleet permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any vehicle permissions',
          status: 'passed',
          title: 'has any vehicle permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions require',
          status: 'passed',
          title: 'require',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions oneOf',
          status: 'passed',
          title: 'oneOf',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions both require and oneOf',
          status: 'passed',
          title: 'both require and oneOf',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333102866,
      endTime: 1687333102873,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/index.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator parses columns to structure',
          status: 'passed',
          title: 'parses columns to structure',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator is immutableish',
          status: 'passed',
          title: 'is immutableish',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator adds variables to structure',
          status: 'passed',
          title: 'adds variables to structure',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator correctly renders graphql union/interface types',
          status: 'passed',
          title: 'correctly renders graphql union/interface types',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333103080,
      endTime: 1687333103085,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/graphql/query-generator.test.ts'
    }
  ]
}

export const vitestSkippedOutput: FormattedTestResults = {
  numTotalTestSuites: 65,
  numPassedTestSuites: 65,
  numFailedTestSuites: 0,
  numPendingTestSuites: 0,
  numTotalTests: 116,
  numPassedTests: 116,
  numFailedTests: 0,
  numPendingTests: 0,
  numTodoTests: 0,
  startTime: 1687335818196,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount handles no fleets and workshops',
          status: 'passed',
          title: 'handles no fleets and workshops',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets fleet product count',
          status: 'passed',
          title: 'gets fleet product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets workshop product count',
          status: 'passed',
          title: 'gets workshop product count',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with single entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with single entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with multiple entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with multiple entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet',
          status: 'passed',
          title: 'only has one fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one workshop',
          status: 'passed',
          title: 'only has one workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335822024,
      endTime: 1687335822025,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/permissions/product-scope.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle seconds correctly',
          status: 'passed',
          title: 'should handle seconds correctly',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle minutes correctly',
          status: 'passed',
          title: 'should handle minutes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle hours correctly',
          status: 'passed',
          title: 'should handle hours correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle days correctly',
          status: 'passed',
          title: 'should handle days correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle months correctly',
          status: 'passed',
          title: 'should handle months correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle years correctly',
          status: 'passed',
          title: 'should handle years correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle relative time',
          status: 'passed',
          title: 'should handle relative time',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335822026,
      endTime: 1687335822032,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/date.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'day', 'getDayFromDate'],
          fullName: ' day getDayFromDate returns the correct day of week',
          status: 'passed',
          title: 'returns the correct day of week',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335822335,
      endTime: 1687335822336,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/day.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'hhmm', 'formatHHMM'],
          fullName: ' hhmm formatHHMM formats hours',
          status: 'passed',
          title: 'formats hours',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335819940,
      endTime: 1687335819941,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/hhmm.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour-slots', 'getOpenHourSlotsFromOpenHours'],
          fullName: ' open-hour-slots getOpenHourSlotsFromOpenHours formats summaries',
          status: 'passed',
          title: 'formats summaries',
          duration: 2,
          failureMessages: []
        }
      ],
      startTime: 1687335822337,
      endTime: 1687335822339,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour-slots.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours without siestas',
          status: 'passed',
          title: 'parses open hours without siestas',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours with siestas',
          status: 'passed',
          title: 'parses open hours with siestas',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName:
            ' open-hour getMappedOpenHoursFromOpenHours parses multiple open hours same day with siesta disabled',
          status: 'passed',
          title: 'parses multiple open hours same day with siesta disabled',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses overlapping open hours',
          status: 'passed',
          title: 'parses overlapping open hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses invalid open hour where from is after to',
          status: 'passed',
          title: 'parses invalid open hour where from is after to',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses malformed open hour',
          status: 'passed',
          title: 'parses malformed open hour',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHoursFromMappedOpenHours'],
          fullName: ' open-hour getOpenHoursFromMappedOpenHours to work',
          status: 'passed',
          title: 'to work',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule returns the next opening hour',
          status: 'passed',
          title: 'returns the next opening hour',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule only open once per week',
          status: 'passed',
          title: 'only open once per week',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule overnight',
          status: 'passed',
          title: 'overnight',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next open with hole',
          status: 'passed',
          title: 'next open with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next overnight with hole',
          status: 'passed',
          title: 'next overnight with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule 24/7',
          status: 'passed',
          title: '24/7',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles no hours',
          status: 'passed',
          title: 'handles no hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles a single hour',
          status: 'passed',
          title: 'handles a single hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours without overlaps',
          status: 'passed',
          title: 'handles multiple hours without overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours with overlaps',
          status: 'passed',
          title: 'handles multiple hours with overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour'],
          fullName: ' open-hour sortOpenHour',
          status: 'passed',
          title: 'sortOpenHour',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335819673,
      endTime: 1687335819681,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByUserName',
          status: 'passed',
          title: 'sortByUserName',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByVehicleActivity',
          status: 'passed',
          title: 'sortByVehicleActivity',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335822776,
      endTime: 1687335822777,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/sort.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335819951,
      endTime: 1687335819953,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/testing-domains.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getProviderFromUnitHardwareProvider'],
          fullName: ' unit-hardware-provider getProviderFromUnitHardwareProvider returns correct providers',
          status: 'passed',
          title: 'returns correct providers',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getUnitHardwareProviderPrefix'],
          fullName: ' unit-hardware-provider getUnitHardwareProviderPrefix prefixes correctly',
          status: 'passed',
          title: 'prefixes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes traffilog',
          status: 'passed',
          title: 'correctly sanitizes traffilog',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes iwave',
          status: 'passed',
          title: 'correctly sanitizes iwave',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes sti',
          status: 'passed',
          title: 'correctly sanitizes sti',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335820824,
      endTime: 1687335820826,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/unit-hardware-provider.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX supports all valid vin characters',
          status: 'passed',
          title: 'supports all valid vin characters',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX fails on invalid vin characters',
          status: 'passed',
          title: 'fails on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX can validate valid vins',
          status: 'passed',
          title: 'can validate valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on vins with invalid characters (I, O, Q)',
          status: 'passed',
          title: 'fails on vins with invalid characters (I, O, Q)',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too long vins',
          status: 'passed',
          title: 'fails on too long vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too short vins',
          status: 'passed',
          title: 'fails on too short vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX succeeds on invalid vin characters',
          status: 'passed',
          title: 'succeeds on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX fails on valid vins',
          status: 'passed',
          title: 'fails on valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'validateVIN'],
          fullName: ' vin validateVIN can validate',
          status: 'passed',
          title: 'can validate',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335819250,
      endTime: 1687335819252,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/vin.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricTarget'],
          fullName: ' workshop-metrics getWorkshopMetricTarget returns the correct target',
          status: 'passed',
          title: 'returns the correct target',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend ignores null current values',
          status: 'passed',
          title: 'ignores null current values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports stale values',
          status: 'passed',
          title: 'supports stale values',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports increasing values',
          status: 'passed',
          title: 'supports increasing values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports decreasing values',
          status: 'passed',
          title: 'supports decreasing values',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335822336,
      endTime: 1687335822340,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/workshop-metrics.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns null on system messages',
          status: 'passed',
          title: 'returns null on system messages',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a first name',
          status: 'passed',
          title: 'returns a first name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a last name',
          status: 'passed',
          title: 'returns a last name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name',
          status: 'passed',
          title: 'returns a full name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and workshop',
          status: 'passed',
          title: 'returns a full name and workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and fleet',
          status: 'passed',
          title: 'returns a full name and fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns empty string when no name',
          status: 'passed',
          title: 'returns empty string when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns workshop when no name',
          status: 'passed',
          title: 'returns workshop when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns fleet when no name',
          status: 'passed',
          title: 'returns fleet when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335822024,
      endTime: 1687335822028,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Chat/conversation-helpers.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a normal week',
          status: 'passed',
          title: 'should render a normal week',
          duration: 7,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should have multiple open hours in a single day',
          status: 'passed',
          title: 'should have multiple open hours in a single day',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render overnights',
          status: 'passed',
          title: 'should render overnights',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a one day week',
          status: 'passed',
          title: 'should render a one day week',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render permanently closed',
          status: 'passed',
          title: 'should render permanently closed',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335822023,
      endTime: 1687335822038,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/OpenHours/OpenHoursToday.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render',
          status: 'passed',
          title: 'should render',
          duration: 6,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render with JSX',
          status: 'passed',
          title: 'should render with JSX',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should return null',
          status: 'passed',
          title: 'should return null',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should return not allowed',
          status: 'passed',
          title: 'should return not allowed',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335819681,
      endTime: 1687335819691,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Permission/Permission.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission both simple',
          status: 'passed',
          title: 'both simple',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple',
          status: 'passed',
          title: 'complex with simple',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex',
          status: 'passed',
          title: 'simple with complex',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex and scope',
          status: 'passed',
          title: 'simple with complex and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple and scope',
          status: 'passed',
          title: 'complex with simple and scope',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with complex',
          status: 'passed',
          title: 'complex with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with different scopes',
          status: 'passed',
          title: 'complex with different scopes',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasRequired',
          status: 'passed',
          title: '_hasRequired',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasOneOf',
          status: 'passed',
          title: '_hasOneOf',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687335819680,
      endTime: 1687335819686,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/access-logic.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can set permissions',
          status: 'passed',
          title: 'can set permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can get permissions',
          status: 'passed',
          title: 'can get permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any workshop permissions',
          status: 'passed',
          title: 'has any workshop permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any fleet permissions',
          status: 'passed',
          title: 'has any fleet permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any vehicle permissions',
          status: 'passed',
          title: 'has any vehicle permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions require',
          status: 'passed',
          title: 'require',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions oneOf',
          status: 'passed',
          title: 'oneOf',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions both require and oneOf',
          status: 'passed',
          title: 'both require and oneOf',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687335820125,
      endTime: 1687335820127,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/index.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator parses columns to structure',
          status: 'skipped',
          title: 'parses columns to structure',
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator is immutableish',
          status: 'skipped',
          title: 'is immutableish',
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator adds variables to structure',
          status: 'skipped',
          title: 'adds variables to structure',
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator correctly renders graphql union/interface types',
          status: 'skipped',
          title: 'correctly renders graphql union/interface types',
          failureMessages: []
        }
      ],
      startTime: 1687335818196,
      endTime: 1687335818196,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/graphql/query-generator.test.ts'
    }
  ]
}

export const vitestFailedOutput: FormattedTestResults = {
  numTotalTestSuites: 65,
  numPassedTestSuites: 65,
  numFailedTestSuites: 0,
  numPendingTestSuites: 0,
  numTotalTests: 116,
  numPassedTests: 115,
  numFailedTests: 1,
  numPendingTests: 0,
  numTodoTests: 0,
  startTime: 1687333221592,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount handles no fleets and workshops',
          status: 'passed',
          title: 'handles no fleets and workshops',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets fleet product count',
          status: 'passed',
          title: 'gets fleet product count',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount gets workshop product count',
          status: 'passed',
          title: 'gets workshop product count',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with single entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with single entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName:
            ' product-scope getActiveProductCount gets both workshop and fleet product count with multiple entries',
          status: 'passed',
          title: 'gets both workshop and fleet product count with multiple entries',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet',
          status: 'passed',
          title: 'only has one fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one workshop',
          status: 'passed',
          title: 'only has one workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'product-scope', 'getActiveProductCount'],
          fullName: ' product-scope getActiveProductCount only has one fleet on workshop',
          status: 'passed',
          title: 'only has one fleet on workshop',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333225668,
      endTime: 1687333225670,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/permissions/product-scope.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle seconds correctly',
          status: 'passed',
          title: 'should handle seconds correctly',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle minutes correctly',
          status: 'passed',
          title: 'should handle minutes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle hours correctly',
          status: 'passed',
          title: 'should handle hours correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle days correctly',
          status: 'passed',
          title: 'should handle days correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle months correctly',
          status: 'passed',
          title: 'should handle months correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle years correctly',
          status: 'passed',
          title: 'should handle years correctly',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'date', 'timeInterval'],
          fullName: ' date timeInterval should handle relative time',
          status: 'passed',
          title: 'should handle relative time',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333225669,
      endTime: 1687333225675,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/date.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'day', 'getDayFromDate'],
          fullName: ' day getDayFromDate returns the correct day of week',
          status: 'failed',
          title: 'returns the correct day of week',
          duration: 3,
          failureMessages: ["expected 'monday' to be 'tuesday' // Object.is equality"],
          location: {
            line: 17,
            column: 43
          }
        }
      ],
      startTime: 1687333225953,
      endTime: 1687333225956,
      status: 'failed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/day.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'hhmm', 'formatHHMM'],
          fullName: ' hhmm formatHHMM formats hours',
          status: 'passed',
          title: 'formats hours',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333222630,
      endTime: 1687333222631,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/hhmm.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour-slots', 'getOpenHourSlotsFromOpenHours'],
          fullName: ' open-hour-slots getOpenHourSlotsFromOpenHours formats summaries',
          status: 'passed',
          title: 'formats summaries',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333225977,
      endTime: 1687333225978,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour-slots.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours without siestas',
          status: 'passed',
          title: 'parses open hours without siestas',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses open hours with siestas',
          status: 'passed',
          title: 'parses open hours with siestas',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName:
            ' open-hour getMappedOpenHoursFromOpenHours parses multiple open hours same day with siesta disabled',
          status: 'passed',
          title: 'parses multiple open hours same day with siesta disabled',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses overlapping open hours',
          status: 'passed',
          title: 'parses overlapping open hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses invalid open hour where from is after to',
          status: 'passed',
          title: 'parses invalid open hour where from is after to',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getMappedOpenHoursFromOpenHours'],
          fullName: ' open-hour getMappedOpenHoursFromOpenHours parses malformed open hour',
          status: 'passed',
          title: 'parses malformed open hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHoursFromMappedOpenHours'],
          fullName: ' open-hour getOpenHoursFromMappedOpenHours to work',
          status: 'passed',
          title: 'to work',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule returns the next opening hour',
          status: 'passed',
          title: 'returns the next opening hour',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule only open once per week',
          status: 'passed',
          title: 'only open once per week',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule overnight',
          status: 'passed',
          title: 'overnight',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next open with hole',
          status: 'passed',
          title: 'next open with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule next overnight with hole',
          status: 'passed',
          title: 'next overnight with hole',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'getOpenHourFromDateSchedule'],
          fullName: ' open-hour getOpenHourFromDateSchedule 24/7',
          status: 'passed',
          title: '24/7',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles no hours',
          status: 'passed',
          title: 'handles no hours',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles a single hour',
          status: 'passed',
          title: 'handles a single hour',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours without overlaps',
          status: 'passed',
          title: 'handles multiple hours without overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour', 'isOpenHoursOverlapping'],
          fullName: ' open-hour isOpenHoursOverlapping handles multiple hours with overlaps',
          status: 'passed',
          title: 'handles multiple hours with overlaps',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'open-hour'],
          fullName: ' open-hour sortOpenHour',
          status: 'passed',
          title: 'sortOpenHour',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333223106,
      endTime: 1687333223116,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/open-hour.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByUserName',
          status: 'passed',
          title: 'sortByUserName',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'sort'],
          fullName: ' sort sortByVehicleActivity',
          status: 'passed',
          title: 'sortByVehicleActivity',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333226420,
      endTime: 1687333226421,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/sort.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isFleetTestingDomain'],
          fullName: ' testing-domain isFleetTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns true on valid domains',
          status: 'passed',
          title: 'returns true on valid domains',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'testing-domain', 'isWorkshopTestingDomain'],
          fullName: ' testing-domain isWorkshopTestingDomain returns false on invalid domains',
          status: 'passed',
          title: 'returns false on invalid domains',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333225870,
      endTime: 1687333225872,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/testing-domains.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getProviderFromUnitHardwareProvider'],
          fullName: ' unit-hardware-provider getProviderFromUnitHardwareProvider returns correct providers',
          status: 'passed',
          title: 'returns correct providers',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getUnitHardwareProviderPrefix'],
          fullName: ' unit-hardware-provider getUnitHardwareProviderPrefix prefixes correctly',
          status: 'passed',
          title: 'prefixes correctly',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes traffilog',
          status: 'passed',
          title: 'correctly sanitizes traffilog',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes iwave',
          status: 'passed',
          title: 'correctly sanitizes iwave',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'unit-hardware-provider', 'getSanitizedUnitSerial'],
          fullName: ' unit-hardware-provider getSanitizedUnitSerial correctly sanitizes sti',
          status: 'passed',
          title: 'correctly sanitizes sti',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223090,
      endTime: 1687333223091,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/unit-hardware-provider.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX supports all valid vin characters',
          status: 'passed',
          title: 'supports all valid vin characters',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin VALID_VIN_CHARACTERS_REGEX fails on invalid vin characters',
          status: 'passed',
          title: 'fails on invalid vin characters',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX can validate valid vins',
          status: 'passed',
          title: 'can validate valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on vins with invalid characters (I, O, Q)',
          status: 'passed',
          title: 'fails on vins with invalid characters (I, O, Q)',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too long vins',
          status: 'passed',
          title: 'fails on too long vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'VALID_VIN_REGEX'],
          fullName: ' vin VALID_VIN_REGEX fails on too short vins',
          status: 'passed',
          title: 'fails on too short vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX succeeds on invalid vin characters',
          status: 'passed',
          title: 'succeeds on invalid vin characters',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'INVALID_VIN_CHARACTERS_REGEX'],
          fullName: ' vin INVALID_VIN_CHARACTERS_REGEX fails on valid vins',
          status: 'passed',
          title: 'fails on valid vins',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'vin', 'validateVIN'],
          fullName: ' vin validateVIN can validate',
          status: 'passed',
          title: 'can validate',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223454,
      endTime: 1687333223456,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/vin.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricTarget'],
          fullName: ' workshop-metrics getWorkshopMetricTarget returns the correct target',
          status: 'passed',
          title: 'returns the correct target',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend ignores null current values',
          status: 'passed',
          title: 'ignores null current values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports stale values',
          status: 'passed',
          title: 'supports stale values',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports increasing values',
          status: 'passed',
          title: 'supports increasing values',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'workshop-metrics', 'getWorkshopMetricsTrend'],
          fullName: ' workshop-metrics getWorkshopMetricsTrend supports decreasing values',
          status: 'passed',
          title: 'supports decreasing values',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223045,
      endTime: 1687333223047,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/workshop-metrics.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns null on system messages',
          status: 'passed',
          title: 'returns null on system messages',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a first name',
          status: 'passed',
          title: 'returns a first name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a last name',
          status: 'passed',
          title: 'returns a last name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name',
          status: 'passed',
          title: 'returns a full name',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and workshop',
          status: 'passed',
          title: 'returns a full name and workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns a full name and fleet',
          status: 'passed',
          title: 'returns a full name and fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns empty string when no name',
          status: 'passed',
          title: 'returns empty string when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns workshop when no name',
          status: 'passed',
          title: 'returns workshop when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'generateName'],
          fullName: ' generateName returns fleet when no name',
          status: 'passed',
          title: 'returns fleet when no name',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as workshop'],
          fullName: ' getDetailedAuthorName as workshop from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as fleet'],
          fullName: ' getDetailedAuthorName as fleet from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from workshop',
          status: 'passed',
          title: 'from workshop',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from fleet',
          status: 'passed',
          title: 'from fleet',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'getDetailedAuthorName', 'as owner'],
          fullName: ' getDetailedAuthorName as owner from user',
          status: 'passed',
          title: 'from user',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333225665,
      endTime: 1687333225668,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Chat/conversation-helpers.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a normal week',
          status: 'passed',
          title: 'should render a normal week',
          duration: 5,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should have multiple open hours in a single day',
          status: 'passed',
          title: 'should have multiple open hours in a single day',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render overnights',
          status: 'passed',
          title: 'should render overnights',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render a one day week',
          status: 'passed',
          title: 'should render a one day week',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'OpenHoursToday', 'Component'],
          fullName: ' OpenHoursToday Component should render permanently closed',
          status: 'passed',
          title: 'should render permanently closed',
          duration: 1,
          failureMessages: []
        }
      ],
      startTime: 1687333225665,
      endTime: 1687333225675,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/OpenHours/OpenHoursToday.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render',
          status: 'passed',
          title: 'should render',
          duration: 5,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component'],
          fullName: ' access/react/component should render with JSX',
          status: 'passed',
          title: 'should render with JSX',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'condition'],
          fullName: ' access/react/component condition should return null',
          status: 'passed',
          title: 'should return null',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should render',
          status: 'passed',
          title: 'should render',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'oneOf'],
          fullName: ' access/react/component oneOf should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'require'],
          fullName: ' access/react/component require should return null',
          status: 'passed',
          title: 'should return null',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should render',
          status: 'passed',
          title: 'should render',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/react/component', 'notAllowed'],
          fullName: ' access/react/component notAllowed should return not allowed',
          status: 'passed',
          title: 'should return not allowed',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223095,
      endTime: 1687333223105,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/components/Permission/Permission.test.tsx'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission both simple',
          status: 'passed',
          title: 'both simple',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple',
          status: 'passed',
          title: 'complex with simple',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex',
          status: 'passed',
          title: 'simple with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission simple with complex and scope',
          status: 'passed',
          title: 'simple with complex and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with simple and scope',
          status: 'passed',
          title: 'complex with simple and scope',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with complex',
          status: 'passed',
          title: 'complex with complex',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic', '_includesPermission'],
          fullName: ' access/helpers/logic _includesPermission complex with different scopes',
          status: 'passed',
          title: 'complex with different scopes',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasRequired',
          status: 'passed',
          title: '_hasRequired',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/helpers/logic'],
          fullName: ' access/helpers/logic _hasOneOf',
          status: 'passed',
          title: '_hasOneOf',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223629,
      endTime: 1687333223631,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/access-logic.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can set permissions',
          status: 'passed',
          title: 'can set permissions',
          duration: 4,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache can get permissions',
          status: 'passed',
          title: 'can get permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any workshop permissions',
          status: 'passed',
          title: 'has any workshop permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any fleet permissions',
          status: 'passed',
          title: 'has any fleet permissions',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache'],
          fullName: ' access/access-cache has any vehicle permissions',
          status: 'passed',
          title: 'has any vehicle permissions',
          duration: 1,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions require',
          status: 'passed',
          title: 'require',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions oneOf',
          status: 'passed',
          title: 'oneOf',
          duration: 0,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'access/access-cache', 'hasPermissions'],
          fullName: ' access/access-cache hasPermissions both require and oneOf',
          status: 'passed',
          title: 'both require and oneOf',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223276,
      endTime: 1687333223282,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/access/index.test.ts'
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator parses columns to structure',
          status: 'passed',
          title: 'parses columns to structure',
          duration: 3,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator is immutableish',
          status: 'passed',
          title: 'is immutableish',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator adds variables to structure',
          status: 'passed',
          title: 'adds variables to structure',
          duration: 2,
          failureMessages: []
        },
        {
          ancestorTitles: ['', 'query-generator'],
          fullName: ' query-generator correctly renders graphql union/interface types',
          status: 'passed',
          title: 'correctly renders graphql union/interface types',
          duration: 0,
          failureMessages: []
        }
      ],
      startTime: 1687333223091,
      endTime: 1687333223098,
      status: 'passed',
      message: '',
      name: '/Users/mia/Developer/@connectedcars/manage/src/utils/graphql/query-generator.test.ts'
    }
  ]
}
