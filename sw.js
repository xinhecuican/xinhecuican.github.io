/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","8145388e4da59e0adc5bb5ff45eea8b9"],["/archives/2019/index.html","38c8b61a3100099fcc139ca1c171075f"],["/archives/2020/01/index.html","5425e516a6a128752bd1f76f9be55d9f"],["/archives/2020/01/page/2/index.html","4e00beb01436b8662dfd9fd012e85827"],["/archives/2020/01/page/3/index.html","a21bc383b45524bf2deef8bb027fbec3"],["/archives/2020/01/page/4/index.html","7ace81cc73f0975bde013f0866be3534"],["/archives/2020/01/page/5/index.html","c32d3c3012c650b54ec521310cbcfa48"],["/archives/2020/01/page/6/index.html","f5e9e8c4665e9a9399a3c085b6c2e7be"],["/archives/2020/02/index.html","f30dc6830cd21acd3141e1f97fc789e9"],["/archives/2020/02/page/2/index.html","b81bae37f90845440f609829e3c98c30"],["/archives/2020/02/page/3/index.html","8ca9cb8cd57cd9fe65ef4b514726bcab"],["/archives/2020/03/index.html","6c8a81af16c99de1d91600c0e5dfc24e"],["/archives/2020/03/page/2/index.html","c270d10f1e1ddd1667b54a86962bf995"],["/archives/2020/04/index.html","fa491dc6e49e22d427fb9c591f0f54ef"],["/archives/2020/04/page/2/index.html","a542b3db49909051f792f8b492495968"],["/archives/2020/05/index.html","afd441a80b88c6fd1497e7a3c84e08b9"],["/archives/2020/05/page/2/index.html","a0ae0e4039fbb03fbc5b516524c6e46f"],["/archives/2020/06/index.html","95680d2b09392b2421d76655953772d5"],["/archives/2020/07/index.html","2142a8bd469e272ce51a08f380f545be"],["/archives/2020/07/page/2/index.html","55ba35339153201f0d49670578186da3"],["/archives/2020/08/index.html","ab352cb0000d8bead89a18e265b8beb9"],["/archives/2020/10/index.html","b8967551b90e0345da67bb452f5ce6f4"],["/archives/2020/11/index.html","919540e985c0ec434e30c01ca4b45b94"],["/archives/2020/12/index.html","c01654214c1e736785973b6c66bd200a"],["/archives/2020/index.html","1200882237386ba664c1beb59f8032a9"],["/archives/2020/page/10/index.html","85d3841c08c7551683a79b399fbbdefd"],["/archives/2020/page/11/index.html","37439098b268173b519f1aa9c0bae746"],["/archives/2020/page/12/index.html","0ec1e390c6281b1a9771738039a712a3"],["/archives/2020/page/13/index.html","f94c1402fcc8080f03c5c3cdaa214475"],["/archives/2020/page/14/index.html","ef4d99f8a950e8b1e707659e4d9515b0"],["/archives/2020/page/15/index.html","809fdc8472a1e7e8870b87a186c566d6"],["/archives/2020/page/16/index.html","af7212d76999be47414575f663f675a9"],["/archives/2020/page/2/index.html","1336bd99c534176a092a846dde3c9f0a"],["/archives/2020/page/3/index.html","149f25dffd1f43f3c7b6157688ded44e"],["/archives/2020/page/4/index.html","6a0ecd95826c793dd8b88fea56f04e23"],["/archives/2020/page/5/index.html","92b7b87749dadccfec9c4a3c320386d8"],["/archives/2020/page/6/index.html","694afabafa1e9b6092bace67266d4519"],["/archives/2020/page/7/index.html","d342e6a635eef7a3d5cf7b0eea046b0c"],["/archives/2020/page/8/index.html","5c4d8b48ca1ea5c071224ea0a997d32a"],["/archives/2020/page/9/index.html","16fbb1a8840737ea07e41248f4805230"],["/archives/index.html","59185c05569e97c94f2a3af0bb9721c4"],["/archives/page/10/index.html","2f8f177fe3503ed23b07806e55d37e27"],["/archives/page/11/index.html","c414eb3a9960b469294adc70d006ff39"],["/archives/page/12/index.html","93137fb81c9ae8dcff0d957316e6bb3b"],["/archives/page/13/index.html","4b06a97cb7aab81302e1ad370dba1122"],["/archives/page/14/index.html","846de662b2ac1b4a386c968cb6717c14"],["/archives/page/15/index.html","58d99c728b3a6639dff13a845fdc971f"],["/archives/page/16/index.html","a096aa102998040eda6201ac47fb76c6"],["/archives/page/2/index.html","5f302b0d965a4457206239f19f80c827"],["/archives/page/3/index.html","ef879ab940c5ea41025e93fd8070efb5"],["/archives/page/4/index.html","064dcff1a0c01efad6f8b18b38facf12"],["/archives/page/5/index.html","133b31206ca3a992d79dd04e67e96513"],["/archives/page/6/index.html","dd8561e3bb1509ae6b7b0d2d22be2619"],["/archives/page/7/index.html","255ceb3d676219a41f3eaa5d506198cf"],["/archives/page/8/index.html","d509c868f86b87694f4e1f7048703ca2"],["/archives/page/9/index.html","beb3c22d66536da19b89b414e5e886d2"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","02984cc15513ba4ab89ad05b02c4332a"],["/categories/Linux/page/2/index.html","54d715c6ab723854419613b233af5d79"],["/categories/Python/index.html","283d8863971e94d329103b5384371f9e"],["/categories/c/index.html","412176c982a423b6582e071682351dc4"],["/categories/index.html","69bf197711620afddaae0172ac466e10"],["/categories/java/index.html","dbc0515beb3336f24e4bcb406dd6c2c2"],["/categories/java/page/2/index.html","a7ad701672c521651a1ec7b96f0348e7"],["/categories/java/page/3/index.html","63d0bc45cee3af222963802449405e8f"],["/categories/next/index.html","b4075b9c9681aa31c4cb0764c0f6b7aa"],["/categories/stl/index.html","c23fe71ae4b8685fde2cb644c14ab3c3"],["/categories/windows/index.html","c38fd5399fed2c47b0ae20ecab8555d7"],["/categories/基础/c/index.html","1e22bfb52f76c1e94f79acd4bc38f003"],["/categories/基础/index.html","f370121f50959ce00db5d2da383a51bb"],["/categories/基础/page/2/index.html","231e81a61b0e9ecd48fb21a75aa0aa84"],["/categories/数学/index.html","60b97fd686ce6bdb0d164d95c575f606"],["/categories/数学/概率论/index.html","f331ba06aa950ff3634b5cfd1b9e8de1"],["/categories/数据结构/index.html","990bdf9175e0d207bc4bdd55b3049052"],["/categories/数据结构/算法/index.html","dbf06ca1f9bcf15143b01a85cb19dd72"],["/categories/机器学习/index.html","f7558dc9387a4b63c8f818dfb0c8151c"],["/categories/杂项/index.html","600a6d9a6f71ffd8aa6289a896613ddb"],["/categories/汇编/AT-T/index.html","b28451ffd17bc1ae7590858d27d39ad6"],["/categories/汇编/index.html","a481178505e74d9c5e2fc14e9ac55cca"],["/categories/汇编/page/2/index.html","25e89cb2ba005f4b43a8266b0dd1616b"],["/categories/汇编/page/3/index.html","83c5e5a218af446b9f52816bbbf72e0a"],["/categories/算法/index.html","2fe2218750c7b8ceedb94e921f01c26f"],["/categories/算法/page/2/index.html","2ac4cb1d380480e72efe68e9eb462dfa"],["/categories/算法/page/3/index.html","0804acc1b16e331cc3ffa25919c16ff8"],["/categories/计算机系统基础/index.html","db22567ee686ce17d11450f76f646fa2"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c5e184f6ef3e1d529083c65ecb2ce826"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","74c8bd8b295593b233f45d4b13d14f64"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","8c27659195af1c33898878b9000cc941"],["/page/11/index.html","23d894c6105b58d827c090bbb545576e"],["/page/12/index.html","9decfd3f4d840fc1a1d854df61c5c7aa"],["/page/13/index.html","8c7e66ea9489c212324bdfdb1f6395ab"],["/page/14/index.html","f6f5e09ecff2897753419e084704c407"],["/page/15/index.html","bf2f52a097b1fa79b4d384d7f6d4e763"],["/page/16/index.html","4a7791d80da095a6b642c48689b4a5f3"],["/page/2/index.html","e13cf35718d1b8c94f7accabb94f4adc"],["/page/3/index.html","47f49845dbbe1677949bd1a53fc43957"],["/page/4/index.html","81307ddc1046fe777875fc6d188c2a2b"],["/page/5/index.html","74370209b867013bbbb278479c0c0214"],["/page/6/index.html","71170feb1210cc70fbd826e6b0b9e267"],["/page/7/index.html","43c51fc74427af2440bac5980a0527a5"],["/page/8/index.html","9eec03f885c36bf259a53d81297fc2ce"],["/page/9/index.html","9ae6af3fed8467c6e72672d5ee084317"],["/post/10919.html","54406456b9dd95450278af6833bb04f3"],["/post/11051.html","fa5660aa5c2cee928d94143545372118"],["/post/11306.html","8dbe029055afa47677713d44ae380717"],["/post/11491.html","901005884c63f75516a37c942d8bf556"],["/post/11799.html","47662bf509ab927ff3bee543203639bf"],["/post/12334.html","a4f4327640c2258695a5f8fe367c3105"],["/post/1326.html","5ae6e285426ba332b18f05a7872235df"],["/post/14379.html","e874b141416e0e5531ff3776497c47c3"],["/post/14511.html","b8ac8c1854888d154f89d0b4b67e9c0d"],["/post/15201.html","c056ba9ba6430b29ae6c74474cf80f28"],["/post/15425.html","f21d369085083dd49c69e0afc2a6192b"],["/post/16107.html","464cc33fb6f417b1b26a76033432bf97"],["/post/17862176.html","7057b13c1bde721aa4dea4ed6c95c422"],["/post/18431.html","086821ac403c7402d38afbfb9c2a6473"],["/post/18912.html","3f6ebe2d2f7aa85893e305ac6a569a47"],["/post/1b9c8662.html","f44b0075f47cd81e272e4f79d710e0f9"],["/post/20198.html","869fa11f9b1fb169407e1857bffc4d85"],["/post/20ff5ccb.html","921bc351ea618b3a10b8fce39809642c"],["/post/21624.html","d60933e476e8218167469bfe143af182"],["/post/2170659a.html","16238aa4c4ce20bddd59e5f9a9db56e1"],["/post/22102.html","ef59bdd8f86748d025ff4017063f5645"],["/post/22493.html","31279f44db67bdd57d31355931728e6b"],["/post/235252ea.html","b67858a1ef4cecae57a4970db07ce7e4"],["/post/25699.html","78df2a8d6baf8b09e32b0b4b876b164d"],["/post/2647.html","f43ce13f3f4872af6550de53a474077e"],["/post/26477.html","593522f068ed2c1e76d9f18c835249ff"],["/post/26671.html","773417cfb61aec4de9d18a869f8b2ee5"],["/post/26737.html","09d8e48f99d33281ead238579b9263a7"],["/post/27045.html","37fe68bee408721a15e7aa8a77c38a72"],["/post/27621.html","6b219caf0528aedbeb314252b5741d37"],["/post/27890.html","f0b36e05422b3febd85dae5c90757d46"],["/post/27980.html","cb768157c64481a66e710a21b3f879c0"],["/post/280b588e.html","d366bce28833544179e2d86eb9c7d02e"],["/post/28579.html","1cd9f5e62feea93c0d6d8a8d1b89fb3c"],["/post/28877bf.html","f1f2735090d1036918ec666a3314e8c9"],["/post/28954.html","e51f2eeecec484e33b5e00fc1b938439"],["/post/29378.html","f9426766ad42159558512a98fe9bcad8"],["/post/29949.html","a61d3493f6ac85b7bce82cc01ebc584a"],["/post/2ae43b86.html","67fa4c9c6dd3d39b82fba4fdefc65001"],["/post/2ba82a45.html","67c7efb5e19715d3652bd06c236936d6"],["/post/30072.html","ef9968b7d85703e422e8c6af4a73353e"],["/post/30479.html","0b04752f15bcf7d83fc6f533b656d9b0"],["/post/31a6b40.html","23d12244ebcc772e6b3a6f5ef610cba3"],["/post/325cdbf2.html","1820376b0595d802b6b3a4b7ac12e4b1"],["/post/3319ed9a.html","76d612942777cddb19ded0a3e6308aa7"],["/post/3320.html","8ece217fcb90b6d4cdf348b1a42d94d4"],["/post/33cb1151.html","abd0efab8aa5ef475bd4971540436455"],["/post/34811d5f.html","899adf282f399d303a5e9d624116dfdb"],["/post/348d4e04.html","964d864df95d2b09d036d436efd22e1c"],["/post/3526.html","47487d3abb51ad262c927a01b5de28e4"],["/post/35532.html","68870f39c359042c3dd251d2e538beac"],["/post/35848.html","c6a88eacd49e74d816d8b0b0659a908f"],["/post/37318.html","1695fe585ca4398f8db37e0bf2c0ffff"],["/post/37663.html","66f172fc6c059810041e64e84bc73755"],["/post/38035.html","59676a9824a91b75742ba84fea90bb58"],["/post/38072.html","e3a18f56623d943cd53eed7aa992ed84"],["/post/38145.html","58a6d1062d7fdedc9b5060e0054d798e"],["/post/39968.html","36a6dca4ddb2572e99588de49dfab5cd"],["/post/3de4bc69.html","7f4378ed6b3fc6babe5efbe31b63d609"],["/post/40583.html","42a6e6b2b7ee3a579eec2cd62d79bdfa"],["/post/40997091.html","84628ad7f4c2a575beb235ddb1bb39eb"],["/post/41129.html","39d7d4c7ec3792bcd1ed9e577fd25cd6"],["/post/41763.html","08b5db42a8d6ef92257d8b7178b5e81a"],["/post/41829.html","c27d8ebfec701862811ac338cc7f929f"],["/post/41840.html","bec58a4ac31c9fb7125bab53dc8f82aa"],["/post/43817.html","5d8bde4e45a7b08e1b36fb1cae72453c"],["/post/43878.html","35f1134555df4222e072ba85e5967714"],["/post/44250.html","ad7d3ffb55fb023efa4a2f077d821dcf"],["/post/44336.html","6d868ffa045104b7bbe0a7a5d33bee3a"],["/post/44454.html","29309597143f01325a89244744728ac1"],["/post/44487.html","07254d56d185b1107d087b6daa110b3f"],["/post/44914.html","39489a0539a7d6a365d0f0b2806220c1"],["/post/4551c130.html","b663b9af2f96ea53fa6bd4027c848793"],["/post/455a4c92.html","e6945394fded99856bdc9083f5a0ffd3"],["/post/46466.html","9cf58e6f477df00ae592dd01d62d3cab"],["/post/46925.html","9cd550372e966386d493abd494e98364"],["/post/47075.html","f8c4080ea67bed63976800e2c11d1ed9"],["/post/48220.html","e167fda07c36f27ba24f3339a8dc4bbd"],["/post/4b1879e3.html","2984b4a38559b0dee062e0ba6c1a4b04"],["/post/4c720881.html","3fc0437ed0459a593a88b9359eecdc86"],["/post/50daec4.html","95d83101cab8b8bc0c70dfa602c9cfec"],["/post/51491.html","40b253399d187dc23618b404e44769f0"],["/post/51e63dcf.html","35dd6c5cdf1296b9de64ba560e2714c7"],["/post/52078.html","fb07cd11357e6c25afbfa0d4a4cd963f"],["/post/53677394.html","a3d7603e958c9a390f4f6ec4453b4bda"],["/post/54300.html","34ab8b115037a567d3c00a385ff70a4a"],["/post/54612.html","4033f7afbb87cd5353777613b5fbb762"],["/post/54613.html","2880cac310f331dc171bfb7a124aad89"],["/post/54708.html","3087c6fbda977bb53d178bbea4befdbb"],["/post/54778.html","bbf4a9deea8274ff40123b970e03e5ff"],["/post/5490.html","55f6db92105214f54d361d5fd0488357"],["/post/55046.html","492fcb14f96134ea6a8f9fe7a1b06eca"],["/post/56929.html","9abb0dbbc10dac686fb7f54ccad6d278"],["/post/57339.html","1a5f7fbc5335e1a25e9cad9be457cb4d"],["/post/57449.html","da610ec2f3fb63fd9c2fda3440cc3fa8"],["/post/57453.html","d32900dffff82f1d43648f371a259eef"],["/post/57671.html","cc333094264f0899e6be33e352a5100f"],["/post/58313.html","3cbf81f34b376f64c422165e7288bea6"],["/post/58481.html","912a485bbdff9befa872697c5923e6e7"],["/post/58986.html","c03f8272f4dff319fa6541a2aa889573"],["/post/59431.html","8feec270ffcd636618735b0cb1c94278"],["/post/5951da65.html","7e571bb40d040f629bd1e490efb0d8d5"],["/post/5be7e977.html","ac70c84f0244794206075d5bf64d41b2"],["/post/5f9e4eff.html","343e08655b5391729fa9280b0692f616"],["/post/604b49d0.html","a06646317168b1ed73a9a0107b9d5638"],["/post/61312.html","2cedb44bc8e581aa0d8fb136281b1a92"],["/post/61738.html","f2edd75aa25ead30da04142997e165d2"],["/post/61809.html","1389758ea961b8af401cf6e2615983c7"],["/post/61eaf19a.html","e2d8c5a8692e0657f80a23ab52f77672"],["/post/63002.html","89004e65d48e507fe7214584566c565b"],["/post/63711.html","d14d5ff2bbd68fe6e707879324a132d6"],["/post/6587.html","70d320a82b3c6105d4775f1ff69f6cf9"],["/post/6589.html","badd888a1b581fbd2c59aad1d0b116a8"],["/post/6880.html","d58aa902899a51802bd4d0cb76169f30"],["/post/70263071.html","c490edd8cf098971a6499da008d86b89"],["/post/71038564.html","84a3f1fb4c5d3018c62b21df35636379"],["/post/7119.html","5ab9a8d8cd3b794e687b39bb2d0203c8"],["/post/74e7fdff.html","81a706da2cbf1ad6f1960fe99d6e7be9"],["/post/7502.html","de2432ab38069c287b9f342bdf60adc0"],["/post/7564.html","03d3b556a960b78db4bbcf26eaac53c6"],["/post/766f9b60.html","802761f318d07c4d9bfa716cef4a07bc"],["/post/7ca31f7.html","6087f3bb801268f1077c43c2be326e49"],["/post/7d1c86da.html","3fef44aae8863f312167389ca4a5a571"],["/post/7f3bcd7f.html","9433b0dffad4d19472a5c338c2934da6"],["/post/8039.html","92e043afb21e07c2347e5c89d844f6a1"],["/post/8050.html","93a81294634b6323762289eace95d7a2"],["/post/8072.html","9ee0b7aac1eaf7edd2d109f7f59f7457"],["/post/8274.html","fa96cdf7719f0c6af3544144cbccb0c4"],["/post/8372.html","3e8cd27a906a8c03eea726f90bec8f00"],["/post/8498.html","0d478495b69f71d64e6e93152d750fbd"],["/post/85b4e13b.html","45d4e158228f170fe0e7791e5270ff2f"],["/post/912b2566.html","dcdeaae36f38cc072311d88e82df129e"],["/post/9187.html","db5235d71f653239ab12a1d8c68f77ee"],["/post/9197.html","b07d1142c2b6b02bddc293281f606a2c"],["/post/94ceb2fd.html","4942a4e016f4ffa522017cd90fc90a48"],["/post/95495db.html","8e5cee3d742f6e003f79b2a752a1b37c"],["/post/97246020.html","86bdedf2398166dec47303a5a70c7b61"],["/post/a3a786d6.html","52e0ddc19026aed0852d5c2f2907b962"],["/post/a444b428.html","c98ea29cf96642f9b7bb54d0d3aefb88"],["/post/a50b8908.html","35294a8007b74943d1830ae0fe6551bc"],["/post/aa1eade8.html","472c717b0090bcc7779cf12c32fb8062"],["/post/ade8c6d6.html","8fa2f97776b57806dee456cc894ce380"],["/post/ae8362df.html","5914f0019137c3f496a21e73e897a49f"],["/post/b4c1d206.html","81a0e0ab4a554c57a337f58c22661dd8"],["/post/d431fab4.html","f40c96b77a41e43f2507511ade68c346"],["/post/d5381517.html","b2cc837dd3244f8dcf90de754e602817"],["/post/e058ffd8.html","a118ccb498076fea256f56333af4e8ee"],["/post/e0f8cb74.html","38e0920a84c6f78be81a03bcd668bb9e"],["/post/eefe591f.html","c1d6d4a7f0c4e406bbc30f89785dcfce"],["/post/ef296a07.html","33deeeaefaaa8fe498ddb34a3fb8e366"],["/post/f201f9fd.html","69266452ef0938db14af55c8d7b12355"],["/post/f79e4123.html","020fd9c25518932cd04df23f4269edc9"],["/post/f8648a1d.html","4c40bcf47e1547bbd6d6e4de7f71917e"],["/post/f89cb603.html","9e06d95ccec8d8ad94060cbcf7c5df2a"],["/post/fa288682.html","baceaa967574acb6d08cc037b8366f55"],["/post/fb98053e.html","58bc5db5c038ad9ede0ea036e0e7aadc"],["/sw-register.js","7ee1aa01839abbfa45498939430c2fd9"],["/tags/AT-T/index.html","237e65183dd72b3ec5184b5afa2d0c51"],["/tags/index.html","972808a90ecc79b91a78ea490fbea1a6"],["/tags/动态规划/index.html","14ccbc8476efac2bcc796955d04537d5"],["/tags/字符串/index.html","6f2e796362103fb308fbf9cdafb5bdd1"],["/tags/字符常量/index.html","93d34688aef299d38bd9db608ab9e41b"],["/tags/快排/index.html","eff8070f7f4cf78d5c30c79bcd0a7d46"],["/tags/排序/index.html","1233c742f37387ed712a60c448feeaa8"]];
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
