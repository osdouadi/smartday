export type Category = {
  id: string;
  _id: string;
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  categoryImage: string;
  SEOSettings: {
    pageTitle: {
      ar: string;
      en: string;
    };
    pageDescription: {
      ar: string;
      en: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
