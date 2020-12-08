/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","d6fa58bdcbfac818d004e5efce51fa3b"],["/archives/2019/index.html","13d30088f3be71ee258a989b0397c4d5"],["/archives/2020/01/index.html","7bea115e922c76f9c88e3826d3217157"],["/archives/2020/01/page/2/index.html","4bba16f8a395b192e125f0889d337757"],["/archives/2020/01/page/3/index.html","a2f3e5c52ce992211b97d3ae44a01a58"],["/archives/2020/01/page/4/index.html","305b2f044c9fe3cb41ee9b2766cbf46e"],["/archives/2020/01/page/5/index.html","22319ad89eec5625333d9364f57b37bb"],["/archives/2020/01/page/6/index.html","8a8a6c9516eeaf7ec3fe2052d5ea6aa3"],["/archives/2020/02/index.html","b9d9535f57a6bee221383631f0038efb"],["/archives/2020/02/page/2/index.html","ca2c2106895c280afd6feef561887d5b"],["/archives/2020/02/page/3/index.html","7de6fbf7c385cd56eb50a1db777dd0fa"],["/archives/2020/03/index.html","f6869eea3951e2f15381ad740d78fcf6"],["/archives/2020/03/page/2/index.html","babb30c342a3f44e7261313aebc09dee"],["/archives/2020/04/index.html","93812ea46b757089f23f712827b9225d"],["/archives/2020/04/page/2/index.html","aaaf8d467efa946b33f5bc926c27088a"],["/archives/2020/05/index.html","1356106887849212c21177fe17fc8d53"],["/archives/2020/05/page/2/index.html","1543baa5c8004eafc4c6f85acde9c620"],["/archives/2020/06/index.html","ee1b7d0165c80c95f94dd67bca0727f6"],["/archives/2020/07/index.html","6f043073659d599997285062a590fa24"],["/archives/2020/07/page/2/index.html","b09d78fb8d1b1498ae8c667b753e23d6"],["/archives/2020/08/index.html","08a36aac3e9fee4a481b997ae26f05c1"],["/archives/2020/10/index.html","8fb671d9bee48343b2e5a4c17543b9c5"],["/archives/2020/11/index.html","bf740e237e6aec05b53b8330d92dd9b0"],["/archives/2020/12/index.html","a45a31057591992f08caf63869d0c49f"],["/archives/2020/index.html","ca49ce9eb8ca8f7ef0eeb1a51a8c2542"],["/archives/2020/page/10/index.html","d88d66307dd39ddf4a0107e3b186bd3f"],["/archives/2020/page/11/index.html","54902bdb3bc5365d0409dba596b9349f"],["/archives/2020/page/12/index.html","295d69de1fb2a1847456d91603acda49"],["/archives/2020/page/13/index.html","095136669ba47be19868e6438474a79c"],["/archives/2020/page/14/index.html","889e8ccb2bbae9796a26b2aad026c8cb"],["/archives/2020/page/15/index.html","130ca64fb199e3ba7dad860fac04c6e6"],["/archives/2020/page/16/index.html","43cdbcd520c204ce72d3ac8bf3fbb38f"],["/archives/2020/page/2/index.html","da9d46fdd7ae3a0dc3b970dd9436c2e8"],["/archives/2020/page/3/index.html","549fb7c0e667b1609d68db97b674f080"],["/archives/2020/page/4/index.html","56ba7cf12b2d1931502e091b72ead013"],["/archives/2020/page/5/index.html","84244c274375eefb220f6bf2d576f46a"],["/archives/2020/page/6/index.html","e578635959f369202c268f1fd85e2170"],["/archives/2020/page/7/index.html","ba8df10e66e3c8075cf5d6e9333e11ff"],["/archives/2020/page/8/index.html","44bdb8815a9b2da79b4a14d9637eee54"],["/archives/2020/page/9/index.html","85d902971d2da5cd5727d48f9b9b98cb"],["/archives/index.html","40d28de9312a6218ba2aed35f28fb510"],["/archives/page/10/index.html","ee29808df1e896ef8d4109980ab38ffd"],["/archives/page/11/index.html","8ad5f643f20b2e178806157de2d738bd"],["/archives/page/12/index.html","f4a28e48d574e6d64739c0f7c9e2fe0a"],["/archives/page/13/index.html","45d7c4dd59c1fd317b078afb47646b85"],["/archives/page/14/index.html","c062aab7a6e69d9debf104aa12f4add3"],["/archives/page/15/index.html","762f96746cc6e6e2ff304b288cd28507"],["/archives/page/16/index.html","c8d75ce33726a2e85ac64416384b3f5b"],["/archives/page/2/index.html","1c656ac03d266bd096bc44e2a9976951"],["/archives/page/3/index.html","83cd172504e97b251b6228e6f734ec84"],["/archives/page/4/index.html","e5a00c3cbe23a3a5c5b36ff5668420e0"],["/archives/page/5/index.html","55a8fb65c3469022e0831c421c337b9a"],["/archives/page/6/index.html","5f2fecbd25dc9e8096d2ca22bf6d38bb"],["/archives/page/7/index.html","13009a921f9593506f6fd000a05994d6"],["/archives/page/8/index.html","464864fa29c1ab8bec8fbef0a3535cd3"],["/archives/page/9/index.html","9f0667519e659460f08735a019a37cc4"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e2f2cdd64f0962b157d9f80d1ee6a177"],["/categories/Linux/page/2/index.html","d2efefe17f5143705f894f4b811c0069"],["/categories/Python/index.html","aa3358957ac94cd9efe7d477679b8abd"],["/categories/c/index.html","94400b1b76ace282d0b8924d289a5b92"],["/categories/index.html","35ce4b17423852cc8f669ea69b5fb2f5"],["/categories/java/index.html","486d5c11d806c9d9ba0276d904c7e56a"],["/categories/java/page/2/index.html","23854430118ba3b5450d1d3f39684dc9"],["/categories/java/page/3/index.html","ec6b8b915bad0764a68aa0c4b3e45663"],["/categories/next/index.html","76c60d2b359ad296994b2efdef4179d4"],["/categories/stl/index.html","bf4637567db63238c6335126f2ea07f6"],["/categories/windows/index.html","33bf4c5992f29f33b553285fc168d8d8"],["/categories/基础/c/index.html","9cd674a857d3faa6c6edf1d4571c66ca"],["/categories/基础/index.html","0fe512ebf15ce7cbae3b9aeb38b8ce8b"],["/categories/基础/page/2/index.html","4df3e807810a281e0642f463e7e9bd77"],["/categories/数学/index.html","0963a81ea13ba9d0af497af18e54d1e4"],["/categories/数学/概率论/index.html","3787f6871f1278e171454acc002aa1f4"],["/categories/数据结构/index.html","3dab0d0adad27ea43111507d1d7d0ffb"],["/categories/数据结构/算法/index.html","612faed3e8bf302b6b8b64f26dac9931"],["/categories/机器学习/index.html","7a248bb206ac807956d77b176bc31f44"],["/categories/汇编/AT-T/index.html","2dc5b032045022801fae1f5979f585cc"],["/categories/汇编/index.html","52dda95640263c69930b9ab06bf97bd5"],["/categories/汇编/page/2/index.html","86be4fef0ec30f182e5f4e65a45c4115"],["/categories/汇编/page/3/index.html","f31681d0c5fb2f81637e5e48f4853210"],["/categories/算法/index.html","ae00dfa2a9828da82ec54db1728b0699"],["/categories/算法/page/2/index.html","d9190b54ece729813bbd2a6ed9e05f64"],["/categories/计算机系统基础/index.html","5b684cb8feaeccdf67ca287d61d533f7"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4c8bb18c88a5a1d0477b6dd2a36eb6b3"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","6871c8de9c794cf2dc1058d805871dd3"],["/page/11/index.html","264b7124f5d0fa4bef46aa9d30bbed63"],["/page/12/index.html","c198509eaa67a40c800cf3517fc83faf"],["/page/13/index.html","2c2ff9ebf06e7cae9eee693393bf831e"],["/page/14/index.html","d822ce7efa75fe0426d4d7c3147851c9"],["/page/15/index.html","996be6f11951a857134e0eacfdaa2809"],["/page/16/index.html","a22dd9ee4cbc224025598b42ce028e0e"],["/page/2/index.html","3dbda6f98623fbfc6d63427b6c637f5d"],["/page/3/index.html","646a07745ef4b028591222f6eb066a95"],["/page/4/index.html","2d9e4258d12bf91dbf65641d2e14a233"],["/page/5/index.html","259d55c4100763c6c6b06edeb67deca0"],["/page/6/index.html","3b7a12c51608ea0435a9b3dec54db273"],["/page/7/index.html","9aef2eae0b51de5e25e0446ba722d86f"],["/page/8/index.html","cb5aa652600356020f53df2cce3be9ec"],["/page/9/index.html","3a0c616a1b2ef3479d1d2906dce5b912"],["/post/10919.html","30e3962fb0e95ad58d5a8c9ef1e6e23d"],["/post/11051.html","2967a5fa0fb712e261248fcb22bc1427"],["/post/11306.html","5045060bc23b923dca961c7d5b87e273"],["/post/11491.html","d2bdaefea6f6addcea375fe52b818bfe"],["/post/11799.html","dcc40a3f1b45cbbe8fd4f9951c93fb1c"],["/post/12334.html","53f3934f40e0c83dbf11fc3b9aa03a3b"],["/post/1326.html","24329146fba38187f5fcc6f27aca514e"],["/post/14379.html","24427efa9135f3c67c2b225f4c4f4d24"],["/post/14511.html","6fee77af6f83ea61fd6e7a7d4ca3ee24"],["/post/15201.html","05caf78cb9401fe31af89440c18ad5cd"],["/post/15425.html","e4b6a53a3b85ca9fa96ff723a23a5543"],["/post/16107.html","210a4b85495d1f6a6d937105216ec0fe"],["/post/17862176.html","12fa27f3f59c92215d7bdc7f4b22aa6f"],["/post/18431.html","89d4c100e91ba981251a9aa4a4bd0985"],["/post/18912.html","41985fe60a3f86fd3ce2b638df4cac9b"],["/post/1b9c8662.html","250cd9ad905426ea08ac879f142d35f0"],["/post/20198.html","a9a797ff329cdc800e04957f96bc1d32"],["/post/20ff5ccb.html","5c3042ea476c594e627988d791707a44"],["/post/21624.html","0c03dfd5d796da14c4fbac4e2dded5be"],["/post/2170659a.html","72b0810c34a99a4abf147cc6b63e95cf"],["/post/22102.html","b98b28f53824b3db7483101e9abf67a5"],["/post/22493.html","2f4e42abf0804ccabc31acd380bbb91a"],["/post/235252ea.html","8b2904858bb53dee2a634a965de43a61"],["/post/25699.html","76d762d6aa4a14a5ce283a26f65624aa"],["/post/2647.html","7443a52e68fc977a838a6b2850527e3e"],["/post/26477.html","f6c9e03b6b266889342da61e459eb2ae"],["/post/26671.html","8fd4993aba1d90d92478c652c69bc5d8"],["/post/26737.html","d9f0d86b664639d65757eedd744d6cd5"],["/post/27045.html","ca397bb6a2080c78bf71950618cafbf2"],["/post/27621.html","1c421d37e6c40325bf1939a11d8b9944"],["/post/27890.html","ea4a22d3a8dbff91b1d15312713a4dc8"],["/post/27980.html","b4973a827ccc2a8dbf155d135235d1a6"],["/post/280b588e.html","1cb93a91cb77c32a65e77de4ca8f7561"],["/post/28579.html","f35270598652153658f14c15a77aa296"],["/post/28877bf.html","6f5a6f5cc7bf155c425626b733c32acc"],["/post/28954.html","e85c0fcb9ebafa6abeadfc175533818d"],["/post/29378.html","00c81600adb2c5864347366391bbe03f"],["/post/29949.html","cbe853d53c83e07485d15b4c768a97d3"],["/post/2ae43b86.html","d22f35064582522e113d7c50aa93e62e"],["/post/2ba82a45.html","c0ca8b15ef2f962a97c2bc8c278adb79"],["/post/30072.html","2fd6cccb81ecf96fec6948c1b35ea542"],["/post/30479.html","88a689021e5ec22972b11e8904259293"],["/post/31a6b40.html","a1f85ac65e7d5408c054bb8e5e1a090b"],["/post/325cdbf2.html","4438113b11683c9cdd110dd460401327"],["/post/3319ed9a.html","e70f7e461e608395b7e33e78e4caf85b"],["/post/3320.html","b3eb2764c0a9aed31462055cd6ae24b3"],["/post/33cb1151.html","cc768db76b1956a2a73d9ed4a6942943"],["/post/348d4e04.html","f1dd9b3ce2e7d19449542d05a455ddc1"],["/post/3526.html","87bf2bdb445cc1d685cdee4014ab7c01"],["/post/35532.html","afc88e330bf35779b116f540078c4244"],["/post/35848.html","af431d8d8f9c1ecf32ff418c8a328321"],["/post/37318.html","2cc69da05a1cb50c223c4cf4cbc17326"],["/post/37663.html","25333c45f784a1fb7f20c56c2bf63fc4"],["/post/38035.html","90d01c4f36e3e11fdcbaba3f783aa784"],["/post/38072.html","1f0ad6d3301b3d539803aa911f1a86c6"],["/post/38145.html","6e2aa791fed2a994a5609e30d8d22c24"],["/post/39968.html","35f595fef87c3ad55019a3f11d412955"],["/post/3de4bc69.html","dd3c6d08b0d8597ec2080b73d2925c6d"],["/post/40583.html","ddb897fb54278904c7961fd66827aeeb"],["/post/40997091.html","60ca4bdf01eafc8b056d5056a06910b0"],["/post/41129.html","2dc7890ad1773b390d379c2b640c3086"],["/post/41763.html","caffc1055a3d2cb85ac51c6d2eab45ed"],["/post/41829.html","cca8129d707e80ee8afdced0852784fd"],["/post/41840.html","9c71b2a93c07cc8c6ea5dcf97fbf89bd"],["/post/43817.html","dccbe4acc66162d67df21b9254c39f9a"],["/post/43878.html","a3dae539474d172336c84bfec7b262ad"],["/post/44250.html","265407690764746976bf2f4a9e98a700"],["/post/44336.html","de63cebb4749ad285310c3ffa5859be4"],["/post/44454.html","22940ac534dde52943c8892d027777fd"],["/post/44487.html","ecfbfa3a2abb5ba91f4bf591347171c9"],["/post/44914.html","9deace40ecec7dba0b18bf18d27e7f6e"],["/post/4551c130.html","d64effd8d74066c96e3e4a51edb15df5"],["/post/455a4c92.html","caa9c7f751f182fd88c33360f2b625f6"],["/post/46466.html","bc2187887f61117edbada66a2d23e78c"],["/post/46925.html","590f3886281a5428541b7f1e51c635dc"],["/post/47075.html","45790e3a72bf22d9f0c088eb5d6e04b5"],["/post/48220.html","2179642ccc377f8d421eec0e37f1a6a7"],["/post/4b1879e3.html","567da0c0c7dc72045069e7aa4058dfe2"],["/post/4c720881.html","47286c827b207c5f91acaab568fef586"],["/post/50daec4.html","d75c90f888cd784638969f58d6be4999"],["/post/51491.html","337a56c0cb44350d7e582998467ed3c7"],["/post/51e63dcf.html","afc7050896abf51faf0f8df52186f140"],["/post/52078.html","1d9fab00586844f876cac7df653b4f55"],["/post/53677394.html","d8c35d3015a87e7b47600c6a11d6339b"],["/post/54300.html","7ac037e08775d9a03d8f448ce816c660"],["/post/54612.html","b34d444d0317d519345b3fa357e30e48"],["/post/54613.html","974814dea1a2156822d86669b50b8282"],["/post/54708.html","c4dd7bc9deb4345213e975ac345193ae"],["/post/54778.html","460bc9dd3cc800f39fc7f294a2bfc417"],["/post/5490.html","157880ddc1b7a3b6f89a1d8537637f2c"],["/post/55046.html","70021c9f943c3ec8360db5243d99bd40"],["/post/56929.html","0d5f5229f67f5e0dfcad01a25dd2d8cd"],["/post/57339.html","1b6fc2fb944d9db850faa86ab505567b"],["/post/57449.html","2fc2a24cdc125fc9d60524ad25c08ec9"],["/post/57453.html","ca7c34a85304a12300f53cf97d154e80"],["/post/57671.html","57beb6875155db32c909412d77b84282"],["/post/58313.html","bfef8f8ca19a08ec61c4a0841a79ab27"],["/post/58481.html","bfe9f29775b58b8843e7163d3bcc659a"],["/post/58986.html","38f76ed6cf3d3b48353cfd905cda109c"],["/post/59431.html","0e8868d8f4453facae4c11db803f96b3"],["/post/5951da65.html","4112622b2e441c580e295f99f2c2c99a"],["/post/5be7e977.html","b8f58314632e4dd47cd75a4d70ed07e5"],["/post/5f9e4eff.html","507d246cf6c13d43b24b5810aa034ae4"],["/post/604b49d0.html","5fc473f275013a678e707526530bef54"],["/post/61312.html","d6dcb7a3026cfbf4c51149a959874b17"],["/post/61738.html","c1acf9b403c01a79a885d440de857847"],["/post/61809.html","78e3a0062deb6c5dbefc9822c3879228"],["/post/61eaf19a.html","7d47ebb74282d8518f399ba3f879e03c"],["/post/63002.html","d25fcc5d0aa754a8952b6fc37ff74bad"],["/post/63711.html","c3dd751cd677a8cc7f27b152575181f8"],["/post/6587.html","7c1c0caccb650f22fd9dba890c2ba580"],["/post/6589.html","791da2512cc017b8d182abac15c0577e"],["/post/6880.html","d4956cfc898487c02b261a732494293b"],["/post/70263071.html","4c43b81eefe873316250c2fb6ac9b2b4"],["/post/71038564.html","ca48521dda55a8bffbdc3f5a4483251f"],["/post/7119.html","145ce5409aa6025f28334e499b888c1b"],["/post/74e7fdff.html","f73eb06175fae90ee9e8903a43db20d4"],["/post/7502.html","6f4943604bf3b7a95c12f8e4036791b2"],["/post/7564.html","c9b0cc511318e1b821dd80234769ad81"],["/post/766f9b60.html","0a285a830b82c8418a555a72e85d35c4"],["/post/7ca31f7.html","288a55d7e1da16254ee1e4f519970b39"],["/post/7d1c86da.html","c3437c5d4bb94f9b0def5f2030f3e780"],["/post/7f3bcd7f.html","090d31742c21c540483b5726b2be3a4e"],["/post/8039.html","743d00563975598dcac8fa7a0a1972d0"],["/post/8050.html","2a8f47a1539ca4329f94d0cb8276ee03"],["/post/8072.html","d79a9e62f461cd3062d86396df626783"],["/post/8274.html","88ffc9291ca1eb08196484aa43ecdcca"],["/post/8372.html","61fdc0299b60fb20015e2b478c7c2c14"],["/post/8498.html","7cd6ad8359bc6d9b4ab611d863826a7a"],["/post/85b4e13b.html","c2efd4b59174c2876fca738ac905f8d4"],["/post/912b2566.html","d82001c877f5276c9f8d0d47464ab5a5"],["/post/9187.html","3d625b9c828242b57a78bd4050a0752f"],["/post/9197.html","28e1fe47122488c6e8ec564a0ec722e1"],["/post/94ceb2fd.html","dfd5ea60b3ec4a6819513bc20b806eab"],["/post/95495db.html","05862eada22387d5f4e2cc5ed6c43462"],["/post/97246020.html","61be1564f498ef25bb9c344625f24339"],["/post/a3a786d6.html","cd7520cf78890e1965afc5158221e012"],["/post/a444b428.html","fe1702f6e343ca4e07b3e18326f3be1b"],["/post/a50b8908.html","c292ee500991036e0406329f61856673"],["/post/aa1eade8.html","e6e0a73920054b6d0d54fcd860ead37d"],["/post/ade8c6d6.html","5334417d3cf628e202eb4d565c30bf36"],["/post/ae8362df.html","e702f9317d992bdf4db7fa9e0481b3a6"],["/post/b4c1d206.html","739c337553818595e7bef31aabf6e6ad"],["/post/d431fab4.html","083c55db87d756b119404d389dc58888"],["/post/d5381517.html","c68dda4feef738fa7d97f002ef10134d"],["/post/e058ffd8.html","4f20b4b9823c586d7879f4e444e61dd6"],["/post/e0f8cb74.html","8a4f0dbb56a25c8f2d5190c141e6ecf0"],["/post/eefe591f.html","ca66061cad5e45b7a1a26e69b7c4c5f9"],["/post/ef296a07.html","134e73aa063321ab4ceb8eafb8230ae8"],["/post/f201f9fd.html","834310503b45de06f2c356250c346878"],["/post/f79e4123.html","227cb17455716a02644b09701f12f48e"],["/post/f8648a1d.html","bd58f19e0976a76dc1e2fb9f80ecad6a"],["/post/f89cb603.html","52240f0db727055bc54e04a6dfe5abd4"],["/post/fa288682.html","74b5bd224f258b58d3db173cc8da96aa"],["/sw-register.js","1af3220462c72aede8172420524e2c14"],["/tags/AT-T/index.html","a80f50fd6ad1540ae7b5065084fcc395"],["/tags/index.html","e6353a12cea55899c5ff37a3c3c286d9"],["/tags/动态规划/index.html","4d0c755d26937b25701e853c4a2de68d"],["/tags/字符串/index.html","21c08442062cda2d4bbd5c9ef37db3b3"],["/tags/字符常量/index.html","54976d24a239f345b8d7873612651bb1"],["/tags/快排/index.html","52084de5c9d970de6c5ae2a188b7eec3"],["/tags/排序/index.html","f6898cdf78d662339fe7bf4ab718b40b"]];
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
