/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","11aea74cddfd2e923b9008f4e57fb6ca"],["/archives/2019/index.html","a7db95d2bcd494c3c238ff12c3b62d32"],["/archives/2020/01/index.html","ab03721eac6be7b31d92c3f00e26ae6c"],["/archives/2020/01/page/2/index.html","c8b4624b34f35afbd5a94ddc1b067cfd"],["/archives/2020/01/page/3/index.html","b836b7f9f029922da1a98511148efa42"],["/archives/2020/01/page/4/index.html","250b23a6dfb9d8d39d8e0214e8ed7ac9"],["/archives/2020/01/page/5/index.html","336951dafb5b3de84e3a5effacf61546"],["/archives/2020/01/page/6/index.html","b75058d0dfacaaf9e1551efd33e73cf9"],["/archives/2020/02/index.html","a06b312283476bb52cdb5861a4179b6e"],["/archives/2020/02/page/2/index.html","cae2f6527b5164f57324299d70ef507e"],["/archives/2020/02/page/3/index.html","a4e99d844767024bc1edf03b52b8f450"],["/archives/2020/03/index.html","c7830ad5684c807bdcb162e116bf7ee8"],["/archives/2020/03/page/2/index.html","d795469a5da8217bcbb33f5d6dd91e1f"],["/archives/2020/04/index.html","246205f339cfc69d3bb352f484590190"],["/archives/2020/04/page/2/index.html","a8c662617ef797d1798ea14e53b6c72b"],["/archives/2020/05/index.html","e181503f90e62307813f4077d0cffdff"],["/archives/2020/05/page/2/index.html","1c67fc757ce910f28eb30a0c118e999e"],["/archives/2020/06/index.html","5ffc241b83c0f9970856d738ad8a6c18"],["/archives/2020/07/index.html","2cc6f3e64db82e4e693a926790dd8157"],["/archives/2020/07/page/2/index.html","a212722428140e31568388638ac70ad3"],["/archives/2020/08/index.html","fddd01f190a0750b4f88b1eec2a937b0"],["/archives/2020/10/index.html","63e123162db6de214bd1eb066947d60b"],["/archives/2020/11/index.html","cd9dc2cc3c7b8a8d439f4338e22dacbc"],["/archives/2020/index.html","2502e95f9dacad7b74926856539419dc"],["/archives/2020/page/10/index.html","1614d4bd7412738ab8f6971534fb49be"],["/archives/2020/page/11/index.html","e20d116fa6c550df2c3d2d2bdbe0f6e1"],["/archives/2020/page/12/index.html","29504a69d985909eece420f5a37c339b"],["/archives/2020/page/13/index.html","0e8cb0edcbf80323092423eeba2428f4"],["/archives/2020/page/14/index.html","5c9cd1dd25940cfb56a62a7f237ca4d0"],["/archives/2020/page/15/index.html","7e092c2b5cbbdc998dcda7fa8b0a6940"],["/archives/2020/page/2/index.html","87e60bd0615b20aecfc579d5506fe720"],["/archives/2020/page/3/index.html","1fef8aa1963ddf7103b5971c1302557c"],["/archives/2020/page/4/index.html","7d2f27184b143a00a2e18e86d0b38113"],["/archives/2020/page/5/index.html","072d4adff20b950417afbd5bb2b2609c"],["/archives/2020/page/6/index.html","3645231554b37064ba147db87cf93ca1"],["/archives/2020/page/7/index.html","6f8722e5b2c87c372c7e93d4af695f15"],["/archives/2020/page/8/index.html","c4e89c61ba82ecdb747c1dc75035cb81"],["/archives/2020/page/9/index.html","056428c7854bff0cd5fd4e3623727e26"],["/archives/index.html","9254970a04a58daadd2fcc0e0ea9db3f"],["/archives/page/10/index.html","9035c99a737d70b2acc35bdcaad9da8a"],["/archives/page/11/index.html","bea189105c6072d8936c1ea9d4814610"],["/archives/page/12/index.html","ad1f8e5888a8f3826f719f8d423cd1ef"],["/archives/page/13/index.html","420ac71fe2a250d08351dcf3d0b5c0bb"],["/archives/page/14/index.html","9eab53e206ad67dddd9fda2d5715f969"],["/archives/page/15/index.html","9210f90f21d803932de1b1a6ad10d9ae"],["/archives/page/16/index.html","af7989439c830d7890e870a352aa00fc"],["/archives/page/2/index.html","375521611f2b8f609679bfa9e906b70f"],["/archives/page/3/index.html","eeba77e7155982a5c0fef1087c2a7b15"],["/archives/page/4/index.html","4d2cc52869241eea219097a2fcaa31b6"],["/archives/page/5/index.html","ec5539c666dbed5b743946757c8cee64"],["/archives/page/6/index.html","00bd619a8b8356fa30fe406cab3a7c5f"],["/archives/page/7/index.html","5d283e7925a568d9f6d122be2a35c1ec"],["/archives/page/8/index.html","8e098161d2912b4dbdcf73175cdf47e7"],["/archives/page/9/index.html","1b27b5336994c85872760cc95d539fce"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","49f3c503c8dba5d27cf586759faa7171"],["/categories/Linux/page/2/index.html","009c0d2d89563dbb660f6d8cd39b9bf6"],["/categories/Python/index.html","d3d5d800494d354e68506c1a2662f640"],["/categories/c/index.html","5c3fa03fa7d1869a8dc35137eb9c5b99"],["/categories/index.html","0bc852dc76c628749b55c4909cfef2ad"],["/categories/java/index.html","f10501e9e2baff5b04f03402d6451342"],["/categories/java/page/2/index.html","6cf774cc097c876f2aa251cda6e63850"],["/categories/java/page/3/index.html","1679898a09fa8ae58ed12db4cd1f82ec"],["/categories/next/index.html","364848cf61fb9fa8b49bae23ab4e0367"],["/categories/stl/index.html","7f89d3773e3f9e9274c5eca504de658f"],["/categories/windows/index.html","d07f75fd4d63487f9b73fe64829a0c44"],["/categories/基础/c/index.html","63b69935ef625e698d55d93e6fb92eee"],["/categories/基础/index.html","e04fd5ac106bc628d2102b07b699d5f8"],["/categories/基础/page/2/index.html","b2ae895d979f277e37b3c840e00fe412"],["/categories/数学/index.html","743bd5dd5438ddd6ea21559f0fc5e82d"],["/categories/数学/概率论/index.html","8835e3ddf341b2856b16cffa1e9f4492"],["/categories/数据结构/index.html","3fc1b191c7d5edf1641f8ce14d7b35fa"],["/categories/数据结构/算法/index.html","b74e716cb0297481778287f679e65eb6"],["/categories/机器学习/index.html","8457daed99c2c03c7f58d05914519483"],["/categories/汇编/AT-T/index.html","72341f7a7c0c8d5c4e47a9b063c3a525"],["/categories/汇编/index.html","6075e4e986dc913fd8dc90ae1b81bf72"],["/categories/汇编/page/2/index.html","8e409a909b4c6c54815dc3a0abf1ce86"],["/categories/汇编/page/3/index.html","81f131901f2ed8279d5a4d944b3a8acc"],["/categories/算法/index.html","40379378cdb0d499057eb27f100065a2"],["/categories/算法/page/2/index.html","c1dacf585ee41e482f8496f741c31da3"],["/categories/计算机系统基础/index.html","a3e4870b9f7bcad63bec7c367476dcfa"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4e60a04b3a12e874a9803e30508d9760"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","7e05475dc65acaa9d10fa1e2b4896308"],["/page/11/index.html","1bb506062eaecaac0a05cac192cd75a4"],["/page/12/index.html","59c34ec95793033821521dcc1afd53c7"],["/page/13/index.html","0ac83c9c1ef8208db14d1ddf7badb580"],["/page/14/index.html","de1e84d9795ca27ef49853f2e9ea145d"],["/page/15/index.html","3cda0a15a24179503563d9a1b746843c"],["/page/16/index.html","0b87db5a15713cf07aab9296f87e6090"],["/page/2/index.html","196d78293d8b180dc65d820ec9320a01"],["/page/3/index.html","1b14d3bbfd8990251190b9f367c2f8bc"],["/page/4/index.html","94e2bc57ff0769865ab5e922eccdc3b6"],["/page/5/index.html","9158375a64af8399515b00932d0df51b"],["/page/6/index.html","40c058a4af5c522f42134c0495336e71"],["/page/7/index.html","9457b2eb87c352135e848ff2a6663cf9"],["/page/8/index.html","e8c7ed178a2ae85a8ebef2a793a6c75e"],["/page/9/index.html","867615a5f2295b0b7ae8a65add0b4011"],["/post/10919.html","6979341816fc3dc9dd7f936a1c7a14cf"],["/post/11051.html","c73930f56a57be51c0db19fb89ca34ca"],["/post/11306.html","c6d5908c666fab0d0ebe6aa9761d3179"],["/post/11491.html","f373f88893f800ddf169c81484283e28"],["/post/11799.html","293cdffee785826c88058ff21d7af782"],["/post/12334.html","42b11f5b5d4419e9de2dc0791847d9fb"],["/post/1326.html","9244265d9d564de6c7af963fba41789d"],["/post/14379.html","c73f48979048de9e91ed6f656b4b1859"],["/post/14511.html","5ddf6f973959e3bf66e1d620698e136b"],["/post/15201.html","68209acb46da6b85a54bf21eef54a91d"],["/post/15425.html","69276b55384a6eb281d821583f47acd6"],["/post/16107.html","e85755bed020f86d122332ccb5d1a777"],["/post/17862176.html","3336cec01de1b957ff23026b6b72f5f5"],["/post/18431.html","2dcca665d5a0f806a5702382e9181ca8"],["/post/18912.html","599a3dc4f49e026e4a5540a7f1957911"],["/post/20198.html","16bb05e888a51297d8fbae004486dea4"],["/post/20ff5ccb.html","05b4d6d263506f0d27ce88f55599e2e2"],["/post/21624.html","34f2e97b70324a719a76b82a4a407071"],["/post/2170659a.html","8d84e3dcc7b604684ad74b890aa3cede"],["/post/22102.html","96e2dba46cecb27e8de8f3dfb02ef249"],["/post/22493.html","5ef702a1f98a479b6add3bac94c369e3"],["/post/235252ea.html","0a76b95e7f69752ea238e79f41c33e29"],["/post/25699.html","91bfc5fbede2358fb0c66a23e3bc5039"],["/post/2647.html","b92fc28b6e19f63b1a02767af4918d65"],["/post/26477.html","3860084066eef2968b61e9f3532431fd"],["/post/26671.html","1ff2542024164fc590a9da3d142fc3f4"],["/post/26737.html","6de26cc982249f94669446370e424dd4"],["/post/27045.html","e328cd26f53501ddaf9a38a0c95ed976"],["/post/27621.html","86a89d341188bdb42d7d706ecc5f1823"],["/post/27890.html","5c86b17133d56d3f94510f6a70b5bd12"],["/post/27980.html","54920c346b218d96c8bb2f1e73c30862"],["/post/280b588e.html","7d9845d6107a76af052e6f25afc48e62"],["/post/28579.html","9de4e610308149cdc4124b797b34ccbf"],["/post/28877bf.html","5efcaba6fc903a8799cab5f421e2aea0"],["/post/28954.html","18d28dd3ec5e6598c85ba8efbe994264"],["/post/29378.html","5551bd9e7424740a7a523edf59915edd"],["/post/29949.html","0e74e4404356f0c97c64e2f524cc0d35"],["/post/2ae43b86.html","b50c9fe6bc4f45aa81a64eac305b9825"],["/post/2ba82a45.html","460fdcb1f8275fe080329fabe3328ce7"],["/post/30072.html","9bd3e78c0454791c9316fdf832743fa8"],["/post/30479.html","4ffe43388b8575212038c2035c480afe"],["/post/31a6b40.html","e59a601a2da5c49783bc2cc2a8a02745"],["/post/325cdbf2.html","7c38ec0ecb67364eb58157345c4d7936"],["/post/3319ed9a.html","c1678d8fbc110f8c514a8e69dbb6bcd0"],["/post/3320.html","da9845b207cc88a8c5d9c6a32d442336"],["/post/33cb1151.html","a6b3160862d3394687640051ba958d2d"],["/post/348d4e04.html","bf0749e798bdd1933ca85091422accf4"],["/post/3526.html","f3fc75d709688dec3d6924d8f115091e"],["/post/35532.html","47184168794b8f840daea2149ec93a16"],["/post/35848.html","e806498d06f27167c6d4685216f22003"],["/post/37318.html","79fb57945dc36e5fb1cd63c37104afee"],["/post/37663.html","a0904da5ed306a3793bd66b185cd93df"],["/post/38035.html","d16a854c0eb73c415d5596ab2ebd62e8"],["/post/38072.html","8f1238a7d6801b5e35059b8b35674199"],["/post/38145.html","f8aa141aa19fd7a5bee40bb47556dcff"],["/post/39968.html","24f5ef14a91b2594a17151181db6fa0f"],["/post/3de4bc69.html","bb0cdf71380cf020fcd812a1926c807a"],["/post/40583.html","0a4a2943f34c5382bef5b8d601be0c42"],["/post/40997091.html","a88db67a0e2b6200d0d2efbe3a4270cb"],["/post/41129.html","13d40765a487b9da63684cb345a52b9a"],["/post/41763.html","c8dd07b62e754b40b60bcbd726f434bd"],["/post/41829.html","75dd76663210fc90c84d24394254608b"],["/post/41840.html","5b7e1f642136bf236dddeeb52a75d109"],["/post/43817.html","889c4c70917c60f57281a21968a698c1"],["/post/43878.html","8abdfaf17c3461f38572dea9caef7da5"],["/post/44250.html","e1368b9067fc2c3c1e6f451be5bcf3c6"],["/post/44336.html","ed20dbefe4e4a7df4cfed9d5ef833e76"],["/post/44454.html","479a2c51ec4a7a785e49accdb309c487"],["/post/44487.html","d92abb2999e43a390decf108b0b2ae31"],["/post/44914.html","3294d11ca8b61c5c7184fcaff65e18e2"],["/post/4551c130.html","3f936aae4459e2ca39f5d98e4b4f5fa5"],["/post/455a4c92.html","e09c0128d06a1ffe88bc162805c2f9e5"],["/post/46466.html","4e06287d7ee97f96b75f42e7e850e0f7"],["/post/46925.html","6f28f4d45b8e937b387f1e54df4b8a8f"],["/post/47075.html","02a060937904b8f740fae8a2409f4bc1"],["/post/48220.html","111f5babe8b8b4e0a79b9ae50c301140"],["/post/4b1879e3.html","31e77ae88ff2317f74806bb864fdf2ed"],["/post/4c720881.html","a9ad098725be8886799c2142ec94b948"],["/post/50daec4.html","f160dfcd8b2e86fedf434a5f386b92de"],["/post/51491.html","292568f80f02c63747f8e71c77b6b6b4"],["/post/52078.html","f81fcdc37326e7dd1104f13fe55f263b"],["/post/53677394.html","857e3f94b3a0a5409c9128f5dc7396a5"],["/post/54300.html","89663d230723d45dfe26ef54f460182a"],["/post/54612.html","bcb95b4362235fb6d07ee32ea7b9375f"],["/post/54613.html","bb982b8398cc7ba1ddb69adf73ff25bf"],["/post/54708.html","773ff3b91cba2d041bd4a4843cc45442"],["/post/54778.html","65788b33e1b621af359df7176d94aeb1"],["/post/5490.html","741ccb3239298489a952089d0ef85af7"],["/post/55046.html","81ff3bbbbd6546ccf8b6f1e02eada82f"],["/post/56929.html","3797de65fa7b115745ad18864281fa92"],["/post/57339.html","3c4101b86b1844491709a28d30de3fe0"],["/post/57449.html","c59711232267187621c766eaa94295c2"],["/post/57453.html","ded5809fc6c1fd7688c5bfa6846d96fb"],["/post/57671.html","8296b6f4466990f16a482986d44848fe"],["/post/58313.html","06c9799796568c6c243477e3ead7df08"],["/post/58481.html","eff29f04e8368c7ad7ad7b52a42d4540"],["/post/58986.html","6acbb19c9c6b1ed8b7da177f0d5b1eb1"],["/post/59431.html","3dadc2188b38d3ecede58277aa3262d6"],["/post/5951da65.html","d1d9fe0cd4c73b6f91f59e8bba9cab7c"],["/post/5be7e977.html","d58c3cc163d44528bb253a433be4bf23"],["/post/5f9e4eff.html","cb9758c74e6a2ed03ac02be238616927"],["/post/604b49d0.html","31f9835089bbf13448f3064bd431de37"],["/post/61312.html","57d35ded46127294de6e12905c46f315"],["/post/61738.html","967f42b470d0f39a0cebbb44879f68a8"],["/post/61809.html","0c4b725e1164dc89af28a385b9e5e312"],["/post/61eaf19a.html","370c7947f5751b3894de7a9ac149e4cd"],["/post/63002.html","0a90df17179200d978469cbaab051bfa"],["/post/63711.html","329d290af7a68505e0d17daafc3227b0"],["/post/6587.html","0f5293b376ae2515573e14c219017906"],["/post/6589.html","1c9b4135a69065f7eb554673a5c4b3b2"],["/post/6880.html","f05232c3fa4f0df523062d44a3e2e03a"],["/post/70263071.html","ccea7bfec9ff77fc20f2ad283224df0e"],["/post/71038564.html","27e8590d9047dd0354d238b0769249a3"],["/post/7119.html","430a949b0c1f88bc53d416a56f675a36"],["/post/74e7fdff.html","0e6b36b676e6241474544a289f84be37"],["/post/7502.html","025c5ec4330b84f3cb3b2a9d05eafdce"],["/post/7564.html","532b2d48f5c9fe2e8c01214d74c999dd"],["/post/766f9b60.html","f42222f7e8ef77c5d2df47ce56ca20bd"],["/post/7ca31f7.html","64baeaaa79b5695f77bd40f63c0d2fe9"],["/post/7d1c86da.html","33eab7bd2c0af27e31e7e9988cafb02a"],["/post/7f3bcd7f.html","ee7576d917bf884a92fb56b7ee5b3880"],["/post/8039.html","14bca61535100253f6f1ec02fdfe3d68"],["/post/8050.html","c37c0f6cbf2698477fbbf0f2b63dc479"],["/post/8072.html","63567bd23a6980e233a312ca8b090611"],["/post/8274.html","647f52228d68c3144bccbc11bcaba0ee"],["/post/8372.html","bda8628edfa52fc13d057d038cb898f4"],["/post/8498.html","12fbaa3406ee54a968b3726c619e016a"],["/post/85b4e13b.html","2790990a1d19e749824bf8c6fc882421"],["/post/912b2566.html","700c1e2e7a3efb79d0adff07857d9f3e"],["/post/9187.html","22485ba54a24cd256d8ce877bf574475"],["/post/9197.html","e8c8e658fe6e679509f2a3b95a95fa55"],["/post/94ceb2fd.html","99f76fcf0f7a29cdcc72f1c2dd162a4b"],["/post/95495db.html","e332d187da9c05fd089e8def61db6472"],["/post/97246020.html","5ec227968106abb2b46a1a25d8a0818e"],["/post/a3a786d6.html","54f732a2bb56297cadbcbd83b26d9f75"],["/post/a444b428.html","1177c37304531abfebfd7cd61b6ba8b8"],["/post/a50b8908.html","bd977fbc8789b430d88e45f0de7a73e3"],["/post/aa1eade8.html","09f08fa9a42b72b426118a036718571d"],["/post/ade8c6d6.html","cac554e6c8307251aa2b457ef51760ce"],["/post/ae8362df.html","20116e0000d92285b72aef4412dbd343"],["/post/b4c1d206.html","fcbba51a7e6571ece93a2f8ef6323965"],["/post/d431fab4.html","e1b74d20131b33481a9a39cb1d653156"],["/post/d5381517.html","b3835c331b4f938f14a01ed295e742e1"],["/post/e058ffd8.html","40ea378172b7e48bf25c5863ca2263de"],["/post/e0f8cb74.html","a0ced5a15e4916d70798b9eb5c2c2513"],["/post/eefe591f.html","be9527cbb0dfb4058b81b06690114efe"],["/post/ef296a07.html","ddc59e386d0313d87355074f0d905a87"],["/post/f201f9fd.html","06b104d9dc337968980d0ebdc166411e"],["/post/f79e4123.html","4d41fabe81e3218ac5ddb9c03843e480"],["/post/f8648a1d.html","0a0b4b1d215dc45a39a854babebbf1b3"],["/post/f89cb603.html","fcf05394e134ac60e7f163b093e75354"],["/post/fa288682.html","a7d69c51b58683d6e9c4610946297328"],["/sw-register.js","8c869d25728446672537e14666fa0cfd"],["/tags/AT-T/index.html","47f9b9a26dda86ae9d2b9bf203805aad"],["/tags/index.html","6613c64ded15b89ff03f1bcdac87ffce"],["/tags/动态规划/index.html","62bd06c1c116ceb7a0f1eafbc912d753"],["/tags/字符串/index.html","f96a749e143c1064aeb7d3107bd2cc7b"],["/tags/字符常量/index.html","4e4f1ae093ed61e1b65c3756b593cfab"],["/tags/快排/index.html","0d6c0e1432ab5367dcb90cb9a1a850e9"],["/tags/排序/index.html","175d7f5351ab4d32756eb8f31c2f45b9"]];
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









/* eslint-enable */
