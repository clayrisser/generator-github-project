export default async function writing(yo) {
  yo.fs.copyTpl(
    yo.templatePath('README.md'),
    yo.destinationPath('README.md'),
    yo.context
  );
  yo.fs.copyTpl(
    yo.templatePath('CHANGELOG.md'),
    yo.destinationPath('CHANGELOG.md'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('CONTRIBUTING.md'),
    yo.destinationPath('CONTRIBUTING.md')
  );
}
