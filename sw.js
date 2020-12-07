/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","982875b762214866ef37c34058db8020"],["/archives/2019/index.html","9c5a715c17b0d9b8a465617716eb6840"],["/archives/2020/01/index.html","c044b42c101f96b54b11c9ec4320f16d"],["/archives/2020/01/page/2/index.html","a1ea2abdafa1e8212a204158acea35d9"],["/archives/2020/01/page/3/index.html","eacd1a721a3d10c2738bb26d50247dd0"],["/archives/2020/01/page/4/index.html","f1cd1f6e41971d5b09eb5309fbabf3b6"],["/archives/2020/01/page/5/index.html","9913391871fa440c39406bbd2ff4d3a9"],["/archives/2020/01/page/6/index.html","913aa9d0e5bf0f9733366d3078471dd1"],["/archives/2020/02/index.html","59d681575f5c21fdca275b099553bdce"],["/archives/2020/02/page/2/index.html","3c9d60c2ba7ab4b8e60e4fbfb7ed2b4f"],["/archives/2020/02/page/3/index.html","0a7c238cc7ab8743cf72b6621050ba4b"],["/archives/2020/03/index.html","25dd14aff1ab905ab1cf88a8ae1a5278"],["/archives/2020/03/page/2/index.html","3257e9f6a5b3949b3dd0230ae5ce0e8e"],["/archives/2020/04/index.html","17b8727b7e030400ba8e6c74922f2734"],["/archives/2020/04/page/2/index.html","d24ed448f258ae9de08e408436e62245"],["/archives/2020/05/index.html","06a08f50fec1dcdadfbfd70ecb850368"],["/archives/2020/05/page/2/index.html","c40bafc1509ed4256bf51886cb11e222"],["/archives/2020/06/index.html","8f33979d6ed687f81c6b4a6e13c06e38"],["/archives/2020/07/index.html","dc1426bada3830566ca4646ca4c7d1ea"],["/archives/2020/07/page/2/index.html","c342e725abb2d3a615da7cba8a5f808c"],["/archives/2020/08/index.html","3b73b39971d2ebf37ea4c15376ddbdb3"],["/archives/2020/10/index.html","204b5f0c6c513b24df1a517cad088ae9"],["/archives/2020/11/index.html","d941574ed56ae0aedd1206d1c0e4ece8"],["/archives/2020/12/index.html","f96bc5488e5bb04f2c2953162169bc46"],["/archives/2020/index.html","d142079ae9022d66859aaf36ee30573d"],["/archives/2020/page/10/index.html","b40a0910b8363c61e7d39ee1234e2adc"],["/archives/2020/page/11/index.html","3c9da4ec9029feabd5a25847d711ca16"],["/archives/2020/page/12/index.html","8c96167cebe892ec18389464168deb3c"],["/archives/2020/page/13/index.html","b0e1b73ffbc93fa0252c0053e6bbfbca"],["/archives/2020/page/14/index.html","304afa099d217eda463a460ddeaa9b74"],["/archives/2020/page/15/index.html","8b9abb2172ce72b0a17d776fea9b8bf2"],["/archives/2020/page/16/index.html","93c43ff7b4937139b4194eda1e2ed6db"],["/archives/2020/page/2/index.html","55290129521f392a95dc63684c07de54"],["/archives/2020/page/3/index.html","aba1c0cc4c68541f8dc0079ae4b4b34d"],["/archives/2020/page/4/index.html","6c5fb9e0873cb6c0a519782aa54a5c08"],["/archives/2020/page/5/index.html","ef9cf320f7932a3c82af8d251e010fff"],["/archives/2020/page/6/index.html","bfe42a7987f32ba9c33b396aa2264d69"],["/archives/2020/page/7/index.html","795a97644a33b96edaf1ca6fced70bd1"],["/archives/2020/page/8/index.html","23b6a54e065186e9380916170c45c369"],["/archives/2020/page/9/index.html","e482fa45c1154487fba2c3d4ecea466c"],["/archives/index.html","eea423eccd9362830834f5f06e71baef"],["/archives/page/10/index.html","d63a160525541aee0c2842182910f52f"],["/archives/page/11/index.html","5fb3ece5204d7d1a49527dc6580e3cbe"],["/archives/page/12/index.html","30cad2bec2904e942b1c0d6b2db7f328"],["/archives/page/13/index.html","1e2bb6b04e372b580c243219d747f4d4"],["/archives/page/14/index.html","e51983ec04bedb4d79f1322cc60c984f"],["/archives/page/15/index.html","f1d561adafcd2eee218d45f635e0b79e"],["/archives/page/16/index.html","000e8643a6f7af25ff786d191df4b937"],["/archives/page/2/index.html","80b75fb63b782c2506404d81af7c4af8"],["/archives/page/3/index.html","40c9f546d374256ace86fc9c4e4cec36"],["/archives/page/4/index.html","e3f0a9bb7d51b00a678de49ff33ec160"],["/archives/page/5/index.html","a7d1981c75434f44067fa0d0ac6074ac"],["/archives/page/6/index.html","cf7497be1b8ab9dc8aced51e652df15e"],["/archives/page/7/index.html","ccc321b5a0682d6f38f3072f35321684"],["/archives/page/8/index.html","da22b6d32dd7889d0e673eb45918415c"],["/archives/page/9/index.html","9c31340ce0ac37445097a0c887e2eacc"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","766046761c4c9764168a7209bb36d9ce"],["/categories/Linux/page/2/index.html","e5ddf95888b1e0b25c06ab488d2e8c96"],["/categories/Python/index.html","37e30a4427306e87043064fbc829d68c"],["/categories/c/index.html","2f3e32a24eb2cc8a22a46769fc89c0c6"],["/categories/index.html","8669606be279014bc87ba8d44207d983"],["/categories/java/index.html","492f8d2d43320ca0423b080df189d971"],["/categories/java/page/2/index.html","5c75e508779c828e1e4dd191e77acde2"],["/categories/java/page/3/index.html","3f743ce37c0a16caf8803a18a0993e74"],["/categories/next/index.html","8700fd7758f51e852a5693a4dd37a665"],["/categories/stl/index.html","6250f5156e7b5bca89e9fbebbf9e2971"],["/categories/windows/index.html","2eedb54c9d1a09b77e83d4e2dcc0496f"],["/categories/基础/c/index.html","b6175ba17af7e6740ab268d02156dd15"],["/categories/基础/index.html","c88dd4613263f96dc76604e6b00ee3a8"],["/categories/基础/page/2/index.html","733e35fd92ef0f95e71bdb5815511aad"],["/categories/数学/index.html","6fcb4f9d27f0915f5be868ec41f7d68f"],["/categories/数学/概率论/index.html","53fed4738ce3ccf01af393e87e71db8f"],["/categories/数据结构/index.html","84205cc9f15408bda86bce83d3970946"],["/categories/数据结构/算法/index.html","043b850c2fbb6b294408aa9b5815100e"],["/categories/机器学习/index.html","bd9cfcce31dd7b78e1d581969cdff506"],["/categories/汇编/AT-T/index.html","6aad097ac1b1d26754a74bb20d71e16e"],["/categories/汇编/index.html","b41537ae8853c776474fd30027024040"],["/categories/汇编/page/2/index.html","c9799e7208dce1686c019c9aeb373482"],["/categories/汇编/page/3/index.html","396e000b962d9f2074fe41a39ab23fc3"],["/categories/算法/index.html","45af8a567b13e9089352dd44270628da"],["/categories/算法/page/2/index.html","40abb9b0ba9cbf63ca0e0e03f4dbe557"],["/categories/计算机系统基础/index.html","6e4e48c7d30f011bbe9ee1159a65d8e2"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c15796580d25cf8195a6e2a816e9831f"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","318a267fbada680e09676673296b2a44"],["/page/11/index.html","a6367f2da5b1e234a9728bd78cae82f5"],["/page/12/index.html","301153daa1d3e8011a7220fd8de42efa"],["/page/13/index.html","a864784a7d3babf9d1ba404d773eb04e"],["/page/14/index.html","31e04e3912de94ea0ffcf80396dfb134"],["/page/15/index.html","a2dd7c318a4812d125a19323b28b1251"],["/page/16/index.html","b8a6950566aa8f5675095c3fb0709760"],["/page/2/index.html","661a3adeb71bca327760b27723557fd2"],["/page/3/index.html","b5dd723a6d1288c3196e612424e3e575"],["/page/4/index.html","8ab51eff1e659361cc400d2a0384206c"],["/page/5/index.html","b833989acad3f4af178ae9488403fdb4"],["/page/6/index.html","726511572ff52bd600484f3a03b187d1"],["/page/7/index.html","055fedd1bcdbff912301fb66171abc49"],["/page/8/index.html","25e918da4c40b595b8b237b2c0676f75"],["/page/9/index.html","cc590e68157c253039fdda497eb3d1f1"],["/post/10919.html","45651f86964c0b72f22c81e96345e369"],["/post/11051.html","b049c4f6b34aecdb8157fc6d02d985a3"],["/post/11306.html","3b137cc7e3d1c1cc3568732eea9409f2"],["/post/11491.html","8ce2af22d2f2dd6c8b465c721dcbab4d"],["/post/11799.html","78326cf1cf038220c36c85ac6e8c46f6"],["/post/12334.html","d9fe9d2c83787721adddd9ad20fede7a"],["/post/1326.html","263f1ee7e952ccabfb0c2e0e0d8ab9f3"],["/post/14379.html","302ecd29107e40a5dc54fd8f8fbccd0f"],["/post/14511.html","bc07ffe6bad0853e3b3a6ee145484408"],["/post/15201.html","9a892fb802421e6bacaf6efd646efa64"],["/post/15425.html","9f8a5971efbfd39954a8133d79a8b21e"],["/post/16107.html","269b27c6642396f0887a19d7762eb29a"],["/post/17862176.html","605e3b52cfac9fc853feb954dad4590b"],["/post/18431.html","1d917aace8c4133b65cf1ff188444d06"],["/post/18912.html","c1f3b525db276fbc2e1542d87cbc90f3"],["/post/1b9c8662.html","2070f32a34adfc0e58947b4b7544021c"],["/post/20198.html","05ba996c648f1a6d18168c29620d685d"],["/post/20ff5ccb.html","d24b997ad83a426a8e3f5b929506743f"],["/post/21624.html","62fb7e9185bd4a9c19b60eb788d66540"],["/post/2170659a.html","207a0eaec821f19a870c87394fef89da"],["/post/22102.html","71bcb9b78360a92bb0eb8d0deff05693"],["/post/22493.html","a12719fbb2c661b883489be969340752"],["/post/235252ea.html","958c2a6062bfb3daff7524efb9b30770"],["/post/25699.html","b59648a77be22834bd6e4ac1fa15266c"],["/post/2647.html","37e6825db890350aa9341bdc703ac03d"],["/post/26477.html","48df9518d9ae37b1b16761a41b5ecb7d"],["/post/26671.html","a29bf74487e5257dc77111145812d6aa"],["/post/26737.html","c099fe03607ae8367e8a275c6869ede1"],["/post/27045.html","60ecfaeeaa96b459decc39e800b4e483"],["/post/27621.html","b343536b543f8c30328d54797822a0ec"],["/post/27890.html","dcb02de3df2520ad68d0184cbee672c7"],["/post/27980.html","998a5efcd508533f250829a6a4ae8d00"],["/post/280b588e.html","5ed7d62f37c209f8f187a793aa0daee8"],["/post/28579.html","2f43a5de43042769201c8b330bb4c1f3"],["/post/28877bf.html","7c350f173ca01fefc72c6d2ddad9cb49"],["/post/28954.html","a779129dda3da850735a589b87092b65"],["/post/29378.html","34702f29243561b94f6ca60d18868161"],["/post/29949.html","436d82a0da2a49d77b2ed9e85f01cb7b"],["/post/2ae43b86.html","04ac824cc63e6d228d4337f64e3ee367"],["/post/2ba82a45.html","5ec04882b1ff9876ac269f26b223f46f"],["/post/30072.html","87fe6f631278af9a1c5a669c96abf2d6"],["/post/30479.html","a87a44ba983eb302f3030043b198647b"],["/post/31a6b40.html","5b41ccc25a8dde1cf388381b8b0eb57c"],["/post/325cdbf2.html","bcd432bf1dc163af45cd0c2689ba3566"],["/post/3319ed9a.html","6e17033b3c65fcb1e325429f203e3b35"],["/post/3320.html","18ea9342aa3351571ab25d7e0d140c9c"],["/post/33cb1151.html","47d45ee9ad5f342af802ff30c678ebee"],["/post/348d4e04.html","2ab4ad5e9d67f33b3dbf6323908683ca"],["/post/3526.html","b808846513750478957a9e11831107cf"],["/post/35532.html","8c0f5d162b08aef0abf0dbb138b19200"],["/post/35848.html","e236e30a9a85d72a164d6b95cdfef2c7"],["/post/37318.html","b888c89b55ff4f2539cfceb809dcb8bb"],["/post/37663.html","3020db290185a9e3df568becab907ee7"],["/post/38035.html","7b78cd382cc6e7bbcd644307adbbcde6"],["/post/38072.html","7871c2d26c04958acc57e1b07dfaee70"],["/post/38145.html","cfa952637d16596394710431b63f6911"],["/post/39968.html","dd5cc269bcbaa34e97a18baab2c1a4ff"],["/post/3de4bc69.html","1cd506c60a7063e5c659a4445e01da5b"],["/post/40583.html","9243af425203e7b2c6ca12e4763a856b"],["/post/40997091.html","0865be4644e65d490bb7a81711dd097f"],["/post/41129.html","909863986337cf1979d796bf345bd859"],["/post/41763.html","4820eaba23e9275805c8dd5d53f1b636"],["/post/41829.html","66b2afe5305c1ad0860213e2ca86665b"],["/post/41840.html","32ae47763a15a466a010a6566757e1bd"],["/post/43817.html","42775177b55064738dd0ae348bd2e0ea"],["/post/43878.html","665bafd928e8ac2e84996ed41a47c7a0"],["/post/44250.html","8da8e7a9d53e16b7f850ffd5866bab95"],["/post/44336.html","8ab3014c50236ac3134e3945c48dca05"],["/post/44454.html","cb6683bfbae93b2ab0d68ad7b32eee12"],["/post/44487.html","54dda8fd5e15c5aaeeba582bf9287770"],["/post/44914.html","a223661c91aeb32b30484658c783877d"],["/post/4551c130.html","8793d591edf2bdc313aa9397485411b9"],["/post/455a4c92.html","daebe148536dcf8cda2f663811e36070"],["/post/46466.html","8748cd0cea8a3d59e3810e33985f07fd"],["/post/46925.html","d6d84dec0713b765122c2a73ab37ca3b"],["/post/47075.html","8a0335faae660e42fc778225e922c512"],["/post/48220.html","7b0ed66d5f9a68566ad49ed9c689cade"],["/post/4b1879e3.html","c5d187910f26c70abd39c107be4b196f"],["/post/4c720881.html","40881ea47b7689e095346bad1999fb94"],["/post/50daec4.html","4e308acd852dae2be463d8203375acbb"],["/post/51491.html","ffe8d2b76242416ad1e0768ba3a26a10"],["/post/51e63dcf.html","7c7166c370f12c154808e8391e06782e"],["/post/52078.html","c549dad74edf3d6e77fd907535e2b36d"],["/post/53677394.html","2d67beaa05a501a2bc86d35b62ea8f9f"],["/post/54300.html","4a027ce2df05e25755bb43de7135d7c1"],["/post/54612.html","dfd9f2b8a8f30e094d7b5044703505b5"],["/post/54613.html","854a42a5b1eb791b0969a888fd9c4d3d"],["/post/54708.html","f8e3cd878efa02f64b23e19512a6b213"],["/post/54778.html","273248642e2a2e334e795e8141879e47"],["/post/5490.html","7a63cc4805860431a0862c0a5364c8e3"],["/post/55046.html","8e22dc550a9fd40a29e7accaec62639b"],["/post/56929.html","37708b6076fd5cec06ad84667d5e0134"],["/post/57339.html","acd58e966d13667dc7294c3a5b1ae1d2"],["/post/57449.html","2e6093d3b8a406f9ef98eb727c0524fa"],["/post/57453.html","a63667051a1c7f0bd5d27f5dfd9144a5"],["/post/57671.html","9b69b76f629939082a4df70517e07947"],["/post/58313.html","5e00a2da85fb31b1bd67f3b214b21334"],["/post/58481.html","04cb712f1c8ba8887c1732fbffc72af9"],["/post/58986.html","810d14d4b9e072b0d358f1b1a85af7c3"],["/post/59431.html","b15893eaf1b303ffe6ef102f1f023ab8"],["/post/5951da65.html","50340a12cddd8bd4fae41c1742d5d079"],["/post/5be7e977.html","2ac4c5e826ab33febee819ea4b61925e"],["/post/5f9e4eff.html","d778b160fa7ab5d7114bedcd5d4804c9"],["/post/604b49d0.html","cf2a98b6a43c78ca08dbc971f424d923"],["/post/61312.html","ab646bce6cc74cbe8d6470225caa4c6c"],["/post/61738.html","3bde08e2ffd5f4966c05a8ba01d623bb"],["/post/61809.html","5838822289f724962157ec6e6eb7b82c"],["/post/61eaf19a.html","1837638255d28e6d474c287cf872dae9"],["/post/63002.html","cbd4fa6bd7739219f15add609f8e8045"],["/post/63711.html","b17cb1968c60e17c3b52f25857ab1ece"],["/post/6587.html","a9de0de966f35d3ac32fe285326e131a"],["/post/6589.html","648f824b958df76d09761c3f83563dcd"],["/post/6880.html","4b42b5a0f4e07ff0490bbc6b02f05940"],["/post/70263071.html","ede7116e8a866be18a4e642aa0874ac8"],["/post/71038564.html","5ede542843a1795de8841866fad03b65"],["/post/7119.html","6f4238e7a40df81ae5bb8e62693b101d"],["/post/74e7fdff.html","98dd260bdd0dd2953ce00db845c1ac51"],["/post/7502.html","d3ba7408f333faab9521b7ee330c6aa7"],["/post/7564.html","968e71f6f0c2793d89fbe8a927d61f6a"],["/post/766f9b60.html","b6dbf4a5a324b2b98dd5671b286b16d7"],["/post/7ca31f7.html","9772177eede62e9a109509efcda4216d"],["/post/7d1c86da.html","03555e8872b4d84820d20fa2b266f2fc"],["/post/7f3bcd7f.html","15898b4b752cebfe39e97bf3d4482787"],["/post/8039.html","77054a40f0d3c3b015d1f29f0109fe55"],["/post/8050.html","d2d962cdba63fdb93de95f49cf7b0c74"],["/post/8072.html","0d71389e93e6acc97381d910961e5613"],["/post/8274.html","325c1119a35a048d83db50944a0b79fc"],["/post/8372.html","8347f1345cccd4fd5344cab1b02d60b4"],["/post/8498.html","6a461842ca554d077a3c125e336f8f43"],["/post/85b4e13b.html","82b53b1a5af4cf1f3ad9ce3634a88d39"],["/post/912b2566.html","b7c116dee705e81e6b17d6d207527899"],["/post/9187.html","a08e822de5c231fc36a6609f18b167e3"],["/post/9197.html","f8e0fc3f92823b3ea9977bc6a99b1833"],["/post/94ceb2fd.html","5bb9d80a7483e0616119bd7c423ea2d5"],["/post/95495db.html","c78ab7c0d8e846457852e7a57f2095ce"],["/post/97246020.html","9184bc34683843e0e2da180065ff3d00"],["/post/a3a786d6.html","62355fbf5accceb5ac228e674d353d2a"],["/post/a444b428.html","01f127e538ef2f3c9efc8b2ba9aaedbb"],["/post/a50b8908.html","153bb454c32936a7fee5a90c6b2794e9"],["/post/aa1eade8.html","5ba54509b0677bea5b859a04990b3158"],["/post/ade8c6d6.html","c7c75b9350d25a648081ab787efa6e5f"],["/post/ae8362df.html","a5355fe0d258f99f9a4e737321e62c28"],["/post/b4c1d206.html","4c0c5015aecd1caac21759d03c843bf9"],["/post/d431fab4.html","be39f524f3cd7ddfb39abeb3df15aa5b"],["/post/d5381517.html","3d077e049b5759f96462ae2dcc0824e2"],["/post/e058ffd8.html","329510658ca7b3c2b802f355fb32d3ed"],["/post/e0f8cb74.html","2e7f0a9cb4516860cc14924f72c148ba"],["/post/eefe591f.html","589f87a62ffa993a6880e80fe4f7602c"],["/post/ef296a07.html","be1d910a44f8e377e6791f9fcf1bac1c"],["/post/f201f9fd.html","12c62ca44772f9b9a1ef03e05e13d3ef"],["/post/f79e4123.html","bf99a3c48b5ed8f089cc34afc938aea0"],["/post/f8648a1d.html","d4b4ee2ff082a2dcda96ff80125e6612"],["/post/f89cb603.html","8de61c7cc25947916d53bc098a742a5c"],["/post/fa288682.html","47de6cd11054f3cc934fff227ec79d77"],["/sw-register.js","8678c155ea87dfb58ad3bf7272fbe952"],["/tags/AT-T/index.html","f4bd75228f2468e855ddaa077ec3f421"],["/tags/index.html","2d8b33e79a21c1f1f13be778858edf36"],["/tags/动态规划/index.html","87c2dc5c7de9a05970764413070a97b5"],["/tags/字符串/index.html","3396dbcb04e6c2aacc3f9a31b87fd19c"],["/tags/字符常量/index.html","54af97641828f75513260dd6a39aa449"],["/tags/快排/index.html","9557f90b31644ba0a3e1dccbad1500cc"],["/tags/排序/index.html","ae09465dba786d92425afee3de66fa50"]];
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
