export interface DataContentTypes {
  id: number
  title: string
  description: string
}
export interface DataContentWithTopicsTypes {
  id: string
  title: string
  description: {
    topic1?: string
    topic2?: string
    topic3?: string
    topic4?: string
  }
}
export interface PagesNamesTypes {
  education: string
  politicalControl: string
  prisonSystem: string
  democracy: string
  abortion: string
  necropolitic: string
  humanRights: string
  drugs: string
  projectsStudents: string
}
export interface PrimaryConceptsDataTypes {
  id: number
  title: string
  description: string
  goingTo: string
  linklabel?: string
  author: string
}
export interface StudentsDocumentsDataTypes {
  id: number
  title: string
  documentUrl: string
}
export interface AuthorsBiographyDataTypes {
  id: number
  title: string
  description: string
  buttonTitle: string
}
