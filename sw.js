/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","10ea6a77719bedce97716792820782c2"],["/archives/2019/index.html","74ec41206f0c9677747b1ac9b05c8392"],["/archives/2020/01/index.html","6e090f6b69b0a2994fe607bf45fed9c5"],["/archives/2020/01/page/2/index.html","de10b3cc8817c3b9d1ec3f396d20e8a7"],["/archives/2020/01/page/3/index.html","87524631d22fceae13599678e9e82d69"],["/archives/2020/01/page/4/index.html","0e83270e49f233c40f7bbf6d0b6b95f8"],["/archives/2020/01/page/5/index.html","c1168d84c2b903108bd148eefe25e0fd"],["/archives/2020/01/page/6/index.html","b565909fee0b8f032687fdc26d301ee8"],["/archives/2020/02/index.html","7dbccb5f70e4646f6df9e5d35721f7df"],["/archives/2020/02/page/2/index.html","6bff6fb5d37d6b7e679023c34e96f7c9"],["/archives/2020/02/page/3/index.html","18c677902334d13bfb7b19bac6524475"],["/archives/2020/03/index.html","3c9dd0d0d528dc9438f1902e4eac7670"],["/archives/2020/03/page/2/index.html","0690b2c556c3084f1bfbea86d0bdf0a1"],["/archives/2020/04/index.html","beb7173598473d54a3cc09832808400e"],["/archives/2020/04/page/2/index.html","9da45fa8e87b722026ac42a72813cd20"],["/archives/2020/05/index.html","20fad5cb2a2b03ac159976c2eacc3c8b"],["/archives/2020/05/page/2/index.html","e3a9bd3a09da4c0078c0e6fe1db3548f"],["/archives/2020/06/index.html","07bcd67b36bfde8cad6fbbd205e04197"],["/archives/2020/07/index.html","275a7b173bbe086dea0efc8c3f10d1a7"],["/archives/2020/07/page/2/index.html","af669838ce6a89be8d31cb82d35b7d00"],["/archives/2020/08/index.html","280c694ddb0297be8be22ddacf794958"],["/archives/2020/10/index.html","3664449779fe601c9a4273b9e71e39f8"],["/archives/2020/11/index.html","1c8e0d3bc443693787c749c7f6d54e29"],["/archives/2020/12/index.html","1fe504046b1076b6b8b7c97b3db3d30e"],["/archives/2020/index.html","94acbb7f1940bcf428780ef47f35a291"],["/archives/2020/page/10/index.html","0003895369bf1d229e164d2a9efeef48"],["/archives/2020/page/11/index.html","24a622f70e11485424a354b63c53c84c"],["/archives/2020/page/12/index.html","709665e320e92b50639e1dd45aca46dd"],["/archives/2020/page/13/index.html","bc633c1b4b044e1e2ef537f4aad173cd"],["/archives/2020/page/14/index.html","a3033c567bd8cc7e9dcf5d052d3d68a9"],["/archives/2020/page/15/index.html","a376257b126adee23cc073679c24dda8"],["/archives/2020/page/16/index.html","fcb903efd6150c388002a843b2cbaaee"],["/archives/2020/page/2/index.html","6c391698e3d6e62d41b4a1d175a3f960"],["/archives/2020/page/3/index.html","e101dbdaeee7ac02545f151b85610ad5"],["/archives/2020/page/4/index.html","121d887622d8835eb1310ef18c94c1d3"],["/archives/2020/page/5/index.html","fecd710b4d3cf8d86345e0430a4a597c"],["/archives/2020/page/6/index.html","79bfb6b9ad30c510155784c9ecb5cca6"],["/archives/2020/page/7/index.html","a76e51cb18dd6be11d7ae6d84361cdcb"],["/archives/2020/page/8/index.html","b5cf129cb1e2b49cb9bef5569ab20576"],["/archives/2020/page/9/index.html","7f0a752925c6de9d28f11a7b990f5156"],["/archives/index.html","7802847e4bb4354bab639d4d8f801365"],["/archives/page/10/index.html","78da3afe34176dd22ada2cf85069e21a"],["/archives/page/11/index.html","536c9bdc49577548a4c33d75c6b0ec7f"],["/archives/page/12/index.html","577262867c08f526c3f1e1d34b69cb8d"],["/archives/page/13/index.html","41ed13916aad109f1a3472d04e7c3c84"],["/archives/page/14/index.html","0ecf3739a34c9b47dc04303b645702cf"],["/archives/page/15/index.html","fb0948625c8082eab844327440e0eb41"],["/archives/page/16/index.html","ec78291275290586fdf94c1e0e8601a9"],["/archives/page/2/index.html","2d814c8505c7a4325f3809cf02036f66"],["/archives/page/3/index.html","1547608ef2bd9d52425e7fb7aa236f16"],["/archives/page/4/index.html","7702d5c7f913ad491a617a63e760948c"],["/archives/page/5/index.html","091105372f25bde0c7f388d11194a281"],["/archives/page/6/index.html","d01b456d0126bb9185b20fdf49cd5346"],["/archives/page/7/index.html","168850fc352860d9548c9d8868ae851a"],["/archives/page/8/index.html","dc15fcc1b2d48cbe167fc772ef73c04b"],["/archives/page/9/index.html","817b5cba9de8d460d0df16e8ab3e15e6"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","a957ce9a70b4a4f280f8f31d43c234aa"],["/categories/Linux/page/2/index.html","7db4ca180d09466d49576da4d1ed7b96"],["/categories/Python/index.html","99cafa2a171f10855d5aad7c4e9d4ed5"],["/categories/c/index.html","8db3c63e5dc52c14a4edad919d4052c0"],["/categories/index.html","8dd1a46a23bd13385d21140a9a89609a"],["/categories/java/index.html","f92279c963ac1f053cca94871c49161e"],["/categories/java/page/2/index.html","73028a8f14b99e6ba78837aeb562acae"],["/categories/java/page/3/index.html","2f889b0c454e88c46c838902d77dd228"],["/categories/next/index.html","66ca320b3ea971a798c76f3941d3359e"],["/categories/stl/index.html","5b41755c21e49527cdfb246d2e6fea18"],["/categories/windows/index.html","a046d8bd2b08c9ee1d813f5a5054a934"],["/categories/基础/c/index.html","31ffef6c03f87c32f9a63167669367e9"],["/categories/基础/index.html","fb98dd17f3141b79e542b8129d49a4d2"],["/categories/基础/page/2/index.html","43acc14a3a8eb1f31729c989de4860c2"],["/categories/数学/index.html","4dab9aa2f3bd4b87d8aa9542b1e410f0"],["/categories/数学/概率论/index.html","24123be2e519b140249abbb1f912c04a"],["/categories/数据结构/index.html","0d061d14c911391a1aa8b3fe37b7e056"],["/categories/数据结构/算法/index.html","5200cae22b65d0f88c09fb2675ad37bb"],["/categories/机器学习/index.html","f6c262c13a4a0280f0e4e49bc9601c6e"],["/categories/杂项/index.html","7e7457c28e31c2ce9167ff0fe980b771"],["/categories/汇编/AT-T/index.html","7980a73dba445d2706caeb9d60a7495a"],["/categories/汇编/index.html","33381403a5afc26825c3742f17eff16b"],["/categories/汇编/page/2/index.html","c3f8facfffa01831f44cd09f66c1e78e"],["/categories/汇编/page/3/index.html","87671d505e585c7861f04d52c1cbc361"],["/categories/算法/index.html","8258bd13cbbcaa637ab8c938775e4a5c"],["/categories/算法/page/2/index.html","6ede3a8c8e2ea1f853967c5203d4b1d0"],["/categories/算法/page/3/index.html","d429dd8d37fd340413b99447b4a7601f"],["/categories/计算机系统基础/index.html","a5707353b6b886c5ee30c596337093e1"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c5bcce37e5b3381b852f8d957d1aad0c"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","91bb2d212a70d9c6e792e271f14188b4"],["/page/11/index.html","e45239da4a8f5bf3357379f44db8f7ec"],["/page/12/index.html","c48ff9056e7759ec71480eb8d15d014c"],["/page/13/index.html","c1af2349bb5435c4f8dd92b94cfc48f0"],["/page/14/index.html","1edba9b829c3bec5c22e434d3b234c0c"],["/page/15/index.html","e5c67b550c0c577c3da5fe6a4362c15f"],["/page/16/index.html","50594c1172c2e5aa9bf68fd11a2a2487"],["/page/2/index.html","23600338d8a3110e1e7188029ca0bdcb"],["/page/3/index.html","a18f0d13974483ab547beae376579494"],["/page/4/index.html","409a8111e13687311282705201f3aaf1"],["/page/5/index.html","f5631f7e960def0f6e2bb74615202cce"],["/page/6/index.html","b2de53e8eec4d7974cf412911d96ea11"],["/page/7/index.html","1039e5283152f8106e489fff5db2dba8"],["/page/8/index.html","33b5b87cbbcedc2085ecbe9b1428f4d2"],["/page/9/index.html","28a2a535cda3d34aaecffd058844dd2f"],["/post/10919.html","1fb2f9c6dc8a79c162e574eaaa80ac99"],["/post/11051.html","f82e4c40367ec13e266c71249ecbb958"],["/post/11306.html","93acd696e1415740482bf84c69435d5f"],["/post/11491.html","d63d311420ed991197adc7c77b4402dd"],["/post/11799.html","507a1c60f09a18501eaeb7b32b631066"],["/post/12334.html","f1ebfdfb4a268d40e551c888686f3fef"],["/post/1326.html","8fab78e2e456e831f717fbde8c50b049"],["/post/14379.html","8114f9180d7f0defc2e9512ce788a3ae"],["/post/14511.html","2110f5922bbeea4996a927cb22feb6b5"],["/post/15201.html","ef074c8363d84106f35ae97066bce30b"],["/post/15425.html","e4eaa82912297a83f28c13f77d1cccb2"],["/post/16107.html","10275650eeb2d1bfc37e4b86792e7de9"],["/post/17862176.html","9f28e321723c911068788a798d333a36"],["/post/18431.html","c997325f2bb4f18bd5e79b72ec5b0a2e"],["/post/18912.html","7f9f23614f2aed51d9316cf955a138a9"],["/post/1b9c8662.html","2b4071f8ba66c0616e38bbe0a7e7d7f8"],["/post/20198.html","d7ae4a819c6837897efcc80e58b6fb51"],["/post/20ff5ccb.html","93c9b7531a36c45aa7b6fd4805c00c5a"],["/post/21624.html","d68b12ddcc727bb6eee4824501327df2"],["/post/2170659a.html","335c2112b435c0c35b3c453214f6bfa5"],["/post/22102.html","eaad504f689a20ae05bc6ef46169d759"],["/post/22493.html","d63c98fc7eb9481f2dd5c2fa97429e05"],["/post/235252ea.html","b16be657a77c17d19abc4fd4a31bcdbe"],["/post/25699.html","7ca7d680797a251abe26f992ce550607"],["/post/2647.html","3ba6ffc707c874e15404b5bf5eb2d615"],["/post/26477.html","c79bbb5d183c0be31bdc7d307e76f38e"],["/post/26671.html","7f7ff6865e489c9b28d3bf0a840f4e4d"],["/post/26737.html","746663df28c0a3fa00bce18d81d34e0c"],["/post/27045.html","7953c721c5fa99172425675dac532db4"],["/post/27621.html","a5c6ee12bcb12f1ba47f86c9b71ef92b"],["/post/27890.html","aa028986fdeb5ce30fafd6e4f20a9538"],["/post/27980.html","f95e05eec8b59512b260bc3f08a8f740"],["/post/280b588e.html","0684c13baa49f321c469746fb2248acc"],["/post/28579.html","2f689cebe107c664eda1070e08e8616f"],["/post/28877bf.html","008e43477ed634dd362f58a4e7ca9b1d"],["/post/28954.html","7ff013f82fd73e25cb193da9a67cd036"],["/post/29378.html","3b5d2c1e3505e15cc772ece183584775"],["/post/29949.html","5e74e7a216b554c15df9af5c51d5b1d0"],["/post/2ae43b86.html","8f932a7714da1b4f9d7c494b0d84003a"],["/post/2ba82a45.html","15c903928868ce36af198d7da6bc5596"],["/post/30072.html","3909482b21acd70f20d3e291fbdaf43b"],["/post/30479.html","3d958b979c08b3a431fb69ff47c24e9b"],["/post/31a6b40.html","8cb167ed85683f9ff70cf16ad3a4dbb0"],["/post/325cdbf2.html","a3e23981857321b4bb2b4d9c334a2d78"],["/post/3319ed9a.html","c551424552c25302cb7563466f4a5f40"],["/post/3320.html","586644ded424bfa4753b45946fb774bb"],["/post/33cb1151.html","e6af97768fc5f8191bcbb6ba6c65ca88"],["/post/34811d5f.html","854d3be9719684f383ded23a2dd4dbb3"],["/post/348d4e04.html","00fd71bdca7725218f860fb125f8b8ce"],["/post/3526.html","f1367991bd64c418ea2c90ad8b9b41f2"],["/post/35532.html","7eb5c4b13e782d258e33c28cf64bb37a"],["/post/35848.html","385616b172012dd1da14bb454417e025"],["/post/37318.html","7b03075c85096c086fb95efc1c7edcba"],["/post/37663.html","14a4a164dfba24c800eecb41e5237d34"],["/post/38035.html","c1ae1757da39bf27af48e9da3419fa4a"],["/post/38072.html","153a987d7d6a7dfc3548ff002462d6ea"],["/post/38145.html","4492b47f92c9ef585e224bce54466945"],["/post/39968.html","59285984bff6dd56a7499ed1faad299c"],["/post/3de4bc69.html","080c6ffa1b71e134017fb04ba972bb42"],["/post/40583.html","6b45c4878a170532195772efe8fa550b"],["/post/40997091.html","b471b6606ff7777b914bea6941dfc060"],["/post/41129.html","104676540d310a6317af688a9c7dc758"],["/post/41763.html","5f301c28f52abe6d953d04dabbb19de0"],["/post/41829.html","0cb9c2fc6bfbc8ea26e35ff10a555d3d"],["/post/41840.html","e2035233504ebb2d6d8680b243df8bd6"],["/post/43817.html","c6e6d9a1637607df2cf174d40cc68bf8"],["/post/43878.html","5938d62418838d01a85b3a4a689b0bc7"],["/post/44250.html","4db5ca7c6aaa3218680d3e6193c2817a"],["/post/44336.html","21d0199e82912a55921e94748374956f"],["/post/44454.html","67b133dc6309d97c04643e5a66d2944f"],["/post/44487.html","95ce7c1a55128c61f5bd1c888f761e01"],["/post/44914.html","5d331922a26b1b81ed7aad12f8721f47"],["/post/4551c130.html","6c3d513f7bd22388afcc9c1cc7205cd7"],["/post/455a4c92.html","15b21fd3daba38f43325056b02bc7dca"],["/post/46466.html","ba5ffc1567f9f307269c58622fe73fcc"],["/post/46925.html","62f667cc3233a3f663ae7e731f9b7597"],["/post/47075.html","df468389b96ecf88144b9ef0a68bafed"],["/post/48220.html","15597f2cd55a7070c004a9a598ec0403"],["/post/4b1879e3.html","ed00aa934709bba26f8f05bc7e1b813d"],["/post/4c720881.html","572d2f4b068215191221873f4419e039"],["/post/50daec4.html","cd69c0bea63a820b583b19059c9e36ad"],["/post/51491.html","95c93dc76117c1f054921841ccd1d48b"],["/post/51e63dcf.html","d193c07c64a419547688eed68ce2a2fe"],["/post/52078.html","a760861cfd19ea0c1531e911a8089fec"],["/post/53677394.html","50a7d957ff665d871f5a5300f86c316b"],["/post/54300.html","8805f6a99ec2a454374155cc280a40ec"],["/post/54612.html","fdd85e3cd12f06f65d18061dc9301176"],["/post/54613.html","9f3bb3cf0a314cbea7384b96ba440c01"],["/post/54708.html","3fd2f720ac81fbe0a5eb8cb822fc3bb2"],["/post/54778.html","6d52e16884472e59b651c8bd510d06b4"],["/post/5490.html","17c075e4cfa3addd9a12112c78b24d85"],["/post/55046.html","f29d11ebcb446e582d3303d350d76ce3"],["/post/56929.html","04a20cc6157783318de20eb21d6e6184"],["/post/57339.html","bc030ebd33386559ad65be5858e0359b"],["/post/57449.html","27539eda9b74cbc0642804b3759ceedb"],["/post/57453.html","5167ef1005e78d5ea5bffc66d47dbb50"],["/post/57671.html","2884310f395fe3e690d4a38cdcedbd18"],["/post/58313.html","125bd786151d7a14fc404e13e4b19f96"],["/post/58481.html","63c0fa7896f6fb1a09dc2552f74e8597"],["/post/58986.html","ff873c767228b5d0db40965df1cf31ed"],["/post/59431.html","4f48456a6b94a206466e4f44c6a113ea"],["/post/5951da65.html","4b5353dc13c0c1cda6f53310dd776c1f"],["/post/5be7e977.html","eaa0a85820c456d3d844a151aa0012a7"],["/post/5f9e4eff.html","6b8aa21af3da6402ad1363fd2d84dd70"],["/post/604b49d0.html","faf6c5dd6df618a7b0d4e45368f2275e"],["/post/61312.html","b7d8b69501fdcd17fdf1d0ca19465ba0"],["/post/61738.html","75b3dbbe3639dee3b4c412e2af97d9ff"],["/post/61809.html","16375604fb0d26b6a9190d15d39449d6"],["/post/61eaf19a.html","a5425a03eb3ff5c26df6c05efff12618"],["/post/63002.html","1a112c6edd3a27e2c2a712e5f37eb57d"],["/post/63711.html","85d63792a0c01a89d6f3b9a0d98ade02"],["/post/6587.html","46c98f6c59f430d1bee7724b2ca0d876"],["/post/6589.html","43f02119b61b73aabad301f6c4dbdce3"],["/post/6880.html","310ec37ee33cd495b632fd623d2a0642"],["/post/70263071.html","b142fb93d833f97766e36d42f0b5ce75"],["/post/71038564.html","7cedc2d5866cb17db459187b5450a2d7"],["/post/7119.html","7d3253a94af25021022ef8effb4465ff"],["/post/74e7fdff.html","b0f8f953685d0d7380c2d27b5803b85b"],["/post/7502.html","746267548e90194a330a76d8ac1dee5f"],["/post/7564.html","c8bd85a33bbc42e4d2af6392944f4b6d"],["/post/766f9b60.html","d8893f0dda4b8d2bb3225d592717e13c"],["/post/7ca31f7.html","a4d48445d7067e1c9bbd44d1a6bfb643"],["/post/7d1c86da.html","69596945374ced2ac5a014b2b67c618f"],["/post/7f3bcd7f.html","9945d165ce2110489252361cf642f3f5"],["/post/8039.html","04275eb85d5b169536358a776a84a7e2"],["/post/8050.html","792a6926a9291226cc1f6212ca0a5641"],["/post/8072.html","36cf71daaf4d9d51d5332cac81e1984e"],["/post/8274.html","ff8a5b62311a7050140c904e4587dd3b"],["/post/8372.html","d596df998a927e5e91e889f02d1149a4"],["/post/8498.html","c8bde2a12b8b83d4fe373817444fc551"],["/post/85b4e13b.html","16beb0d05c442a7ca7de289fc3d46494"],["/post/912b2566.html","9e5c4900158baab64e6b3c8d85d73ccb"],["/post/9187.html","4c4f55a8698d6822d2ca7c5e24485950"],["/post/9197.html","b1d73aa4d14fcf6247e6939ce67bcc29"],["/post/94ceb2fd.html","db1f3a917974e46df849fe76f4cde362"],["/post/95495db.html","8dbb8cd99bfb645da859e477e781395b"],["/post/97246020.html","79188ab017389b12616b76df45ebb602"],["/post/a3a786d6.html","69501eb120c757392be0be893b63d459"],["/post/a444b428.html","faeb6654ea19093ad7cf8cd41034d0e1"],["/post/a50b8908.html","748b689a0c98ae71b40a64fc85ac3d04"],["/post/aa1eade8.html","08c23d5b6cf5b903911516f1a3c47082"],["/post/ade8c6d6.html","f41dedbdfee77544a1f36fe4d47851f1"],["/post/ae8362df.html","2fd2e241ac58ec42dfdcea6dc7916221"],["/post/b4c1d206.html","3686f85c808bfd16a8ec25420f69e878"],["/post/d431fab4.html","d0ddbd623189ebb8d4d41557e582e3a6"],["/post/d5381517.html","32cb0e1fc08945b94451be26c7fbefa0"],["/post/e058ffd8.html","7b61171dc42348cd1c28e957eb396466"],["/post/e0f8cb74.html","d403c4e114143671f8b674cc6dac393d"],["/post/eefe591f.html","7847fc921dea9c83f3e051ac5a1731d3"],["/post/ef296a07.html","6cd903e53210ec6f3a2a5f51c77be54b"],["/post/f201f9fd.html","4f6d944f1f24bb910bf83ba65785a182"],["/post/f79e4123.html","16e4cfb7696ff40acf00445c3eb43bb9"],["/post/f8648a1d.html","a98f86e674c4f588b98921dac4af5a5d"],["/post/f89cb603.html","e949cdd9c7e627d46f1ecd87ec0c0c4a"],["/post/fa288682.html","860b43c7375bde0d5fad8940d2336be2"],["/post/fb98053e.html","887993ea13b8510b47d601457a2bf2a0"],["/sw-register.js","d63d9b26b2daf58e97cbfdca7cb8fa94"],["/tags/AT-T/index.html","a43f772150aa7f2c0a61625891051bbc"],["/tags/index.html","77f943b4505e5f133416b0c516f19fb3"],["/tags/动态规划/index.html","dd9b18b31b4b725cd269fbc5a52413b8"],["/tags/字符串/index.html","52b2f39121957c1fd7e8ca03300840bb"],["/tags/字符常量/index.html","2787a2b8dbdc0ec1ba107a7e7694f8c4"],["/tags/快排/index.html","37f694767af380e2286207822d70514a"],["/tags/排序/index.html","6161ab3c03d914961f080fd342b31557"]];
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
