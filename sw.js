/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a4e1797ce4cb358e56961de59e1f2cbb"],["/archives/2019/index.html","bf2759cced7ef7eb7d49cbadeb3abbe8"],["/archives/2020/01/index.html","a9423c6b842d4ff3a2426dc4628aa074"],["/archives/2020/01/page/2/index.html","6942fc9b2e027a75600e0d160cb019a2"],["/archives/2020/01/page/3/index.html","a7c171e523e28689e1644238f991b080"],["/archives/2020/01/page/4/index.html","b506ab904474e7a56ca7d4fdbf993a05"],["/archives/2020/01/page/5/index.html","5a704f3216116cab458b804f4e81a360"],["/archives/2020/01/page/6/index.html","fc263bceef276a5d1f784e9dfe7943ea"],["/archives/2020/02/index.html","93790edec6aa1ffdce4abae6c17a2c88"],["/archives/2020/02/page/2/index.html","d2871ab41428681fb226d931ba197873"],["/archives/2020/02/page/3/index.html","9c0911e6e0671a859e792c70e44f8943"],["/archives/2020/03/index.html","558221730de8799510836ff03745763a"],["/archives/2020/03/page/2/index.html","515783b773040d4624750dffd9bde2e1"],["/archives/2020/04/index.html","12dc14ae411b68cd4ddadc57d12e000a"],["/archives/2020/04/page/2/index.html","bbe070dfc83f9396aca56393fb4aa385"],["/archives/2020/05/index.html","e260a4b1b5ec9b3a732b732fdf1d8e73"],["/archives/2020/05/page/2/index.html","67777bc0b44c393d865b912f3b2e4b24"],["/archives/2020/06/index.html","e9facf2b4638eb463a40dcaf3b04e0b3"],["/archives/2020/07/index.html","5b2455f571c9d6407a93c2a416959df1"],["/archives/2020/07/page/2/index.html","5597305b7530205a9c86945f96aec846"],["/archives/2020/08/index.html","eb304900c83e169c0f442bdc27ba1934"],["/archives/2020/10/index.html","2a5ef4f1f1aa74876c3049a91735f426"],["/archives/2020/11/index.html","eed3f6454f881fc9ee913651793af275"],["/archives/2020/index.html","8ea5a9ac23f6aa3357e8799ec9f6bce0"],["/archives/2020/page/10/index.html","affcefa531275cedbebecf045acf9bfd"],["/archives/2020/page/11/index.html","c28dea1cfb3449099e9399f7f735baa3"],["/archives/2020/page/12/index.html","b77d37769a96a12084af59deb25550b0"],["/archives/2020/page/13/index.html","b3dd25e7d4d7c28d1ed6cc49855e1195"],["/archives/2020/page/14/index.html","a0c0bb6f2d6aa6204bc115292f594dfc"],["/archives/2020/page/15/index.html","d952a8e3962fe00bf80c4dba187e8ae0"],["/archives/2020/page/2/index.html","8f29a253c04aa707e9a8a394ed34497b"],["/archives/2020/page/3/index.html","b9b729bb7d7e9ec937ec0a8bb9ea424f"],["/archives/2020/page/4/index.html","b0a4eb9b755e609dfc635c7db2ba4aeb"],["/archives/2020/page/5/index.html","1d5008436072e39388f5e4bf37927de7"],["/archives/2020/page/6/index.html","c8b083ed86b0385485080e836a264d76"],["/archives/2020/page/7/index.html","6fbdd170516552b1173e8592aa2e7280"],["/archives/2020/page/8/index.html","148fee9c00d791861eec83de0fe6415b"],["/archives/2020/page/9/index.html","e96074e46e0d51781ab9c11902236ca0"],["/archives/index.html","09248e540ba77d5e07cc465ec3337878"],["/archives/page/10/index.html","3b5b29257312dc2ee1814517e1da5ed5"],["/archives/page/11/index.html","80770916f6526c3fde64e86a04375453"],["/archives/page/12/index.html","a15a18836e7278b32d4e77d35c0bd7c2"],["/archives/page/13/index.html","4adce4c32cd1b9104f473b85305a50b1"],["/archives/page/14/index.html","959c76dfe0d8210e6e63851811a62285"],["/archives/page/15/index.html","58dcb0f3ef539980c902641b04840b1f"],["/archives/page/16/index.html","83c1704a0292b6ca45112e741ff1c8ce"],["/archives/page/2/index.html","ba63791b13a828d71519031e56123a0c"],["/archives/page/3/index.html","214930e8a7be6c5955bc574c51532dc2"],["/archives/page/4/index.html","b2952da96277b69d37229e994ce23753"],["/archives/page/5/index.html","60a300de9585b84c90f8b7c9c6d5b37e"],["/archives/page/6/index.html","fef4b3af83ff77ecdbec93319c4263a9"],["/archives/page/7/index.html","1f1a9bf409669c3c08278330ad4cc015"],["/archives/page/8/index.html","e42b7d293e60cbcac573edfe3124459f"],["/archives/page/9/index.html","7bcac92aa45866989d1e310f96902a52"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","ab86312b79a8ae5d68edaa42c7a76a95"],["/categories/Linux/page/2/index.html","1648359f24517a6b7a8e4a5b4fcc66ff"],["/categories/Python/index.html","1a46e03f4bab4c5358f2f42381f5ae6b"],["/categories/c/index.html","0375d09d1c1201b860516970a889eb94"],["/categories/index.html","551a39a2048e2c2fcc394647fbb423e5"],["/categories/java/index.html","ba4d733553f79bdfbb2e8541b5a9e57f"],["/categories/java/page/2/index.html","612730ba9a22129f12dece3f3d076796"],["/categories/java/page/3/index.html","bdc6a36290e594c92b9b8cd97259386c"],["/categories/next/index.html","c90b5044498239de9fcf134232ad9f1c"],["/categories/stl/index.html","a1ed7ec146e42d4c2483fba371040f9a"],["/categories/windows/index.html","2cb9e82ead737dcedc3a9b903e91b11f"],["/categories/基础/c/index.html","607fbf95d5f11e724a74179ae2edeca8"],["/categories/基础/index.html","6b1eaff0ff1f3db3f6ebd8398f843a8b"],["/categories/基础/page/2/index.html","0d189804ec19e2f923e19380bceb8270"],["/categories/数学/index.html","c435fa6cee45dd2dcea42156d712eef7"],["/categories/数学/概率论/index.html","44a77bc4e785b00f3a79c032439f31d9"],["/categories/数据结构/index.html","a7908fe0453cabdeb6a45003ef794f5b"],["/categories/数据结构/算法/index.html","a968487ac599667d1bb776bb2e81f0b7"],["/categories/机器学习/index.html","1d1d1afb49ec4e34db9d0d9830de2226"],["/categories/汇编/AT-T/index.html","53628f5a2d01b9f303bf5bb8d2ef5e9b"],["/categories/汇编/index.html","46bd2d1f680866e59c45be1179e03d7e"],["/categories/汇编/page/2/index.html","99a7d2d3c0877c73b9bc90ba468a84b1"],["/categories/汇编/page/3/index.html","0cc27e5e0f289a7cd15ad36b05fe4e63"],["/categories/算法/index.html","1839d318076dcb82b620930cd0f3cae0"],["/categories/算法/page/2/index.html","e63aa7ef72bc13e72811a69a13dd495d"],["/categories/计算机系统基础/index.html","c4ad852d52eecf7481398a301e22b6e3"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","af1b5808ee8fc3f80abe878b11208447"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","8b169edcdf4e10dfb4dc6aac413dcbfe"],["/page/11/index.html","70b62593c5291a2d55361e2b32ade1dc"],["/page/12/index.html","94319228088ef37ef6674bb0b22dee7f"],["/page/13/index.html","402b9b80138e0d863d1d27fc803bae02"],["/page/14/index.html","5d97e2eb3f1bcbd3dbcc0f0d11f9042e"],["/page/15/index.html","4f4e1e3a1b7fe5b2cf331c76a1321de7"],["/page/16/index.html","7e12f5ff390c8e7efd8b0ffacf80a28f"],["/page/2/index.html","13bf9ff88dace298d9b5474ef91d02e1"],["/page/3/index.html","d5beef95acab92f037e4db45d872c47a"],["/page/4/index.html","cddc5c356acb192a9526625762a1e52b"],["/page/5/index.html","e6493b28e7384eabe0aca4b097c3983d"],["/page/6/index.html","8dd8030ec3df9459ca26acc211e136fe"],["/page/7/index.html","9180798588ab7e430fc71b7df8db1c03"],["/page/8/index.html","a17c0a0bda89a387e5312907fc72f715"],["/page/9/index.html","6fd0ba4e6042cfdc43816453290bf8df"],["/post/10919.html","1a00030b5bdb84fd0b35d9f9e1086829"],["/post/11051.html","f6651aa373ecc4c956b8c8fd00065f24"],["/post/11306.html","fd9497f9c1d9234177d5a72d03642677"],["/post/11491.html","b6ec1c3144eba74e60f96258f70afd2e"],["/post/11799.html","f29d152d9906b5eff7cf60d5034815d4"],["/post/12334.html","758bdd65b07b512570841a7226398e3c"],["/post/1326.html","4f30df8fb6c9307d71fc3a02f7674c4a"],["/post/14379.html","c96e1d269f3d96b5b6641efa64b62def"],["/post/14511.html","e98d4afa01cf3999edc88e42cdb29c8f"],["/post/15201.html","167a798acb84d72b476da3fe04934052"],["/post/15425.html","e309347924ee05f7aaa781904a48b90b"],["/post/16107.html","45ab6e880559e4f4f84bd891ac491067"],["/post/17862176.html","12788cba66423933bc42259fbc70a295"],["/post/18431.html","49f60e246617be9bb61a23301f5a867e"],["/post/18912.html","8f720e9dfb5734aa9a1c58c88af63018"],["/post/20198.html","c7968c834c7f6c5668fb564e246bb5ab"],["/post/20ff5ccb.html","77cd8dc8fa27507d0df22b38ca142a61"],["/post/21624.html","d3046db58a4195d8ee417f26437ae437"],["/post/2170659a.html","05bd4cdc3b3aeba6b5918d01a189ca57"],["/post/22102.html","b2b771c04cbaf53a5c5d3328bfa0bf2d"],["/post/22493.html","c119a36a6d39974dca371e6830240aa0"],["/post/235252ea.html","eeb1169c77ae36349a399ede7b14e2b6"],["/post/25699.html","569b16259e1ff6915017a6317a4bf581"],["/post/2647.html","c8e489834fcfc487992e3d2a82035881"],["/post/26477.html","1d49ae6588f011fa6465af59c877286b"],["/post/26671.html","02dfeab945c612a182f2d69ccca92ac2"],["/post/26737.html","68af38c1f8bdb4bff2ec28f2c446400c"],["/post/27045.html","1fc05f8e6ba2ea3498bff3227626122d"],["/post/27621.html","025bc98abb46967db2b62e60d7e65e45"],["/post/27890.html","328afa3623f8af75036c0df12d2616a4"],["/post/27980.html","aa20b6361473392473c20e41a99bf7e9"],["/post/280b588e.html","f31cdbe05307cd71a99f8beee03ee4e9"],["/post/28579.html","5c2a39ad9d854fdba691d5b38b0aeeb1"],["/post/28877bf.html","80acdb143d8f5d540c98705bf1ab4805"],["/post/28954.html","e70bdb646d8706afd092bea8248d1b68"],["/post/29378.html","a8a71721cba579564fd1fbbf6c848e49"],["/post/29949.html","60761c2327eb2f5a336a7694f10ed6a4"],["/post/2ae43b86.html","4e7e7488b7994d4ad9ec9621c643c576"],["/post/2ba82a45.html","ee9195c8aacb75c6a588946226c794e8"],["/post/30072.html","2f7bec7375ce890158907ddad4094e80"],["/post/30479.html","711d6850ee13642f427355ab0968d00d"],["/post/31a6b40.html","2ccc3015a2dadb1f63931d16d1aca7e7"],["/post/325cdbf2.html","0d51b6b326a969bfa787206ec6028239"],["/post/3319ed9a.html","870f1da84b7a9a5a122fe3c376f0b948"],["/post/3320.html","3bc6bfc36d296e8dd9e20a1915a7f440"],["/post/33cb1151.html","b8536f3e0672f7a02a43de008d203e07"],["/post/348d4e04.html","86d77b1a884650a72edef5b4020f5918"],["/post/3526.html","385c141e3ee7d251ca1b58129157907e"],["/post/35532.html","12e129e2aed9b5ac7e775a51eadae897"],["/post/35848.html","5c674429e94206d40786329a2997817d"],["/post/37318.html","980ff10a12184bc88af07a0ba3767f22"],["/post/37663.html","be1c9a8e53da5141aa307f2c0ae5ef7a"],["/post/38035.html","51c11be85726f74080b73998bca08596"],["/post/38072.html","e498a8c88f2105270b94b42b3db9a9fa"],["/post/38145.html","4664673266a35560c83aec81b6d45caf"],["/post/39968.html","b59573efb7db67e1debd3e973a36a1a1"],["/post/3de4bc69.html","fba4fe5423b494ed6d1404c6da07ec70"],["/post/40583.html","0677c656c03f5624fade4430043186f0"],["/post/40997091.html","09d75f005bf5981213f0bfff6e31e806"],["/post/41129.html","d940dc25a77574ef43b8bc70237217df"],["/post/41763.html","c4a871880490f17f071e00de75b77a27"],["/post/41829.html","1ff69b18d5db21ed3825d25962e860b4"],["/post/41840.html","7eeaa56e8acfdd401d89b9222914c8d6"],["/post/43817.html","6c0ca3ca6aa49f7b8f2c4ec73eba4b70"],["/post/43878.html","79fc2ab81882bc2cb5d93a59a8775767"],["/post/44250.html","19691c2b0f1d64e48cb7d95a82a377cb"],["/post/44336.html","fe2b24b9c545376472f225479c88e627"],["/post/44454.html","d87c0a8f365cf1b411d662f7092cfda8"],["/post/44487.html","fae8473a1a0189a7e183967c4f092d17"],["/post/44914.html","1fd3795349e34c7e793f7ecda2f66d41"],["/post/4551c130.html","0fe103022cabacdd2a6cfd201567b2d7"],["/post/455a4c92.html","482fa90b76e1f50df6539f74e7204140"],["/post/46466.html","3b723e7c6bf296baf60ad4d15e3c8381"],["/post/46925.html","1f4d3ca7698e319640435405932a5505"],["/post/47075.html","f84025496cda2b3fc869b8df7f6c19cd"],["/post/48220.html","7bed1b8e7af703f3482b8170052f53ea"],["/post/4b1879e3.html","47f83882d674f2dcb28c3eb492e5dbc3"],["/post/4c720881.html","60633958a99a5e478b5a6c00cc60cefb"],["/post/50daec4.html","de9d01fb2ce9f9f1184333866775981c"],["/post/51491.html","39a771b52f2f54f510fd2cd7e7231da6"],["/post/52078.html","839069b36c50befa40e39cf66c822445"],["/post/53677394.html","4553da2948416b1939d800fd2e11b359"],["/post/54300.html","eefa829d2f80bebb929137ac61640973"],["/post/54612.html","647bf63232f760256db65ac658e5e095"],["/post/54613.html","8a0d2096d6b1d4d809baf459b203b11a"],["/post/54708.html","1a3d8df8a4b4a8dd206d439d19926c0a"],["/post/54778.html","cdfa374937d49e4a4e9cd6864aa63b6f"],["/post/5490.html","8decd9a3a44bbd723baa0fad4db05478"],["/post/55046.html","0174f01017643e92ff56e9a4253cb705"],["/post/56929.html","4ced72f4b1c87ad4ef53142323ff49b7"],["/post/57339.html","4a1eef3c6c62fa7ae06fd80aab82c5e1"],["/post/57449.html","b147e9fd38ec5879ddc3be01d64eed8e"],["/post/57453.html","4be517987f9f52c860f5cba4d3b700d4"],["/post/57671.html","94ed79073e14301b43177d00c752f4d8"],["/post/58313.html","d63cca6b48f14e6b5f5c83c1184fdf89"],["/post/58481.html","118f5709909c683ec046ac66a3afc276"],["/post/58986.html","4fb78fb13335a3148df7ea3ffda65934"],["/post/59431.html","b447f60e059a3a6160e09ea0b145a6f7"],["/post/5951da65.html","a780ffaf8004a80388ff4143f65a7798"],["/post/5be7e977.html","b8718564db4d2302ed6a02115f48eaa6"],["/post/5f9e4eff.html","774181e0eae03ab3a6e168425bc51635"],["/post/604b49d0.html","2e931ae9887fc16db3c1fa1e399a520c"],["/post/61312.html","cfaf09a7797beb2f4087a9b77caef9c6"],["/post/61738.html","77403bda52e70bfbd7d82a3bbc2db666"],["/post/61809.html","2082ced7bbfe553e73bbbe9bde56a9aa"],["/post/61eaf19a.html","fb3cb06e742be0105dc8078266792fbe"],["/post/63002.html","f409e557aab08d7ba50989f4b59f9c4f"],["/post/63711.html","1481cd99cdf3e19980dad5ec43e73298"],["/post/6587.html","9cf3ba999881acd007df4b5102705b9d"],["/post/6589.html","a6f14e6db1e0339a521d4325d6177507"],["/post/6880.html","ac9ca12d4b887befe1a9c36f1d13f5e4"],["/post/70263071.html","de8effebb9488a670c806d8b9709b5ce"],["/post/71038564.html","696657f511e1c97aec230d37d8873cb1"],["/post/7119.html","236e3dbc00a99de5b5c4571e4ab4e0a4"],["/post/74e7fdff.html","0ae5cca27429248bca2cdeee4a5891d4"],["/post/7502.html","68157717a61039204f45308bcd849865"],["/post/7564.html","844771eef11adfde6fce1248c9f070bb"],["/post/766f9b60.html","642209e332458dbca32300a661b5f9d7"],["/post/7ca31f7.html","92a9315e3291abeaa31b801ae4d099fc"],["/post/7d1c86da.html","b16f07c7130cc0803140ef4005ffd6e3"],["/post/7f3bcd7f.html","3f54a70e110126eb973297da787854cb"],["/post/8039.html","dd3411d2d73b2a4c3f038e7f0143b3f8"],["/post/8050.html","0a3a9ab240f1a7be6b00053442043232"],["/post/8072.html","20aa9dbae5615ede880ca25421cd54f3"],["/post/8274.html","36c58ae7062b4963d89ff11e21d12dcd"],["/post/8372.html","163858e76766ac057c2842f037294c07"],["/post/8498.html","cb2a78329f223c310bf1f87cd8bdb703"],["/post/85b4e13b.html","ef39099c054452b30fcf0d5008f33ac9"],["/post/912b2566.html","4edb97e9a28f3e1f0ac2f584333527f8"],["/post/9187.html","aba14ea5aa6f2750dc93193a18ec7225"],["/post/9197.html","0fbfb70eb6bf88867827dc152e75ac80"],["/post/94ceb2fd.html","e45c9011de8c4a34404247fb9135e68c"],["/post/95495db.html","3347ee3412e1460be37e4cfc7c9a3344"],["/post/97246020.html","23ad07a734a5b07a98285b1ac64abec2"],["/post/a3a786d6.html","2c643ea1c6a7aa6d3f6d4d9feaf4f31e"],["/post/a444b428.html","cd92cebe633167371e74472fbad02a3a"],["/post/a50b8908.html","a8d366a89ffe92a8130dc3949a3ed87a"],["/post/aa1eade8.html","d2ccaccb8a3c7b88a19061165f7a9a2b"],["/post/ade8c6d6.html","7dd9841d233e983f7a7d2750e1b5d6ff"],["/post/ae8362df.html","2fe5782e552800aeda5348a9530b9388"],["/post/b4c1d206.html","bf122c015993bacd635745c411c69995"],["/post/d431fab4.html","1b1e226cc17a03e6a860d1ae39550ece"],["/post/d5381517.html","5dab0959c4aa43578fa436cf9385318a"],["/post/e058ffd8.html","3b780c33e73b7d26574c23a402454dde"],["/post/e0f8cb74.html","16619c1b00312f759cf6930585cafe57"],["/post/eefe591f.html","a414b3a3e029bf9f37459a95caeb661a"],["/post/ef296a07.html","4fbc441b50b0886379228bfe8fe78994"],["/post/f201f9fd.html","418e61fd6e483fc95e50f3975030bab7"],["/post/f79e4123.html","cc428553786dc3ffc96c20e48df6e656"],["/post/f8648a1d.html","9a506ad83c28bd024f06600612921490"],["/post/f89cb603.html","7a2d72dc31641e1e7bb74193b5de14fd"],["/post/fa288682.html","a1f83a2891ce22b8bfe3e6ee74faa706"],["/sw-register.js","5aa9085422f21445b1315e584a241bbf"],["/tags/AT-T/index.html","abaaca7d3a48ab81da50b0c02af0a5b0"],["/tags/index.html","46fd8c0b49de7a85c0cb9d7862679145"],["/tags/动态规划/index.html","c49e6aa4ec2bfb95e8f3453b6c27bbe7"],["/tags/字符串/index.html","125eed56f5a53ce9fe6cd82419c58707"],["/tags/字符常量/index.html","994e63788aa6759c6d61628e21ff0502"],["/tags/快排/index.html","9dab4682600c9fc73ed332abf48699cd"],["/tags/排序/index.html","0efd7029f6724b165a991b4cf190fa2d"]];
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
