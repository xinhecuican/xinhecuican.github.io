/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","2fe18c2d2637bfe082740cd6b0c0d72c"],["/archives/2019/index.html","b747107a6f7e601b0e9bf5b6b6205a29"],["/archives/2020/01/index.html","d13501f86d5250c3fd699f6d24311bc4"],["/archives/2020/01/page/2/index.html","577016ed4b552d7c6936a3fbbea7c9d0"],["/archives/2020/01/page/3/index.html","f0077e5d465d84f664d5fcd333cae0d3"],["/archives/2020/01/page/4/index.html","c8216e8c0e2c800d3b42008ea6f71b08"],["/archives/2020/01/page/5/index.html","5af34570fe0a87dde24ad98453c87237"],["/archives/2020/01/page/6/index.html","5f5a4009644c507551264951266a92a4"],["/archives/2020/02/index.html","12205eaecfff946770c667d287fb9b41"],["/archives/2020/02/page/2/index.html","c7afb905877f3fe9006531657151d751"],["/archives/2020/02/page/3/index.html","fda2d5bfedfc4c4cc2c6a7f1507b9c4b"],["/archives/2020/03/index.html","5ad1eee982c4ebd8b8a2124e539b9d8c"],["/archives/2020/03/page/2/index.html","6dfef916f4abea5ef359777db6861ec3"],["/archives/2020/04/index.html","948c4a95e7588a9e41126c7be3ba534f"],["/archives/2020/04/page/2/index.html","dc67605ebf3fed2698e52d07a4d6e7de"],["/archives/2020/05/index.html","64baf64ce05d0664d34eabb7eaf5c45c"],["/archives/2020/05/page/2/index.html","05102cc306e7865694226ac51df0fc96"],["/archives/2020/06/index.html","7b58c890cf0215c4e710b8427e554831"],["/archives/2020/07/index.html","02a6cdf0a2c1e22b071cdd13c5f7cac0"],["/archives/2020/07/page/2/index.html","9a17c862085e68f9f9e29bc55757e07f"],["/archives/2020/08/index.html","02ae682ebf66f38eacf6908c9153b5df"],["/archives/2020/10/index.html","09aadc0ad9d2f160f0ca20bccb336b2a"],["/archives/2020/11/index.html","604270b4f2dc5de3799b01fda490d21e"],["/archives/2020/12/index.html","8fb2b5f91b5ecf9c719cd76ba962a7fa"],["/archives/2020/index.html","eebe69ef34139ca2772967f95e469a10"],["/archives/2020/page/10/index.html","aa39a844747ed8afff264cff6723cc95"],["/archives/2020/page/11/index.html","b0dc2d2ac9e159fbd92c44c059be216d"],["/archives/2020/page/12/index.html","d1a6d4ec46e59dd0b600aa275c7dd1a1"],["/archives/2020/page/13/index.html","6b4bc23b1a5e045a2074638a4402d567"],["/archives/2020/page/14/index.html","97954e571f932a92fd320cda1e6be907"],["/archives/2020/page/15/index.html","9de9bb2f30502449de85560afb322035"],["/archives/2020/page/16/index.html","80e10afff56346c2547dcf8c1c1ee558"],["/archives/2020/page/2/index.html","6b3ce122aa11367c91500f31b7356e14"],["/archives/2020/page/3/index.html","d4da24b86594409df1589e088561b3f7"],["/archives/2020/page/4/index.html","f475572088ce84320da00afb51bf0eb0"],["/archives/2020/page/5/index.html","8e68a69de3847787caabeddbc38f8ec8"],["/archives/2020/page/6/index.html","87e9de3bedd986d536d3f1141d19ddc7"],["/archives/2020/page/7/index.html","c36243086b4d09cf1d9f16a6a206520e"],["/archives/2020/page/8/index.html","13a4bd4df474e5e5c210ffcb316c2b90"],["/archives/2020/page/9/index.html","cafe2d6afaf78cce646e6e12b91a62b9"],["/archives/index.html","e893ea2a1a751c5917ce2cd49b92e73f"],["/archives/page/10/index.html","ece9210cdd48b3bb7bd050945f584822"],["/archives/page/11/index.html","0bd239d6038d59ea8ad541bc9d25ed52"],["/archives/page/12/index.html","5e5d065d070976827f246edc265fa761"],["/archives/page/13/index.html","3c191d998fd5e6cb82c4d10c1900c9ed"],["/archives/page/14/index.html","064976c844efb7805d121039acfb877b"],["/archives/page/15/index.html","15e48c3baa26ff977810628b1331de68"],["/archives/page/16/index.html","d42560ae118f866bce101aa88566da67"],["/archives/page/2/index.html","05f1751f9c56f025a79230b9cfdaf4ab"],["/archives/page/3/index.html","2ede60f91546cd19c775f0068a781e56"],["/archives/page/4/index.html","f56f3194e1d6fae8c2527ce291913f41"],["/archives/page/5/index.html","ae2c381351b06896a3386d6bd7cc9988"],["/archives/page/6/index.html","6928d31aeb048dc0c627e46ce5f1a6d8"],["/archives/page/7/index.html","726df2c1365888b88b3a62ec21a806e9"],["/archives/page/8/index.html","2d78d4edaa5368bbe9308eefe3063301"],["/archives/page/9/index.html","d7ca5acd80290a60bbf5eb970d9cc511"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","89cbf00b3d38a69ed3f44c5e62cc1bca"],["/categories/Linux/page/2/index.html","b7170a50a63a6aef511ff2cb8197ccea"],["/categories/MySQL/index.html","a6e7b9cbd55ea35bcc6b5fca27785197"],["/categories/Python/index.html","e602f8dea80a901f2292c5e739f4c82e"],["/categories/c/index.html","86990a0a13d8eac6edbe7fad28cf70aa"],["/categories/index.html","47a7e17fb5bf6bd5fe05526dfc89db8a"],["/categories/java/index.html","99baf4a9f1931873c2d4035b4289711d"],["/categories/java/page/2/index.html","dd6e2df2ef6411a6cfb5f9c268899c6f"],["/categories/java/page/3/index.html","e53af6615b994e938d565babd164ecf9"],["/categories/next/index.html","1c90c6701814927b9bff195247d8ea6f"],["/categories/stl/index.html","7b264d38fbd029639fa1a249d5aaa78d"],["/categories/windows/index.html","e9f38c2be144cbfbee50724b9a55b21d"],["/categories/基础/c/index.html","12b3c8d20888e366db40646f747019be"],["/categories/基础/index.html","912f8a0e40d4eeda4599169447bb9d8e"],["/categories/基础/page/2/index.html","98c1d0d3a49f4c2f47d466b57f080905"],["/categories/数学/index.html","511c28fe3854b56df371351dfc980756"],["/categories/数学/概率论/index.html","192d6b5a4d3faecc534dbaeb4a320a9f"],["/categories/数据结构/index.html","fdb0f1952bc6f83b084eb815531a3d26"],["/categories/数据结构/算法/index.html","96cda216928c6119082bfeb2b3565d99"],["/categories/机器学习/index.html","b943e0c87c3e2f45b074f1e8481de802"],["/categories/杂项/index.html","49774fc2cb8f729981bbce912a93384d"],["/categories/汇编/AT-T/index.html","c485640e3301c128853599a90036dd82"],["/categories/汇编/index.html","09ded3b400da8f171c06d1aa775ec034"],["/categories/汇编/page/2/index.html","438134050f256b87e906a9ed03508744"],["/categories/汇编/page/3/index.html","965aecc3cfc8a81ac1444fb623428514"],["/categories/算法/index.html","bd88f642603396ee6f871612ed67a6df"],["/categories/算法/page/2/index.html","7114fd0dda0ba0f178aafc9457d03e49"],["/categories/算法/page/3/index.html","471a58b3fc55ba080cf143cfab67a8ce"],["/categories/计算机系统基础/index.html","36e5be7e684aff5cdf897386f1a2a182"],["/categories/计算机系统基础/page/2/index.html","578b2cde94baec7cd28474cc689aecfb"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","264cb4bdd5a317bb7c4a14ad1257c177"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","e1e2887356352d88820288ec605eebe1"],["/page/11/index.html","75be4f67ab9047b1410fecf3f3c6834a"],["/page/12/index.html","6d5489189d3ce5b85be281e4027ccf11"],["/page/13/index.html","fab8403f4b1d50fb880a03215551e46c"],["/page/14/index.html","fc80ee614050301e804b18a876bc286c"],["/page/15/index.html","b8b19cde442c63968694f40937139d02"],["/page/16/index.html","a4a939f2aff43c439f06954695aa4589"],["/page/2/index.html","5f0c86568a0ab61dd745bf694e733474"],["/page/3/index.html","917de54d41ee8afb2f968cfd758a814d"],["/page/4/index.html","d0ed7adfd3c647ac6f9dc598b652c6fc"],["/page/5/index.html","90ed07ff7366d7283985e39d29bb4275"],["/page/6/index.html","7b484c7b72f5d2f150a4daaded3df6d1"],["/page/7/index.html","2e702cde2b4b9f5db14d08fb0784b95d"],["/page/8/index.html","3a5ad642d27036f8f6ded3ec00d59041"],["/page/9/index.html","6175a9600aae572cb2d7d42921670bf1"],["/post/10919.html","d6c12d6ab0cc03b9901ae937e4c9f004"],["/post/11051.html","1e57198181dfd2159d36c17c25a2b810"],["/post/11306.html","731bb2c60d4fba33ebe9c097557dab5d"],["/post/11491.html","2f9677f1ca385570e4683e73e1cd04a4"],["/post/11799.html","05609b9b9b4ae03e2e2bb0d0d30e290d"],["/post/12334.html","5b35ca023d625ffdf8e1b4b9c060a8b9"],["/post/1326.html","eba6f0c52b20d762306e5563c41bcc3b"],["/post/14379.html","44e5317ff421fd40797c3e146a041168"],["/post/14511.html","d301f977bb3320ac8a66817bc1db2fb9"],["/post/15201.html","8e060ebd2c5b8b137b9d9945bbeb05eb"],["/post/15425.html","8d663bc6f59cbfc833accc19e55c9fd5"],["/post/16107.html","047212e0f0282d09734dd12b2d0fad0a"],["/post/17862176.html","086e930fab27ab771ebcd52d1d274935"],["/post/18431.html","c2f1f92a02258439982ba39525f5a55b"],["/post/18912.html","4a15c530ca52449e5bb9ca4a3c87814d"],["/post/1b9c8662.html","f087f3bdae43a3854b85e88b377059f6"],["/post/20198.html","4e5084e64a616ba1afbe181a48e32430"],["/post/20ff5ccb.html","8aa5f1c810a097d111d64c3f9b6fabb3"],["/post/21624.html","df55c71163ecefebd29c20625db4248e"],["/post/2170659a.html","6128fdc7a531c2d81616fe0bb4bd01e7"],["/post/22102.html","5e9a35df3459ff2cad51f9d7c0f9eb94"],["/post/22493.html","265084ab9b82d33a53a8e529825e4efe"],["/post/235252ea.html","1f299c492137759c399486854077ca3d"],["/post/25699.html","42ee759489a5f8576055bb095fb19098"],["/post/2647.html","41ecc4789f84970b4824e07294f26da0"],["/post/26477.html","c2ef867481e795f0bb1dce23f43be274"],["/post/26671.html","e8bd04d581310f0fca7146ebb2298cfa"],["/post/26737.html","7d25943033b6cceec30a7d2b4f8916b3"],["/post/27045.html","19586c25260c13c7bcd704d98779826e"],["/post/27621.html","12f70e98645eafb22a418022ad3dedf3"],["/post/27890.html","cc3d3ac37402c68555f47b821d6bd21e"],["/post/27980.html","77c1d010b8050b09d0c809390188ece4"],["/post/280b588e.html","8edd5b00313e26cd9036eb6e74f09164"],["/post/28579.html","66e3147fe30d027101a2b23bc3b93d5f"],["/post/28877bf.html","43b4275a129ce97e19e546f984f9cdc4"],["/post/28954.html","de8eea204f675abeea943c453c8681be"],["/post/29378.html","28a3f12de45e13227b8e73ec82b2af54"],["/post/29949.html","e1bfecb866100a4c9be338f87b6d63cc"],["/post/2ae43b86.html","b631851be23f9969459f3b68bd83e375"],["/post/2ba82a45.html","44a310b3a2648e8862c3be8ca65084b9"],["/post/30072.html","654eda27cffc458191a716552ca4d890"],["/post/30479.html","14e7d765c45a959928b090050d24bd5a"],["/post/31a6b40.html","b4e8e2745d3735f83c67368cd0892ae5"],["/post/325cdbf2.html","06b5c62f5ca4835c325793a2ad140f00"],["/post/3319ed9a.html","7e270e60a7f0ca260ec1eef7721fe386"],["/post/3320.html","cd342a5a9053b3e5b057cbf9d0165e64"],["/post/33cb1151.html","ddaeacb5c972c68da93650f1d155ab5f"],["/post/34811d5f.html","91d1717456c2844bdb5a9766cb3d5497"],["/post/348d4e04.html","bd6df06a02666725ae5f3bdf00d17978"],["/post/3526.html","a4b22dfa1a17112eb4b68dcfd326ba63"],["/post/35532.html","03c8f12ef5469d375e400a8c5d8bf545"],["/post/35848.html","ccfa6e3fac0903a978022fb523773cfd"],["/post/37318.html","02a52f8203ef6d2aa1010bbe463acfff"],["/post/37663.html","a033cbfb43cd108e1197a8748ad6d207"],["/post/38035.html","1bd6e04830eab8134bb8c9c3ad0b29e6"],["/post/38072.html","d4b0d3955af8a749ddc55034ad03df2d"],["/post/38145.html","3441c54a94b614d3e732ba4135d1f185"],["/post/39968.html","5ba34d6e6165645e5ca8084c7a68f36b"],["/post/3de4bc69.html","a2079beb202c078974b2159de0b57a50"],["/post/40583.html","fc5ff93ce48fba8478651df58a5e9936"],["/post/40997091.html","d435246df4201826013653f954a15c36"],["/post/41129.html","6867605b23d0e34825551dd881156fc7"],["/post/41763.html","743590f4bcbd802a2ce58744ee2c7430"],["/post/41829.html","98054709a50c673b28b6dd8b44e51e85"],["/post/41840.html","4300300f56b9065cb3f46fc81ffbc868"],["/post/41e39f2b.html","7d5e05968bcdcee346e151923404c5ca"],["/post/43817.html","3696b33e4c4bc6882913962894ac68e8"],["/post/43878.html","8443460cbe46d35e7f10992adcb00dc1"],["/post/44250.html","57a24a916e52d6806a6713e7728d4297"],["/post/44336.html","abe99c5286df381d40d7abf837028ee6"],["/post/44454.html","d6eec8fdfa6a415573797f77b8c98271"],["/post/44487.html","6e506b8f5683cd222711eeeb690c879f"],["/post/44914.html","33b89b4fb21a8239807a4ec68e253297"],["/post/4551c130.html","0fd912aa15182e79e6a95d8a38e52898"],["/post/455a4c92.html","643f55c0d1fd0391e606364abeca9e83"],["/post/46466.html","6414f231b486b71335b7ce40c63d64e5"],["/post/46925.html","717a4aa7fe21ba164e44c4109465f585"],["/post/47075.html","06eeb5157b2272b903e139884cb2ff2a"],["/post/48220.html","0ff36282d60dd486a576d434d4358224"],["/post/4b1879e3.html","90bd3664d1658cc494c1b615735fd03e"],["/post/4c720881.html","db693f548adee7f98bc6d0f6eb287085"],["/post/50daec4.html","44302047521f16736972a0791f5ab4ff"],["/post/51491.html","40ce9286dc48ee2f5c6653b4b698eafd"],["/post/51e63dcf.html","03296189ee40eb8f6093ec40f41f4c75"],["/post/52078.html","e859ba6a4fdf90081636a04e722b85e1"],["/post/53677394.html","5c5d41d90320ac25facb1d861141ba38"],["/post/54300.html","681faa8c5224499181d024a59868bf93"],["/post/54612.html","12092e56bf43720b74bfde6bb2e1c2d4"],["/post/54613.html","e4c49ec509e1525919e8369980b2c1a4"],["/post/54708.html","b4bb4a6ecd99b757cbf0c005c19f135f"],["/post/54778.html","f2485bf28d35baed8dcdb5c9be824a48"],["/post/5490.html","23e51822962f51924a8f7a9315dde75e"],["/post/55046.html","4e3139e6f6965cf36a5d8780160ba1b3"],["/post/56929.html","20a9536a0b2ed4fa06d6c8aba21f177d"],["/post/57339.html","9c1304c2d7a09d7ede32f0798dc694ee"],["/post/57449.html","97bd298e186a3266053e9eca4ad56288"],["/post/57453.html","3d329a98a867c788eebac73b242426ce"],["/post/57671.html","ee61c5a9952093ec00d6f3c714acf1fd"],["/post/58313.html","27ced589b1b5898a839bb1db4debf309"],["/post/58481.html","7f461491d1df54077bca5deaa6751a7e"],["/post/58986.html","0170f219d0e4531a885f663256ed6207"],["/post/59431.html","4a73fa55b797e760b797c0739ca6dff4"],["/post/5951da65.html","706c656cb28618aeb1152f247dfdf2c2"],["/post/5be7e977.html","a41a5a4c97147a1528a5dd5b55a450f6"],["/post/5f9e4eff.html","1c5f349820a69a065b6b719df5cfd2a9"],["/post/604b49d0.html","5cc8efd651a4a7226b7eb5f04ed48ce5"],["/post/61312.html","9defa903470ed41945d5b03c4fb45be0"],["/post/61738.html","cdfa9f0a111fb78913787f5f507bb4d5"],["/post/61809.html","2c51f4e3b2eb1196972d6eda904c641c"],["/post/61eaf19a.html","ca2dff047a6cc0691f4bcfa082534966"],["/post/63002.html","b3b8f7b9dd4f05a030ac804c04c115fc"],["/post/63711.html","a7e160db559047aa37c84ad051966756"],["/post/6587.html","d35c27b20a3b33b379b16576f412b20b"],["/post/6589.html","3a4cafef986d676ebb41420fdea10855"],["/post/6880.html","fc2a2fd3961af6680222659745275a05"],["/post/70263071.html","ab34ebd273ee82ee98bbdea45167d06c"],["/post/71038564.html","4687b94c205aaa4a519308419f61e4e9"],["/post/7119.html","db28450f7d07e29e8a2d7b7cd57283a7"],["/post/74e7fdff.html","cbe5baed58bd69b86a0c01697fd3e6b6"],["/post/7502.html","5e507f169df35785a5e8382bab58ca59"],["/post/7564.html","201faf869ce038a6a59cc1a0e479dfd8"],["/post/766f9b60.html","357b70e8d20b262baacb77a04c1f211e"],["/post/7ca31f7.html","eaf91e58c889d3704db4f3057779401e"],["/post/7d1c86da.html","991067f518b097471d6be53187e200c0"],["/post/7f3bcd7f.html","4f1857e2397ac7debb361be5953694dc"],["/post/8039.html","fce304e92ccb7777c2609ae3d52fabf3"],["/post/8050.html","1366a8edbb2991b4ccabcb8c09b0b5ee"],["/post/8072.html","11e6328bfbad454537cddee61032b301"],["/post/8274.html","5eb78d80e7673864b0c10a91084b39ab"],["/post/8372.html","823d38ee684a6bc10a1ff4f451fc346c"],["/post/8498.html","1aac28d835d59b6c3e79ac8835855475"],["/post/85b4e13b.html","55502a66186c638abbb1ff2651990886"],["/post/912b2566.html","8b73a934f08893fdd68e410d98e5518e"],["/post/9187.html","ca09dec45dad8c1bbe0026b8a184372e"],["/post/9197.html","0cd9f78ab7c4f17118a3471540c9a77e"],["/post/94ceb2fd.html","fe4077095500832dc77503e7c887c14a"],["/post/95495db.html","bc491d939dc320363c69b6db6e649df9"],["/post/97246020.html","e0826bfa2d2ace3eb31b1230685c2f8c"],["/post/9954ba8e.html","0ded1e5529a7087cdbb1a95806932381"],["/post/a3a786d6.html","76f1d714ad006c44ea13e1f7a4497775"],["/post/a444b428.html","0d2abe8393ee8c48c183243dacab2ca2"],["/post/a50b8908.html","da7e556d7953c99c34d0047a8a87efcd"],["/post/aa1eade8.html","7b4b4d490ba5c00b1e1b86317251011a"],["/post/ade8c6d6.html","fb5ee8e5de3e56a927f1f012958ba399"],["/post/ae8362df.html","3a51bcb34c6f986164755a3fe5800e3d"],["/post/b4c1d206.html","33a6d37a0b4fbe66513776f8ee851632"],["/post/d213fc7f.html","3b191b0e9944e7d5dd5b851d480dd0e9"],["/post/d431fab4.html","2bc095a97ea7e1a11baf413270b0a456"],["/post/d5381517.html","abd5a4b587416b0df05efb1dddf64472"],["/post/e058ffd8.html","2bb4c1c514208f669551d9222c91ce3d"],["/post/e0f8cb74.html","4cfb8768eede3f107d4c459e0d4b8661"],["/post/eefe591f.html","e36917268c3da042343d2292bd838569"],["/post/ef296a07.html","d964026ed76c93413c2baf774974e66b"],["/post/f201f9fd.html","77fb1222b28d24c84faa52ec755effa3"],["/post/f79e4123.html","512c247e6c41f103c2d3b06d81c9d723"],["/post/f8648a1d.html","1c7917841e81fea0a0d5fcce0f46d5a9"],["/post/f89cb603.html","ea90dc907636a7f4437e21f9233d4ca2"],["/post/fa288682.html","666df53d7cebc90f585df01ce7f07862"],["/post/fb98053e.html","e400389934e2a5c04f2fc0e713d68054"],["/sw-register.js","cc6513f6aff72387791028e03642afab"],["/tags/AT-T/index.html","3f97a165a625989ddc9bb08ecce82903"],["/tags/index.html","a017998f188ca1dd33d97c119b9245af"],["/tags/动态规划/index.html","336a96cc6be084acaa8a2046b795d541"],["/tags/字符串/index.html","6449b886b034927534f61446be052987"],["/tags/字符常量/index.html","b5c98f3da16354c3e41ed7aa783ae586"],["/tags/快排/index.html","e83b05ef2dc318c9ea384de3e8557dc0"],["/tags/排序/index.html","bf2a049b7b03090d6d825d639234866c"]];
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
