export type Service = {
  id: string;
  _id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  categoryBanner: string;
  categoryIcon: string;
  category: string;
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
