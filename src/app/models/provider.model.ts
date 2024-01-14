export interface Provider {
    id: number;
    legalName: string;
    commercialName: string;
    taxIdentificationNumber: number;
    phoneNumber: string;
    email: string;
    website: string;
    physicalAddress: string;
    country: string;
    annualBillingInDollars: number;
    lastEdited: Date;
    userId: number;
  }