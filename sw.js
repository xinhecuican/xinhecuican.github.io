/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","627fc4309a4a34db94da2ed536caa7db"],["/archives/2019/index.html","4d6e16560e79b22fc98d00064dee07b4"],["/archives/2020/01/index.html","3b4e1e93d9979950d48e49a1bf24c23b"],["/archives/2020/01/page/2/index.html","4bbc3e5991e95d9798ed8b55fed715b1"],["/archives/2020/01/page/3/index.html","9c71d152db3e67cadfcd49bf5c7f2c6f"],["/archives/2020/01/page/4/index.html","e2d438149acdb8c19bb10cc27e5a91bf"],["/archives/2020/01/page/5/index.html","7632abc4b9e2de33ce4e177304625bab"],["/archives/2020/01/page/6/index.html","a3a65e68ef3598f69c61b4bd4ec64a0a"],["/archives/2020/02/index.html","561e1ed50527f2d3c9a715203a2202ac"],["/archives/2020/02/page/2/index.html","49a6581c6c6304d07fd798977ed2b271"],["/archives/2020/02/page/3/index.html","8b91af81443b5096713e31c4b696e563"],["/archives/2020/03/index.html","efe6e5bd2a5a7b230ebfa030492d0cd3"],["/archives/2020/03/page/2/index.html","1e4293467b5b6595439a60b3eeaa2745"],["/archives/2020/04/index.html","d82feb63e2398d2306027b5d10a41f6c"],["/archives/2020/04/page/2/index.html","20062cf96f28d54ad94216c3841fa8f9"],["/archives/2020/05/index.html","4e749392170aef40c02e01309694da03"],["/archives/2020/05/page/2/index.html","536d90b8f7b637412ee1b02714b7c1ef"],["/archives/2020/06/index.html","4c49e8979fb10252f3ec63f40bf68668"],["/archives/2020/07/index.html","4711a46cde21209c6d76e76430a14592"],["/archives/2020/07/page/2/index.html","141129f1a8a54db8ad963d39d8d49124"],["/archives/2020/08/index.html","8924eafdb7718f8eeec58e4653d94186"],["/archives/2020/10/index.html","aba3e224a4b0806c8b0e3e694509948d"],["/archives/2020/11/index.html","a4ecc2119ef379e068a843b84a70477c"],["/archives/2020/12/index.html","1095c1d9850adac81208844baab9a866"],["/archives/2020/index.html","db7e1c3af70c339d982cbe8a50e12e4f"],["/archives/2020/page/10/index.html","443b19690fa7534f27a1cbcb33b0e3ae"],["/archives/2020/page/11/index.html","a0063d5c36151f9d0f5ecb96083ef2d4"],["/archives/2020/page/12/index.html","d64c4695522c34da63a605b7e08fdb52"],["/archives/2020/page/13/index.html","abc02517e5394cbd74e191dc2a1037e7"],["/archives/2020/page/14/index.html","ef96359f6f24f7900b79763743f36aa5"],["/archives/2020/page/15/index.html","6a516b8786ff78ab55de79f88d5345a8"],["/archives/2020/page/16/index.html","218af17c8438fa2e3421fe1eff0bb5b1"],["/archives/2020/page/2/index.html","aef7812dd00767732943587a2d29b64a"],["/archives/2020/page/3/index.html","f3f93e635ec0bfd6124549b55dbcdf7e"],["/archives/2020/page/4/index.html","586245add87fbe460bda2c52f6eac199"],["/archives/2020/page/5/index.html","74df623aebdee79792a5ad0931d48f42"],["/archives/2020/page/6/index.html","17116acab8f4f65ae0796f0a7b8eaa96"],["/archives/2020/page/7/index.html","35d218d16567f319825df18683686a83"],["/archives/2020/page/8/index.html","937ef20470db79f9d9c58599f3282cb2"],["/archives/2020/page/9/index.html","1ad4a3eaf90cdcd851b7a25e2300199a"],["/archives/2021/01/index.html","4e3281d916bec386e6d6e778d2d8f2bb"],["/archives/2021/index.html","7f7b603b1de116452e0d4dca8bc94dee"],["/archives/index.html","059bdf80dbc606411de581f4f3efcbc2"],["/archives/page/10/index.html","2f4c647462cae18fcc1125cb350f2b02"],["/archives/page/11/index.html","def8ce2c0f6e4002df8f91a09762847e"],["/archives/page/12/index.html","807684c95b312c106657320c917055a2"],["/archives/page/13/index.html","f24c2ccdedfc98ae5e577f0387ca28b1"],["/archives/page/14/index.html","52dedb8870fb2173466b52b3a28ed832"],["/archives/page/15/index.html","5fa63d73687609647636a2616101b721"],["/archives/page/16/index.html","4b50dcdd778dfe7246a93a6400a168ca"],["/archives/page/17/index.html","e7c79f0178637d1265ef21581c948f3c"],["/archives/page/2/index.html","234d8edece1ff20a7915e7046310bd08"],["/archives/page/3/index.html","450437132d510e3a8bcab8f8d730fc82"],["/archives/page/4/index.html","5014682d11eabbb862062a2b49f8b73d"],["/archives/page/5/index.html","4013a98f1f2da94f4eb4bce52c9ec11d"],["/archives/page/6/index.html","93b1f0384e24ee2e1f92845a5cb8fba2"],["/archives/page/7/index.html","2a0997efb4463502762fefe2c158f0ad"],["/archives/page/8/index.html","8750619525abb137859a4462b1a873d2"],["/archives/page/9/index.html","ecd99787f95fac2ccad45a4c1a5f62b1"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","4eb2fbc235181168b5341e22cb6d53b7"],["/categories/Linux/page/2/index.html","930106b94594963df0635fdeb521fc9b"],["/categories/MySQL/index.html","a898b51a5422bfeb56a15ffdb17ad274"],["/categories/Python/index.html","0325ded026247bcd06e792075367cabd"],["/categories/c/index.html","deea81aba1f2d1393680b67b2c419be6"],["/categories/index.html","48f184a84da897f068de4617d5884086"],["/categories/java/index.html","54cb66475dec7170ad68ee17ba32abdc"],["/categories/java/page/2/index.html","51dc6b940ac4ca0bab73b9dbc8588aa9"],["/categories/java/page/3/index.html","1c066f0bf6464b30b325ef105ba5836f"],["/categories/next/index.html","320f38b9f9bf36e4d8a9f194951e8e39"],["/categories/stl/index.html","30bcba794ccb34119cad7a05e5cb20be"],["/categories/windows/index.html","bb41733c69a5e89e3c2c32dcc54e1a2e"],["/categories/基础/c/index.html","7a6890b35ccbe3c435e7378992ffda68"],["/categories/基础/index.html","f72bbe531b0cb4f76184accaa5703925"],["/categories/基础/page/2/index.html","9181c0f49544ec0084ae75564d1fad6c"],["/categories/数学/index.html","26d4ef4ab59b460c115cd388068a8ced"],["/categories/数学/概率论/index.html","d2a3c2a26f34fddca2175031490fdce7"],["/categories/数据结构/index.html","85420025c5dacc373a0ed946a4d18734"],["/categories/数据结构/算法/index.html","2af397aa8316907d62c37994648f0b2a"],["/categories/机器学习/index.html","c555b0146df9c9c57116cac9dc949167"],["/categories/杂项/index.html","838068940235ec4e944dceb49fdfcf0c"],["/categories/汇编/AT-T/index.html","3fe526a7290ffa4866de234b8306f2d1"],["/categories/汇编/index.html","fd9e8d80dde68350f904ea8ae5b39719"],["/categories/汇编/page/2/index.html","e3e5cbdf112c8a26c65ac38fe2929f5d"],["/categories/汇编/page/3/index.html","874821b532967d9014a628b68ef66973"],["/categories/算法/index.html","d20511ce9ede8b1d4b2450523a7720ee"],["/categories/算法/page/2/index.html","59a711f4bf185e0947753798473aab39"],["/categories/算法/page/3/index.html","a6015a1e222608f7e290f76096e765df"],["/categories/计算机系统基础/index.html","32a6d47ec42d17ae126025f8e0424f9e"],["/categories/计算机系统基础/page/2/index.html","9e105f23a6d01689bf2f97e8589f70f0"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f4d47a022aabf33bc94c07733865e4dc"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","b7a52ae4c25f322677c27dffaed3abc6"],["/page/11/index.html","5f3666710c56464218ecc2e951c54da8"],["/page/12/index.html","4b85749efaa3b84621dbc1bc1610f6a5"],["/page/13/index.html","3e3c3f31bb210dacfc5c4308480b2264"],["/page/14/index.html","a06cf8ec88c7ad183b4b3b3e4b7433df"],["/page/15/index.html","6203b6fbea459c15570a8977fc3f6989"],["/page/16/index.html","450436b0f64435769c4283667f7fbbe1"],["/page/17/index.html","417d46435affb1c136959730ab497cd4"],["/page/2/index.html","731a38fbbf6f578e81f382b16e4ce0ae"],["/page/3/index.html","d6a6fd0fb58abf942f61035827fe6ca0"],["/page/4/index.html","9bb2edb4cb78e7a04cef93223ecdaf30"],["/page/5/index.html","34e5dd38a584df7523ccca2a057551a5"],["/page/6/index.html","832aa660fd7e4b6da30133fde349660f"],["/page/7/index.html","02f0f1baff41b8e1a2f11aa2aea5696f"],["/page/8/index.html","680819e08bffde1b40606a6ee98288dd"],["/page/9/index.html","d348db98bf3eed42a4d4bcfb54dc6426"],["/post/10919.html","6544d250b6be422b2f03455f571b09a8"],["/post/11051.html","04a5f1129a374afdf4f2c100bf48cf76"],["/post/11306.html","fbb22918672920efb5ca9fd00ba6a02d"],["/post/11491.html","d9407c9475e6099d130cfd3d7c7f1651"],["/post/11799.html","fbb6d8794643bc152496f16d48e905df"],["/post/12334.html","14eda22280acd3cc153f2bfc41cb571f"],["/post/1326.html","20433a59f2a5b1e18b21d8ceb623fba9"],["/post/14379.html","25db4503c9ba8a5bdeae71f2fbb0f9f0"],["/post/14511.html","6a21dca51dcfa5f27aced062e95ca352"],["/post/15201.html","0e012c38f89c5a268c487d9cc85b3d22"],["/post/15425.html","d108a04b2e6f786c3ce68c6dc8aee1ad"],["/post/16107.html","d308d9068841deb8f4cf93a184875b3f"],["/post/17862176.html","b0998cda5562eb76fda30decda44a90d"],["/post/18431.html","672dfe4f9644276b9e4ecd710e65ddb7"],["/post/18912.html","b9650fc0ed5f5974583b140e5f83bff1"],["/post/1b9c8662.html","7c80d604a8a91bec18cdae90621fb2cd"],["/post/20198.html","c6c760ee73b7304d623fec65c00a2ae8"],["/post/20ff5ccb.html","660591dc247cfa4dfbfffeec7c43bfe9"],["/post/21624.html","bf56e7e6d495f9e23aedcc8361ab788c"],["/post/2170659a.html","4d6c21761aef83a284fd6fbfff455b85"],["/post/22102.html","99aa4d88a10918a26206fe2baa1d694d"],["/post/22493.html","391f02b35c2af56a45c147072047d3c2"],["/post/235252ea.html","fe58d7ac613c494a8bd5baa3f323e831"],["/post/25699.html","d57464d9ca5320ef913bda2c6d3b9f09"],["/post/2647.html","4401b1f10ec7ea302d157f51ec5854a3"],["/post/26477.html","0839378134d28155e354f7491a20eacd"],["/post/26671.html","e6f8395337cce62c86baee0c387d927c"],["/post/26737.html","425493be3e7f60dd925a6380a12fd7bc"],["/post/27045.html","e5e3241662e57912b4c9255605295a02"],["/post/27621.html","ae6fa35fa0c8192d2807720567ad9399"],["/post/27890.html","05af5286ec0dfbcd5a74df139f30733d"],["/post/27980.html","c50ea6707c5d994ac74c59c51f48a9c1"],["/post/280b588e.html","b66c446a4a833e41bf601a3e65f3dafa"],["/post/28579.html","3bd79bae48615edfc60212f7b53f0e96"],["/post/28877bf.html","2b962aa92d420b4ffeefa72fa0cc7dca"],["/post/28954.html","64b79185dd4ec94e718f6d78ef99254a"],["/post/29378.html","227fe63cc2ebafc6228984352289dc9d"],["/post/29949.html","2a1262500672c342666a0b4deabc4b78"],["/post/2ae43b86.html","086c1c316ae1d44e37f03515c839c2d7"],["/post/2ba82a45.html","19c1d2f94e637dd7198b4bc31bf8da46"],["/post/30072.html","133781c712cef13be1e7b708cc02b221"],["/post/30479.html","88ca870829e5ea32848e27f52cb2ce81"],["/post/31a6b40.html","526e2ff25815fa6c3542da2afaa377e3"],["/post/325cdbf2.html","01a331f97acd0616eea2f4253e12a1a8"],["/post/3319ed9a.html","c80ee4a9e43ce445a025838f73b88092"],["/post/3320.html","7c5d99ac6ff66788a66c8e199f7423eb"],["/post/33cb1151.html","7ce420034367f556f841671f576788c3"],["/post/34811d5f.html","5602d3bd5ce5d0b10b9fd5a1bd445725"],["/post/348d4e04.html","8746ed7d7bc73aa1a35fc16738e9e6b4"],["/post/3526.html","630c248c7b36661d89e795c45fd6be62"],["/post/35532.html","3ebf3a0ba713a4c72dca6f72cc494464"],["/post/35848.html","67a559b59a3dfe7e5cc810f9a3546264"],["/post/37318.html","fa19540bafb72c99a7a04780bd386e00"],["/post/37663.html","4e8799cb8140819f0117355e99fee421"],["/post/38035.html","9b67e65feb13d09854ea62ce990b5efe"],["/post/38072.html","97926f0df445d04dfef8dd515300a153"],["/post/38145.html","b27e90ccce1648b3643976ff26020b21"],["/post/39968.html","3d3bf3373017e9101eba69839a35eac1"],["/post/3de4bc69.html","384bed0580a0e03aa963e21786f39bcc"],["/post/40583.html","efb089297bfca6a92966ad35667bf694"],["/post/40997091.html","e398a83d2714c8fc44c9a355e1499672"],["/post/41129.html","19231a7eabafc2e1ae1c3f0933fed80c"],["/post/41763.html","699a8da4a8b51eefba18df7c6e4cca72"],["/post/41829.html","7bc049452c2cdd31640cbfe3dd491783"],["/post/41840.html","e61087841cbc46dda05a49c3ca444a69"],["/post/41e39f2b.html","30be0903201952dbe9754cfc5fbbdcb6"],["/post/43817.html","4f27fd179ce6f30720dd3cac0553fdd9"],["/post/43878.html","03ff00fc14c377978e7c8dc7c1fa44e6"],["/post/44250.html","1a30d5e5af73b6818a0886e1786b2bf2"],["/post/44336.html","549a8a5f363d2de9e5882496db09f495"],["/post/44454.html","8811ce2322456d2f02526df10972f3a9"],["/post/44487.html","1309bd685e2034a1f47777e292ee2ecd"],["/post/44914.html","0e88cf85ea7447f2687b1c23afeebbb6"],["/post/4551c130.html","b8633c29052e328af54fff5d4f2dec2f"],["/post/455a4c92.html","d24169b28226ec6a68eb9db535fd66c1"],["/post/46466.html","e2783c86955278038b4f688732efb82a"],["/post/46925.html","7730285eb2433afa8586377c684e3a12"],["/post/47075.html","b5f0612e9299ab2b80ae21e441cb2391"],["/post/48220.html","f9834b5cb03632692bd46f639532d608"],["/post/4b1879e3.html","c8bcf6797401c51f762850e80fc2302d"],["/post/4c720881.html","be586a22530c5782524d06cb066a1781"],["/post/50daec4.html","a8f459a6f4df86e712ef06408d863cd4"],["/post/51491.html","4afb198dfaff71c45573f92fd48f25c7"],["/post/51e63dcf.html","6e8a068dc3e7c7dd816eefd083bebf0f"],["/post/52078.html","476a6f4ac49a52ccf75b307956b31305"],["/post/53677394.html","70edece6dd15360f81ce56244b2e8ead"],["/post/54300.html","6e6fe7d04453010cb4faf7f179553cce"],["/post/54612.html","d4cbc2b32fdaa46741aa3cf9ee42e5c1"],["/post/54613.html","fbd19efef7e9ef584d13ed41302bfacc"],["/post/54708.html","19d5dfb02bb0e060786dded82d77f558"],["/post/54778.html","00f7ee4a65fbf176a5d4986d1364425a"],["/post/5490.html","befb9ea5d280fe76786ac117815bb7a5"],["/post/55046.html","78c648cfe0d81ae6b53f124d00a4392b"],["/post/56929.html","7cd34dba8ec1f9bee40a982f08cfe76c"],["/post/57339.html","645e37907195788db014bb3f5ed3b0e2"],["/post/57449.html","69065511334d99f7ab751d7bb6d1bbff"],["/post/57453.html","ab735aa0458bbbe48e0ee93b3863b7b7"],["/post/57671.html","3aa311d24b1accad4fd83a0849df033f"],["/post/58313.html","09def728858e27f27ea6a3730ac18ef8"],["/post/58481.html","90de31e567dbb71c3b36df7ce5478228"],["/post/58986.html","5530432b4e96a4a5a863e0ba5ecc87dc"],["/post/59431.html","56686f6be8215d6019d0bedc82c70ad4"],["/post/5951da65.html","047cac9643d451accb95b1911647ab4a"],["/post/5be7e977.html","f3171342aacf9db7a5faf38c260feb2d"],["/post/5f9e4eff.html","6435a2f73b5f5870076b691cbfb447fe"],["/post/604b49d0.html","4e4ec981c35469a9e586ee1045eb7799"],["/post/61312.html","cf509e062222a202ebb03773336343de"],["/post/61738.html","cb4b7aeda2bf847a39a48936e844bff9"],["/post/61809.html","d27557609575ac75aeb4f69d8b55147a"],["/post/61eaf19a.html","70de8fcf46714b21386ecb58fe517e96"],["/post/63002.html","fb6593aee368eb1d89342b79d0f954af"],["/post/63711.html","495707693974c943063e7aaa79d9ce94"],["/post/6587.html","c36b5c617b15ce41a67c2a2674a72591"],["/post/6589.html","beccd71e8c80081f0129cc568ef9f3bc"],["/post/6880.html","bd7b45da57cc6770c3ac2765ca0dc9b0"],["/post/70263071.html","c7088072060413d274669bdff549dd9e"],["/post/71038564.html","2940ea49a1d3e9e2a215498178066f47"],["/post/7119.html","8dbf12dd0b40f5a952f6d0402de1592d"],["/post/74e7fdff.html","b1dae3e82545ec38841596e496b4696d"],["/post/7502.html","34b0b681e586a6ce6cb389fce7044077"],["/post/7564.html","b81ae834a7a03621cdc9e3366e4ef333"],["/post/766f9b60.html","48bbbcb56fea5c4e56d3b95d30176e2a"],["/post/7ca31f7.html","f2beed40b0a5152a11dc53b0eb0e7aec"],["/post/7d1c86da.html","79455ab2ced6e9fd6e81ecfeec590d81"],["/post/7f3bcd7f.html","10631e65f9e36b9ba40348024ef18f9b"],["/post/8039.html","d37e8fb8872f4ac104e25379ad850859"],["/post/8050.html","6711d7c5f15f1282b538ce3c5c189c2a"],["/post/8072.html","531cab45303e291e41c033867e1b6c9d"],["/post/8274.html","d17dd13a8701d4d9c6c765704b783c3a"],["/post/8372.html","651ad128dba85a4f9dd5a093db766aa9"],["/post/8498.html","bcb3a260619fe7e7dadf1e563e72110e"],["/post/85b4e13b.html","5cfa7df7b2dd411735a29068ae04ddee"],["/post/912b2566.html","ade6e82bfa90bbb1e520d13dea67b652"],["/post/9187.html","060a6d96a42b001a5e5ace14e80be03e"],["/post/9197.html","653a74f58eac7f1060630f3193936d1c"],["/post/94ceb2fd.html","81f3d604aad3dd1eaec1cb7f026c864c"],["/post/95495db.html","9058516cdac32f5f06554379686809af"],["/post/97246020.html","c5256a89f275a31be1be129c88e9ef0b"],["/post/9954ba8e.html","4058c859ec14975a490e130ed52e5099"],["/post/9d855db5.html","eff112d535a7e9dc672e0eb5ed7ff81c"],["/post/a3a786d6.html","2bf8928904eda6a7ea74e731488a19fb"],["/post/a444b428.html","81c2511474753261ef30c16dc9d700ab"],["/post/a50b8908.html","04ff659c41ab14aee6f006e575abbbb9"],["/post/aa1eade8.html","66e79739ecdd9dd1f13d8d86a6112177"],["/post/ade8c6d6.html","48734db2f158cea6c137fc840d1f2813"],["/post/ae8362df.html","6fdf32c69607f856352c65c22e80c46a"],["/post/b4c1d206.html","ab369bce243f76c13ec34c3c7fd2e3fa"],["/post/d213fc7f.html","2331fbab49d46febb8fa7e979f2614c6"],["/post/d431fab4.html","755a65f3c72057e73e694d4890d9eb04"],["/post/d5381517.html","0a6f5cf5ba082767f6d7608583d6bf07"],["/post/d94f88de.html","593d86fb5f62835472ee3d1df028961f"],["/post/e058ffd8.html","c13aad80e1a465a31c41eae3cc96f501"],["/post/e0f8cb74.html","cb22368dc5e163636f939787eaa1afe0"],["/post/eefe591f.html","fcdf6ac69f6ccb230005ddae2b0ee01f"],["/post/ef296a07.html","22e5023879ec152e4899656be8ab2e5f"],["/post/ef3a3fcc.html","2cdb21aef5d7aedb184a0b6a953105ce"],["/post/f201f9fd.html","0348e1b9c3bf729ce692c763e47dcc2e"],["/post/f79e4123.html","7e42e50c82708f8b10e0b0c378c923d1"],["/post/f8648a1d.html","b67890142ab2d98fe5db0a49e8dc03ea"],["/post/f89cb603.html","ebed1b7609736cdfef548fd819b2928c"],["/post/fa288682.html","d5365d7b01b27b31ea8f0d1e37aca821"],["/post/fb98053e.html","2e41898235af15b4022a68638268885b"],["/sw-register.js","f1e7c4c052737aae649280ea87ecec91"],["/tags/AT-T/index.html","97a80471c40feab8db17ade3c67443da"],["/tags/index.html","efdd02006b2206dea5206e448305dec3"],["/tags/动态规划/index.html","80d0de921990205a6ccfb7073a5dcc10"],["/tags/字符串/index.html","8b9de309c63299d7cf9d42706292b460"],["/tags/字符常量/index.html","21f7dd80245f5088de9035be52045135"],["/tags/快排/index.html","6f77d9d50fd3d5cb455db12aea378316"],["/tags/排序/index.html","15ba5c940746427167fd6602fb8c94c0"]];
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
