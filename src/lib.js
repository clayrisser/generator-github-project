import emptyDir from 'empty-dir';
import gitUserEmail from 'git-user-email';
import gitUserName from 'git-user-name';

export function isEmpty() {
  return emptyDir.sync(process.cwd());
}

export function guessEmail() {
  return gitUserEmail() || 'email@example.com';
}

export function guessUsername(email) {
  const matches = (email || guessEmail()).match(/^[^@]+/g);
  if (matches.length > 0) return matches[0];
  return 'some-username';
}

export function guessName() {
  const matches = process.cwd().match(/[^\/]+$/g);
  if (matches.length > 0) return matches[0];
  return 'some-name';
}

export function guessAuthorName() {
  return gitUserName() || 'Some Name';
}

export function copy(yo) {
  return Promise.all([
    yo.fs.copyTpl(
      yo.templatePath('template/shared/README.md'),
      yo.destinationPath('README.md'),
      { ...yo.context }
    ),
    yo.fs.copyTpl(
      yo.templatePath('template/shared/CHANGELOG.md'),
      yo.destinationPath('CHANGELOG.md'),
      { ...yo.context }
    ),
    yo.fs.copyTpl(
      yo.templatePath('template/shared/CONTRIBUTING.md'),
      yo.destinationPath('CONTRIBUTING.md'),
      { ...yo.context }
    ),
    yo.fs.copyTpl(
      yo.templatePath('template/shared/LICENSE'),
      yo.destinationPath('LICENSE'),
      { ...yo.context }
    )
  ]);
}
