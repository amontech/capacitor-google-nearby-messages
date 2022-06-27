import {registerPlugin} from '@capacitor/core';
import {GoogleNearbyMessagesPlugin} from "./definitions";

const GoogleNearbyMessages = registerPlugin<GoogleNearbyMessagesPlugin>('GoogleNearbyMessages', {
    web: () => import('./web').then(m => new m.GoogleNearbyMessagesWeb()),
});

export * from './definitions';
export {GoogleNearbyMessages};
