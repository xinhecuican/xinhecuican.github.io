/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","eec17649be9754e5afb1277a44530ad2"],["/archives/2019/index.html","8d6144028ddecf7a552888c5ee7d6bdd"],["/archives/2020/01/index.html","1212f0a990065466e052f8b1aef62b72"],["/archives/2020/01/page/2/index.html","18f3ee72dccfdab35ffc8a54416e9676"],["/archives/2020/01/page/3/index.html","75d96bfb5758741f0795e12c973a2437"],["/archives/2020/01/page/4/index.html","679aa292322af0201fd58d6795147981"],["/archives/2020/01/page/5/index.html","4941659be4a2ad8879daead2329191b6"],["/archives/2020/01/page/6/index.html","76deb9186819ee5f09d6ab4c20a7b915"],["/archives/2020/02/index.html","727ca85aeeabcb6911fcc8a00501719a"],["/archives/2020/02/page/2/index.html","fd0657e2686a2d701bfe95da5c25ead5"],["/archives/2020/02/page/3/index.html","396eecbe6729de00da3df601e6517731"],["/archives/2020/03/index.html","e7f8d536e60be2cd1f944adf65ffbe7f"],["/archives/2020/03/page/2/index.html","0ce08d95b5252148fa946957aa210d9c"],["/archives/2020/04/index.html","ab51405c246bb6da612f15087f36ebca"],["/archives/2020/04/page/2/index.html","7c68b8fe643c8692648e0b987d9b6d12"],["/archives/2020/05/index.html","8f3dd8f1a30a7176f453846f42a77902"],["/archives/2020/05/page/2/index.html","ccb17588bf13b14746e3203d0694d41d"],["/archives/2020/06/index.html","eaba8f9051a1b18178370fd62f428a4c"],["/archives/2020/07/index.html","b616fcec7809cc2e8249b7b0c479e96d"],["/archives/2020/07/page/2/index.html","e163164064e51a77871b2df1f2b5ecd5"],["/archives/2020/08/index.html","489be3767583e73b58a5176c42357d0e"],["/archives/2020/10/index.html","9edebb8c74bdd7e6d4ab1c731cd63da9"],["/archives/2020/11/index.html","0ee478ba1356a390a71f0a7b3bdf2b7c"],["/archives/2020/12/index.html","799d172f1094c7c59d03daa40f2265e5"],["/archives/2020/index.html","f96f13504b216029d46ea263428b52a4"],["/archives/2020/page/10/index.html","cfe6323a12b8ccee1c006e5adbe1c753"],["/archives/2020/page/11/index.html","3fba74fc1ff5d59d8885768badb71d9d"],["/archives/2020/page/12/index.html","58fda38824488776193ee6f352b7cd64"],["/archives/2020/page/13/index.html","66ea68ef4ad74a4e31f16c0c0923accf"],["/archives/2020/page/14/index.html","7674ba5fb33a9abda02dce54fba499c4"],["/archives/2020/page/15/index.html","75a32e073e717620af5cb07e0f486f0b"],["/archives/2020/page/16/index.html","ba811294a31418752ff3f6c96731d0f7"],["/archives/2020/page/2/index.html","4f9d7fa20c4b89bf3c6845af1ef9ba4a"],["/archives/2020/page/3/index.html","6f517fd5d8bc91dbfe48a55398145a13"],["/archives/2020/page/4/index.html","12be5b80617ae8438168c3d6b7e8640f"],["/archives/2020/page/5/index.html","91b56cc4a069de354f78d9cb4b08bbb3"],["/archives/2020/page/6/index.html","0023d04637e6b608d14dd50ee4f02d8c"],["/archives/2020/page/7/index.html","b1bc54178923ce2215403fd233f1f0c3"],["/archives/2020/page/8/index.html","272b24bfdae48a9867966e0b74cdb581"],["/archives/2020/page/9/index.html","5b5e0ccdd9a1442c2eb4e51094326b82"],["/archives/index.html","fb7a4b54c24903432aea11623b492884"],["/archives/page/10/index.html","010fefd0af67f61827f7a37d38dbf62f"],["/archives/page/11/index.html","9f6adc336ee90c271d4476d40a7d71d1"],["/archives/page/12/index.html","ab7b5ded2988d1e107f981f859f6dc1f"],["/archives/page/13/index.html","0aa133c625b534d05992a541b7158e06"],["/archives/page/14/index.html","2903720f338163abdf8087ee8895d189"],["/archives/page/15/index.html","f657bb6a79ac8a662d9854131ef29a34"],["/archives/page/16/index.html","116876250325f43ffbbe7c8c75cd6b7f"],["/archives/page/2/index.html","0394db20bd97f8c2b509cba655ed6cd5"],["/archives/page/3/index.html","6f433ba32c2829756d23c72e70692b41"],["/archives/page/4/index.html","8c9f413d3b7734683993477427160b4b"],["/archives/page/5/index.html","738081dd0f4d57a015729cefa72f8dce"],["/archives/page/6/index.html","016150add1313a86b9aaebec6c5b3feb"],["/archives/page/7/index.html","b40e87e3c371dec40da15fc16ec502bc"],["/archives/page/8/index.html","ded0992737ae3f4ae110294f05dc9d80"],["/archives/page/9/index.html","71e442dc876c696700761a0587ceaf9c"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","cd92d93fdd3369a02f13d9b7b389aee7"],["/categories/Linux/page/2/index.html","a8d5b19bc80e1d769e6fea60127e1905"],["/categories/Python/index.html","2c1981acf25c8f9966b0995e14739585"],["/categories/c/index.html","f457dc5ec11633431a30ff5534912d14"],["/categories/index.html","885202a176e6f3fc00f6d8a13942a652"],["/categories/java/index.html","de6569314167e72d58352e53108a1e6d"],["/categories/java/page/2/index.html","0025520c1ad1aa20c52e61b48d73bcaf"],["/categories/java/page/3/index.html","1157745d29b57f2754c278d2a0302150"],["/categories/next/index.html","0712d92f445214f1d62a013ed8eac67b"],["/categories/stl/index.html","3c91ac9aed8245a081c719bdfb36154b"],["/categories/windows/index.html","a0cd026a0facbbebe284218aa32414e1"],["/categories/基础/c/index.html","3d3fe1921bf8e61fb6f5edb2db045631"],["/categories/基础/index.html","49e99cda658312526f29cdaf3fded09d"],["/categories/基础/page/2/index.html","053c15b7c2ff057774465c3b31157823"],["/categories/数学/index.html","fd2bbf399d62305aba06b7969125de36"],["/categories/数学/概率论/index.html","856ea8c07ef6f6e67f86f7d6d035c29a"],["/categories/数据结构/index.html","8a423ca652cafa4ad9763b3ebd43248c"],["/categories/数据结构/算法/index.html","0e07e23a603ece51391a99424a45b7a5"],["/categories/机器学习/index.html","c30f2a7043ad052f697a1cbd2f3ebb38"],["/categories/杂项/index.html","1cd75b5ce793bd2243cf057e2337d1f7"],["/categories/汇编/AT-T/index.html","ea4763f1cc4223356c850f8cb4fc3ad5"],["/categories/汇编/index.html","4f98ff0297a57b9b13c341769710458c"],["/categories/汇编/page/2/index.html","5351d10919c1496b5be40596312a5171"],["/categories/汇编/page/3/index.html","9c34740c661b71da93ead0218c4839ca"],["/categories/算法/index.html","142839db580bf66845cbbc4693d025db"],["/categories/算法/page/2/index.html","ec4214e733b6e81c8808178f200e6eb2"],["/categories/算法/page/3/index.html","a0e12a4e1a24653bb528cc45d2e6069d"],["/categories/计算机系统基础/index.html","6ad4cfe721ad5ac226d2d93316ef8c1b"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","873b90ba88d362c082202c7e625ce2f8"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","ff32425ac8f7c9d00aee9652ac0246d6"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","2788635e5b55a985690b5170ac12012e"],["/page/11/index.html","4d16434d55c0792ae4c5fab5a54c7363"],["/page/12/index.html","14d6ed3b6b3f87567e1388d4350c61e5"],["/page/13/index.html","9d44b733358422944bbdfb6779ae0695"],["/page/14/index.html","843fd16e055ab167e8118ff16a2363b5"],["/page/15/index.html","c6dbeea74d46710102685e481e6b7d83"],["/page/16/index.html","8cb139f4e4fe73082aeb431c87136a86"],["/page/2/index.html","33ff1966b2480b8ae53e59915737a60f"],["/page/3/index.html","fa96cb9626667d9c692161037e649353"],["/page/4/index.html","61ce180c8a9ddb5491c3052d23806f47"],["/page/5/index.html","544a1e2f5aed2b956213f87ac5b570b4"],["/page/6/index.html","5b01b0d4ce157f8bad7dcf99224cef18"],["/page/7/index.html","e0cbd81b63972c997a8a89bb530ea322"],["/page/8/index.html","1d8782bd88737681a2b0b3fdf4a4b909"],["/page/9/index.html","ac2641888a926dd33472c37f89d99a75"],["/post/10919.html","0d337b518dfd9e8ec6032daf1fe4b216"],["/post/11051.html","b4d530b6ac5d1fca298c343ce12d1692"],["/post/11306.html","b4771e7f73c35e1c1d4fde05455e6048"],["/post/11491.html","3584e4a5687bd9eccda6cd0a2a93d859"],["/post/11799.html","15d6194e36fb23255b435ba5c4eda744"],["/post/12334.html","313e49af517806a769f9d7db7017e8da"],["/post/1326.html","0b251feae067ad7b3f4bbb0bd551b03f"],["/post/14379.html","361d7f05bbdc57a7ea07e31fe80f8660"],["/post/14511.html","4f03a73a71b24800ccccb3a8746da5ea"],["/post/15201.html","a9538f0e4c2895533dceb37abb8dec67"],["/post/15425.html","0579326e0031348ff484f7c3d665d279"],["/post/16107.html","2ed6b704af20574d2db7e55ec5ca150f"],["/post/17862176.html","554fcb05870e832a9b422f521b972fcb"],["/post/18431.html","3a8bdcf95dfc5e74d9b939b74799aae5"],["/post/18912.html","a1d032e789dbcb6e01d243dcb220a212"],["/post/1b9c8662.html","509c0a645a740b716f162f5f9727a92b"],["/post/20198.html","82babb6c6504be4150d245c6957a650e"],["/post/20ff5ccb.html","1ba4477fa5c55f99d55ab17b5a335cd8"],["/post/21624.html","b7c134dc8230146dc1b1d6d61d684346"],["/post/2170659a.html","00c4e1e8632f556da3b1d6578dabfe59"],["/post/22102.html","3d43062029a54ea15ba3fb0260d6e8ca"],["/post/22493.html","4882e5dc1439c371b57c7c297cd6db04"],["/post/235252ea.html","2d5b9d34bb20f4b6530f6b1913aa2348"],["/post/25699.html","23554aae8fb190b6499cf6b650c4de0b"],["/post/2647.html","a45fdb32ea275d2e819de5aa0609c31a"],["/post/26477.html","5c810efdb77273a53d9f9518a55e9f27"],["/post/26671.html","831c1ee0ce1871ebc3e31731ce0a6d76"],["/post/26737.html","bf1dec525e1ee233148bcf3684ca0d98"],["/post/27045.html","76bc63cb0f57bb930b3a335734837cb3"],["/post/27621.html","6bfe55395ca61df8ede766762b84fb56"],["/post/27890.html","550d8e7d1d352c641f0974ac24dba8eb"],["/post/27980.html","8284e47c00b1cd551a7a9ab3a3ba4b27"],["/post/280b588e.html","46fb30322e25d6ef2156998702fab5fe"],["/post/28579.html","4f7e9d8f918e43b07c65c2d7d59622ed"],["/post/28877bf.html","2aebf2a6265d5f46654972301b5b6c2c"],["/post/28954.html","c8be3635decf3bd5b745563cde1f2969"],["/post/29378.html","16ba8f166f424a8f6cd7eef646d8fcda"],["/post/29949.html","51d8a20942061b96f40f529ae5dced00"],["/post/2ae43b86.html","100c05fec97a55a00a011535d4a313b8"],["/post/2ba82a45.html","4604951b4ad7d6243ee6c96cfcb72178"],["/post/30072.html","caa13b173e08beed527fb2fb481f9ab7"],["/post/30479.html","0fc3def5af52b15cc8953fd7c84e5a63"],["/post/31a6b40.html","c8b23e6ee7c3421fc743942e1ce519a1"],["/post/325cdbf2.html","68d1535eb3dbb0ed52eb01d1b6f7b1a0"],["/post/3319ed9a.html","3661cb89ee72db17f4130bcd7cb1a191"],["/post/3320.html","099df53c9059fb2eb42202be8a53c0f6"],["/post/33cb1151.html","0d2e84fc014c5b733e9f51402d152015"],["/post/34811d5f.html","2ff46caf4861149d3169b46266a4d911"],["/post/348d4e04.html","3fe09daa9cd73260fafbf6b4d56775a5"],["/post/3526.html","5a1f77ccff8e0d1469c109c19327fd72"],["/post/35532.html","41ac64c99ec6913f76ae4581c63301a2"],["/post/35848.html","0ef8f76edff251d3e3f33c633f9638e4"],["/post/37318.html","fd0c510479b40093bdf22588e4a04deb"],["/post/37663.html","42b708456345bc955647daac2232921b"],["/post/38035.html","7a1bccf4b93aa7a35dcd15b596c48006"],["/post/38072.html","4c46cda367bb275b52c413bf27511aa2"],["/post/38145.html","3c9ec811b766106a58f789300e804acc"],["/post/39968.html","c18f4740e6a3f8898eb28b81ffbdfdd2"],["/post/3de4bc69.html","b7078ea71854cbb793e1607c2600712f"],["/post/40583.html","5ba8925ef0af342ad9a4681ed82aa139"],["/post/40997091.html","60310fb5b553e261d983bb77529eb724"],["/post/41129.html","5aa25f563f3b6eafbe3fb2562e375d13"],["/post/41763.html","d3a7f7af48bfa680e39244a7f4c1cff2"],["/post/41829.html","ebe874f211a026366860d6959f612a6e"],["/post/41840.html","efbc418c90f6f833d6b0ccd66f58cdb7"],["/post/43817.html","488c35066c18cb26584d8e2978eb37d9"],["/post/43878.html","9524a3b15f4cff3e860f499695868cd2"],["/post/44250.html","3d90b2677ed2396d92343563c6e659f4"],["/post/44336.html","f0e25b9cff98694d1205ae140e62b010"],["/post/44454.html","a5eabedcf07a5407ccd54bad49265e3c"],["/post/44487.html","36e15c7d8b4dfd8cc2ff637117063b71"],["/post/44914.html","e91f15ad1d9738df6313e6738ca45dd4"],["/post/4551c130.html","fda4d4ccab97ff5eed707eeb921ebfbe"],["/post/455a4c92.html","baa9573fad166f84cec1bff61e731a83"],["/post/46466.html","f833a37ed8f39b79944c642523f9301d"],["/post/46925.html","38b4adc788ac5e413894d8cf854128c0"],["/post/47075.html","9b19036638342696466d33a731545c7d"],["/post/48220.html","ca55615cefd1c9618dda38aa6281dd90"],["/post/4b1879e3.html","d4ae921b8da499ebbaea9d037d3d52f4"],["/post/4c720881.html","74e49f5ac6ff5529f1c6ea2f2b97afb7"],["/post/50daec4.html","9568f0b29ba622f05bef86583b3fa1ee"],["/post/51491.html","954941fdd6fae27a170d6946eb090b5b"],["/post/51e63dcf.html","b8ecc2a78ab210adab581a1bcba5fe7f"],["/post/52078.html","2d7c10b119c36aa4d82e177e31913fd2"],["/post/53677394.html","d56fb07e7f4f46f4d6ed2e9b34cf5b82"],["/post/54300.html","809bd3661aefa07621b4f41833afb841"],["/post/54612.html","e4ccaa7b4f3eb08e8cbab9cdce78cb9f"],["/post/54613.html","69d0982cf45ff469e45671ab2d8d2636"],["/post/54708.html","1a18b05d8f8d9bd0a394d1e727e699a0"],["/post/54778.html","109b7edb661399c469cbad6f8dd33a2f"],["/post/5490.html","f1ad20dcfc3b3d14a3365b4d96b77eeb"],["/post/55046.html","d261873201ba264f43cd2cb5f50e5357"],["/post/56929.html","cc647f62d0d498c8271abbaebd3a78fd"],["/post/57339.html","644df1b6e8b53b32147f1e422301a69e"],["/post/57449.html","5c10fffc7ecaf1e2d2587a52478ad535"],["/post/57453.html","6741a2a85314de6b712d6959c2f9e192"],["/post/57671.html","f411a66760d4260f6672c755584d991f"],["/post/58313.html","c1e21a85c6844f9f70d6ec8eb6ea6db8"],["/post/58481.html","d2e245faf03751f3fcd1c7423f35550f"],["/post/58986.html","f89e2bb11399059b0ae95f4baa860cc6"],["/post/59431.html","72f06c4df47c585bbe566b5de0bbdefa"],["/post/5951da65.html","0e43b89442313c83b376f88ce1976cf1"],["/post/5be7e977.html","a393a3ccac2d1df886b63f62ab5d04ce"],["/post/5f9e4eff.html","8bc461acec45da9b011c4004fbe77195"],["/post/604b49d0.html","bc37c6e79c7df7bf15c953df4e012a77"],["/post/61312.html","df84493e25355d7b8184f06c439bdf8f"],["/post/61738.html","2004990c278aec9b2c5c50e297abab68"],["/post/61809.html","bf04f7f54d3083424a0bd99ec101bab3"],["/post/61eaf19a.html","280d7d5d5579c077b0614772e2175437"],["/post/63002.html","9f4c6fc90cc33bf640fc3bda9d2da6ff"],["/post/63711.html","b9bb35faf80f342d0f982ba415b12d5f"],["/post/6587.html","aa7c47d1e22ead306035d134bab06225"],["/post/6589.html","442d65b418c03c9096d59f613ae17280"],["/post/6880.html","8348261ecaf648f91421464951cdb366"],["/post/70263071.html","296b0a3e1f7e1a65d42be0283a3a3e3d"],["/post/71038564.html","b0b206864ee3a6b05fff06ef97f9b12d"],["/post/7119.html","19229dff261add25d9dc615bb8192ea0"],["/post/74e7fdff.html","023c22e74ad6a7526bb372919d404501"],["/post/7502.html","362a4225f7d456fb7b48bf0f6e6abc2a"],["/post/7564.html","25aedcc17f19520875e660466a8b2e85"],["/post/766f9b60.html","fa1401030cae52121da77223d7820511"],["/post/7ca31f7.html","e3039b2cf7b71c1319f1d13a0628f819"],["/post/7d1c86da.html","6df95a52f65d5297a7975f769b48a3ae"],["/post/7f3bcd7f.html","af59b8d7014ce5e6586c836cd9fe8c6e"],["/post/8039.html","9d6571101dfebbee22667bcb3f1aca9d"],["/post/8050.html","155897eef0d86c5dfd426a46177dfef7"],["/post/8072.html","b80028c10c094e59ff5c8c966dda49b8"],["/post/8274.html","8ca1fe5b420942d859c5a4abe55233ce"],["/post/8372.html","a9e496433dd0a7a804780c4a11d665aa"],["/post/8498.html","caa44d97ce5ffe0946ad86ffec1303d9"],["/post/85b4e13b.html","74f46a603dcea2a725a7acaf6e2c5dc2"],["/post/912b2566.html","8388faf68084bfe1d0360225f2198e00"],["/post/9187.html","033330fa55c0371a510f368673b39090"],["/post/9197.html","597342dcfd32248fc3ef1fbe627363f2"],["/post/94ceb2fd.html","30af0cc92c1e237038d971f3eed8d35e"],["/post/95495db.html","a5d705bd1a2a6e3bdf97bc2fe45815be"],["/post/97246020.html","8a189407b793cbd85a1e6b14cd2554da"],["/post/a3a786d6.html","50bd5b0c8bc81b90cc83d5ae4f1ced0c"],["/post/a444b428.html","32c4ea4ff7984cd06edc2b9d6368a419"],["/post/a50b8908.html","fdfdc0fb9a31f8c37535604a52241bf0"],["/post/aa1eade8.html","b096c2674d63b4effc4617644c4900c7"],["/post/ade8c6d6.html","c92772f878a115d8f967c0d41b774597"],["/post/ae8362df.html","ae1f7f23d631383363fdb66514145802"],["/post/b4c1d206.html","3e5a235c335b34987c5dac8778bd1d8f"],["/post/d431fab4.html","d553579399f9b1300d9b1ddfcb9e4ab4"],["/post/d5381517.html","0396d5109236c8984950b805da3e5a16"],["/post/e058ffd8.html","9897b6cc329fabb1a09a958d8eb1c1bd"],["/post/e0f8cb74.html","4552df695992c4efef261ec2598b6245"],["/post/eefe591f.html","498f6c15d5f8b58f2bb87815809ab2d0"],["/post/ef296a07.html","8bc1291cf3277c30d3e92344a895c71e"],["/post/f201f9fd.html","3f296ba87c4f7767c0398fc9b1bf7a7a"],["/post/f79e4123.html","1572ef8aedad5f894b540dc00e5fb9d3"],["/post/f8648a1d.html","d4d6f78cbfd97616cc497d56119b27c9"],["/post/f89cb603.html","157afc2e550161b73108f87c1cf89a11"],["/post/fa288682.html","5877629751bb06f1d7e877c97fbe40d0"],["/post/fb98053e.html","94f5b8c3008a2606cb01067fa4a210ae"],["/sw-register.js","5f489941b19ffc04a5abd4a636f40097"],["/tags/AT-T/index.html","676c2cbd8b2637e75be274cda0ebfd37"],["/tags/index.html","a9e43219abdfc307a9c8b5b0dc0530d1"],["/tags/动态规划/index.html","90d44f937bb21f5388f97e5fb7191da8"],["/tags/字符串/index.html","6554405182eb28706f0f66a26c69e867"],["/tags/字符常量/index.html","389cb7b0df71970be5e672a3fd75f6c5"],["/tags/快排/index.html","511f53603ffe2f4d9133e16bff90a1ff"],["/tags/排序/index.html","4ed922ad7b474db15c8718bba765d196"]];
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
