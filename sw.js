/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","b086c70d37331579ec6ba111e8c83912"],["/archives/2019/index.html","ec5eddb62d25f75755a8c6b8d22df46a"],["/archives/2020/01/index.html","dc85cd837454dd0226140cc1812bb9c8"],["/archives/2020/01/page/2/index.html","4818013b3805d9af9f19b08ee9f63ee2"],["/archives/2020/01/page/3/index.html","0e3a6876fdcf7ef752f2a6715248e1fe"],["/archives/2020/01/page/4/index.html","ef9760f850565f728e8ca6073948f30f"],["/archives/2020/01/page/5/index.html","dfa012cbf1929c3a41cc53fe751b874f"],["/archives/2020/01/page/6/index.html","45082a82208d249343d2da6f8229a219"],["/archives/2020/02/index.html","587ab38ebd3765411ce33d862e45219f"],["/archives/2020/02/page/2/index.html","18d3e60ef3151da6425f4313f47bff4a"],["/archives/2020/02/page/3/index.html","dfa3e10732316b898d8dbaa82cc8f374"],["/archives/2020/03/index.html","945e973f2b9e0635766131391972ff9a"],["/archives/2020/03/page/2/index.html","4eb83bdc4071321066d2f81964c4f827"],["/archives/2020/04/index.html","9f2b37717a0c78424e8085dd67dc5854"],["/archives/2020/04/page/2/index.html","571718458ac068aad419aa4951bd66ec"],["/archives/2020/05/index.html","753705ae31357498894370eb1ea6941d"],["/archives/2020/05/page/2/index.html","826ca3d2ef3448a3b1d7b4918f540468"],["/archives/2020/06/index.html","aff5c896e6ba3f14a4e95f6fee1d9e94"],["/archives/2020/07/index.html","919edb71c8d342524c149bf1afc8798f"],["/archives/2020/07/page/2/index.html","baf22f0093904c0d55b17528b5a8e2c0"],["/archives/2020/08/index.html","4feb5677c680929c667654c80e5231b7"],["/archives/2020/10/index.html","7dad8d0eaf9ef6b34cb39915f1213bd4"],["/archives/2020/11/index.html","77624e54381132c2b1125c78032bb2e8"],["/archives/2020/index.html","5b55df964537fa4930c891a2b4601f59"],["/archives/2020/page/10/index.html","7aaecf1678061c2b0dda4ebc060ca8fd"],["/archives/2020/page/11/index.html","b69399e7df98e5f414652a28ce67baf8"],["/archives/2020/page/12/index.html","6cb0bedbc90d26cb6885f29b2a5ba552"],["/archives/2020/page/13/index.html","c0b75da6913070361ad78eaa93fa32b5"],["/archives/2020/page/14/index.html","ba9f2da91e6c9726909feae4500ec014"],["/archives/2020/page/15/index.html","f3b9478ad051e45c1ecd936c848c45e5"],["/archives/2020/page/2/index.html","bfe48ff8a74df54c6e9f5b90c1f12779"],["/archives/2020/page/3/index.html","34b695770a0b5508afa95390d4181b73"],["/archives/2020/page/4/index.html","ba623da5ba5de5db944cd41feb8ec2ad"],["/archives/2020/page/5/index.html","fd150543edbee0b1c904cc30f66ee777"],["/archives/2020/page/6/index.html","d26c57113a311ebcdf3d68527444797d"],["/archives/2020/page/7/index.html","140bf3eae20b5491b9a1726bf75d6bdf"],["/archives/2020/page/8/index.html","0c6a5b6f219e65cb98ea755297d1f2a8"],["/archives/2020/page/9/index.html","c17ded617652a049a836721d146c5452"],["/archives/index.html","25525bc49dfdc677fe67be64002fb805"],["/archives/page/10/index.html","38bd35d9f8a7c16dee6dab9dfaf4684b"],["/archives/page/11/index.html","8e967068aa8e89fcb9111eae138bf637"],["/archives/page/12/index.html","4c8c825ec052c098cb8b140fdfa9f9ad"],["/archives/page/13/index.html","bb5e2d9edfce4cd73415457d85b756b8"],["/archives/page/14/index.html","c0aa50ce6b405d7afb32b3397620c2c1"],["/archives/page/15/index.html","262de4e0c6b530746e7b08b6a1cf3bed"],["/archives/page/16/index.html","c46abc7f757d2478aff5f60eb554b963"],["/archives/page/2/index.html","f124e594778e9d5317b44ce33a533ecc"],["/archives/page/3/index.html","425bd1de67eee005e6708152fc76dd27"],["/archives/page/4/index.html","5e8fa5041ff576c1a02341fb13a4d004"],["/archives/page/5/index.html","9904ef5834abae4e53702d92e7bb2c61"],["/archives/page/6/index.html","6d87d4b176324302e0e9406b9e7a7c10"],["/archives/page/7/index.html","92327872f153977c0edb3b3e5f453a47"],["/archives/page/8/index.html","0f2b0034e5326196b07c1de2524f3bf8"],["/archives/page/9/index.html","c859e0ef57e40c84e265640810bcf401"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","2960c3663ed72b3bf2e0b6559eb5fc73"],["/categories/Linux/page/2/index.html","295a164c7902d7e60a130de6b67e8473"],["/categories/Python/index.html","4f1dd7fc60d17499e0f137d5c61c7801"],["/categories/c/index.html","a72c8b91d4453738950a75b4e5dab724"],["/categories/index.html","467f1a4aab1cd9219846bcfc9ea734f0"],["/categories/java/index.html","184a76ae8abba1e1ac3c98b2ed589bad"],["/categories/java/page/2/index.html","325c24c4e5d9a243edf250a133d15826"],["/categories/java/page/3/index.html","b6f06a0241d608fd7ac1a9c002ef094f"],["/categories/next/index.html","1405ffc59111483458c3195d3232e778"],["/categories/stl/index.html","a7bd569016b3a2f8dbb5eb3e930524c0"],["/categories/windows/index.html","1e7c70758a45b76cc872cbc518dcced2"],["/categories/基础/c/index.html","bbc598a146cc5ed891d6622461e7cd19"],["/categories/基础/index.html","3aa92a4dc2e981e34adbad926cb1a4fd"],["/categories/基础/page/2/index.html","28fbe3595a2ffc39fb7747bf99883363"],["/categories/数学/index.html","7b325a09141bc6b55330a9f29eca8a51"],["/categories/数学/概率论/index.html","7c76906327688dcb05476fbaebf38e5f"],["/categories/数据结构/index.html","12641767843b10f7d8d0df67602a819e"],["/categories/数据结构/算法/index.html","6a4932b0f1f4c74fc724c81b40a78b9d"],["/categories/机器学习/index.html","c58f7fa917d60ebdda530982ac9fd621"],["/categories/汇编/AT-T/index.html","3f7a730aab304a009da822d940f2d2a8"],["/categories/汇编/index.html","d32a79d92a7cea1c032385ce4cdc6a8a"],["/categories/汇编/page/2/index.html","532650c9b672b93ff5ad58a6cf8c2e0e"],["/categories/汇编/page/3/index.html","eda770b1a2ed22baa934817587159ae5"],["/categories/算法/index.html","f27bc112ac71ed110191dc72bd9b930a"],["/categories/算法/page/2/index.html","c6fbd9ff091e226a9374e0c2b4319109"],["/categories/计算机系统基础/index.html","4ead3ed7b4c466a99f33bb233580f38d"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4f7e58558b729248c45d57309ed37f35"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","566fcb9acc26ccbdd227b3f5a4c6bc0a"],["/page/11/index.html","90e37c2068172eb603959a9b1581e25c"],["/page/12/index.html","b326704aa3d061117d1e4aa62cc5b242"],["/page/13/index.html","416da90037d3e4d2cab19db42ded17be"],["/page/14/index.html","cc1a88155c181964db5388080609c859"],["/page/15/index.html","b67cfa66621a70bde0c5c427c7a7b677"],["/page/16/index.html","093be7ba45f63a426031d3812dc2590c"],["/page/2/index.html","427d89fa321e12bbc65749dc918de33c"],["/page/3/index.html","2024db7ea1c1d419b637cf17db66191f"],["/page/4/index.html","178ac056fb1f2844ee8a897864d13aee"],["/page/5/index.html","764c70ceb6d443812c2e1eb76194e5d6"],["/page/6/index.html","3fc16b518d9ba6ca01aa9c7293c2289a"],["/page/7/index.html","05324958dfaeddf579449bbec3e42dd6"],["/page/8/index.html","a7c85e5f30657758de1ab218db09e9bf"],["/page/9/index.html","364e434ec85c19bcd34bfbc98b75e56f"],["/post/10919.html","58c6db52b9afa0170d51d2ab254715fb"],["/post/11051.html","85b97e8681a4ad0d21d79af473719e0c"],["/post/11306.html","c7f80bd5beecd88ca8d201b70511de09"],["/post/11491.html","b4fa6f1b268a835f0b48bca6ea267465"],["/post/11799.html","57e144ee167c9f3847e6ad66e831f526"],["/post/12334.html","9318aa5f722e04e64c63d7f6a756d73c"],["/post/1326.html","77f593afa09d33d446b119469a12caf6"],["/post/14379.html","76672aca7f1b67b7dd8b4a6da4e2873f"],["/post/14511.html","46748a20e77614ab9814b19e8fae6fed"],["/post/15201.html","4440a6b9819e82493a71fe605a244263"],["/post/15425.html","b29ef2a887649b5ea4faef1849f80c03"],["/post/16107.html","d1ddb3de23eb519e1deac98c65e8fa0e"],["/post/17862176.html","4a4122bb1611f97ec47ccbd9a68b371b"],["/post/18431.html","fe950f6f7ae683bea93697c20d8b397e"],["/post/18912.html","293f5e793cf45d3ec6a20796023c1327"],["/post/20198.html","c75ad36622c3582ae7075f17aa0ea396"],["/post/20ff5ccb.html","eb3e71c625c69e260b6d66de1d938b8e"],["/post/21624.html","ce8c74ffbd83c4afa3b68f9e8e8a86ef"],["/post/2170659a.html","b9b0d5796fa07a9bcb8124266fe074e0"],["/post/22102.html","26534d58c50483170160877895570271"],["/post/22493.html","a153df990d8ca79a0802e3f66b4dd81a"],["/post/235252ea.html","f3969524681cea729566dfdf52536aba"],["/post/25699.html","7ed9a514b97c8eaf32db59946d1b1a18"],["/post/2647.html","7a9ef941db68d5420a9738be5903ee43"],["/post/26477.html","d6ebce47b302afcf3816625d83af1d8e"],["/post/26671.html","22d3c354c0f3099abba6013f59b9aad6"],["/post/26737.html","23ceb197702402ad2210d38c2584dc18"],["/post/27045.html","c5342fa815ed2f6ac9ead48fc46bed1d"],["/post/27621.html","21286cf1ac6e9fc7e091f47d7b8aa429"],["/post/27890.html","85045091255adff02194ea86ceef2e38"],["/post/27980.html","142a00c2afbf99fcde7978552e162d5d"],["/post/280b588e.html","6293ca171d65749930768b129863ecae"],["/post/28579.html","64814a400b58ef85220f261ee680d749"],["/post/28877bf.html","35e0e2e0b3235b797f9dde1f828d4ce0"],["/post/28954.html","2f8c3b1f906efc37986318005348c224"],["/post/29378.html","b7e90935114f9e905d242f21ec935320"],["/post/29949.html","cc5147b35299c58c9c1ca068ab4f4c6f"],["/post/2ae43b86.html","e5e6b987e6ebe9d5b6040628a7edfc6d"],["/post/2ba82a45.html","bd758ba306be8d4ce48a17febe47374a"],["/post/30072.html","64138e3a0bbbfd13eb62d528b677bfd1"],["/post/30479.html","380288cc679e5c684b6badfdb1161ace"],["/post/31a6b40.html","634da8da9a2a14063a17e1477179ddb3"],["/post/325cdbf2.html","8f834dc9b074b6463f876d495cc00641"],["/post/3319ed9a.html","2b0056eeed56fdda1b4587b0458535f2"],["/post/3320.html","8796ff94abd2ea61869dcad8c4946d79"],["/post/33cb1151.html","71078b42a43db0f05a93768ad154500f"],["/post/348d4e04.html","84ca591cca363064b599494a11d88f33"],["/post/3526.html","f7ff236864d270a53d01140ed563f495"],["/post/35532.html","c9cbf29237e45725c3fd9049bcc2253e"],["/post/35848.html","71bcc92ebf8bb6938ef1ff3ba7f8977e"],["/post/37318.html","57eb01f5021d5a2e7b15d9d485fe2e9f"],["/post/37663.html","c9bd955fe9e7d35fd1b68b955671a011"],["/post/38035.html","017eb991403acd8c62c90e84920414f5"],["/post/38072.html","4562320d955b17c844f783071a433f95"],["/post/38145.html","1ee5700da718b0ce1aab6d3b3e741241"],["/post/39968.html","c61b86caeab9e21743278e94da12ba06"],["/post/3de4bc69.html","a74233d2b522ce93b752cd39b5e81130"],["/post/40583.html","1d276c875e45b902634e4deffb57d007"],["/post/40997091.html","e332178fc851c00a4f45050051a8629e"],["/post/41129.html","72920ffba8ea21bbe2e75d7e8a4dff80"],["/post/41763.html","39d151b70a9473e83fa7043d60cdb24a"],["/post/41829.html","b37d638ecf6b6a3a6541f49f867b2ad2"],["/post/41840.html","077174a8de78b12f46b7c253361863a9"],["/post/43817.html","384e1453ca2150b8201d4b07b133a8d1"],["/post/43878.html","d39615cf0b27e9d47d204446f09248be"],["/post/44250.html","26453c9f3d33a6462c3adaaaf8e4c6d1"],["/post/44336.html","e5b5c211ca0030b6b1c9764309c63475"],["/post/44454.html","dc96e236e65c026371790d58410e3ae4"],["/post/44487.html","0a3b25d79984b7f30b927af74696089c"],["/post/44914.html","88af32015e8d0bfec21c5ecd962f4fd5"],["/post/4551c130.html","af00a427d11f705fff915e28296c7e42"],["/post/455a4c92.html","86942fe0d32f57a49739b839f1eca143"],["/post/46466.html","21a8533a4f3e312e5bacd0f7c54a5d58"],["/post/46925.html","8a51b96089283fec61b5bc60274f25a0"],["/post/47075.html","b91d00f6757c0c51f4c57c263aefde65"],["/post/48220.html","aeb821745febe809f58a9b54e030e7d0"],["/post/4b1879e3.html","d192ea02b2e87eb58987693ac28f8be4"],["/post/4c720881.html","0b858768fa3dfe64cbc85b34231d662f"],["/post/50daec4.html","22502ec01e06bf7386b7a42d00858559"],["/post/51491.html","56f74fba9d385106085cd56f3a1f9815"],["/post/52078.html","d520097998033b17d896d56e3cfbd4cb"],["/post/53677394.html","1b230ea3804d7febc595c588cea9306c"],["/post/54300.html","91e32494a76d21424ceaabfd763f4d5c"],["/post/54612.html","1ed5caacd14952ce8c2786c22ab148d4"],["/post/54613.html","cef7d0deb78c566f448cc504a2ea1872"],["/post/54708.html","ebedb2ce7896b74c50ee1e80d98817e2"],["/post/54778.html","1dcd9054b779ea199e2289e47053e775"],["/post/5490.html","7fe8adf53167cc1f8f992837821cae6e"],["/post/55046.html","4e49c664a3e3323ca6f674b989b9c865"],["/post/56929.html","13ba46fdd3dae06670a8d525c1b7ee30"],["/post/57339.html","2b914b0e9a346746d50121de9ea63861"],["/post/57449.html","f22fc43e5a7563e71488e59ab2e80939"],["/post/57453.html","e9dae9f155b9927ce76ed5eb0e0623d6"],["/post/57671.html","ad4796edc9cd125088278f7a4d71cdfc"],["/post/58313.html","b30edd3fe2c1473041bec31f20609227"],["/post/58481.html","8d45aa816c3e6e56d0c94704c66a6e58"],["/post/58986.html","80643b0f830949456a0ec48bfbcb6774"],["/post/59431.html","7acb347da11a11048576a2b820c3cb2c"],["/post/5951da65.html","6aca81474527e5860a9972abed141c4b"],["/post/5be7e977.html","7df481f938b9f1d869cf19f275dd4a08"],["/post/5f9e4eff.html","7ca4cbc4c1c6e033231f8d1094fd5b6d"],["/post/604b49d0.html","e3800c0105dbf2039738cb5f487db85e"],["/post/61312.html","f0df915f6f5c1259ab41ffc2db372414"],["/post/61738.html","c96b1bcdf85401bcd7e534ec49a76bb5"],["/post/61809.html","c5afd4b407ddc92f319f0dd6113ff348"],["/post/61eaf19a.html","1fef7a234bbbb904537b87dd58294825"],["/post/63002.html","d084b1d5b4f880a197b14cbeb2eb3e2c"],["/post/63711.html","4eedbd418df344bba6930afffb6d86e6"],["/post/6587.html","278c40d4f6b370fa4205d1359d3e4ce4"],["/post/6589.html","26e1a1229cdcb2ea0c2feb37629e4cb7"],["/post/6880.html","f07f127d136331293a9805e86a6ec9f1"],["/post/70263071.html","8e9fb9e1771331a6651e5ab8bb3b70dc"],["/post/71038564.html","fce729e7e4fc813ff7b1545240ab57e7"],["/post/7119.html","d8b2cf6b3244c7f98db92daba039b88a"],["/post/74e7fdff.html","482cc0152c81499426577cc06b079988"],["/post/7502.html","192130ab835d51446ade19c814ca330c"],["/post/7564.html","e50d85fd53782d7ca56267bdfe3640ad"],["/post/766f9b60.html","995c5e2094b64ee732a8a3b174e18f79"],["/post/7ca31f7.html","1c0b19c124d74dbafd0db24449a66f62"],["/post/7d1c86da.html","3a5ee356d0b6745aa20fbacdef47623a"],["/post/7f3bcd7f.html","efb96c95ead04419403a6c7dbd1f6701"],["/post/8039.html","2dc3aa3ae7aad075047cf4fc2c2d9cc8"],["/post/8050.html","b9c7203587b3ad450e134ea5c0bb2933"],["/post/8072.html","c2707317ff03a9e545f0c479de5b01dc"],["/post/8274.html","1f968e9d8870adede3ab6f59609ba6c3"],["/post/8372.html","ae89797d10f1bd76d06e78df6135e10a"],["/post/8498.html","7c389ef868efe7c17662b008d808136e"],["/post/85b4e13b.html","a06befb0246ab415078b57ac89116ce7"],["/post/912b2566.html","7c6f1874e86b85d4d3d57e9a9cac9506"],["/post/9187.html","eff4f2cba6f7c9ecfe7fb36002a121aa"],["/post/9197.html","95146b79a9dfc679ba9d14e1d4718d96"],["/post/94ceb2fd.html","b2ef9bcb2a795406f9cea789880419c6"],["/post/95495db.html","4714e28a9bf019f93a791052f2ff03b3"],["/post/97246020.html","38d96a57405655c4b275c5754f656b77"],["/post/a3a786d6.html","2687352a11d263b10c3ae2441424a830"],["/post/a444b428.html","3ac6f948d836afcb547d3563d919fb39"],["/post/a50b8908.html","ca700ddf8823efc3345dbcdd6b736e9c"],["/post/aa1eade8.html","9e2163e2107d5236254dc7c6eabb4257"],["/post/ade8c6d6.html","1d498c7a3c47e18cf740ca4bc6bca63f"],["/post/ae8362df.html","2a7fb9bad1d71095b5efa128953daf63"],["/post/b4c1d206.html","6b5f7037cd1f29fc94ace37944b2c2bb"],["/post/d431fab4.html","e28bf558b20afda7f2f34dcd0a267c63"],["/post/d5381517.html","7bae9058a8ff0ae533edebe8bf50fbf2"],["/post/e058ffd8.html","24a55e213451d311c34d53d9565b99ed"],["/post/e0f8cb74.html","36a6b60e451c8de7d73658d2b9b535fa"],["/post/eefe591f.html","006f5fb890b8bf6aa2d130f5e9545c85"],["/post/ef296a07.html","e782dc77fa6ab7ae82c2cf4aed6669aa"],["/post/f201f9fd.html","82c098cde30464507f4eadf3d5239f19"],["/post/f79e4123.html","808686d93acd80963053e8797423cbda"],["/post/f8648a1d.html","f26d14680f57c4be4a938e0737603097"],["/post/f89cb603.html","47cbd2af5cf1afcbe9e7bb2257abdc00"],["/post/fa288682.html","031c94912a80998a3e7cf479a988d522"],["/sw-register.js","13ae1b3c23b2e36089c6c10808ebdcfd"],["/tags/AT-T/index.html","4acc8277da7306f18beac96e4d6bc4aa"],["/tags/index.html","3d23a70b19306ad5d40d8511b64c5697"],["/tags/动态规划/index.html","a17c108bd8c3f2fc2389fe13c9eea346"],["/tags/字符串/index.html","65cacda0cb6d47a55db557fe58996ada"],["/tags/字符常量/index.html","cd0a4445a601c3a6a04c53439086dac1"],["/tags/快排/index.html","e40b8211eb69a47b7208633c6bfcbf30"],["/tags/排序/index.html","f14ae98eb6be2503cf42b3bbf61eb46f"]];
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









/* eslint-enable */
