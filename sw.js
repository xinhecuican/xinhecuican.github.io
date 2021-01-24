/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","e9001d04a70d2d43346a068343592d1f"],["/archives/2019/index.html","77e4fc6dd1ac3e7ccea4374a614db5a6"],["/archives/2020/01/index.html","95b8dd2918531fa0ee3a87b377bbc462"],["/archives/2020/01/page/2/index.html","3d59fcbb93325cf4a77fe8d05a48be7c"],["/archives/2020/01/page/3/index.html","020072f0a55b073210fe537c0a95ffeb"],["/archives/2020/01/page/4/index.html","7c15ba52fc7e9609c0ddafd51cbb56c1"],["/archives/2020/01/page/5/index.html","b06f2d9254536daa5acadfadc835c234"],["/archives/2020/01/page/6/index.html","6f4bb121a73aa4dafce6ed3ead064c2e"],["/archives/2020/02/index.html","0062025c46bcc78dc595794c148a94fb"],["/archives/2020/02/page/2/index.html","4ef31181315aaa7e5cd901086e65f565"],["/archives/2020/02/page/3/index.html","ed3496a4c08eb716eb454fbca51ca279"],["/archives/2020/03/index.html","629db5877debf9b157031fc878f3fdf4"],["/archives/2020/03/page/2/index.html","0159c4de7cf4a2ce4eb1e954d5bf5c37"],["/archives/2020/04/index.html","9bb4d41eddf7b77cfeea28059f47d7cf"],["/archives/2020/04/page/2/index.html","2fd96a12dfceacbc8a4f924ef57c9601"],["/archives/2020/05/index.html","318d64f2e91387d52bc756a3d7f161e9"],["/archives/2020/05/page/2/index.html","832cbc551deb83a1c4a8e0c664c0aa99"],["/archives/2020/06/index.html","5479e28dc5b746aa79e0e3cee6c0fc8b"],["/archives/2020/07/index.html","16aafc8d79362b0d597515936aa192ab"],["/archives/2020/07/page/2/index.html","568bd864daaab52512a67c9ca079cb93"],["/archives/2020/08/index.html","96273cb046cc9f2e2e2296ddbd6e9c78"],["/archives/2020/10/index.html","0d6ac35db5d1415c863775dc8c57ad07"],["/archives/2020/11/index.html","cd4868c810cfdddfea7bfcebf114cd9b"],["/archives/2020/12/index.html","2896831eaa9c98f2e3e1f400ca08a306"],["/archives/2020/index.html","22fc8f328d26f6811ec668629bf6f698"],["/archives/2020/page/10/index.html","c5e3c1c50e28a84bdad8738adaff1adc"],["/archives/2020/page/11/index.html","7029097dce702797ca1f00f424d92229"],["/archives/2020/page/12/index.html","109f5bcc05ef0a6256e58f4e771a8385"],["/archives/2020/page/13/index.html","d5d91e11d808a35224f918d7b7b20131"],["/archives/2020/page/14/index.html","1bfb3a74e30cae621abaaf202a5cd71e"],["/archives/2020/page/15/index.html","98588a82addf1212cba85b32ce10c688"],["/archives/2020/page/16/index.html","9de3ff8b2a9074e4c7de791138b6b1c8"],["/archives/2020/page/2/index.html","e4528481fd16c8536cfb74007038b8db"],["/archives/2020/page/3/index.html","db98d5cb457be5bdeb1c48f3ae233205"],["/archives/2020/page/4/index.html","c0bfd0051beaa655d4dcf5aff3b830ce"],["/archives/2020/page/5/index.html","e5e81a28778bebefb6ce2a04ea78083b"],["/archives/2020/page/6/index.html","0261a91d93c8326cb1555fd9829ef8c5"],["/archives/2020/page/7/index.html","649a6d6dd3c2ed906bd85501abcbe670"],["/archives/2020/page/8/index.html","bd70ba1193000dded085fc6e70f398b2"],["/archives/2020/page/9/index.html","73e54c2ea5d7b62fe315f49eaf328ee2"],["/archives/2021/01/index.html","3d750ab6343c27e6d8e8bcdce2fdaeab"],["/archives/2021/index.html","5eead087a30b6de9a8e96a75a5e9de08"],["/archives/index.html","a0cec1d71deecfa6ca60ac83b447d769"],["/archives/page/10/index.html","59134c726ad42a29c3316d3a38f61b5a"],["/archives/page/11/index.html","72b0b6bf021dd98245abfdb92b51782b"],["/archives/page/12/index.html","319a073d67c18cbc9bdccf6dfd5dc3e1"],["/archives/page/13/index.html","982e80b0e43f76af91f452f372f5ceba"],["/archives/page/14/index.html","177f0353ebbda75e69d508a55f42b805"],["/archives/page/15/index.html","13c389551a64e3276581f4e93b056441"],["/archives/page/16/index.html","5443bbe731fff0bf45bdd9ed32e8d827"],["/archives/page/17/index.html","7739ee40c59c8742a0e4183aaf55290d"],["/archives/page/2/index.html","cf4f6dab758ce276554f174802178d1e"],["/archives/page/3/index.html","7f5392574a4ed69a8cd7bad07641a78b"],["/archives/page/4/index.html","ad207bce5b0179508d5fffa756c5fc95"],["/archives/page/5/index.html","617ded5af93a781e93fb2c9b416fe7a7"],["/archives/page/6/index.html","14136c7a0c87cc65639f92b8e8900e74"],["/archives/page/7/index.html","4048e07edc097b3cd1d7717018c0cd9e"],["/archives/page/8/index.html","4fea9ff5e92eb0b96834003a6fd3f758"],["/archives/page/9/index.html","9ef3918a3c60d008d19cb8dc6385ad8f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","b24bb083b30c49b1e761742a21373f0d"],["/categories/Linux/page/2/index.html","71313039a31723565d05dbaf5e53336f"],["/categories/MySQL/index.html","742913b17ac79fb35b0289b25d0f7859"],["/categories/Python/index.html","8fa176a581d10ac343589e1d93f16dce"],["/categories/c/index.html","3e175da0f8ff39bcea2b53fc9feb110a"],["/categories/index.html","2ca06eb1540293d9d06674fb7631b77a"],["/categories/java/index.html","094a5fb5347bfb62712649888f49cfdd"],["/categories/java/page/2/index.html","eacdcf5665ce702844f6f807eb93af0c"],["/categories/java/page/3/index.html","965475a9cd65aaaf22cca8747c826470"],["/categories/next/index.html","0d1779132500a5081f9ee038dd870fa4"],["/categories/stl/index.html","840b84b259f174ca760bb484ba7781bc"],["/categories/windows/index.html","f485964066178a9d388945b927de2d3f"],["/categories/基础/c/index.html","4790e6fbe28259704b292fd9789dc8bd"],["/categories/基础/index.html","0cce0efb7f44c05c9d82e2bcfa75eee4"],["/categories/基础/page/2/index.html","5dea0d7d9e9953238a49edb35c62ed1e"],["/categories/数学/index.html","99533eb94bbfaa1b1b9dc84854787741"],["/categories/数学/概率论/index.html","51be4898092a43cb170cc9f2cd5d2834"],["/categories/数据结构/index.html","9f6407dcd94d22fafb8678346b327cd4"],["/categories/数据结构/算法/index.html","402a3375ecf9283408106a1934c25ce8"],["/categories/机器学习/index.html","fe7f0d21ad73309136b0483e85a65438"],["/categories/杂项/index.html","c41dd1fa74e70f39fe2047b056a5de5d"],["/categories/汇编/AT-T/index.html","95c779d0e89098950b76ccaa8ca62592"],["/categories/汇编/index.html","311701fb029be1bd9394ca1041a7a1ad"],["/categories/汇编/page/2/index.html","4d119cf4e0f6870cd05fbac7e723c093"],["/categories/汇编/page/3/index.html","922086928154bc78fe1c27d26032684e"],["/categories/算法/index.html","3fa6be1881d98568dd3278a74881de52"],["/categories/算法/page/2/index.html","d5d3508cfd7215ff65897aaf5b7b2093"],["/categories/算法/page/3/index.html","2443f1fb0c0b24c495c32a0d8bbc633b"],["/categories/计算机系统基础/index.html","ac7d4679b9a6da91f8afb44fe97777b4"],["/categories/计算机系统基础/page/2/index.html","7e2194e47535e0994eba57c5bfa54064"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fc6e4a74c209d5542c1111491e6d4dd5"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","bbeb3191070bab41dedaad7eede87909"],["/page/11/index.html","992cf680b40579585b65bc8c0846b0f9"],["/page/12/index.html","fc5b46e63736c3b81751e2a99bea8ebc"],["/page/13/index.html","671cb527ab3070be554d5fc710aae8b1"],["/page/14/index.html","89bd539951705d7e827d58f778b36319"],["/page/15/index.html","3df7566a4ea31511eea455f795116480"],["/page/16/index.html","fa77518ec7126d244dcd442294fc5d2a"],["/page/17/index.html","1d1151c1dbf0aa1ce1f98e0af107d309"],["/page/2/index.html","e27afac38d951c5703687b3e5f7f64ce"],["/page/3/index.html","a8a9efa0e42be884aa300950c90d5542"],["/page/4/index.html","6afdf50c886f1389f1901b10dba9061d"],["/page/5/index.html","97a803aaff10fec71fb3736d63d33ee3"],["/page/6/index.html","7d7584da6a644ebbf9b1063c15249583"],["/page/7/index.html","b9f3f36dcba0fef1b6886df98d5ec193"],["/page/8/index.html","1ae5cb2861e044974393fb3d6e3b6440"],["/page/9/index.html","9df2855c492ee0bdcba1db86f48b988d"],["/post/10919.html","4c246ce6d82c50b61c9d861db28c1d52"],["/post/11051.html","569dc4d23afac90d21c0efd9286336f1"],["/post/11306.html","e951252924adf47be3e6bb1390d4d4ae"],["/post/11491.html","7755374d52826429f058edca147b68c4"],["/post/11799.html","e78da3376ddcb054b0f5a7975bb14f80"],["/post/12334.html","4d58bfa0dd99db868f8f36fb04ee3659"],["/post/1326.html","cbd6e1f42428e5d27f978d13aeac2c17"],["/post/14379.html","a0958eec15c04ad1b007590e83b5b0cd"],["/post/14511.html","6c0efc21bd38f5e20754bb76ac130ec3"],["/post/15201.html","2f9b2a6f4db993d771582f9647c8f226"],["/post/15425.html","222e2d660160de5e626e12f220d6eeb3"],["/post/16107.html","daa9db1fc8ba03a5f9b19cdc9f36c754"],["/post/16e2846c.html","02173c86a41c3f218d7b0a8644354bd2"],["/post/17862176.html","904caf9d7ccbe1646d6ade9f9576a32d"],["/post/18431.html","8b813600441c7e521d17997d4381d418"],["/post/18912.html","f7d5b945140204412e1e5f696ee902ce"],["/post/1b9c8662.html","70b49a847b29306ddd343f669ea95ac9"],["/post/20198.html","24104795d4cf35bb6e0aeab7eebeafe9"],["/post/20ff5ccb.html","08dbc7e72687c93ecd0ad825822defd1"],["/post/21624.html","5412e566b79fe6657e21ff0e6b9faa7f"],["/post/2170659a.html","77e78ce94817bb5ff7b217e0cb7f7ab7"],["/post/22102.html","7f66c9fb4c3f5fc6cb1820af655ee0dd"],["/post/22493.html","f53a5e08a6ba95971fd5318bfd065867"],["/post/235252ea.html","db1aaec2762693fca756adba0b0482c5"],["/post/25699.html","538820ee46c1271b6f44246913cffe47"],["/post/2647.html","d90decf95e1e95d46534c14c18f09e9a"],["/post/26477.html","6ca53083a7f1c2cfbaedcfd04d82bcb0"],["/post/26671.html","f201a03edd8a6266ca4336cc3d7c0a8f"],["/post/26737.html","ff525ce1659981c22116c6f3870902ad"],["/post/27045.html","aecaf370018f029e7fac2ddb9ade5c2c"],["/post/27621.html","9d077b17d8e5768c712c3c1397abfe2a"],["/post/27890.html","fc0f9ae1ec4c28098ef6d94bacb32741"],["/post/27980.html","e913fca85672e59ad10a8618e0b808e8"],["/post/280b588e.html","311d5aa55b3f54670063db63fc4ae01e"],["/post/28579.html","e32a34b9a3ecbad41dfe4a7957934259"],["/post/28877bf.html","8e0919221358cbc5d22ad0521581fe0f"],["/post/28954.html","3621d5d3737b94c41d215062fb628254"],["/post/29378.html","9909c72eee9de9b6cd742f4a63192fc2"],["/post/29949.html","0b18ed5c319f62d9b96e72ffb6813ee5"],["/post/2ae43b86.html","bb4b39699f88b41a5239154049e87471"],["/post/2ba82a45.html","a00f5eb10198c0794e00349a3164ef10"],["/post/30072.html","dc179195746515579c1f1e08fa234954"],["/post/30479.html","b4a5b9b1a5614127157204d579f97714"],["/post/31a6b40.html","3ac136de9702023890d9832b60edc26b"],["/post/325cdbf2.html","5ef10b3fa908371f301d3fd235b79095"],["/post/3319ed9a.html","b9b7ad8251a3113ae9f464504b343de8"],["/post/3320.html","891f36317686e3c9564c5d4eaa716e21"],["/post/33cb1151.html","b6722e2e18abd0fc676f2809fe6619dc"],["/post/34811d5f.html","ba203ca932f2ea1f558d8515bd16dff8"],["/post/348d4e04.html","11f8eafd2e52d02b8e5e727b59289cba"],["/post/3526.html","41ec727000631320284f897e123b4118"],["/post/35532.html","aa9d2acc804744b54d22f127c72a1a86"],["/post/35848.html","eec7bec6ddb0d6485439a6b783568b0d"],["/post/37318.html","36ab36e09e83785d58e54396deace6a2"],["/post/37663.html","cea85b0e7ebbb5006bb8d0a1e0fc163e"],["/post/38035.html","10ad504511713a632d7e7f29f57794f4"],["/post/38072.html","49e975eaa5c33a55841d4b3f06e15235"],["/post/38145.html","ddeb23a1ef2bc85e2c4bac7f72f67185"],["/post/39968.html","a15f6dc5f8967dd3ea69cf3ac4c7283c"],["/post/3de4bc69.html","db51859bdec34f1b64c444ddea4ead95"],["/post/40583.html","6cc9a1bf3499b464c5bb98ee1e995cb9"],["/post/40997091.html","5806ea4ded59e4f253ebcd9674010281"],["/post/41129.html","0e928cf477a247ba8fd45aca55d90cbe"],["/post/41763.html","56858da9036240ee6c65176317c9616b"],["/post/41829.html","517394a646762b1935fab9c14bf01e5a"],["/post/41840.html","98dd337e789eca4a51ffb10fbeb4f027"],["/post/41e39f2b.html","13d50b81a207eb9b3a87cb5ff5ae6506"],["/post/43817.html","a3c6f78217abf54e7ba42625e8c41c50"],["/post/43878.html","1884936c4716dd2de2c699bfb651c018"],["/post/44250.html","cb835a876893fa324759c801939e83c0"],["/post/44336.html","1756b6f469df056b6f98b2f2e97ca55b"],["/post/44454.html","f0fd0d588a42333b90adfb1acbf5edb5"],["/post/44487.html","800c250a99ca6e8af15b30c8d8176d62"],["/post/44914.html","c4a03ca2592873b7d2429899db4d9b47"],["/post/4551c130.html","65b6c22e3e6fc0aab216ef30b98256ed"],["/post/455a4c92.html","06fefaf2ccf9ae968bd3efcfe7a52625"],["/post/46466.html","620b8114ce311e4fd6981b42b49da047"],["/post/46925.html","f05cf9ab94fdcb14b09006c45e37f331"],["/post/47075.html","34d3ea052aff1f33d974021241432ff5"],["/post/48220.html","f7898905e2c46d0467f0ed03998340b0"],["/post/4b1879e3.html","00705966bf8c688736b974ba2eb32796"],["/post/4c720881.html","2f0f64c44b3c1c8a685cd3d58209a6d0"],["/post/50daec4.html","105b775349ecf9ecb963813652af8633"],["/post/51491.html","7a753b9490b94013e217c43cccead235"],["/post/51e63dcf.html","04d7df23b50e2cb7e00580a7fa38df4d"],["/post/52078.html","984e130e25617df6136d9b7c3370ba1d"],["/post/53677394.html","73d607da51e8389a5bab0d0035e51e1d"],["/post/54300.html","4f5a83bdc40b4aa17c96c75221509de6"],["/post/54612.html","f0eaa1687fc3d1d85b9142d571de8b03"],["/post/54613.html","08f49c6a306dd90dc7151896da397461"],["/post/54708.html","7c63db3258a558b8f254b78f279651f1"],["/post/54778.html","b2aa3bd6cf2e971d3d20bf4c60f6edcb"],["/post/5490.html","a1c026364a77f17c29b7fdd98c741f79"],["/post/55046.html","f54d3ec8ff4eb49c45007b8916aeb038"],["/post/56929.html","ed3d14a037bbdd55e8bd2339f20d3c93"],["/post/57339.html","4c59af5cfe92d9c82313d168b828f1ac"],["/post/57449.html","cb3f76c34624b349e49d6820a22884d7"],["/post/57453.html","fa39cfb899cfa996791505fabef1983f"],["/post/57671.html","a5ed7a39e7053d6fef11770797c19ae7"],["/post/58313.html","b87f8572499f9f28fb7d331e0b64d87d"],["/post/58481.html","cedfd20925b9f9e244822ed341434f8a"],["/post/58986.html","36c26e2d7baf5d4d156e31140d9ade8f"],["/post/59431.html","43401fa1f7eee903646148aef3f37f57"],["/post/5951da65.html","610850fc16093888e4300393e1f6ede7"],["/post/5be7e977.html","e4d7b8f44b8f313bdbec733f756f9204"],["/post/5f9e4eff.html","d3e9aa0a52948dda0a257e3383a913a2"],["/post/604b49d0.html","4066f21b6ba646b6b2b66ee5e7d07ed3"],["/post/61312.html","b9b1b949bdba22b6e43844ada63e3ad7"],["/post/61738.html","6e0d61c8469ef1980e4ca5590f3e0f19"],["/post/61809.html","900cac865d7a16102eaa85c0b6a021e2"],["/post/61eaf19a.html","293339713f3e317dcb9471c0632f9615"],["/post/63002.html","602df7b11044456bae80bc4aa77287ce"],["/post/63711.html","763571caddb00bf390eb536a07092475"],["/post/6587.html","a6a827d2fc9dc478bdcafa21abbe7f26"],["/post/6589.html","9cdd0b9a8b650ebfe89d28b86f7ed0ee"],["/post/67454659.html","766afa57364e9824df448d9912e5ea99"],["/post/6880.html","e855c0aa0bd9a359f6656bb671425acb"],["/post/70263071.html","21b1017296b5ebe21ddf73ab41017621"],["/post/71038564.html","2e8528ee71f3ccab60bce677d0d90e69"],["/post/7119.html","d2d527ebc02d28798af5d85da655e862"],["/post/74e7fdff.html","b99ff2f826654119560d89607f08bbd7"],["/post/7502.html","9f38b499f3d8e53c791cf6d3c58d56e6"],["/post/7564.html","fbe386f71e8709680030ec5756944f3e"],["/post/766f9b60.html","06a8a26875b77d1b44e4eb08fad15351"],["/post/7ca31f7.html","d68c6e2471edad60c09bfa8498dcc357"],["/post/7d1c86da.html","e7e1f0901558c5c0c99a05ce18e2c4c7"],["/post/7f3bcd7f.html","fa272307c6af3e1762057faf2d3178c2"],["/post/8039.html","456cf2eba8614bcb49a51777add988e3"],["/post/8050.html","f891772ed1e27d329b3f4102c450bfe9"],["/post/8072.html","9f098a2b403c753534991cb4788a625f"],["/post/8274.html","469d448b7bedcae8dfca7643f870c601"],["/post/8372.html","3818d263f104ea2bfb51309bf4974b1a"],["/post/8498.html","680ceb6a66c3980f2905b24547f67a4a"],["/post/85b4e13b.html","ce79a5c782904dc82e40d1f2a9e6bd62"],["/post/912b2566.html","26c6b69c8d271a09adaaf3d5340ccec2"],["/post/9187.html","a10e61dd444bdbbf76c58f3a197689c7"],["/post/9197.html","6f782060b5fed2f30cd7a8d81171a304"],["/post/94ceb2fd.html","1281ecdfec4998d41eb49d1eb62bb69a"],["/post/95495db.html","ac19da8e9f2845f7e8b0a77b3a9475f7"],["/post/97246020.html","ed2a076bc5eba123a5a0d0d853557789"],["/post/9954ba8e.html","bf6887fbd4f7630e65509310fa74d6e2"],["/post/9d855db5.html","0045a53e5430c2e3499afa9a3712abc9"],["/post/a3a786d6.html","7426408de479618654f09d9e6c6abea3"],["/post/a444b428.html","46be1eb1123e64dc88a03b2ac73dc30e"],["/post/a50b8908.html","112f29f8005c7ebf8fa8a565ce5140ea"],["/post/aa1eade8.html","24e1bad37a9ce68fcd473059c6a19aa4"],["/post/ade8c6d6.html","f5ba9b598eb16061dfaefabfad42db42"],["/post/ae8362df.html","384b8714af9a14081e8b896f4c7e56ed"],["/post/b4c1d206.html","f782e6eaf8f47fee2680d302670132ae"],["/post/d213fc7f.html","2e53c0be174e4ea816844cb9fc89d1bc"],["/post/d431fab4.html","473e57ddb6cc57bf5b77cffe42dc17e0"],["/post/d5381517.html","4525cfe9087b06d4a421d63b176b133b"],["/post/d94f88de.html","ca8918413c273a410115bd831c64279f"],["/post/e058ffd8.html","bfb127ce103fb70682b38389a98ba3c8"],["/post/e0f8cb74.html","c641c3a1ea8a1bac4918c3acddef2181"],["/post/eefe591f.html","e19a204abb840f566391861978b1b7c7"],["/post/ef296a07.html","83084cf12a6d8af5dbbd0186a7a32bbc"],["/post/ef3a3fcc.html","ea1c820d86e27794b66dbc1ecde86cb3"],["/post/f201f9fd.html","6dd6d8e4667663a6b37a999f03884c45"],["/post/f79e4123.html","f75157d72a8d111c4ca24a3c0016228b"],["/post/f8648a1d.html","7b95af526df275281dbe0521929dd66a"],["/post/f89cb603.html","eeface83d0490b0c0d766e1ba06efe81"],["/post/fa288682.html","6202f14cb9ccc6f747a6caa3d32665d7"],["/post/fb98053e.html","8699a5d629b02a806b0f0683cc4fc841"],["/sw-register.js","bfecff40d58c0034f8c0329d7a20172c"],["/tags/AT-T/index.html","831637ef5991737ac5d7d230f1c03586"],["/tags/index.html","190b955dec021b1a46474871f5e79a69"],["/tags/动态规划/index.html","e76bdd2001246f3c976751d1d72a6f87"],["/tags/字符串/index.html","3cf736ea5b389317ca1a22817e110954"],["/tags/字符常量/index.html","c924dab229f79a91012191dfbf1fcafc"],["/tags/快排/index.html","6db420d88ce8c2085b72bb889d178298"],["/tags/排序/index.html","616730e89811a85607813429315ace21"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
