import {
  cardEducationData,
  cardEducationEnglishData,
  marilenaData,
  marilenaEnglishData,
  pauloFreireData,
  pauloFreireEnglishData,
} from './card-education-data'
import { abortionItems, abortionItemsEnglish } from './data-abortion'
import {
  achileMbembeData,
  achileMbembeEnglishData,
  foucaultData,
  foucaultEnglishData,
} from './data-authors-necropolitic'
import { democracyData, democracyEnglishData } from './data-democracy'
import { drugsData, drugsEnglishData } from './data-drugs'
import { humanRightsData, humanRightsEnglishData } from './data-human-rights'
import { pagesNames, pagesNamesEnglish } from './data-pages-names'
import {
  politicalControlItems,
  politicalControlItemsEnglish,
} from './data-political-control'
import {
  primaryConceptsData,
  primaryConceptsEnglishData,
} from './data-primary-concepts'
import { prisonSystemData, prisonSystemEnglishData } from './data-prison-system'
import {
  relationsHumanRightsConcepts,
  relationsHumanRightsConceptsEnglish,
} from './data-relations-human-rights'

export const data = {
  portuguese: {
    pagesNames: pagesNames[0],
    prisonSystem: prisonSystemData,
    abortion: abortionItems,
    politicalControl: politicalControlItems,
    primaryConcepts: primaryConceptsData,
    education: cardEducationData,
    pauloFreire: pauloFreireData,
    marilena: marilenaData,
    democracy: democracyData,
    drugs: drugsData,
    humanRights: humanRightsData,
    relationsHumanRights: relationsHumanRightsConcepts,
    achileMbembe: achileMbembeData,
    foucault: foucaultData,
  },
  english: {
    pagesNames: pagesNamesEnglish[0],
    prisonSystem: prisonSystemEnglishData,
    abortion: abortionItemsEnglish,
    politicalControl: politicalControlItemsEnglish,
    primaryConcepts: primaryConceptsEnglishData,
    education: cardEducationEnglishData,
    pauloFreire: pauloFreireEnglishData,
    marilena: marilenaEnglishData,
    democracy: democracyEnglishData,
    drugs: drugsEnglishData,
    humanRights: humanRightsEnglishData,
    relationsHumanRights: relationsHumanRightsConceptsEnglish,
    achileMbembe: achileMbembeEnglishData,
    foucault: foucaultEnglishData,
  },
}
