export const auditOneVulnerability = `{ "actions": [{ "action": "install", "module": "knex", "target": "3.0.0", "isMajor": true, "resolves": [{ "id": 525, "path": "knex>liftoff>findup-sync>micromatch>braces>expand-range>fill-range>randomatic", "dev": false, "optional": false }] }], "advisories": { "525": { "id": 525, "created": "2017-09-08T18:07:02.061Z", "updated": "2017-09-22T16:26:08.422Z", "deleted": null, "title": "Regular Expression Denial of Service", "found_by": { "name": "nobody" }, "reported_by": { "name": "testdata" }, "module_name": "knex", "cves": [ "CVE-2017-16112" ], "vulnerable_versions": "<3.0.0", "patched_versions": ">=3.0.0", "overview": "something here", "recommendation": "Please update to version 3.0.0 or greater", "references": "- https://github.com/salesforce/tough-cookie/issues/92", "access": "public", "severity": "high", "cwe": "CWE-400" } }, "muted": [], "metadata": { "vulnerabilities": { "low": 0, "moderate": 0, "high": 1, "critical": 0 }, "dependencies": 375, "devDependencies": 466, "optionalDependencies": 87, "totalDependencies": 918 } }`

export const auditNoVulnerabilities = `{ "actions": [], "advisories": {}, "muted": [], "metadata": { "vulnerabilities": { "info": 0, "low": 0, "moderate": 0, "high": 0, "critical": 0 }, "dependencies": 2364, "devDependencies": 2606, "optionalDependencies": 34, "totalDependencies": 4982 }, "runId": "d558cef6-7061-454e-89d3-ee85181d1dd6" }`

export const auditMultiVulnerabilities = `{ "actions": [], "advisories": { "146": { "findings": [ { "version": "1.9.2", "paths": [ "mocha>growl" ], "dev": true, "optional": false, "bundled": false } ], "id": 146, "created": "2016-09-06T12:49:40.000Z", "updated": "2018-03-02T21:07:28.071Z", "deleted": null, "title": "Command Injection", "found_by": { "name": "Cristian-Alexandru Staicu" }, "reported_by": { "name": "Cristian-Alexandru Staicu" }, "module_name": "growl", "cves": [ "CVE-2017-16042" ], "vulnerable_versions": "<1.10.2", "patched_versions": ">=1.10.2", "overview": "Affected versions of \`growl\` do not properly sanitize input prior to passing it into a shell command, allowing for arbitrary command execution.", "recommendation": "Update to version 1.10.2 or later.", "references": "[Issue #60](https://github.com/tj/node-growl/issues/60)\\n[PR #61](https://github.com/tj/node-growl/pull/61)", "access": "public", "severity": "critical", "cwe": "CWE-94", "metadata": { "module_type": "CLI.Library", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/146" }, "157": { "findings": [ { "version": "1.1.7", "paths": [ "nyc>micromatch>braces>expand-range>fill-range>randomatic", "nyc>test-exclude>micromatch>braces>expand-range>fill-range>randomatic" ], "dev": true, "optional": false, "bundled": true } ], "id": 157, "created": "2016-11-09T20:03:19.000Z", "updated": "2018-05-08T15:23:56.190Z", "deleted": null, "title": "Cryptographically Weak PRNG", "found_by": { "name": "Sven Slootweg" }, "reported_by": { "name": "Sven Slootweg" }, "module_name": "randomatic", "cves": [ "CVE-2017-16028" ], "vulnerable_versions": "<3.0.0", "patched_versions": ">=3.0.0", "overview": "Affected versions of \`randomatic\` generate random values using a cryptographically weak psuedo-random number generator. This may result in predictable values instead of random values as intended.\\r\\n\\r\\n", "recommendation": "Update to version 3.0.0 or later.\\r\\n", "references": "- [Commit #4a52695](https://github.com/jonschlinkert/randomatic/commit/4a526959b3a246ae8e4a82f9c182180907227fe1#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)", "access": "public", "severity": "low", "cwe": "CWE-330", "metadata": { "module_type": "Multi.Library", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/157" }, "525": { "findings": [ { "version": "2.3.2", "paths": [ "coveralls>request>tough-cookie" ], "dev": true, "optional": false, "bundled": false } ], "id": 525, "created": "2017-09-08T18:07:02.061Z", "updated": "2018-04-09T00:01:19.079Z", "deleted": null, "title": "Regular Expression Denial of Service", "found_by": { "name": "Cristian-Alexandru Staicu" }, "reported_by": { "name": "Cristian-Alexandru Staicu" }, "module_name": "tough-cookie", "cves": [ "CVE-2017-16112" ], "vulnerable_versions": "<2.3.3", "patched_versions": ">=2.3.3", "overview": "Affected versions of \`tough-cookie\` are susceptible to a regular expression denial of service.\\n\\nThe amplification on this vulnerability is relatively low - it takes around 2 seconds for the engine to execute on a malicious input which is 50,000 characters in length.\\n\\nIf node was compiled using the \`-DHTTP_MAX_HEADER_SIZE\` however, the impact of the vulnerability can be significant, as the primary limitation for the vulnerability is the default max HTTP header length in node.", "recommendation": "Update to version 2.3.3 or later.", "references": "[Issue #92](https://github.com/salesforce/tough-cookie/issues/92)", "access": "public", "severity": "high", "cwe": "CWE-400", "metadata": { "module_type": "Network.Library", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/525" }, "534": { "findings": [ { "version": "2.6.8", "paths": [ "babel-eslint>babel-traverse>debug", "eslint>debug", "mocha>debug", "nyc>istanbul-lib-instrument>babel-template>babel-traverse>debug", "nyc>istanbul-lib-instrument>babel-traverse>debug", "nyc>istanbul-lib-source-maps>debug" ], "dev": true, "optional": false, "bundled": false } ], "id": 534, "created": "2017-09-25T18:55:55.956Z", "updated": "2018-05-16T19:37:43.686Z", "deleted": null, "title": "Regular Expression Denial of Service", "found_by": { "name": "Cristian-Alexandru Staicu" }, "reported_by": { "name": "Cristian-Alexandru Staicu" }, "module_name": "debug", "cves": [ "CVE-2017-16137" ], "vulnerable_versions": "<= 2.6.8 || >= 3.0.0 <= 3.0.1", "patched_versions": ">= 2.6.9 < 3.0.0 || >= 3.1.0", "overview": "Affected versions of \`debug\` are vulnerable to regular expression denial of service when untrusted user input is passed into the \`o\` formatter. \\n\\nAs it takes 50,000 characters to block the event loop for 2 seconds, this issue is a low severity issue.", "recommendation": "Version 2.x.x: Update to version 2.6.9 or later.\\nVersion 3.x.x: Update to version 3.1.0 or later.\\n", "references": "- [Issue #501](https://github.com/visionmedia/debug/issues/501)\\n- [PR #504](https://github.com/visionmedia/debug/pull/504)", "access": "public", "severity": "low", "cwe": "CWE-400", "metadata": { "module_type": "", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/534" }, "566": { "findings": [ { "version": "2.16.3", "paths": [ "coveralls>request>hawk>boom>hoek", "coveralls>request>hawk>cryptiles>boom>hoek", "coveralls>request>hawk>hoek", "coveralls>request>hawk>sntp>hoek" ], "dev": true, "optional": false, "bundled": false } ], "id": 566, "created": "2018-04-20T21:25:58.421Z", "updated": "2018-04-20T21:25:58.421Z", "deleted": null, "title": "Prototype pollution", "found_by": { "name": "HoLyVieR" }, "reported_by": { "name": "HoLyVieR" }, "module_name": "hoek", "cves": [], "vulnerable_versions": "<= 4.2.0 || >= 5.0.0 < 5.0.3", "patched_versions": "> 4.2.0 < 5.0.0 || >= 5.0.3", "overview": "Versions of \`hoek\` prior to 4.2.1 and 5.0.3 are vulnerable to prototype pollution.\\n\\nThe \`merge\` function, and the \`applyToDefaults\` and \`applyToDefaultsWithShallow\` functions which leverage \`merge\` behind the scenes, are vulnerable to a prototype pollution attack when provided an _unvalidated_ payload created from a JSON string containing the \`__proto__\` property.\\n\\nThis can be demonstrated like so:\\n\\n\`\`\`javascript\\nvar Hoek = require('hoek');\\nvar malicious_payload = '{\\"__proto__\\":{\\"oops\\":\\"It works !\\"}}';\\n\\nvar a = {};\\nconsole.log(\\"Before : \\" + a.oops);\\nHoek.merge({}, JSON.parse(malicious_payload));\\nconsole.log(\\"After : \\" + a.oops);\\n\`\`\`\\n\\nThis type of attack can be used to overwrite existing properties causing a potential denial of service.", "recommendation": "Update to version 4.2.1, 5.0.3 or later.", "references": "", "access": "public", "severity": "moderate", "cwe": "CWE-471", "metadata": { "module_type": "", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/566" }, "577": { "findings": [ { "version": "4.17.4", "paths": [ "babel-eslint>babel-traverse>babel-types>lodash", "babel-eslint>babel-traverse>lodash", "babel-eslint>babel-types>lodash", "eslint>inquirer>lodash", "eslint>lodash", "eslint>table>lodash", "nyc>istanbul-lib-instrument>babel-generator>babel-types>lodash", "nyc>istanbul-lib-instrument>babel-generator>lodash", "nyc>istanbul-lib-instrument>babel-template>babel-traverse>babel-types>lodash", "nyc>istanbul-lib-instrument>babel-template>babel-traverse>lodash", "nyc>istanbul-lib-instrument>babel-template>babel-types>lodash", "nyc>istanbul-lib-instrument>babel-template>lodash", "nyc>istanbul-lib-instrument>babel-traverse>babel-types>lodash", "nyc>istanbul-lib-instrument>babel-traverse>lodash", "nyc>istanbul-lib-instrument>babel-types>lodash" ], "dev": true, "optional": false, "bundled": false } ], "id": 577, "created": "2018-04-24T14:27:02.796Z", "updated": "2018-04-24T14:27:13.049Z", "deleted": null, "title": "Prototype Pollution", "found_by": { "name": "Olivier Arteau (HoLyVieR)" }, "reported_by": { "name": "Olivier Arteau (HoLyVieR)" }, "module_name": "lodash", "cves": [ "CVE-2018-3721" ], "vulnerable_versions": "<4.17.5", "patched_versions": ">=4.17.5", "overview": "Versions of \`lodash\` before 4.17.5 are vulnerable to prototype pollution. \\n\\nThe vulnerable functions are 'defaultsDeep', 'merge', and 'mergeWith' which allow a malicious user to modify the prototype of \`Object\` via \`__proto__\` causing the addition or modification of an existing property that will exist on all objects.\\n\\n", "recommendation": "Update to version 4.17.5 or later.", "references": "- [HackerOne Report](https://hackerone.com/reports/310443)", "access": "public", "severity": "low", "cwe": "CWE-471", "metadata": { "module_type": "", "exploitability": 1, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/577" }, "598": { "findings": [ { "version": "0.4.3", "paths": [ "coveralls>request>tunnel-agent" ], "dev": true, "optional": false, "bundled": false } ], "id": 598, "created": "2018-04-24T20:30:16.099Z", "updated": "2018-04-24T20:31:15.816Z", "deleted": null, "title": "Memory Exposure", "found_by": { "name": "Сковорода Никита Андреевич" }, "reported_by": { "name": "Сковорода Никита Андреевич" }, "module_name": "tunnel-agent", "cves": [], "vulnerable_versions": "<0.6.0", "patched_versions": ">=0.6.0", "overview": "Versions of \`tunnel-agent\` before 0.6.0 are vulnerable to memory exposure.\\n\\nThis is exploitable if user supplied input is provided to the auth value and is a number.\\n\\nProof-of-concept:\\n\`\`\`js\\nrequire('request')({\\n  method: 'GET',\\n  uri: 'http://www.example.com',\\n  tunnel: true,\\n  proxy:{\\n    protocol: 'http:',\\n    host:'127.0.0.1',\\n    port:8080,\\n    auth:USERSUPPLIEDINPUT // number\\n  }\\n});\\n\`\`\`", "recommendation": "Update to version 0.6.0 or later.", "references": "- [GitHub Commit #9ca95ec](https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0)\\n- [Proof of Concept](https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4)", "access": "public", "severity": "moderate", "cwe": "CWE-20", "metadata": { "module_type": "", "exploitability": 3, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/598" }, "606": { "findings": [ { "version": "1.13.1", "paths": [ "coveralls>request>http-signature>sshpk" ], "dev": true, "optional": false, "bundled": false } ], "id": 606, "created": "2018-04-24T22:25:08.333Z", "updated": "2018-04-24T22:25:13.388Z", "deleted": null, "title": "Regular Expression Denial of Service", "found_by": { "name": "Сковорода Никита Андреевич" }, "reported_by": { "name": "Сковорода Никита Андреевич" }, "module_name": "sshpk", "cves": [], "vulnerable_versions": "<1.14.1", "patched_versions": ">=1.14.1", "overview": "Versions of \`sshpk\` before 1.14.1 are vulnerable to regular expression denial of service when parsing crafted invalid public keys.", "recommendation": "Update to version 1.14.1 or later.", "references": "- https://github.com/joyent/node-sshpk/blob/v1.13.1/lib/formats/ssh.js#L17\\n- [HackerOne Report[(https://hackerone.com/reports/319593)", "access": "public", "severity": "high", "cwe": "CWE-400", "metadata": { "module_type": "", "exploitability": 5, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/606" }, "664": { "findings": [ { "version": "0.0.5", "paths": [ "coveralls>request>stringstream" ], "dev": true, "optional": false, "bundled": false } ], "id": 664, "created": "2018-05-16T19:39:37.463Z", "updated": "2018-05-22T15:03:12.999Z", "deleted": null, "title": "Out-of-bounds Read", "found_by": { "name": "Сковорода Никита Андреевич" }, "reported_by": { "name": "Сковорода Никита Андреевич" }, "module_name": "stringstream", "cves": [], "vulnerable_versions": "<=0.0.5", "patched_versions": ">=0.0.6", "overview": "All versions of \`stringstream\` are vulnerable to out-of-bounds read as it allocates uninitialized Buffers when number is passed in input stream on Node.js 4.x and below.", "recommendation": "No fix is currently available for this vulnerability. It is our recommendation to not install or use this module if user input is being passed in to \`stringstream\`.\\n", "references": "- [HackerOne Report](https://hackerone.com/reports/321670)\\n- https://github.com/mhart/StringStream/blob/v0.0.5/stringstream.js#L32", "access": "public", "severity": "moderate", "cwe": "CWE-125", "metadata": { "module_type": "", "exploitability": 2, "affected_components": "" }, "url": "https://nodesecurity.io/advisories/664" } }, "muted": [], "metadata": { "vulnerabilities": { "info": 0, "low": 23, "moderate": 6, "high": 2, "critical": 1 }, "dependencies": 0, "devDependencies": 965, "optionalDependencies": 28, "totalDependencies": 965 }, "runId": "d558cef6-7061-454e-89d3-ee85181d1dd6" }`

export const auditNoVulnerabilitiesV2 = {
  auditReportVersion: 2,
  vulnerabilities: {},
  metadata: {
    vulnerabilities: {
      info: 0,
      low: 0,
      moderate: 0,
      high: 0,
      critical: 0,
      total: 0
    },
    dependencies: {
      prod: 46,
      dev: 899,
      optional: 29,
      peer: 0,
      peerOptional: 0,
      total: 944
    }
  }
}

export const auditMultiVulnerabilitiesV2 = {
  auditReportVersion: 2,
  vulnerabilities: {
    acorn: {
      name: 'acorn',
      severity: 'moderate',
      via: [
        {
          source: 1488,
          name: 'acorn',
          dependency: 'acorn',
          title: 'Regular Expression Denial of Service',
          url: 'https://npmjs.com/advisories/1488',
          severity: 'moderate',
          range: '>=5.5.0 <5.7.4 || >=6.0.0 <6.4.1 || >=7.0.0 <7.1.1'
        }
      ],
      effects: [],
      range: '5.5.0 - 5.7.3 || 6.0.0 - 6.4.0 || 7.0.0 - 7.1.0',
      nodes: ['node_modules/acorn', 'node_modules/acorn-globals/node_modules/acorn'],
      fixAvailable: true
    },
    axios: {
      name: 'axios',
      severity: 'high',
      via: [
        {
          source: 1594,
          name: 'axios',
          dependency: 'axios',
          title: 'Server-Side Request Forgery',
          url: 'https://npmjs.com/advisories/1594',
          severity: 'high',
          range: '<0.21.1'
        },
        {
          source: 880,
          name: 'axios',
          dependency: 'axios',
          title: 'Denial of Service',
          url: 'https://npmjs.com/advisories/880',
          severity: 'moderate',
          range: '<0.18.1'
        }
      ],
      effects: [],
      range: '<=0.21.0',
      nodes: ['node_modules/axios'],
      fixAvailable: true
    },
    'babel-jest': {
      name: 'babel-jest',
      severity: 'low',
      via: ['babel-plugin-istanbul'],
      effects: ['jest-config'],
      range: '14.2.0-alpha.ca8bfb6e - 24.0.0-alpha.16',
      nodes: ['node_modules/babel-jest'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'babel-plugin-istanbul': {
      name: 'babel-plugin-istanbul',
      severity: 'low',
      via: ['test-exclude'],
      effects: ['babel-jest', 'jest-runtime'],
      range: '<=5.0.0',
      nodes: ['node_modules/babel-plugin-istanbul'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    braces: {
      name: 'braces',
      severity: 'low',
      via: [
        {
          source: 786,
          name: 'braces',
          dependency: 'braces',
          title: 'Regular Expression Denial of Service',
          url: 'https://npmjs.com/advisories/786',
          severity: 'low',
          range: '<2.3.1'
        }
      ],
      effects: ['micromatch'],
      range: '<2.3.1',
      nodes: [
        'node_modules/jest-config/node_modules/braces',
        'node_modules/jest-haste-map/node_modules/braces',
        'node_modules/jest-message-util/node_modules/braces',
        'node_modules/jest-runtime/node_modules/braces',
        'node_modules/jest/node_modules/braces',
        'node_modules/test-exclude/node_modules/braces'
      ],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'eslint-utils': {
      name: 'eslint-utils',
      severity: 'critical',
      via: [
        {
          source: 1118,
          name: 'eslint-utils',
          dependency: 'eslint-utils',
          title: 'Arbitrary Code Execution',
          url: 'https://npmjs.com/advisories/1118',
          severity: 'critical',
          range: '>=1.2.0 <1.4.1'
        }
      ],
      effects: [],
      range: '1.2.0 - 1.4.0',
      nodes: ['node_modules/eslint-utils'],
      fixAvailable: true
    },
    expect: {
      name: 'expect',
      severity: 'low',
      via: ['jest-message-util'],
      effects: ['jest-jasmine2'],
      range: '21.0.0-beta.1 - 22.4.3 || 23.4.0 - 23.6.0',
      nodes: ['node_modules/expect'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    handlebars: {
      name: 'handlebars',
      severity: 'critical',
      via: [
        {
          source: 1164,
          name: 'handlebars',
          dependency: 'handlebars',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1164',
          severity: 'high',
          range: '<3.0.8 || >=4.0.0 <4.3.0'
        },
        {
          source: 1300,
          name: 'handlebars',
          dependency: 'handlebars',
          title: 'Denial of Service',
          url: 'https://npmjs.com/advisories/1300',
          severity: 'moderate',
          range: '>=4.0.0 <4.4.5'
        },
        {
          source: 1316,
          name: 'handlebars',
          dependency: 'handlebars',
          title: 'Arbitrary Code Execution',
          url: 'https://npmjs.com/advisories/1316',
          severity: 'high',
          range: '<3.0.8 || >=4.0.0 <4.5.2'
        },
        {
          source: 1324,
          name: 'handlebars',
          dependency: 'handlebars',
          title: 'Arbitrary Code Execution',
          url: 'https://npmjs.com/advisories/1324',
          severity: 'high',
          range: '<3.0.8 || >=4.0.0 <4.5.3'
        },
        {
          source: 755,
          name: 'handlebars',
          dependency: 'handlebars',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/755',
          severity: 'critical',
          range: '<=4.0.13 || >=4.1.0 <4.1.2'
        },
        'optimist'
      ],
      effects: [],
      range: '<=4.7.3',
      nodes: ['node_modules/handlebars'],
      fixAvailable: true
    },
    ini: {
      name: 'ini',
      severity: 'low',
      via: [
        {
          source: 1589,
          name: 'ini',
          dependency: 'ini',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1589',
          severity: 'low',
          range: '<1.3.6'
        }
      ],
      effects: [],
      range: '<1.3.6',
      nodes: ['node_modules/fsevents/node_modules/ini', 'node_modules/ini'],
      fixAvailable: true
    },
    jest: {
      name: 'jest',
      severity: 'low',
      via: ['jest-cli'],
      effects: [],
      range: '18.5.0-alpha.7da3df39 - 22.4.4 || 23.4.0 - 23.6.0',
      nodes: ['node_modules/jest'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-cli': {
      name: 'jest-cli',
      severity: 'low',
      via: ['jest-config', 'jest-message-util', 'jest-runner', 'jest-runtime', 'jest-snapshot', 'micromatch', 'yargs'],
      effects: ['jest'],
      range: '12.1.1-alpha.2935e14d || 12.1.2-alpha.6230044c - 24.8.0',
      nodes: ['node_modules/jest/node_modules/jest-cli'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-config': {
      name: 'jest-config',
      severity: 'low',
      via: ['babel-jest', 'jest-jasmine2', 'jest-util', 'micromatch'],
      effects: ['jest-cli', 'jest-runner', 'jest-runtime'],
      range: '18.5.0-alpha.7da3df39 - 24.0.0-alpha.16',
      nodes: ['node_modules/jest-config'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-environment-jsdom': {
      name: 'jest-environment-jsdom',
      severity: 'low',
      via: ['jest-util'],
      effects: [],
      range: '18.5.0-alpha.7da3df39 - 22.4.3 || 23.4.0',
      nodes: ['node_modules/jest-environment-jsdom'],
      fixAvailable: true
    },
    'jest-environment-node': {
      name: 'jest-environment-node',
      severity: 'low',
      via: ['jest-util'],
      effects: [],
      range: '18.5.0-alpha.7da3df39 - 22.4.3 || 23.4.0',
      nodes: ['node_modules/jest-environment-node'],
      fixAvailable: true
    },
    'jest-haste-map': {
      name: 'jest-haste-map',
      severity: 'low',
      via: ['micromatch'],
      effects: ['jest-runtime'],
      range: '18.1.0 - 23.1.0 || 23.4.0 - 24.0.0-alpha.16',
      nodes: ['node_modules/jest-haste-map'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-jasmine2': {
      name: 'jest-jasmine2',
      severity: 'low',
      via: ['expect', 'jest-message-util', 'jest-snapshot', 'jest-util'],
      effects: ['jest-config'],
      range: '18.5.0-alpha.7da3df39 - 22.4.4 || 23.4.0 - 23.6.0',
      nodes: ['node_modules/jest-jasmine2'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-message-util': {
      name: 'jest-message-util',
      severity: 'low',
      via: ['micromatch'],
      effects: ['expect', 'jest-cli', 'jest-jasmine2', 'jest-runtime', 'jest-snapshot', 'jest-util'],
      range: '18.5.0-alpha.7da3df39 - 23.1.0 || 23.4.0 - 24.0.0-alpha.16',
      nodes: ['node_modules/jest-message-util'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-resolve-dependencies': {
      name: 'jest-resolve-dependencies',
      severity: 'low',
      via: ['jest-snapshot'],
      effects: [],
      range: '23.4.0 - 23.6.0',
      nodes: ['node_modules/jest-resolve-dependencies'],
      fixAvailable: true
    },
    'jest-runner': {
      name: 'jest-runner',
      severity: 'low',
      via: ['jest-config', 'jest-runtime'],
      effects: ['jest-cli'],
      range: '21.0.0-alpha.1 - 22.4.4 || 23.4.0 - 23.6.0',
      nodes: ['node_modules/jest-runner'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-runtime': {
      name: 'jest-runtime',
      severity: 'low',
      via: [
        'babel-plugin-istanbul',
        'jest-config',
        'jest-haste-map',
        'jest-message-util',
        'jest-util',
        'micromatch',
        'yargs'
      ],
      effects: ['jest-cli', 'jest-runner'],
      range: '12.1.1-alpha.2935e14d - 24.8.0',
      nodes: ['node_modules/jest-runtime'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-snapshot': {
      name: 'jest-snapshot',
      severity: 'low',
      via: ['jest-message-util'],
      effects: ['jest-cli', 'jest-jasmine2', 'jest-resolve-dependencies'],
      range: '23.4.0 - 23.6.0',
      nodes: ['node_modules/jest-snapshot'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'jest-util': {
      name: 'jest-util',
      severity: 'low',
      via: ['jest-message-util'],
      effects: ['jest-config', 'jest-environment-jsdom', 'jest-environment-node', 'jest-jasmine2', 'jest-runtime'],
      range: '18.5.0-alpha.7da3df39 - 22.4.3 || 23.4.0',
      nodes: ['node_modules/jest-util'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'js-yaml': {
      name: 'js-yaml',
      severity: 'high',
      via: [
        {
          source: 788,
          name: 'js-yaml',
          dependency: 'js-yaml',
          title: 'Denial of Service',
          url: 'https://npmjs.com/advisories/788',
          severity: 'moderate',
          range: '<3.13.0'
        },
        {
          source: 813,
          name: 'js-yaml',
          dependency: 'js-yaml',
          title: 'Code Injection',
          url: 'https://npmjs.com/advisories/813',
          severity: 'high',
          range: '<3.13.1'
        }
      ],
      effects: [],
      range: '<=3.13.0',
      nodes: ['node_modules/js-yaml'],
      fixAvailable: true
    },
    'just-extend': {
      name: 'just-extend',
      severity: 'moderate',
      via: [
        {
          source: 780,
          name: 'just-extend',
          dependency: 'just-extend',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/780',
          severity: 'moderate',
          range: '<4.0.0'
        }
      ],
      effects: ['nise'],
      range: '<4.0.0',
      nodes: ['node_modules/just-extend'],
      fixAvailable: true
    },
    'kind-of': {
      name: 'kind-of',
      severity: 'low',
      via: [
        {
          source: 1490,
          name: 'kind-of',
          dependency: 'kind-of',
          title: 'Validation Bypass',
          url: 'https://npmjs.com/advisories/1490',
          severity: 'low',
          range: '>=6.0.0 <6.0.3'
        }
      ],
      effects: [],
      range: '6.0.0 - 6.0.2',
      nodes: ['node_modules/kind-of'],
      fixAvailable: true
    },
    knex: {
      name: 'knex',
      severity: 'low',
      via: ['minimist'],
      effects: [],
      range: '0.6.8 - 0.16.3',
      nodes: ['node_modules/knex'],
      fixAvailable: true
    },
    lodash: {
      name: 'lodash',
      severity: 'high',
      via: [
        {
          source: 1065,
          name: 'lodash',
          dependency: 'lodash',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1065',
          severity: 'high',
          range: '<4.17.12'
        },
        {
          source: 1523,
          name: 'lodash',
          dependency: 'lodash',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1523',
          severity: 'low',
          range: '<4.17.19'
        },
        {
          source: 782,
          name: 'lodash',
          dependency: 'lodash',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/782',
          severity: 'high',
          range: '<4.17.11'
        }
      ],
      effects: [],
      range: '<=4.17.18',
      nodes: ['node_modules/lodash'],
      fixAvailable: true
    },
    mem: {
      name: 'mem',
      severity: 'low',
      via: [
        {
          source: 1084,
          name: 'mem',
          dependency: 'mem',
          title: 'Denial of Service',
          url: 'https://npmjs.com/advisories/1084',
          severity: 'low',
          range: '<4.0.0'
        }
      ],
      effects: ['os-locale'],
      range: '<4.0.0',
      nodes: ['node_modules/mem'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    micromatch: {
      name: 'micromatch',
      severity: 'low',
      via: ['braces'],
      effects: ['jest-cli', 'jest-config', 'jest-haste-map', 'jest-message-util', 'jest-runtime', 'test-exclude'],
      range: '0.2.0 - 2.3.11',
      nodes: [
        'node_modules/jest-config/node_modules/micromatch',
        'node_modules/jest-haste-map/node_modules/micromatch',
        'node_modules/jest-message-util/node_modules/micromatch',
        'node_modules/jest-runtime/node_modules/micromatch',
        'node_modules/jest/node_modules/micromatch',
        'node_modules/test-exclude/node_modules/micromatch'
      ],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    minimist: {
      name: 'minimist',
      severity: 'low',
      via: [
        {
          source: 1179,
          name: 'minimist',
          dependency: 'minimist',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1179',
          severity: 'low',
          range: '<0.2.1 || >=1.0.0 <1.2.3'
        }
      ],
      effects: ['knex', 'mkdirp', 'optimist'],
      range: '<0.2.1 || >=1.0.0 <1.2.3',
      nodes: [
        'node_modules/fsevents/node_modules/minimist',
        'node_modules/fsevents/node_modules/rc/node_modules/minimist',
        'node_modules/handlebars/node_modules/minimist',
        'node_modules/minimist',
        'node_modules/mkdirp/node_modules/minimist'
      ],
      fixAvailable: true
    },
    'mixin-deep': {
      name: 'mixin-deep',
      severity: 'high',
      via: [
        {
          source: 1013,
          name: 'mixin-deep',
          dependency: 'mixin-deep',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1013',
          severity: 'high',
          range: '<1.3.2 || >=2.0.0 <2.0.1'
        }
      ],
      effects: [],
      range: '<=1.3.1 || 2.0.0',
      nodes: ['node_modules/mixin-deep'],
      fixAvailable: true
    },
    mkdirp: {
      name: 'mkdirp',
      severity: 'low',
      via: ['minimist'],
      effects: [],
      range: '0.4.1 - 0.5.1',
      nodes: ['node_modules/fsevents/node_modules/mkdirp', 'node_modules/mkdirp'],
      fixAvailable: true
    },
    nise: {
      name: 'nise',
      severity: 'moderate',
      via: ['just-extend'],
      effects: [],
      range: '1.0.1 - 1.4.7',
      nodes: ['node_modules/nise'],
      fixAvailable: true
    },
    optimist: {
      name: 'optimist',
      severity: 'low',
      via: ['minimist'],
      effects: ['handlebars'],
      range: '>=0.6.0',
      nodes: ['node_modules/handlebars/node_modules/optimist'],
      fixAvailable: true
    },
    'os-locale': {
      name: 'os-locale',
      severity: 'low',
      via: ['mem'],
      effects: ['yargs'],
      range: '2.0.0 - 3.0.0',
      nodes: ['node_modules/os-locale'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'set-value': {
      name: 'set-value',
      severity: 'high',
      via: [
        {
          source: 1012,
          name: 'set-value',
          dependency: 'set-value',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1012',
          severity: 'high',
          range: '<2.0.1 || >=3.0.0 <3.0.1'
        }
      ],
      effects: ['union-value'],
      range: '<=2.0.0 || 3.0.0',
      nodes: ['node_modules/set-value', 'node_modules/union-value/node_modules/set-value'],
      fixAvailable: true
    },
    tar: {
      name: 'tar',
      severity: 'high',
      via: [
        {
          source: 803,
          name: 'tar',
          dependency: 'tar',
          title: 'Arbitrary File Overwrite',
          url: 'https://npmjs.com/advisories/803',
          severity: 'high',
          range: '<2.2.2 || >=3.0.0 <4.4.2'
        }
      ],
      effects: [],
      range: '<2.2.2 || >=3.0.0 <4.4.2',
      nodes: ['node_modules/fsevents/node_modules/tar'],
      fixAvailable: true
    },
    'test-exclude': {
      name: 'test-exclude',
      severity: 'low',
      via: ['micromatch'],
      effects: ['babel-plugin-istanbul'],
      range: '<=4.2.3',
      nodes: ['node_modules/test-exclude'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'ts-jest': {
      name: 'ts-jest',
      severity: 'low',
      via: ['yargs-parser'],
      effects: [],
      range: '23.10.0-beta.1 - 25.2.1',
      nodes: ['node_modules/ts-jest'],
      fixAvailable: true
    },
    'union-value': {
      name: 'union-value',
      severity: 'high',
      via: ['set-value'],
      effects: [],
      range: '<=1.0.0 || 2.0.0',
      nodes: ['node_modules/union-value'],
      fixAvailable: true
    },
    yargs: {
      name: 'yargs',
      severity: 'low',
      via: ['os-locale', 'yargs-parser'],
      effects: ['jest-cli', 'jest-runtime'],
      range: '4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0',
      nodes: ['node_modules/yargs'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    },
    'yargs-parser': {
      name: 'yargs-parser',
      severity: 'low',
      via: [
        {
          source: 1500,
          name: 'yargs-parser',
          dependency: 'yargs-parser',
          title: 'Prototype Pollution',
          url: 'https://npmjs.com/advisories/1500',
          severity: 'low',
          range: '<13.1.2 || >=14.0.0 <15.0.1 || >=16.0.0 <18.1.2'
        }
      ],
      effects: ['ts-jest', 'yargs'],
      range: '<=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1',
      nodes: ['node_modules/yargs-parser', 'node_modules/yargs/node_modules/yargs-parser'],
      fixAvailable: {
        name: 'jest',
        version: '26.6.3',
        isSemVerMajor: true
      }
    }
  },
  metadata: {
    vulnerabilities: {
      info: 0,
      low: 30,
      moderate: 3,
      high: 7,
      critical: 2,
      total: 42
    },
    dependencies: {
      prod: 274,
      dev: 587,
      optional: 72,
      peer: 0,
      peerOptional: 0,
      total: 860
    }
  }
}
