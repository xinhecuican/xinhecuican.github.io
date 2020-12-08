/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","179b2c636439cfb6c9eec110395a9f9d"],["/archives/2019/index.html","b011daaacf8c77547ca63f529c3d644a"],["/archives/2020/01/index.html","0ee672e0f393ff0187d980aab8357aa7"],["/archives/2020/01/page/2/index.html","40305e97d72e907c485c42eaa9668559"],["/archives/2020/01/page/3/index.html","392538162ab4a98ed3e0dd7ff64786e3"],["/archives/2020/01/page/4/index.html","50e7aa2de26868cf5fd369488a234a1a"],["/archives/2020/01/page/5/index.html","c51d4b05edc8fa8e5696e2ea0d4c33f9"],["/archives/2020/01/page/6/index.html","2179b2950f157dda1d9b930cc2f6c874"],["/archives/2020/02/index.html","8c0dd84a58658a7d794074273e6d8542"],["/archives/2020/02/page/2/index.html","ad63877096bfa308426335ed8d6236d6"],["/archives/2020/02/page/3/index.html","647a5c453c3df50522c03997f5fe742e"],["/archives/2020/03/index.html","26fd052ae8effee43b19e5abbb40fc74"],["/archives/2020/03/page/2/index.html","6cfb898b1af8b5cd8d9869e95a0fe0c2"],["/archives/2020/04/index.html","19b1bff9f3e84c1b68d0d674968cee56"],["/archives/2020/04/page/2/index.html","3a7a754e8da86fe5564e6561b43a961f"],["/archives/2020/05/index.html","528b87db387290456c21a78a688a61c7"],["/archives/2020/05/page/2/index.html","2deb243efb82f86861cc2ef8c6adc2b0"],["/archives/2020/06/index.html","057e71c1f2be61c5ee31755bf272c105"],["/archives/2020/07/index.html","5c7bd846e2dc62fee5550fa729e4a575"],["/archives/2020/07/page/2/index.html","1c01a14be5be8fa27e87ed0b026a2b62"],["/archives/2020/08/index.html","78c56845941ee28db81a3625b68463ca"],["/archives/2020/10/index.html","11109a3fd06a840c5e2aade8d50ed18c"],["/archives/2020/11/index.html","379c51069c299d143eb91a05afeffe3c"],["/archives/2020/12/index.html","de17d6547c388e8600f80c89bf0ecb95"],["/archives/2020/index.html","6cfee19b6a1e1e029d761a68c3360a4a"],["/archives/2020/page/10/index.html","8128bb9653636eb6fe6d315674176feb"],["/archives/2020/page/11/index.html","9df1e2886b6f3b9bd97ada0c4c07ca8c"],["/archives/2020/page/12/index.html","647e1ba8281e7afd1c9384161e37f966"],["/archives/2020/page/13/index.html","00a3b31a73d823175018b2bc5ffc5e3b"],["/archives/2020/page/14/index.html","ed87f05ba0e611065ef00bccce1f9378"],["/archives/2020/page/15/index.html","877aa0ef09f3781cd8c75600b4e771b4"],["/archives/2020/page/16/index.html","a77b6bb565b07cc56694d5b31924aa2a"],["/archives/2020/page/2/index.html","5be18cfa94f6ad5ccfbcc889e2f6cb59"],["/archives/2020/page/3/index.html","586ccb71eaba818d0b3e5c4810e37634"],["/archives/2020/page/4/index.html","853ea4b7dafe88cad76174ceaf7eb65c"],["/archives/2020/page/5/index.html","f13a4ce6c7d38ac3eb201a41c0c52533"],["/archives/2020/page/6/index.html","7a1be247bce9e296ca3c7b57c5bf1798"],["/archives/2020/page/7/index.html","97e8debe90248c59b8ff567111fac23a"],["/archives/2020/page/8/index.html","2a4a0ce233876f3d85d4fba41c79b94c"],["/archives/2020/page/9/index.html","3c61ea1a7fa73df4219ebfce77b30dc2"],["/archives/index.html","12d79a1b05922de52c052924868967d3"],["/archives/page/10/index.html","89f4c86ebf17e2b6f8a60ea674b073d0"],["/archives/page/11/index.html","2346b3e5aea7fb4317752391802bd5fe"],["/archives/page/12/index.html","261f16b41ce6fecc85ba770c365f34c9"],["/archives/page/13/index.html","04d39f378863c6d9cb43f9a9434e4b64"],["/archives/page/14/index.html","acd1907295f04be76dc2578fa8a1d0c5"],["/archives/page/15/index.html","9e515026fe34a19b9f423b8e90f6b918"],["/archives/page/16/index.html","4094c3d00615ef37dd390cce80cbca49"],["/archives/page/2/index.html","14a3d11705e2bee4af12e364bad41b79"],["/archives/page/3/index.html","9afadec5f62de46d538a9724739bb8c0"],["/archives/page/4/index.html","859a42b11662a60848bdc2e9dedabba4"],["/archives/page/5/index.html","e2506c53a2ddd50fa2276538695c94cf"],["/archives/page/6/index.html","d0ccb0f2b73a74b01ee7afbf549ce3bb"],["/archives/page/7/index.html","e815b60e1b27259763e5618df38e139b"],["/archives/page/8/index.html","53751913bbdafda644bd75adb1a850a4"],["/archives/page/9/index.html","8d73b0548925ec87164fd0b2dc3362b3"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","5333ac06b574b1b3653702eb42f5f9b7"],["/categories/Linux/page/2/index.html","dcf2ef800787862e76c190a5b06068e6"],["/categories/Python/index.html","6f80294a17e2bf7fd93620e7bea21993"],["/categories/c/index.html","9302771932e27b16d0d4a634c4aa5f7d"],["/categories/index.html","629e1fc7382158edc5df22fa2584e1e3"],["/categories/java/index.html","44f073bd9b0a579a63ce1fceaaaadb02"],["/categories/java/page/2/index.html","8358fb113a01a15232bb50267ee0be9f"],["/categories/java/page/3/index.html","546702ec8c97a53cd062543e3fdb7024"],["/categories/next/index.html","c3784f4eec610efb2e8a8bbc2690e913"],["/categories/stl/index.html","c073183597caedb43323741c69dad629"],["/categories/windows/index.html","fb475b8e52620d4391adc7c31979c8b6"],["/categories/基础/c/index.html","ec23d6eb0ab1fad096dc1af1545fffb0"],["/categories/基础/index.html","7649d25143a3b60427566146b78b3d95"],["/categories/基础/page/2/index.html","38a6dd10afcbb68a74d3d83cce458d8c"],["/categories/数学/index.html","bb1b065e265d0b8bbbc795f1448e9497"],["/categories/数学/概率论/index.html","d2eb66bf5d0ed98f431c189ed6d6e5cf"],["/categories/数据结构/index.html","6c2092eb28d6319aac8e247d27c4bdac"],["/categories/数据结构/算法/index.html","14a396a5086c6eceafc305101f103819"],["/categories/机器学习/index.html","461f45a90e6b5ac232d9ee46f38c2d61"],["/categories/汇编/AT-T/index.html","dc6ddc231fb15a756a196602f0adb208"],["/categories/汇编/index.html","d587cc99c7496f22571bef6038bbedba"],["/categories/汇编/page/2/index.html","99788f0717f5cf7fb5c58c0fe7780871"],["/categories/汇编/page/3/index.html","d5728ac51840e4e57be3e91336ee71e2"],["/categories/算法/index.html","caf0d5fe4ad1303f856d303d1048f92c"],["/categories/算法/page/2/index.html","5d5d1eb96ba7550581c0f19c30b4142d"],["/categories/计算机系统基础/index.html","d7971c0552806d9bc243cd5b0b4f8ca9"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7683309862ea804e44a68e17d6d40a1d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","52cb34d6e7b10d6b076c48765521879a"],["/page/11/index.html","5931280db81e2af575c4d33ac5b0a4f8"],["/page/12/index.html","0e595c502a5a7cf54e2fb4410bdf54d9"],["/page/13/index.html","e57e1096abc8b03777fced1f16df68a8"],["/page/14/index.html","4a04faa7f4036476701029355cc76cc7"],["/page/15/index.html","d5b6e4206066ce1d636469ab6f1d2c4c"],["/page/16/index.html","44c0388be04c838e7e5194d16d519941"],["/page/2/index.html","d0038266d5e1506f032dc080cffcbc8d"],["/page/3/index.html","2bcd595eb037f9ab266eeda3ccc4b728"],["/page/4/index.html","4227b6b77c516dd2f43c92f11682baf7"],["/page/5/index.html","4577a4da7cc767905df8df34dc8f816a"],["/page/6/index.html","321fa5b569886fe1b68bbce6cfc8b22c"],["/page/7/index.html","57edb1f2f4f01f36c278ba8fe46c2df4"],["/page/8/index.html","acae67767ca5a208d250cbddd7d53026"],["/page/9/index.html","26922da972e2ec771e7970d34c4cee20"],["/post/10919.html","44f6885a915854792edac73514dd0721"],["/post/11051.html","691589d8c81c14a54a03755a7fcf6605"],["/post/11306.html","3a0d86a367a7d73e9fc264a23f4c735c"],["/post/11491.html","0a2486351cd0013e73c4719d659c6ad5"],["/post/11799.html","c1c056915aa3df64291cb588f4c2fefb"],["/post/12334.html","e799f3406251e75311bbd7d9b14c06f7"],["/post/1326.html","ee9259a851cf3caeaba17c79897fc258"],["/post/14379.html","812ac869cbb492d4ca79386716e62021"],["/post/14511.html","5749208d63e9c3b0fff6a258539e9aa8"],["/post/15201.html","f2f010794b5ad8a9c3e5447c699bfe97"],["/post/15425.html","ef9c12018ef50daf8e20d409f7bbff2e"],["/post/16107.html","401ff33e7cb2ad4cb6a6a03e710ca3bd"],["/post/17862176.html","10beae38589cba76332d60c4c80affcb"],["/post/18431.html","ed88f59b8fb39c3501cb877feff3522a"],["/post/18912.html","2e87a6759fcb6b4a1602ae0e779daaab"],["/post/1b9c8662.html","8c7801dcecb93b0678758f4cfdf6de26"],["/post/20198.html","eec392f3c724d65bf889e8937d0201c8"],["/post/20ff5ccb.html","479c45304514f14d10af1f9af8e1df83"],["/post/21624.html","7b46e21ae53f585ea1a0a919d9b4475c"],["/post/2170659a.html","6dd77d027c8e5fdd213b72bb680092b1"],["/post/22102.html","64dc42b85651d82875d9751710db2171"],["/post/22493.html","7c781249aa5230ad69e90b09c6002050"],["/post/235252ea.html","01dac8d228fd4c5143d6f0d54c014669"],["/post/25699.html","9b6184ec196419eeda501b1915965ab3"],["/post/2647.html","915698a0f0c01a548e229b1a5cac7a2e"],["/post/26477.html","62e99090ce344b0aeabf69c1592cb6f9"],["/post/26671.html","612b0d5a57264e0e3e4549394ea07192"],["/post/26737.html","71d13688eb2be89c40f308058e86ebbe"],["/post/27045.html","8557c05121f20feb8df3af70e9ab6659"],["/post/27621.html","f31d0df15cf75383ff661073c9e3fa8e"],["/post/27890.html","775376e7e0eb2a05fdf96c8c9d800da0"],["/post/27980.html","9749bb9feb2c828d2898662430a6bc82"],["/post/280b588e.html","2a47148ad0733889b6efe236355d23e6"],["/post/28579.html","13aaf35671d711d36c3012192d70bf0f"],["/post/28877bf.html","cc1fd1ba19273f779329e9faaa88a811"],["/post/28954.html","c773f72e4be64e9473514ed48667dc19"],["/post/29378.html","67849140a84dcd658a3f70e0c917fc5f"],["/post/29949.html","7ed0b01a18cda7f5046480747f0ba1c5"],["/post/2ae43b86.html","e7d32bad721743524247145ebed53256"],["/post/2ba82a45.html","893e016b32c77c92f293d2327782a344"],["/post/30072.html","bb8c990b4f2f719bc7925e964fb319a4"],["/post/30479.html","0fc2861b7e4a51fd732237f8300463b1"],["/post/31a6b40.html","5fca051a0b8fa9dfa661502243d3d607"],["/post/325cdbf2.html","deed94f0b18f1187a1b88e6b04dda8a3"],["/post/3319ed9a.html","c1f837bff4ff8ef6c7d92394e4294052"],["/post/3320.html","854709d1799d5b0f6d940a38d28440c2"],["/post/33cb1151.html","c7639b55179d873b93bde14dd215b051"],["/post/348d4e04.html","9829e3e4dd4aa16f81d03144247d4bee"],["/post/3526.html","a45668531576e9c508d570c4d3c3fab5"],["/post/35532.html","1764e355ee8e8a416570b55e6908ed15"],["/post/35848.html","d2431931b212c4ef9bd5ece04c47cc90"],["/post/37318.html","40434fa2c88f614ec9a4174e34dd5f82"],["/post/37663.html","76989cb65d740af321b9e1b0b43cc34f"],["/post/38035.html","1e85cdcf567ff5b43f265e80bf01a54e"],["/post/38072.html","2e5a8a1182fd9fa4ed730471bb748dde"],["/post/38145.html","9fc3f1668337daa0c184846ba143c76e"],["/post/39968.html","1b1718b3cad3e673c0c30a6c170ca04a"],["/post/3de4bc69.html","1e1bf6ef42ab2f70698d0656bed306a1"],["/post/40583.html","d963068b3d46917e0b6430b0125558ff"],["/post/40997091.html","d759006f952ea0a7da01519454422929"],["/post/41129.html","c605490a95a2c1750e2e2951fb06791d"],["/post/41763.html","e3ec412b929e9c62e56755cd3a8045ec"],["/post/41829.html","437a9528aabc147b31c431a20da6366d"],["/post/41840.html","81423c3a36ceb086224b48836436bd86"],["/post/43817.html","6ecad04c644861407430f55a10eb70c5"],["/post/43878.html","b9d356624a5037003569de6f0a0c2149"],["/post/44250.html","1abae75dea1c470f6f7d2bc3978e2605"],["/post/44336.html","c7372cf4fa648cd8b776aaac6e6141ee"],["/post/44454.html","ed123a6b2bbcbb4ee32cc8f558083e88"],["/post/44487.html","1c0667dc3ca87fcf315f8c2f81065277"],["/post/44914.html","a70aed6ffbecd61c66538de56ef5bf78"],["/post/4551c130.html","b825e1137e81b0ab96cf36f651c921c4"],["/post/455a4c92.html","5363f434dd32ea1a5306786edef1f903"],["/post/46466.html","d559725596c675b52e326ff4c82d199d"],["/post/46925.html","a0461eb651b4708605b904932ce854e8"],["/post/47075.html","f8aea2b767d95537b03b7e831522a849"],["/post/48220.html","e78ffaa813fe762ee6a432bf75b46415"],["/post/4b1879e3.html","00b46f0b194deb771a7db277528540c8"],["/post/4c720881.html","ca9d3ea02d0f8ded2e44be32fb0ee32e"],["/post/50daec4.html","d37afcf728dd0cd746d83f6342e3df27"],["/post/51491.html","14a7f3e94ac5c6108ec5e88634a58e0a"],["/post/51e63dcf.html","d5b6eef86f811e89eb5a33ae519035f1"],["/post/52078.html","f2b5072a64609edf326e5eb00164b122"],["/post/53677394.html","f1a7ce57819e7d31b634d16b24844e43"],["/post/54300.html","9fbfe4d39fd8bd7df1ebb54a847d5b2b"],["/post/54612.html","3ba596ff8c120e85339238ff3d249c5c"],["/post/54613.html","08efc03608fbffc0d7175e8ede3a0997"],["/post/54708.html","8ce7818703872400ca18b1237fedc9ae"],["/post/54778.html","add667bc72a7702e00d4d2a8c494ff5b"],["/post/5490.html","5185386425159ffb9b6c5b27009e2b89"],["/post/55046.html","c1f823f0171f8a9a39c85729f7f4bb85"],["/post/56929.html","6e0114254b13d96d1a326f576d6508b6"],["/post/57339.html","cdd3fff9a8e218b5444dfd00f69976e1"],["/post/57449.html","6eca30ceeed8178b790cdb4f2d43dd33"],["/post/57453.html","f3cc9b002113465ce53844acaa7bd81f"],["/post/57671.html","ab0bf8797db56a3909ebc0cd399b27c7"],["/post/58313.html","0a23e9408c66d22d67e01151888339a1"],["/post/58481.html","43d3e52991409739545da89e84773c1e"],["/post/58986.html","3172a5dc173cb8c033803898004332c7"],["/post/59431.html","dc1599c04afb64d20485a0f03c4bb2c6"],["/post/5951da65.html","ba5a51d9b03b34f593af773c9edc7943"],["/post/5be7e977.html","521063d1afbac53464026f778a2a93c7"],["/post/5f9e4eff.html","22299e511df3014b6b201589c81d9f68"],["/post/604b49d0.html","6e5fa3b5f73eff36efb3dee459034fbc"],["/post/61312.html","f3f7e86e318246647fd5bf4644e9fef9"],["/post/61738.html","2c706a78ed70afdc57a63e864b0a097c"],["/post/61809.html","0a6ccde1ec47d3875321163e8b5afd3e"],["/post/61eaf19a.html","50f0cf82b1138719f5a6a67d0ad469b1"],["/post/63002.html","69b143913b6b769eb8d356ae77e8ba03"],["/post/63711.html","beddf82f23abaf6cca8bd281297790fe"],["/post/6587.html","9a408520db6fc265aabc4fb6eaef8423"],["/post/6589.html","0d8e678a12ab25ac7081c8cd020bdd27"],["/post/6880.html","62bf8a437a2b2993ad7f783dfc5a98e3"],["/post/70263071.html","e5dccddd92d8a856a20c93fecd1446ea"],["/post/71038564.html","3a23287035f31e6501499eab32042aca"],["/post/7119.html","783fee055a9788985e56aedd7f376436"],["/post/74e7fdff.html","023e29b7cbaccb22911668aa295cb8c6"],["/post/7502.html","5d42b6922a8af29300bed12b435214c7"],["/post/7564.html","a576d72fc06c6a04fdaa2edfd7238876"],["/post/766f9b60.html","1dbf21a2f1a66ae598cc426ccdbf50fe"],["/post/7ca31f7.html","0a678df2bc5bd1918b58c60d223e258c"],["/post/7d1c86da.html","a88e6a06ae8eaaa458fb2cd50c68dcbe"],["/post/7f3bcd7f.html","8eefacee7f932f9f82755be1a5fe4767"],["/post/8039.html","62d7e2424dd507494cf1803d8e952bc9"],["/post/8050.html","99621e78f32eb59eff6c8cb7e602c0e7"],["/post/8072.html","e09e23b6b66acf28d40af8fa9d927299"],["/post/8274.html","f4fd4fff18261a1dd982f91006c7c0d2"],["/post/8372.html","8910e4b63ad1cfbfa7022e0c72b9ba8f"],["/post/8498.html","f7fbe2303f4f37dd8b5eb5a68f92f205"],["/post/85b4e13b.html","9d8db5d1755f36bd6c15488d648913ba"],["/post/912b2566.html","ac14759c89ecf694e7452619c560a557"],["/post/9187.html","8c6e3cb9b182b408d8161b814537cb56"],["/post/9197.html","95c6c377ed51634ed3cbf46a5e8d1f1a"],["/post/94ceb2fd.html","eeda1c34747de2dade164c742a24f059"],["/post/95495db.html","230ef58f1d0d408e9987b7e36d254a62"],["/post/97246020.html","2461c3d76f346f90d72713bd8beb5154"],["/post/a3a786d6.html","e8cd9ea2d0f6a8a7e3efa19a9566267f"],["/post/a444b428.html","a151c8cf6c9ba1371ba7e199daa25c76"],["/post/a50b8908.html","f7576b5daf0f44368a163de1cee1e4c0"],["/post/aa1eade8.html","192e6d0de766ad7186d791a3447442db"],["/post/ade8c6d6.html","d5a51012922b3de2921ac4fb8de06034"],["/post/ae8362df.html","7a7e570cea02972b4cc4c6a9da760247"],["/post/b4c1d206.html","c491e49151ca2a3cae0e46e858435417"],["/post/d431fab4.html","a9a9b6c879b6061daebf2cc8066cd7d6"],["/post/d5381517.html","0d104abcb0e144dfbdd723362bb76c0c"],["/post/e058ffd8.html","a5912095460f8dbda7127757646fa75d"],["/post/e0f8cb74.html","5d7a5f2246092b259b1f7dc698cbbcf8"],["/post/eefe591f.html","cc792038d480db2852006dd476978397"],["/post/ef296a07.html","4d6c29ee1384b790fe20ec41948f4426"],["/post/f201f9fd.html","cb6addbd97840ebe862f5583040c69e2"],["/post/f79e4123.html","2b66b8e56c98c7429fa885e59152d284"],["/post/f8648a1d.html","1cdbd6800124c08c8bebb5c4c93e55fc"],["/post/f89cb603.html","e611f21f3a026c78085859cc40077001"],["/post/fa288682.html","2c36310303e18de9211232f74e162671"],["/sw-register.js","f0db3f28bc85694ff42586e04800459a"],["/tags/AT-T/index.html","7212d1e47a0dfb9aae0c782df907e876"],["/tags/index.html","5d004514f43990d391bca1f7c6ac7b80"],["/tags/动态规划/index.html","733a93b15bedb42214f6fbb9ae8df227"],["/tags/字符串/index.html","a76039ff8ca97200e9306f02d978ee07"],["/tags/字符常量/index.html","87fec6ab23a425ee6436486547e56188"],["/tags/快排/index.html","23b28696675574bd6ec7cec2786aee7c"],["/tags/排序/index.html","4b33ab2c8d90dd7b8ec311f698bd6a54"]];
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
