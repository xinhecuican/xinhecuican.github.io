/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ca1901c0090e29171e8d8e5e6fe02aaf"],["/archives/2019/index.html","a44ecf7e98c8172f082b6f70c7f12d0b"],["/archives/2020/01/index.html","e2f198fb389b018287eec658b2f99fbd"],["/archives/2020/01/page/2/index.html","bea4e058cb2355cb440898ae989df3e5"],["/archives/2020/01/page/3/index.html","8ff60c4245dc41fb28fe2ce73adc9df9"],["/archives/2020/01/page/4/index.html","b61530ebb6202a2e63c3b6f7b82068f9"],["/archives/2020/01/page/5/index.html","3aff14c43c5fb80558daf616daddf37f"],["/archives/2020/01/page/6/index.html","47fbd1023e0ab8aaea18172029c45390"],["/archives/2020/02/index.html","139d938ec864f3e04e50915192d41ff8"],["/archives/2020/02/page/2/index.html","2f6fd21788c30a10de325c21ff8da862"],["/archives/2020/02/page/3/index.html","accd91f2becfb95256846d5f4544d014"],["/archives/2020/03/index.html","1656b75d46a5e3aa96f4217f8d442878"],["/archives/2020/03/page/2/index.html","7ed52a6163285227f76cd23c1b3da419"],["/archives/2020/04/index.html","b68f8433bbfd2168d66824ed2f669e4f"],["/archives/2020/04/page/2/index.html","6d9b35dd982416138bf7425598951596"],["/archives/2020/05/index.html","18b04b0433a58c82a88b6dc0d88dd931"],["/archives/2020/05/page/2/index.html","5d70b60b8874abeef45069553d49e57c"],["/archives/2020/06/index.html","1671286224caf512b47844f3dfbc5f7a"],["/archives/2020/07/index.html","3ce099aa19928f5c7ef73b009a212830"],["/archives/2020/07/page/2/index.html","f4ca77fc0e02126c7e280f4d2014d1ae"],["/archives/2020/08/index.html","e40383c2aa08cd3656efce0d1471cb78"],["/archives/2020/10/index.html","899e577e41580634a449656336249911"],["/archives/2020/11/index.html","291aa462cdfd14d41835916117e2306d"],["/archives/2020/12/index.html","7dbc09d3a865cc0096de007bc8cc0216"],["/archives/2020/index.html","0bb928bc6b4791cbefe2d73eb9904988"],["/archives/2020/page/10/index.html","d53923222d9a8775d7365b44fd9ef066"],["/archives/2020/page/11/index.html","b942a9a65cc23178661b99cbfa1fd4a2"],["/archives/2020/page/12/index.html","f67e21338ca0a4cedec9d087d74c982f"],["/archives/2020/page/13/index.html","c84c9ce92d32909d61daf45fbb57eb56"],["/archives/2020/page/14/index.html","f3552916b9c2d54b8c1453e734986efc"],["/archives/2020/page/15/index.html","f9bae05896f180add458cfa6b8c0c893"],["/archives/2020/page/16/index.html","fe47007dc1d8e857f126585498555209"],["/archives/2020/page/2/index.html","6d458e42ca2abd1c2fb0f87a327883c4"],["/archives/2020/page/3/index.html","7703d44dafbdf74e51cee0fade1524c0"],["/archives/2020/page/4/index.html","8ac01ebd234130bfd3aeb92283bb289e"],["/archives/2020/page/5/index.html","a78b681b69dadc193bc823fb09f5f55b"],["/archives/2020/page/6/index.html","f610b97d0f280110266ec093a501c6b4"],["/archives/2020/page/7/index.html","c03efa3d4941631d59020c8747902775"],["/archives/2020/page/8/index.html","f69209fd86ba8ab098fadf04f8dba918"],["/archives/2020/page/9/index.html","2241a80c357e7e60ed5ca52437f473d9"],["/archives/2021/01/index.html","ee731acf7da88eaacf0faf4b7d761c28"],["/archives/2021/index.html","a74605d80d98cd77d3ff5d933f1df3ec"],["/archives/index.html","268a12eb9959420129f5cf3af0895430"],["/archives/page/10/index.html","fc8738e0749336418cd634d3d4b2e5f5"],["/archives/page/11/index.html","fddafc36764559e02ae5bd7f5723099c"],["/archives/page/12/index.html","36cd125fe12c66d99e1f7774d6c154f8"],["/archives/page/13/index.html","753dff63a33f8a1df4bb4f71c1144b6b"],["/archives/page/14/index.html","510474f68680004ae65d41f3f60c01b9"],["/archives/page/15/index.html","5ed8e8be6f56ce88a51010800e9a31f9"],["/archives/page/16/index.html","29806e161452cf733018d96040047563"],["/archives/page/17/index.html","7bab97ddf576d448b1fd9e432dbd4804"],["/archives/page/2/index.html","6319ee9dd38007232910fb49369fd02c"],["/archives/page/3/index.html","3e9738f7c0387c9eafbc750fd7b040fc"],["/archives/page/4/index.html","203f9eb6028838627cb7f4153a6edaa8"],["/archives/page/5/index.html","da0e31a6e00c9afdd15119d915417a1a"],["/archives/page/6/index.html","4537d6bdeac423027e48615833b113f4"],["/archives/page/7/index.html","73b887f386cf76a5e430070b9160ecf0"],["/archives/page/8/index.html","c8b61b4ea7c2340264e7b4cfed11d17a"],["/archives/page/9/index.html","b7804536833c19f9c31856e024667216"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f44f1f70aa55a3c3f52f0a7bb11b5648"],["/categories/Linux/page/2/index.html","b462937fe149bcdc5f2cfd10cc0bde96"],["/categories/MySQL/index.html","57c1602b262e43ad8e74acc42ce5aeeb"],["/categories/Python/index.html","b21a573b279c912993651c8f0007bf66"],["/categories/c/index.html","d2c1bce93065e4c5dc7ac3a21cac4c3b"],["/categories/index.html","4ab5d0d006cb7a8435cb5b1d2221a17f"],["/categories/java/index.html","1a84e33457f338675b457a5bfd381a37"],["/categories/java/page/2/index.html","e49e58ea2f6e2e263950a1eeefc7c8d2"],["/categories/java/page/3/index.html","ec1e348d5b6ddc8cfa50411b4458700f"],["/categories/next/index.html","440c99a9b9e6a967cc7997ff84ae8131"],["/categories/stl/index.html","1b8ae3b38d092f4d8ee23430268574e0"],["/categories/windows/index.html","c870748e25e2abfb919ba9d8764eb4ae"],["/categories/基础/c/index.html","30454831802f3673eb994c27414b6f00"],["/categories/基础/index.html","8fa9cfa13c99e1c4dfd9ea83b722f6d6"],["/categories/基础/page/2/index.html","b70983684f8f747985d0b1cfab3b627e"],["/categories/数学/index.html","80b64326d7b92bebcbb03a8afbcf0a8c"],["/categories/数学/概率论/index.html","c76fed26d78fcb9bdc3b8255a170c163"],["/categories/数据结构/index.html","746c1659090379d3268857a7b53033d9"],["/categories/数据结构/算法/index.html","9383724bb408057e7ca3e657ebd09bb8"],["/categories/机器学习/index.html","22df18522b7314c54c4979a17b3baddd"],["/categories/杂项/index.html","661f0db071cd78c6989a59eb2221ed3b"],["/categories/汇编/AT-T/index.html","c64cc74bc14ce86213008b5165a3d700"],["/categories/汇编/index.html","c1feb46e90a0cf4468222626ed1b7d21"],["/categories/汇编/page/2/index.html","d4d57ad1a379edffc9ddfaef4ece904a"],["/categories/汇编/page/3/index.html","194421b8a868c680dd45b43848fd752a"],["/categories/算法/index.html","0f9d4029447fe126de3634b58dc68762"],["/categories/算法/page/2/index.html","b4bbb2f50919b8bab74d7d74fc716f0f"],["/categories/算法/page/3/index.html","57a0271a73c0370c37f098fe01e337e0"],["/categories/计算机系统基础/index.html","b14e9d2ec8eccf339a6cdabf37d46063"],["/categories/计算机系统基础/page/2/index.html","8182684057c0d182b313602dd15efad6"],["/categories/逆向/index.html","cd183bd527226364f72b3111a39b922c"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8ea6a389df0e4733877fb73580270a8c"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","27bc4ce735c1bf79b20ede97254943ca"],["/page/11/index.html","ef79d7a97b6db65e811105ab01dec724"],["/page/12/index.html","b418133a341d4a1f43caa8c012be421d"],["/page/13/index.html","e8b2ea9ffa08c5ecfff61032efd6bb49"],["/page/14/index.html","4422ac6d371a87fd9ff55c01504b4035"],["/page/15/index.html","aa1f2b453091afe2ac2cd606c50494d4"],["/page/16/index.html","1f81e2a2b3a62b2fe8696b89d3f2bc59"],["/page/17/index.html","1baf43aade070d30531e301075cfbc93"],["/page/2/index.html","de0abe557814d9ccb387a4046c4f6950"],["/page/3/index.html","2b4e172fafab1c066bc254e35023785e"],["/page/4/index.html","8bdf84746a145e8e4f17e5131472b378"],["/page/5/index.html","10dd5e611129b698a9b36ae5f30fb203"],["/page/6/index.html","c2200c7aa11ef9e19465f74243d1e1b9"],["/page/7/index.html","8dc8dbf98e1f4b1f6cdcc382044f0dd6"],["/page/8/index.html","ddd353c04057b705118b388942cdd475"],["/page/9/index.html","45d044a90b862c9bdb29cac01d1c30ab"],["/post/10919.html","f807bbd047208874113670989ff377b2"],["/post/11051.html","c1569965f4b85ff5f17d9be18b6f5412"],["/post/11306.html","399a07f422f20ce563ab9c7ba6f9feff"],["/post/11491.html","53e574ec1501eeab0a9f10791a6d71a5"],["/post/11799.html","a8cbf831c41c26b91891ac05dc3d227a"],["/post/12334.html","bae0acd65ab1e6a3a5d90f7cd2e9dc0a"],["/post/1326.html","525deb26ef2580f45e69cc1ac406e8cf"],["/post/14379.html","a360b47989264b7284f1b883262dfcf8"],["/post/14511.html","cf35f947d950aad89777053a5e1377e7"],["/post/15201.html","1ec112c72e4d62c37d44e9653e60279d"],["/post/15425.html","45a1e5ca72bb25c333018d2a77cf013d"],["/post/16107.html","1f7879c02caf88769a9000d50aaf4c86"],["/post/16e2846c.html","e5a449d2fcb13f31b83c2cfed4dbf11f"],["/post/17862176.html","13b82841386c171ac52a362e3d607448"],["/post/18431.html","880a75aff5d1eade62498c8086a449bf"],["/post/18912.html","c6527a1215c4f43e3b126b651005efba"],["/post/1b9c8662.html","6fae2d32722ca75d368565aded1f9b1d"],["/post/20198.html","a06a54ba27a8c1829fbf251350424a82"],["/post/20ff5ccb.html","32c290606e93640d8dac562c4e1c1605"],["/post/21624.html","759b2a8ea1be873a8290326fce6ec35e"],["/post/2170659a.html","e15463b975d6e3868ad1585fb4076b30"],["/post/22102.html","b40e336c355349891cda6c42c2cea748"],["/post/22493.html","5ce0414239aae36fca35173945cfd212"],["/post/235252ea.html","e8548d9e1feb5e35ad941f03f583b91a"],["/post/25699.html","bc1aa5d453c42d7db33337ed24f1a36f"],["/post/2647.html","8211223c13e7021db4b6f624ba8fffc6"],["/post/26477.html","2aa35aa5c9ea0adbd5c308c2ee7c5176"],["/post/26671.html","84c5c71485950585fc329a4ed806f869"],["/post/26737.html","3e2c51535ae350f0ccb855e8301f79bb"],["/post/27045.html","9933b6d02533567ee0c4766e3aba5483"],["/post/27621.html","ee28855db759b94ae896a86c3351d116"],["/post/27890.html","d017899b25800db4bb6bbdf857db7e62"],["/post/27980.html","59dbe773d251f43621a2e24e5145127b"],["/post/280b588e.html","5819259c7d8b674dc8e1a7b6ccea7e3c"],["/post/28579.html","2989629d37ed8b83eaa955c83a0fb0e6"],["/post/28877bf.html","4de6d293f0515a0240804aea79aee39c"],["/post/28954.html","b4dea68fe663838d088ff938ef72ef6b"],["/post/29378.html","e7a6c398bb3e51833f1754e1cf86c9ac"],["/post/29949.html","45bac9b230a224e0370d0f54fed1f0dc"],["/post/2ae43b86.html","55289c69a9cef16ca92e97e6c09e1e4e"],["/post/2ba82a45.html","1049883d4ecf670420a1bdcb15817747"],["/post/30072.html","5a91f53d2e1be2da61397c2b1ec920ea"],["/post/30479.html","7f3a9476983dcabc72598e393a383d1c"],["/post/31a6b40.html","4545c31cc689e39f958ba5c448635566"],["/post/325cdbf2.html","4ab6dbcb2979159b4ec20a8ea50a1091"],["/post/3319ed9a.html","834abc28795739f0a285d229e87fde6b"],["/post/3320.html","3c666f4971e7ceb870d87b8f1b4e807e"],["/post/33cb1151.html","5569bdeeaeb2d5aec6d1b62b15299db3"],["/post/34811d5f.html","2b006a3a90a8120782cb23dc831d0308"],["/post/348d4e04.html","592d1a2de49653d643b39d41692b2b75"],["/post/3526.html","addd6ba4584c2959b547ca881f2195ee"],["/post/35532.html","320bb8fa045527483b5fe0b4d5f4d83e"],["/post/35848.html","bb4d589467e5d7e847f906086e3a1b92"],["/post/37318.html","a6e4ecfb4e1be83e9fea34855cae8326"],["/post/37663.html","18cb8b124592367d1cd5913974df9417"],["/post/38035.html","18ca1b1fdc58f60c00ae3e821face01b"],["/post/38072.html","92f3c0c2b7541106d340772791f0227c"],["/post/38145.html","55dec88706bc69e21a8354756e4fc967"],["/post/39968.html","d50d94b946211e95ce255f5f03107fc6"],["/post/3de4bc69.html","6e4c5ca7abd5a128387af2f5b90567a6"],["/post/40583.html","0c37a11805d4ad967e1336ba7c90ea36"],["/post/40997091.html","784a7cd9637d32a2846846dd55f8de8a"],["/post/41129.html","357e28257e97c981839072a34702eae0"],["/post/41763.html","b9457bf53434203a62580fbe67561754"],["/post/41829.html","b0c0241f9f3551be624f09173e571808"],["/post/41840.html","99aea2158e798ede6ec5c172d4e38314"],["/post/41e39f2b.html","d08247a002d3d7b87292c78ad9022d07"],["/post/43817.html","15e1e11394336d06011469ffda1945d7"],["/post/43878.html","d7965713bf85f5f49779962a99c3eaec"],["/post/44250.html","ad233d67ca67217d88deb19523d0c98a"],["/post/44336.html","351cece92ce52f29422188b278784a84"],["/post/44454.html","667cddce038b046c54295bcd7cea0197"],["/post/44487.html","fcd6748fea915f5bfc4776ee921d8b4c"],["/post/44914.html","bbfcb785c6ee4b36327ecb4a4a61d222"],["/post/4551c130.html","1d2ef1f12daf0dcc16998903934d95d6"],["/post/455a4c92.html","474ab279b832f604b037f0558580c2ec"],["/post/46466.html","30417a56968610a54b4073084d36d3fb"],["/post/46925.html","263bc7f2328b06c7713d8f52dfccdfde"],["/post/47075.html","07733041010ab285ee9d82c9795cf3e9"],["/post/48220.html","c9314323840a28d55eaa8b4cfc7d8ce3"],["/post/4b1879e3.html","8da9eaffecc89b08524c5e6ae601cad4"],["/post/4c720881.html","7f5010de874b06e969e4e815dfa7688d"],["/post/50daec4.html","ec29215570f7c17eafedfa3cc4e1d166"],["/post/51491.html","d6790738050c0a5107cbd620c24e4f94"],["/post/51e63dcf.html","e68e454c490c4805981912587d28a3d3"],["/post/52078.html","07caa6b7b685c5067e9e44e11eef2061"],["/post/53677394.html","c8fa89007b54a594b7fb48a27c3f6468"],["/post/54300.html","0293b7dbce4adcb7cf698ea61a4f1a89"],["/post/54612.html","ea46e3692f43fedcf91d1a449505e501"],["/post/54613.html","67946e339210591cd099adec2e649631"],["/post/54708.html","bd00558f1d766b941963609415666f8b"],["/post/54778.html","3e33e94fed173ac7f221e6e115cdee8a"],["/post/5490.html","06c396fa32c17647acaf90f35145be77"],["/post/55046.html","7b501ff526d6d2cda91eade6154ff950"],["/post/56929.html","2186e13f87e541e624eff60e1bff68ba"],["/post/57339.html","bac092e7771e48934cc27976d7a062b2"],["/post/57449.html","c607d3a7592fb9df8d00605c1f13930e"],["/post/57453.html","3e618ff0d7e9b84434dfbbfbdc4ca409"],["/post/57671.html","0ee1a912a451fbee371eef88b5c2340f"],["/post/58313.html","9dd1f98ad1c5fd8664c1bc9a547bcccd"],["/post/58481.html","10ba641c50bd5ccee2e6ce781d967a0e"],["/post/58986.html","3d2cca263ac2fcf5701429f8f587bf3a"],["/post/59431.html","937dc7de1c475d0f4b4a22d79e04a7df"],["/post/5951da65.html","60dcb93f43a5f1490f68ad5c1758c171"],["/post/5be7e977.html","9d8564ed280f508aebe7cfc1b891435a"],["/post/5f9e4eff.html","b4c7d270dcbfb4765c7b3953187e869d"],["/post/604b49d0.html","1f42482400b1e91cb3f110919a922d97"],["/post/61312.html","29b6bacd2809a4c04adfa8dc04d9d747"],["/post/61738.html","7729158310b36fc8ded67ef283ff6a0e"],["/post/61809.html","fbba9d1ad6c60b2cafdcded79c4bbac4"],["/post/61eaf19a.html","c0cdb8481a635ccc335af9cdf126136d"],["/post/63002.html","d63cf09667994eb09c0843b361dfe191"],["/post/63711.html","dc9060989a6e40543782f60ffc360758"],["/post/6587.html","d6df887eef48cef71a3b92343594495e"],["/post/6589.html","27a89f73521a14d02daa39a8e97815e9"],["/post/67454659.html","ad49987d0a95363ec5a0f7be9de4dabd"],["/post/6880.html","2438a478588e476d89e527a9debf9c8a"],["/post/70263071.html","bfbe5586bf30fd038488375900f40e53"],["/post/71038564.html","deb399e0c08ec0358d5ca84a78971b5b"],["/post/7119.html","0ed1f2d98d85aca43fd41b77903b1d75"],["/post/74e7fdff.html","aefd16ab33e63da1b671249f0695d557"],["/post/7502.html","07c99e29b04fc5f719029f9002d43738"],["/post/7564.html","e0c9c588cad17ba07221e3eab5bbd0cb"],["/post/766f9b60.html","cd36d5c5732b0d4a1f541fc555c82487"],["/post/7ca31f7.html","8d9d7f31c7d94d657f9a0563734fefc1"],["/post/7d1c86da.html","bfab2a67c3d2cbfe3ffc4573d9896fbf"],["/post/7f3bcd7f.html","a2f6f53a7fbb05522c3343a08510a48b"],["/post/8039.html","3f4ea4e6a1f09408410d48b3e12ac2ef"],["/post/8050.html","e5ea0ccb78771fa637a2d58fdb097c2c"],["/post/8072.html","027028bbb2ca2524c335204dc460d3cc"],["/post/8274.html","2efd87a21deebaeb322b060816eff4bd"],["/post/8372.html","4450095d6aa3d010d1fbda825f753a35"],["/post/8498.html","b4b1e2ab7701d404b3ecd0031a29e601"],["/post/85b4e13b.html","75118c1c257f466f5b1ef1d00695dbf2"],["/post/912b2566.html","cb98fc73600326a96336335cca9f03e6"],["/post/9187.html","089c0c71ce09de59b0b003671cacce06"],["/post/9197.html","982e02b3f75662f99e7f04c20ad92e26"],["/post/94ceb2fd.html","6fb17dad2fe1df5b04e0e6ffd5bcd6d3"],["/post/95495db.html","4d49c43822fee67c31a77938bdd5c326"],["/post/97246020.html","3dd43f2cd66c3e1f38108fd0d2ecab87"],["/post/9954ba8e.html","7d2dc63e24cce851a9cf084cf43c313b"],["/post/9d855db5.html","04aea0c0c34f6a63d1f993bad13a82c1"],["/post/a3a786d6.html","7391a563f141f90656d457d8c30b7b4f"],["/post/a444b428.html","ed3a8bd439e038a50a18e4481e42d6c9"],["/post/a50b8908.html","f32820cd02802ed5fbd4b699debaf98d"],["/post/aa1eade8.html","3d29dd6813cac695d82a3fee891478b1"],["/post/ade8c6d6.html","7b40e078b5c85ac63e85ea298788220e"],["/post/ae8362df.html","a8d5b44c76a03dd9c7a3f6786e8e49f0"],["/post/b4c1d206.html","8308f089b095f2aa57a8f0041ac35417"],["/post/c82a1c99.html","7266c4e1aa479f51508c34b43ab5d80a"],["/post/d213fc7f.html","028bcbff9320e91ee12ba10b9b46b324"],["/post/d431fab4.html","72d8b19b9d6df6baa17c2c33219e33c0"],["/post/d5381517.html","a9f50f98009864e493ed9ee479bf1fd0"],["/post/d94f88de.html","1d6cba2d9f8b34821d901f68703e9a84"],["/post/e058ffd8.html","92379d955c6d9de02018a961b80518ab"],["/post/e0f8cb74.html","0eaadce8fc78359368b7ec6cbfaa1ef2"],["/post/eefe591f.html","7ab8f3a81d499a87e706874273d4856c"],["/post/ef296a07.html","17c7b73a6784492f3ecae2a1a2470618"],["/post/ef3a3fcc.html","218230537406e49d889893f1826d9c2e"],["/post/f201f9fd.html","2d23915c8b1da09af238305975770d28"],["/post/f79e4123.html","5fda61ce7d97e698deafadf7d94a062d"],["/post/f8648a1d.html","0c9a7650e6c326626bfb76707cd2bd78"],["/post/f89cb603.html","4ab85255f70c4dad5c8bc7acefecbf9b"],["/post/fa288682.html","c13da1fb855e640c7380f9d7a16fca10"],["/post/fb98053e.html","a3ccc48d8393145d0097e5541f266b16"],["/sw-register.js","0a4acedb37deb40c1a7164217d6c8108"],["/tags/AT-T/index.html","5405f4927e146859917a37aa270cb96d"],["/tags/index.html","0a5b2d4708285e638c4217b582ad4f6c"],["/tags/动态规划/index.html","be7f42ddf7b06b192726aa959a90a32b"],["/tags/字符串/index.html","a2471f77226101ca0f62c28a07a0e4d4"],["/tags/字符常量/index.html","6929fac127e12c1f8b0d3c04c220f969"],["/tags/快排/index.html","9f526d038528f1e93f427c99e9b197ad"],["/tags/排序/index.html","a90cb3a7b69e9809d51de492a65b13a5"]];
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
