/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","7a7fa6a3ad129a0b607ce833601ea32a"],["/archives/2019/index.html","564e0bca7453ded412c10f356fb2ab25"],["/archives/2020/01/index.html","852a6ee1c327d966afe9ba9fbf00137e"],["/archives/2020/01/page/2/index.html","67cd9a9e2f37422346cbdc35a239742f"],["/archives/2020/01/page/3/index.html","6fe3f6fdafeb26185f57f6fdc69f8c90"],["/archives/2020/01/page/4/index.html","dbcba91bc85e7bafab2dcfe0306036f1"],["/archives/2020/01/page/5/index.html","c73655299cff056907ac0628f312c3ce"],["/archives/2020/01/page/6/index.html","b3bb49afdc5bea1dc3434bb1f70eba51"],["/archives/2020/02/index.html","d9e6f284614bc311cd96d51bf92fdc49"],["/archives/2020/02/page/2/index.html","78bae9eaa144173529d490a50bebb32b"],["/archives/2020/02/page/3/index.html","547bdd2f94532b8853e07f7045818e9a"],["/archives/2020/03/index.html","7fd102514b59c1280ae8bc61a5685ef0"],["/archives/2020/03/page/2/index.html","18a3f730786d1508ead8d5558c273f94"],["/archives/2020/04/index.html","c144c93eaf7cbd04c0e3b184fd122e1c"],["/archives/2020/04/page/2/index.html","7fd53f61690c74f24266304707c46e4a"],["/archives/2020/05/index.html","021f3bea268267abf6606b69c367e803"],["/archives/2020/05/page/2/index.html","4456e559796e76956a125b858c2ed929"],["/archives/2020/06/index.html","a2297cf3d6cbb776af5645f4870bc73e"],["/archives/2020/07/index.html","7bed6c211df48ff21e05f64066ffba18"],["/archives/2020/07/page/2/index.html","89e497ea563d1033578d1259a57c94fd"],["/archives/2020/08/index.html","d3c77216b57d207c778f0683145222b6"],["/archives/2020/10/index.html","e6fdeb7517d72821d00c728e497f7a0a"],["/archives/2020/11/index.html","32002eab0da0114c9e3757b7aea801db"],["/archives/2020/12/index.html","deb7637f1f5e0e237dc8178898a36f34"],["/archives/2020/index.html","a4e8b886890b9de9a032deda4243d13d"],["/archives/2020/page/10/index.html","4c2a00f316da916a1d975bff6671cc25"],["/archives/2020/page/11/index.html","e1fffd39dbb77de6bd34a82d39db3c56"],["/archives/2020/page/12/index.html","ae6e85c14a71b3940e891de67f0cba00"],["/archives/2020/page/13/index.html","5e778bf5687e31f39d34bc0a28e43e4a"],["/archives/2020/page/14/index.html","12b25e831f56f02ccd2b8bd6666f6d0a"],["/archives/2020/page/15/index.html","794ecb09dc58edce0fa377d6d60e597c"],["/archives/2020/page/16/index.html","d24a8506a223b16fc8fd073b3297e3fc"],["/archives/2020/page/2/index.html","150080cde763e4041f5b3e6f5c166e21"],["/archives/2020/page/3/index.html","7b76fac6e4e911bc466690cb03832ff0"],["/archives/2020/page/4/index.html","182f2594fe32c0914a0a77d00bf85611"],["/archives/2020/page/5/index.html","7f0a424e9fdf81eb9b56c9b63a72c968"],["/archives/2020/page/6/index.html","e5bb69d2e6db977f6d4ff8aa119f9c80"],["/archives/2020/page/7/index.html","125a33c165d7c5835c8a288ab38393e0"],["/archives/2020/page/8/index.html","d300774364aadcbcaea8a5eb08685ff0"],["/archives/2020/page/9/index.html","ed71c24fc3d50bc77e6cd90699f380a6"],["/archives/2021/01/index.html","40896b0ade55d3254bc48f3b3c576f0a"],["/archives/2021/index.html","b4cf51805f7e956e1c29ae0642c79b36"],["/archives/index.html","a519aa1c0d3a1a88e42c7f19e78e5d93"],["/archives/page/10/index.html","350c130993c8a38042186add632afd9e"],["/archives/page/11/index.html","219f94d75ec61fd43719506f74bc7114"],["/archives/page/12/index.html","d80d9ac9a9ac7891323bea51ba791cc7"],["/archives/page/13/index.html","cc7c08c89b87c967dd27323883800726"],["/archives/page/14/index.html","e748bf9fa47679031c721483b1663357"],["/archives/page/15/index.html","5aba2cfeded6be66e392382aa92f3434"],["/archives/page/16/index.html","1020f70aec66065967edb3b58953715b"],["/archives/page/17/index.html","11eaa1b4d05a4ec1b2c04946d2e21e36"],["/archives/page/2/index.html","539ce2d27b2fe05fccf8c81120fdcd8b"],["/archives/page/3/index.html","3ff0a3e6cc8d741f6b2c2d7372693bf0"],["/archives/page/4/index.html","452c91f669782755d31a404c9daa560a"],["/archives/page/5/index.html","b207d74de9018b74c35a56cf03db6059"],["/archives/page/6/index.html","c7ddc4efaeae0d276957037f89defd5d"],["/archives/page/7/index.html","aebb0d2a1b64198ac7002371fca4d8d8"],["/archives/page/8/index.html","151324bf7f08c654fa93c0652a0bf617"],["/archives/page/9/index.html","1a0496c275ce1710127540d5e2088eae"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","23ca62e359df49c982b6cdd17e1f0da8"],["/categories/Linux/page/2/index.html","4ce3ac051c2e866ad23c1a68cab73c67"],["/categories/MySQL/index.html","c6cdb7fec13fadaf39972360a6f69bee"],["/categories/Python/index.html","36a31f2af43ff339e9ba7b1032378cac"],["/categories/c/index.html","0e3589c71e1fbe79e4b7c62ac3e99406"],["/categories/index.html","6334d9f0c49f689aa95821d64173bdd4"],["/categories/java/index.html","7114b3363506bce21c2748d27cfcb603"],["/categories/java/page/2/index.html","825df54512187d8865a184b31fce2608"],["/categories/java/page/3/index.html","a632a2ad0234529542f9ad3b59355487"],["/categories/next/index.html","f88bc955d467c4933c3f11127349e171"],["/categories/stl/index.html","1f4b51b3816427da3c0c83e27aad502f"],["/categories/windows/index.html","96f1eae32aed79a0c064acf43b1b5bcc"],["/categories/基础/c/index.html","5892ff5dcaf577aede30aa2f37243428"],["/categories/基础/index.html","c61c199efdd47826e9efc36510ee5492"],["/categories/基础/page/2/index.html","73a45a58796f4b0baf72dd7e6b6d3464"],["/categories/数学/index.html","881991e2b2afd47cb6dddaf19396eec8"],["/categories/数学/概率论/index.html","89f5b58cc782a32e8717848ff31a2724"],["/categories/数据结构/index.html","7a62a5c59b6066bdeb5cf54485ffad01"],["/categories/数据结构/算法/index.html","07c0e36602a2d60b82a9da0f86c6a250"],["/categories/机器学习/index.html","b29acbf9f3a4f820974fa8b1a2d986b1"],["/categories/杂项/index.html","f76b977a5d1b14da834c699c88dd9b50"],["/categories/汇编/AT-T/index.html","d12973e3507045e7f5f26f3850c0ba3c"],["/categories/汇编/index.html","53d34928a5cebe8b4a162c3b2fdeb789"],["/categories/汇编/page/2/index.html","803140884934fd46099f9c2d298fffeb"],["/categories/汇编/page/3/index.html","af2be2ef802ea94da31fe2f6c86f55a9"],["/categories/算法/index.html","5aec034e7158380b327d106524f79c9c"],["/categories/算法/page/2/index.html","543476889ff213711788020ab729f28e"],["/categories/算法/page/3/index.html","f3a0231ff6a8c215dd14bc766af431e5"],["/categories/网络/index.html","704a724a9adb3797ccfcaae7fdec060e"],["/categories/计算机系统基础/index.html","0f30e9efe39bdbfea2f83ee27ac05d06"],["/categories/计算机系统基础/page/2/index.html","8e8a69d87c12ff4313af24e066b250e6"],["/categories/逆向/index.html","b2f283e02826feb323eec77575e4b0d1"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9a88ebb68837642311c6e233b67c6d5f"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","cec2a9c15093ac145c026c3f3a9dc359"],["/page/11/index.html","45f0e9cfb92ef8c3267874bece43adc3"],["/page/12/index.html","42c72277b5ec3154ece49684421fd5b2"],["/page/13/index.html","91223a029c49905785e23677d6d703b1"],["/page/14/index.html","74bfcbbe1f69cf0fa98c90267351b74e"],["/page/15/index.html","dec15499839f0b51019ffa2a68f86e2f"],["/page/16/index.html","788bc1429387540108cd263c10240d96"],["/page/17/index.html","3c590573f71aa46d6b93c7555727bacf"],["/page/2/index.html","92bde1631eabaf92e8b280086a081b98"],["/page/3/index.html","f8d9e21a4ed5463a85abba401737f792"],["/page/4/index.html","a723eaa943b31250b6fdb90ac9ecc351"],["/page/5/index.html","705bd75afc176f3a7eda23db57995dab"],["/page/6/index.html","6a7fa1ad7b3ec7bba1a95dd9a824cf49"],["/page/7/index.html","6306b01ab815df13fd2c91782e0d4834"],["/page/8/index.html","9e3aa7a9bc720d6d6e2c22fe59bc791c"],["/page/9/index.html","eba550ee4e1d681d3b9fb6350f1431ba"],["/post/10919.html","aa036e6bdc3b05efd8c6e60c2da5a9a6"],["/post/11051.html","18a1a23ee87caffdd0edd121241b353c"],["/post/11306.html","fed8449874b30150662c9329a7ab220d"],["/post/11491.html","7d01e92585b5334a276d14efcc29d540"],["/post/11799.html","64a6d9d5dba5e2237acb0e10cf90b087"],["/post/12334.html","92d7af991d8953421ea27180b5193389"],["/post/1326.html","6fa53663542a46230e198698a53140e8"],["/post/14379.html","65ef4fae4e52c959d763b00fc136147a"],["/post/14511.html","0ffbcbea6b1606456fdfaa1d497b0d9b"],["/post/15201.html","da3b8dac9b4d8f6e6421dfdcf4cee80d"],["/post/15425.html","7ebc0005802ad9d02ed76e806ea19729"],["/post/16107.html","4a88f3a160ecc42a34d3a1cba59fa3bc"],["/post/16e2846c.html","1de49b5038c1fdb985114b0b9fed9a69"],["/post/17862176.html","966bf187b58fdd9ec74348cf5585008d"],["/post/18431.html","5058223018236aa1e85674648d61f308"],["/post/18912.html","ac147fafc096aaccde11429522b1df1f"],["/post/1b9c8662.html","80ea8cab8a11bb49ecd552178031603a"],["/post/20198.html","f07c41a53d864cac1b868d64c26d3e11"],["/post/20ff5ccb.html","444ab327c8f5cb89db39437c6258d616"],["/post/21624.html","c81e5a4be02e1e605d7d08e2131917d3"],["/post/2170659a.html","0ef5167fdcb220eef8d95e94fc625b33"],["/post/22102.html","4df6e18905a68c8668ff18e619f88940"],["/post/22493.html","ee31ee8340b4fdf37dfd23194346e165"],["/post/235252ea.html","0d8e4594c8bb5fb251aefea06a848254"],["/post/25699.html","abdf914a06e8cfb9a63009d20c307180"],["/post/2647.html","e2be1b9e7bc526b2c271ccecd9626c8a"],["/post/26477.html","95ce1b1748986f83caaf710d3142583e"],["/post/26671.html","19e8c3cd5ddf0a6754fa2dde71cde9ce"],["/post/26737.html","c26faa3cd3d940a6bc019d0925ca252b"],["/post/27045.html","8e1a0c19974a1262e91f9c4ef8dd5b08"],["/post/27621.html","fff1f52ed7224284174bb402c3f38bf8"],["/post/27890.html","4a3ec80261ae7da4d4dcc706e8fc686d"],["/post/27980.html","98ae8d3199d3ac69c193d81b83dbeb36"],["/post/280b588e.html","9a334503c87704a4dc5b84da4e47aea0"],["/post/28579.html","9eccc3499980613c611b465592aa50b9"],["/post/28877bf.html","f531f1906e8fac8dfbb72c9541297e72"],["/post/28954.html","ded61b576b72edbb924e3f91542c84dd"],["/post/29378.html","9513de4f49726fe01564ea414bc0ffe1"],["/post/29949.html","84e716e157bde82da93a28d24b920c3b"],["/post/2ae43b86.html","ae829fab32bd9861bc18d008635cc9e9"],["/post/2ba82a45.html","76116bc50df9f9581076f5f5ef73d785"],["/post/30072.html","fedac0c3c7c2959f6781440b468c52ec"],["/post/30479.html","e9b6b85d6de9aa65e6e7773fcd6e7d68"],["/post/31a6b40.html","f71b50a33694a8424156906bf9d36d3b"],["/post/325cdbf2.html","ce1f36fad6324e33e9fe17f33538034e"],["/post/3319ed9a.html","5a30292761a270931f54a02eb2c41b94"],["/post/3320.html","e75f8522b5936e777ba06ca8d7aaa333"],["/post/33cb1151.html","4544d26597b436d0afed0a597d8a7033"],["/post/34811d5f.html","1af949ba5963ad829bde59c6e3cc682b"],["/post/348d4e04.html","dd2c4ec73d53202a2db408f3270523b8"],["/post/3526.html","9ee89564ff405578cebd5dbc2636b839"],["/post/35532.html","6451a753b81f17549df18e9c2820a04a"],["/post/35848.html","9f524302938d42201ccf3a9a19f0d78b"],["/post/37318.html","823094e2dff52448c119a9a16ed84685"],["/post/37663.html","44fc66054c54bbfb7d3153ba60de542d"],["/post/38035.html","f129f661f0444610d8aa5c22d130e10b"],["/post/38072.html","65864022efdb83648095469a4df1fdd9"],["/post/38145.html","6f6fc17993e57e656403ba694b5830a7"],["/post/39968.html","eba59eaaa2caf408492965e83d1b42b5"],["/post/3de4bc69.html","797a6e5dbf08451f31f1a54c75b5ad25"],["/post/40583.html","0a4b9a6ca86b9ab26ad5cf6244bf393a"],["/post/40997091.html","c382ebb6084da15b98ef0ccac570381f"],["/post/41129.html","1c74fe228792d023e7bc8701f668fbce"],["/post/41763.html","7dbfd41b7e9770c6de50f0296744eb77"],["/post/41829.html","6efdcd0fb03643c948b3761f750f47a9"],["/post/41840.html","31701bced2ce416409e2c2264595a57a"],["/post/41e39f2b.html","1bdbfc9054c5660031f1b4f4e74a0930"],["/post/43817.html","2d9575318530dcaf99d6a46cdf313522"],["/post/43878.html","de9af42da95eaf2f873f1529c6386ee7"],["/post/44250.html","4443c5401778bb914cd8dabd1531e5d3"],["/post/44336.html","566d1c7903afdac891fa97c7cd5c3a4e"],["/post/44454.html","a29010061ed24c6d87820243b6453191"],["/post/44487.html","9bd2f274e664deacd2c99a37c8009892"],["/post/44914.html","98bc418e0faf43aff7ae00e21f635843"],["/post/4551c130.html","61e7dfb191ca5f0e307ecc2d82c22c66"],["/post/455a4c92.html","4f904b9f108d5040ab18365580593976"],["/post/46466.html","774b7708a9a9eedc1da7b3eaef0bcd75"],["/post/46925.html","89e114227a720c4fbb06cb11b0637daf"],["/post/47075.html","8b2c21984def6144b3f8a66c9b6cf470"],["/post/48220.html","290c7903628a62a8c8881fcabfa9d497"],["/post/4b1879e3.html","67e92540043c8e1ab8a910bcc5a3807c"],["/post/4c720881.html","aa5d3a2906384d726330171f674bca22"],["/post/50daec4.html","7b6319ef97096a871bbcb3ca6467f36a"],["/post/51491.html","d3a8e0e296f57027115bd8382f938f77"],["/post/51e63dcf.html","c1b78c70d18f9c500ddd737e16ec349f"],["/post/52078.html","764a65c968f887e0b7b972978cd8e403"],["/post/53677394.html","8ea92b678f2783e6c0a07697d4388a10"],["/post/54300.html","405601c8bbb8b09c97f28c9718362942"],["/post/54612.html","289ca494fc9b0f562603b24c51287abb"],["/post/54613.html","d84c2a4785dda06afe54b926f609724a"],["/post/54708.html","99e2e7a1bd7a095306699f2543916bfb"],["/post/54778.html","dd0d38fcda8af8682f60e77d3491f026"],["/post/5490.html","ee99fcb23373a12c9bf8b5bc839b6854"],["/post/55046.html","7aae2619e3342e76007fb9bc97cf9144"],["/post/56929.html","845a4477c29b69efc368c433c4881e4b"],["/post/57339.html","4b96afa9c895762ec39820c476734055"],["/post/57449.html","688044bf62504d7c69ad4d519644b101"],["/post/57453.html","d20b2bdab2824ae17f510f5145d717a7"],["/post/57671.html","07857400187751a608605f2658d2c0e8"],["/post/58313.html","5437f0b18c97b9e5bc6cf80953fd492d"],["/post/58481.html","08bd1e3e76b57fd24b382786375cfdce"],["/post/58986.html","61d125d5ab3838c80349d02ced1ea755"],["/post/59431.html","574d22fd96c238cd6c44d793caf4e7fd"],["/post/5951da65.html","724e1762f73e9685b66693db60bd042f"],["/post/5be7e977.html","789f88f03c9b882732f1ce96144e498c"],["/post/5f9e4eff.html","4564fe977e12e5ec892e415152af9d99"],["/post/604b49d0.html","34d75b14741310b966d2ca28342749d4"],["/post/61312.html","447a1cf50370b31b4ba9e467bae4c222"],["/post/61738.html","52863d96613ba3531013fb44f29a3b09"],["/post/61809.html","398b64a38f8f169e1d6996d9caf13793"],["/post/61eaf19a.html","41cd9203745ad02f5877fba790abd436"],["/post/63002.html","213c201618739c6c4cf5d9b8e9bb66f9"],["/post/63711.html","290847a846f4e7c175b8f3fde50d18f6"],["/post/6587.html","e179115ba6f6e4aa7ca059a8ba41c2f8"],["/post/6589.html","220b0c9a3bf80a8749e386c029ded225"],["/post/67454659.html","38ff618c8c341b28d6ee8647a126ae27"],["/post/6880.html","2f3e0baa11870aac213309f012f3ed60"],["/post/70263071.html","d7ef45b7592918b6fa1e60dc021e689f"],["/post/71038564.html","1746e68bf6027f4b9550fb1c68250414"],["/post/7119.html","fd3e829e567a91d86ada0dbe8cae4da0"],["/post/74e7fdff.html","5d641b5f06cd89db82a42bfd9f81106a"],["/post/7502.html","db12f3dfb67e9ac53ecadc129773b998"],["/post/7564.html","069f4ba7b33c63931ba3efae7b3e605d"],["/post/766f9b60.html","196d132989d5ee23ae5282649331e710"],["/post/7ca31f7.html","95ee0e254973e1ce5a322dcce67add19"],["/post/7d1c86da.html","d97be1ebeb230dda4520a822c4468c57"],["/post/7f3bcd7f.html","141cae663d752921803f0e6a36677ae1"],["/post/8039.html","671faef5224af26627b24b72fa634264"],["/post/8050.html","c9323019f06d5cda78faf44dc4429a29"],["/post/8072.html","90610ca380ab784e53e8ca4dd0665759"],["/post/8274.html","d8b805c5fdf948a1607ed4956f9e1842"],["/post/8372.html","7b5272ca8ce2cfd8e1dafeb19cbdffaf"],["/post/8498.html","1a3e472cd062a10331b3ca23990ca790"],["/post/85b4e13b.html","35618e77795d7ec2a129c9e5e552958e"],["/post/912b2566.html","f661488de515b02d0bb8f8ea222c0329"],["/post/9187.html","8e596f4bbd15a7f8bc78c93fa3d40d62"],["/post/9197.html","a99087f12cfb99be8b5342b7d9a4a383"],["/post/94ceb2fd.html","3e27b06addd434d778973e77ba600a19"],["/post/95495db.html","08c7c63985d0aac3c55687e673e73728"],["/post/97246020.html","6cf67c6b1e316e9999135db3be09852b"],["/post/9954ba8e.html","e85e18ca1ec51348749b62d717ca0fce"],["/post/9d855db5.html","7f09b0050218886da3b875992240906b"],["/post/a3a786d6.html","c52bfa25d525ff5b5b37777222700680"],["/post/a444b428.html","c7f426554e7d71fbf071ff49d1338a21"],["/post/a50b8908.html","c5998605ead02d3ba551f8b75d771c38"],["/post/aa1eade8.html","a1d2d2c3890a8fb232ea6b77f649fb18"],["/post/ade8c6d6.html","802d5f1ca575c4e3a27c36786fcad9f0"],["/post/ae8362df.html","2b1376b4cb8b6bbe35c20a2646005be2"],["/post/af3eed3c.html","6178a29d71956a1adc1f208f6d7c16b7"],["/post/b4c1d206.html","ccf3f3b34cd8c24eb52588108e4dc7b2"],["/post/c82a1c99.html","85322780bbba0f6127b919fe4e68e527"],["/post/d213fc7f.html","e7ea9f7367b5091a952c78b1a2d64c0c"],["/post/d431fab4.html","f1d8e1c3db999e9c81ddbdec29c0bc58"],["/post/d5381517.html","b47baf2bc3103b40550f39a69987a862"],["/post/d94f88de.html","9a12521c4b6b9af8dd651143000d409e"],["/post/e058ffd8.html","a9894875959b308d5a6b9bf577ac7a14"],["/post/e0f8cb74.html","540e041b09a64eff888665ec51364d9e"],["/post/eefe591f.html","740818809abcdb31b90f4116d175b647"],["/post/ef296a07.html","da8922fa95bd51ab4ed2f97441313a60"],["/post/ef3a3fcc.html","cfd3431c69dee4c86f353fd32680680a"],["/post/f201f9fd.html","936f5502cace4f356d288c0a39ec97b3"],["/post/f79e4123.html","9222bb4dcceaf89d05f19ed189be0e84"],["/post/f8648a1d.html","c68095d19088ce23e7fa48ee4f7c6378"],["/post/f89cb603.html","4f02009e26bfcf30658a306bdff5a26a"],["/post/fa288682.html","19b5fce9817c1ada79e523100dd51c91"],["/post/fb98053e.html","f71bc1c14b0dc4f08b3fb46f63ee7134"],["/sw-register.js","ebe9a2ff2ac5a9a6a2cfc275464d22f3"],["/tags/AT-T/index.html","dd28a256e48afde3f399c01a8d974c9b"],["/tags/index.html","24c59a578f1d409f6ce991447f9f91fa"],["/tags/动态规划/index.html","9638305338057e90a29dafc150d1f06e"],["/tags/字符串/index.html","983d174e033d5f5409f289d12b791ac9"],["/tags/字符常量/index.html","cc97576f89289ca0a2bce5eae82b722a"],["/tags/快排/index.html","6ff81ad9858956af81513aa94654fad6"],["/tags/排序/index.html","850daff28b0d15bfce03bade8c0aae6d"]];
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
