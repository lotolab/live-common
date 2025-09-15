import type { UserConfig } from '@commitlint/types';

/** @type {import("@commitlint/types").UserConfig} */
const configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    /** Ignore automatic release messages */
    (commit) => commit.includes('chore(realease):'),
    /** Ignore merge commits */
    (commit) => commit.includes('Merge '),
    /**
     * Ignore long message body lines caused by squash
     * merges with merge commits annotations
     */
    (commit) => commit.includes('(#') && commit.includes(')'),
  ],
  rules: {
    'scope-case': [
      2,
      'always',
      [
        'lower-case',
        'sentence-case',
        'start-case',
        'pascal-case',
        'snake-case',
        'upper-case',
        'kebab-case',
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'subject-empty': [2, 'never'],
  },
};
export default configuration;
