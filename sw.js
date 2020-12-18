/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","e0f0c53de748a9e0c551592abdc8e0d0"],["/archives/2019/index.html","7e0a6f0dbdf86dbaf1a4b71cd8d323dc"],["/archives/2020/01/index.html","21e9281ce7e67dda26677752a0a6d724"],["/archives/2020/01/page/2/index.html","b632e1e6a6be3629f7d838c176a20a7d"],["/archives/2020/01/page/3/index.html","a19174d10683f47f0f2e1b3519beaea8"],["/archives/2020/01/page/4/index.html","ad93ca0641872b90c13b310e02c77a34"],["/archives/2020/01/page/5/index.html","ef5063b52b098748c7b0a58ceb1d796c"],["/archives/2020/01/page/6/index.html","5ec8cbb3199d578bb170a63cbe0d6dc7"],["/archives/2020/02/index.html","1a5bae011e0d652fe44b7b2de88428e7"],["/archives/2020/02/page/2/index.html","db8f48ef4af38a1f5cfdc42718e590f7"],["/archives/2020/02/page/3/index.html","73061a81da830e7816d44aed477bfe57"],["/archives/2020/03/index.html","a0a6a4857dcf80a7ec2f96288543f4ab"],["/archives/2020/03/page/2/index.html","91c02bd04266a6937e5808946e995cc1"],["/archives/2020/04/index.html","8cdd588291b5a35ccaa1084d889d3bd0"],["/archives/2020/04/page/2/index.html","ffce791766c3834e1189c9248dc37233"],["/archives/2020/05/index.html","4215590d9f0e84c8a700556a4597c2f1"],["/archives/2020/05/page/2/index.html","13d9370b79d6bc9a5d00c0ada0b2ad51"],["/archives/2020/06/index.html","6ebbf3cc4feac8e0a0949297468c9872"],["/archives/2020/07/index.html","3842febe325312c29fe1c6a5045000a6"],["/archives/2020/07/page/2/index.html","d672d4683a8f0b6ea030380dc9baa5cb"],["/archives/2020/08/index.html","c7a31c4a72133c8b515cd972961de1d4"],["/archives/2020/10/index.html","55438108b3eebc5c9934c515d7f9c486"],["/archives/2020/11/index.html","fa5fccd378de70b0492af86acef4b3fe"],["/archives/2020/12/index.html","ccef299869aca1854ee3d6c17e1e30ba"],["/archives/2020/index.html","42ff0cf0159e331acba634c08b6c6f5e"],["/archives/2020/page/10/index.html","8e1775dce214170c776dd3b0aec7fc06"],["/archives/2020/page/11/index.html","d0a1c38959fece6e7f66cbb1974d2b0a"],["/archives/2020/page/12/index.html","a7d26ccbd647a56ce6e0263cde8deb0a"],["/archives/2020/page/13/index.html","9d8f1abba6482b59cb83708a5b835957"],["/archives/2020/page/14/index.html","9b28e1d5ad5520b716882773c79011de"],["/archives/2020/page/15/index.html","11e9d22a7c21b6494a6de9ca3ef47983"],["/archives/2020/page/16/index.html","9234393e6157e6552da64243b6880dc0"],["/archives/2020/page/2/index.html","acc4a5292dc46e4332fbd66426d77841"],["/archives/2020/page/3/index.html","1a6f8237e2ca1b05329a110f592d20ea"],["/archives/2020/page/4/index.html","b3241f6a9376c86edafe87628da4e3ed"],["/archives/2020/page/5/index.html","3636e2e27e869aa1a469167a36a0fe40"],["/archives/2020/page/6/index.html","70645cc02e0dd29f8e7cc9f7e729660b"],["/archives/2020/page/7/index.html","5ff12185231edf840330c20bf58b3ff7"],["/archives/2020/page/8/index.html","edf0dcc279d72e418f315c970aa13ae8"],["/archives/2020/page/9/index.html","e8ea7d657b4401f6edbce4c468e1953b"],["/archives/index.html","a72c166e1419fd92c487e1118a78afdf"],["/archives/page/10/index.html","092b898d2b5ca17ae8bd2de5c3431517"],["/archives/page/11/index.html","a30dca5454f01238b53a5dafe4989ce5"],["/archives/page/12/index.html","b9266cf993df04b672dea15cf5196155"],["/archives/page/13/index.html","6c8ca7b246914f0530903113ee51721a"],["/archives/page/14/index.html","495bf6776c3bc735afb233cac2f7e3b9"],["/archives/page/15/index.html","53d1c0952c1bed8c276a3a205ce26f55"],["/archives/page/16/index.html","1b3c9a5083078dbb73904c659ea9aa29"],["/archives/page/2/index.html","efce339453fc5d36d5049010286693c7"],["/archives/page/3/index.html","e1cc3f09b47744868fcc953544cc5d48"],["/archives/page/4/index.html","3d0bcaa6c813d6cfe4ced69e8f364e9e"],["/archives/page/5/index.html","78bc3a24dbb6de44f28a394accd612d4"],["/archives/page/6/index.html","e300f59e7053014b2c52907ea78af691"],["/archives/page/7/index.html","646625f4210c10debf7e02a3f3df60e9"],["/archives/page/8/index.html","657ce2240b597c88a887f8d831e60c8d"],["/archives/page/9/index.html","bb4e2c021ce51d33826ea09522bead25"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","8d150081cd300c275e357de9405ca6d8"],["/categories/Linux/page/2/index.html","c265c53ac6bcfbcfb659e53adcaa8c75"],["/categories/Python/index.html","b4adfe79b9db6cab31e70031154cd93d"],["/categories/c/index.html","4bf5f493e222a363584caf8934731fd3"],["/categories/index.html","f0a0316d0139d48113eb95263ebeb207"],["/categories/java/index.html","7095720550a7390247ef09c047f639f7"],["/categories/java/page/2/index.html","95559d7147365dc3dc1f2456f6659a27"],["/categories/java/page/3/index.html","7f9d767ff9ba36652166c26c6d5020c8"],["/categories/next/index.html","dee8a4142576de65982169627e430b30"],["/categories/stl/index.html","0802228ea3ef82d93ade2cadfd58b7e3"],["/categories/windows/index.html","36c396266cbb79f3b73f15c914343aa1"],["/categories/基础/c/index.html","d23780d5ac8c585114516d962259b7a0"],["/categories/基础/index.html","d538db5d72bed259c1d764be8be00845"],["/categories/基础/page/2/index.html","a7418cd4d312a8535dededacc740025b"],["/categories/数学/index.html","143bcb93f3cfffc67b9e94d0c36eb5a6"],["/categories/数学/概率论/index.html","44779fb391bc0fcba34ae574e39c69b4"],["/categories/数据结构/index.html","c7a6d8db26247e083a0a9099a13f0735"],["/categories/数据结构/算法/index.html","834e68f80f89c524ce4ce63e3c587179"],["/categories/机器学习/index.html","2d91fbb391cb7f179e282e653cab5c2f"],["/categories/杂项/index.html","065bc9abbf7c9f751aedb2bab4a7cc80"],["/categories/汇编/AT-T/index.html","26a90d75fd4bfba1b2f94e4af57e1a24"],["/categories/汇编/index.html","ee54de91711ba81e1bdd02fd19d03d47"],["/categories/汇编/page/2/index.html","6b8408482aac7a14f0537a07613a7f23"],["/categories/汇编/page/3/index.html","d86f1201eb236bdb4dcf5881e07b8f0e"],["/categories/算法/index.html","c60dd49422f8bf466f2315d40edfe418"],["/categories/算法/page/2/index.html","4a5f02e75f8c5fa4667b13d81cc9ae55"],["/categories/算法/page/3/index.html","fb19a33ca349730d4764084c4e665715"],["/categories/计算机系统基础/index.html","6898a86d341359fe424c324fb1cc5640"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c4903d558783e6d0d618e311f16273eb"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","5fc3afb89a49c6b1d6bdfa817bdea345"],["/page/11/index.html","cc873d8c7e3a51358c4256c07d6deabd"],["/page/12/index.html","63ad5e9d3f8014b1c759dfe153e1095a"],["/page/13/index.html","adb153a28309c62429047c843427a7dd"],["/page/14/index.html","db6a445cdbbd0469834a930986dd4e2d"],["/page/15/index.html","fd6c89141420cb98e73003e15dcc0b99"],["/page/16/index.html","65ff06b31fe98e456a6d666a5cf96ed4"],["/page/2/index.html","aa35dd865593ba74ac87f39dfa3d87a1"],["/page/3/index.html","39b7e41ab3e1b9b63909c00e46ae7c1b"],["/page/4/index.html","3c29815de59843bc306d70842562a962"],["/page/5/index.html","debabb01842a2709a32a33d96682035d"],["/page/6/index.html","fd2a9c7d70a364be7603de55c843184b"],["/page/7/index.html","c03bc01b59de39a3b02efc2d60b93ec7"],["/page/8/index.html","2a3c80fabcf0f6fcb26fecd8b0c98be2"],["/page/9/index.html","dd57eed63c53c72c120bf75e74974b2d"],["/post/10919.html","839c31929bf50f956d21537886177de1"],["/post/11051.html","8a683387a4640fa3ee19b349504628be"],["/post/11306.html","6f7cb0549c8c7f57a536c06900888b73"],["/post/11491.html","033ca2bbd19eb1cfe397da0f4baf5c0d"],["/post/11799.html","967bd92097a4a8fa03d5c361062847fa"],["/post/12334.html","4b783dcbef312f5592f810eae6989733"],["/post/1326.html","98dd8b9a8b375c4e6815ddbe4bd1101f"],["/post/14379.html","def89f913a6f1c670d50a28527e0ca6c"],["/post/14511.html","64fce27d746718ff87d36e2b54fcd293"],["/post/15201.html","bbd540482cf59238fb8f25aa96ec6c66"],["/post/15425.html","d7ff2154103bd4224ef7fc94f1b996d3"],["/post/16107.html","9ace781bb8b5d1a6d81dc81692def762"],["/post/17862176.html","23f4631a7ead59512f6eeaeebc984f7d"],["/post/18431.html","72b56682417d2de4696ee0da89e8029a"],["/post/18912.html","dd8929dd9ff6b516b3c4f8f14c52f703"],["/post/1b9c8662.html","86ddb75894eb653433325222a209f7fb"],["/post/20198.html","d99038bf0a203ba6fb87f7cf0ddfcdfa"],["/post/20ff5ccb.html","daf6421050b30e46d8677c020d472f70"],["/post/21624.html","2cbe94f69a077e23cb5653b853394507"],["/post/2170659a.html","8cbc6b8ad7f895fbd2e66e25a1d533eb"],["/post/22102.html","0d6f6602d7bfd53e36f6f9ee80a81a06"],["/post/22493.html","5744729824bb7f5f953fca9be9476884"],["/post/235252ea.html","5fe78317c3c5b9408bd182623d3555df"],["/post/25699.html","9e8181b9c734826852e106c5bc4661ff"],["/post/2647.html","3888eca9a297ade2c16eede854a0526f"],["/post/26477.html","89be6884d9c9cc172e873c45052fd01e"],["/post/26671.html","3f3c385ea70fb10cac09f78f47c671d9"],["/post/26737.html","a1f093d88a61ca6c9995b1171d64bf09"],["/post/27045.html","4c614b304d294d0acc617221c21ef338"],["/post/27621.html","8d90bf7bb34342ad70ff436551b46781"],["/post/27890.html","778f661137da8770cbceb5b4e0581654"],["/post/27980.html","2bc25fe758283f06df9e6af188c17758"],["/post/280b588e.html","cbc94928018727ed1a2ae5ab5f1df844"],["/post/28579.html","336e6ae8ffb50120ce49a4481fcf1c21"],["/post/28877bf.html","75806ca141a85538df4967d1b73aa049"],["/post/28954.html","c73cb2a8a7c35bd53eb0fe8192807409"],["/post/29378.html","3b5d2c1e3505e15cc772ece183584775"],["/post/29949.html","7e7cb95059e7e55ee4549ecd0d47027c"],["/post/2ae43b86.html","3b77e7073ddc34398ff61a4e6fb475e9"],["/post/2ba82a45.html","c42dfa4057c096638cfbffdbea58f91a"],["/post/30072.html","8a8b8a3407c941bb92fd058b235cacfc"],["/post/30479.html","92355fdb8304f9312f76ad085fc9da49"],["/post/31a6b40.html","dc3903b878a6f039fb59cd558a7f94f4"],["/post/325cdbf2.html","362415b6cf428b35b77876dec22a4696"],["/post/3319ed9a.html","ca1a04c74968c0e682203801b5e312fb"],["/post/3320.html","e89c6383adbaa9e1de394d55115ec532"],["/post/33cb1151.html","c9a26ba0366c20c7dde6f84f5b7c20a8"],["/post/34811d5f.html","49e800bab8a9fab97357c3185c21cd23"],["/post/348d4e04.html","f42d13c74058c55224ccf83d880016c3"],["/post/3526.html","821dd89d13b2ca8550081b366811a03c"],["/post/35532.html","7f79e38b59dc113a599ecb23b329a173"],["/post/35848.html","c7f3579a259fddf5346a9812b68496cb"],["/post/37318.html","14dcc163c366b0ee5bf108f9ba10da00"],["/post/37663.html","c0321788df5ca19571eb0d3aff2ae6e9"],["/post/38035.html","b5d6737fd8b7aebb662dc77fbd8efaa1"],["/post/38072.html","8bcfe30816933ee38f0860373b28adf9"],["/post/38145.html","a8c3bdc62039e4abd9dbc018ddb71b3f"],["/post/39968.html","9c4e07a611aa173644174d59037eb3d1"],["/post/3de4bc69.html","f6e2f28b06508e0d9ef5f1e4ef3c12cb"],["/post/40583.html","060f59963fadcecc7865b85c6f68b3b5"],["/post/40997091.html","5e6ce99eb9a2fe29be3e4fc052ac8896"],["/post/41129.html","8d6a02bd31eb93d54e850b8d91a34238"],["/post/41763.html","1a9f89086bb50f7dad857928f36762b0"],["/post/41829.html","456391d2ca8998e14512616e98e21595"],["/post/41840.html","e2035233504ebb2d6d8680b243df8bd6"],["/post/43817.html","c5dc766fb9d39bc4d7f3effc307ef5e3"],["/post/43878.html","7fc8b9e2c8f8b32e02036113eed2064c"],["/post/44250.html","1b456b8d208e74cff06b0e448c6eedb9"],["/post/44336.html","2ab2b1dc497c90b0e31f268eed5ddc16"],["/post/44454.html","677a7002dda6ec608a92fefdfc7330ce"],["/post/44487.html","5ef70b7bba41ce8884bc55871d45d411"],["/post/44914.html","513b5d3b3de5657fbf04de6c543ff2df"],["/post/4551c130.html","ee9a977e9052580321c3b64033b685ba"],["/post/455a4c92.html","5748df7c60ae16140f109f5bfd75f75a"],["/post/46466.html","d1a7e957bc43b3abfede151b78f57994"],["/post/46925.html","053587f2bebd13d53fb278ebee8df902"],["/post/47075.html","a68985cc1feb8d775754e6ae1fc18f82"],["/post/48220.html","82114ad16b8411b455a0f595a6ae36d5"],["/post/4b1879e3.html","b156bf2387ae40fe9b162aaaf223dd2c"],["/post/4c720881.html","d90da253ccdfb01302abcc6de24e6811"],["/post/50daec4.html","15282339baf623547ecd934c35df8d4d"],["/post/51491.html","6639a50b1c5055e0af5d062fff1dbc47"],["/post/51e63dcf.html","64938feeff565624a7f588ea16a070df"],["/post/52078.html","693d95761ebb4a60ff1d518b11df20fe"],["/post/53677394.html","44fba0f0fb5396d0a25ff593624cddb1"],["/post/54300.html","21924feeb7d2430cb83791776125c2cf"],["/post/54612.html","81212237d24d522326618232f457e4e4"],["/post/54613.html","06cd67a0862391ebbbfed08be6b5c9e2"],["/post/54708.html","4f3e2b0544f150c0650530f55b353b1e"],["/post/54778.html","5a0f617355f7b2717abd72356c584545"],["/post/5490.html","490d2fc276ad36d8fe810778e69c8f1c"],["/post/55046.html","43dafc8d31579cf13cf8863aeb573d71"],["/post/56929.html","feea600185e60b60bf2f536add94aa37"],["/post/57339.html","b2578b81b7503eb079f9cd7ab6b842a3"],["/post/57449.html","f7bf074e9906d33bcc5629125b3d0d19"],["/post/57453.html","6b6331a93bea5c4cc9e115dcf549b9f0"],["/post/57671.html","929715e391658a3ba53fd8c1755773a3"],["/post/58313.html","f5ee8bda920563869952d0291d6ec807"],["/post/58481.html","d675cebef6ce3b8b42c242e9e33f71a2"],["/post/58986.html","a437ed229c19a521bd362e8f841724ff"],["/post/59431.html","67ccd4d9a447064d06e49c4fa9355e0e"],["/post/5951da65.html","2d47851c44ddd60b02b13a811201c840"],["/post/5be7e977.html","7a078f2e8e3e64151e77fb1d2e504697"],["/post/5f9e4eff.html","73206673386c76e6ddc11538e3bf1ba4"],["/post/604b49d0.html","128fcdd877b1b8609fac9b3e0b6dc82e"],["/post/61312.html","36ba9be13f1b4f16910f53cf12edebc6"],["/post/61738.html","f0c9e8dfebe1d71c98c0b34ca351648d"],["/post/61809.html","eeaf2970073082b3a00d0785d5d75f50"],["/post/61eaf19a.html","94cbcca9f4fc3e8a4ac7c05308c1aa6d"],["/post/63002.html","a9cfb70006194f11cffe65747a558822"],["/post/63711.html","2b06c8bdbf1b8501c0f265be2908f753"],["/post/6587.html","08e06e4ec33be7c17498b3f4cb3f40da"],["/post/6589.html","05bc727693d0dab7d38b0c17f3abb908"],["/post/6880.html","e69134823d99322418c44b6a485f1e45"],["/post/70263071.html","3d3dcb75355c731d57f5bd54cc0cb38e"],["/post/71038564.html","6429ae325d1799acc110ac94883d1ff9"],["/post/7119.html","0f22cc7d22fb1cc222ff02e8d1ea255f"],["/post/74e7fdff.html","9b0dd570a2eae4a84febade30a3a211d"],["/post/7502.html","614ddfd7021fb9de553cc2be3bfe6c0f"],["/post/7564.html","218abcf4c7fedb0a937baa80db715e54"],["/post/766f9b60.html","1d9ae29508581f3266145cd6a19df6de"],["/post/7ca31f7.html","e9819576e3f0a56ef45d776715d66f36"],["/post/7d1c86da.html","764ec599921ca1d968236eb107ae96e2"],["/post/7f3bcd7f.html","d20ebd9a84997e8399211a9688814723"],["/post/8039.html","f3c95aed19ed234c4f1914cfda472260"],["/post/8050.html","7ecca0dc245b3a01cb44826e8589e2d1"],["/post/8072.html","01e5e5fbc5f4f82bc02e7b3894fe6c26"],["/post/8274.html","fb3aabcd560514cd324b46b6f1880563"],["/post/8372.html","c5720de0ec763006ee15f4865e5ef69e"],["/post/8498.html","ddf201e693532a2f662687c7e1874e7e"],["/post/85b4e13b.html","403905ef770943382a376cdcdaa80385"],["/post/912b2566.html","22d9329ccfe6b2d6a91808f2c21aba5c"],["/post/9187.html","239ba31bf5507c92c368946a2491c71f"],["/post/9197.html","f4fde3bb0adf724aca4f43ebced447ca"],["/post/94ceb2fd.html","0889119ad2dd4e7bab0212f17a36ad76"],["/post/95495db.html","af830dd0df228aaedf39b1118e101696"],["/post/97246020.html","7ed72f2e533bc522319d175374ab454d"],["/post/a3a786d6.html","2727fa11933fda01cc513ca4c5dd8cbc"],["/post/a444b428.html","a5aac7b349fc1a623668b4640c3f79a8"],["/post/a50b8908.html","163862f458fc014a2c0c9847cc797c7b"],["/post/aa1eade8.html","3e2ed16209cd88dd69c85198397385d7"],["/post/ade8c6d6.html","792d3236f4b732f1dc1fc27a5b094954"],["/post/ae8362df.html","296b5a1c29f0c895666feca59eda6e2a"],["/post/b4c1d206.html","c1e03b6ea2695fabebc26f02e02cdb56"],["/post/d431fab4.html","fd4b8e35f93ef382e514ce57a7a36030"],["/post/d5381517.html","43b114dc59a8f4609cc0ff19f7e24f69"],["/post/e058ffd8.html","bfab08cd8b1fcf63b2a3a727941ab9c7"],["/post/e0f8cb74.html","e8362362f1caa1e64271d1fdafd59631"],["/post/eefe591f.html","11e5e48dee2e4a95869a64432fb473b8"],["/post/ef296a07.html","5eab74607c6975d5c33a6ae53ed258fe"],["/post/f201f9fd.html","ec80b559c4f517e57f8455e506e5b94f"],["/post/f79e4123.html","207311d31f64f6416609f2d3c0878bcf"],["/post/f8648a1d.html","e063a7159fa7dc7e7a38c41e28195016"],["/post/f89cb603.html","e72a9f6e810693382eaf91342c33b90f"],["/post/fa288682.html","91591cf436606e4df2989cef82498ce2"],["/post/fb98053e.html","a353f5985643e6fc97c1402ac0057fdd"],["/sw-register.js","e5ba3c6b57edef25f6c76fc57da3c5c1"],["/tags/AT-T/index.html","bc1fbc099595181ea808bafe97bb9ffe"],["/tags/index.html","d4aebd0f903ffa32eec7609ad457e499"],["/tags/动态规划/index.html","eece51460eb80acf5be2b6fbce7d7ce2"],["/tags/字符串/index.html","b4c8423db0e557d125b9a72793a5b727"],["/tags/字符常量/index.html","eb9ff5e951764ab7985b7ea04c249c6b"],["/tags/快排/index.html","bd4811e14b4331f21b6abf7bd72f7f67"],["/tags/排序/index.html","8f6fa4e811e03626ff571a48313465f4"]];
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
