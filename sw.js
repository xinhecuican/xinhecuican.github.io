/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","91d618421db40502facf3935c835a993"],["/archives/2019/index.html","01fcd4155dcccb1f119cadac764f0af1"],["/archives/2020/01/index.html","5bf442d7b168bb76795c543c228e5192"],["/archives/2020/01/page/2/index.html","8bb2742098aa799fa24169f63239fd80"],["/archives/2020/01/page/3/index.html","ebd0d4853c8d935dc17e7610b44bc225"],["/archives/2020/01/page/4/index.html","45ed74f024af810293a526374bd0982d"],["/archives/2020/01/page/5/index.html","b524d777679b19fd31d2cb8fc82bd02d"],["/archives/2020/01/page/6/index.html","0446f472abd6bbbf2c90e21e1c3f84cd"],["/archives/2020/02/index.html","954786971b470fc15d6b16d9b77aead0"],["/archives/2020/02/page/2/index.html","ee63cf7c3b01604d90dd73c829e76b7a"],["/archives/2020/02/page/3/index.html","52d795d899ef2d3fc07768d6f34cc1d6"],["/archives/2020/03/index.html","a820a02c9729b668565ffdbd1904aabc"],["/archives/2020/03/page/2/index.html","378fb87b82be0eef370895c86bf3728b"],["/archives/2020/04/index.html","6e069ddfa6418388cee405341ce36278"],["/archives/2020/04/page/2/index.html","23abc8a82c7d3e212bae118d8da7677a"],["/archives/2020/05/index.html","ae52261249f78cff61c6a8424a53a68f"],["/archives/2020/05/page/2/index.html","59332f141ae7356cbc6433e7a30a6369"],["/archives/2020/06/index.html","2e7f05202b26848e03f5754f2f9c74ab"],["/archives/2020/07/index.html","26a41de12627514b1e33b2bd96e150d4"],["/archives/2020/07/page/2/index.html","c5bb947adbe7c1008d9fbd12cc2e9208"],["/archives/2020/08/index.html","15204211059bf16b0bfcbdaaf5da5478"],["/archives/2020/10/index.html","07c9c41fc2768dbae72abdfb81424bf9"],["/archives/2020/11/index.html","45734e801dbd62ba0e57dbd2d597ff10"],["/archives/2020/index.html","d69af75c1688af0d16c832b78ec556a4"],["/archives/2020/page/10/index.html","da207df0b7cc0c0da68348eebd0cf707"],["/archives/2020/page/11/index.html","94bbb056664a3a5eb7f66042497f3640"],["/archives/2020/page/12/index.html","02c7fc4e099408ac5a0cb7932a59b7b3"],["/archives/2020/page/13/index.html","43304ff831b9054263e39dbb517c86a3"],["/archives/2020/page/14/index.html","730ab93725ef922f599a8615244914b1"],["/archives/2020/page/15/index.html","9e44c81d4c984583b22c662c27c56a2a"],["/archives/2020/page/2/index.html","a5015d6a1cbc2ba957e983d06a02d0df"],["/archives/2020/page/3/index.html","f5e952aaf3c5b85a542c7f9ce6ddbf0d"],["/archives/2020/page/4/index.html","9d87d0ea1d7210fd5fe51b8883f63679"],["/archives/2020/page/5/index.html","b05ab22040d412ccc962314acbdd90c4"],["/archives/2020/page/6/index.html","b5d1dfef8117027c2f524346c6851758"],["/archives/2020/page/7/index.html","0b1225942f9528611b48df26a0da48d7"],["/archives/2020/page/8/index.html","3fa0658717b078bb2d2caeebf7ec667b"],["/archives/2020/page/9/index.html","96f63ea13e6e42fe403731fb825f53f9"],["/archives/index.html","08c57f2dd6ae4eee82f7d42ac9bc5b3b"],["/archives/page/10/index.html","b773cfae6bff742ceb50ebdf4653be5e"],["/archives/page/11/index.html","bc2a014cba787389d05c9cf8fa817c9f"],["/archives/page/12/index.html","14390f380caac221f0e46d6be86483ac"],["/archives/page/13/index.html","d576b770af80ca22323b344c71750fd7"],["/archives/page/14/index.html","0e53d2884344934502af3777c99328ae"],["/archives/page/15/index.html","008f97e3ea198a83c2ba4a3508ff4f5d"],["/archives/page/16/index.html","750a6f09b2ebd6c8836078c4bd250c03"],["/archives/page/2/index.html","f1d9ae88801aca9bb328b08440618231"],["/archives/page/3/index.html","bc38cf5934b13dcfae813401a0982f54"],["/archives/page/4/index.html","4490a03bdd18f8d3d48cb3e75bfeaa6b"],["/archives/page/5/index.html","6114c7becffe17410ad860a24ee638da"],["/archives/page/6/index.html","7ede863071e9d20efaa6711e7dde768f"],["/archives/page/7/index.html","7a3820a702c9177abf6fb85b18399287"],["/archives/page/8/index.html","484eb25da4527700554262b9f8def575"],["/archives/page/9/index.html","3dbd322380e0cceece61472394118480"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","dd85887a335b5700d7eb4ce95f1388d3"],["/categories/Linux/page/2/index.html","65df09b61892ab4a5b07c14a7c2a588e"],["/categories/Python/index.html","32bf8a9bf4eddcfe8624bf1e3fcf2a45"],["/categories/c/index.html","e75621091c0882723ef454fbdcf104ba"],["/categories/index.html","82816d6a883168ada0d5a3b05e063a8b"],["/categories/java/index.html","1569914dd501d0558992cb6760b8ff49"],["/categories/java/page/2/index.html","4499e7560afcab4de30c4fed98495884"],["/categories/java/page/3/index.html","ffc020f1c655a8748d08933de7482c45"],["/categories/next/index.html","bacc731990151dff3cc4c343c7cad6a1"],["/categories/stl/index.html","c0511149c145dfc2e623978e3eb8f8e0"],["/categories/windows/index.html","a0a6ba26087c1699108d3cccdd4fc859"],["/categories/基础/c/index.html","13c7e7eab59d4468dba3e8cba5de7766"],["/categories/基础/index.html","2e655eb94cac54bdae7d99dd9cd20223"],["/categories/基础/page/2/index.html","e04e9f03a2f2a0aad98fa3f0882cf599"],["/categories/数学/index.html","0226c9b811cee54816c63bcb91275ca6"],["/categories/数学/概率论/index.html","eab80c9ff2e54a271e9cadeb1829bccf"],["/categories/数据结构/index.html","3e6c0a0d29c981f691e2b69597d059cf"],["/categories/数据结构/算法/index.html","0d2af334e9003d8fb7e86f263fdb7ba1"],["/categories/机器学习/index.html","7e5f49f04d57869b1bd0b1cd1794c675"],["/categories/汇编/AT-T/index.html","4784853727f6fa63f8e23f6824a65398"],["/categories/汇编/index.html","4529b05697e80b79919f3068b21a682c"],["/categories/汇编/page/2/index.html","895b053ffaa17ae1732a377f6f02cf00"],["/categories/汇编/page/3/index.html","a6fb8be669521a1d71c8a4ce0d0d83e5"],["/categories/算法/index.html","5b4c7325ea27ee476279225cda3faa6d"],["/categories/算法/page/2/index.html","9cce96c6b0ff8fa5608353eee546c712"],["/categories/计算机系统基础/index.html","d511c4cf86d586e696ac6c06d905c1f2"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","643d25a11a1fe6d2b236b31b9e4a45a3"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","1f964af8c0a1a680d206a38c2e2ee6dd"],["/page/11/index.html","64ed44a50b53c2669de7f54b385e4e81"],["/page/12/index.html","33f4de1b6299b58f174755e6f4f50d84"],["/page/13/index.html","fef929a6bc335d3030343fd40c39fcbb"],["/page/14/index.html","1bf4ea853bbc1b098b3e5f5513364563"],["/page/15/index.html","31b3d67212cf81f2801f3c8ed12817a5"],["/page/16/index.html","66b2e529e5b09b9dcbd7448b42e27b87"],["/page/2/index.html","687919567ebb9d5db25f0f7b91e12acb"],["/page/3/index.html","c2cab9b3b9b98983e7409bec0b1e4f5d"],["/page/4/index.html","7a3ac9ac3f079fc9e0cf935c1a7cd0fc"],["/page/5/index.html","e01c876211d9ae77d31cdaf02291dd7c"],["/page/6/index.html","8b2b9ab678a73c0424b3d42c71893f92"],["/page/7/index.html","5f727fb2529f915bca72488ca2eb9009"],["/page/8/index.html","f04e259a34f9f5a4d87023d70ab827e9"],["/page/9/index.html","c4864dd30a8bb92446f8288e282e81f1"],["/post/10919.html","985aff57890553fd656f1d9eb1f9bb14"],["/post/11051.html","71c4c7177acc1ef61bee723d2d931222"],["/post/11306.html","cc29e46fe432ad4e4f467f76202b2f48"],["/post/11491.html","5f9617c17ade2b4959cc70aa363ba70a"],["/post/11799.html","2f5754e79cbdef404056071ab7bba5b2"],["/post/12334.html","016d021f13b5ad09cb958f5eee7ea454"],["/post/1326.html","06ea425fb352a6ad1e963b8882f2a444"],["/post/14379.html","fd127d48484218cde1989f4b718c8b81"],["/post/14511.html","32d56b71f3543361debe4eaa3030a41d"],["/post/15201.html","43dc5f82b911602be622f7201ac2748b"],["/post/15425.html","d661c84933b548ff95de255d48ed54b6"],["/post/16107.html","1740312b2695094037419945ec30a09c"],["/post/17862176.html","01946a9ee0a4caf03e327bf0dcb01d60"],["/post/18431.html","3c2b5cd18482483b9876e649f7041988"],["/post/18912.html","a5719de5bf19b0c7f2a08d5910c4fbab"],["/post/20198.html","40174a222ac78aa7f4640264775d5761"],["/post/20ff5ccb.html","6b94a90914df1e88e0d2ae4a1c4f289d"],["/post/21624.html","d8e8cf85a6bc93e06132f45a34dfb2eb"],["/post/2170659a.html","dbc93b1b8bff6889d69f00051c970d89"],["/post/22102.html","7180886a49ebfff0c642c12f5f19b19f"],["/post/22493.html","ef8b30561ff78e1e26a854031f6ef5bd"],["/post/235252ea.html","723705f7826e49baaa389415dcffb73a"],["/post/25699.html","15af1089b48a647e0a94ec9962beacbb"],["/post/2647.html","b61963c17847e474cf9045da4b01ccc3"],["/post/26477.html","b465b61aefa84ed21239bfc8ae7938e5"],["/post/26671.html","e7f1e38fc8b41ed7fe7c7899096752b1"],["/post/26737.html","92ab90caa2c813c23c06ee37b846e842"],["/post/27045.html","eaa93d8fb82d9496c7267e3dc3435cc5"],["/post/27621.html","3b4d7f5775f0b28ce84153acedf1ecc3"],["/post/27890.html","206eb3a7da28157282b6be69267b68c3"],["/post/27980.html","20880d4749afa1e69ae9fd92eba0d69f"],["/post/280b588e.html","b7ade6aecdac6fb9478aa12e4d48a1db"],["/post/28579.html","8e7d8eec7b6cbfd82f42daaa1cf0eb4b"],["/post/28877bf.html","b9e5d2ee294745806bf251d36afa6d72"],["/post/28954.html","4b870caed60b5b86c21cec94136ee9ea"],["/post/29378.html","dd1c6f35c5500de713066b08fd08fbe0"],["/post/29949.html","3b7e44602756515fe58960189668e075"],["/post/2ae43b86.html","de34a56b1107707aa0ec7f4a2e4ec0e9"],["/post/2ba82a45.html","d5e8f09de733937ebdc1e2495c37f610"],["/post/30072.html","8b9832dfaba4ec41b10e17b6c18a1705"],["/post/30479.html","3454f3852db677f61e43b78b9f9a9dca"],["/post/31a6b40.html","c2a1fcfe54bed6a3f90edb4049b62df7"],["/post/325cdbf2.html","969cfd44fe5806e47871c33af7201247"],["/post/3319ed9a.html","69e1d5b4458bbfcd29a1fec57483e386"],["/post/3320.html","15150a7e92442256a8796f4d8b38ffb0"],["/post/33cb1151.html","ad246a416ec1671cfd6bc598ed0888e1"],["/post/348d4e04.html","340118db998815e8303bee32c36b2b84"],["/post/3526.html","0acbbb38527dbafd6f26ab4147ce8b56"],["/post/35532.html","e0c266008c3db0819130a83cd27fcacd"],["/post/35848.html","f1e4c08e3a243ae7ac60edee6dfc8b58"],["/post/37318.html","119bd3560d3c78d0b988922ac98b925f"],["/post/37663.html","669922ba19a951ee6abdef42fa94be88"],["/post/38035.html","6c9bca0ca7a6024b90683f34959d7cee"],["/post/38072.html","208fadd3a1ec39c343487ab39351f51d"],["/post/38145.html","c55be7748d2e4f5d53c24e676581eea1"],["/post/39968.html","848ddfe4c5682a8592573725a272b719"],["/post/3de4bc69.html","6ebc231c5cbcea75b6da077604a403a3"],["/post/40583.html","57b0bd91d4e2c400d3a482187efb59db"],["/post/40997091.html","f2ec8da4bdc5442698889f91022e14a3"],["/post/41129.html","63379aedfa8405c21ad5bfb5ae03472c"],["/post/41763.html","04de8d5dc45d93728459a4a57bddc997"],["/post/41829.html","7d7bfbfcb507f0c4c5712bf3369fe871"],["/post/41840.html","35a638258537610f226f52a28fcda825"],["/post/43817.html","c0282bb1b096b236d02f771ac86d75cc"],["/post/43878.html","5b8a6fce4265fb8d407d399974a7f081"],["/post/44250.html","240232776152b14d8e9113a3f158718b"],["/post/44336.html","417b8ecb5a05590cc1973c87e1bbdd06"],["/post/44454.html","0e1c2abd8679012d4a1a9db344e1fb34"],["/post/44487.html","10231b58938a43d6f81701aa1e7f43c7"],["/post/44914.html","ff5eabdbdbd8387934a7aa01da4e4423"],["/post/4551c130.html","c0144b34c44c52db551f1292f129bcf6"],["/post/455a4c92.html","f4410242c1e005bf36b6bc146cfec378"],["/post/46466.html","407ee38585af4e2a40ddd8eee2af70b0"],["/post/46925.html","636d55ceec898f87362af1b7d6d70fea"],["/post/47075.html","ffba95fd8376938c1989f5ae629150b3"],["/post/48220.html","1eb77ca02f2df2b00ab24d1da74d1a50"],["/post/4b1879e3.html","12a3762365f09ea704b6081ab30f0730"],["/post/4c720881.html","3090fede2e486aa4928a75462fbf880d"],["/post/50daec4.html","3a540e02013c77654e3051cdfb8a0b92"],["/post/51491.html","f86e9eb087ef3c30f9631ef25d522fbc"],["/post/52078.html","bbaa8419ab06e000a53b39566863afcb"],["/post/53677394.html","c1d0816dd9432cf2d6932918cb6bf03d"],["/post/54300.html","6bc35f1fb62bd184ec6e46359a059d11"],["/post/54612.html","f3f70a54e685f4d7fde86e083302df36"],["/post/54613.html","406b844c4cb4434af6e25530dee21576"],["/post/54708.html","40c6eddea7c3743200ed2dac1ebfb145"],["/post/54778.html","e95b9411039d44407ae8da9f9ad36b50"],["/post/5490.html","8657e625f667e6710ef66bb5b75c09ea"],["/post/55046.html","67aedcaa7d85744300b2d318419524b2"],["/post/56929.html","18633ae0735bd5755e9d048d2a4a7368"],["/post/57339.html","875d65b46619d6b12ba1d399d7d5fa1d"],["/post/57449.html","86702b77529df0e44ecf93b45893a03d"],["/post/57453.html","a8c1acb4698437d04a549a388b352973"],["/post/57671.html","745098f4e935204f1aaf0a5f2e633aee"],["/post/58313.html","89d9f229d8935c4ae43144110462baec"],["/post/58481.html","ef30f5c826b2901998587fbc6bf7a4da"],["/post/58986.html","d21e42544d18b99ac94517025f6161ed"],["/post/59431.html","f670ea75ffe004357c345a7dcff76746"],["/post/5951da65.html","d6098b717cc30f3767e9c97584d14a83"],["/post/5be7e977.html","de347e156b9346f93e3bc82318fd5be1"],["/post/5f9e4eff.html","9be3f545a2a7efe23188a4de83836470"],["/post/604b49d0.html","72c59494cc4d457fa02938c683c27151"],["/post/61312.html","698742f507cbcfe64e52cd15720a255d"],["/post/61738.html","2cf61843f452b07f663f858c72d658ec"],["/post/61809.html","75de4668d66012c41556271f454f8849"],["/post/61eaf19a.html","b0590ea3e3a18f6194e15c962eccd073"],["/post/63002.html","1af85e9688878fc74bfa4c55eee8b3b5"],["/post/63711.html","bbbad6c90f0f8a8ed863a5fb27b69bc0"],["/post/6587.html","84dc6ecb1169aa2bbbf4efd36693575b"],["/post/6589.html","23665da14536574362c95e016b35d9c3"],["/post/6880.html","993ab41734f60d307f702441c7fd9264"],["/post/70263071.html","328b74cf3677a909185e272b3a153dcb"],["/post/71038564.html","5da5a3fbda9dbe8a7984c68be2b42159"],["/post/7119.html","5e680ccaf20e2f8c31ba0ae5c9c542cd"],["/post/74e7fdff.html","19d2858cf6df8338178f58713f000932"],["/post/7502.html","00ac27f59545d42a15d3b4bb158e69ad"],["/post/7564.html","ce79d8409fa1a238866c860a1aa037fe"],["/post/766f9b60.html","ed57eaf541d1a7c18d4304a07147bbed"],["/post/7ca31f7.html","2a8c5a5394397f87783f2aa164b7b005"],["/post/7d1c86da.html","203356b96556f0099f5d959f4bb929da"],["/post/7f3bcd7f.html","8279832152783d003330d66fec96a0e8"],["/post/8039.html","180069eb38e377e88b94f308fa38cb2e"],["/post/8050.html","db54ea59eb38ca448d00e3e8ef67b435"],["/post/8072.html","041ea0bde16258e54c9728c370d5cc2a"],["/post/8274.html","bbeb37cbde68d74bce803c8b9101209b"],["/post/8372.html","48779da49c6cdaf22a78f623cb5e20bb"],["/post/8498.html","73d7a61c9752878e20d292e9388c5bdb"],["/post/85b4e13b.html","ec886c99ebf048cd32d9809629f1c148"],["/post/912b2566.html","75ae14d9e2d7cbad0f338805e0a39c4d"],["/post/9187.html","400f5429f9358d8907c31762914a05fe"],["/post/9197.html","8ffb9ff3e406e679c5b82f479fa83861"],["/post/94ceb2fd.html","c14170aa04be22e8c241a25a1bfd478f"],["/post/95495db.html","ffb8ad7341b7fe571952dba492c09661"],["/post/97246020.html","e3ac909893e14100739b54db21c36d5a"],["/post/a3a786d6.html","e723a79c2d00f4e8c4b93f944013de99"],["/post/a444b428.html","654bf200b0b9973bf63d2490d8cdfece"],["/post/a50b8908.html","228de98f729dde229e213fe61057a8c4"],["/post/aa1eade8.html","0c0d6d55d2fed80adc5abc46fd7bbedd"],["/post/ade8c6d6.html","bc9d67aaebf3529a9ad098d46361ee92"],["/post/ae8362df.html","aaac2b7c701d3fe46251b4eb041bd9ce"],["/post/b4c1d206.html","9b5b049437f06e70e9fdc988c8bc60ff"],["/post/d431fab4.html","31992aae3c5b391df9147bdd226474a5"],["/post/d5381517.html","131abec126f63b690091d6138daa5e83"],["/post/e058ffd8.html","1ffec6b9f2855f179829381cba2cb8c5"],["/post/e0f8cb74.html","b9d3978d5f1085d0b6945e88bd3b9473"],["/post/eefe591f.html","f30c87dd42df283c992f2e252fc1385c"],["/post/ef296a07.html","ceed371aace86c67863753ed482d7d08"],["/post/f201f9fd.html","d94f73670ab6c098112412912d5ef2a3"],["/post/f79e4123.html","583ebeb379702d5698179e6562469dce"],["/post/f8648a1d.html","0fd42228c98879a1c1815134af24ff40"],["/post/f89cb603.html","c886d84a72318e3e3293f7444b796cb2"],["/post/fa288682.html","8f0edd9df95cff3c0aacd66798cb6de0"],["/sw-register.js","a617dcd3d9db31e1087424ee6c7ab21d"],["/tags/AT-T/index.html","27a201afa6ca58b4bef6bf0b43fc8c50"],["/tags/index.html","af2332061b2f05acf1e290c58b3a6671"],["/tags/动态规划/index.html","4752221e77c3595fadf60e3c7f19d218"],["/tags/字符串/index.html","5c9971ffbc4c340c687790af7fa67d9e"],["/tags/字符常量/index.html","669fd122d36714d72437aba43c237b74"],["/tags/快排/index.html","9d06bf499ffc20f84fce2d9631bee0db"],["/tags/排序/index.html","6d65d5db1d9132a0102ccc0fe3ce84a4"]];
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
