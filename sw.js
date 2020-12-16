/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","45720af8613edd9643c78c20f87acb12"],["/archives/2019/index.html","8068f74c5e3d9003ea2177417f3aa1de"],["/archives/2020/01/index.html","0a0121a4f57e30fb94539e0c6ffdaafa"],["/archives/2020/01/page/2/index.html","569a2be2111b78c1b046095275ea3728"],["/archives/2020/01/page/3/index.html","4f50c9d080108ec18d006fa14f004b4e"],["/archives/2020/01/page/4/index.html","a3c2f5df8aec6571383c2c9e5a89edf9"],["/archives/2020/01/page/5/index.html","b3b74c37878961795e41108b5f790e13"],["/archives/2020/01/page/6/index.html","a80bdefcf95fc260245386a88807c0b0"],["/archives/2020/02/index.html","2727f258c548fb724ddd6a95c28d8772"],["/archives/2020/02/page/2/index.html","8bd969147d84e67b6ac922ea7e537b3a"],["/archives/2020/02/page/3/index.html","5e66f9092b741a35ea871e68292ddb7e"],["/archives/2020/03/index.html","b84c692b6660f6a04aa67f3d7c0e014f"],["/archives/2020/03/page/2/index.html","4dc72bbcba1d4896d254b1f2520d4508"],["/archives/2020/04/index.html","389070fba9be50ff9b3e854089a9b997"],["/archives/2020/04/page/2/index.html","ffcc772b1f3f4c61833f1c628fcbc866"],["/archives/2020/05/index.html","b0eff8f2446782efdd7ba1d5de6dbe4c"],["/archives/2020/05/page/2/index.html","626a6db502fa272bad4c5e9afd133330"],["/archives/2020/06/index.html","87b5311966f6cbe61fed91d93925bdc1"],["/archives/2020/07/index.html","9d1d4938bc38aeb0e78dd25528c6c82d"],["/archives/2020/07/page/2/index.html","1fe113529300ecf7a430a0be2379ed23"],["/archives/2020/08/index.html","818473fff707128f4dd18c7d9525cf50"],["/archives/2020/10/index.html","4252a8fbbb4927420ef44296ae32309a"],["/archives/2020/11/index.html","3db719617be2e355bb7e4ef4828b9b7e"],["/archives/2020/12/index.html","e73bcf88129a157265b8bd9391093678"],["/archives/2020/index.html","48622b0a0dfe3a70872f4faecaf6a73d"],["/archives/2020/page/10/index.html","9e03b742d95d42dff474a3c5089f4140"],["/archives/2020/page/11/index.html","61409e4a0f140f0bab179562e724cc86"],["/archives/2020/page/12/index.html","8a47d315e092ee54fa5cea88c28d9aaa"],["/archives/2020/page/13/index.html","30c5c042d94257daeeefc58d58443295"],["/archives/2020/page/14/index.html","ae0a5329bc81b285d17aa40a379ca66e"],["/archives/2020/page/15/index.html","14e91d73247fe3582e3aaf0b869da2f6"],["/archives/2020/page/16/index.html","9c5ad856ed730a9dae7a91602acc174a"],["/archives/2020/page/2/index.html","265d9f750f25b7639f3a37da6d46363e"],["/archives/2020/page/3/index.html","846108e50791df38f5aeff4c6fd278ba"],["/archives/2020/page/4/index.html","eff7e00bd1c8f58249b37697e475a8c9"],["/archives/2020/page/5/index.html","a7baf96309dd3726621f6a3ca301ec95"],["/archives/2020/page/6/index.html","1021c4e1bfffbd53e627a27497a021ee"],["/archives/2020/page/7/index.html","7991fa9293191cec67b0bfa61b7790a3"],["/archives/2020/page/8/index.html","e3927f2e40b0a50dcbadfcdf6124f927"],["/archives/2020/page/9/index.html","f1cae43739605b0bd8eabc253e34c631"],["/archives/index.html","e678121ca1e6fe3b13af5c1744dddadb"],["/archives/page/10/index.html","303b8d3599b711ad4feae6f6c2d4174d"],["/archives/page/11/index.html","693ed34fb088003b267cf32f12c0c379"],["/archives/page/12/index.html","3ca70e2b1d11b53b793ad0e63bde3f6c"],["/archives/page/13/index.html","a99f37e47a2fbb296b7a54a2ccf93322"],["/archives/page/14/index.html","e558f5f7e438d19c1a6a5b39d9af0587"],["/archives/page/15/index.html","cf0eb90137f236a748686009cf91cd72"],["/archives/page/16/index.html","b8351b8a9ea217da12169dcac1bf2aa0"],["/archives/page/2/index.html","1cc84c0311bd9d409447e6704df64bdf"],["/archives/page/3/index.html","d8f5c85757de8a68ac56894ec1acf51a"],["/archives/page/4/index.html","1b98cfce3046d7fabe58973dc0ca086e"],["/archives/page/5/index.html","25d0b379f798c36bb4ed5b0d7627b761"],["/archives/page/6/index.html","46c88a96db29c04bdb9b29021a7975e1"],["/archives/page/7/index.html","e1334089548c312026413ca2b0806194"],["/archives/page/8/index.html","9fb9cd01de674dd6f4cd334a9a5edb66"],["/archives/page/9/index.html","62950cbdeb18f2c6567321c64b123725"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","0756106e74ea367a2d538920faa57417"],["/categories/Linux/page/2/index.html","31e591cebe106487e7919ee8a5a2cea5"],["/categories/Python/index.html","7bb104c00c2e29114c9c42d1fa2af5a2"],["/categories/c/index.html","ea3bc297a1618d6c8314fabc3d7664d9"],["/categories/index.html","9572472a70328541d01f07437790500e"],["/categories/java/index.html","06e110aa6a601096e148fffa4c749a4b"],["/categories/java/page/2/index.html","49ba5f80759a5f6f910ccdaa886e27b3"],["/categories/java/page/3/index.html","4047aa2a5a02ce2d6b0279ccb5d69f69"],["/categories/next/index.html","8a5fd01a663d790c2f03584cc381129c"],["/categories/stl/index.html","3ef5d6c377f0293bec1037cfb53311a4"],["/categories/windows/index.html","70d79e1307c0a308bc776d2e085ff2e1"],["/categories/基础/c/index.html","b9bb642fc4cc44701f60ba41227d948e"],["/categories/基础/index.html","1d7121d4ec2ec29931837c6ebe5a9730"],["/categories/基础/page/2/index.html","c32f25fd5d3186bc928d79ebb966ac53"],["/categories/数学/index.html","a40a9dffe95a06a33394f6c1e206a059"],["/categories/数学/概率论/index.html","0275b4ec0ba13cc868e5287b7894cac5"],["/categories/数据结构/index.html","ed76d1122050a51669aaa1727424e0e9"],["/categories/数据结构/算法/index.html","d3aa9174cdb71964d8fe70af5b5e5ee8"],["/categories/机器学习/index.html","f3a13430eda1dadbec26ecff81bfb622"],["/categories/杂项/index.html","4b69e34959742fad44f6cb9000bbb091"],["/categories/汇编/AT-T/index.html","fd74cf12f94d24c81b82e24170e6f997"],["/categories/汇编/index.html","405d18f361efb54c1273950683be2344"],["/categories/汇编/page/2/index.html","6a9d7c478a091981d6e7c27568b9dccc"],["/categories/汇编/page/3/index.html","7a0a85e3a62e1cce8880453e90daa42c"],["/categories/算法/index.html","887b68c8c8a90d49ae3252f7e15238da"],["/categories/算法/page/2/index.html","80c403a22ed2ea79515d7c7fcd62f3c8"],["/categories/算法/page/3/index.html","b88600046e8e61befc89f797ff8cfaca"],["/categories/计算机系统基础/index.html","79815ebfa5551db556988b730af58178"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c52f79c9fbc68d1c369723b63f88046f"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","e20db43079630766d7b751749a2e6abf"],["/page/11/index.html","c17cfc21d6ff54a2cca448de60f01b12"],["/page/12/index.html","39dcdbb3059eeb04bcfa952d687a911d"],["/page/13/index.html","646af5a71668a297b04206c40d65eec5"],["/page/14/index.html","d9b578790f5078d2e8caa9111fb0e634"],["/page/15/index.html","0eae1768e22135b80787849ca983711b"],["/page/16/index.html","cf909188796fdfe1a00e4f78e4efbe7c"],["/page/2/index.html","6896cf216bde2d26db44acf558e06d56"],["/page/3/index.html","1142232fca97713d564973e0b22828fb"],["/page/4/index.html","78e4b37434715421187183629c3cc4b5"],["/page/5/index.html","599736be05f1932c627e3cddd64ad09d"],["/page/6/index.html","bd46cdf601538471ab2bfdad4f03b267"],["/page/7/index.html","af98600f6b54a4c1b2775c00fa01406b"],["/page/8/index.html","36f0b9ccc42e8c0c9ca2cdae286440df"],["/page/9/index.html","ebf2ed883a798f1c4f41c0ef79799354"],["/post/10919.html","6fe0712908dbf0d2ccdaf14d1eefdb44"],["/post/11051.html","ce469fa73815f89ead325ee7d17f626d"],["/post/11306.html","b5ed22ba0da7ce86fd49c26004d3552e"],["/post/11491.html","85e828686e1aaaa35b819a75d94a39e1"],["/post/11799.html","4b058036ea098e6eaec14574132b0388"],["/post/12334.html","8222ecc9aa172c749203fd7b6fc97d85"],["/post/1326.html","03c27d4bd20ab3aa80ec58169de49053"],["/post/14379.html","c8d4c8ad779350817b61634a5d002c09"],["/post/14511.html","dd60fa7fe7440715d1aa25d3df060fac"],["/post/15201.html","17d85798b1b005783e61f1989a9ee26f"],["/post/15425.html","d686376c4430c1608746d619845e8e26"],["/post/16107.html","0eab2c97470f31c28d7444794b99b1b7"],["/post/17862176.html","9f48d6b503f987eb01a46122a3f89759"],["/post/18431.html","67523617d597010e147062bcc36f0010"],["/post/18912.html","8c1682e24181acae5e6a3c03106ab57f"],["/post/1b9c8662.html","12f4b742b63f77209cd0f9b4b696435a"],["/post/20198.html","7383360a173f9d7d8af6e40efa637308"],["/post/20ff5ccb.html","a6fa7cdd2ca4f2d6333d54f9dcec5e48"],["/post/21624.html","8a821313682456bb5f0a56c60931b051"],["/post/2170659a.html","4827e1fd5746e5ec3c2902475bfc8441"],["/post/22102.html","45b6302e4fa8e691e37df1b3cc6ffb70"],["/post/22493.html","1948f7110a2df19b9f3dd87f728235e7"],["/post/235252ea.html","18946d794f33c6c434679a7c70397646"],["/post/25699.html","67f08418cfff675ca6e323b18dcb1921"],["/post/2647.html","2b89709ebef4d92e9fefe71f55fbf16e"],["/post/26477.html","901ff34787a555c9f5ecbd19428e40d5"],["/post/26671.html","158f80548eab7cb31db263c978af27b7"],["/post/26737.html","f5b4b4a1f634b349df38cf62a6d8fed5"],["/post/27045.html","227773809c2c51efb013845d856bc595"],["/post/27621.html","8213533d66fc48cb2c4639d0cc6f286c"],["/post/27890.html","11acc67eb8d2fd96962bd87c73168321"],["/post/27980.html","3fe692e62c7f9d052368aaff128461c2"],["/post/280b588e.html","16a2c0b8a8712f54377c3387651a75c7"],["/post/28579.html","69f4eb54c81a823a15198d227f29b5df"],["/post/28877bf.html","f585a421742d75ffe5fca1838cb0d105"],["/post/28954.html","3056cad3ff5ca919307644f637609e78"],["/post/29378.html","4297fe9d0f579841a986ad9a6486c226"],["/post/29949.html","bbc20dd5eddf9e25857ae3902db50615"],["/post/2ae43b86.html","c00cb733b636d29a4a23d81baf6bc963"],["/post/2ba82a45.html","4921c51a235b7c1555fa5469fbacdc8e"],["/post/30072.html","c588e37cddc6f10729f67ddc2560b151"],["/post/30479.html","96384c945eda794e83fd890ffe0b77c7"],["/post/31a6b40.html","0b45365603810749f78b98941b9bc029"],["/post/325cdbf2.html","f3ddd64ba64921ea952985c14d1d2d8b"],["/post/3319ed9a.html","4c85a3f52e30a657709feafcc7bed380"],["/post/3320.html","e9e54600f35831e44db98e67ed8eeb9d"],["/post/33cb1151.html","c10a6933bc241aaf9056a7e361ea14dc"],["/post/34811d5f.html","932566c27e4f9d74bcaf503cc825bc57"],["/post/348d4e04.html","8c9aa0df17c887b915854371fc70cc35"],["/post/3526.html","d920dd4e46c4cbd83809d1b8a36f3fe3"],["/post/35532.html","c09cc33b2fb6956de8e7855470c0c7b7"],["/post/35848.html","29b6c08b5d25bc6313e7256fea15ffe8"],["/post/37318.html","65ba5292d6b736b186d04dfa1160f697"],["/post/37663.html","a17fe518534c342078f7b4cdab24c071"],["/post/38035.html","ca08c525c38138dc3a161aad27d5e611"],["/post/38072.html","d2ff822a8086a8397e950b07fd358db7"],["/post/38145.html","b54a6674770e2c6f1e055fd2cf9d0c3d"],["/post/39968.html","b64ff71885c86b6e4a4f78847f4ec89e"],["/post/3de4bc69.html","4fdeb6bc5123f3d0dcdab9a68b8ad095"],["/post/40583.html","25b241f9e223c820595ab92bb1a2d949"],["/post/40997091.html","3d3ddc7defa052b09c9e0174eda8e3ca"],["/post/41129.html","f35ec6087348a366e4686621a74622ad"],["/post/41763.html","fff982b93e97b100f4abf707f26a0d62"],["/post/41829.html","2a8f863272e9e4887d91e9c09f0d488a"],["/post/41840.html","3fcc0e48a1fdc1c04773a7d8fc31f364"],["/post/43817.html","395ae2bb1099c7e6e2420f235e8a999f"],["/post/43878.html","ce0fa01549ea9be7a4ae7e43816f1d81"],["/post/44250.html","e58f71344035a86379d5e98137ddd8d5"],["/post/44336.html","ac35fe4b1184a101c00ade7bd4ec2385"],["/post/44454.html","89d20d16a727e0df27698eaac5a45f5b"],["/post/44487.html","32f5fcfdee43cac9c72f3ecf707bee26"],["/post/44914.html","ef838fff73d2a7b7f48d87081afc08bc"],["/post/4551c130.html","1d050b65f68c1e916fcdc1b74ff4fd1c"],["/post/455a4c92.html","06a0a1f36e4159285fae0cbf4f18d218"],["/post/46466.html","8b3e8fb8297a22674b5ec9858cd8ea57"],["/post/46925.html","1b7a1267bd50f78fd6ace3d41791a480"],["/post/47075.html","f25557087a83c5b8d9c9d692959277d1"],["/post/48220.html","bd35c4136046ac7eee1b76f7b39a3e01"],["/post/4b1879e3.html","6512b5c4d96eb4210a8d2fadc4ca614e"],["/post/4c720881.html","4206a1f5b4b7576e126e43011b0bca1c"],["/post/50daec4.html","404f7ce7b1bec39e366e716d9316bd74"],["/post/51491.html","fb500227523e71051b7fb7ec9a7192d6"],["/post/51e63dcf.html","534a4766df878459fda1a848717689d0"],["/post/52078.html","1a0511dca6922bb89579ad0d666aa495"],["/post/53677394.html","df0c2e4b5d4570fac2bb0ab49dc6941a"],["/post/54300.html","175b3f41b0e70051a28511f7811b6f49"],["/post/54612.html","ada986d27b1369eddbe0724937f20948"],["/post/54613.html","f8310fb2771a7e6f99a444f6a7bdd2c7"],["/post/54708.html","9a7674a3791551c6e60d7176adfc1522"],["/post/54778.html","cb09dcde9b5112358d18b9527abdbded"],["/post/5490.html","5b491e4a8d71149871f43530ca3d4b52"],["/post/55046.html","811cf501c726923c7283200503b93fbf"],["/post/56929.html","b6cf1b6aaba0dd86574ea1c0f7c873de"],["/post/57339.html","d67cdec21851adc64da37fd02a12d34e"],["/post/57449.html","ff4f1aa1c9403c8af86b48b6efb2db0a"],["/post/57453.html","149c86e2f6a7e5c46ad4d6a700640973"],["/post/57671.html","9e8e45990b36c8f5c0879e2e3453839a"],["/post/58313.html","8f43c1283ef02c7f43e749b78bcc7edb"],["/post/58481.html","12656d36ece19fdbaaa54ab9b1487e24"],["/post/58986.html","61b49b9f3dda4a5d5a3434981b2bbc24"],["/post/59431.html","2488e9d5eb69b7db1a2c069f0aaf491a"],["/post/5951da65.html","bbec937e78fef75d2a20bbe62f51e99e"],["/post/5be7e977.html","b405f58dff2399fd0040a17cc55e1bd0"],["/post/5f9e4eff.html","0ac0b3e0491b2419a0f6510be4b4786d"],["/post/604b49d0.html","ba692e7968b7970bb7b4141691295585"],["/post/61312.html","e02265f42c512a5fde03324c714f9ad0"],["/post/61738.html","d6bfea3f94d174e1f1267ba956da2c52"],["/post/61809.html","3b18b698fd99bbccd3bbaa8ad2bd15d4"],["/post/61eaf19a.html","4d3241bcdd5cce5e2a88dc69d58b4a5c"],["/post/63002.html","70ed6974819bb7b761b8695781aa8cef"],["/post/63711.html","0a9f2b85152c8c14ccdda66747d04cc5"],["/post/6587.html","7a0789129e026877604fb17682e122c4"],["/post/6589.html","b73e1a8218e120c01d5e530ad688c30e"],["/post/6880.html","5b1d33a68526ad86f935e77c317d58b8"],["/post/70263071.html","5eee360d6792704973afc53e90e6422c"],["/post/71038564.html","de469bb750a386b3af086510b651863d"],["/post/7119.html","3a135d07bdaea7c41f7c58ffe8f27080"],["/post/74e7fdff.html","b046ffa711b4dada81fa9aadf632fdcc"],["/post/7502.html","4b3ce43d6c448aba569634567c1d1e96"],["/post/7564.html","1654aee28d21ca259d2baeae39832891"],["/post/766f9b60.html","03b0ddd66550b5647bb3db6d93617e45"],["/post/7ca31f7.html","da9c226a4475a81d17ca1a85be1ffda2"],["/post/7d1c86da.html","ef4d60ed776029949a0b6089de654e85"],["/post/7f3bcd7f.html","e4c2544fd9526fb3a9ded0141ede6313"],["/post/8039.html","022ccfd546c21d6b850c5cb6e944cf0b"],["/post/8050.html","ebf1fc44c4a43c05b01941e3c58b1a0a"],["/post/8072.html","05e40bbec9c9de0f33e95d58f74df93d"],["/post/8274.html","c2a8afd41381866fa22878b6e81b1c29"],["/post/8372.html","e2dd1334913f6687fb71484fcc83d39a"],["/post/8498.html","3806f8e8772adabddc59be13e659e051"],["/post/85b4e13b.html","fafea73255d367d24fdade3246793a2e"],["/post/912b2566.html","c1c78c7d4e5f28fddf1648acad6c89aa"],["/post/9187.html","ae6e072e57168c656382a40060b7ee77"],["/post/9197.html","fefd229e2e4b02a4c6ba5c58c6eecf8a"],["/post/94ceb2fd.html","da60b89d715ed681afcf224c3641161c"],["/post/95495db.html","0afeda8594db1f19aa94d4f8e8fa5814"],["/post/97246020.html","ce795969fe983c4196ed15c1ef72c3fd"],["/post/a3a786d6.html","bc9a0d9c0331aa99bd0bbebcb606fb99"],["/post/a444b428.html","cfedd67e520d12aa685de8770e8451da"],["/post/a50b8908.html","6aaeddd0b246c9ea4f25d2366679d351"],["/post/aa1eade8.html","db07b9eb0d36535bcad98fc9255410dd"],["/post/ade8c6d6.html","52ffc37e573e98b283b093eb0be68159"],["/post/ae8362df.html","5b206e917b019db69e4db89557f07884"],["/post/b4c1d206.html","cf7758aed3bcafbdc0e8f921847633f6"],["/post/d431fab4.html","c6be6424d69e63b8ebd89abe75ce91be"],["/post/d5381517.html","e6e7ce8912d244d82929b96d4bd0536b"],["/post/e058ffd8.html","c22ad14e408c33d692ecf62b07c808af"],["/post/e0f8cb74.html","2d7bc7f99789bb793377ad4ca003d6b2"],["/post/eefe591f.html","af7d1d57bfe94a3699d4b02504e7d34b"],["/post/ef296a07.html","da839f3f38e427847d65dd1eaf8f8eb3"],["/post/f201f9fd.html","f55a07823953eac513486b300c1c6858"],["/post/f79e4123.html","d5da45fe0387e12311e617231925b4cd"],["/post/f8648a1d.html","9caf4c69b21aab220b86650daf75da47"],["/post/f89cb603.html","724ef37eac2f1fa0e7bd507f76be8295"],["/post/fa288682.html","27423d81355ef5dc1c264c46e4275954"],["/post/fb98053e.html","1e02a67c68afd4c0b7cded277b28075b"],["/sw-register.js","90c3c3c031e04df298ea29d24cbc35f5"],["/tags/AT-T/index.html","2ab2a46b91f8cdbb864855935d9de9ca"],["/tags/index.html","9c15a9cdb1a3177e57af77352de1add6"],["/tags/动态规划/index.html","bf3d601018294363d2b7370e5fdae1dc"],["/tags/字符串/index.html","b716e4a9ff0db65d6aa010e65b75d0ed"],["/tags/字符常量/index.html","bc255a6d6581c40c6ecbf90dadb7bbaa"],["/tags/快排/index.html","2741b3e6a50ea835542abef2646d49a8"],["/tags/排序/index.html","66721c6afbf90e25627436711be0b601"]];
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
