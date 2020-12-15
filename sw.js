/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","5c7af7fad7d8ac7346f7166f556a2c76"],["/archives/2019/index.html","94f9b293be75771427869f71510e97a7"],["/archives/2020/01/index.html","c496651b439aeaf4e12f721e78de2d38"],["/archives/2020/01/page/2/index.html","f68e60216bbbf2bc32592b837a194f49"],["/archives/2020/01/page/3/index.html","5be8e86c903bf056836e4073d909b49c"],["/archives/2020/01/page/4/index.html","053954f05c9cfb53ff344c84f45d2d1e"],["/archives/2020/01/page/5/index.html","74af82a2e02feb8519d949f81bae44c1"],["/archives/2020/01/page/6/index.html","4f4f08c40f1aba1ac7a4a1aea63b36de"],["/archives/2020/02/index.html","ffbde7531b04883c165937cb28f6a3a6"],["/archives/2020/02/page/2/index.html","5bb4ed89a08a7a917ca32fbdb34d14e7"],["/archives/2020/02/page/3/index.html","2821bce9fcd1b3fe28b64c37b5f82502"],["/archives/2020/03/index.html","98fda1b19d771435c19842580a07c57a"],["/archives/2020/03/page/2/index.html","6446cb372480a8b6ddac14f64b6b2efb"],["/archives/2020/04/index.html","547a11418151f9f5e863b048860bccc7"],["/archives/2020/04/page/2/index.html","962b8e3287bcb101d5d729997111e0a8"],["/archives/2020/05/index.html","1c52035b49ea1726d451e1c9ed4480d7"],["/archives/2020/05/page/2/index.html","7c8876672cc456aa456cadbd79081ad8"],["/archives/2020/06/index.html","29dba59f97bada0bd739add053e6f2e9"],["/archives/2020/07/index.html","494f8c236b1c164cb4aebf24c8091ffc"],["/archives/2020/07/page/2/index.html","92dae7e0c0bd30fe9a076daa26f44459"],["/archives/2020/08/index.html","851d4d10099aa7c1a65a254d25e30359"],["/archives/2020/10/index.html","5080a657055774c596ad68ae4d4e822c"],["/archives/2020/11/index.html","e913dac773cd5882f897611c2fcb30f2"],["/archives/2020/12/index.html","45565debd9671903457f62f7ce582d82"],["/archives/2020/index.html","1f580a7888451411b706561cf63d1045"],["/archives/2020/page/10/index.html","3f7a6985cc721165640bee86154d74c2"],["/archives/2020/page/11/index.html","72e68325606754d16f71af7b373bcdc0"],["/archives/2020/page/12/index.html","d77525a35568ef449c4687be275f632a"],["/archives/2020/page/13/index.html","a211c56a83ce7addf0f6a3714a30e0c7"],["/archives/2020/page/14/index.html","7f0df3f2d9d80344f3c488aca3536a90"],["/archives/2020/page/15/index.html","9caa81bbe522c79bcd2862d9763505b4"],["/archives/2020/page/16/index.html","11713c01ecebeb6b960968a3003b7949"],["/archives/2020/page/2/index.html","d0c19a090362628d53521193b5f6eb50"],["/archives/2020/page/3/index.html","a8cdac56f5bfc8066f09eced45f05eaf"],["/archives/2020/page/4/index.html","d3fd12b3bba7b1eae87c111f78ec4064"],["/archives/2020/page/5/index.html","09eadfe53285e7f7bde301d4e53cdad7"],["/archives/2020/page/6/index.html","637acfa6ff6d9959d42609fcff99d2f6"],["/archives/2020/page/7/index.html","c7cf260ad528ca9ede9158759b3e6bc3"],["/archives/2020/page/8/index.html","f663c83e8435bc113945531c966bac4e"],["/archives/2020/page/9/index.html","ee6cd542ff47aa05d31df8cd650db9b1"],["/archives/index.html","7352b7e05a1a8567cdcb299e929b08ab"],["/archives/page/10/index.html","a523f1061f4b1bc5b4f9e565daeb62fd"],["/archives/page/11/index.html","3b17326128fba6a10bb8f6c71a9931bc"],["/archives/page/12/index.html","a681e59ef0750020434e31051cbc1bbc"],["/archives/page/13/index.html","746484cc757a2103f345f98d18856d68"],["/archives/page/14/index.html","fb639781d9cbac8597f75dac455158b3"],["/archives/page/15/index.html","8d5a18777e9468faafc1c3bbb48cd8e5"],["/archives/page/16/index.html","a8ef69da7af843a29c56b3bc3f94cfe6"],["/archives/page/2/index.html","ed145dc003a88334ae61f6353f6cffeb"],["/archives/page/3/index.html","3af38fa83e88a0afc060000b81eff9eb"],["/archives/page/4/index.html","29d4ee87fe28482b0b56b42553e7cc3e"],["/archives/page/5/index.html","b802f356ba577b6ff2d7b513f0465a24"],["/archives/page/6/index.html","11220a76f1274c25bf06a2c0d31fc834"],["/archives/page/7/index.html","a7e09fcb9fb50ce41f31a62b25750c04"],["/archives/page/8/index.html","d7c38106095024bfbb89346729d03839"],["/archives/page/9/index.html","c2012c215acf2ebf4593b52c2fcd8417"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","07db26aa8d827699038d5cd41429be35"],["/categories/Linux/page/2/index.html","9aa66a9dc4bb4b956105a6ac227c96ca"],["/categories/Python/index.html","26a7dd88c97b12b4bf17e2e7dd126df0"],["/categories/c/index.html","e93b5a7d91a76d4ee27a0f5695682f2e"],["/categories/index.html","5a591a037a61670dfc2b76bf17174ff5"],["/categories/java/index.html","a8fa77c542ef42475e2145a43319d2f5"],["/categories/java/page/2/index.html","27fd604813dace4dc229b34d3ed36d4b"],["/categories/java/page/3/index.html","6e8a6bed401cce136fcca4c5d19c1c70"],["/categories/next/index.html","3101e632a53dade50e44b53781300d23"],["/categories/stl/index.html","0e7cfc6041a6dd1be3926cb94210e614"],["/categories/windows/index.html","333e50376cf68230c6dd7791603cf525"],["/categories/基础/c/index.html","a4318734fa85a0de34b6971feb5f83ec"],["/categories/基础/index.html","da2d420d0b3697997b90fcf8b738a94d"],["/categories/基础/page/2/index.html","8b09927d9ed7321aec952e64d74e00f9"],["/categories/数学/index.html","cfa8c90104c0aaca0b3ae6414c6b9679"],["/categories/数学/概率论/index.html","b41a3283b4c8317da6493465e658c788"],["/categories/数据结构/index.html","403826de8068990b72c0c1a1cdf153cf"],["/categories/数据结构/算法/index.html","39894d86aeb10430e0b67a0c0e7053ac"],["/categories/机器学习/index.html","aa73c31824521bc232adc3f19295c70a"],["/categories/杂项/index.html","0760999902fcd9ab9e95642a6fccc9c3"],["/categories/汇编/AT-T/index.html","cb62ce8a31b485f81b581d9e132e82eb"],["/categories/汇编/index.html","6177cddf545a067af6a2f5564e72c65b"],["/categories/汇编/page/2/index.html","4c7ccc23185404c60abe100ac777c215"],["/categories/汇编/page/3/index.html","b2d3b746538a6afaf7bd96d08575c8e3"],["/categories/算法/index.html","562d676fced42d52dbc2bec9824321e7"],["/categories/算法/page/2/index.html","cde917c16a3058d7ab97b2e72af20f73"],["/categories/算法/page/3/index.html","ab1b4eed9385e6c733d0749ed375c9fc"],["/categories/计算机系统基础/index.html","b62b10cc410043c8210b5a5333c9c2ac"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","65a11a6ab1423dc99be26e560d101696"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4aec8ed034f5aef18abcc2281b5172be"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","ba003d010f1078962f295221aaf4d7c3"],["/page/11/index.html","c134a1da692d4ba8ce5123eb612c39bc"],["/page/12/index.html","a5b4ba193cb90b7e289ea28eb8b0be71"],["/page/13/index.html","3ef0f32021fa934ebe41a1a07acc488a"],["/page/14/index.html","9a574b4186c3d525a6ab74dc03bcc13a"],["/page/15/index.html","181476f7362fbc2ccd1e5c77c7790813"],["/page/16/index.html","8c06a3fb651903adfbf8276d0a78a6bb"],["/page/2/index.html","5d02926e3697d2c4be98d504a410e984"],["/page/3/index.html","029eea6af8bb71a1ef7f6f513a3167d8"],["/page/4/index.html","5e238469f0f45b077503baf1df573ca7"],["/page/5/index.html","3332e170cfbbf1059e4b9ca4c5e1dd81"],["/page/6/index.html","1a62261db8ee72981329d9fb5ce433a2"],["/page/7/index.html","54c4920307a4add2f9711b6ce8b43a7c"],["/page/8/index.html","6cddd3bc1f7c092d9fb04f543a366ad1"],["/page/9/index.html","ff7dc455518e4b52e747fe9cd0315e4a"],["/post/10919.html","1a7b8642068b9b325e93f13c54a3c862"],["/post/11051.html","6b754d283b8da8f2d8de9a2bd3a7da3c"],["/post/11306.html","7e24f4e779f5fda23388f9275cabd5f8"],["/post/11491.html","86319f7a621f6da99f42f803c8394c4f"],["/post/11799.html","04b55b3713ea8b26a8b2b1ef2d894980"],["/post/12334.html","7c2ebc9c1d41e37c45ed54d9bba4aa4a"],["/post/1326.html","7ce1a6207eef23e48ca71737dc0847ad"],["/post/14379.html","b16d0359c04b45982e809fff6076fabb"],["/post/14511.html","06bb5dc607d5bcc8b2f287813b996199"],["/post/15201.html","e51b554c19e416afc0fd233e766fee49"],["/post/15425.html","52a45869f01b5677e048de32fdb1b9e5"],["/post/16107.html","15b8869bcb9d6e6b2b188baeff388b3a"],["/post/17862176.html","9e4c058bf5485727b236ddc0894cfaf0"],["/post/18431.html","ee327a8aa249b5bd6cdc0f2e226e8c96"],["/post/18912.html","cf787d127efc9e3e8fa193ade4543d4a"],["/post/1b9c8662.html","8c40127fd87d624bf9410315d7144507"],["/post/20198.html","467dab23a4f0fa395a8814a9c4b70bb1"],["/post/20ff5ccb.html","347e8cbf88f2aa8de48b89f34aacee71"],["/post/21624.html","a3ac98c03c5c28f6e8d05fcbe34ebe91"],["/post/2170659a.html","16238aa4c4ce20bddd59e5f9a9db56e1"],["/post/22102.html","2b4ab7e4532385080918e9062ebcde86"],["/post/22493.html","2726c3513c9984ac7f629c5d6cda2205"],["/post/235252ea.html","6dc5106ad0a493572f73a52c231cc427"],["/post/25699.html","ecb2b0c5789de577755bccfc237aaba2"],["/post/2647.html","064171609e9a3621ceaf492db351c2eb"],["/post/26477.html","f73ce50f084616972b18e261e7769ff6"],["/post/26671.html","f54f44e5f7ae4341fda37cd03a63f615"],["/post/26737.html","c60c22ea46dd16feb3b19c49968e5388"],["/post/27045.html","f7c61ae02ce746dfcd473f848698924b"],["/post/27621.html","873bef28c53a225c97694a2023e249f5"],["/post/27890.html","082bb4cd16e3cdb2b41e5459ed728bc1"],["/post/27980.html","dc65bd2c5ebaedf0232ed2fb8691d0a8"],["/post/280b588e.html","fbbbef588206e5d13c8671452a110ee9"],["/post/28579.html","8c60bd9489bc5dfc0dfcbd8759872b4c"],["/post/28877bf.html","593bde118748c87a35da445c0712b301"],["/post/28954.html","6971f6dfc18c07ae3409729027a7c3fe"],["/post/29378.html","33fc2281a3ef7f77bc0581b5a6eef11b"],["/post/29949.html","2c888435aafe58350626f617d1bd89b2"],["/post/2ae43b86.html","93c74e79bf665e02d85629170f879a22"],["/post/2ba82a45.html","3fd15da6297490b80aef8acdac1b47ea"],["/post/30072.html","8b8e60ff7553482f79c2b5b92287cbda"],["/post/30479.html","dc86c9350d5e4b6869a3365ee4a80527"],["/post/31a6b40.html","9ae4771d124a8695e307b7229e68ae97"],["/post/325cdbf2.html","0ebcaf0574c5cbfcbf3ea8c9ccab2e84"],["/post/3319ed9a.html","8334a171b3a56b0cb23c2a06025f773f"],["/post/3320.html","6bc654e87206d3c930b767e0f8cc063f"],["/post/33cb1151.html","0ebb47e566ca7a7a2520d5327f98ec61"],["/post/34811d5f.html","6162c5405d402a46ae9edda41a8f5558"],["/post/348d4e04.html","2badb1440206f7cb5148bb41a61f0c7d"],["/post/3526.html","4115733d392d17b575cacaaf3db6651e"],["/post/35532.html","9aad517886328987282aee6db1ce4938"],["/post/35848.html","045ef5f7d84ac66c15bc8c2f863c26a0"],["/post/37318.html","b2ac568d6b796ef29893fa310ba40a0f"],["/post/37663.html","f04b960d6a913169a2b23f065cdee2b9"],["/post/38035.html","be9dfa01d3432b8c3616fa76301c1379"],["/post/38072.html","935e6da2516288a43e57d6b7012587f7"],["/post/38145.html","1de5c3a5b4066f30e1296a07aa1e2bf6"],["/post/39968.html","5b9b36d3e6390da6c2b9da0b615f742a"],["/post/3de4bc69.html","f33f7407fe650674489e98aa2dadf061"],["/post/40583.html","d25cad293570c7f1ab25d85fabaf7a30"],["/post/40997091.html","d6c9a8ad7c30b694bbef89128288456d"],["/post/41129.html","02880dea822ef8461d5da8496aed562c"],["/post/41763.html","5762a1bfbf6c20abada17c033ff84457"],["/post/41829.html","27bdb578d925557ddda14684bd2b0e1d"],["/post/41840.html","57c37c18076d0f66dd69a3d451595668"],["/post/43817.html","9645118a48a8577b0d17544181c4c82d"],["/post/43878.html","f78423ec3f27be35d24667d5e2d11014"],["/post/44250.html","4e8aeb6bf9e89efb9519d05599429e27"],["/post/44336.html","c326b70d8f98c1a7af53f9c1f84662ce"],["/post/44454.html","377d0b8be3415e037ad78c9685cc8080"],["/post/44487.html","0a4f6850846ea93ceaaefc2f107ecbf6"],["/post/44914.html","d49b356bf57ee60a67711696920e3658"],["/post/4551c130.html","c960ca65d328043318bac72b9495d5f4"],["/post/455a4c92.html","30ae6aaa9e5f2859dff5b9679ca32d9a"],["/post/46466.html","79fb35cc92a749ab4bd8b9badcd8af7c"],["/post/46925.html","4c8934305d955662201997d1c6d477c5"],["/post/47075.html","a87e50c17dda5f5f2602e0e957bcf947"],["/post/48220.html","ae6a09e6eeb2578e02af7ffc21f93204"],["/post/4b1879e3.html","458f925ebbdb5f2cbe07a45955576f8c"],["/post/4c720881.html","6d0fa60108f0f9dd326f8f679f96bdc0"],["/post/50daec4.html","0b58728bbb9ef2865aef160b0da816fb"],["/post/51491.html","7df3be33fa65bd432a4878993a2c2a01"],["/post/51e63dcf.html","d3822c8466f903370f6c6e79ceb99b9c"],["/post/52078.html","b58535622a69efe534cfa38e168b5d5d"],["/post/53677394.html","667fcecf1aa0587f4c4779884bb50bc6"],["/post/54300.html","38b28340e2ceeb34c9882cb23089447d"],["/post/54612.html","d8a6227a1a799aa05f9d5b9980868a52"],["/post/54613.html","281de155ffa5a1ffe67cb483756fd42f"],["/post/54708.html","465bb679a98933aed11192a3bb7ffadd"],["/post/54778.html","e2b9554b692f781a6e4e68534d57030f"],["/post/5490.html","2540de1eada7e53739fde654417c38d2"],["/post/55046.html","c1fc6d2be1d749e6efb34e20ccf90887"],["/post/56929.html","6b13b8f2df68539f342e115f1393259d"],["/post/57339.html","6d7ebf2e38ad29b6747786373b717175"],["/post/57449.html","9c9162a615d3b77fb9555fefc0fcaaff"],["/post/57453.html","52b428cbcf4aaefa4bf469663716ebfa"],["/post/57671.html","a556c2fcbdfa8f5d2462b6482e02bd39"],["/post/58313.html","e0f7ef159794f736305c4d479f0e9e4b"],["/post/58481.html","d6bc69d6b78e2e2de2e3aa9d2858ba5d"],["/post/58986.html","80a2f6daec8da0553739b6223329a779"],["/post/59431.html","ac69fcf8d2563f40f9b4b8b58bbdfb11"],["/post/5951da65.html","41a4c14a0bdfe8a2a631f94254402321"],["/post/5be7e977.html","dd8038ac36a699b92b0650ef0a940932"],["/post/5f9e4eff.html","22dfadb0b9873985a85f18901250fa10"],["/post/604b49d0.html","a06646317168b1ed73a9a0107b9d5638"],["/post/61312.html","00dbe181015fc9159e4eb3b3872eb5ed"],["/post/61738.html","1da5ea34888ee1ae4c47932a3f62b174"],["/post/61809.html","fa5e25151731dd305a0cd1112f221dd0"],["/post/61eaf19a.html","2a46d2a907f5d1eaaef4f69e4603dfa6"],["/post/63002.html","71b3fd0c9ae255d57bc63cc7ad26e03a"],["/post/63711.html","f3ef4e22922b78949abd2e431f1b39cc"],["/post/6587.html","03e198472854d4cab16a438dd6b7b9be"],["/post/6589.html","ef69f86e95a37e0080d31b74e3e007ef"],["/post/6880.html","e2b49bf5bc69f8890462cc0d58707cec"],["/post/70263071.html","caaeaeba1d45a58f1c898f402bb6bd05"],["/post/71038564.html","bddc8b2d83d2adbda390a3757a02d3c3"],["/post/7119.html","5027f1d26314c15ef526b191f1bda522"],["/post/74e7fdff.html","c26ee9221d39033b707982ee39d2c1ea"],["/post/7502.html","64e710709818836273c35c40baf31400"],["/post/7564.html","fdd214b4040018aa4e123b87669ffd09"],["/post/766f9b60.html","67136bb0b4223a470d80970ae432570b"],["/post/7ca31f7.html","c5de72985fd03f8a2943f98971b85306"],["/post/7d1c86da.html","f63d6060488eb35b354f352ae567e4df"],["/post/7f3bcd7f.html","7f3ba29486e220dd8a9cc2defd850097"],["/post/8039.html","7a88965ae11008243b8421d494313460"],["/post/8050.html","deab3d6373cc3219373ed629ddebf7f1"],["/post/8072.html","a99847de1ec90caffeaaeaac86d72acd"],["/post/8274.html","90ebe4d786c60543ec6bd17695b3d078"],["/post/8372.html","eff39c3e735004a2b428a83db93470b7"],["/post/8498.html","c9a1537f27396c945b5c216a4c332dc6"],["/post/85b4e13b.html","2930919607084b1fb189c7ecb684e9a5"],["/post/912b2566.html","7ae22741f721ef3c0dd32b704ab5bafe"],["/post/9187.html","25dd3d67b01169c9e565bae55a289a7a"],["/post/9197.html","e552e5530a15006fdaa74783fc91ef9d"],["/post/94ceb2fd.html","930230bbf361493d51d9135fcde77a45"],["/post/95495db.html","a0018215e7d4a12b0d940604f98db28a"],["/post/97246020.html","b798e4bf3d05f4931d7076571c2c7595"],["/post/a3a786d6.html","63f565c37bd11c4f4cdacf83301a4531"],["/post/a444b428.html","651be250deaacfc6b9f06aeb05499e01"],["/post/a50b8908.html","3b9647ab5e6e180fe9e0f04dc70ff8a9"],["/post/aa1eade8.html","6eacde54ca4a1db747219849d403bebb"],["/post/ade8c6d6.html","7d96cc674602b8740caa90deae20104e"],["/post/ae8362df.html","c0319be0e1c4d1e85b96b9c50c960cdc"],["/post/b4c1d206.html","2668eca50ddd16772b5c4d5f931f1fdf"],["/post/d431fab4.html","517402ed05a7525241e0feb3586a2fb1"],["/post/d5381517.html","be4048cbc9756caddd9e2f043c4b754e"],["/post/e058ffd8.html","1272d26ec9924dc3232a2010416ac93e"],["/post/e0f8cb74.html","986810d17b439120a41c3037ea05be46"],["/post/eefe591f.html","76e667d3e32cce77422d536cb8e62885"],["/post/ef296a07.html","f73629c6353d96f9bd4ec7a35f303972"],["/post/f201f9fd.html","2edba209a4c3b4fefed74a05c28d8650"],["/post/f79e4123.html","5ea525e6daa72a8b2efca365d06d30b1"],["/post/f8648a1d.html","485a72681fd532769d8077afb65872cc"],["/post/f89cb603.html","53c84d95c97fedc2f47fad2e4766cbec"],["/post/fa288682.html","a9f0812879daea143e7fc59b9c973f09"],["/post/fb98053e.html","f5b7f8ac80f40628fd19c58e66270446"],["/sw-register.js","ef4afb85d1e8c50e87eb6c6c5e441542"],["/tags/AT-T/index.html","5ddc62f1f0bcef7cf174a4fd29544acc"],["/tags/index.html","cd8716f9452a9731b61b7523297b9f8d"],["/tags/动态规划/index.html","dc2042f496d435e0054e700bcd811347"],["/tags/字符串/index.html","f25b0f3e6300e741cf2e314b5fc9f6ff"],["/tags/字符常量/index.html","1dce94aa31d801490dd0dfb75e3964ed"],["/tags/快排/index.html","f83ee9858de79f3716b00ef1f7bc67f5"],["/tags/排序/index.html","7394d0715a1fdfa9f1f0b76f6c35b5fb"]];
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
