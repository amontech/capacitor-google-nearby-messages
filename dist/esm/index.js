import { registerPlugin } from '@capacitor/core';
const GoogleNearbyMessages = registerPlugin('GoogleNearbyMessages', {
    web: () => import('./web').then(m => new m.GoogleNearbyMessagesWeb()),
});
export * from './definitions';
export { GoogleNearbyMessages };
//# sourceMappingURL=index.js.map