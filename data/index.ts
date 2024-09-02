import {
  cardEducationData,
  cardEducationEnglishData,
  marilenaData,
  marilenaEnglishData,
  pauloFreireData,
  pauloFreireEnglishData,
} from './card-education-data'
import { abortionItems, abortionItemsEnglish } from './data-abortion'
import { democracyData, democracyEnglishData } from './data-democracy'
import { drugsData, drugsEnglishData } from './data-drugs'
import { humanRightsData, humanRightsEnglishData } from './data-human-rights'
import { lgbtqiData, lgbtqiEnglishData } from './data-lgbtqi'
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
import { studentsDocumentsData } from './data-students-documents'

export const data = {
  portuguese: {
    pagesNames: pagesNames[0],
    prisonSystem: prisonSystemData,
    abortion: abortionItems,
    politicalControl: politicalControlItems,
    primaryConcepts: primaryConceptsData,
    education: cardEducationData,
    studentsDocuments: studentsDocumentsData,
    pauloFreire: pauloFreireData,
    marilena: marilenaData,
    democracy: democracyData,
    drugs: drugsData,
    lgbtqi: lgbtqiData,
    humanRights: humanRightsData,
    relationsHumanRights: relationsHumanRightsConcepts,
  },
  english: {
    pagesNames: pagesNamesEnglish[0],
    prisonSystem: prisonSystemEnglishData,
    abortion: abortionItemsEnglish,
    politicalControl: politicalControlItemsEnglish,
    primaryConcepts: primaryConceptsEnglishData,
    education: cardEducationEnglishData,
    studentsDocuments: studentsDocumentsData,
    pauloFreire: pauloFreireEnglishData,
    marilena: marilenaEnglishData,
    democracy: democracyEnglishData,
    drugs: drugsEnglishData,
    lgbtqi: lgbtqiEnglishData,
    humanRights: humanRightsEnglishData,
    relationsHumanRights: relationsHumanRightsConceptsEnglish,
  },
}
