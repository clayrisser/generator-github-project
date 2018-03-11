import 'babel-polyfill';
import Generator from 'yeoman-generator';
import dateFns from 'date-fns';
import path from 'path';
import optionOrPrompt from 'yeoman-option-or-prompt';
import {
  copy,
  guessEmail,
  guessDestination,
  guessUsername,
  guessName,
  guessAuthorName
} from './lib';

module.exports = class extends Generator {
  initializing() {
    if (this.options.destination) {
      this.destinationRoot(this.options.destination);
    }
    this.context = {
      dateFns
    };
    this.optionOrPrompt = optionOrPrompt;
  }

  async prompting() {
    const { name } = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project Name:',
        default: guessName()
      }
    ]);
    let { destination } = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'destination',
        message: 'Destination:',
        default: guessDestination(name, this.options.destination)
      }
    ]);
    destination = path.resolve(destination);
    const { description, version, license } = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'description',
        message: 'Project Description:',
        default: `The awesome ${name} project`
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version:',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'license',
        message: 'License:',
        default: 'MIT'
      }
    ]);
    const { authorName, authorEmail } = await this.optionOrPrompt([
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
        default: guessEmail()
      }
    ]);
    const { githubUsername } = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub Username:',
        default: guessUsername(authorEmail)
      }
    ]);
    const { authorUrl } = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'authorUrl',
        message: 'Author URL:',
        default: `https://${githubUsername}.com`
      }
    ]);
    const { homepage, repository } = await this.optionOrPrompt([
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
      const { feature } = await this.prompt([
        {
          type: 'input',
          name: 'feature',
          message: 'Feature:'
        }
      ]);
      if (feature === '') break;
      features.push(feature);
    }
    const { installation, demo } = await this.prompt([
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
      const { dependencyName } = await this.prompt([
        {
          type: 'input',
          name: 'dependencyName',
          message: 'Dependency:'
        }
      ]);
      if (dependencyName === '') break;
      const { dependencyUrl } = await this.prompt([
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
    this.answers = {
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
    this.context = { ...this.context, ...this.answers };
  }

  configuring() {
    this.destinationRoot(this.context.destination);
  }

  default() {}

  writing() {
    return copy(this);
  }

  conflicts() {}

  install() {}

  end() {}
};
