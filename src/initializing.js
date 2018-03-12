import dateFns from 'date-fns';
import yeomanOptionOrPrompt from 'yeoman-option-or-prompt';

export default async function initialize(yo) {
  if (yo.options.destination) {
    yo.destinationRoot(yo.options.destination);
  }
  yo.context = {
    dateFns
  };
  yo.optionOrPrompt = yeomanOptionOrPrompt;
}
