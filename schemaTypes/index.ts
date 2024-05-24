import {landingPage} from './pages/landingPage'
import {teaser} from './utils/teaser'
import {image} from './utils/image'
import {pageInformation} from './components/pageInformation'
import {heroBanner} from './components/heroBanner'
import {solutionSection} from './components/solutionSection'
import {referencedClients} from './components/referencedClients'
import {featuredArticle} from './components/featuredArticle'
import {expertAdvice} from './components/expertAdvice'
import {joinUs} from './components/joinUs'
import {twoGrid} from './components/twoGrid'
import {expertAdvicesTitles} from './utils/expertAdvicesTitles'
import {header} from './header/header'
import {navigationItem} from './header/navigation-item'
import {item} from './header/item'
import {languageItem} from './header/language'

export const schemaTypes = [
  landingPage,
  teaser,
  image,
  expertAdvicesTitles,
  pageInformation,
  heroBanner,
  solutionSection,
  referencedClients,
  featuredArticle,
  expertAdvice,
  joinUs,
  twoGrid,
  header,
  navigationItem,
  item,
  languageItem
]
