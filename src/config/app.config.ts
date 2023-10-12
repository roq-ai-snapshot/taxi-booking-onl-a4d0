interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Driver'],
  tenantName: 'Company',
  applicationName: 'Taxi booking online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read vehicle information',
    'Manage bookings',
    'Read price information',
  ],
  ownerAbilities: ['Manage company', 'Manage bookings', 'Manage vehicle', 'Manage user'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/7e1e5c37-ca5d-4b99-b8f1-12ddb2f96703',
};
