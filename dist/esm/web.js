import { WebPlugin } from '@capacitor/core';
export class GoogleNearbyMessagesWeb extends WebPlugin {
    async initialize(options) {
        console.log("initialize", options);
        throw new Error("Method not implemented.");
    }
    async reset() {
        console.log("reset");
        throw new Error("Method not implemented.");
    }
    // Publishes a message so that it is visible to nearby devices, using the default options from DEFAULT.
    async publish(options) {
        console.log("publish", options);
        throw new Error("Method not implemented.");
    }
    // Cancels an existing published message.
    async unpublish(options) {
        console.log("unpublish", options);
        throw new Error("Method not implemented.");
    }
    // Subscribes for published messages from nearby devices, using the default options in DEFAULT.
    async subscribe(options) {
        console.log("subscribe", options);
        throw new Error("Method not implemented.");
    }
    // Cancels an existing subscription.
    async unsubscribe(options) {
        console.log("unsubscribe", options);
        throw new Error("Method not implemented.");
    }
    async pause() {
        console.log("pause");
        throw new Error("Method not implemented.");
    }
    async resume() {
        console.log("resume");
        throw new Error("Method not implemented.");
    }
    async status() {
        console.log("status");
        throw new Error("Method not implemented.");
    }
}
const GoogleNearbyMessages = new GoogleNearbyMessagesWeb();
export { GoogleNearbyMessages };
//# sourceMappingURL=web.js.map