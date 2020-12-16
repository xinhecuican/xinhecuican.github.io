/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","61da3036e6ef2bc70b12ac767a13bec1"],["/archives/2019/index.html","77c91ba9d8b96d478abe43e39a5ffc58"],["/archives/2020/01/index.html","9249c03d74bf2848fa0c5d48ab042a9f"],["/archives/2020/01/page/2/index.html","8b0859cf195b27a88a4dea5052169a28"],["/archives/2020/01/page/3/index.html","ac58855b9f9d2fc4222569898051435c"],["/archives/2020/01/page/4/index.html","9035fe03f933d5c96b1bce99e396a827"],["/archives/2020/01/page/5/index.html","67caf9abdaa8cdc1e1668147a924f2d2"],["/archives/2020/01/page/6/index.html","fd7ee672ec6626ef257da3330caff08e"],["/archives/2020/02/index.html","b53451922667e7fb71c18dbbc6183672"],["/archives/2020/02/page/2/index.html","298c0c64308693ccfe311dc221d22b80"],["/archives/2020/02/page/3/index.html","d81591fae106959316049f7b91cecddc"],["/archives/2020/03/index.html","acdd056789d2764d63e32c8796a64bbe"],["/archives/2020/03/page/2/index.html","f835a9c7388edd4a28198db2b8173063"],["/archives/2020/04/index.html","940aeccc1e3e4a82635c87131e0137b9"],["/archives/2020/04/page/2/index.html","ea6c74bae90759200f08e020ec065fd3"],["/archives/2020/05/index.html","38ec546680fb35392fede3b5d6a3207b"],["/archives/2020/05/page/2/index.html","cf46ea07e6f2a98f31f8b347ef4baa28"],["/archives/2020/06/index.html","1ef3b1eca5d37672b31851c3b78e62e5"],["/archives/2020/07/index.html","50466462ff0a05c78cb43324f647f6dc"],["/archives/2020/07/page/2/index.html","c786172f01f16ddbc10f65db29f92314"],["/archives/2020/08/index.html","2676c5e3e97ce047b88b95e84abb87cb"],["/archives/2020/10/index.html","87cbd769123cbc931330f5c4fc20d3de"],["/archives/2020/11/index.html","dcf10262d5ea23cf055a136622835ce1"],["/archives/2020/12/index.html","ffec140afd226009b011620da78cf262"],["/archives/2020/index.html","5c9f74c9ceddf66a51a06a546a5ec823"],["/archives/2020/page/10/index.html","3fa7aef7b913dc639416a0d621a884f6"],["/archives/2020/page/11/index.html","a1b969d2fbc94a4e3a0320dc51b7281d"],["/archives/2020/page/12/index.html","ba6c267142ae238e0d05a0f4bb166e37"],["/archives/2020/page/13/index.html","64817b46bd96fb20a184df03b632a066"],["/archives/2020/page/14/index.html","72313e66b2360fbea696ef3dac3241da"],["/archives/2020/page/15/index.html","173e0e923e9d7f38e6b80a6fa99a6aa3"],["/archives/2020/page/16/index.html","225e923067cda906c422956e150c0ade"],["/archives/2020/page/2/index.html","8475397074045aa205d603acef3e8332"],["/archives/2020/page/3/index.html","09963543f134bcd5b795f83063e5a936"],["/archives/2020/page/4/index.html","d2606026f9def316e4b0e0d1adafd254"],["/archives/2020/page/5/index.html","297a4cddb6c1979b1bbed8980a8b259c"],["/archives/2020/page/6/index.html","2df6ab907fc4a95f82943c35a6c76b5b"],["/archives/2020/page/7/index.html","7e24952ee7de61e957ceaca97af71ab5"],["/archives/2020/page/8/index.html","e3b5404194829176784da92d64edd6f8"],["/archives/2020/page/9/index.html","e5196957fda5bca6fb4d956e2d187bfc"],["/archives/index.html","3803f63af4f69c5ca390c1704085f426"],["/archives/page/10/index.html","84b4cbab646427e1a5a787c857a0a626"],["/archives/page/11/index.html","c01c13f0ee95821b059caf3eadae6c30"],["/archives/page/12/index.html","48737a157ed8fa8b59552a70c78cf1fb"],["/archives/page/13/index.html","470b8bfb9299148b832798e56c582227"],["/archives/page/14/index.html","b2f2dfcfd1ad1609f33f14d44b8605d2"],["/archives/page/15/index.html","35c64ceee26370aed6a172aceac5b6fc"],["/archives/page/16/index.html","15b7e00bf0d69fc4e21de0d6026745bb"],["/archives/page/2/index.html","37020ddd09f6006ba764818982f858d7"],["/archives/page/3/index.html","49fc75e6a6c670a85fd0c79cf8bf99ad"],["/archives/page/4/index.html","081f3a5f415fd671424850a6092f013b"],["/archives/page/5/index.html","59b7a0afabf71ae94e2427bb150d2845"],["/archives/page/6/index.html","4a781424866f969301fd963cb6945181"],["/archives/page/7/index.html","0ffc9ce77aa4b13137275111121d18e2"],["/archives/page/8/index.html","c0e924d371a142e0d7cbbf795279934d"],["/archives/page/9/index.html","b03637dec2c3efe92ee38ace92cacf64"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","41a0b8707fdf410f35b2ca701ccbcef2"],["/categories/Linux/page/2/index.html","798c609d997a211a367c6c2a7dd313ec"],["/categories/Python/index.html","57042fb56195d5c40dc35f5f68b2b821"],["/categories/c/index.html","8bd8658d95fffea0a36dbb4aae7bf45e"],["/categories/index.html","595c6cca885c25ba6e1d2b57c7fc0eda"],["/categories/java/index.html","c01630b5d81fdd5947d87f0476cb8b5a"],["/categories/java/page/2/index.html","25e2b93cd6fa5718f188781434d337ba"],["/categories/java/page/3/index.html","cbfd44e36ec8cf8e60bdad11ea24bbb0"],["/categories/next/index.html","b387c9b1d081aca835aa2613781d9b9c"],["/categories/stl/index.html","aba4a3d40427a5d890c1bba737840af7"],["/categories/windows/index.html","5097f8eee14a9a09ad8d2928e40fece9"],["/categories/基础/c/index.html","9fb79be7259dd5ca3c1d19c485e2bb43"],["/categories/基础/index.html","58e2ce69da41cd69722dbac4b78279fd"],["/categories/基础/page/2/index.html","d2a5a378f48213741a7e1730862e3424"],["/categories/数学/index.html","e18fec274f2804814f995a54d4e91657"],["/categories/数学/概率论/index.html","3e0e2cd94651f2a1b0bb4dd492d56931"],["/categories/数据结构/index.html","91b2d38b62862157c887dc0b85f499a4"],["/categories/数据结构/算法/index.html","c6dec3c79cf385d08b4542b891f16aa4"],["/categories/机器学习/index.html","37e0601000d8c413a523922c023d11e5"],["/categories/杂项/index.html","f30232f6efd95b5458eb8e0fe026f88e"],["/categories/汇编/AT-T/index.html","1858ce8bbb2c01cc55a77ca1117c04f2"],["/categories/汇编/index.html","f5d7fbbc760954e4406e3966e0f81b43"],["/categories/汇编/page/2/index.html","f71bdd6145957dc2105991e4e97a2936"],["/categories/汇编/page/3/index.html","967a7cf30b78153de13a1a81822b089d"],["/categories/算法/index.html","32b7468bbddac1b341f980405f773cd5"],["/categories/算法/page/2/index.html","c343324ecc5a48b480937b7d33d407be"],["/categories/算法/page/3/index.html","922551f6bbd656abd36c9e0d90b2e06a"],["/categories/计算机系统基础/index.html","9170ab9fc4e1574d16eddb5ca3e9890a"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","681c3876c8d9e12b4496cf1dd6155d02"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","6be79b9f9d3102f0309ec861e2510493"],["/images/pasted-3.png","d0c67ce00fde063ff36002f48a6fd3a3"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","6ef23ebfc1d6a354ced65a1b2b9ca4e2"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","34209468add04afd04da86a22104c141"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","b306a61d012095111ac1e0c861f50db5"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dcbe5b32871940c1cf74bb40cc1d6167"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","84f1605fa706835ffc9a50154048caa4"],["/page/11/index.html","b40cb14d3581f85116b83ebffbe0613f"],["/page/12/index.html","303970e5ba1642dd1bdae53f71d04a87"],["/page/13/index.html","38b97b078db86e6d59f46b9d13fb0971"],["/page/14/index.html","5fecf955f24b0a1d0f6f484843222eb4"],["/page/15/index.html","58d39ce135d04b817bdf5481d96c0760"],["/page/16/index.html","41911fdcc2d949df43c80c6ecc0dc085"],["/page/2/index.html","07b8ef0b63ffe71aee00d1a4e8a218e8"],["/page/3/index.html","86419d4ae82533f1de542dfb555bcd74"],["/page/4/index.html","f5dc8b01d425c555139c721ec164e274"],["/page/5/index.html","8de1b5f09a8209dfe4cdc152a8881fc4"],["/page/6/index.html","9b0325acccf0591f7d9a99d2798bacb1"],["/page/7/index.html","b186823d27f8f9a177cf3dcde8e668ba"],["/page/8/index.html","039da5786748cbe8869d9d2f77470ff9"],["/page/9/index.html","8de6a1935ec7f5febf1651e750b4ccd0"],["/post/10919.html","5a01708dabe2b0697c3f39c82e13c5a2"],["/post/11051.html","c19bf2ce2b9e60a122ad05832eba60dc"],["/post/11306.html","cf161ce1634425e906696d670665785c"],["/post/11491.html","4c6c04e303933aa1e16502e497ab5e6c"],["/post/11799.html","751ae8f58ead59d61663358bceb7c417"],["/post/12334.html","943534c80c91eb559d6bbc2c526f92b6"],["/post/1326.html","6a14c4490663815b21268c62cf6b6977"],["/post/14379.html","a47aaa8902a42eae5c057bc33eeca303"],["/post/14511.html","2a186eecc52da86f4dc6a331b9a94a6e"],["/post/15201.html","58e4f1a3922c851d543908775adde0e6"],["/post/15425.html","90a03cacbb280755fdba0423cae1476b"],["/post/16107.html","78eb3453af1754f2abf2c4fbb7774690"],["/post/17862176.html","c3a705e2c0d27d9cdcdf582bfbdf601a"],["/post/18431.html","9e1bfb6fe983ad5f1ccea2544aa1ea3f"],["/post/18912.html","bcd0265a06a83ecae2161030cb9c044e"],["/post/1b9c8662.html","9422e78b343827333635153e2e8d1c69"],["/post/20198.html","62823e7de10bae72ef43c3badd6cbf55"],["/post/20ff5ccb.html","88e2214f2d2fd1589794cac0de7a4996"],["/post/21624.html","d5987356e0df66def7dce4a9f48f4241"],["/post/2170659a.html","c3c8185e5060e6aa062b0bddd5ca841b"],["/post/22102.html","5a854890e7dc39924a37100432b40226"],["/post/22493.html","1b502ea7589c144b74cd541bcdfb411a"],["/post/235252ea.html","973ab0f62aef35bf09c8bcb9bf5ba80a"],["/post/25699.html","a7a14584f48d363d8b781c9bd2c181c9"],["/post/2647.html","31ff7dfa9521381a4cffca1f4f422bd3"],["/post/26477.html","62b73822c3888bd5d62de0da47dd9e72"],["/post/26671.html","fdb8b2a71dcc6d31042c745d420c00f1"],["/post/26737.html","fbbe19fb6732af601827501c82c8154e"],["/post/27045.html","3785e1fbafe77a494787d7d104bcd193"],["/post/27621.html","fe89e15f7c1eff5f6b00b1c5c81d7223"],["/post/27890.html","a0b5d11e37640f273bacf3ce13013f6f"],["/post/27980.html","bf320febb498ad39b1929656a68bd152"],["/post/280b588e.html","aa19962359067f40ef38f7e0cfb5d11d"],["/post/28579.html","ecd0d4fd3922679b86706a9565ef0b09"],["/post/28877bf.html","460bf9fcef7fa4b2385e5eb54b4b694f"],["/post/28954.html","098a57c1ab5a65adbebfe877b4e81f1f"],["/post/29378.html","e7462f7e8e60fd3f68c9794b81a68297"],["/post/29949.html","4184af69e1459948d2f33b85cec3b7b2"],["/post/2ae43b86.html","cff54a499b750f9cb5a689c7e059d9a7"],["/post/2ba82a45.html","63fbc911553625df37d21013816f7e4f"],["/post/30072.html","deb71512dd41f581d3b47fde29a76578"],["/post/30479.html","ff5fe72f3c6cd70d1b48242284a3e5eb"],["/post/31a6b40.html","ebe8d389aa69c40cea599b76bba376a5"],["/post/325cdbf2.html","246e18921199ad7f7af6b89bb8baa9d7"],["/post/3319ed9a.html","1f6b8d2aada50ba6e76e5bafc03c149f"],["/post/3320.html","2a7e78d3dfdf969772e7008c118068fd"],["/post/33cb1151.html","8b93fa8a553bf82776438dba904e124e"],["/post/34811d5f.html","7c338cdb4819e2ca87b007940ed10070"],["/post/348d4e04.html","09d05fbf4e109e11cf576645f119705d"],["/post/3526.html","a709b3334ca10115c7332675c1ee1eb3"],["/post/35532.html","b3c02726a4faefafb251b027dd90f48f"],["/post/35848.html","b924bcb06c56d667174717ff6d5a4675"],["/post/37318.html","5f4c38b3709504199dacf621af319d39"],["/post/37663.html","59c5678a56f7a63caf48f774bf85aa78"],["/post/38035.html","5ae083ae6034a908c56595c098caa05f"],["/post/38072.html","56214d6a262e83aef028248605ace32c"],["/post/38145.html","6c216f35e368a7c74153dbd62944676d"],["/post/39968.html","41bed0cc1ce375183033e6a9fca96cfc"],["/post/3de4bc69.html","c39a2f5f33cab803fe9cd644c6bf3f1c"],["/post/40583.html","84a0226ddd3523863f7013f6c3eec471"],["/post/40997091.html","fef6a91028e150663de4c1072f6dd85d"],["/post/41129.html","49f967c66529c004d0a604721c89a7e4"],["/post/41763.html","de1d0a14616221f34eec8eb8e96c3382"],["/post/41829.html","db41363ee11e7fd0b66121c3bff032df"],["/post/41840.html","30a0a409c13be136e9a8af7aa05eedf7"],["/post/43817.html","2a5f5440e5ae8097c53f803c326e5471"],["/post/43878.html","a1846a80cd3e44e9256fd7a444545997"],["/post/44250.html","5accde01005e053e14f99f5731ea1e66"],["/post/44336.html","2cc8e9db2276654c287cee44edf07443"],["/post/44454.html","af40c10c702361d7cb5147835104bba3"],["/post/44487.html","afd299c53da9e94ff3fecf23e565d4a0"],["/post/44914.html","77e12392f79d507d9ab9f97eb32fac79"],["/post/4551c130.html","6966eb263cc12713faa0fc0fc60a6858"],["/post/455a4c92.html","9fb5de7f666c56e8174e8b2bcbdfa8d2"],["/post/46466.html","b7e58e8714a86d16ed26be0b12fc723f"],["/post/46925.html","c47d78975f82db956bdf5485f7364234"],["/post/47075.html","fc9eb9a76d0898f69174235339a2999e"],["/post/48220.html","53bab220f22244f12b779d338ac9de45"],["/post/4b1879e3.html","915808ec224016830c5e1ead905cf7ad"],["/post/4c720881.html","6840d2699ffdbcd07873d7ae5acbd4cd"],["/post/50daec4.html","5a855dd144125976bdf46a7602d55ea8"],["/post/51491.html","cb6cb3869b46adfa332e6c93dbd3b587"],["/post/51e63dcf.html","a2ff27a5948d8aaef5785e3f486e7a50"],["/post/52078.html","111b2acc604e92465d97da9c2e0c5b2e"],["/post/53677394.html","9db205d2b9cc0a70718171044d372fc7"],["/post/54300.html","7361e983a5cfc4c9f28150525c84ae62"],["/post/54612.html","d6607b952cdf51a15fac6e3d2fbbaa4d"],["/post/54613.html","36a53256d477c5659b8674e240b5b22d"],["/post/54708.html","a8c396d2302965393d70e07f3f1a1e73"],["/post/54778.html","e8475541515aea273a5b6e4da8eaa2ca"],["/post/5490.html","aa47bfbaccaa4d4b06085be566ddafe9"],["/post/55046.html","fa3a1d3b08eaddb8f1a9420c4ac6e0f0"],["/post/56929.html","17b7ddfe51f481622f024c7e19b2a687"],["/post/57339.html","e508945973920900b8abff39900d9ca0"],["/post/57449.html","d2fe337c7cbdf680026478fad2046081"],["/post/57453.html","606f89392a0e6ba8844ce729b0d64ab2"],["/post/57671.html","40bb8f248619df08d15b05ec10119d2b"],["/post/58313.html","18a51dcafce8e0283c04c565b65d35e2"],["/post/58481.html","78f1ef89c62428ae33884a8a15aa67aa"],["/post/58986.html","af4d7da4e78f9ac844ec2564c4ad573f"],["/post/59431.html","f9efea4b12e0a76b4ddc4677c9df2a7d"],["/post/5951da65.html","5ef3773aa9f94c9c08ad39e120395a7d"],["/post/5be7e977.html","588013db41c6c77dd3503694f9d5e91c"],["/post/5f9e4eff.html","0f727d6cd5aba06f1a496e06d02599fa"],["/post/604b49d0.html","a65135b7381957e13da757c79c938515"],["/post/61312.html","00190f3bbbacd8232aa999bd44555406"],["/post/61738.html","a4e8188f5200999c6fafb5f3acf768ec"],["/post/61809.html","fa7e46589e049b8ae19fb2bbda451e83"],["/post/61eaf19a.html","8def81df0cc03655d25a65b3e88f40f9"],["/post/63002.html","2aaa33b42277741a180384f9b93e3fa8"],["/post/63711.html","f69635084f67b401e65ca263fc93080e"],["/post/6587.html","059e2e1381d0b0435af94569ce7e628d"],["/post/6589.html","1bef638332f2cd9c79a88f5e9073b578"],["/post/6880.html","4a14f5059fe35b09fbbfa9eabc45eb02"],["/post/70263071.html","c1519f3de795dfed8260610aed858ef4"],["/post/71038564.html","28819d3110f05885d61ece5cb91e61eb"],["/post/7119.html","70040e1fb7fdd68d6be9fbc5f604e515"],["/post/74e7fdff.html","4ed138e1087665a760e6be84e881b482"],["/post/7502.html","71993146e49fdfc651ff3dacf02484bd"],["/post/7564.html","40e0e6dea95325c6491ec79ae135da84"],["/post/766f9b60.html","e19bbdde43797155464696abdcf49913"],["/post/7ca31f7.html","9bcdc0435bbebbbe67735a8c41bf49db"],["/post/7d1c86da.html","ab098265749c582547d3c09622450c7f"],["/post/7f3bcd7f.html","1aadc8398852955dec30d62abecb683e"],["/post/8039.html","bc0f77b65c33f38046a124bb3306f182"],["/post/8050.html","e35ca47f890a21b6f8a60ddfb4753496"],["/post/8072.html","ebf435acc426f4a953a74b1f9a8a0345"],["/post/8274.html","63e813f92575d5574811202f0de3d63a"],["/post/8372.html","dc2ba7424c0b046c7620353cf0ec8a1a"],["/post/8498.html","6c6ac77215c6c91568f2cd4f10d6f18f"],["/post/85b4e13b.html","cd3d3137abec2a48ce5e55dfba71e2ea"],["/post/912b2566.html","dca4c14734c39cbb70272c463ebbc676"],["/post/9187.html","877111ec780bfb7952969c3527471ac0"],["/post/9197.html","dbef8c346846dac382f459abdcaf9271"],["/post/94ceb2fd.html","aefe90f4cda80e4ce6696882317b4f36"],["/post/95495db.html","f108d9ed2e8cbbd350f241a6a296047f"],["/post/97246020.html","27245aad770caf59353429275bab4d8a"],["/post/a3a786d6.html","e2a6d2f5ed87db292b43766c1ac6a548"],["/post/a444b428.html","b03d24ebee441e7d9df3cb6aa8bb1527"],["/post/a50b8908.html","f313532b78479a304f88c6e8415e22fb"],["/post/aa1eade8.html","26d25bfb7d86d6bf3f3c80573213852a"],["/post/ade8c6d6.html","40bf22d08e2823b26bcb11350c69b1e0"],["/post/ae8362df.html","bde700f0a5ac7a955b7f4bd732a68113"],["/post/b4c1d206.html","f45f72c8700bd3c1878d3c4ec308aa8c"],["/post/d431fab4.html","5501dc255f247f9c7c4de1eb805019c0"],["/post/d5381517.html","be343cc4178b6ebb82434234ec519433"],["/post/e058ffd8.html","b0336fc7b12ae7b0a289f0e182aca9cd"],["/post/e0f8cb74.html","da718647f752c94ce1b17a840dc7ae36"],["/post/eefe591f.html","38d8102362ca15ae527aead41d519f9c"],["/post/ef296a07.html","72fd99eb715ef95ed16862bd25807b1b"],["/post/f201f9fd.html","0645935f009ecebaf558347346b60b2c"],["/post/f79e4123.html","ad853e0a1391f387d99646b3d74e00a7"],["/post/f8648a1d.html","d640d7a5868eeb936c6199830b5e89c7"],["/post/f89cb603.html","86022138946425b29a7a195c933c48e7"],["/post/fa288682.html","fbffb1f517ccddab2a48330705b91f4e"],["/post/fb98053e.html","7f6b4a1d774746fd28d4fc9e2dbc2911"],["/sw-register.js","cbefec46be923fc4271331600f19e2a2"],["/tags/AT-T/index.html","3ffc2efc72191f9079b3cb5ae0496829"],["/tags/index.html","14865dc99d10ae4f714adf043053d807"],["/tags/动态规划/index.html","708cbd6b2e2936bd5bf9a8d5fb43eee0"],["/tags/字符串/index.html","f294016283dbdff0f7f1277a9bbf5453"],["/tags/字符常量/index.html","6135a9803b05636a6acb6583603206ef"],["/tags/快排/index.html","950a0d830a5546c6bd1f62e42a6b5541"],["/tags/排序/index.html","6fa468eb59082bb04665225f77b5745a"]];
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
