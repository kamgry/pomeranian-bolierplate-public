import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { welcomeViewRouterMetaData } from './WelcomeView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
