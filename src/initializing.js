import dateFns from 'date-fns';
import yeomanOptionOrPrompt from 'yeoman-option-or-prompt';

export default async function initialize(yo) {
  yo.context = {
    dateFns
  };
  yo.optionOrPrompt = yeomanOptionOrPrompt;
}
