/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","c83aaa165048380e592079e26232c80d"],["/archives/2019/index.html","2d2d601c4c8930e45cfbc25d8ed7c498"],["/archives/2020/01/index.html","73968348b1c09f0d48f77d67f35ae310"],["/archives/2020/01/page/2/index.html","bd310e3c705eae372f193d144901c507"],["/archives/2020/01/page/3/index.html","bca10071cc43bdb8d31342d9c0c88fdc"],["/archives/2020/01/page/4/index.html","b2f16d749a4dd997e9fd6732f3809518"],["/archives/2020/01/page/5/index.html","556df822c9406e76c79ccaeeffcbc38a"],["/archives/2020/01/page/6/index.html","22c73ccc3736bdbc2a2e8d0035d5c049"],["/archives/2020/02/index.html","f31c36fa806b9679104c94fad09b85ac"],["/archives/2020/02/page/2/index.html","648700ca1ca80949cbf799ab2db7f113"],["/archives/2020/02/page/3/index.html","48e13a1d4292f6b108612d9968618edb"],["/archives/2020/03/index.html","b282cd7bbb1f41cd28c36568b8128e19"],["/archives/2020/03/page/2/index.html","886b9adf0c592904fec985d9d2b2fd56"],["/archives/2020/04/index.html","0199fdab9d3f4cc4084dc2b557669ad4"],["/archives/2020/04/page/2/index.html","7e13c56d4573b8b2d34dca46599576d5"],["/archives/2020/05/index.html","0351d7bd32c54502666294eb88108990"],["/archives/2020/05/page/2/index.html","ca86a71a5263e8bdd8dbe073262220c9"],["/archives/2020/06/index.html","14e9febb7acd4c8197fc80d8c76e2868"],["/archives/2020/07/index.html","46fd177ba3a714db14455e25fe77d3eb"],["/archives/2020/07/page/2/index.html","358d80b33fc144d945709e6ba5eb2d2d"],["/archives/2020/08/index.html","96df8c4b2b8c0e930136a27a0be9f2ad"],["/archives/2020/10/index.html","569560de46aaeb478e0e635b1feb6b16"],["/archives/2020/11/index.html","e0c784cb03c3ec58cd8e00d77de57514"],["/archives/2020/12/index.html","54e6f18cad170145722b830244a01967"],["/archives/2020/index.html","98c957358d210d4c0669c699e49b6e55"],["/archives/2020/page/10/index.html","acc8063dacbde1f15e1738005115b657"],["/archives/2020/page/11/index.html","3c38b98d85ec7bf04b1c68a472f25f35"],["/archives/2020/page/12/index.html","af78aa8c71c7aa56d7ea8b84608fe96f"],["/archives/2020/page/13/index.html","5a3c320bfd54948685a86ee78fb4dd78"],["/archives/2020/page/14/index.html","65ab2bb55a62a80dd02149814d7c94f5"],["/archives/2020/page/15/index.html","997c31ed45a9ce73b2e3c45181cf777a"],["/archives/2020/page/16/index.html","5e99cb7075c1eabbf34d2d7e69e40088"],["/archives/2020/page/2/index.html","db7cd0decc20bc7987fb5c55b0bbe3d1"],["/archives/2020/page/3/index.html","cbb124b864307425888ad5b13af35d5e"],["/archives/2020/page/4/index.html","c8392a23c263a8e34df0f6f0e518ede8"],["/archives/2020/page/5/index.html","641f8ab7937d4ff5b8cc6668036141ff"],["/archives/2020/page/6/index.html","5111dcfc474d4bf566b024d0404104d8"],["/archives/2020/page/7/index.html","9f1bacec8ec1785a35efaf44a9b8a18a"],["/archives/2020/page/8/index.html","0abde88c18c730e0a96a4ab38961ad76"],["/archives/2020/page/9/index.html","3112a38f1e5f6f18be8a2fb61b4a22c4"],["/archives/2021/01/index.html","169d24ad5363b43cb1ff6b3a7d83b59e"],["/archives/2021/index.html","f5e5b90fdfd2e3b1d1cbb4666f0f2945"],["/archives/index.html","17ae273638732aa33e866c787571ad55"],["/archives/page/10/index.html","eb76e3fed1e404c3d206c1f370524e86"],["/archives/page/11/index.html","f4d03090edc15ceb6f7fc3f6277c49e6"],["/archives/page/12/index.html","13039933666bf5d2a04d90fa196f362d"],["/archives/page/13/index.html","17fa4312cf70296a7eda83c71fc62a10"],["/archives/page/14/index.html","0ea0dee55e74418819f9edc78373c57b"],["/archives/page/15/index.html","ec7aac4fc78bd93fd4df291f0053fd3b"],["/archives/page/16/index.html","a215e0c2f15db27d5198ee62980dbe69"],["/archives/page/17/index.html","387f456fe2701d681bfac1df30985e31"],["/archives/page/2/index.html","ec779f2aa22a4ff4bf72b834466c997d"],["/archives/page/3/index.html","078cbcbcd1cd44d7d0853496e9c8e80d"],["/archives/page/4/index.html","c962c47ddef9af7c1992331a6a8a4bc6"],["/archives/page/5/index.html","ff80b2178be7ecd82117b0f422ddba37"],["/archives/page/6/index.html","596943d99137877dc1b908131b8cad62"],["/archives/page/7/index.html","7a9d73238892c40a9a9841ebed797132"],["/archives/page/8/index.html","d1e6fc8631b6caf0d10d1f748344b118"],["/archives/page/9/index.html","9c1d37d5b944376efbc497d1281a4e67"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","4f1e2c3f27065331ced463a186d11d38"],["/categories/Linux/page/2/index.html","6766ca4da3aeb722704bf539bb053fa6"],["/categories/MySQL/index.html","95416a083b9064e2ac25baf7f9ae9ae3"],["/categories/Python/index.html","096f6e089306218b8e63127caf184512"],["/categories/c/index.html","cad801053d3c94381858c944b6f06107"],["/categories/index.html","0e7f19be253dd0ee246bf82cdff19cb5"],["/categories/java/index.html","b276deef42462e419acde4a8775c1cb2"],["/categories/java/page/2/index.html","d61b15d24a98fe7751bbc64d45741b6b"],["/categories/java/page/3/index.html","280f98f723ef1e8c2893416293d7820c"],["/categories/next/index.html","05265b1f905d791d2c404ff039ab8079"],["/categories/stl/index.html","e7910ddf8fb06a50b1c0b82925a8c972"],["/categories/windows/index.html","df9d10163c1ebb84887db3cd4d784187"],["/categories/基础/c/index.html","67733c48d4b039167e327f018a494daf"],["/categories/基础/index.html","3f91999980e5040bae4bd381c2d33acc"],["/categories/基础/page/2/index.html","0377aa31cb4c53be48715c769938fe95"],["/categories/数学/index.html","2155e1554eb02506b38e527f56853204"],["/categories/数学/概率论/index.html","b07742802234d66c0d3d041904b945cf"],["/categories/数据结构/index.html","b8c7c9f5eb23cd82ccf0fc8360a67642"],["/categories/数据结构/算法/index.html","6e5fef40d0e54db46dfd546045e5bc2c"],["/categories/机器学习/index.html","d8ed54a321495915448e798f6b1e74c5"],["/categories/杂项/index.html","3fa13970b335b331e6f383a1a07dfcb4"],["/categories/汇编/AT-T/index.html","69fc66e5af457300c75eea3c57832145"],["/categories/汇编/index.html","f35a923f3eb1e419ae3fb6be6672043b"],["/categories/汇编/page/2/index.html","8b6a3f93029f17e8b94ea7afe4aec53a"],["/categories/汇编/page/3/index.html","3276dbf0497a3d00949a8fe384d8d086"],["/categories/算法/index.html","64d41b76c15ae42c7fe9fa83475c4f40"],["/categories/算法/page/2/index.html","7fc408efc968908afc4f11dfdeed91c4"],["/categories/算法/page/3/index.html","6c27e31e22dd923beeadda33b0dbfb97"],["/categories/网络/index.html","c1bcbc2b9ba6ff0e795f13c0b4661202"],["/categories/计算机系统基础/index.html","f7fe37b4248d804a9c87e4a94d190f93"],["/categories/计算机系统基础/page/2/index.html","a3f9f59318df56fff2bdfe5fb1455315"],["/categories/逆向/index.html","63ce790f32ac814dc320d535e716591b"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","45487f5d4e9f263d62ebdf7a973f5ef2"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","48c10a98bbb567ea0f7e25683726504f"],["/page/11/index.html","6720604cd1561689b4bd419c0eab154a"],["/page/12/index.html","9f704ab9ac6b84e308190f74297a0bf7"],["/page/13/index.html","af031c77a327e15ce1ee94b3c2bff233"],["/page/14/index.html","4fbcfaa5621a37a65e17fa386ad6108a"],["/page/15/index.html","26f2492460985951528ddfa96d30fe82"],["/page/16/index.html","bc25b8a4a81d0dadf91ffb2be173471a"],["/page/17/index.html","636bfff96aee7b1a4246748bccee1c04"],["/page/2/index.html","e11ec44f30b3e08e2092908a1f6411d3"],["/page/3/index.html","68e8c8c4559320b8d2ba31dc5bfe904b"],["/page/4/index.html","64f7ffa68f1fe256379514c3ba97a8a1"],["/page/5/index.html","5e77d226f8a0c7a2e91216f69160a1ce"],["/page/6/index.html","d730d06cecd0d2af42159daa4156f4c5"],["/page/7/index.html","40a232c1a261aaa9740c0b2b7002c233"],["/page/8/index.html","dc7149c82ba0e7fffb16ffd40bd36a0c"],["/page/9/index.html","aa4a426c91dea8efb5c85e49dbc2c4e1"],["/post/10919.html","aa036e6bdc3b05efd8c6e60c2da5a9a6"],["/post/11051.html","18a1a23ee87caffdd0edd121241b353c"],["/post/11306.html","fed8449874b30150662c9329a7ab220d"],["/post/11491.html","7d01e92585b5334a276d14efcc29d540"],["/post/11799.html","64a6d9d5dba5e2237acb0e10cf90b087"],["/post/12334.html","92d7af991d8953421ea27180b5193389"],["/post/1326.html","6fa53663542a46230e198698a53140e8"],["/post/14379.html","65ef4fae4e52c959d763b00fc136147a"],["/post/14511.html","0ffbcbea6b1606456fdfaa1d497b0d9b"],["/post/15201.html","da3b8dac9b4d8f6e6421dfdcf4cee80d"],["/post/15425.html","7ebc0005802ad9d02ed76e806ea19729"],["/post/16107.html","4a88f3a160ecc42a34d3a1cba59fa3bc"],["/post/16e2846c.html","1de49b5038c1fdb985114b0b9fed9a69"],["/post/17862176.html","966bf187b58fdd9ec74348cf5585008d"],["/post/18431.html","5058223018236aa1e85674648d61f308"],["/post/18912.html","ac147fafc096aaccde11429522b1df1f"],["/post/1b9c8662.html","80ea8cab8a11bb49ecd552178031603a"],["/post/20198.html","f07c41a53d864cac1b868d64c26d3e11"],["/post/20ff5ccb.html","444ab327c8f5cb89db39437c6258d616"],["/post/21624.html","c81e5a4be02e1e605d7d08e2131917d3"],["/post/2170659a.html","0ef5167fdcb220eef8d95e94fc625b33"],["/post/22102.html","4df6e18905a68c8668ff18e619f88940"],["/post/22493.html","ee31ee8340b4fdf37dfd23194346e165"],["/post/235252ea.html","0d8e4594c8bb5fb251aefea06a848254"],["/post/25699.html","abdf914a06e8cfb9a63009d20c307180"],["/post/2647.html","e2be1b9e7bc526b2c271ccecd9626c8a"],["/post/26477.html","95ce1b1748986f83caaf710d3142583e"],["/post/26671.html","19e8c3cd5ddf0a6754fa2dde71cde9ce"],["/post/26737.html","c26faa3cd3d940a6bc019d0925ca252b"],["/post/27045.html","8e1a0c19974a1262e91f9c4ef8dd5b08"],["/post/27621.html","fff1f52ed7224284174bb402c3f38bf8"],["/post/27890.html","4a3ec80261ae7da4d4dcc706e8fc686d"],["/post/27980.html","98ae8d3199d3ac69c193d81b83dbeb36"],["/post/280b588e.html","9a334503c87704a4dc5b84da4e47aea0"],["/post/28579.html","9eccc3499980613c611b465592aa50b9"],["/post/28877bf.html","f531f1906e8fac8dfbb72c9541297e72"],["/post/28954.html","ded61b576b72edbb924e3f91542c84dd"],["/post/29378.html","9513de4f49726fe01564ea414bc0ffe1"],["/post/29949.html","84e716e157bde82da93a28d24b920c3b"],["/post/2ae43b86.html","ae829fab32bd9861bc18d008635cc9e9"],["/post/2ba82a45.html","76116bc50df9f9581076f5f5ef73d785"],["/post/30072.html","fedac0c3c7c2959f6781440b468c52ec"],["/post/30479.html","e9b6b85d6de9aa65e6e7773fcd6e7d68"],["/post/31a6b40.html","f71b50a33694a8424156906bf9d36d3b"],["/post/325cdbf2.html","ce1f36fad6324e33e9fe17f33538034e"],["/post/3319ed9a.html","5a30292761a270931f54a02eb2c41b94"],["/post/3320.html","e75f8522b5936e777ba06ca8d7aaa333"],["/post/33cb1151.html","4544d26597b436d0afed0a597d8a7033"],["/post/34811d5f.html","1af949ba5963ad829bde59c6e3cc682b"],["/post/348d4e04.html","dd2c4ec73d53202a2db408f3270523b8"],["/post/3526.html","9ee89564ff405578cebd5dbc2636b839"],["/post/35532.html","6451a753b81f17549df18e9c2820a04a"],["/post/35848.html","9f524302938d42201ccf3a9a19f0d78b"],["/post/37318.html","823094e2dff52448c119a9a16ed84685"],["/post/37663.html","44fc66054c54bbfb7d3153ba60de542d"],["/post/38035.html","f129f661f0444610d8aa5c22d130e10b"],["/post/38072.html","65864022efdb83648095469a4df1fdd9"],["/post/38145.html","6f6fc17993e57e656403ba694b5830a7"],["/post/39968.html","eba59eaaa2caf408492965e83d1b42b5"],["/post/3de4bc69.html","797a6e5dbf08451f31f1a54c75b5ad25"],["/post/40583.html","0a4b9a6ca86b9ab26ad5cf6244bf393a"],["/post/40997091.html","c382ebb6084da15b98ef0ccac570381f"],["/post/41129.html","1c74fe228792d023e7bc8701f668fbce"],["/post/41763.html","7dbfd41b7e9770c6de50f0296744eb77"],["/post/41829.html","6efdcd0fb03643c948b3761f750f47a9"],["/post/41840.html","31701bced2ce416409e2c2264595a57a"],["/post/41e39f2b.html","6e5b07d0951191ccb7847b418c421ca1"],["/post/43817.html","2d9575318530dcaf99d6a46cdf313522"],["/post/43878.html","de9af42da95eaf2f873f1529c6386ee7"],["/post/44250.html","4443c5401778bb914cd8dabd1531e5d3"],["/post/44336.html","566d1c7903afdac891fa97c7cd5c3a4e"],["/post/44454.html","a29010061ed24c6d87820243b6453191"],["/post/44487.html","9bd2f274e664deacd2c99a37c8009892"],["/post/44914.html","98bc418e0faf43aff7ae00e21f635843"],["/post/4551c130.html","61e7dfb191ca5f0e307ecc2d82c22c66"],["/post/455a4c92.html","4f904b9f108d5040ab18365580593976"],["/post/46466.html","774b7708a9a9eedc1da7b3eaef0bcd75"],["/post/46925.html","89e114227a720c4fbb06cb11b0637daf"],["/post/47075.html","8b2c21984def6144b3f8a66c9b6cf470"],["/post/48220.html","290c7903628a62a8c8881fcabfa9d497"],["/post/4b1879e3.html","67e92540043c8e1ab8a910bcc5a3807c"],["/post/4c720881.html","aa5d3a2906384d726330171f674bca22"],["/post/50daec4.html","7b6319ef97096a871bbcb3ca6467f36a"],["/post/51491.html","d3a8e0e296f57027115bd8382f938f77"],["/post/51e63dcf.html","c1b78c70d18f9c500ddd737e16ec349f"],["/post/52078.html","764a65c968f887e0b7b972978cd8e403"],["/post/53677394.html","8ea92b678f2783e6c0a07697d4388a10"],["/post/54300.html","405601c8bbb8b09c97f28c9718362942"],["/post/54612.html","289ca494fc9b0f562603b24c51287abb"],["/post/54613.html","d84c2a4785dda06afe54b926f609724a"],["/post/54708.html","99e2e7a1bd7a095306699f2543916bfb"],["/post/54778.html","dd0d38fcda8af8682f60e77d3491f026"],["/post/5490.html","ee99fcb23373a12c9bf8b5bc839b6854"],["/post/55046.html","7aae2619e3342e76007fb9bc97cf9144"],["/post/56929.html","845a4477c29b69efc368c433c4881e4b"],["/post/57339.html","4b96afa9c895762ec39820c476734055"],["/post/57449.html","688044bf62504d7c69ad4d519644b101"],["/post/57453.html","d20b2bdab2824ae17f510f5145d717a7"],["/post/57671.html","07857400187751a608605f2658d2c0e8"],["/post/58313.html","5437f0b18c97b9e5bc6cf80953fd492d"],["/post/58481.html","08bd1e3e76b57fd24b382786375cfdce"],["/post/58986.html","61d125d5ab3838c80349d02ced1ea755"],["/post/59431.html","574d22fd96c238cd6c44d793caf4e7fd"],["/post/5951da65.html","724e1762f73e9685b66693db60bd042f"],["/post/5be7e977.html","789f88f03c9b882732f1ce96144e498c"],["/post/5f9e4eff.html","4564fe977e12e5ec892e415152af9d99"],["/post/604b49d0.html","34d75b14741310b966d2ca28342749d4"],["/post/61312.html","447a1cf50370b31b4ba9e467bae4c222"],["/post/61738.html","52863d96613ba3531013fb44f29a3b09"],["/post/61809.html","398b64a38f8f169e1d6996d9caf13793"],["/post/61eaf19a.html","41cd9203745ad02f5877fba790abd436"],["/post/63002.html","213c201618739c6c4cf5d9b8e9bb66f9"],["/post/63711.html","290847a846f4e7c175b8f3fde50d18f6"],["/post/6587.html","e179115ba6f6e4aa7ca059a8ba41c2f8"],["/post/6589.html","220b0c9a3bf80a8749e386c029ded225"],["/post/67454659.html","38ff618c8c341b28d6ee8647a126ae27"],["/post/6880.html","2f3e0baa11870aac213309f012f3ed60"],["/post/70263071.html","d7ef45b7592918b6fa1e60dc021e689f"],["/post/71038564.html","1746e68bf6027f4b9550fb1c68250414"],["/post/7119.html","fd3e829e567a91d86ada0dbe8cae4da0"],["/post/74e7fdff.html","5d641b5f06cd89db82a42bfd9f81106a"],["/post/7502.html","db12f3dfb67e9ac53ecadc129773b998"],["/post/7564.html","069f4ba7b33c63931ba3efae7b3e605d"],["/post/766f9b60.html","196d132989d5ee23ae5282649331e710"],["/post/7ca31f7.html","95ee0e254973e1ce5a322dcce67add19"],["/post/7d1c86da.html","d97be1ebeb230dda4520a822c4468c57"],["/post/7f3bcd7f.html","141cae663d752921803f0e6a36677ae1"],["/post/8039.html","671faef5224af26627b24b72fa634264"],["/post/8050.html","c9323019f06d5cda78faf44dc4429a29"],["/post/8072.html","90610ca380ab784e53e8ca4dd0665759"],["/post/8274.html","d8b805c5fdf948a1607ed4956f9e1842"],["/post/8372.html","7b5272ca8ce2cfd8e1dafeb19cbdffaf"],["/post/8498.html","1a3e472cd062a10331b3ca23990ca790"],["/post/85b4e13b.html","35618e77795d7ec2a129c9e5e552958e"],["/post/912b2566.html","f661488de515b02d0bb8f8ea222c0329"],["/post/9187.html","8e596f4bbd15a7f8bc78c93fa3d40d62"],["/post/9197.html","a99087f12cfb99be8b5342b7d9a4a383"],["/post/94ceb2fd.html","3e27b06addd434d778973e77ba600a19"],["/post/95495db.html","08c7c63985d0aac3c55687e673e73728"],["/post/97246020.html","6cf67c6b1e316e9999135db3be09852b"],["/post/9954ba8e.html","46d7975edddb0ca7ec0058ff19d41868"],["/post/9d855db5.html","7f09b0050218886da3b875992240906b"],["/post/a3a786d6.html","c52bfa25d525ff5b5b37777222700680"],["/post/a444b428.html","c7f426554e7d71fbf071ff49d1338a21"],["/post/a50b8908.html","c5998605ead02d3ba551f8b75d771c38"],["/post/aa1eade8.html","a1d2d2c3890a8fb232ea6b77f649fb18"],["/post/ade8c6d6.html","802d5f1ca575c4e3a27c36786fcad9f0"],["/post/ae8362df.html","2b1376b4cb8b6bbe35c20a2646005be2"],["/post/af3eed3c.html","1f288161b44dc6dcab7a0c091835b6c8"],["/post/b4c1d206.html","ccf3f3b34cd8c24eb52588108e4dc7b2"],["/post/c82a1c99.html","e1fd529e4c63c5fa541ad16c88be1fa9"],["/post/d213fc7f.html","e7ea9f7367b5091a952c78b1a2d64c0c"],["/post/d431fab4.html","f1d8e1c3db999e9c81ddbdec29c0bc58"],["/post/d5381517.html","b47baf2bc3103b40550f39a69987a862"],["/post/d94f88de.html","6b797bfa6549dd81c371de67f077725c"],["/post/e058ffd8.html","a9894875959b308d5a6b9bf577ac7a14"],["/post/e0f8cb74.html","540e041b09a64eff888665ec51364d9e"],["/post/eefe591f.html","740818809abcdb31b90f4116d175b647"],["/post/ef296a07.html","da8922fa95bd51ab4ed2f97441313a60"],["/post/ef3a3fcc.html","cfd3431c69dee4c86f353fd32680680a"],["/post/f201f9fd.html","936f5502cace4f356d288c0a39ec97b3"],["/post/f79e4123.html","9222bb4dcceaf89d05f19ed189be0e84"],["/post/f8648a1d.html","c68095d19088ce23e7fa48ee4f7c6378"],["/post/f89cb603.html","4f02009e26bfcf30658a306bdff5a26a"],["/post/fa288682.html","19b5fce9817c1ada79e523100dd51c91"],["/post/fb98053e.html","f71bc1c14b0dc4f08b3fb46f63ee7134"],["/sw-register.js","2bbfb34ce1b26f413b593dbe0dc264b4"],["/tags/AT-T/index.html","fe5870b59eb6cba1c63a600ada3d9f57"],["/tags/index.html","d48372f801464a91a9f8e477fc5f51a7"],["/tags/动态规划/index.html","e982fc55a1e049b73e1012e583abd3d4"],["/tags/字符串/index.html","549a43e09ea1fba68cd3863eb9b151dd"],["/tags/字符常量/index.html","c22d702a31898eced9fc6c9c9227044b"],["/tags/快排/index.html","bd53874fb92b07c68c42c301701f3aa4"],["/tags/排序/index.html","7d1dfda981337c92da92c87934984d5e"]];
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
