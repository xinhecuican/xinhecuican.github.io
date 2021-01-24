/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a4764abfe3f9e289ff730ffd60d0245a"],["/archives/2019/index.html","ec0c25ec6fee64cd859ce376bba0e9b6"],["/archives/2020/01/index.html","d906bf3da514c6a3cabb63f7e6adda2e"],["/archives/2020/01/page/2/index.html","e6ee426eaaf1f0c28256317de0307b62"],["/archives/2020/01/page/3/index.html","9db3538c2337d64de634403bbc00c246"],["/archives/2020/01/page/4/index.html","979eae592d4661a84789b25c71bd8982"],["/archives/2020/01/page/5/index.html","ee5ce76bb9efe49120d70f8ac3027846"],["/archives/2020/01/page/6/index.html","0fc4065edb5328273df1a420d02da3c1"],["/archives/2020/02/index.html","81d82158b8cd8fe2a245d77d968a6176"],["/archives/2020/02/page/2/index.html","8f1361f01e28a12717609a2de4745621"],["/archives/2020/02/page/3/index.html","2f26f601159297c083cd16865684a839"],["/archives/2020/03/index.html","89edd012d740b7af8870e3b2fa03240e"],["/archives/2020/03/page/2/index.html","7ac16d349a81fcf7c3d1d473a6b49aad"],["/archives/2020/04/index.html","3b33b854b54a0edf041514ceee528c8d"],["/archives/2020/04/page/2/index.html","9d8cf9e8fbef65517a0711521eacce6e"],["/archives/2020/05/index.html","08cd7da891ecf8b4423298743f1eb2a6"],["/archives/2020/05/page/2/index.html","287ec93dae7bac87ea2864ea950eac19"],["/archives/2020/06/index.html","676659f9a38db5bc77b6c66b2756b50b"],["/archives/2020/07/index.html","b933294c28b6b53e5184a88534260d5f"],["/archives/2020/07/page/2/index.html","04f7fe8e9997d7ee89502ac91055b8b1"],["/archives/2020/08/index.html","70ea15ce4638c23d738037ff61c46cd2"],["/archives/2020/10/index.html","ec5dd5f2acf74f4ce7b426797e96137e"],["/archives/2020/11/index.html","abeb90f601c4817e1672b9e388c00149"],["/archives/2020/12/index.html","888b5da33a5c30bbdc8c76ab7f91a4d2"],["/archives/2020/index.html","61a44d3027e756b2f405ea4391eb7750"],["/archives/2020/page/10/index.html","deda10219ba32c424d99eb554b9a6e0b"],["/archives/2020/page/11/index.html","3e7113719fad288dce233c9cc0bcdd7d"],["/archives/2020/page/12/index.html","d70b1f04717cc58b95e060cfddd31783"],["/archives/2020/page/13/index.html","20e3b9d4a5e7255c4b133c39514be3f0"],["/archives/2020/page/14/index.html","b04eb59df5b2bbd90d8729c7164a72b9"],["/archives/2020/page/15/index.html","b899e82c2d8dc6e6edcb8e90bf45bb34"],["/archives/2020/page/16/index.html","909e494f28fc62d62f37580dcb9c2fb9"],["/archives/2020/page/2/index.html","693a36c1b62547a83062b1f2651a890c"],["/archives/2020/page/3/index.html","c9eceff32717755719bd88fa651e08ab"],["/archives/2020/page/4/index.html","a78e84a81d298c1385e447230563080f"],["/archives/2020/page/5/index.html","1a569fa8a2e0bfb38a9e88036613050e"],["/archives/2020/page/6/index.html","145a8f6f11710217a1b78d56ca2b83d6"],["/archives/2020/page/7/index.html","df1319839052861ccdc8bdb69b4f3ec8"],["/archives/2020/page/8/index.html","7992aad221fae130363cd7af241d59d1"],["/archives/2020/page/9/index.html","ee40f5ef887d6a0e7fec9d9034338527"],["/archives/2021/01/index.html","d661c0aab59709f26a29b2769c0f3240"],["/archives/2021/index.html","f55e1a03577729307a0bc72c0b8c18f7"],["/archives/index.html","db2ccc548b3a25a3dbbc2cc2cdcf4345"],["/archives/page/10/index.html","e22eef8501343335847fba948ef1c44e"],["/archives/page/11/index.html","355daba9551fa44958bf8c552f29146e"],["/archives/page/12/index.html","cf6174120792b51b75dd453503496c8f"],["/archives/page/13/index.html","15026ce45c6a256ea94652086ffd8490"],["/archives/page/14/index.html","9b374cb4e2d32456333e11f90edf15ce"],["/archives/page/15/index.html","cf4dbaf8347da37f6676e10e72de7f76"],["/archives/page/16/index.html","db0512fc45b6e7ba0a41ca19aa5a29dd"],["/archives/page/17/index.html","abba9f5c1872d4018cf0be481d6594e2"],["/archives/page/2/index.html","f86894d4bb38512e7fb8dae697ad6fd2"],["/archives/page/3/index.html","5d811a05c216d3b30d86cf9846dec2d1"],["/archives/page/4/index.html","734056c371838c8ef8b5bf2610927299"],["/archives/page/5/index.html","6d8814120ea40a70eec442643872f528"],["/archives/page/6/index.html","b84e1b44ff21d36bd3ac926cf2f130d2"],["/archives/page/7/index.html","9cf77d24b90feca25a7069e4f7f53d5a"],["/archives/page/8/index.html","81276da83d8c21fd3cdcc875a376cd93"],["/archives/page/9/index.html","b65462a0c096b43a1fdd55dbb2785035"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","692e9a0108ed7ad9692cc8b6c32ade84"],["/categories/Linux/page/2/index.html","995181d1ae8bd2e427a61a1b0d9ad1af"],["/categories/MySQL/index.html","5957fc102d6fd97b2656d931ed9e1d0b"],["/categories/Python/index.html","ac3738cf8439492f358d8daf14d978db"],["/categories/c/index.html","a7a1442ecdc7986a8af6de7ef13601fc"],["/categories/index.html","f4c1db4407015e13ff1df7bad8ef5cc0"],["/categories/java/index.html","cdeee32609aa05ed3d731315a19cc7a7"],["/categories/java/page/2/index.html","284453a842258e1d6427fbc42911b505"],["/categories/java/page/3/index.html","df497fc1a0a2a32cab20f45a3e818c99"],["/categories/next/index.html","e6d6a97414cf89ba919389e1819ba205"],["/categories/stl/index.html","4c3f90b6e02a3ccdb49c99edae2a0a2b"],["/categories/windows/index.html","deac2631ce7f336545160adc971605dc"],["/categories/基础/c/index.html","8962781d811ed644f0477fdc813cabf6"],["/categories/基础/index.html","564c8c3e79b11a3244a2b677585faeb7"],["/categories/基础/page/2/index.html","36e271db939862c7de5a0e9fea278dfa"],["/categories/数学/index.html","5da12872068f3ae91a8b140c461be9e8"],["/categories/数学/概率论/index.html","938f74cdceed6b55c1c4117c4ac4e351"],["/categories/数据结构/index.html","d30c8fa886de27d52c3692196864a254"],["/categories/数据结构/算法/index.html","445b1d45d766028effe195dc1e4dc6b7"],["/categories/机器学习/index.html","5f4e4dfc4be19a57d54749bb0b42e39f"],["/categories/杂项/index.html","b40f2a5dfdc8df6358d30c45433e2640"],["/categories/汇编/AT-T/index.html","85081865b36ce9f66db90486723a0598"],["/categories/汇编/index.html","ba1bd679161335f74e69e1ec726d0d2e"],["/categories/汇编/page/2/index.html","c3d235a64d37d704f1958e3e38e470ef"],["/categories/汇编/page/3/index.html","7f78d7b68189737fac584539a7ba05b4"],["/categories/算法/index.html","61c5db9f1530724da60e110bfd9e0ee6"],["/categories/算法/page/2/index.html","ac7150b9c0ce77d9832a7ee4e0b3dcfb"],["/categories/算法/page/3/index.html","df465ac910ed38e9b7bd3aa5f37d867f"],["/categories/计算机系统基础/index.html","14e11a83da92cf5babe2e2c2e07aee31"],["/categories/计算机系统基础/page/2/index.html","992dd88764237e074db202433f931955"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","87ba1bd7a771d71554ba8d035cb00f88"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","27eed3e9a80b4914a255b14fc2b75fae"],["/page/11/index.html","8ceaaca2dfa7cef9d77c66bf755672d7"],["/page/12/index.html","3261e95fbaa26c4f1c517f1171164aa6"],["/page/13/index.html","37fbee9567cba0d91d3cff9388ce8ec3"],["/page/14/index.html","503a69cb1169eae3e7e2a2ebd7d9ec14"],["/page/15/index.html","aea52fde8372021d7643cbac5ef48999"],["/page/16/index.html","cf53510ef0ec9f6ad84abdb1aedc28b8"],["/page/17/index.html","26b6b2f2ea15d7b6097874e05405c1ea"],["/page/2/index.html","8be176ed0005a9759557e4b14c25d8d3"],["/page/3/index.html","bab9475f7a176cfae73c7c3d9dc775f0"],["/page/4/index.html","783091b21ada1fedee43d2012b68855f"],["/page/5/index.html","6c27841bfecfe0c2bf3673a3da435690"],["/page/6/index.html","65c4cc56faae2bcc08bcc145418a4933"],["/page/7/index.html","8725000ea69ac6777be4188cd22952b9"],["/page/8/index.html","86b831dc76b2b0b0146dfa9d4b47dcdb"],["/page/9/index.html","1ad240ebc8d75b49f24bf42ec9a8bd5e"],["/post/10919.html","2e152850d6d6a471adb412f0af7dd3ed"],["/post/11051.html","a83df590bcc09117cb14d024b0a41d40"],["/post/11306.html","1478e4980b2edba80e34c67cc1b92123"],["/post/11491.html","9adbd468b7ea017a4df29e4268560d4d"],["/post/11799.html","db50df70d71dd9f7b035e079678db233"],["/post/12334.html","391be2d932ce3ef119c8516f31529d91"],["/post/1326.html","6e6e8067fba388511a4fb5de0e8dffb4"],["/post/14379.html","e9320b1c3e3f0aca5030adfda84a98ee"],["/post/14511.html","17797ee1790ce333e1cfbd312ecad3e0"],["/post/15201.html","c4fae71a6fcfc7b324952d485456becb"],["/post/15425.html","ed0bc4138ba3437864589e9d660738b1"],["/post/16107.html","9b044b2bda94f923fa8cafc27ea9f607"],["/post/16e2846c.html","cdc7e6990580abd50f859bdb9c054c14"],["/post/17862176.html","d9cd100cab2229a9e8558ec213e5b116"],["/post/18431.html","ab043acd11c982d262b799f7756664e7"],["/post/18912.html","b4ce257e923e752b7b910219d2e49328"],["/post/1b9c8662.html","129356e8488f4853d6aa153e08b9c64d"],["/post/20198.html","baad1a59ec4dd41ce92d835169279695"],["/post/20ff5ccb.html","56d5030a9027b80d87ec46f9d57d332a"],["/post/21624.html","af2f5c87ea39f6ed3279f949ee23252b"],["/post/2170659a.html","03f160bbc5479fc46d5119e9efff3b2e"],["/post/22102.html","5ed43920f777462ba863da10720985e9"],["/post/22493.html","475350899d392beeaca604f9c48a3d63"],["/post/235252ea.html","3645edc22f232ced5c4f4b1910d055ed"],["/post/25699.html","6638058282d5334c60cfb6896520ed55"],["/post/2647.html","81dde1b6f714cd3f3b7e972909dcb270"],["/post/26477.html","7edd850467e5e7d38ede8040d0a6002b"],["/post/26671.html","4ccc282bc383a0c68555328b5d16a992"],["/post/26737.html","ee206d7142f3195eefff3bc6785dd7eb"],["/post/27045.html","262336ac88a40fdff472918c1e4c6adf"],["/post/27621.html","97f776eefed2e029daae59a91358ffc3"],["/post/27890.html","e8f826ad6fd57d023dc4229e4c8f0219"],["/post/27980.html","0b4faae7ee6e99e98ccbc030d58eba1d"],["/post/280b588e.html","a21910fc41cf9b391240017cb384d446"],["/post/28579.html","1cc78296c824d0b143488b7d6157cbe4"],["/post/28877bf.html","d5936f956104c3e809a676d4a1e848a3"],["/post/28954.html","89b54d54152bec37d5dd4558b309633d"],["/post/29378.html","1b8298090ac59d669fa8c810d19572de"],["/post/29949.html","987754f8c300f097ff2f65071a21aea7"],["/post/2ae43b86.html","cefcf6661181d2c736c77a111b33a86b"],["/post/2ba82a45.html","c17bc7c122b3295de773dd79f4d73bf0"],["/post/30072.html","80674c40be35c15185ecd8565ef1cd3f"],["/post/30479.html","70f6caff58382ae5b3866aa5fdf389e3"],["/post/31a6b40.html","29233ff9746a20419ca0fe269d0048f0"],["/post/325cdbf2.html","99dac61e7d22ec5dde9802823239485e"],["/post/3319ed9a.html","08841fb1dbc2632b4fd85d0c99332d0b"],["/post/3320.html","f2187145df5f854321233fcaa10dd718"],["/post/33cb1151.html","006afa7c06c996b22d6171d91b7c6d56"],["/post/34811d5f.html","ce5ce236a250c701bf39da3f4618412b"],["/post/348d4e04.html","7aa576fbbf1f4c0cf431eea984abd035"],["/post/3526.html","7711f44f91482af8be3418c2ee1ee745"],["/post/35532.html","9cc33f8888ae70afebddc25b7e7cb202"],["/post/35848.html","e36a5466aa9867e716d238a80e895c24"],["/post/37318.html","4ad294baf2e318954a5dbec2d1db6d1a"],["/post/37663.html","ea52d656cc2aeeee4d37e3f31b760cd1"],["/post/38035.html","d57072ce2ae77a9002c6bb77149fd189"],["/post/38072.html","2bb93e0a2c4c00d5a94026e5b3592573"],["/post/38145.html","772e6992de0076b0eca5c95be7433381"],["/post/39968.html","9dfafd444f15d93d660b137671726898"],["/post/3de4bc69.html","3cb47d24e087180d34c8b83b3a7cab49"],["/post/40583.html","72b6502b367656e4615a625d14864228"],["/post/40997091.html","30d0322ed856a3a672ab1f38ee80e37f"],["/post/41129.html","02cac640bef621ae200665c64d5eda13"],["/post/41763.html","045549d8afae4e4e800ff01604b81e07"],["/post/41829.html","61b7f407df4a26013f8429504c12e945"],["/post/41840.html","977292a1d1928cf2bdac2a113b44f3aa"],["/post/41e39f2b.html","f98fa09fd5d957e341b34727051f98d7"],["/post/43817.html","40d18faa40b3b20defa81c1c41ae0533"],["/post/43878.html","9be6f84f55622bdb77ba69faf2ce3bf1"],["/post/44250.html","206df12ad4a532765b18a77bbd4daf45"],["/post/44336.html","f7c7695494184e914e126ef3e31caee4"],["/post/44454.html","080dfa82e8ebb59cdb40aa285344027b"],["/post/44487.html","92ab67b0aa2f703056ebb9e024e8ba2c"],["/post/44914.html","32cd50106b51ac936d4e12bcf3198862"],["/post/4551c130.html","a6ee8cb5ef8b373128ff4a3534dc8683"],["/post/455a4c92.html","ab99655e68660d91a114126179f043c9"],["/post/46466.html","7d473b561f3f1dd3168268d7a9fa940d"],["/post/46925.html","49159f68235b0233cbdef7a024d090e9"],["/post/47075.html","e0354df8f509d0def5d4fe1a228e72c2"],["/post/48220.html","4c310324c46b1f4bd12b2c4e90af23a7"],["/post/4b1879e3.html","081826ceff611bfb36407f5d670199a9"],["/post/4c720881.html","3a1eea5a8dc0ad0d80d093211287bafe"],["/post/50daec4.html","c27a7a9351aa1f38854619b8bbc2fce3"],["/post/51491.html","6bc6bf20828185bac7790ec27d8f99f1"],["/post/51e63dcf.html","f758fcbcbe1236accbe5c3276044dff5"],["/post/52078.html","0d1c73fc7b2dd9ceb5ba10d374b9d3e0"],["/post/53677394.html","fa10b5b217b0a2fc69ac2194506aa561"],["/post/54300.html","ae869483340b42f1ca39444c6c14d32c"],["/post/54612.html","eb9a62b335445cb6c115b3947d452431"],["/post/54613.html","7818ca55932490b42d8f2923e86388dd"],["/post/54708.html","9d9352442e575673293f3c3bfa24d6d1"],["/post/54778.html","8e22fcf837a9e38865aa1aac13115ce3"],["/post/5490.html","1de7be6693c28ace03210c7b4115896b"],["/post/55046.html","177ffdebae3f5fe373f644fe084274b6"],["/post/56929.html","7a251ddbdcfa7099370754bdc69fd6e1"],["/post/57339.html","f78a51779af74dc073fa7f1c6381187a"],["/post/57449.html","9da0b414c40a5360d8a6c38c15921011"],["/post/57453.html","64863a5c753c9d64ec0521c9824fba42"],["/post/57671.html","9208dc76a298f7bcd1a2f03ebace8784"],["/post/58313.html","6908e2349e4c03d18a15e0f13b4daebe"],["/post/58481.html","7f739546205f54dbeb882f398be56433"],["/post/58986.html","7e89917fe33ed093e959775757892303"],["/post/59431.html","f37010d695fc8224906847238c38ee50"],["/post/5951da65.html","56a1b3948e5afb275a0767b647fb072c"],["/post/5be7e977.html","f69932b256b8547006630b793652db8d"],["/post/5f9e4eff.html","b1c1e69b235bb6bf157dc11a09e912b9"],["/post/604b49d0.html","90853d9e6f0ebeb74e6af792e2fc0513"],["/post/61312.html","2af833ad6b9b6c61c9e999f680d5e25a"],["/post/61738.html","61d2c9d19bd8fe8a437798c35ccf040f"],["/post/61809.html","56508cc01d918a921ca8bd4bbe459df0"],["/post/61eaf19a.html","fc1ff1333d14e0cded4272df99e7920a"],["/post/63002.html","ef5855848c6fd4e11281340cf9ba9c7e"],["/post/63711.html","10b67aa2d27bdcfeac4d5600707481f8"],["/post/6587.html","ed31114c99e447d2ecb2734a741ed92d"],["/post/6589.html","f1a8f3b9b032005d137247e25aabb09a"],["/post/67454659.html","d2342f94d4abfd0b3037f290fbece032"],["/post/6880.html","ab19ddbeec1d30f0cdd26a26c12dabe0"],["/post/70263071.html","c98b29aeeb9b9422325530705de8207c"],["/post/71038564.html","9038855637e0771e0aedce085ff21e7d"],["/post/7119.html","92ec7170d42fa69cced4fbc758fd3dca"],["/post/74e7fdff.html","7dfc25da19a242acf5d41202d80b6415"],["/post/7502.html","da20c69ca8f6be67fe72c6021e906865"],["/post/7564.html","ff85cbf18687c295f5300b70a92cdbd4"],["/post/766f9b60.html","e859c87e12eb970d4262a404d51c67c2"],["/post/7ca31f7.html","e700b1d33f3d5c12d57f592808eaff8e"],["/post/7d1c86da.html","de602176bea8d881a8866d9d2789c89c"],["/post/7f3bcd7f.html","19aa45ea9368ab19820ae146818c106b"],["/post/8039.html","9d38c244ee1b42f92d767da0f61a80c3"],["/post/8050.html","678931b02d2b1604947a84027fffbe2d"],["/post/8072.html","347f78c233238c9230e24346ee02e6dc"],["/post/8274.html","d914e24de48af36cf1f1530afe147c6e"],["/post/8372.html","0ce6e974298646d5a6f2269f69b51bf2"],["/post/8498.html","20bd342debc93887bc7a712ff2ef36ab"],["/post/85b4e13b.html","576c100e2b04291d66ce38e3257bc680"],["/post/912b2566.html","974f51fb9432ca67e750b4c5f136a584"],["/post/9187.html","6a55e1fca88eab2372c8d2433f529e4b"],["/post/9197.html","7c43b32764fae8a5cd349b8664307e8a"],["/post/94ceb2fd.html","fcaf9f57276a5a0347bf807aef0f5679"],["/post/95495db.html","e96b98d352d2940ec87cb15a302099e3"],["/post/97246020.html","f31ae7c503b4b22745ed60fd75eb642e"],["/post/9954ba8e.html","1ddbda38506f8327606e51b7b852c049"],["/post/9d855db5.html","0e06f9f739c57e634accdd043c0b435c"],["/post/a3a786d6.html","737bf7d0064ffc5fd84530f4e29f5aa4"],["/post/a444b428.html","1f63eb03136270b9b8fd95f2eeb1dedc"],["/post/a50b8908.html","6c52d13505393589f97e0f0aac5d4897"],["/post/aa1eade8.html","42552f343ac1486437cc171871d64f11"],["/post/ade8c6d6.html","b04ef07ea7e079e210ae9a03b2085e40"],["/post/ae8362df.html","160f13824e22cd9ab3482f3f1ed54ec0"],["/post/b4c1d206.html","c92b5ea2539d1bdd60b94eeb9ed9d7d8"],["/post/d213fc7f.html","ad9ff9050329fb908d9ae78bb3ed881a"],["/post/d431fab4.html","13cfef456f5d65a9cce6cb3439c8730f"],["/post/d5381517.html","20bf5aa0d9c47a33f3ea708999a0066a"],["/post/d94f88de.html","529789bdce3f6cf46e718d18751e9430"],["/post/e058ffd8.html","5361a7f96dba7e8030b24b0d2db831ee"],["/post/e0f8cb74.html","4b6196dc6e6ad29684a794f4756dd7b6"],["/post/eefe591f.html","bc5ae7e8135fb8ee9e596f413d105819"],["/post/ef296a07.html","541c7573a28d2f5c820bf9cc3b49e8a6"],["/post/ef3a3fcc.html","be93376bf081c7a5435c604218e728ca"],["/post/f201f9fd.html","90f7a35c26575ab616fbbee052794178"],["/post/f79e4123.html","80793cc44bbcab60f9f6c203874e4d79"],["/post/f8648a1d.html","ce072b16a2feec8807f1fe8943647f02"],["/post/f89cb603.html","09e6444c6740e59021d279add401d6c6"],["/post/fa288682.html","795a90c677a6cea3661664030af08070"],["/post/fb98053e.html","16da00f8b7251efb47c1684a611e6575"],["/sw-register.js","05e76d26e4dee2ec4742e3c906435563"],["/tags/AT-T/index.html","434c802b200d5178b298432d658a2564"],["/tags/index.html","39ac52cfc29e5847e716d2d5c1cf4fa1"],["/tags/动态规划/index.html","fde4a12e3e0d0a7b6ea849d71c1e17a2"],["/tags/字符串/index.html","d2ffedc8701b9dad0cca50d03d961b58"],["/tags/字符常量/index.html","472b4c08562aed4c35216465424da9de"],["/tags/快排/index.html","d5c742f36ae04f09288cc7ce201737c1"],["/tags/排序/index.html","3845e695c4d448b94ba96943d1812dbb"]];
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
