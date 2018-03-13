import dateFns from 'date-fns';
import yoOptionOrPrompt from 'yo-option-or-prompt';

export default async function initializing(yo) {
  yo.context = {
    dateFns
  };
  yo.optionOrPrompt = yoOptionOrPrompt;
}
