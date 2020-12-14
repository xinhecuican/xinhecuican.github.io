/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","5c4fe9397df2d2f2ecf1832f6f41eb46"],["/archives/2019/index.html","2cedf74fe143ad4ec59f8582cb5cef73"],["/archives/2020/01/index.html","0ebfa2352c6402584ca68f206a00c5ef"],["/archives/2020/01/page/2/index.html","6a220697053169b9ef6d4c94158c605f"],["/archives/2020/01/page/3/index.html","98813737232d47131b17f0ab040187c5"],["/archives/2020/01/page/4/index.html","c60b1e1f464ae9e4dc6bd258b949d5d1"],["/archives/2020/01/page/5/index.html","5e24ddd51c0f695b80deb8cccbdbbf7b"],["/archives/2020/01/page/6/index.html","0070f91226a21e83295f984263bc81c3"],["/archives/2020/02/index.html","e1b27b153122e035e8d365819267a132"],["/archives/2020/02/page/2/index.html","582cce4645fcfcda5e8c1f703cb3ecc6"],["/archives/2020/02/page/3/index.html","470098489f6ca57b62035b226e2dc02c"],["/archives/2020/03/index.html","9fd36ec49db718a581062cc4991a5998"],["/archives/2020/03/page/2/index.html","60087b35fd046d005524c6a2925c4db3"],["/archives/2020/04/index.html","859d573f743bf9712be8acef72584cb5"],["/archives/2020/04/page/2/index.html","345df2d2ab240719886f0ef14295acd1"],["/archives/2020/05/index.html","a432d78a94dc796034ded57e6b89d212"],["/archives/2020/05/page/2/index.html","d86054dc4d9ea73d5897ca1337297306"],["/archives/2020/06/index.html","6f6cd9d79090f63cf52fdcd233e5a372"],["/archives/2020/07/index.html","fa2856744da8c58e69d62c7de3fbc69b"],["/archives/2020/07/page/2/index.html","0b239ca9b28736a2f1be79bbebde98b8"],["/archives/2020/08/index.html","bade0a91b3d352c9334ec53a4c4ab3f3"],["/archives/2020/10/index.html","dcbf75b84902adc731fef1203ec50af8"],["/archives/2020/11/index.html","391aa13421826566e7f817c8357db8b6"],["/archives/2020/12/index.html","56975fde5e729da9c828b01a2ab90f25"],["/archives/2020/index.html","963431c4bf62e42de2448d239e90cc40"],["/archives/2020/page/10/index.html","1f7b3f14a76d6d13e47904da529d8cab"],["/archives/2020/page/11/index.html","37945461d302dde1a6ac143b10105fe1"],["/archives/2020/page/12/index.html","e9f323618737461a47c31566c53257fb"],["/archives/2020/page/13/index.html","97b24068666f543b2f5bc5da20bd526e"],["/archives/2020/page/14/index.html","a58867a5d68492ae3b8545440b1ea4e7"],["/archives/2020/page/15/index.html","10c889ae74baaeb1f405e5b815ead4c8"],["/archives/2020/page/16/index.html","b15655c1d4c004931a15d8bb2fb8458e"],["/archives/2020/page/2/index.html","d296c1a9c496e34364b875a3b02af796"],["/archives/2020/page/3/index.html","e17f41400bfd39bd98bcc1d2ce3e9c9e"],["/archives/2020/page/4/index.html","07f4ac054862fc7009b2496c1dcea4cf"],["/archives/2020/page/5/index.html","4564939b28a8ea2b6f18eceab8f79bd1"],["/archives/2020/page/6/index.html","439fa99e7c51278f1e6ef97a541881e7"],["/archives/2020/page/7/index.html","138b184fe735b9b6d60815a557c80403"],["/archives/2020/page/8/index.html","fd8295036c394b5e47deb9aac3af582d"],["/archives/2020/page/9/index.html","fe97e47d4ea3d5a9aa5661b3e06935cb"],["/archives/index.html","80f49358f5845baca68e83d607e0454f"],["/archives/page/10/index.html","8343c6a6f83c498269140816ebf021f4"],["/archives/page/11/index.html","75076ba268a30119ac23377f7e7dd5b8"],["/archives/page/12/index.html","ed36bbd9660ce0fc356c68a2ed33f971"],["/archives/page/13/index.html","5cd34e43fcd2547f371713ace56d3397"],["/archives/page/14/index.html","c345486e7b57cd2f79695779d117622f"],["/archives/page/15/index.html","7566c20aad02c6d08f3bda8a9dcd71a0"],["/archives/page/16/index.html","49257539854da4089d9f97c1def76b45"],["/archives/page/2/index.html","54c116fe58a0115332324db9ad833402"],["/archives/page/3/index.html","23113745d10a4385ad28e089afeff27b"],["/archives/page/4/index.html","f4e48fbeac8e4da589ac55383435fc81"],["/archives/page/5/index.html","3f8950de44e811fcdb759bcd377ff765"],["/archives/page/6/index.html","f335cb5dfc3dd305edac0cdf8a4b7050"],["/archives/page/7/index.html","5dc81483dfe8e2fd0b1f413646bd6c39"],["/archives/page/8/index.html","2da6a0b8f9f99feb76ba0fa7d24edc49"],["/archives/page/9/index.html","df4be22419089d56f40241923688d7a6"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","1216350fbf00f458bafd64a43bbc178f"],["/categories/Linux/page/2/index.html","a87c16a4086699f9eb9d1e76ba8d65c7"],["/categories/Python/index.html","42554df5824cddf621efa44300f9c529"],["/categories/c/index.html","fb0a881b1ac102b86c354d952a032d49"],["/categories/index.html","f3ce533a3b279a929447cf215966d18b"],["/categories/java/index.html","c895a28daca0907b87d485b17f422235"],["/categories/java/page/2/index.html","f9f609bb630ed19f42d2326096812bdf"],["/categories/java/page/3/index.html","7c123b7b947c1ee6c91a8a8262e8758e"],["/categories/next/index.html","48532116ed008db75d042c10352417ac"],["/categories/stl/index.html","f251f28cf753d76636be77d990df3d50"],["/categories/windows/index.html","6448faa13f890e5ff530fbfb64745f2a"],["/categories/基础/c/index.html","fe85dcfae54e0ea5e4cd824139eeb751"],["/categories/基础/index.html","a51665e71df6df58d38ef3f19b4d4596"],["/categories/基础/page/2/index.html","b38304dda66909460421a098bfdf992b"],["/categories/数学/index.html","60c1a7b7314b784dad662cdde10b23df"],["/categories/数学/概率论/index.html","3990f734c87c1c796b6f4152badb2f89"],["/categories/数据结构/index.html","e8bf7ab8d9ae4fbb3488f63e0f50860e"],["/categories/数据结构/算法/index.html","c361fe0502e27f42753b6c21d7e78f0f"],["/categories/机器学习/index.html","2eb590cfb7df7018b68c9fb87c62b03b"],["/categories/杂项/index.html","4d78460c2cc68f0608f00b022838826e"],["/categories/汇编/AT-T/index.html","f4c095eee4656bd1bb430567028a329a"],["/categories/汇编/index.html","ac011a25ab923bbe9fdcd747d89c0a20"],["/categories/汇编/page/2/index.html","34710ed9b19a5d900fc7f6dcb02c4183"],["/categories/汇编/page/3/index.html","eedc8e3f0f47a0155bfe5e85e82a51e0"],["/categories/算法/index.html","db583341ac0621330842a85ebced21c8"],["/categories/算法/page/2/index.html","93081d0503ede5c84771e92b682b0e30"],["/categories/算法/page/3/index.html","c031fa8d5a5c5d1efe0acd296b8816a4"],["/categories/计算机系统基础/index.html","8152ce3f55a71cb1cc7d7f8c01dc9e3d"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","c5e184f6ef3e1d529083c65ecb2ce826"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2e0e43d15fbdbfb409eb070c2295090d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","dcc064c290e6e5cb23f289bd40f3559d"],["/page/11/index.html","18282e2c7e6ab0744e7bb151215bd468"],["/page/12/index.html","6759a5763e50b9d87c7187a4444d0f4a"],["/page/13/index.html","35b22dbf44d9703aa10e4adf11fbb899"],["/page/14/index.html","52b7beb25f4e4a922ab9ae55f5fb8fd4"],["/page/15/index.html","9b821336d9883bbf21c775a60476958b"],["/page/16/index.html","d4bbd37caf2bd52763a6f860e1e2040d"],["/page/2/index.html","987d9fd054c25fb0b6ea248e4f97bd34"],["/page/3/index.html","5b427d9d0ed4e1b81962548b7f0a284d"],["/page/4/index.html","ece4bc2b86596c39ad3eb02655847811"],["/page/5/index.html","5474917fd768d2dea2b8ccb929976ace"],["/page/6/index.html","e6b3b7373e9cda8fd3b6650bf139d923"],["/page/7/index.html","4f105e2a86fade652bd3ad4ec31f6e08"],["/page/8/index.html","29a7c29e91182c48a617e7a649f22c17"],["/page/9/index.html","ba183568e1831ced82bdc4e48d05dbd5"],["/post/10919.html","07738991303a1da959920ef67fc92803"],["/post/11051.html","7f13106703633c6434057e39dddfec90"],["/post/11306.html","57398dedbb98e1bca1197b17615a0dd3"],["/post/11491.html","18838f346523da537503e582a42f2672"],["/post/11799.html","96e491769c47f369795c576331f842fd"],["/post/12334.html","bcb57b64d02ea74d26dfb9c278ebcca6"],["/post/1326.html","ddb0c129f052f831450c5a4674ac5e20"],["/post/14379.html","e92d72fb8c5de98dfb23b0c6b6bb74ed"],["/post/14511.html","50c97d55432d431f02f670b5062c5641"],["/post/15201.html","30d9e9454806e28e6df04ad1619ad27c"],["/post/15425.html","1e32e874643a7290a5390d1d44ce6cf8"],["/post/16107.html","1652ba7f36907c093d45a0ce99c41e7b"],["/post/17862176.html","ef2c3ffcb8f89cf5bae9670b6ed27160"],["/post/18431.html","f9daef658dce709bcede4b8b5d3974a2"],["/post/18912.html","776bd260acec8b0959aad51de030966d"],["/post/1b9c8662.html","b58ecc384a150270ea11513e5ac7169c"],["/post/20198.html","fcdce3aee546abfec09b3ebfea9e0976"],["/post/20ff5ccb.html","db534e99364c884715b3f49ca816bfd0"],["/post/21624.html","5c7aaee3a274b059fd5e1b46e6376b11"],["/post/2170659a.html","eea1e5ec408a6fe671ce70810a18dceb"],["/post/22102.html","99a8c93ed5025f9d98908f9dfa23a29a"],["/post/22493.html","e5de13ec330b3d026c8362be1b19fbb8"],["/post/235252ea.html","44843c3c4600759b21a85be69a2c93c7"],["/post/25699.html","4e580470f720d5bf90b39b2891999d54"],["/post/2647.html","b1b3bb9b20c7802330566365c4f00e79"],["/post/26477.html","b91ef0f95029e6b15a57833a9ec68a9b"],["/post/26671.html","86d55340af492c8e6b3055d44dc72364"],["/post/26737.html","854b8e69f2018e4f45927f3a52d4b805"],["/post/27045.html","970175530584ab7079c932a666b8e547"],["/post/27621.html","323e096618df1cc5f6a630c6c31abf1a"],["/post/27890.html","6ddd2dc2fad71f5d838bdf38fbfd05c4"],["/post/27980.html","06dc8f8158ad11a9a30809c3244af84c"],["/post/280b588e.html","d5951f2ae4a1695593a237fabda9245d"],["/post/28579.html","3198b163929b10b490fc83b6d43cfd0f"],["/post/28877bf.html","b3a2d1cf8f8d2eb32a61d6a2e1456f29"],["/post/28954.html","62049d04d6f68aa18592da944d5ada57"],["/post/29378.html","10eb56cf84c5c5be2da4233fd2c55383"],["/post/29949.html","f33960fb88a5dccfa01baf1617f5b79f"],["/post/2ae43b86.html","e48e9a2010ffe47f9366827a64861a8e"],["/post/2ba82a45.html","a2c61be814c9b00a0e63af0733831815"],["/post/30072.html","058036f4281ec9f550be6c4e2f7310b6"],["/post/30479.html","536e6400bfcc5e899ca22bf75ff0c5e4"],["/post/31a6b40.html","71958c7496ea64b07b4251265365e4e8"],["/post/325cdbf2.html","be52819f70589eae892f9adfc3256859"],["/post/3319ed9a.html","931a9b95e8b966b3461121ed0d33b111"],["/post/3320.html","8bf065731a1ce28ba42c61c7ba451efa"],["/post/33cb1151.html","28e04213fe3daa8714c59a3101994c44"],["/post/34811d5f.html","3c7b1fe41a03c2681f38a429f73aa864"],["/post/348d4e04.html","2d0176f00341a843c6b6daa523dc589c"],["/post/3526.html","0dfbc974b77376f6ac4118c1e7df4251"],["/post/35532.html","f9de43759a7f9d7a508a48a78da1ef2a"],["/post/35848.html","f8487841c456ada6897205dbf40be731"],["/post/37318.html","0a63f8408e7b2a98780d09716c76a834"],["/post/37663.html","0ac5ff7b12484fe69fb46235fbebfcac"],["/post/38035.html","e766fbc56653eb523f1e5f6d2b7e2ed2"],["/post/38072.html","5b3d6a0f5d540605ee227798858135af"],["/post/38145.html","1c5684b2747d72a71d07e8588654807a"],["/post/39968.html","b128aedb34bf450c7ffa8e8e9b54e6bb"],["/post/3de4bc69.html","1f6f4d05d8f0ee33275ef7493f60223a"],["/post/40583.html","bfc7974dee9c66a590b17279e440c77c"],["/post/40997091.html","4b0a5caa68dfbdcc8173256d7e9f5435"],["/post/41129.html","250ae791c8d3852a9cbc0a530bc1f2ac"],["/post/41763.html","1292231e30dbbb3bcea5d77cdb936cb2"],["/post/41829.html","b1c3fe53fa4b7d9282bff646aab90d6a"],["/post/41840.html","2f414166f9ca0a5487df552aad9ac6a2"],["/post/43817.html","422d35563788640d93136014728fc631"],["/post/43878.html","c517b925b277247cb8330dfdc55eb600"],["/post/44250.html","0b6b3b047700c2842aaacd7f318a2250"],["/post/44336.html","319e0a7388a758010575f351ac5598d2"],["/post/44454.html","ee088c81398d6d6b1dba55a0668d97de"],["/post/44487.html","c9678fa33c9d8d15793f6dc19d03c110"],["/post/44914.html","e2aa7cdc8f34ecd88957a38efca20548"],["/post/4551c130.html","27599382b8e3f6d416ca9ab10eb0b8ba"],["/post/455a4c92.html","c83c6fbe66c90ef9daace967d3398ba1"],["/post/46466.html","f3cff7f3ef326ddf464f61599b73d617"],["/post/46925.html","aee76cad92b9ec494072235ac83c9393"],["/post/47075.html","48e8ad2a2652a9b2e81b02632d1289b3"],["/post/48220.html","f841f62a1e5e3fd89d06eecb8f2024a6"],["/post/4b1879e3.html","b8d18daa22cec02e9b6394516376e798"],["/post/4c720881.html","82b4a3448029c16fd32c6269f96e1554"],["/post/50daec4.html","71002e02a57723638495fccb128da3c9"],["/post/51491.html","c9691232f8c42c7fefd17076c125a88b"],["/post/51e63dcf.html","63013ec3f87258f6a0858cfba28b280a"],["/post/52078.html","72f6468002a5b4a8af304c61cbe9d420"],["/post/53677394.html","564f4224a0128f1cb39f281c7300ed28"],["/post/54300.html","0e6ef096d47ebef6df8ac7e00294470f"],["/post/54612.html","f6a08001b573ea4728350a2c3af049dd"],["/post/54613.html","3e6d6b9f880fb1a4ba51afc4aa1538db"],["/post/54708.html","046f625a2c3fad7b81fff7d2bdb4e5f8"],["/post/54778.html","5514a65a6b2eb86e7116c62e1df5e111"],["/post/5490.html","75d8fb5a5f32bf5919dbcb74d614ab3a"],["/post/55046.html","7b6d60f40e50590275d0ffa4f94142b8"],["/post/56929.html","9f8545c64eb354a2b2f07f4f9ef1d9f0"],["/post/57339.html","847df67b745acdf87a3683e45d93dff9"],["/post/57449.html","6c76cb1de7712fb1152d9b2bd320a272"],["/post/57453.html","282febeaeb248e9e411a69cae76497c2"],["/post/57671.html","a7684127a446ce1d77b0e2a881ad2039"],["/post/58313.html","0b63d4ae249490b9dd04d3f69f4124b0"],["/post/58481.html","811f732f4d690e05098ce5be8488b376"],["/post/58986.html","3a20b80d9e4a3f550faddc65018c89a7"],["/post/59431.html","588a7d5292ac080a4d011dac63a57922"],["/post/5951da65.html","5b9872ffb181f8c0fa1377cc25480190"],["/post/5be7e977.html","f13c0d3df58209f24fa2e9b5504fc2a2"],["/post/5f9e4eff.html","4aa06a604bd8654a21d7c3d6b9916e1a"],["/post/604b49d0.html","7316ff525d1ec4dc10c94cf9e43933b7"],["/post/61312.html","ed28a3adc6e44b2e1066c78a210f9cc8"],["/post/61738.html","a46d721ec49aeb03cdd2df007b5036ff"],["/post/61809.html","322f160205c48246f61199e8bfd5f4d1"],["/post/61eaf19a.html","f47afe6038edf102d516629d09383861"],["/post/63002.html","fdb0a6e7bc91f7b1a600ef995ec0061a"],["/post/63711.html","84cf09b0640306d549d1c3557569c4c3"],["/post/6587.html","7b9d70c2637a633787bbb9c9df001cf4"],["/post/6589.html","928355a1908c62c800631b56bcc274b0"],["/post/6880.html","c7a20d6423a1476d49706c6e437d7ed1"],["/post/70263071.html","811789f7a3e081d177a16b20d2f83477"],["/post/71038564.html","23484a3997628410a839d65bd0348978"],["/post/7119.html","763fe40569e67c302a191760bf33cb3b"],["/post/74e7fdff.html","2ee23909d887b40c67ebf2ed2ad38638"],["/post/7502.html","888ab71c8e00a0920b3c07744bccd9be"],["/post/7564.html","bfb24f3eabccd1cbfd97e160583d2ac6"],["/post/766f9b60.html","29fd759dfce039b1ac1754ed02841bd2"],["/post/7ca31f7.html","911af82d2680ea6c477b47a4274ac6d5"],["/post/7d1c86da.html","ebe2750f0461633659bd2d47731a9f44"],["/post/7f3bcd7f.html","3216ae5eac4ab0f5186a2cdd3abf3433"],["/post/8039.html","341048dae43acbf44d12cd1fdc53e1a0"],["/post/8050.html","aefa1536e72a80c2c11dc61cc8bd798d"],["/post/8072.html","d6de0eea4f488b17ea59fc81e9ad60ab"],["/post/8274.html","37a73067045c870d52c2ba0b5677d39f"],["/post/8372.html","a012e1c5e41d27ed78589ccd7a482bf4"],["/post/8498.html","a224cdcb836362acaf612e6bb365d833"],["/post/85b4e13b.html","c0e777cc81a7bea4a772adfe2193f64c"],["/post/912b2566.html","d6cb1e416985f4e41264d760a8f5b03d"],["/post/9187.html","406082d76c66b6ac0015b4dcb7f64a59"],["/post/9197.html","8466f5454f6bbfaade73659234343fc8"],["/post/94ceb2fd.html","1ebb9f7de6631a3154ca15f2fbe45b48"],["/post/95495db.html","4f62649e96799e09e7604c99178f1bc5"],["/post/97246020.html","c0dfe79bd27b3abfdab4e4bb685c0b34"],["/post/a3a786d6.html","d65e951eb8c42f8e343ca9ff031c787c"],["/post/a444b428.html","ed81ded8e4cf3087439db32d9c7cf889"],["/post/a50b8908.html","0f94161015719fc567459a851f136120"],["/post/aa1eade8.html","6b411d7d09d59fdd1efe89aa605ef230"],["/post/ade8c6d6.html","fdffb9a9c56edd8ea3bcd610b9c63763"],["/post/ae8362df.html","2fa2a5cba24aba3e0c7fcc64fffe5203"],["/post/b4c1d206.html","9a60963c54929c34be53c90de75b3334"],["/post/d431fab4.html","44f6b881914864305c19bf4586948700"],["/post/d5381517.html","2b6fb9bd27173482dba729c25ebef347"],["/post/e058ffd8.html","531caa54c8f8eb152becd56655db8eeb"],["/post/e0f8cb74.html","8e873ec4e30cde05119883601d155fec"],["/post/eefe591f.html","ee77e4dd8a6429e73b87f593374e2c69"],["/post/ef296a07.html","e761da4cfa5af952264a0b76c5b3f8a3"],["/post/f201f9fd.html","96913488b50952b78eb18aaeb98f8eb0"],["/post/f79e4123.html","8ddec545aab2eec94719f1c033b4d9fb"],["/post/f8648a1d.html","3893f39cb38e0094fcdce62ddca60bc9"],["/post/f89cb603.html","c3553da4612b5a1ca5ebf07ba7176bb9"],["/post/fa288682.html","991e0b3f830889083353cb842353ea09"],["/post/fb98053e.html","0d5a1860419abaaf1637500030538d21"],["/sw-register.js","2a54a90539495873677c193e94685c50"],["/tags/AT-T/index.html","97eea88e0c8b6b6bd2e849376cfeb7f2"],["/tags/index.html","e04fa795d9eda920e3755aadfd610794"],["/tags/动态规划/index.html","53323ce5af27684c4bf0a2756555285c"],["/tags/字符串/index.html","5594d5f903f78743ae1b1f5e95c12ac6"],["/tags/字符常量/index.html","8fcd3a5c829ad67d6a165bd16d03342b"],["/tags/快排/index.html","6eda8f976a9591b0bdda565c8c9a57ec"],["/tags/排序/index.html","39f6618ff7b04cff4ad85868d347f138"]];
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
