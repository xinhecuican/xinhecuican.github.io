/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","e9b858df099263463e173845673a926d"],["/archives/2019/index.html","576eca9245f05c2d1f55b9de361451fe"],["/archives/2020/01/index.html","ef5ae61a33d72f3c1b7c59f091150fdf"],["/archives/2020/01/page/2/index.html","73a1cf97ab606e35ede2a2681018c17d"],["/archives/2020/01/page/3/index.html","eee9ea8ccab7fc9f4425c3d5b160629a"],["/archives/2020/01/page/4/index.html","084a6d504f5ea8f975204a71530e8ad2"],["/archives/2020/01/page/5/index.html","68869832de33a3716cae134be247299f"],["/archives/2020/01/page/6/index.html","1d2b144071e585a5e3d4f1201d7e66db"],["/archives/2020/02/index.html","11f4d373b7e764669d3916af767ebdf5"],["/archives/2020/02/page/2/index.html","b34fe94a516029b1f20a8717c6939ed9"],["/archives/2020/02/page/3/index.html","a080341659067c4d7f8dcfed00c739ef"],["/archives/2020/03/index.html","c5d0d39e87457963c900f662eec90f03"],["/archives/2020/03/page/2/index.html","6d8f50bb6f4d5d127b573957abda43c3"],["/archives/2020/04/index.html","267cf35a91a9fc54d8f4e4856ac426d6"],["/archives/2020/04/page/2/index.html","f78738ef41351ae4b70fb5d44b3e073f"],["/archives/2020/05/index.html","41cfde23d7d7da9c0f7e2b5047b68f79"],["/archives/2020/05/page/2/index.html","05394c476d7ccd6a0a7dec5def9113d7"],["/archives/2020/06/index.html","8b52be045efd73be22f4c3265d7e7b17"],["/archives/2020/07/index.html","c0689bc68e54bbda2079a087742eb5bc"],["/archives/2020/07/page/2/index.html","c65b4da98b03d8f2ded8745d39072aba"],["/archives/2020/08/index.html","27ab34ec902adfcceac83a222d981f63"],["/archives/2020/10/index.html","365a722e1f2c447974ccc96a554e433b"],["/archives/2020/11/index.html","79b873d073748cc1485e762f7d789cb3"],["/archives/2020/12/index.html","6caae875377dc7d68fad1701037fef0e"],["/archives/2020/index.html","61e037f160cd625fd492d58792c830ae"],["/archives/2020/page/10/index.html","6e795f1e2d3b15ee84647ae2099369c0"],["/archives/2020/page/11/index.html","d7d9ea0f91e932330ca28c5afd6fc54d"],["/archives/2020/page/12/index.html","e0cea16390ca588031a32e4d61fad3e3"],["/archives/2020/page/13/index.html","6be55138cbe2f149c677879dd1a00f49"],["/archives/2020/page/14/index.html","75e37b6bbe1812432fa665c3d740e6ac"],["/archives/2020/page/15/index.html","7a66f83c069ef1eb1efd3e5bba9395f1"],["/archives/2020/page/16/index.html","af4b435d0efba9373da1c2edc789fab2"],["/archives/2020/page/2/index.html","df0a30ff70c7d003f5fc89f0df6653f4"],["/archives/2020/page/3/index.html","314b252f143c7923aebd66b09d767f75"],["/archives/2020/page/4/index.html","a9838d5e5e0786bba734b181b3608201"],["/archives/2020/page/5/index.html","e06b819fb732af1415c18d8acd174243"],["/archives/2020/page/6/index.html","e4d6829037af9a3d7600467eb0e5d6d6"],["/archives/2020/page/7/index.html","0d1544154a49ac4fef3b57a0f6da029c"],["/archives/2020/page/8/index.html","5cad8465f78503819d7d5bbd91b87e5b"],["/archives/2020/page/9/index.html","e94b1d8a1858fad4d7e9f80ce1041080"],["/archives/index.html","f7acdf0cea2b5afe072c3bc8d0ec79f0"],["/archives/page/10/index.html","c1ecc45a749c1be95900ee7ab41aec9a"],["/archives/page/11/index.html","535cb6102bd78555363eb35f9e70ab2c"],["/archives/page/12/index.html","ada98c1589237162559d9598ebf186bb"],["/archives/page/13/index.html","b4f3ef2965d3d2c8c45122dc1d3478a4"],["/archives/page/14/index.html","d2fd70731598182c907fe1d7da26245b"],["/archives/page/15/index.html","a137250111762618ecd06756efc881c1"],["/archives/page/16/index.html","f07e93744cc0bc9c0090910f9a9c43ca"],["/archives/page/2/index.html","352526fe0ba84d02db58dbdaa9aff35f"],["/archives/page/3/index.html","b37a08e9d9edac12efbeeabf6f675a4e"],["/archives/page/4/index.html","7747f1634a927c318ef624c81fb6e774"],["/archives/page/5/index.html","a498a3669785aa82aa586f7bc03b9a8d"],["/archives/page/6/index.html","4971d5e9ebcb5fb059c4431cfb01b8c4"],["/archives/page/7/index.html","98d35eec9fa3674dc673cd236a86a84e"],["/archives/page/8/index.html","a13315f01f37cd63700ec33213413029"],["/archives/page/9/index.html","a0f5952c6732eec4d8347e870bd34c79"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","0ee1421cb706d6044c43c1524666029b"],["/categories/Linux/page/2/index.html","eaab686b4cdd62ac2d7c6b4e18acb0f4"],["/categories/Python/index.html","46a4b1f5ae2761881eccce86fa235744"],["/categories/c/index.html","9200c069d831b70dff8529b819f2eed6"],["/categories/index.html","6236c7bae41c8fe253ee761735ee1983"],["/categories/java/index.html","830d5a2759c520778c392579ac8654d8"],["/categories/java/page/2/index.html","04cb6c06012c3573562aa2d9ea89cf76"],["/categories/java/page/3/index.html","1b2d54571376f40b41db5ed1e0dab1f3"],["/categories/next/index.html","6d7b899c77a1ae6656f7d268050e7506"],["/categories/stl/index.html","74526c839986caa17582e4bed2bba068"],["/categories/windows/index.html","e6ccb929cadf2fba76e7c57bea87f90f"],["/categories/基础/c/index.html","7f6cdbffb301c6aafc4fcc155a47d5ab"],["/categories/基础/index.html","ac3dda350025ed1ab827a4afe4b7979f"],["/categories/基础/page/2/index.html","c803cf8a041683c6eb573d99d7fd3817"],["/categories/数学/index.html","4e2148d668d4d350517cba18e85a62f6"],["/categories/数学/概率论/index.html","ffbc14def94e6e8ca3214caa90904526"],["/categories/数据结构/index.html","11d59bcd9c7eec301fdf459b22e757bf"],["/categories/数据结构/算法/index.html","ed60615c1f4cbe07631da47b2087eb69"],["/categories/机器学习/index.html","c22c20838419b06d6ddbb614f7a87944"],["/categories/杂项/index.html","e116afce59a996eb13d6d50d884f759e"],["/categories/汇编/AT-T/index.html","cd2df71f9488d27cf1f15e9a54c6205a"],["/categories/汇编/index.html","45f9d78562c330ea59a87c87e44d6564"],["/categories/汇编/page/2/index.html","5211ee62dc576bd319ac4fbb667b598d"],["/categories/汇编/page/3/index.html","9b678cedf28a645f896fc29d10dd4b5a"],["/categories/算法/index.html","bf7383568ab170059b61be5da402d23a"],["/categories/算法/page/2/index.html","a135daa2204d9c2e5a5b9a84fcd6a815"],["/categories/算法/page/3/index.html","f5ac4dfbc202991517ae47bf8647f9cb"],["/categories/计算机系统基础/index.html","90ef734c9b56df7d62642d99dcba54b2"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f2c80942bdd196f801cadb527306f9d2"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","05a6f0d85f2c63356becf086cc26ba58"],["/page/11/index.html","eaff4160d00b9734daf271d7bb4a577d"],["/page/12/index.html","074e072f3574c2b33eb3af44af2cb63f"],["/page/13/index.html","91e0f5f004d9b883a04fabc39076d89c"],["/page/14/index.html","4ed376a6ded09e5016534a3070c453f9"],["/page/15/index.html","ee74d831d46a9cfb4c4d6f67d6b6f122"],["/page/16/index.html","1302f0575bf469b528ad41073bac67ad"],["/page/2/index.html","408dd5561fa231ccbbc7375f7845f545"],["/page/3/index.html","645761720f29aff3ba06cff9085a7490"],["/page/4/index.html","736d062e049eb5b00602853561543251"],["/page/5/index.html","6d0be2039c6129ba30fbbe8fbf39156d"],["/page/6/index.html","5bbad459c9320d9dc57e17ff3759930a"],["/page/7/index.html","fa95bebb38b3edcb4374dbe4ce99e39a"],["/page/8/index.html","8fd58a940345ce83f824718d8fd0a7b9"],["/page/9/index.html","da64636714d5cc705650a14bbbd1141e"],["/post/10919.html","1b7d38adc3e9cd32b508a7274549b74c"],["/post/11051.html","d09ee1cc78ad9e648d3765f2df5177e3"],["/post/11306.html","81b2907d8ffd03b9bbedc885b1346d24"],["/post/11491.html","ff6de34480b6ba7eab147e3b8e7dbd4f"],["/post/11799.html","4c7bbb49f316deebe1e46f42afaff6b0"],["/post/12334.html","494e92e60ec751c627ecf24d93ab3d67"],["/post/1326.html","a930a8867fbe20f9f00f0104205e9b0d"],["/post/14379.html","878ab0dac592a40a15bed79d4f5c9a85"],["/post/14511.html","ad583790bd407f448652905f98f7598b"],["/post/15201.html","46f4f3bc48c904f7fc1dd52e9e865f08"],["/post/15425.html","e5b09a79fe3ffe1686b909dbf248b65e"],["/post/16107.html","a107be451141e4a672ae86d9401da5d3"],["/post/17862176.html","5f0cbcd976f0453cc87ce20c98067858"],["/post/18431.html","424f58b2e6b10a5cd4e33945ed8c4b86"],["/post/18912.html","f4bb11b535a20a2e31cd549bdf9c8b8b"],["/post/1b9c8662.html","3190a00ee9d7463ad34821f1bf5f6209"],["/post/20198.html","244c1208511059fbbf705c6c867213c6"],["/post/20ff5ccb.html","40d953edc12cb1bf3c3250164f5cdc5e"],["/post/21624.html","0f0e6f5ddcdaf8449edb4a1865432c80"],["/post/2170659a.html","e5e0dd4771b6bcb07af1e39589963b7b"],["/post/22102.html","d0d84e4e7945065dfa576f78d2447c08"],["/post/22493.html","eb09038e1f510210b0313a9a26457fcb"],["/post/235252ea.html","dd0d3e1793cca8a11671dd358ab1826d"],["/post/25699.html","c33d3a05166c288308795c27df204701"],["/post/2647.html","75dd7b15435ab24c6a08f44206b82724"],["/post/26477.html","2e23dacbab190ec2f1a474ba993a96ed"],["/post/26671.html","f84294d4073f177c73f9813ca335fcfa"],["/post/26737.html","184c0f8d9f3bbb30ee762193c79ada38"],["/post/27045.html","8bc57f03d08ea12d8cf0df92d216f127"],["/post/27621.html","fcb7e57ae81b9d7dc5ed611a6fc7f873"],["/post/27890.html","a35541ca63c093505d73e0642d168d2a"],["/post/27980.html","ce19d637e331dfb06ecb0f7b2a316ee6"],["/post/280b588e.html","9789d2e4e57a2f39230ebde760eeca8c"],["/post/28579.html","8b8954255fe987dd93e7eb2fedf1dcbd"],["/post/28877bf.html","6f406447c0928acdd9179b196ca198a7"],["/post/28954.html","ce30d75a50c2dc73525141bd71372727"],["/post/29378.html","243d3a0f99af56fd1a4a8c9c66942680"],["/post/29949.html","ee37673d651b34c3390df337a4a507cb"],["/post/2ae43b86.html","03727e2a94ad54002a00b3aac1b6c7cd"],["/post/2ba82a45.html","30db528f60929c76436546af8d94bd15"],["/post/30072.html","9251e6d15f827e27dc8d048ad0178b51"],["/post/30479.html","f9242fe8a30468f616674834720778da"],["/post/31a6b40.html","2b4fb601147ca09ea2cd85aff110dbfd"],["/post/325cdbf2.html","bb8a17486e50bc9d6df8ffbada89e0ec"],["/post/3319ed9a.html","019d1b845f120ec75f2483f4145658c5"],["/post/3320.html","3e7f9cd4d027ae6232ddbb2b339a6162"],["/post/33cb1151.html","fb3327445c19d085832c97ceb8a3afd7"],["/post/34811d5f.html","076f4a0c70a4fef1420aaf2061cfb565"],["/post/348d4e04.html","e868fc0bc3cce432f70905466010e649"],["/post/3526.html","88419579615a889aecbf83bc53fb6dac"],["/post/35532.html","089a073a9af8401ed27338d6bfa5507f"],["/post/35848.html","ef2915191e159fa120695773012a60aa"],["/post/37318.html","782f6c69b1ec2cd96258dc0ed1d6d05f"],["/post/37663.html","3a69048305050f50cfbdf5d85673327d"],["/post/38035.html","a144787f413f371a9d399fab5f280eba"],["/post/38072.html","021eb4f1dad6acef950fc944532964bf"],["/post/38145.html","7c970c733d54d7c761af2147d270c3a7"],["/post/39968.html","a3d06d90d784d1bb844f9aee9684deca"],["/post/3de4bc69.html","6d8ca3186fb37cbd695de40d0ea78800"],["/post/40583.html","d5eb7c6dedf665c12e269ffc9c1106a9"],["/post/40997091.html","84eddbe439575914291aa4462c77e735"],["/post/41129.html","58c931888e177660ebabc9e7ca8ae7eb"],["/post/41763.html","36bdd86b4da1b35236e46198ed37e5b7"],["/post/41829.html","2cb8a84acb73a3984c29c2d3daae0aef"],["/post/41840.html","68a5dff350602f1282dea3bd4ee7b3fd"],["/post/43817.html","9be8810317220afa94057ffc6cdfe15e"],["/post/43878.html","749d0979e621fba81c732de94bc3b31a"],["/post/44250.html","2aa3b2aab3d79cf645ae9068cbe4bd5a"],["/post/44336.html","f1a83d8c6730419e64bc5d72936cbfe9"],["/post/44454.html","c58e02fe3c0a7562b97d4f2eb630bdac"],["/post/44487.html","28338bf4c9586711860d349f1ab7a462"],["/post/44914.html","b1f7e264a6b003130fd1381d12ca4d95"],["/post/4551c130.html","e2b06219f99aecdb887117e37f7049ec"],["/post/455a4c92.html","57035cd392b236744578232f2a655ef0"],["/post/46466.html","5e0171c4ddb2c7cdcfbe4d872b5c45b5"],["/post/46925.html","0ea00f20a9f8a32458d3625f1b15425e"],["/post/47075.html","13e03c5e5417c3f6f6a6a05a98061417"],["/post/48220.html","d3f0c588a33c168b3835c0f1509a9515"],["/post/4b1879e3.html","7702a2657c52e038c22b854f0328c5e8"],["/post/4c720881.html","c472f39a6275f5e18e925d8cbf0d4bca"],["/post/50daec4.html","4e090527b4ed045f3181a29af00ee5e9"],["/post/51491.html","2723156f57687c263039f23eb64c4323"],["/post/51e63dcf.html","7df6e066eec17295f3a36cb3da575f34"],["/post/52078.html","bef612c177355f060eb4a5359ece0059"],["/post/53677394.html","9cd5b4a389aafdbfe538edc2d992bd21"],["/post/54300.html","ae595bae1a5a1526a81c19ce22ff3c68"],["/post/54612.html","5c68c6097a0c3a2815be4facce847a92"],["/post/54613.html","c94975899bb633a1b4e7b3bad7bb7500"],["/post/54708.html","c2b8d43921896381d678e3bb25c5a260"],["/post/54778.html","e5f46ee80d404670bec84571c8dd5bed"],["/post/5490.html","be1e63a158c04014677bd25274369b78"],["/post/55046.html","2559bcb3f23e415599545dd4c0783cb4"],["/post/56929.html","1800ff4370d8bbf5dbe19678f3df5e3d"],["/post/57339.html","ff070ba8942b413bc51249a8e6d730c0"],["/post/57449.html","ccffdf08ee0ddc47f29c5c76b806fad8"],["/post/57453.html","d69fc59eb7d55c6171614eb3ba8056ec"],["/post/57671.html","f84b71f1e2e74fd76560ae703faefc3e"],["/post/58313.html","71713094b991e928b6b37452cf5efb8a"],["/post/58481.html","a5fdcc2cf389424b688481d75c76897c"],["/post/58986.html","7182c8b832332c73171b3ec2789f914b"],["/post/59431.html","de6045a395a16ec5efdc74fbf9cd39ed"],["/post/5951da65.html","fcee68e466fe7c8cfb826b146d678943"],["/post/5be7e977.html","42a7d5f01e4e5450435d14333c22d8cf"],["/post/5f9e4eff.html","21620317e704e4511fe5b0289e0d2a53"],["/post/604b49d0.html","fa472f4f93dcb504743c59cac82c5267"],["/post/61312.html","3d9072e920a101154d2a94e8540b5b68"],["/post/61738.html","a17d55ce6aa2bb5d897f347bbe22fb1a"],["/post/61809.html","3b0f004e6fb362468b77bfdfbe11c0e1"],["/post/61eaf19a.html","be69db10445c2c9dbf30a0d2a35254d3"],["/post/63002.html","3075d8dd8f123df44de8f052165a8b10"],["/post/63711.html","f8335afae8649ad0dd343d8344c73283"],["/post/6587.html","19f80e1ca3f4e5ff36fb45ceed8b27cd"],["/post/6589.html","cc6d667058fb45aaeb1f70413bc1a393"],["/post/6880.html","1b3e8f2034f537a6ce556405144a2439"],["/post/70263071.html","c7d70ea807082c11eec61604138b2e50"],["/post/71038564.html","209056e87beb42832a036accc5662480"],["/post/7119.html","7edc53a1a18526211995360070a0a36f"],["/post/74e7fdff.html","94603214e439642c34e02ab76bb728f7"],["/post/7502.html","f22e7aa995aed4699350fcd66914853c"],["/post/7564.html","97991cebbc18577a68df3b7349572323"],["/post/766f9b60.html","cf93fcfb52bfc6896e0a84d829031c75"],["/post/7ca31f7.html","f7198ac3658e3598ee2456a4b0945062"],["/post/7d1c86da.html","7f2bf5136217764e9e844b4e1d32a90f"],["/post/7f3bcd7f.html","80c77c0514cf862b6c347a87a56e4417"],["/post/8039.html","d0c045dc7e0e5cb84e40ff604f7b50ee"],["/post/8050.html","d7ab7dde6708acaf989e81fabb05d158"],["/post/8072.html","7247bf6eec3f49ed57c9d2bcc836037b"],["/post/8274.html","5a900789bee2db02aa4556731226ea90"],["/post/8372.html","631db53252d0b73fc70963261a023f4b"],["/post/8498.html","906806c6a9717b4e0aa0c64ce8bb1783"],["/post/85b4e13b.html","48ac93c8f933337988f2c605775e4ee4"],["/post/912b2566.html","0d313ce1a2268a808a11a61336d003d0"],["/post/9187.html","f6cb949d6c9221df9e073802dd794ad4"],["/post/9197.html","557b40d965e16666920b40fa62556834"],["/post/94ceb2fd.html","b26cd1d62c37ee31665c172f20afb592"],["/post/95495db.html","220fdfa2820cb6fc6992342aabf0487b"],["/post/97246020.html","d0e93ae73164180e882a905917422229"],["/post/a3a786d6.html","d7343d6396f4e880c5efd7c680f68b5e"],["/post/a444b428.html","9895155afb0c4c9c65df5dfdc960af41"],["/post/a50b8908.html","20c6fffa209e650eefc2e726e9bcf6fa"],["/post/aa1eade8.html","ddf51472fd28ab3e2c71b466a1f1bf43"],["/post/ade8c6d6.html","584c53f35c29fa8d53d9a46c7178435b"],["/post/ae8362df.html","6595719c9866bc3bdeff8201e6379c36"],["/post/b4c1d206.html","c7a041ad11a92f673661785e61d6fa2b"],["/post/d431fab4.html","0df0ddf1d37616d4a7d26fc3feafdd49"],["/post/d5381517.html","e382b2b3f3e613ff7056e3a566422cc8"],["/post/e058ffd8.html","ac588c7cea803f1b9afaa657eb63b172"],["/post/e0f8cb74.html","2109de5548fedc9c5ffef4f9a6a58cb6"],["/post/eefe591f.html","da3e29ed8dfd9714a20c4777b58d7fd3"],["/post/ef296a07.html","ab288305d98e9d3091746ed5c0071b52"],["/post/f201f9fd.html","90e0d2e581006835c341ed926b208b7d"],["/post/f79e4123.html","e67e571b605ae770113e9ee58f71293d"],["/post/f8648a1d.html","07611c77dc4c4ef51c30cc2919f960ac"],["/post/f89cb603.html","0453eeb4a6b99ace606c89f1b48d51bb"],["/post/fa288682.html","ebad6ce65b611e80917a81003d93a94a"],["/post/fb98053e.html","d2a23c5194deacf3af709771e8b1be89"],["/sw-register.js","6a677fab634077bbf45e538691ff650a"],["/tags/AT-T/index.html","2d60091c1ceaf821ca25be896313ee46"],["/tags/index.html","d874edc5f0a22057746d3e8679654297"],["/tags/动态规划/index.html","b4bfd1957f20d16657de84879ee92386"],["/tags/字符串/index.html","007e9e01681596ba11793cc51bb8c6d9"],["/tags/字符常量/index.html","3018520826d21d8f8c1e99c8ed57a0f4"],["/tags/快排/index.html","6673ee8ba5d19d858bda692d50a35747"],["/tags/排序/index.html","7d2df8e3d24620cc1f3d3e9e03ad959b"]];
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
