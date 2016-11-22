"use strict";
var InMemoryIkanDataService = (function () {
    function InMemoryIkanDataService() {
    }
    InMemoryIkanDataService.prototype.createDb = function () {
        var ikanlist = [
            { id: 10, nama_ikan: "Ikan Ikanan" },
            { id: 12, nama_ikan: "Ikan Mas" },
            { id: 13, nama_ikan: "Ikan Teri" },
            { id: 14, nama_ikan: "Ikan Sapu-Sapu" },
            { id: 15, nama_ikan: "Ikan Koi" }
        ];
        return { ikanlist: ikanlist };
    };
    return InMemoryIkanDataService;
}());
exports.InMemoryIkanDataService = InMemoryIkanDataService;
//# sourceMappingURL=in-memory-data.service.js.map