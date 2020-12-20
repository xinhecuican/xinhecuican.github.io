/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","999832727fe0ea880a8f59983c7ab4e1"],["/archives/2019/index.html","e18078436c656cdd83e99a96332c97f7"],["/archives/2020/01/index.html","d34b474b559c9ea9eaa8f16f2d1ce0dc"],["/archives/2020/01/page/2/index.html","69070e01fa997e8b5c8795c8397e3e14"],["/archives/2020/01/page/3/index.html","b3c1b621c3984881418ec9ed3cafbe10"],["/archives/2020/01/page/4/index.html","857c86fcc20af52d2ff2a9520248be03"],["/archives/2020/01/page/5/index.html","bc201a7a2b5e6035d8698560d73febae"],["/archives/2020/01/page/6/index.html","73e45531ee4f3885e99e1d2927efd6e7"],["/archives/2020/02/index.html","aaacea7de0f9cd3fb67b17c9d825b987"],["/archives/2020/02/page/2/index.html","9a8bcf56675efd51ae984abca08d7940"],["/archives/2020/02/page/3/index.html","a0a7362630fa60bc7da390209782f957"],["/archives/2020/03/index.html","2a18d594f04b89dcf0759a06e1c1509f"],["/archives/2020/03/page/2/index.html","d6d0cf3e9f7258a1a602154f8607047f"],["/archives/2020/04/index.html","6f9d7117b06c53409a9208e1478a1a30"],["/archives/2020/04/page/2/index.html","53d0ba9cf25cf2f33088295c05bffb15"],["/archives/2020/05/index.html","e27ae840afb8c7a89d1341550ed173fe"],["/archives/2020/05/page/2/index.html","a8ce83f6b65e6f39deca240fa1b7f1e1"],["/archives/2020/06/index.html","6cdbaf6b3fc6e303dd29479dc10eaf71"],["/archives/2020/07/index.html","e7b570206c245f629cd935ee0b4f1739"],["/archives/2020/07/page/2/index.html","347de724ee4d01bbca68e59bc156719a"],["/archives/2020/08/index.html","2fb981d3b7a23aa19b10f8708513c900"],["/archives/2020/10/index.html","6ad98f15fecdf39316071065620b84a8"],["/archives/2020/11/index.html","e67e30f023ff0bda6c7c23887ff17e07"],["/archives/2020/12/index.html","e21c4bd059345fbdd3ba957b57ad5866"],["/archives/2020/index.html","2c93d1dcd1dcd3e6a73de4100262029a"],["/archives/2020/page/10/index.html","24d6dc2ffa1d088aec7bef868f009225"],["/archives/2020/page/11/index.html","7edcbe1f47039e0ad60d3f502a063033"],["/archives/2020/page/12/index.html","e3266f11db6952e8aba54c00d207c5c6"],["/archives/2020/page/13/index.html","3f9a502d7e8125593709dada47d2fefa"],["/archives/2020/page/14/index.html","34acdb9e86c9b65d85710f8e4b0d36fa"],["/archives/2020/page/15/index.html","bf960ce93898608aa2978fd3c748d751"],["/archives/2020/page/16/index.html","2f605e41c5c38da63be8286338165af6"],["/archives/2020/page/2/index.html","40cee17797b77ca623d1a23b7a980826"],["/archives/2020/page/3/index.html","b4f6c64ff021e4d9f0b40e073258a33c"],["/archives/2020/page/4/index.html","bab0a62e772e942b630ed2a5ca8c9636"],["/archives/2020/page/5/index.html","fb5654498b76ddb295be728dd3b7371f"],["/archives/2020/page/6/index.html","58d6722b5fb1fc5336d393c00d7c6194"],["/archives/2020/page/7/index.html","ea6ac444fd19ebc4f1ccc358f2adb718"],["/archives/2020/page/8/index.html","96d5d5a0acd7aae466e70be5d54f6c13"],["/archives/2020/page/9/index.html","ba237784203000be7b9f68d4fa464c59"],["/archives/index.html","c9235db67267d900d393b369be74a68c"],["/archives/page/10/index.html","fdc41db4d19e61bf7efcdd8dd2ff9bcb"],["/archives/page/11/index.html","ad847670db8d6b9561275b5aa68807d9"],["/archives/page/12/index.html","14142b5feb62d22ff70184200b50e7cb"],["/archives/page/13/index.html","26c779ba9c42b154e1406e1d79f7d1a4"],["/archives/page/14/index.html","048836eae2d30ee14237ebad1045ee33"],["/archives/page/15/index.html","ab734a3f9cd547e4b38f23198f486d01"],["/archives/page/16/index.html","efd0b7900e5b8f9ea896c14d9225c783"],["/archives/page/2/index.html","9301ef9b13129fef6891845bc400d225"],["/archives/page/3/index.html","cf9d719379c355b5d6059a8a4f577dd4"],["/archives/page/4/index.html","78586756e5ad8fff6ba30de3fbfb5cd6"],["/archives/page/5/index.html","e7a4a7c2c5a8b5d2dedccf6e9e368d30"],["/archives/page/6/index.html","c872d625a0f96eaa0cc870b579093723"],["/archives/page/7/index.html","2ad757a145543bade69162e9ec1d9965"],["/archives/page/8/index.html","b160df0a14497c44afe99a9b0ff0933a"],["/archives/page/9/index.html","15b0ecb4c1d5db300eaa0597dd687cdf"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","20f22a06556b6f34a77b9d5c940e30a9"],["/categories/Linux/page/2/index.html","5735cac7e29395721dd745db225602fa"],["/categories/MySQL/index.html","b37ad24bd7ff0658c16a884e3c97a678"],["/categories/Python/index.html","175abe6521dbeed8e9e4807844e448ee"],["/categories/c/index.html","4775ee0236b70e1f982a13daff46990c"],["/categories/index.html","0315cf0f1a77f55864f8465cb8001dc0"],["/categories/java/index.html","e281698d3f4ab5750c0a2f65a787704d"],["/categories/java/page/2/index.html","70c046570fdfd4cc6ecc3867e942f5ba"],["/categories/java/page/3/index.html","b0fa0d89455d248df2f1429f09d05e6d"],["/categories/next/index.html","74dccabeaf231e17b566a5fbcebc3859"],["/categories/stl/index.html","6324bbcfcb8b0c110a163d1c7ccc76ea"],["/categories/windows/index.html","f6ca22903d96a148c5e8e4343deb289b"],["/categories/基础/c/index.html","d5469ed377aba99a1ab213952f6cf8dd"],["/categories/基础/index.html","c126d8323bc38285588384c367f8cb67"],["/categories/基础/page/2/index.html","79347acf3b51e89957a3433f444030ca"],["/categories/数学/index.html","1b6f1cbd304d2ae8fdb21977addacb94"],["/categories/数学/概率论/index.html","8c0a39d0ddff1dbca3b86d149b43543c"],["/categories/数据结构/index.html","18ad0e188ae202396075aa8e41dcaf15"],["/categories/数据结构/算法/index.html","25eede0a319910a83cd3a01f3b910dd8"],["/categories/机器学习/index.html","4e8b311dddfcb5793eb85ec479fc47c2"],["/categories/杂项/index.html","3ec1395a0885f3932ee1e0f43f7c1d3d"],["/categories/汇编/AT-T/index.html","2df4f9a3d1aba9a765b761253110d050"],["/categories/汇编/index.html","debaf6a7b146c39f5f3adacb8bbb0734"],["/categories/汇编/page/2/index.html","5b1f360d96d3197ff8ca1058b1c6b8ca"],["/categories/汇编/page/3/index.html","331dde64f79e67e333d445a6263cc41a"],["/categories/算法/index.html","30b98d9de55137968356c4a6a6283328"],["/categories/算法/page/2/index.html","a1ae48e4345a78fda3b9b544354e3aa9"],["/categories/算法/page/3/index.html","64878ee0a4967fa77c7176c0f8e57e48"],["/categories/计算机系统基础/index.html","1c5154044a8f9509cd3a3fbddc9cbb2e"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d58d50e1e3e70e481bdfbde6ab78c95e"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","cb2ee8ee5df892f97c242b62f039e50d"],["/page/11/index.html","3fd87cad5df53db5c9a8da995aa29ab3"],["/page/12/index.html","1b5be7cd2e6c40347388f9d9bba62d65"],["/page/13/index.html","a195051058cee45320ea06ec4983301d"],["/page/14/index.html","2155c000b24061e80b2ecf9184538be7"],["/page/15/index.html","99823d8ff4670783879a6469103c863a"],["/page/16/index.html","06f098d1793380d25e49eb8aa54847b5"],["/page/2/index.html","39cc9daa988f303c7b1ba2ce407e7831"],["/page/3/index.html","2ef7b40b0fc6a064444438c7660a49b6"],["/page/4/index.html","7f91cfd4fc88bede2ed6acafbb460655"],["/page/5/index.html","a445ab85e7891c63b13eef54e9226614"],["/page/6/index.html","02f33120c0306c3338f007e667372eca"],["/page/7/index.html","6b5562be11d6090f240d7d362130a324"],["/page/8/index.html","443626437b895289001be4e5fe590379"],["/page/9/index.html","34f86b20f94ed697fb36c707edefccc4"],["/post/10919.html","2c9a03d5696a126d8683a343845c60bf"],["/post/11051.html","b461a68c7382945a1e52a952cf7b6d8a"],["/post/11306.html","5a4a6422920f296c366b8bfb6f73c201"],["/post/11491.html","ad77d6a3bb50280763ff8d0605a89bcc"],["/post/11799.html","11ec06a41819ce6d422bb924a8e5e7b0"],["/post/12334.html","824868e3ae2faf761d391bb88c89a866"],["/post/1326.html","4a5ba4cf083360970024916a6ea0dd15"],["/post/14379.html","ce1f97df84e98b6c4887931238ac3b3d"],["/post/14511.html","6e98b92bbb71d1bf7d5b28a28d3490c3"],["/post/15201.html","3eebc87ce8d85d9b72320c7a45adb9fe"],["/post/15425.html","c6dc0439f0c6a8591a4688f54e2e1213"],["/post/16107.html","37589cae8c0ba809b9f700c438939618"],["/post/17862176.html","8f58252b76de2406512b38f8f93b1a55"],["/post/18431.html","d5ea8bc510b03a98eb53bacf57b133de"],["/post/18912.html","e67816edbac31ed209de2136e5a64a8f"],["/post/1b9c8662.html","c07b5a8cd3e18a51e5a6f9be6880583f"],["/post/20198.html","a3cdf71431ec54899d1c258807b27565"],["/post/20ff5ccb.html","d0ebb75afbf3c6b5b5702364421f09d6"],["/post/21624.html","87d8eb8d52c61f7d58e1d2d88238c878"],["/post/2170659a.html","2b11f7e4e9b1fd7d1bdbd82d6bac1651"],["/post/22102.html","4a3f77c4037792d184391d68faf45186"],["/post/22493.html","8234702b71fe64c6157063f0fc07c187"],["/post/235252ea.html","a4fc5cc99eb096adca868b29f5522ba7"],["/post/25699.html","10639b38bbfef75cb06e4af1831e6777"],["/post/2647.html","49a1f44d0097e805e97fa7ee8c836175"],["/post/26477.html","7f766c3bc9c0ab237b2899f8bd26aa6b"],["/post/26671.html","9c89c77cd46a471d3f4a67f65adf51d9"],["/post/26737.html","49011c97e56dee55e9c0b851756e9f34"],["/post/27045.html","9e836f722f1b748faac69f1b258ebfa2"],["/post/27621.html","031b890706987bf55b225cc23f69ddd5"],["/post/27890.html","91b3bd817eb096cf15ef3d146bc4650b"],["/post/27980.html","bfaa7abe787c5dfaf40e77a8e13bfec4"],["/post/280b588e.html","01b982b8c240e3650cc52d51fb7f083c"],["/post/28579.html","e9017b51e67a3bf33e6e5a602ebb9b79"],["/post/28877bf.html","e33c82d0c4af3a4602cdc3bae643b03c"],["/post/28954.html","794308ca01872d6a3911caab1ddee9f1"],["/post/29378.html","b40ee6f14093f6f85547d1423e84a23d"],["/post/29949.html","4476fea9ea4cfdf8a1e43dbd4742cf4c"],["/post/2ae43b86.html","34d01afaec6a62a51c22700b9f6c5245"],["/post/2ba82a45.html","fa6a9e71f8f85b1fac19996f9603c9e9"],["/post/30072.html","cb084bceb3d6a71c8af0ed927dd7d055"],["/post/30479.html","0f6a90f16562455957d13e69d965007a"],["/post/31a6b40.html","cecd695366d9f7e9dc77744051838ba3"],["/post/325cdbf2.html","b0749dfaaac336a301ee90abcdf8df84"],["/post/3319ed9a.html","3e1bc9536189e4684396c5b2269172f5"],["/post/3320.html","3e3d6f03f6acd13313b50952cce3d597"],["/post/33cb1151.html","318c57e61790c8e4bb55cb34867def3b"],["/post/34811d5f.html","d6bc194d79504e2ae3ca2e2095e638e2"],["/post/348d4e04.html","10eb1db99cbf371df9a8243535ce5509"],["/post/3526.html","f66c1d086be3f42a3edcb16c8a261e44"],["/post/35532.html","0ed2ff3dff579ba290217b4ed503d8f5"],["/post/35848.html","1f788d59aa5fb2694e4bb9dbe30dddc7"],["/post/37318.html","00e7d95ee6ddd02c66314c22c1cbd8ba"],["/post/37663.html","cfff48e6011e174a274d0e2689404bcd"],["/post/38035.html","9a2f1c309a4cbb463606a9f3299c1f54"],["/post/38072.html","50c73dc9aa56308d85fb5e08fcf4a8c6"],["/post/38145.html","36651931d9dd95c515dbf8f856c265e4"],["/post/39968.html","7175446d876899b41e556c9e37dc5caf"],["/post/3de4bc69.html","638c44c60a7fbf14df44c580e2e4611c"],["/post/40583.html","efcee583a61369bb313d5d5ded6af6d8"],["/post/40997091.html","4016a9484a101d918bd31835a0d09f4d"],["/post/41129.html","76dd87846883133a9befd62f5fb05828"],["/post/41763.html","9baa587c03e60492b5a3b22a35f86d9a"],["/post/41829.html","f75964df614112c6e5d984a4c659b546"],["/post/41840.html","c82ef52b77e7332bbce0445fc3daa57f"],["/post/43817.html","7b02fb9723b660f914c86d8a777bfca9"],["/post/43878.html","595fdc8e45013c439f84fb5207ad6260"],["/post/44250.html","cc52e2c0a22aa8cee0ed00c449e46600"],["/post/44336.html","bbc729bde47947ed41a4b9fb5f18eb9b"],["/post/44454.html","8638aaa39c7c3c88b253837cfcbcf338"],["/post/44487.html","41bcb7cdd53ac9fc1150e4622661b314"],["/post/44914.html","79017fff3cde22b119d6c278dd6387c1"],["/post/4551c130.html","5587243db47a48e30380069c1bc06a7e"],["/post/455a4c92.html","aa24ab49dbb76a8d774b964f73cbba4a"],["/post/46466.html","ca89330e8ffe1cd2f87b29d36ea983e3"],["/post/46925.html","541f9e83c56e0402179d7421e2c27674"],["/post/47075.html","4a7615c4a4f9a75d1b1e35e8b0f17e19"],["/post/48220.html","c87203c0989d582499decc9485099dd4"],["/post/4b1879e3.html","f77d18e6515884061c4255547456965c"],["/post/4c720881.html","ca55784bcb9fc718d36e1f8e1298e468"],["/post/50daec4.html","d834ac276c32fd9f479681c17eb2d811"],["/post/51491.html","5fdee36fcae06ce8ab1b47be2f951ddf"],["/post/51e63dcf.html","6c979a4085b238deee95f7273cbfe37a"],["/post/52078.html","3ec459b01c4b15b29e8960049968a516"],["/post/53677394.html","c2da3c1da75e2aef448300f347e98848"],["/post/54300.html","9b0288bb7efba5afaeaa227729dde38b"],["/post/54612.html","9d2b4db9e8f22b087e4fcfeeb3efbf49"],["/post/54613.html","3d3b2c0c7a3ca247e85ca5ab2d991bd1"],["/post/54708.html","577b33e5bd695288108131c157c35345"],["/post/54778.html","7b82de017e73d7be4dd2b9bfab9682f1"],["/post/5490.html","489dc04ba686e770f5af093f72db2531"],["/post/55046.html","1336e137f3c79ea1dabed7b39dbf08ec"],["/post/56929.html","8c43b5e0017e8de54bc21d39b4fb5a30"],["/post/57339.html","16a88025609dd4abd027af91053c9bb2"],["/post/57449.html","3ee15bca05d318f0a6a018d2dd7ef704"],["/post/57453.html","f084bcba70daa8883f8c368f1e15f193"],["/post/57671.html","431c497fc0f60ba0d55c4ec9c9e9afa6"],["/post/58313.html","573f6498cfb647df9a0d6c21fbf07ddc"],["/post/58481.html","f19b173ab3fd01cf1a6c4eb405f98dbf"],["/post/58986.html","b58eca5dcf8f1360d55e0eb1027ebbe9"],["/post/59431.html","a104dd2d6ce7a40cd37c41bcf18440ff"],["/post/5951da65.html","cc173699bf54e0c2a231df4b5779f2ae"],["/post/5be7e977.html","d3a87f5cfd65a481b038fbe1d2c77030"],["/post/5f9e4eff.html","a2ceaa3535fbd9fd1ed04a48927c189b"],["/post/604b49d0.html","1ae631dfb54dd7f0a176f4dbd2ec92b5"],["/post/61312.html","2c0f954a288bf70de3d037e88016e0f9"],["/post/61738.html","e46c7813003c0eb9485a88678a6289ab"],["/post/61809.html","749e304fab7fb0b8b0a53f7e1848043f"],["/post/61eaf19a.html","1f990c8af8329856e597bc1e66a8ecec"],["/post/63002.html","d6bd0a42a17b65071fa9b8eeb2752bbe"],["/post/63711.html","963be044cacf1b83289653835b42333b"],["/post/6587.html","54b9d16922464ad57dc4ed44dc1f41a2"],["/post/6589.html","3fc953362506971d7d938acaad22a99c"],["/post/6880.html","9b560145be4e347951e5aef16c9da2dc"],["/post/70263071.html","013ed9414ea5990b5aedf8658c32ea8f"],["/post/71038564.html","e50cc5fcb18d59000b72a91772f34bb2"],["/post/7119.html","6d73fb7102c61aa4664f0c14cabfb1a7"],["/post/74e7fdff.html","6bd9031257f3bbaddcf58818266a3b55"],["/post/7502.html","f0be4c7f102b209b7c6afa83b7722e26"],["/post/7564.html","9a95cae5ed753d53d4fc64269202b180"],["/post/766f9b60.html","406c648c8dec18e4835409c01e04b21e"],["/post/7ca31f7.html","1006db37cbe99cbe22e088d61a0037f3"],["/post/7d1c86da.html","78c71bd20b528d199c03873665d0245c"],["/post/7f3bcd7f.html","6d585a16c00fb033d18a3773be51321a"],["/post/8039.html","cc4503455c95cdf27c5afc90ac6c76f9"],["/post/8050.html","f26dde3152c233e300dea2a10ac93297"],["/post/8072.html","2325fb55c9cf3fdd5a5202feb4292a69"],["/post/8274.html","d42ba0465bca1e41ed31fa3dcd55f9db"],["/post/8372.html","068647b56dfaf4bd398a918178c30efb"],["/post/8498.html","4e1a1ef6c0f05ac8feab2d55ed20a30a"],["/post/85b4e13b.html","23bef8dd2ee5d3b6d3203a984f45e026"],["/post/912b2566.html","4ce75eea86aba55bf11b11a9505cee7b"],["/post/9187.html","3737fc9b84d97e38c34ce4c7e6221987"],["/post/9197.html","dceae2dc363eeb4583e1dfef42719700"],["/post/94ceb2fd.html","959d94a31e9e75941fde1ff79a77444f"],["/post/95495db.html","0745d62f9f40dd4091c0cb42d0bf5586"],["/post/97246020.html","b224cc120c60bb54e7c6be8c5465a614"],["/post/9954ba8e.html","724e5bbff61515429837dd11f29906b3"],["/post/a3a786d6.html","78698f4cb1eedb69ceb05341487550a3"],["/post/a444b428.html","d0f7c0155b20d3ebbefb5e721ba840ac"],["/post/a50b8908.html","cf7eb2baed2a1291a3c3b8777ccd90fe"],["/post/aa1eade8.html","aef1df80d1b1f4559437a74eb62f6a68"],["/post/ade8c6d6.html","6801508c11519963ac503580754ad908"],["/post/ae8362df.html","a9d74b0b72b1516d799ed46fd9296934"],["/post/b4c1d206.html","dfb3af06af3cfb51247149e70ab6cc26"],["/post/d213fc7f.html","071936a37524abe49d281e72ffc2ae42"],["/post/d431fab4.html","2f76881c4b0867e65b4f75dba5600e3e"],["/post/d5381517.html","e0415495cc48e89b4814bcf16661017b"],["/post/e058ffd8.html","49ec0eadbab3b336e190da5afba47c36"],["/post/e0f8cb74.html","9468412ce2c080d5b5d61319f86bc4c6"],["/post/eefe591f.html","7d2a1639243576fb8bce5d3112a29249"],["/post/ef296a07.html","a6358192349178716f9b1db53eb18f53"],["/post/f201f9fd.html","af2fb838651cf06df435a59335fd81d9"],["/post/f79e4123.html","0943b0986874a08ce644b6637fc24952"],["/post/f8648a1d.html","7ecd5dec4649d5b79f7002cb7d02f0b5"],["/post/f89cb603.html","7a4e661cf43b46cc7675e86267292923"],["/post/fa288682.html","79927d42d64866f0fe96d244ce694e4e"],["/post/fb98053e.html","039199ac1bf7a10d35ddea626f4eacc3"],["/sw-register.js","cd04df0a0957b332049e89f14fd65073"],["/tags/AT-T/index.html","d211e159dd7bdde250c7d467668d509b"],["/tags/index.html","89d1402d7d901b1740e3d5b35b8ec912"],["/tags/动态规划/index.html","ec132276fa572723ba239e669d6648ae"],["/tags/字符串/index.html","c46ab03fbdf74ac03e590cca84f771d3"],["/tags/字符常量/index.html","f28ad5c45c7dba035cc4a334bae4bbf3"],["/tags/快排/index.html","83ac4d6ed8f4f36f128916f127d59c07"],["/tags/排序/index.html","15c1e593671123d0ad38d7a7d44126c9"]];
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
