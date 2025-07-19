import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IPeopleSlickProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  rootSiteURL: string;
  listName: string;
  webpartName: string;
  context: WebPartContext;
  UseRootSite: boolean;
  showDots: boolean;
  autoplaySpeed: number;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  recordToReturn: number;
  enableAutoplay: boolean;

  customFilter: boolean;
  customFilterValue: string;
  enableRedirectURL: boolean;

}
