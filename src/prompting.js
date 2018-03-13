import YoBasePrompts from 'yo-base-prompts';
import path from 'path';

export default async function prompting(yo) {
  const {
    name,
    destination,
    description,
    version,
    license,
    authorName,
    authorEmail,
    githubUsername,
    authorUrl,
    homepage,
    repository
  } = await new YoBasePrompts(yo).prompt({
    name: true,
    destination: true,
    description: true,
    version: true,
    license: true,
    authorName: true,
    authorEmail: true,
    githubUsername: true,
    authorUrl: true,
    homepage: true,
    repository: true
  });
  const features = [];
  while (true) {
    const { feature } = await yo.prompt([
      {
        type: 'input',
        name: 'feature',
        message: 'Feature:'
      }
    ]);
    if (feature === '') break;
    features.push(feature);
  }
  const { installation, demo } = await yo.prompt([
    {
      type: 'input',
      name: 'installation',
      message: 'Installation command:'
    },
    {
      type: 'input',
      name: 'demo',
      message: 'Demo URL:'
    }
  ]);
  const dependencies = [];
  while (true) {
    const { dependencyName } = await yo.prompt([
      {
        type: 'input',
        name: 'dependencyName',
        message: 'Dependency:'
      }
    ]);
    if (dependencyName === '') break;
    const { dependencyUrl } = await yo.prompt([
      {
        type: 'input',
        name: 'dependencyUrl',
        message: 'Dependency URL:',
        default: 'https://example.com'
      }
    ]);
    dependencies.push({
      name: dependencyName,
      url: dependencyUrl
    });
  }
  yo.answers = {
    authorEmail,
    authorName,
    authorUrl,
    demo,
    dependencies,
    description,
    destination,
    features,
    githubUsername,
    homepage,
    installation,
    license,
    name,
    repository,
    version
  };
  yo.composeWith(require.resolve('generator-license'), {
    email: yo.answers.authorEmail,
    license: yo.answers.license,
    name: yo.answers.authorName,
    output: path.resolve(yo.answers.destination, 'LICENSE'),
    website: yo.answers.authorUrl
  });
  yo.context = { ...yo.context, ...yo.answers };
}
