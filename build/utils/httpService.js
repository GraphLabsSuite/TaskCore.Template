"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function postData(address, obj) {
    return fetch(address, {
        method: 'post',
        body: JSON.stringify(obj)
    }).catch(function (reason) {
        // tslint:disable-next-line no-console
        console.error(reason);
    });
}
exports.postData = postData;
//# sourceMappingURL=httpService.js.map