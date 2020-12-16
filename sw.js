/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ff2c566180d477a1a37b10d6395afdf2"],["/archives/2019/index.html","03148ea9ef840d66fadae6b0ff20c895"],["/archives/2020/01/index.html","733d6c866464eeb95710c091d546d030"],["/archives/2020/01/page/2/index.html","0e4a021456bc63b9a2e666eda4302822"],["/archives/2020/01/page/3/index.html","6e931ebf70522278c94863c40bed58c4"],["/archives/2020/01/page/4/index.html","70c251db1e64429638a1f59211b616f7"],["/archives/2020/01/page/5/index.html","4b5fa135e936722775724dc9f6093f72"],["/archives/2020/01/page/6/index.html","a99428e5b9b6ddb734a0faf7dfd336c2"],["/archives/2020/02/index.html","724daf9bd6411b7e67e32d99ebeb31a1"],["/archives/2020/02/page/2/index.html","71b1baf5413964c293f757c91f8e04e5"],["/archives/2020/02/page/3/index.html","322e22ac7766ba8154de2237835be990"],["/archives/2020/03/index.html","abd5df24a847558bb3f991c2a6f914eb"],["/archives/2020/03/page/2/index.html","fc5ad3aa75264a818b9771d1c503c22f"],["/archives/2020/04/index.html","25698eb85bfa904085302c41700f10d7"],["/archives/2020/04/page/2/index.html","28fe703648bac90710ac891410d6cc31"],["/archives/2020/05/index.html","d54d0eb8c97da89f2acf93b17301b454"],["/archives/2020/05/page/2/index.html","6d9134773959e354a839e4973ace73f3"],["/archives/2020/06/index.html","a70953c8d2b9973679af683f6baf0aa7"],["/archives/2020/07/index.html","3ad9ab1e5d498e14e676deabaafdb308"],["/archives/2020/07/page/2/index.html","41b452bd7995c0c4da8d1300aaf24450"],["/archives/2020/08/index.html","59491aa0538bd75bd50739a2287327a3"],["/archives/2020/10/index.html","ae68e069e363a9611f73706ec5418548"],["/archives/2020/11/index.html","4ff2551ceaf22c6a2cfd471b7e265639"],["/archives/2020/12/index.html","af05fc3540a8fa777fce7db05349fcba"],["/archives/2020/index.html","9c97b6e4a6e1b87b7d335efe6df051fb"],["/archives/2020/page/10/index.html","9c9764483244accc63d30fb7f1015a35"],["/archives/2020/page/11/index.html","f0828690bf62d47a9843cc3d5517288c"],["/archives/2020/page/12/index.html","2be75215117311acdfbde64e2b447e41"],["/archives/2020/page/13/index.html","3059dba771a3e10640a20bf875624706"],["/archives/2020/page/14/index.html","d04986048b51efb151e1b8e93ec2bbbf"],["/archives/2020/page/15/index.html","b72ba38d9322678ca6d6ca93effdca56"],["/archives/2020/page/16/index.html","7277fb318cc9539f61ce7c93a025224e"],["/archives/2020/page/2/index.html","52b405063dba257581884ac45e8be475"],["/archives/2020/page/3/index.html","d65f66ab1caec9b118fb925b649cba25"],["/archives/2020/page/4/index.html","04fa43491e8270d9c81e0fc3e8b9f249"],["/archives/2020/page/5/index.html","6fcc831b10f19a993e6ea7d21ca5e5ce"],["/archives/2020/page/6/index.html","bbda25ac704a8f86c9c58834b8d347c8"],["/archives/2020/page/7/index.html","a3ff9033b37bde48eee530e7ebd1ea61"],["/archives/2020/page/8/index.html","048af5a919ae6d5dda16e087199ba8f0"],["/archives/2020/page/9/index.html","55535681da43e9dcd3850c63be1a347f"],["/archives/index.html","ce461af5f0f02a081bdddf9c4a9fe460"],["/archives/page/10/index.html","6fb633e9b5ff0a11f6d7551f000c137f"],["/archives/page/11/index.html","30173352367f9cfeaf79ff7da6e7e2b4"],["/archives/page/12/index.html","1c0785564de3b7bf2f6c071736cfea5c"],["/archives/page/13/index.html","0fe3583f75b4baf887490a0f528a6e9c"],["/archives/page/14/index.html","4b1d3c34fdafddd2564a4d0ba2a836ed"],["/archives/page/15/index.html","10dbbf8cd87fccc0ec3dc75b15eb7635"],["/archives/page/16/index.html","c53dfa1e3ef2e3d8714634007a4a0084"],["/archives/page/2/index.html","da9ebfaf2d40f99014b563f76b0aacff"],["/archives/page/3/index.html","98deb688cd46a26a3dc9e3a5e435f45a"],["/archives/page/4/index.html","0a01d15c0537c739ccf798838241de95"],["/archives/page/5/index.html","f22ade1b7c68481d3865ac86ce069400"],["/archives/page/6/index.html","8cd271eac61c4cf06fb147e0f55a22ad"],["/archives/page/7/index.html","15c7efdaf8c3ac6577b421ce45cf351c"],["/archives/page/8/index.html","dc9036167b020831d67778b79c656990"],["/archives/page/9/index.html","ac7d02eec2719329e67dd802093f10c8"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","17bd6394868b69e8afb81b8866479bb1"],["/categories/Linux/page/2/index.html","6b20b95142a89adb019c4c14bf76b357"],["/categories/Python/index.html","d81f5418178d79fbed99f986ac7ee67f"],["/categories/c/index.html","6c68fef6f5b510edf4bc7de52b77c6f9"],["/categories/index.html","97f5544539d8462f1bcb122fa5fdd4bf"],["/categories/java/index.html","0475d87ab4e473868696b5b6a4eb4bf1"],["/categories/java/page/2/index.html","acbd63c221a708d23c934246d5fa2ed7"],["/categories/java/page/3/index.html","e3b02f287b2d09f60c107558f71c7aa1"],["/categories/next/index.html","16b47b4de1e1d4bf61ebc9f4d1117579"],["/categories/stl/index.html","c9fad12fad17a9df459072c123f3a5cd"],["/categories/windows/index.html","ef0c6161a8a0fee11633319629de9b48"],["/categories/基础/c/index.html","ececfd5042771c05955108105547121a"],["/categories/基础/index.html","b7b10edc632fcf8e740de6ec12adbdfd"],["/categories/基础/page/2/index.html","7d1485c8fe244835a5ba253ff11de8de"],["/categories/数学/index.html","5d380cc66f21acd60e0eae22628dba73"],["/categories/数学/概率论/index.html","100054d7984788889ef8a36b5c2bf92b"],["/categories/数据结构/index.html","dc8168e7eb88af155bf1cef9a52bf613"],["/categories/数据结构/算法/index.html","f06f859fa506633508b32d86f79476ca"],["/categories/机器学习/index.html","353e182ab8b236a68c40b36bdd402f74"],["/categories/杂项/index.html","4ab5f6265e01a9f1d6e3efd988c3e631"],["/categories/汇编/AT-T/index.html","c792208cf9694cff6d45ce58dc781b2c"],["/categories/汇编/index.html","7f42e102252223bcc64fa52fb97fb4f9"],["/categories/汇编/page/2/index.html","3f2aa71c57292803905fe561ebc7c65b"],["/categories/汇编/page/3/index.html","b15731698a97971e4b0b728fbc205a99"],["/categories/算法/index.html","b48c71b3be26521d2aef5d6da4530c0b"],["/categories/算法/page/2/index.html","6c4636ee8a0da9b2fb4ae59e2b5adc48"],["/categories/算法/page/3/index.html","285702061b382ac48c554928d8ad7515"],["/categories/计算机系统基础/index.html","d9402b56d6ed3ab50d6ee90ba363264e"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a5fe5be05d47cc76eb920f1392318939"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","afbafa73c63448d11ca21bd6383e75cb"],["/page/11/index.html","d2149e735a85603e4d584473f12b034e"],["/page/12/index.html","70ce1bb817e105c797a2b92cddc6c0a2"],["/page/13/index.html","fdd88954883c5958926607c17e163bb5"],["/page/14/index.html","b110b54702f8273a31174b2026971505"],["/page/15/index.html","9686fe0c7421671174a384198b16b848"],["/page/16/index.html","c360b9aa6d51f66e20285d735447fd8b"],["/page/2/index.html","b85aac283c1c086510d08a378d32dcee"],["/page/3/index.html","58395e14cbd56a5390e0d01267a6905e"],["/page/4/index.html","a3bc751f88d033c9256a295bd0df4f39"],["/page/5/index.html","b7dedabb013bcdb207c1f561dcd92e08"],["/page/6/index.html","f5286fde9d6bc2e000745635542f3497"],["/page/7/index.html","8b26fd624e7fb580ab3ff32e2cdceb0b"],["/page/8/index.html","a5e07d2abf73281cba7afd41c1ab243b"],["/page/9/index.html","29b7d32253a3d461bdb77f1437f33d15"],["/post/10919.html","7be1c6bf4718cc5a41d7ed6210fbdbfc"],["/post/11051.html","83deacb883c94d39e304c8e876f7a064"],["/post/11306.html","cb1457f15bc555ea0d92b7f6ec68ac87"],["/post/11491.html","d3d877e04bb4980311b1bc0fdd6e7946"],["/post/11799.html","2206078b6618eb33a854cc69379d9bf1"],["/post/12334.html","a2d5ac3455a2fb4a2ff0c3f872c15de9"],["/post/1326.html","eb053de537e7db5c5259524bcba2f1d7"],["/post/14379.html","92c923f02727c3ae0e6b9b8c10f9bb94"],["/post/14511.html","1c545ce4b812b52be619bb46167daa0d"],["/post/15201.html","4f7c8f5e0c6a71c3f342ffec2803f570"],["/post/15425.html","829c5a544d53fd7622266cf42f8a00dd"],["/post/16107.html","9a4a6a105ab63c923d13e9d2eaa8ea8b"],["/post/17862176.html","940e6e11e486e53dfb40fdfdc3705ef0"],["/post/18431.html","9eb7c22808ad3838ae0bea0f89060a28"],["/post/18912.html","de36c599dd71c8a5206296ba0ec80cd5"],["/post/1b9c8662.html","3ac6d021216d68eab9f3536eb68073f1"],["/post/20198.html","2a1b44e0019513d6055a9130279b2cbf"],["/post/20ff5ccb.html","b978a3ea19c8fe7985b07319d55b351d"],["/post/21624.html","83615d2f35c29f5502ed9bb8242ddf6e"],["/post/2170659a.html","e43635bfbc703f1dbaae2420eed8ebd7"],["/post/22102.html","8b94d49a39e046ba65f90dc1d99e5c5b"],["/post/22493.html","7d2ad823ca7a8ce81918416fee61beac"],["/post/235252ea.html","0cc7bc4413f4d143e7f3d76ef34428c5"],["/post/25699.html","506c67532f4daca7eb9bdb08e99f0db0"],["/post/2647.html","9de671fe5977eaa6e7fb7fe65a665631"],["/post/26477.html","fd1fe21d8d52f6a0fbe71d0bcf697729"],["/post/26671.html","cac39137166c1b6895e49c9114925e27"],["/post/26737.html","ba9e83fb28fa99aa3ce7cd722cce4175"],["/post/27045.html","14d4cb6c2f2696b7d90db565631576ad"],["/post/27621.html","105691594a44ed8ff60fb25750f2b9a3"],["/post/27890.html","8f236894c3822e1d3fbade49b3f0f14d"],["/post/27980.html","ff86b4b42b41ad23ade7e64b4e30cf39"],["/post/280b588e.html","6439eba4e5576c8f26d3405343f4a2fb"],["/post/28579.html","f0d50ae66fedff279127e10c843ecc7c"],["/post/28877bf.html","480b61999b47159daff3186597544cfe"],["/post/28954.html","89541e40ede322c41ea484c3566d282a"],["/post/29378.html","83311e14997994872b65d32f5b736077"],["/post/29949.html","a3d8327a5208b8d75638120253d94352"],["/post/2ae43b86.html","c7baab389b7a18464e81358d4c9744c4"],["/post/2ba82a45.html","7fe76966863d7358dd3687b019e4cdad"],["/post/30072.html","da24445c245ed772e293d273ac8cffb5"],["/post/30479.html","8c047bd7bc1d854d4d8df26608fe3981"],["/post/31a6b40.html","09444390e70290d28443a14a377a7860"],["/post/325cdbf2.html","66d9efe40e11d825586a754747f1e0e6"],["/post/3319ed9a.html","3e389f51c2eed9188f0796c6282f62b8"],["/post/3320.html","676cb804b54e4953b48568aa373ef169"],["/post/33cb1151.html","b1cf327085adb4a2d4b0bcc771ed4945"],["/post/34811d5f.html","c6944209a095b16b198dba89e371df91"],["/post/348d4e04.html","f88a73927d215a35f974dce447d9e8a2"],["/post/3526.html","f6443945cda384a580bc3e2cd70a8707"],["/post/35532.html","539a8cc2bdcab09226c1948de0e0095c"],["/post/35848.html","654dd627e1d21c963c469dbd1fdba085"],["/post/37318.html","18d24986bec216a5875ea4240f41b6ab"],["/post/37663.html","a7ef836cff25f4e5b078e87373236799"],["/post/38035.html","3239e39c253c16ca40d3ca9b9a3be780"],["/post/38072.html","4702325f80345c61ecac3a6d272c6734"],["/post/38145.html","835383c8befa8ea268a5d128a740cd4e"],["/post/39968.html","c8181102bc35bdfed7350a43ab25f528"],["/post/3de4bc69.html","fb9bd51bd70deb0d28603fadc9371e8b"],["/post/40583.html","3d519614f4bde7db297533585688d3de"],["/post/40997091.html","a7416a4adc6098d05016fb2415f94f58"],["/post/41129.html","6bcfb1bf2ef4560226c4f13e9bef3e48"],["/post/41763.html","02045c97210ab5691bd9d958c6b5430e"],["/post/41829.html","a633cf0e63533609ce98e842ebebf7de"],["/post/41840.html","c22bfb64025de51ac8aef84a55352590"],["/post/43817.html","f49d21c025fe69935f92ce083b8b9f0f"],["/post/43878.html","4e5472507e51809c688bc480940b30a4"],["/post/44250.html","5cc1ff163cdc4705b7979773b1f0ef34"],["/post/44336.html","6739f0c6c4dad77147831cb7e3ba4e56"],["/post/44454.html","8002f3075a06eb0d597d3e986a6cd48f"],["/post/44487.html","9ad8793c69dbd2ed7d24e486b6088f1d"],["/post/44914.html","0bca996740c2e4566e2724b5581fb8e2"],["/post/4551c130.html","eb1b34605a0b91f22e1def612d6eb085"],["/post/455a4c92.html","c459c518c3d6bf34c16ab6f7d38bcd3e"],["/post/46466.html","2d9af9683fe3e8bf60da757e61e08328"],["/post/46925.html","5d73140f8daa37f119d56959b04cdb77"],["/post/47075.html","66ce3daf6468ef1a51df8b145f769c43"],["/post/48220.html","f8cdeb5eccb74993c9fd35ac667d9eaf"],["/post/4b1879e3.html","23da498cb5650e05cc979f019f36b28b"],["/post/4c720881.html","324a9574d95967ec7624116d54201b5e"],["/post/50daec4.html","083cdf5c24bbdbc200b4391c92f06a06"],["/post/51491.html","e73f3697076de1ecf0fcd108777bf604"],["/post/51e63dcf.html","b41af411aa58500574e7c4fc446329de"],["/post/52078.html","8d85a9fef8a63a9c8e7609d5ac7bdc27"],["/post/53677394.html","505d9843e6d822e3aa20612bd20c8a50"],["/post/54300.html","d23447c3be417303b9d90a811cc66f2a"],["/post/54612.html","357c3405077505dfb83e587a3454760b"],["/post/54613.html","1ede7f24a713125c100e5a93e64037f9"],["/post/54708.html","d06f497d2013d7a22e3fa390210eb617"],["/post/54778.html","75fc568e5cc5e256e902dc5e5b523311"],["/post/5490.html","326f33f1249d6ac988f237a4c19c34fe"],["/post/55046.html","e3be2a1780b67834a9dfc2b64d4abeee"],["/post/56929.html","c81897c3d704ce0804eb0ba700b9a66e"],["/post/57339.html","e5e08fd612af51bef387d825dcedf751"],["/post/57449.html","a2abd6270f058e34cf5cf26cecdddae1"],["/post/57453.html","4d7f132fe750d348c643054af2531df4"],["/post/57671.html","287561a4b4e4aed1fbb6a29b2c2ae0fc"],["/post/58313.html","138a793d870d142c52fb1458e59183ac"],["/post/58481.html","00e9e04800f173fb9bcb895be5fe76ef"],["/post/58986.html","1a81a9a772a4e73c3b4a6f82fa6e75ae"],["/post/59431.html","363e4b2785e2a9fca953db4a3064209b"],["/post/5951da65.html","38067969dd0ab1ecbcfa2e62360e22da"],["/post/5be7e977.html","4b847da7fc618c22bf55b558dff104e6"],["/post/5f9e4eff.html","b799d971bb0e003b01ef1eac7cf74893"],["/post/604b49d0.html","b1c49f6c4c8e6b90cca83559e841b1f6"],["/post/61312.html","0d068039983374df092ff66eeb6b0517"],["/post/61738.html","735e87dc957b47a246a2e068a8995250"],["/post/61809.html","a0489ba452726f46e0ec4f552247f753"],["/post/61eaf19a.html","6ed6e10e8fa971df65dbf856a0862278"],["/post/63002.html","51a161f441d02b715e631e3434957cbf"],["/post/63711.html","0f5440c393a72deb0851fa75aba2674f"],["/post/6587.html","a215d07ba7be54d510eddcb0625b4dbf"],["/post/6589.html","5c150249dd6fdec5d72793a89c422b82"],["/post/6880.html","0fc8095d8ec6c846e5e1bc41ffa65eef"],["/post/70263071.html","1c803e36998b7b6aa99abb1d622652f8"],["/post/71038564.html","873a4d428ac9baa12f0b111e29bf7e1b"],["/post/7119.html","574616dfaff258e856fd85225ea8e189"],["/post/74e7fdff.html","fbd986738100551262ba398d7ad61707"],["/post/7502.html","740711d3c0eeebede49df0e895dad96e"],["/post/7564.html","dd10da88f9ee13d0b79c154b8db3f907"],["/post/766f9b60.html","d7d9e9b03823a87fc2af15b3de60140e"],["/post/7ca31f7.html","4b30deb04b289cd923a2a37850cdbb2c"],["/post/7d1c86da.html","7ecd5e28ba1ddd5af70aa0e1073818a9"],["/post/7f3bcd7f.html","694dc01c071f8fa70ca2113a81e286fa"],["/post/8039.html","c26d943b5652b25712db6c6ca908d556"],["/post/8050.html","558a5784d1c25665794e53d91f88b1b0"],["/post/8072.html","9d2ab035aa8b398c99cfb99209d76171"],["/post/8274.html","d876defb46205e3855049bd6febe3c07"],["/post/8372.html","7c9a5189de5b66d05840088f4160d1e2"],["/post/8498.html","31e91d72456e2804e7643ee30cadb52c"],["/post/85b4e13b.html","a912f2b8e5f671699c9793681c86914f"],["/post/912b2566.html","a92adcece30e7cad68a4e8d6edf88a41"],["/post/9187.html","dc62933fc7f9653f3438f73a119c07e8"],["/post/9197.html","63caf477b13f815b0851ab18b19e546d"],["/post/94ceb2fd.html","64cb7553edabfbee5bb25974e6219557"],["/post/95495db.html","61f523dd1777df2d5cb7868582ebe058"],["/post/97246020.html","8cf625c8cb705b09e2dcc0dd51539d6f"],["/post/a3a786d6.html","9d800f74a289dc581b20a86e7b8d60e5"],["/post/a444b428.html","12ba91fce21c69c5c91d5638874a3fb9"],["/post/a50b8908.html","94f825d978f6c8941b9f85f387aa1fb6"],["/post/aa1eade8.html","91f1c785ce8a4ae0beacf65daf7d598d"],["/post/ade8c6d6.html","fde5ce750f662ce507190470c28222bc"],["/post/ae8362df.html","ae37bb11651ce1d38d9efb2caecbb78b"],["/post/b4c1d206.html","c02f119213737a78dfee0966d67abac2"],["/post/d431fab4.html","932d9f92a5cd422f78218fac7ff58b0b"],["/post/d5381517.html","198f26021d24d17e25959b08070b03cd"],["/post/e058ffd8.html","c2d78cf2f863a52a1c0edd91f979205d"],["/post/e0f8cb74.html","cc1459c78257eba7863bb36fc00872f7"],["/post/eefe591f.html","14b98ad2dac42acfe3be61be9a93e66b"],["/post/ef296a07.html","77e629a3b44f6e43c47b62a818e340b7"],["/post/f201f9fd.html","0bcb06d9155fb98c73337aa794b4862d"],["/post/f79e4123.html","ca0be06c79375776fad65169a23138e6"],["/post/f8648a1d.html","b92d26b6c5bedc39a4ae71a5573d646c"],["/post/f89cb603.html","622edac3bdc58f08425a63bf0abc93b7"],["/post/fa288682.html","129c386cd660f95b59768cf44a449071"],["/post/fb98053e.html","51a798403c7ff659c92c761435fe484b"],["/sw-register.js","8fc153c0fbc1422e0658db243e0988ea"],["/tags/AT-T/index.html","aa30f6be04740c9eefc9e92438d81a38"],["/tags/index.html","7001185148e4f1e6e80497d114bc697c"],["/tags/动态规划/index.html","d594c2a6745ce4b60ec66514b0cb19f0"],["/tags/字符串/index.html","a8cdde9731031d5cd90082b6ec461995"],["/tags/字符常量/index.html","105627b0503b751e0b066cab8277bbc0"],["/tags/快排/index.html","0e8960519f82d96925cdf80a58d28c93"],["/tags/排序/index.html","b793c6a7ebab3d3eb18d38806266d78a"]];
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
