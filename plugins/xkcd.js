const { Bixby, isPublic, XKCDComic } = require("../lib");

Bixby(
  {
    pattern: "xkcd",
    fromMe: isPublic,
    desc: "Send a random XKCD comic.",
    type: "misc",
  },
  async (message, match, m) => {
    const _0x443e5c=_0x8112;(function(_0xd62ef0,_0x30a0fe){const _0x5a624e=_0x8112,_0x3ab29b=_0xd62ef0();while(!![]){try{const _0x28f447=-parseInt(_0x5a624e(0x9a))/0x1*(parseInt(_0x5a624e(0x9f))/0x2)+-parseInt(_0x5a624e(0xab))/0x3*(parseInt(_0x5a624e(0xa8))/0x4)+parseInt(_0x5a624e(0x9e))/0x5*(parseInt(_0x5a624e(0xa9))/0x6)+parseInt(_0x5a624e(0xa4))/0x7*(parseInt(_0x5a624e(0xa3))/0x8)+-parseInt(_0x5a624e(0xa5))/0x9*(-parseInt(_0x5a624e(0x9b))/0xa)+-parseInt(_0x5a624e(0xa0))/0xb+parseInt(_0x5a624e(0xa6))/0xc;if(_0x28f447===_0x30a0fe)break;else _0x3ab29b['push'](_0x3ab29b['shift']());}catch(_0x34054c){_0x3ab29b['push'](_0x3ab29b['shift']());}}}(_0x2783,0xca4be));function _0x2783(){const _0x205995=['reply','4XuXOIp','2298MsmETA','image','870360CgeXCg','message','25IEDxbd','110IIDzqh','Error\x20fetching\x20XKCD\x20comic.','data','1085JjkIKg','120090Mlxnlz','7151573rlQeMm','Error:','imageUrl','9120992MwOEMK','7ALsdaE','84258umDkcB','23325324lNMFHu'];_0x2783=function(){return _0x205995;};return _0x2783();}function _0x8112(_0x314474,_0x51da6f){const _0x2783d8=_0x2783();return _0x8112=function(_0x81123f,_0xbacca7){_0x81123f=_0x81123f-0x99;let _0x1a0809=_0x2783d8[_0x81123f];return _0x1a0809;},_0x8112(_0x314474,_0x51da6f);}try{const result=await XKCDComic();message['sendMessage'](result[_0x443e5c(0xa2)],{'quoted':message[_0x443e5c(0x9d)]},_0x443e5c(0xaa));}catch(_0x5c0958){console['error'](_0x443e5c(0xa1),_0x5c0958[_0x443e5c(0x99)]),message[_0x443e5c(0xa7)](_0x443e5c(0x9c));}
  }
);
