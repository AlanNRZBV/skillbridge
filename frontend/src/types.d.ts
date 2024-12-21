declare interface ICourse {
  _id: string;
  img: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  length: string;
  author: string;
}

declare interface ITestimonial {
  _id: string;
  img: string;
  author: string;
  content: string;
}

declare interface IFeature {
  title: string;
  value: boolean;
}

declare interface IPricingPlan {
  _id: string;
  type: 'free' | 'paid';
  perMonth: number;
  perYear: number;
  features: Record<string, IFeature>;
  createdAt: string;
  updatedAt: string;
}
