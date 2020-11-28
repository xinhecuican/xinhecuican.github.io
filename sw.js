/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","f1b9d2bf606059da4aebdc1178fe05df"],["/archives/2019/index.html","ceaf0d7a223b2a20df8b5bffa563a7e6"],["/archives/2020/01/index.html","27188b33af29e0e7c9dea20860c94886"],["/archives/2020/01/page/2/index.html","2a1f7af91f26230c0cb019dac8fafda4"],["/archives/2020/01/page/3/index.html","c15909bf6cb0206b701e5eeb0a189f0a"],["/archives/2020/01/page/4/index.html","1278ebe38654b62a6d11d053f4332b00"],["/archives/2020/01/page/5/index.html","6da1ffaa12e390676c70ec550d918078"],["/archives/2020/01/page/6/index.html","16f6c5028cfd4f595bf1b687e6c86c48"],["/archives/2020/02/index.html","13945ccaac692f68849f0104bbc14b6b"],["/archives/2020/02/page/2/index.html","11c6c93686c3d23a614c0fb2bd6d78f3"],["/archives/2020/02/page/3/index.html","39711bdf3e9749e9c41eee377e0717c8"],["/archives/2020/03/index.html","7b9eb5698946b89d9a2f499be90bb376"],["/archives/2020/03/page/2/index.html","ff7d312b973016fbf99c1ad315bf8130"],["/archives/2020/04/index.html","0f726d31a57e99df191005b5a7403513"],["/archives/2020/04/page/2/index.html","9379a4d744433f4386408e0999107fac"],["/archives/2020/05/index.html","9e0f225f6980645f047803bafe163fd1"],["/archives/2020/05/page/2/index.html","be980038f4bc55c7ecb7a77ebaff10fa"],["/archives/2020/06/index.html","6ff5eb276a847d1d4dd28108a3a54b1e"],["/archives/2020/07/index.html","4d615b6be51cdb5d4b1fb5f7819b2d6b"],["/archives/2020/07/page/2/index.html","a13f95d8ca3ded648ed4632536c915f8"],["/archives/2020/08/index.html","8c3d17de44fed85ac55d6a1bc2b229a2"],["/archives/2020/10/index.html","5d68f92b9d5ddf8dcb0181dd5025d642"],["/archives/2020/11/index.html","b34c4351b23152a2c66a5406fec3dcfd"],["/archives/2020/index.html","b6bc1fcd7146a7f3e85c3213affca940"],["/archives/2020/page/10/index.html","5b59551d23fee2047fdd97fe390c0806"],["/archives/2020/page/11/index.html","9610bd66face154a2e440762f7536d32"],["/archives/2020/page/12/index.html","4ec5d24d98cb6b1755bdd72a72aa5be9"],["/archives/2020/page/13/index.html","2682c56f97c352a1db13f160f6667a2e"],["/archives/2020/page/14/index.html","0571e7fad7a6c9f152d3ba9105c0ed9c"],["/archives/2020/page/15/index.html","ad70c83b908909ca8f22284ee888fd4c"],["/archives/2020/page/2/index.html","ed4b190ae31692d02077958d81cd1be5"],["/archives/2020/page/3/index.html","dceafed07a246bae83bccd128475a774"],["/archives/2020/page/4/index.html","61d3e8352f6865148151b2b23ec9100b"],["/archives/2020/page/5/index.html","0f9f300d5a909c53bad9a6d9d714c9cc"],["/archives/2020/page/6/index.html","b7df08452770085b97e6572fa8efccf1"],["/archives/2020/page/7/index.html","d3bf8fafe5d22699334cb9a0380627d5"],["/archives/2020/page/8/index.html","7d73d31b57b753871bdd910486cc5d73"],["/archives/2020/page/9/index.html","6c27dfbad486d12824c0317460704dc7"],["/archives/index.html","98f2464ff13c23cf61e39ba21db4b488"],["/archives/page/10/index.html","7249a3b7f13a27166bd5d05585e7d69c"],["/archives/page/11/index.html","7349b72bed69dbfdeab8710b487e92de"],["/archives/page/12/index.html","b9683ad75f5f99c0eb5437dd34dce3e2"],["/archives/page/13/index.html","096051fdc5c35154e571304d61e469f9"],["/archives/page/14/index.html","0a43fa6e1332b5b322fe4b0d92e7d5d0"],["/archives/page/15/index.html","6212e8a572476426d72497a3f71f34da"],["/archives/page/16/index.html","a1cc73d03da79ed004a81f98159c64a3"],["/archives/page/2/index.html","087d4a1da1cae59bd7adfa7e61efcf53"],["/archives/page/3/index.html","2fbcfb610d06d8ace706d684a2920cd6"],["/archives/page/4/index.html","60bcee27827defc4ab1853807979d46c"],["/archives/page/5/index.html","bf749149fb13d440b899b9fa0947b13f"],["/archives/page/6/index.html","4a65249642a7fabdcf88d0a5d102c8ec"],["/archives/page/7/index.html","00e6eef7ac24b00bda25b586e2ed80be"],["/archives/page/8/index.html","fc9a6638491c96ecfeec20372a507e3c"],["/archives/page/9/index.html","6d2c7a92cbd6148eb67e273353320ad7"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","a5dc4755d224cc4f0480d314127e4bfc"],["/categories/Linux/page/2/index.html","8627af111c7029824a0211cd32e4eed8"],["/categories/Python/index.html","e3cfe42664bbe5c8a82a11eafa98fd3f"],["/categories/c/index.html","4c79207d345a511f34dd8fe71b702a10"],["/categories/index.html","aebddedef7ec45691b255728c2f3b8bb"],["/categories/java/index.html","99750d71dc960cc56f1ff5b8e9129174"],["/categories/java/page/2/index.html","f56619b981cc1110e7413ca0b7327221"],["/categories/java/page/3/index.html","f331f16c2f3aa8ccaca33419a3f9f7f1"],["/categories/next/index.html","0c2071a1b8ed5c11f339da521f93c01a"],["/categories/stl/index.html","2677125d5abdbf4a752426d0ce56ffb1"],["/categories/windows/index.html","3f1e731ef858e52fe86d631d4bc09360"],["/categories/基础/c/index.html","5fecdb99962c718fda9756311eaa5da7"],["/categories/基础/index.html","52d846ccfebee5f48b0f2a6a011c7920"],["/categories/基础/page/2/index.html","dfd86a10bf28d669dcba30f20aa21e4d"],["/categories/数学/index.html","74997d7bd58ca02599b1c8240170ec9e"],["/categories/数学/概率论/index.html","e9657a1f4ef1b61f527c25a49859c0d9"],["/categories/数据结构/index.html","94dc05d5830aad391466d9fef2662b9e"],["/categories/数据结构/算法/index.html","5c6279ed95d9ce91ab58e4bdb91b9b14"],["/categories/机器学习/index.html","51f0f3e3d1dd9d9aaf79a7260555f84a"],["/categories/汇编/AT-T/index.html","af4f23cc553886e0b73843362b183e87"],["/categories/汇编/index.html","8a084517afcaa7fee2e7658cc102a4d0"],["/categories/汇编/page/2/index.html","5a9a69181f46f7f07f348f1fc67b5f02"],["/categories/汇编/page/3/index.html","22824bb4c1075e45be27e77a51f522b4"],["/categories/算法/index.html","1ebaef806319c606c95a68512750bdeb"],["/categories/算法/page/2/index.html","f3a59fc40b277b544e96e8822275709e"],["/categories/计算机系统基础/index.html","80c8035fdca92bd23d3fb1571686fc0a"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2703f8b0f90c2ecd2163e8986aeb519a"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","5ac7cc0b57db1154d780a18ef823bbac"],["/page/11/index.html","55d80a92c946beb4c914ce66cc72d065"],["/page/12/index.html","a3f70cccd15aaf504ca73e80d5977345"],["/page/13/index.html","cb70e3e86c1fb01bff400bafabb32a7d"],["/page/14/index.html","931df658f23340e1c644c8bcf76c4e36"],["/page/15/index.html","9d9cb04475d0a9e805078ae9eaafea3d"],["/page/16/index.html","a24eae2fcbe6fbc05c7c71161fb78f0c"],["/page/2/index.html","13866951bbe99cf10bfb941caa2c4629"],["/page/3/index.html","f6e0ad0f725f7ee545520b9c45c1902b"],["/page/4/index.html","997ed85a9e3995e6e01a30a9195d05dc"],["/page/5/index.html","f7ae0e95b44c3bb8c3fc6e833d91ea6e"],["/page/6/index.html","af6d63e91152a4fd05b3c5c0202d3fda"],["/page/7/index.html","58243f2ccc06c71010c224ee599c016e"],["/page/8/index.html","6ead199189e28b78931370cb09f250a6"],["/page/9/index.html","ae85331440f117bc837230e800e454aa"],["/post/10919.html","d9022b27d6d217c1d15c9ab280011510"],["/post/11051.html","666dfe2bfeb1b6087d38d1a89db7d21a"],["/post/11306.html","d19bb61a0aed494cf250479f4a19bf92"],["/post/11491.html","22bda0726563756223f9f15e5780a64b"],["/post/11799.html","44ef357955827f5e5fe825abd2e142f9"],["/post/12334.html","88e7e61e0c5f232cb7e1e76b58c634b6"],["/post/1326.html","1a3c48dadfea31a07f31ddbcb9c62be3"],["/post/14379.html","14c9e6bd6712e8b09c0a557f442a43b0"],["/post/14511.html","560505fcf436be554eb88932c9752bea"],["/post/15201.html","1584b94186df4dd5c56585fda320299b"],["/post/15425.html","9ea2f80e07aaa74a5c0369f3a4ba8510"],["/post/16107.html","aeb4f806bfcb7787123f1ad6adc2e394"],["/post/17862176.html","64348f2a67f861ea2d7efacf2dc0f48e"],["/post/18431.html","c2ccaa335f9a5d5772049fb4279062ee"],["/post/18912.html","d6e1946a3fa0e4cfd71d81337594e02f"],["/post/20198.html","99d2431c09b4f445bb070792e730a375"],["/post/20ff5ccb.html","229d08d7d5412976d93b2eef49a83e01"],["/post/21624.html","8cb7e3fcd3f37cfd215a2a8a06931e97"],["/post/2170659a.html","3cd841f7a6fed1551c1aabf0f5e9e9ac"],["/post/22102.html","623f6aded25a1923f2b052b8a757169d"],["/post/22493.html","72edfdf82ae9081493e1b81e193f3f50"],["/post/235252ea.html","955b059e172edd61b7c7f09535d7493b"],["/post/25699.html","d4980a5558278834bb98ff5391167e10"],["/post/2647.html","be3cfaeef8e7c25042df1e73f7025290"],["/post/26477.html","b3e3eaf95d9902baadf5328213893bad"],["/post/26671.html","6cedd378c71103051a8eaaee0e5303c7"],["/post/26737.html","77cae0991e9615e0a95e189e3277d2b0"],["/post/27045.html","befd4999a08f853b1ad5c241df1fdf71"],["/post/27621.html","4ba1750414156e889bf9c4e8934e4877"],["/post/27890.html","b793ca73835935317492bd07ed7b485e"],["/post/27980.html","78d19927c84d6902e6c39de5488965bb"],["/post/280b588e.html","0ebd96c1125ef721196eff02b376cdb1"],["/post/28579.html","704892fc89179ac01d4f72fb683d8a66"],["/post/28877bf.html","fccd2f02d821b316e849853b3409fc20"],["/post/28954.html","b694c559595db096555960dd2ab0e4ba"],["/post/29378.html","c5adcab3b65e0cbebf588c07afee247c"],["/post/29949.html","2f50903dcbbda8d46d93a011514153f6"],["/post/2ae43b86.html","b7695a8596f50f25c867b6da57ff0490"],["/post/2ba82a45.html","ded12581579e32d196ec1716f9689ac8"],["/post/30072.html","a8940bf9ad269981f576c254c8531737"],["/post/30479.html","fbad08b3a66219270d3d2ed3c48828de"],["/post/31a6b40.html","04aa19123b9d7aa8161f97d8b696d312"],["/post/325cdbf2.html","b8194eeadec73ed23044f514919da911"],["/post/3319ed9a.html","8bb97bcf884411ad678cf89d8de6fd18"],["/post/3320.html","654fe06185f9689c62fd7ae710578afb"],["/post/33cb1151.html","122568b16917801996b9f76634f1e1a1"],["/post/348d4e04.html","66bb52d908d4715b8f05cdbce5e26b95"],["/post/3526.html","19409fb4bcac638a38cb5fd6729e716b"],["/post/35532.html","49762c8db607ef483f3f4156d6bde061"],["/post/35848.html","9655cf70c08ee4a49ff6655c7d3b83c8"],["/post/37318.html","38594af6a5fe0467c93b910f5b9ed7ae"],["/post/37663.html","e137f456a3296f9c6cfa258f469d1c37"],["/post/38035.html","bb81cf7b13a73ce9c984641ccd4dc55d"],["/post/38072.html","511aaa3a71712dc9567b11b71b95dd94"],["/post/38145.html","993ecc3a8afd3548b39c57a459825b75"],["/post/39968.html","c896500db7b0ea704e360a2c045f3157"],["/post/3de4bc69.html","b14ca63a85d331da46f11aac93ed9fad"],["/post/40583.html","1a3c7f6b92c7ac942e50e5c4dde06329"],["/post/40997091.html","5489250132233a666be1986b6fe05554"],["/post/41129.html","b2504bd5799fb80c807325fa11696eea"],["/post/41763.html","9722a9c0e8f358be4f69b2d02ccf942a"],["/post/41829.html","c612770083051110b2b0c075afd71be4"],["/post/41840.html","313c54abf7195fbe760ba54b158a3be4"],["/post/43817.html","dcdc551ecdbbbb4f09325edbd054875e"],["/post/43878.html","d085e0de66c9a6267bd58e2ec8bf6bd6"],["/post/44250.html","660c7fc82efd34cfe7bf0930aa244a83"],["/post/44336.html","47496bd044fd2702760232d9157e78d7"],["/post/44454.html","02c8a4b7bc824173352bf9332f661206"],["/post/44487.html","a74fb63bcf9a08f3a94f1f356fc4a2ac"],["/post/44914.html","b76a22b4bffdd1bc2f716ae704c5264f"],["/post/4551c130.html","36bc0903958a738995b169e58efb83dc"],["/post/455a4c92.html","98543d515bc15c815010acb85d033465"],["/post/46466.html","b36f8febc7d3cb4a54c58a20476879a4"],["/post/46925.html","06030e943c0e1a8538f22b4d73bce649"],["/post/47075.html","0e54bb4bebff19d19698fb3fbaf4bb46"],["/post/48220.html","f81846928e583054ec20de8b9268c3cc"],["/post/4b1879e3.html","6fec4303b2ba1e451f6ea9f44508cc7c"],["/post/4c720881.html","1605c148c5f98c2cf80dadd9b2eae31c"],["/post/50daec4.html","2d14e8bddedd057619ed31716333061f"],["/post/51491.html","09d0122036a4f0dcbd52733f0220f92f"],["/post/52078.html","a3f614ad7cb0b662fb66d435a09ff7d8"],["/post/53677394.html","e08abdbe37740a431b675e17e82e110a"],["/post/54300.html","f8ca124c217039f0abaeccec267858cf"],["/post/54612.html","96fb5a9cf5ef175abcb61f2bacfa2b4e"],["/post/54613.html","59b15c2d6757474703b494c183e41aeb"],["/post/54708.html","cb0e9c51633c3c70a8575c855ae4942a"],["/post/54778.html","675bd5320bca9fe480cb02c222a94fc5"],["/post/5490.html","806cf91b302e86cc0208ce6a39a81786"],["/post/55046.html","7ef450d094eb641cb8ebff52c9b8aca0"],["/post/56929.html","5d6f60698edca6a48938ebb2a590b9e7"],["/post/57339.html","fcc17cafedfea9760a231f67a5a3b149"],["/post/57449.html","b7ec74191400f3c52dcca68dd316b881"],["/post/57453.html","ba963e8b11cc9dfa30462433d06a21f0"],["/post/57671.html","a66e3bb0b6608ac9deec5fcfea58e286"],["/post/58313.html","2c66af07676af0b71b1baf5496d3c295"],["/post/58481.html","94d436f8989097500adfb436df01da45"],["/post/58986.html","9e9e90af2e9c773efa6eccc411386600"],["/post/59431.html","871bbae54826263d3df49d1e51948a64"],["/post/5951da65.html","a6cfcc4853875e40cf6b9ae0f65721d2"],["/post/5be7e977.html","7f481bbc56ae77240d85f203fb633dee"],["/post/5f9e4eff.html","9c6797128e2123c9ea1842ae5c31c055"],["/post/604b49d0.html","2ab1dc1cd2b424b2cb7c20b794a24e97"],["/post/61312.html","227d89bbad692d077601f8503297fffd"],["/post/61738.html","cc644cd4165277683e20561f40c8550e"],["/post/61809.html","f04bf27a9935e6bca44c527a5c86bcf5"],["/post/61eaf19a.html","9bb91b354ee0f02d81d36177080873e7"],["/post/63002.html","8e8df83eceafe5c2b0000d18f06c9345"],["/post/63711.html","a611cf818c8aec1863d980f5ded63700"],["/post/6587.html","0cf8118eb97105f3db8875481eac9f38"],["/post/6589.html","30cbcd6ae4f74890af15c9d69ef6c2b6"],["/post/6880.html","482fae51dc82212b4906c8a7ecce2f96"],["/post/70263071.html","ec7fa4dbf2c9ef29d48b8f8eef58577c"],["/post/71038564.html","8ec5cae0b8d4392f05b053a3c9f7eb77"],["/post/7119.html","fe2322f2126411a05f38257672272f1c"],["/post/74e7fdff.html","3fbe815d8c6a9ad1f984941702268bb2"],["/post/7502.html","8b59d73eb3fd2f8d48209b764bff0f2f"],["/post/7564.html","35a6ad82100a3ed45f8c613208aff317"],["/post/766f9b60.html","ee0e528029916759229fb3b439057363"],["/post/7ca31f7.html","6b29033c8d7d87d865a6ff2f5dc0e7bf"],["/post/7d1c86da.html","b662d6a46e792643bea7d8dcf63ef704"],["/post/7f3bcd7f.html","b62b7979c046758273bfd62b0aefbb33"],["/post/8039.html","a84debbeccb7b053c9096829678b40d6"],["/post/8050.html","d26b29cf2a0fcca41b925901f85fb5c7"],["/post/8072.html","0d5dd1d6e6ffead51995556b395a4354"],["/post/8274.html","a4513154e4c38c98f91aafdfd08e4f8f"],["/post/8372.html","1f6c3da5262fb367e90d9e0473e2a3e2"],["/post/8498.html","77839f69cca74362869d3c38a5155325"],["/post/85b4e13b.html","de8cec96cc914501adeeddb0144997f7"],["/post/912b2566.html","2e6b851889d490ff19348f4c9ffc767f"],["/post/9187.html","4b6ed0b53e071a1dc3cc77a320102adf"],["/post/9197.html","9c5992319423cc3fde91b0673f6ef578"],["/post/94ceb2fd.html","b2a2711d0661dce47f7efdb388e0c444"],["/post/95495db.html","4fa66ab37b19263ed9f606f64d08c82e"],["/post/97246020.html","36d2fd63ddb9469354c9f43e6c8c4aab"],["/post/a3a786d6.html","b823368ef49519e7190b3c8a0e856eff"],["/post/a444b428.html","314f83007348d71c856b13b40632115d"],["/post/a50b8908.html","cd5d0e8b63c19f0d8818b25057388c5a"],["/post/aa1eade8.html","b439f4398072f03aef105ff253bc0471"],["/post/ade8c6d6.html","6672140c098fca65e25734d464b51fb4"],["/post/ae8362df.html","fa63debf124010d47e7c92991a8c02b9"],["/post/b4c1d206.html","25fe36c19728c9c4b055a230f61eab5d"],["/post/d431fab4.html","c56d46cdb9694624e440718f1b11a8f2"],["/post/d5381517.html","5ef45b33b2a53f4eaf16ecc30ef0c301"],["/post/e058ffd8.html","ebfc18d979d1c1558cf9aa14399d3a53"],["/post/e0f8cb74.html","12c2a663a8ad86cc9210ccb47d507876"],["/post/eefe591f.html","fd3b0cd7a040ebb6ba94338a6871ccee"],["/post/ef296a07.html","75321064f831e899724011d58d2922f2"],["/post/f201f9fd.html","6a420480ff4fa08d1275b024062f4498"],["/post/f79e4123.html","0a4a6479258f7a0fa2952233bd1ae89f"],["/post/f8648a1d.html","aa4e06f353ffc190e91f8d4109511a78"],["/post/f89cb603.html","ef83864f46fa7fe5073b650115304d99"],["/post/fa288682.html","db919545568e039866132191c9961d5e"],["/sw-register.js","748e8dd189726e8a18e94e96a5d7b45c"],["/tags/AT-T/index.html","83ba6f2a4382dbbbcc6c4a13457aedb0"],["/tags/index.html","c015ccc2973f209b3321b8ed07a6aa2f"],["/tags/动态规划/index.html","e43e38994e491ffa19807c07369414db"],["/tags/字符串/index.html","5118948e3e0f55c7e98822f26b90f457"],["/tags/字符常量/index.html","8ea79f55f74109384799d301ac34d43b"],["/tags/快排/index.html","f26f435033dde902767cfbfd7b0d9763"],["/tags/排序/index.html","8f479c2563c97034ab895347293fff2f"]];
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





/* eslint-enable */
