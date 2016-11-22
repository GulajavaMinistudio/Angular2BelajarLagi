"use strict";
var InMemoryIkanBesarService = (function () {
    function InMemoryIkanBesarService() {
    }
    InMemoryIkanBesarService.prototype.createDb = function () {
        var ikanbesarlist = [
            { id_nama_ikan: 11, nama_ikan: "Ikan Besar 1" },
            { id_nama_ikan: 12, nama_ikan: "Ikan Besar 2" },
            { id_nama_ikan: 13, nama_ikan: "Ikan Besar 3" },
            { id_nama_ikan: 14, nama_ikan: "Ikan Besar 4" },
            { id_nama_ikan: 15, nama_ikan: "Ikan Besar 5" },
            { id_nama_ikan: 16, nama_ikan: "Ikan Besar 6" }
        ];
        return { ikanbesarlist: ikanbesarlist };
    };
    return InMemoryIkanBesarService;
}());
exports.InMemoryIkanBesarService = InMemoryIkanBesarService;
//# sourceMappingURL=mock-rest-ikanbesar.js.map