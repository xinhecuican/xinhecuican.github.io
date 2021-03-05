/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","9bfa189d29bc10caa32abf7287ec44ca"],["/archives/2019/index.html","54c45b957982b9b7d40834e9f944fbc8"],["/archives/2020/01/index.html","7407585ce4c7f6e33c8f7f15e2350732"],["/archives/2020/01/page/2/index.html","8d2b57a3cfa59906aab36bb5b92802a5"],["/archives/2020/01/page/3/index.html","bcddbaa123e7e0018ef0978ed884695a"],["/archives/2020/01/page/4/index.html","a3bad79cd0b314edf8c2ed906a9a7aa7"],["/archives/2020/01/page/5/index.html","1dd6a42e0ba0d2f6aef7b4f5ed3f2dd9"],["/archives/2020/01/page/6/index.html","0a5bd24c829b57affd5255185b6d6b10"],["/archives/2020/02/index.html","5e8ac1adecb3ec94469400b906757a82"],["/archives/2020/02/page/2/index.html","1d9abc6f279c597e6bfb5854f4f3f739"],["/archives/2020/02/page/3/index.html","bcd4500be279f69e0182a6bfe06c6b36"],["/archives/2020/03/index.html","d4ba760ccb8919d2fef9c78646d4f863"],["/archives/2020/03/page/2/index.html","0d082747e7bc153031bfbc445528bca5"],["/archives/2020/04/index.html","f4a538c57d32f7a086644b33ca4a9a9c"],["/archives/2020/04/page/2/index.html","a1e873ad9d330ddc40bd1ef679e85882"],["/archives/2020/05/index.html","9046275ace0e3019ea8f59198e090f26"],["/archives/2020/05/page/2/index.html","7dd6f1617311379f47d7def3c20f5608"],["/archives/2020/06/index.html","591f60498b384d33af3b38a24fcd13b6"],["/archives/2020/07/index.html","47e4761fa6c626d8e058b16aaa278994"],["/archives/2020/07/page/2/index.html","e9dbd99956e1c69b73ef9a485fd9e99e"],["/archives/2020/08/index.html","484de3e310ed7dcd76f8df4b80997c96"],["/archives/2020/10/index.html","69dfda06488c1a09431dafda38bdcb84"],["/archives/2020/11/index.html","c479d52b203ad37ee423d21378cd03de"],["/archives/2020/12/index.html","0602f6e02b1ac597655c9053e3777b16"],["/archives/2020/index.html","f34f184cf15382e37c7eac8c53b13c5b"],["/archives/2020/page/10/index.html","db225822060ad7afc7a538617cebee02"],["/archives/2020/page/11/index.html","0a9b6194ef60f3ee83b321a3e3fe59bf"],["/archives/2020/page/12/index.html","d0566c34b44435764db8bd27d177e16f"],["/archives/2020/page/13/index.html","a6edbf24e61c1e4799e5d188ff0244d0"],["/archives/2020/page/14/index.html","c600fa42078ae39fc83e4bb6652e8fe4"],["/archives/2020/page/15/index.html","49045c5a87bd40e90a009732d7f1b071"],["/archives/2020/page/16/index.html","c7ff62f62d16ce4d7d37bf73ae495a1d"],["/archives/2020/page/2/index.html","8fd160fa7d435741074cf5df956156e4"],["/archives/2020/page/3/index.html","0d7b6b26cad7d46fe2ffea1cd1e9fb19"],["/archives/2020/page/4/index.html","ab4636d322d77d18bca5bef14ac7ef71"],["/archives/2020/page/5/index.html","b1eb5489f0ca3c5f6239d8d63331b93b"],["/archives/2020/page/6/index.html","17e89582bbd49cc390e17a761ab84888"],["/archives/2020/page/7/index.html","fda4c538b4b5545d890434827ba3dba9"],["/archives/2020/page/8/index.html","27634a93da3ad8857f61a339622c0d7d"],["/archives/2020/page/9/index.html","3a0ba9a8233c069346c1b88ddcf18adc"],["/archives/2021/01/index.html","596c10025c18cbb4091f80932780cbb9"],["/archives/2021/02/index.html","5c63e64513078b157a602e832d43eee5"],["/archives/2021/03/index.html","ae6db481daa7c4852b2298e310f40c52"],["/archives/2021/index.html","934fbdd78fb0139beec9fdd6257c5a9a"],["/archives/index.html","c6c49578a9887ca6d4ad206acd3d35cb"],["/archives/page/10/index.html","22fd4e9363375f3765b5a904954df30b"],["/archives/page/11/index.html","73d4445649aaeb1d1f0f206185c5f41b"],["/archives/page/12/index.html","e2a626562483f1b3e47bcf753ed0cfd3"],["/archives/page/13/index.html","2a6a0877e99122f354f663119ba83d2d"],["/archives/page/14/index.html","df903e815f07a4aa51a5da5374c3945c"],["/archives/page/15/index.html","6d1ce2bd3c8cb8a0c983aa0ed943918e"],["/archives/page/16/index.html","32ada1563a9c4c885227fdb2f70d07b3"],["/archives/page/17/index.html","7d0661498418790226b05aefea8abcf2"],["/archives/page/2/index.html","f427d09aab0506fd66aa877d4f6d9849"],["/archives/page/3/index.html","d2cdf94208d9a8aaa767cfdf271a20ad"],["/archives/page/4/index.html","e181ef98e89ced7885ceb16fdbc6057d"],["/archives/page/5/index.html","d66523581388db3cf316f6f14b9b88a0"],["/archives/page/6/index.html","a21244fc8ca8571c98b0bce21fc75188"],["/archives/page/7/index.html","a9047943716611d1ab2f78b5f4802859"],["/archives/page/8/index.html","750b30e90b1de634202dac4f498d8e85"],["/archives/page/9/index.html","5f8dd4cc1aaa8b670f7ead87630fab7a"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","fca63a2d67e9e60c29585b1005886cd8"],["/categories/Linux/page/2/index.html","7e844c10943ee7b3194392228c4983a0"],["/categories/MySQL/index.html","e072746d6c27ec892a5c0a461669d921"],["/categories/Python/index.html","67fea365c347af4499a257f5b1c05a60"],["/categories/c/index.html","e052b987366d5d674395e83686a81c3b"],["/categories/index.html","bb591cfbd74ca3c24ace94a715be1bd3"],["/categories/java/index.html","c156390fac5d875cebfdd8e17d39d740"],["/categories/java/page/2/index.html","212ca8f654e637e9e0196ee95243c7cf"],["/categories/java/page/3/index.html","6c834fae8b9a9dba2ec2e82ce248f32f"],["/categories/next/index.html","a8e061781b7663da1a58f31a71268f92"],["/categories/stl/index.html","ff424e44c10d6deed5175a297960d517"],["/categories/windows/index.html","d2aed31e7f55796084627a2c1b9a1496"],["/categories/基础/c/index.html","1a50505532fd46151d502c336963540f"],["/categories/基础/index.html","36c25b0b1af4c8de688db2c9314df190"],["/categories/基础/page/2/index.html","7e10084c3a6882379e1e3738270d93b0"],["/categories/数学/index.html","b73319259f5678acacdb41f64cab05d3"],["/categories/数学/概率论/index.html","69dededd7048a967c7d972fda3b40a6a"],["/categories/数据结构/index.html","4046cdd7b664287e069398e7aedb659f"],["/categories/数据结构/算法/index.html","a22fe21a1c23e27fc6e2ee1521c6c63e"],["/categories/机器学习/index.html","da7cdc4ebc260a2e474e9b72b3cc4a75"],["/categories/杂项/index.html","9c242dc1f7f1c7015283163ae25be4a4"],["/categories/汇编/AT-T/index.html","c407bc8062032c66e62882cab9de951c"],["/categories/汇编/index.html","664fd457862d636f60e04fe8abf087d9"],["/categories/汇编/page/2/index.html","80bb7762cba05e3d21df08bc9373db10"],["/categories/汇编/page/3/index.html","9e978d81cf340240bf7d60d5b3730372"],["/categories/算法/index.html","8aaf3a3b616f78da203c9fcd5df061c7"],["/categories/算法/page/2/index.html","dbc43a2953a045322c07e91de6d03ace"],["/categories/算法/page/3/index.html","778b011b2d200236c37e468b5e5cb33e"],["/categories/网络/index.html","bed9e1e268c957a7e65e7247e5bf0861"],["/categories/计算机系统基础/index.html","7516e38257537efc0fba94b64b09435b"],["/categories/计算机系统基础/page/2/index.html","b397e1b0a57951c89ad29e944dd20e3b"],["/categories/逆向/index.html","67244d104145947c9b2188f4fc2ed483"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d80c7f686a295fbc289581582023a0d5"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","9799a44bee4a64d34a341f63ffc3c544"],["/page/11/index.html","6df2558dd16ee7f608356bb6effa1003"],["/page/12/index.html","898ef87355d14c82c40866691722e566"],["/page/13/index.html","3353c1b91ef3decdc73df4de7759bd11"],["/page/14/index.html","c7783b648649e55b791c5899da1e8cd9"],["/page/15/index.html","eb479f8f6ddfac0815a4204531585897"],["/page/16/index.html","02a90977017c82d19fc8ad803966e4b9"],["/page/17/index.html","c74611da63bf94080c099fded3bcbbac"],["/page/2/index.html","08e727f196b12d27e64727c7087c9d2a"],["/page/3/index.html","c20a45d2d3b0fc7aa54ca431e2a4c28b"],["/page/4/index.html","c47ab0f4d7005f3250a1c5677900020b"],["/page/5/index.html","acf5424ac5fa6bb52aae6837c96a9740"],["/page/6/index.html","8aea9d019bddaea32a27c4f6d5162a4a"],["/page/7/index.html","13bbe40dc39668701ff1305910457fa7"],["/page/8/index.html","1226e868170fe84b07f18795a5249eab"],["/page/9/index.html","2399643d981aca357772a8380589696b"],["/post/10919.html","39fdd92f339edef6c6ac9983f6689bf7"],["/post/11051.html","3f52024ad2f9f3e2f1c7f1df6419f821"],["/post/11306.html","a69a52078aeaf71497271a67b64f45d4"],["/post/11491.html","d1d3f951454c6cceef7a13b4fd08713f"],["/post/11799.html","9e55b7fc9bb18d1e879bf4de2dbd319c"],["/post/12334.html","f8d16e7852e20ea227283a73e13ecb59"],["/post/1326.html","afe590576d9b72276a7f3cdeae37ef87"],["/post/14379.html","fa422ce6f2f56f734271223b6ee81688"],["/post/14511.html","d7f8318b035bd38e4a4be9f5c73255cf"],["/post/15201.html","1c1e646996c50262af7806aaf968f6a3"],["/post/15425.html","f8a5533376120c427162680d83f6b801"],["/post/16107.html","c760fe78dd19f046a76211bfb1a48d1e"],["/post/16e2846c.html","6f2879b7b7b71fc320ba09581cc89e6e"],["/post/17862176.html","a7761b2eaacd9b217dbb335d5c20dd64"],["/post/18431.html","e1e9737ccf7ac8230ad0226e25a10cff"],["/post/18912.html","3aaadaa9a36b033c74b4a01fd1c5d175"],["/post/1b9c8662.html","ed518fecc383422b992295a9538a31f4"],["/post/20198.html","1354ef54226f4cf8ed264cbec9e45811"],["/post/20ff5ccb.html","56f28619c6463081e87750ff5d8806b0"],["/post/21624.html","7a7372b94c98d417246e92bba113177b"],["/post/2170659a.html","a6287ff1d821d22b9eed0dba7b8dafcd"],["/post/22102.html","3970bcf2a9e93d0ab144613db5110723"],["/post/22493.html","30db06a368792237bd1af3d99d028ba1"],["/post/235252ea.html","3b4a3bbd5d2d13985fe1b4e0e6bf938c"],["/post/25699.html","0f3f4f5751be14162dc299a0cb1568ac"],["/post/2647.html","05bc41fed9436851773047d0ab91c0f5"],["/post/26477.html","f103b88808c96b264935724b61f75b8e"],["/post/26671.html","ef85e840ea45af943b311e4b4dc479c5"],["/post/26737.html","0c22d3e0f59108942f350b53c9797600"],["/post/27045.html","e0222ded0d6432e4a8df3fcf53b112b6"],["/post/27621.html","e718c577c9fadaad3e3af2b6a642c944"],["/post/27890.html","9a7b99e15e300e68bc09920fb976f120"],["/post/27980.html","c81d9e1677c692d96aacff6dc8e0fc13"],["/post/280b588e.html","f31e392a3a641f6f07f52166998378e0"],["/post/28579.html","d08da771f7e4345e86508d8aed0ec7f6"],["/post/28877bf.html","f030a7deca0961933750cbb147a38eb8"],["/post/28954.html","b2186a918f00a4248cca0858643bb888"],["/post/29378.html","7a5db7a37cb48e2a8af420de0e533d03"],["/post/29949.html","32fe38f3dd6d4b1f8687eb89ee2c0e45"],["/post/2ae43b86.html","f03f7b2fb4e597e4533e7f6b6276bba8"],["/post/2ba82a45.html","d94b7614bec70936dedc50fb9c897d62"],["/post/2cad8b04.html","262b97dd83d7841f8c3d8155ec45bacd"],["/post/30072.html","73199538c8d4f4f76c6ec1de5feb2e05"],["/post/30479.html","3f9e406741a0c60a91e0fa88aa67c339"],["/post/31a6b40.html","86bf8a873797de4c6b2c5d64443adc35"],["/post/325cdbf2.html","baf03954541324d88b5ff50b6b44553f"],["/post/3319ed9a.html","6dea1bd151836eac5f316755a0fc0dea"],["/post/3320.html","254ac717000c9011f3e464f331836e4b"],["/post/33cb1151.html","15f7c85196602d0d134a3f89fdfffd00"],["/post/34811d5f.html","020aa463a3f021e024c32ba08d563aff"],["/post/348d4e04.html","d8935d50079f33cc2176a93c0b27eb2b"],["/post/3526.html","d2d54ae7e6639d2dcc16eb988a70bf9c"],["/post/35532.html","34fb74d51c6f151270e4fc2211eaa5fd"],["/post/35848.html","862b20ddb3d4035756db788e65d6b7d2"],["/post/37318.html","72a26651d06871fca2e7b91775dc783f"],["/post/37663.html","d83b82517149295f0ef4b2472604d1e4"],["/post/38035.html","a3a25164fb90781577f5602aa1d98a18"],["/post/38072.html","c84e9e271a52a4c734986029ef1c7351"],["/post/38145.html","af05ca961f923918af54a5290961d18d"],["/post/39968.html","1031752f4217dbc6cce99d6b7447c372"],["/post/3de4bc69.html","7e0048b3b6f9f95b16f04f1ac7f5282f"],["/post/40583.html","cbad31e4edc6760101ddfc02270881ac"],["/post/40997091.html","7f6a163489b801aefaef052eb64f95c8"],["/post/41129.html","bdd8021389cd9ab744dda9656dff1c25"],["/post/41763.html","b7bb6bcd0a462bc2c571fd444c1cdf10"],["/post/41829.html","8011de4c7be13de3f9e02270ef11cfc2"],["/post/41840.html","eebb38542c4b0d99b66faba220904364"],["/post/41e39f2b.html","c330e9f5c51eddd628d040080c2f5b16"],["/post/43817.html","9490af66616873b13b2380172ff1ae3e"],["/post/43878.html","153bbbec55928a720f5a4270f573d0e2"],["/post/44250.html","2d605027c2a4b9deea5a9827e5a905da"],["/post/44336.html","255fb50e40b87716d055b85d2f1398f8"],["/post/44454.html","916b83fb21f8374623e880b1722f76d0"],["/post/44487.html","53cb4f17dc5c8f49af3809f9484f1855"],["/post/44914.html","a7b11986eedbe99c0f7c67de27361742"],["/post/4551c130.html","5b6859b1befa64b52856a8e6ac4be754"],["/post/455a4c92.html","39063a4d70ca58039d7b03021cdfb01b"],["/post/46466.html","93c545c93f7319abbd04ae937933bcb8"],["/post/46925.html","bf8cda78ca6969d0cf1bf1a1ec3dd35b"],["/post/47075.html","fcfc2dab4c2f30454852aa0e44b59cc4"],["/post/48220.html","ffa125328f5be6274737f11df8e2a3b6"],["/post/4b1879e3.html","771083d71fb4eb859ecd8bee30e4ceab"],["/post/4c720881.html","1c5aa67c4b5686c2b68cbb717d836cf6"],["/post/4f4fc0a1.html","dddc07634b2cb4e9a2384e081c660be4"],["/post/50daec4.html","3982252b42276deb24549a4564d6a2e5"],["/post/51491.html","72bc4109fde301fa23d65034e0fa81a4"],["/post/51e63dcf.html","b3ee59dde60d5a84dd7ab68918aa70da"],["/post/52078.html","8e6987fdd5493586386bd04aea77250e"],["/post/53677394.html","ff2c2fcbdde3059c59c23a6fcb0f0f14"],["/post/54300.html","6d735816cec36058fddc1f54c06e7910"],["/post/54612.html","28e750f3eda0d94f46d0ec50afb68480"],["/post/54613.html","bb3130f60b652c08d1356dff144f5b9b"],["/post/54708.html","5007f7fcd701271f090c0fe2dc262529"],["/post/54778.html","3876890ab4f73c1040974e1a9c5fa104"],["/post/5490.html","ab9ebc5a6b258bb8e30f292913ef9352"],["/post/55046.html","57acbe50b0384c16c55d51ffc6f3b08e"],["/post/56929.html","eba40645991535a404b175a4a4be6d78"],["/post/57339.html","e0e85b6cc937db9cd6775d98d2df1da8"],["/post/57449.html","dc5df24e1de03d9ca465c9d1464d4fb6"],["/post/57453.html","7475083dfd5371debf0b06a4f9e143ed"],["/post/57671.html","d68f088edefa4537165d7fb7be80627a"],["/post/58313.html","4a316d71a4e530e2748772356e82a524"],["/post/58481.html","44115a9ad7f00a902b11f99ea66a7104"],["/post/58986.html","f8326f12d46f8e445e9d68b42e72ad81"],["/post/59431.html","1cf37f32696ac6bdfd96e7c560e4622d"],["/post/5951da65.html","ca1644182f02bb6aa936f36b035bf28d"],["/post/5be7e977.html","0119d41e97e60acb5232b6ee77e5ccb1"],["/post/5f9e4eff.html","5ca24fe03efafe963b3d243677cd8274"],["/post/604b49d0.html","5a62caa4e4d5221b710e6675c477b4da"],["/post/61312.html","aae1d6e233165f890761286d6a1ee5b8"],["/post/61738.html","915919bccbc0f552f1f7d826403ae360"],["/post/61809.html","5de4aa79c2beedee0973e311e8253dfa"],["/post/61eaf19a.html","689ba1f57466bd337d9b1f350176233c"],["/post/63002.html","77c8974c2ffdd98da9cd444f4099b77c"],["/post/63711.html","8ab9578bf4676accac97bd3618d265cf"],["/post/6587.html","c145d779ddb5cec4a5d64f8018ee15b4"],["/post/6589.html","be959ae7b2eb02bb5ca0878f7a79c397"],["/post/67454659.html","573e1052d4a609679b0f1d36814a0a79"],["/post/6880.html","6581e861fd3dcedb591a48175e438f9b"],["/post/70263071.html","c9507c3ad4a6564fa6846a4a6b12bc86"],["/post/71038564.html","59cf3efef3049b7806293a00141c8c18"],["/post/7119.html","ccf98767781baeb03b90a3a97982513c"],["/post/74e7fdff.html","643cdc1ff56e7b1d420339fbe599e6bd"],["/post/7502.html","60e18115c6c143a9721d762542a0788e"],["/post/7564.html","479c8a11aa7e2ec2537d7aa68dfde5d3"],["/post/766f9b60.html","621354837e0ef2b607b8fb5e578ffac9"],["/post/769365ef.html","2b4b564c2104d8ff1f667dd598cde447"],["/post/7ca31f7.html","53d42d20c3350c493005b9ae7ce2f19d"],["/post/7d1c86da.html","b73b65b20fa5129d15361f6f4a725fd0"],["/post/7f3bcd7f.html","7bcdd5de1605a67142f2b0d5987eb2f9"],["/post/8039.html","a1d6507e3c9158641504c74ba80b1b83"],["/post/8050.html","8209bb6b8a0fd54ddf9cfbbb6a058633"],["/post/8072.html","e523a8b51255eb170e781527da8be1ee"],["/post/8274.html","00656d60dfc891370afa947331285030"],["/post/8372.html","be4b1eded8a8b25539771a3600f353d3"],["/post/8498.html","3dda79f77324f09d03ed90306e0c23ff"],["/post/85b4e13b.html","b3041b1c298457f4b962c21f2d6018b2"],["/post/912b2566.html","a5512e2dbb9afc352ffa82b0f6dacf18"],["/post/9187.html","f581326ba08d299eef98ebf4a926e680"],["/post/9197.html","4c07e46316601230f29b040be1c66be0"],["/post/94ceb2fd.html","ce30779eab324b1157b699012e944604"],["/post/95495db.html","06d07c0e8490060ef216ef35a3a919dd"],["/post/97246020.html","37ae6ece459eb3338625baad1e4f79e7"],["/post/9954ba8e.html","5ecf5818e1ff5af249344f9579fc0452"],["/post/9d855db5.html","37a98e2abd1dd0c5be8cf711cd7579e9"],["/post/a3a786d6.html","fb82c25d0b98acd1d0049f417acf1e25"],["/post/a444b428.html","c7d4b54ab966144e05070fe5cdd361d2"],["/post/a50b8908.html","9d2a0211d1b3adf33aeb55e1016cd5e8"],["/post/aa1eade8.html","2ad12ec3773c9f809bbb5b73496f82e7"],["/post/ade8c6d6.html","5983855c1a24679afc74b2c2da2415fc"],["/post/ae8362df.html","cf598ce0b90fb05e8408b003f5d6e047"],["/post/af3eed3c.html","97ba51901f25df0e01e9506cc0788677"],["/post/b4c1d206.html","c3edf3d76d52e267d01b3a888951cd54"],["/post/bd608ff7.html","fabfb5bfcca36504fed27491f3fa8bf6"],["/post/c82a1c99.html","65b6b64944a05fd2e097a0abbd78f24d"],["/post/d213fc7f.html","fce2f4045091d07092bca4414ee7e426"],["/post/d431fab4.html","524057a6e72fed225432bea1a079a13f"],["/post/d5381517.html","f3f6e80e198c0d301cc8a28473616769"],["/post/d94f88de.html","808d62a64047305a183826d3397377df"],["/post/e058ffd8.html","579f7bd61dca13dc24b9c86f52b23536"],["/post/e0f8cb74.html","a9fb194dfdac52eb6d44c4d0d63449b4"],["/post/eefe591f.html","7b101fffa96efdbd5e08d64014c45916"],["/post/ef296a07.html","b630949ec019f795992b4ffb2ae753d7"],["/post/ef3a3fcc.html","2ff45ca63875cea85c5d40c12cbc5a0a"],["/post/f201f9fd.html","e4bf40a62f7b3be8b9910f4476b7e47b"],["/post/f79e4123.html","e01c3830e1af02abe8765571ca1d0ef9"],["/post/f8648a1d.html","d195978f9f584529b75f67283a7476bd"],["/post/f89cb603.html","38cccf5ba95f8f4203bf37f7ff93c1ae"],["/post/fa288682.html","0f0b6c2597ae1f5618d16f5676a507e3"],["/post/fb98053e.html","b28ae225ae8469c3773d10930eb212af"],["/sw-register.js","17bc136e78f64a4e1c8e8e27fc1c10ee"],["/tags/AT-T/index.html","13c7e1f10c8395cb48904b6094c1d20c"],["/tags/index.html","1ece60c50080e8f59ac89838f3a934c6"],["/tags/动态规划/index.html","d6e76c59ca567201dec0fbe6131f6349"],["/tags/字符串/index.html","11a26f5022870a9eec084e0ac200df5f"],["/tags/字符常量/index.html","48fd34bcadf014d0aad91df07ba9ceb1"],["/tags/快排/index.html","4058582574dbc4f7243c559f55686697"],["/tags/排序/index.html","260bd5d40232bbb22f391d55b5a8ba60"]];
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
