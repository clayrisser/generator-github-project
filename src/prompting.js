import path from 'path';
import {
  guessAuthorEmail,
  guessAuthorName,
  guessUsername,
  guessProjectDescription,
  guessProjectDestination,
  guessProjectVersion,
  guessProjectName
} from 'project-guess';

export default async function prompting(yo) {
  const { name } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project Name:',
      default: guessProjectName()
    }
  ]);
  let { destination } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'destination',
      message: 'Destination:',
      default: guessProjectDestination(name)
    }
  ]);
  destination = path.resolve(destination);
  const { description, version, license } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'description',
      message: 'Project Description:',
      default: guessProjectDescription()
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version:',
      default: guessProjectVersion()
    },
    {
      type: 'input',
      name: 'license',
      message: 'License:',
      default: 'MIT'
    }
  ]);
  const { authorName, authorEmail } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'authorName',
      message: 'Author Name:',
      default: guessAuthorName()
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: 'Author Email:',
      default: guessAuthorEmail()
    }
  ]);
  const { githubUsername } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'githubUsername',
      message: 'GitHub Username:',
      default: guessUsername(authorEmail)
    }
  ]);
  const { authorUrl } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'authorUrl',
      message: 'Author URL:',
      default: `https://${githubUsername}.com`
    }
  ]);
  const { homepage, repository } = await yo.optionOrPrompt([
    {
      type: 'input',
      name: 'homepage',
      message: 'Homepage:',
      default: `https://github.com/${githubUsername}/${name}`
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Repository:',
      default: `https://github.com/${githubUsername}/${name}`
    }
  ]);
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
  yo.context = { ...yo.context, ...yo.answers };
}
