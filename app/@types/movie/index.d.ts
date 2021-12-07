import { RouteProp } from '@react-navigation/core';
import { NavigationProps } from '../navigation';
declare module Movie {
  export type DetailProps = {
    route: RouteProp<NavigationProps.MovieParamList, 'MovieDetail'>;
  };

  export interface Movie {
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    posterUrl: string;
    rate: number;
    movieNmOg: string;
    showTm: string;
    prdtYear: string;
    openDt: string;
    prdtStatNm: string;
    typeNm: string;
    nations: { nationNm: string }[];
    genres: { genreNm: string }[];
    directors: { peopleNm: string; peopleNmEn: string }[];
    actors: {
      peopleNm: string;
      peopleNmEn: string;
      cast: string;
      castEn: string;
    }[];
    showTypes: {
      showTypeGroupNm: string;
      showTypeNm: string;
    }[];
    companys: {
      companyCd: string;
      companyNm: string;
      companyNmEn: string;
      companyPartNm: string;
    }[];
    audits: {
      auditNo: string;
      watchGradeNm: string;
    }[];
    staffs: {
      peopleNm: string;
      peopleNmEn: string;
      staffRoleNm: string;
    }[];
  }
}
