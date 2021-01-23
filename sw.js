/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","243fa74605333a31563adf53e142c426"],["/archives/2019/index.html","b1d2e1da9541e9d4031c868806d5845b"],["/archives/2020/01/index.html","89f561de23b07b4a47e4f2d6a0aaf0dc"],["/archives/2020/01/page/2/index.html","90abb2a164d9db087068d1f6d1b7e7c2"],["/archives/2020/01/page/3/index.html","9ea4fd26e25b0ed43490bf20a09cfef2"],["/archives/2020/01/page/4/index.html","a2dbfd6053f41d3969cd1609fa74c644"],["/archives/2020/01/page/5/index.html","178fc2e52af56503c4cf251f774d7b33"],["/archives/2020/01/page/6/index.html","f58b0f7af9ef1ebd7b62d21779248ea7"],["/archives/2020/02/index.html","ed447b020a70ce1772c6ffa280d6eb3d"],["/archives/2020/02/page/2/index.html","3b71f2254bb5f7669c3c25245cc26b07"],["/archives/2020/02/page/3/index.html","58383df3d9a822690701c23a2598966d"],["/archives/2020/03/index.html","2e018a9ea6c592030b613de5ec83459c"],["/archives/2020/03/page/2/index.html","ccdaf1f949e42f01c9adf15b3e1282b8"],["/archives/2020/04/index.html","39f23d39051248e1b3b209fdb3748256"],["/archives/2020/04/page/2/index.html","373dc2e1db403995ca83a09e67238cb2"],["/archives/2020/05/index.html","5d678daf70b6dd52986d790990643683"],["/archives/2020/05/page/2/index.html","a6cd45b16ececf572cbcdb09f5503026"],["/archives/2020/06/index.html","dad0aa4653dad39762cb6f251d729238"],["/archives/2020/07/index.html","a70daa1d20ea68725c79bd41a4ee028e"],["/archives/2020/07/page/2/index.html","a0b402b49f6ccf432db8e71e8cd0b597"],["/archives/2020/08/index.html","1a2a7fa244b3530bfc6e6cf9be3d3ba8"],["/archives/2020/10/index.html","1416939300105adaf2efe12c3d3142e1"],["/archives/2020/11/index.html","5d209f5427c14d79edcbfc90cf74774a"],["/archives/2020/12/index.html","3f9108ae09bf534eb28df6c4cdd7d0cf"],["/archives/2020/index.html","4e08c120f54b68fe127aeeff95e58d5b"],["/archives/2020/page/10/index.html","d6fbd522b5f1fc1c82cfc32c992c4851"],["/archives/2020/page/11/index.html","9ee7824c37afb4394d8c1dbd1d3f5cd1"],["/archives/2020/page/12/index.html","57e3f11190eddaad5eb548a4fda6dfc7"],["/archives/2020/page/13/index.html","1a5c1251376761aeb2b016d1ece47787"],["/archives/2020/page/14/index.html","7a3dcb8141c99ed18d1355150f9815c4"],["/archives/2020/page/15/index.html","d0d9fa8314c8f261e90c0fbf7121aaa2"],["/archives/2020/page/16/index.html","c89a33714188ceb2d2dfa1b2ba2059ea"],["/archives/2020/page/2/index.html","08433ebb9a5f1ced21411bb9aa6cde8e"],["/archives/2020/page/3/index.html","68ed11c151998f34828bbefc8655d2a6"],["/archives/2020/page/4/index.html","c1d19f197983dcf9c082724132ed30bd"],["/archives/2020/page/5/index.html","de6a90aa391959ebe4afab3445cb6712"],["/archives/2020/page/6/index.html","a886c638f9bb7b6bcca8d8800e3ff91d"],["/archives/2020/page/7/index.html","8e3255f9f8254e3f29daec404c7da152"],["/archives/2020/page/8/index.html","f6a9ca6e1936d97c17c5159434afc0ce"],["/archives/2020/page/9/index.html","e036d2e1623458d5ad5f6fb12fc7256c"],["/archives/2021/01/index.html","822604053de6482bd8619c185f139dce"],["/archives/2021/index.html","6f069c1649c76f50cd60a0194bcfd408"],["/archives/index.html","7e5491dafdfedf61d40dc1cbdd0d5656"],["/archives/page/10/index.html","367bdea75c0cac0d50cace4bf5d80463"],["/archives/page/11/index.html","47e60d7bc4e677f528eab02b22dac098"],["/archives/page/12/index.html","0ca5e5616644e6ab91c2564640dbd78f"],["/archives/page/13/index.html","b41575b39df302b832c2469c59287255"],["/archives/page/14/index.html","38c155dc486b335b620874b5308768b7"],["/archives/page/15/index.html","d35920b30c7ef8a49685c8728a1cb118"],["/archives/page/16/index.html","30b160315fe2b721d13d00f2d613ea27"],["/archives/page/17/index.html","3cf6cd9833d184e7c07133c7cd8cbd53"],["/archives/page/2/index.html","91252c7012bb07cc02c7863ab3aec742"],["/archives/page/3/index.html","9995c1dfcc00ed8965f689ec93d606b3"],["/archives/page/4/index.html","49da975d42fb6ae44939af42efa112d0"],["/archives/page/5/index.html","b94505d728d974e3513ed996ef32457b"],["/archives/page/6/index.html","a94dea5375552b84629de3424db296ba"],["/archives/page/7/index.html","4d81bb92b94e8220ad71adcabb364390"],["/archives/page/8/index.html","d987987dc1fa00d387558c76fe3d46c6"],["/archives/page/9/index.html","34f023b318e72765b8a01ed44cd75f19"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e0d777f454fe54eef26e3c87196c160a"],["/categories/Linux/page/2/index.html","37a2f7595ffa1bfae2520056f8ccbda9"],["/categories/MySQL/index.html","2269e90d9a46fcd4e08bc1aa0ea99dea"],["/categories/Python/index.html","a65cc18a8475b76afdfb9e7c4970244a"],["/categories/c/index.html","033f091c58d0506c3dddf3a6bb5b4a7c"],["/categories/index.html","15192f5320d04a236b25fe486384e4fe"],["/categories/java/index.html","485ffac66f2682fd7737858d2324b9ea"],["/categories/java/page/2/index.html","71763147aa7563a0be0e487530de2c21"],["/categories/java/page/3/index.html","0b6ef93e7e5d34ed7f74ff81e0d90651"],["/categories/next/index.html","f04df0bd7a094cf0f5545274a4800b33"],["/categories/stl/index.html","29da9044e516e49d718fabc083a37b0c"],["/categories/windows/index.html","46bd03991dceb23e72298488dfefec62"],["/categories/基础/c/index.html","f51cff2d884e61b7a2338dc118655392"],["/categories/基础/index.html","16ffd93340db5b48a9ac18da4d5ccb0d"],["/categories/基础/page/2/index.html","03448bf875e4d1bea7f887e783eeefa4"],["/categories/数学/index.html","264c203f40bfc2dada9cc58a0664b5b2"],["/categories/数学/概率论/index.html","8fbfc4064680ad4f7b1c7162010143b6"],["/categories/数据结构/index.html","612cd50570c9060ccfc565afa066c1fa"],["/categories/数据结构/算法/index.html","db7220d7ff34cff04ba86886939a43d6"],["/categories/机器学习/index.html","5bf1080a4188029a9f59a7512f8be98a"],["/categories/杂项/index.html","21985204f3c1a3833c361374c9b089f8"],["/categories/汇编/AT-T/index.html","f2b5a8e65c5f6e48447de691f6638018"],["/categories/汇编/index.html","4da7f7d226398ca1b75d327bfea2aeda"],["/categories/汇编/page/2/index.html","1578b9bd171941dc41a2d92d77496fab"],["/categories/汇编/page/3/index.html","fb1507c5d155e78b44b677c83361f88b"],["/categories/算法/index.html","7d0b441ae1ed5e547301046f8b5d16ab"],["/categories/算法/page/2/index.html","e307710f285ca6d2032c00c8b93bd7fb"],["/categories/算法/page/3/index.html","45e19ad6aa62020ae1b850cea35e88eb"],["/categories/计算机系统基础/index.html","2a3d8f9aa0114f875afc37a6500bcbd8"],["/categories/计算机系统基础/page/2/index.html","4d8e0b9a6e7318c196a0637bfe7b9f47"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ea12d7ead93090b02daa165ad196fdc9"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","ce7dcc99cd55e0120e9813d3c176faf2"],["/page/11/index.html","3a2f12a952241bce7920f60a76f316bb"],["/page/12/index.html","f532bdb8480941fbd02cc11dab6cf509"],["/page/13/index.html","0e0baa5adcae80b499624cf2677f7b2c"],["/page/14/index.html","5cc42480762886668df0c7bdbc84cc01"],["/page/15/index.html","bd0781a4b68870ee6e53949d99200cae"],["/page/16/index.html","a999872042827b0cf0545fea5f552271"],["/page/17/index.html","c8a13558e3c8e9787e89331b2d085636"],["/page/2/index.html","fdb3e18b0bdf3d002bd0d45dc9578634"],["/page/3/index.html","fd7618a761374f1c047845142adee85a"],["/page/4/index.html","e0a469a9095b393e74a39bbb64b59117"],["/page/5/index.html","177cb08d89027edccf604c954d7bfe0d"],["/page/6/index.html","e1697d49b9508445b7761ebf046f293e"],["/page/7/index.html","57e0c10d9b9a319f1d2559ec690f744b"],["/page/8/index.html","98a2d31282cb743a9e46977fe10d288f"],["/page/9/index.html","973d76fd4fe4574ec93c4077970a7895"],["/post/10919.html","cd48a04bf3d19f2e54c49e0cd5446dce"],["/post/11051.html","ede35b8e881e97b9a0569f9271c70808"],["/post/11306.html","190625f6e6e33274a3e66ad88629f771"],["/post/11491.html","9a89a6e4a442d69f5c5dbd140e1a9eba"],["/post/11799.html","e324e76aba6b98e96cb17bf9900cf484"],["/post/12334.html","c7545d05aba713ff88d8bdad7b1308e0"],["/post/1326.html","fe35ffee01e4a6f247f61ed0f7c5dff0"],["/post/14379.html","f631c3c70bb0f44f13d09bebd6f66198"],["/post/14511.html","a9031f9af4dbbf0df0de9a53d1d5e655"],["/post/15201.html","274036ee35419930267eb18e5905d227"],["/post/15425.html","47882c5188db70dca521eeb94c265c91"],["/post/16107.html","a0841bfd9dd95e5fd28778d359a4eb9f"],["/post/16e2846c.html","9695407304267bb4794af9630aced3fd"],["/post/17862176.html","b84670008ddfa8c4e1976fccffffb6a5"],["/post/18431.html","45ea0f2410b1ecb59b152a255f1903f1"],["/post/18912.html","796e29ff480c7a617d7feb3c7ad707ea"],["/post/1b9c8662.html","c6b0c2e80d75efcd32abf14b11010e8d"],["/post/20198.html","5976e1e73320f9e70d0eeab2c4602f74"],["/post/20ff5ccb.html","027ad9470b398551d12cb62b44c61607"],["/post/21624.html","9629d26b126185f6294e050676c6084d"],["/post/2170659a.html","53b435c9cc6b21aa76129af896ee5899"],["/post/22102.html","9bce2f752338ad4a227242c642eff497"],["/post/22493.html","a2424b394cbad1973566213a94aea508"],["/post/235252ea.html","3ef7ba30d3f373d697ab46815223eda6"],["/post/25699.html","b9c712dbb168e6f8baabd52d8a16bced"],["/post/2647.html","30a40e87da542de7b2057c0fe3405458"],["/post/26477.html","69a6a6a371d35837416a5fea62084a42"],["/post/26671.html","1cf11bf4cdc97921cf05ff785d9ce503"],["/post/26737.html","b68a8af3f7711f7032380216c00f6d75"],["/post/27045.html","c82e534c71b536325fc386c3b9199ef8"],["/post/27621.html","5f9c03fb36032aaecdcfc9719ee356e6"],["/post/27890.html","c0f344ef9a625835e1f31492816211d3"],["/post/27980.html","9c0132c3e90713f283d718897b671750"],["/post/280b588e.html","dfbd86ba9b577876e005491b7ca4c027"],["/post/28579.html","cab8bd392bd55c888844bf01cb31ee45"],["/post/28877bf.html","10f41d65196d656cf063382ba301b6a3"],["/post/28954.html","f572adc3a09066bddc53145d975e77a9"],["/post/29378.html","1dcf1e0a109517310f95145ac6d014bc"],["/post/29949.html","7f79ff77626b848c018e3f7760fe83ab"],["/post/2ae43b86.html","250c9cdaa1f3375049ca5ad8d3e93fdc"],["/post/2ba82a45.html","7bc5e098086666d7b6fe7cc4c0f811d8"],["/post/30072.html","090aa5318e84846c6ba82cdc0aba27af"],["/post/30479.html","1c9ef4de9ddf3e4504eab1818d093d4f"],["/post/31a6b40.html","37167c1bff36982c2fdd65eb548f911b"],["/post/325cdbf2.html","9c0a7f3e34c980bbc5ed3121df217ee6"],["/post/3319ed9a.html","799d82030fe6dfd9dfdb54e6d183f326"],["/post/3320.html","c2f97c41a66530ff5823ca71f131b1bf"],["/post/33cb1151.html","9cdb52534127fdcf65511a59a9409081"],["/post/34811d5f.html","023526907a57cc2258e759ceec9f8b06"],["/post/348d4e04.html","142a4d11a3d7e039dd3c7a836d655e9d"],["/post/3526.html","736f60c88cdc0c1907b1a5068baab137"],["/post/35532.html","e447e70bf4287f038ef986a990818cc5"],["/post/35848.html","3ed3ff41a92013c67c7caf446f0a28ff"],["/post/37318.html","ce95f1d65b4fcf07f21967fe954f6134"],["/post/37663.html","a26582e1690d268517b116e94c0bd4eb"],["/post/38035.html","5d690e03713ad993be0b7d6e2ba308d6"],["/post/38072.html","3cd594db65104196117ab85feb2d9f19"],["/post/38145.html","c9fc2cffeeecb7bae3ce16b27a55f54a"],["/post/39968.html","83a47f5f12723744c61cbd77331e3ad6"],["/post/3de4bc69.html","cd30270724c70f33b32729cdc97a3777"],["/post/40583.html","292e3dce3be8b68b362c8ee2b46df588"],["/post/40997091.html","5932d4122d2388324f1be813ab95a9e6"],["/post/41129.html","d0d912b3471ffd4358e8769ffe034497"],["/post/41763.html","3bd937c4ed8a92e0b892b0918e55e883"],["/post/41829.html","15d9113849a06a76ecf859451b817f97"],["/post/41840.html","f0b13ff20e7775c900b224d5e42fe4e2"],["/post/41e39f2b.html","ee1f753f803431a01232a7a907ccc921"],["/post/43817.html","29c5cd8731676070eb256e8aec7df23a"],["/post/43878.html","8e56fddf5096a0d857270849098e01c3"],["/post/44250.html","5eb62898826211084304880868ad9e7c"],["/post/44336.html","0a1af5435327ab1660d09ec60b309796"],["/post/44454.html","500f5a3d42bf26814b8fb9b9ab77369b"],["/post/44487.html","207f200cebd1ad3f56879d02e6b4b2ef"],["/post/44914.html","401c0f7dde8d2ae9903ca48b764c1eca"],["/post/4551c130.html","b65efa3661ddf0fd7491d17df3e30c8c"],["/post/455a4c92.html","40e7661376c36c07a318a14f3079c74b"],["/post/46466.html","9706082f949cf91d0d64e6353de1b30e"],["/post/46925.html","131ab64ef7c7d59e4297c950d274389f"],["/post/47075.html","df989113002145355aa4395970c036bc"],["/post/48220.html","fe74280258b6da5a431857a53bffa8b3"],["/post/4b1879e3.html","790afad4544a88286ebe4727474f58cf"],["/post/4c720881.html","0c971d37a9dcdedec36378c361c4e757"],["/post/50daec4.html","2df6a219d5592f0cef0d565cc386aaff"],["/post/51491.html","b5fffef3462d04260ad4b588c3e6a98d"],["/post/51e63dcf.html","c0978d8063bcca443c250cb41b6b9440"],["/post/52078.html","35625d527f689aa1c09478e180b96d6b"],["/post/53677394.html","eebe8e769022915172279db304e63e48"],["/post/54300.html","3010d656979dd885e1434f0c92eb80fe"],["/post/54612.html","8ffe8747675bad7b5a0df75798715cfa"],["/post/54613.html","e742d1743180be23088cab177298daf4"],["/post/54708.html","1da7072e02bdfe73166a130e0b0437ca"],["/post/54778.html","b3422f97204dc45dfde315ad0a76f3a3"],["/post/5490.html","b0055765f61cb189f1bf8d89d7e76a7e"],["/post/55046.html","dfd136d2f11c60dab61e233bc7692b9d"],["/post/56929.html","7db0ea8ed58c37512073cfd188d9e0d4"],["/post/57339.html","0c6432d2ee369847143249780ffbe95a"],["/post/57449.html","d8123beaf4d8b39c7aa6cbd69bd8d2a8"],["/post/57453.html","333ec7b87b9f24ff2ede57a2039c308a"],["/post/57671.html","75537aa32c709057f0a747d53427b5d5"],["/post/58313.html","e4d40d2815c804473a1a986756efc463"],["/post/58481.html","5887be2014a7e7c9db6426066824723a"],["/post/58986.html","b34e07644c7e073c6a7c5fa9ce18a7cb"],["/post/59431.html","353a0af2de8825072d4df0f2288018d3"],["/post/5951da65.html","cb4675e57c5a9401b68e2ad5ecdb41f3"],["/post/5be7e977.html","9ef0db501e41c15402033aeaf7c09c22"],["/post/5f9e4eff.html","adce26dc2169e35460ebea4476c15290"],["/post/604b49d0.html","bb322cfb5e17696e16351218e1a2e69b"],["/post/61312.html","c24e87d06340b34272a93b473423693a"],["/post/61738.html","a576a35106a83c1b82d3b110f0961c18"],["/post/61809.html","223febbe8bc64fd06859507835ebdf9f"],["/post/61eaf19a.html","42bb0f585f5b67709bad4d012d61abc6"],["/post/63002.html","3979835173022e61fd19d4f75979adf8"],["/post/63711.html","d9cc29f9be8332598572c980e6e68674"],["/post/6587.html","641d8e033af53bce34c18410fe6ea271"],["/post/6589.html","da0779fd843b861865bc3ef32085e5b2"],["/post/6880.html","e9c404ba7745320b0814617fd4e25484"],["/post/70263071.html","45764e10734f591c8b433d3753032c49"],["/post/71038564.html","a03f5774fc8e48ae0fb7634a656527ac"],["/post/7119.html","071bcd14ace600efae31e9bc80f7b095"],["/post/74e7fdff.html","6139c56f51ca31c8e3fb6a1df28dd22f"],["/post/7502.html","3c2bf67da77981864b3025a1b5bce141"],["/post/7564.html","6a310fe56f70bdb9f6e4cc3d8d044e6f"],["/post/766f9b60.html","fa9353a066c35b2429f6bd7a3350a500"],["/post/7ca31f7.html","de6d379591136502bb8acfe3ab34b1ea"],["/post/7d1c86da.html","79b3adafc184eafc53740cdafe695aed"],["/post/7f3bcd7f.html","e99ea9b179427fb4a2eee9914f0989c4"],["/post/8039.html","a8329610f05edee1681b8ab108f83ee0"],["/post/8050.html","f3d376a1598131907acdedf18b28a82f"],["/post/8072.html","a1234664481baa7a9bc8ccb90f6bd05a"],["/post/8274.html","c0bf5fc01d9d20655ec4ba3b7bbd28fd"],["/post/8372.html","b5fb30ada8268589f3709283cd7d6a80"],["/post/8498.html","5d07d816e9105a2b6f3be80b8e8a2ef0"],["/post/85b4e13b.html","beb9c3638d3083630dc3326fdbd3f6e4"],["/post/912b2566.html","7a769719a161bfcf656f6b66ba90a1e9"],["/post/9187.html","c14d78b1f03b9dbcf7c41613303367e3"],["/post/9197.html","e3641aede717dcb84a54c894e8a6b8cb"],["/post/94ceb2fd.html","348bcda6b4979840b8804c9bf04cf63a"],["/post/95495db.html","0b7527793ad2d0891751460751461adf"],["/post/97246020.html","58d8bd243a65d174205250039e003fae"],["/post/9954ba8e.html","18fb16cb9f41bbd9876936eaa547030c"],["/post/9d855db5.html","582e8b3e7a51a25f3799f3fe6f676458"],["/post/a3a786d6.html","dfc578c8d052987a78ea25a2039c68f1"],["/post/a444b428.html","b3b4a4e108e959cbc8c3198cec8bc92e"],["/post/a50b8908.html","8d103b66d6b29e1698f33de51dd71728"],["/post/aa1eade8.html","ee177d89c0f3cd7cb98ab44638e5a623"],["/post/ade8c6d6.html","939a29e3b03c4ed31c8991a012ff23af"],["/post/ae8362df.html","08cc5ffae7217dee5cb76d3ba2302fb9"],["/post/b4c1d206.html","b112f06236e4347b54739901b793ca6c"],["/post/d213fc7f.html","cc27e4452fe02cedb46591d1cdea33ff"],["/post/d431fab4.html","f676c9d032d348af6ab0b284f28899e8"],["/post/d5381517.html","44983abc02324aa2bdf883ee0e3e2c71"],["/post/d94f88de.html","3e29a069dd4f221fc41c8a74b6875deb"],["/post/e058ffd8.html","87ba9abc5f3d04bb46d30738e1a0db8f"],["/post/e0f8cb74.html","cb1afe7134e3e17eb18b67f48bec92dc"],["/post/eefe591f.html","1de22f3b424968f96f8c859fe3d62a2b"],["/post/ef296a07.html","0c73279751bde4a220056ec471c795d7"],["/post/ef3a3fcc.html","515e84ac90e7862b7dc2bf2f7a2cde5a"],["/post/f201f9fd.html","23ed6680dd2f714fbc463464be81d248"],["/post/f79e4123.html","3431054374d811551723797a414d015f"],["/post/f8648a1d.html","b4405a15fbfb9cbd9c1dd4e611c8712b"],["/post/f89cb603.html","9db74e998f8c4d230b3ac1b941a255bb"],["/post/fa288682.html","0f13dc19592f88513971dde1e4668522"],["/post/fb98053e.html","b95b05c73dc9ef78b6ff85a958bd878a"],["/sw-register.js","a2570f0d3b5d3be5ccf0d101ec89fadd"],["/tags/AT-T/index.html","528a0dda6a2fcdd9a9b236a19dfb21e6"],["/tags/index.html","f22e781997682fad7adfb1e4ce44119e"],["/tags/动态规划/index.html","899dc2148e7d36a90e2b139ebd4460da"],["/tags/字符串/index.html","f25596c62faacb59797d50f25c08939d"],["/tags/字符常量/index.html","e305ac8976495dc06c5dee53567bd47e"],["/tags/快排/index.html","7c2e25f1a430234fd46aed9265dda52a"],["/tags/排序/index.html","9524159c99cec4d073924dc382302ee4"]];
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
