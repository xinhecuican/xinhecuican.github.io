/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","8ed6684fe445734fe058be27e83e72d7"],["/archives/2019/index.html","fdc2120f5a3bf97c6095b053d89b5a19"],["/archives/2020/01/index.html","b6e0ebc37a4c25005fb73051afe9b6e9"],["/archives/2020/01/page/2/index.html","892b71e0e4feb64fe7d22b4710f65546"],["/archives/2020/01/page/3/index.html","888880ba790e8a4a6dba8f5616c10115"],["/archives/2020/01/page/4/index.html","9d4911b8accf46c8ecd15712b3e0878c"],["/archives/2020/01/page/5/index.html","faf6638ad0fac50feaed4ce33892b155"],["/archives/2020/01/page/6/index.html","b294d66d54ac1db41d9b6463d8d23fa8"],["/archives/2020/02/index.html","7d0d8d5e82e023a4631448cd2a103644"],["/archives/2020/02/page/2/index.html","7bc7f0c0283a14026109ca892ae51c6d"],["/archives/2020/02/page/3/index.html","02303560b5dc6fd4b13045b47d881cd9"],["/archives/2020/03/index.html","3e2bf5697704623e9afe08908355e499"],["/archives/2020/03/page/2/index.html","aeee888ee76a20a0cd25318c284cd9f1"],["/archives/2020/04/index.html","849d064d8dc0d18964b862b73da4f80d"],["/archives/2020/04/page/2/index.html","ba26affc540f9f4567acfd791436a561"],["/archives/2020/05/index.html","17011329c8001678a941aff4cd726a22"],["/archives/2020/05/page/2/index.html","747bf1814f3a982581c449e0eccc7113"],["/archives/2020/06/index.html","ad3595b589cb88f73b29c30d94fdcfcd"],["/archives/2020/07/index.html","fda145742e0e4c56b932dd8cebbab73a"],["/archives/2020/07/page/2/index.html","cdc7fedcfa119a82f6235b0537736652"],["/archives/2020/08/index.html","cf2e07fb30b31cfe55fb7f8f12ead5c6"],["/archives/2020/10/index.html","3aeefeadbd35f4ec9579823c8b1801f9"],["/archives/2020/11/index.html","d770aa88116d8fcd52f7ae25a86e65f0"],["/archives/2020/index.html","ab1a2e01c6518a07ecd85be561af94f3"],["/archives/2020/page/10/index.html","c52a1b2c1d99a006d945307fd7c0ef9c"],["/archives/2020/page/11/index.html","55bfa365e695ed8f58ba44b803844f5e"],["/archives/2020/page/12/index.html","6f50ea49a644d312a417771f8473c78e"],["/archives/2020/page/13/index.html","403a61cc07bf092f932bcaf28e08c7b1"],["/archives/2020/page/14/index.html","002161df0f424e1928e0c89634e29aac"],["/archives/2020/page/15/index.html","59cb6f4b1a3d3cc7f4ce9a02f0922fee"],["/archives/2020/page/2/index.html","a9ee9a7465fd63169849c4579c300594"],["/archives/2020/page/3/index.html","0088206f05bdea48b952d59c6de0dbc7"],["/archives/2020/page/4/index.html","57a366bc554e3bac9e59dd5e5c33aa7f"],["/archives/2020/page/5/index.html","4b225266840dfb476a7a24d9c2732c73"],["/archives/2020/page/6/index.html","7c8d77edb1d98ecd5e65f7cfd0b17e6f"],["/archives/2020/page/7/index.html","cec125c036c5385e3a0cccd48fa2c676"],["/archives/2020/page/8/index.html","7848452077238027e521a89e5a3a8617"],["/archives/2020/page/9/index.html","8fc57d37924c453adaf3fa882e6aad2a"],["/archives/index.html","be306f0215af8652b2718604adea6157"],["/archives/page/10/index.html","686753be833d738b06e50b5b05d6329c"],["/archives/page/11/index.html","00d8e3ffd008977b8c5088fdc81976fd"],["/archives/page/12/index.html","1e2ac4f1a5b1085aba669233ab27e1ae"],["/archives/page/13/index.html","f3578d9c3708e19335fecd208aac0a7b"],["/archives/page/14/index.html","093c3ddc133c2c7ad2ced1bc2dbb5c69"],["/archives/page/15/index.html","44b7541b78e47445ca65b4cd0d93d687"],["/archives/page/16/index.html","bd29a1697bcde24c81f6edc9e8a5a738"],["/archives/page/2/index.html","ff833bea6205e003cd5b9a03fa8cf095"],["/archives/page/3/index.html","c3192ac113924416ec2ba623d814f36e"],["/archives/page/4/index.html","d8ca266ca8cc1bad58d38a7f9d371e03"],["/archives/page/5/index.html","4f5bdd51bc3565fb1234435f6f454110"],["/archives/page/6/index.html","2e6562530e99ce092fe48122bc529a83"],["/archives/page/7/index.html","e935f01bfbf482e319d82005437416ea"],["/archives/page/8/index.html","5f43899a714f7a7058c457f190331740"],["/archives/page/9/index.html","c365142196d33e2d315f452d3d5b7887"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","871592bfbcb3749f02fcf037d80cab31"],["/categories/Linux/page/2/index.html","da12d3b684ca0309a4f29ce804bcaa91"],["/categories/Python/index.html","beeced47c3ea853865341ef06f3d3671"],["/categories/c/index.html","0ced5d382997a0ef816cc05bc38e755a"],["/categories/index.html","58c381d26b4d999b0fd040fd30041066"],["/categories/java/index.html","a0ffb83c70a58ad0bc7e264cb26a26b8"],["/categories/java/page/2/index.html","e03d469d9abb807b19a705ab7b963b51"],["/categories/java/page/3/index.html","7c84990bca8133f8b6411e7614a5b74a"],["/categories/next/index.html","45c617e3138797644b32ee1e44cf2ca8"],["/categories/stl/index.html","f7b66dd069ec8b6524c7f88bf4a812e9"],["/categories/windows/index.html","3aa5c4f0214d3667836c2c70c2f7e5e0"],["/categories/基础/c/index.html","9d88b7f987475456e976b8645172033a"],["/categories/基础/index.html","674109ed01328745af90bc1905f22517"],["/categories/基础/page/2/index.html","4e04cb71c38c2c4452559d18fb6c5053"],["/categories/数学/index.html","97d4343a3fedce1291135297561f9f06"],["/categories/数学/概率论/index.html","3f193c802bfce80a7f6873499c536405"],["/categories/数据结构/index.html","1c8bc8748b3b3cc49a86106dab72b801"],["/categories/数据结构/算法/index.html","917af3a3951ec984cf1732cbdcd9614e"],["/categories/机器学习/index.html","e319e55f712f84c215c2209155e6235c"],["/categories/汇编/AT-T/index.html","8041b2879b998c0d030f248f1c5bad4e"],["/categories/汇编/index.html","42538f72ba0eeacb5d67a742c544c5b7"],["/categories/汇编/page/2/index.html","90cc1caef387c982ac0171d650055255"],["/categories/汇编/page/3/index.html","91d8b1e36d298ec542a848994b7aec38"],["/categories/算法/index.html","0c2a819870713b93a04afc6552989d11"],["/categories/算法/page/2/index.html","0b613db1298aa3b9eac62af059ce0fbf"],["/categories/计算机系统基础/index.html","ced8d2e2139f01a796ef140362dfcbb0"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8de1ab612604f032f5e583dbff1afd75"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","77156beec9ffb3ba803ddb2b08293220"],["/page/11/index.html","61bdb03246f245c37500eeef994a622c"],["/page/12/index.html","e99d97939fc9fd212037cceb7accde54"],["/page/13/index.html","6290532737c907e360a74371c1489f38"],["/page/14/index.html","5f4277154b95f05443c03435196cffc0"],["/page/15/index.html","90005359e85b3070f160f5e442661da0"],["/page/16/index.html","357b13c14029e87a5e8855ff7782a3f4"],["/page/2/index.html","3fb65eb11d2a7b811edaaf7a20199612"],["/page/3/index.html","e6d2755fcf4e401800813c67a017e1e1"],["/page/4/index.html","75b46a82460070843a5c497ac9c37d46"],["/page/5/index.html","a5889a2f5d901b69b4ca5bfc9ae0c3a4"],["/page/6/index.html","27399b06e1e4ca1edc2103afbab47283"],["/page/7/index.html","e4de7d4448484d8e335ae52bf88a12f6"],["/page/8/index.html","aae8af3a06ff9b9c07fd49e27fe01f41"],["/page/9/index.html","5d532dd1a3bfed0f52e78ab1a7f39303"],["/post/10919.html","355261f8b78e7ae1ed9efafc29070733"],["/post/11051.html","fde5e1ad4721d9171b65d63e42ad5731"],["/post/11306.html","5b58bf7e58437c019aeacfe4a9141da6"],["/post/11491.html","4deb9a5f0d639af02b878df9c5c6c94e"],["/post/11799.html","e345c193a815fbe12d45b9fb3e92c90f"],["/post/12334.html","afe8e05ee16a5c7ecedaa0ce119687e5"],["/post/1326.html","9dab98642fd630500b5b64f12ee98f23"],["/post/14379.html","8ce9bf7a81e74bfff78ce447e561ce24"],["/post/14511.html","dfe7aa983978438dbe092a1f2692c671"],["/post/15201.html","622fc798f24f7356a8f6dcc4aba2c56e"],["/post/15425.html","9d5697924e5b14dc5c1ecdee016b814d"],["/post/16107.html","af58ac6bc4e36462729be7327a34b734"],["/post/17862176.html","1dff21bf4f1e539707090609f93f58b0"],["/post/18431.html","6f52e53cb5362e768193299664067614"],["/post/18912.html","d49f1e2b31375a9a5a202f5fb0b1aa16"],["/post/20198.html","d215f8688eb91ae2ced1d26793ff3856"],["/post/20ff5ccb.html","565ffce4f8769374edace9d8539fc587"],["/post/21624.html","8eab20ab28f99e153d1b3c84660cfba2"],["/post/2170659a.html","81afcc5893cc2bd2aa85024e943978f1"],["/post/22102.html","f0a6d4d5e6beb61299db5135db2b3862"],["/post/22493.html","953d446c771396f815704fcbb7526112"],["/post/235252ea.html","5e446173931cd6495614428bebf647f0"],["/post/25699.html","e21a573e9dea56a0f78b3312ebc2b0c3"],["/post/2647.html","cb26eb87d664121b41cc147b038ecc43"],["/post/26477.html","662dec3513adb614ade47f00c582324f"],["/post/26671.html","85650e45a8019660faf70e0a4799cac7"],["/post/26737.html","fcedd5c4666b3ccb9a02bcec32a6afe1"],["/post/27045.html","e8e9fcc2747d34dbcd8ed8d748201ba1"],["/post/27621.html","49d87843f6985e3fb4475b8102e26013"],["/post/27890.html","5d6824213894b19103df8fc4c1959039"],["/post/27980.html","943e2241788dbcc77d4144e1b6072833"],["/post/280b588e.html","122a057a6ffe6a5ce8a9605b7204f5ca"],["/post/28579.html","8b9be84b47086dd39941f6c38944ec46"],["/post/28877bf.html","e4212658a6bb74c1394985bdd70fd936"],["/post/28954.html","e3676f0cbea07feaa0d454aeb3363539"],["/post/29378.html","b988aa6a1f488b9bc9293819128a37fa"],["/post/29949.html","9153524c0d2e1cb0d6a91d0e22ebdea3"],["/post/2ae43b86.html","d518aacf7b2e406214be478489d61cf9"],["/post/2ba82a45.html","2b7fe313305a819fdd9edd62bdb6020a"],["/post/30072.html","f0bae012e5a52e85731896b19b27b35c"],["/post/30479.html","3ddb95cfc436e6b4f489d51ebec8c8d9"],["/post/31a6b40.html","543d069dd7cb6868b8416611374c32db"],["/post/325cdbf2.html","07789e7dfee4370ad9b50f5ffef00bc1"],["/post/3319ed9a.html","35a1490c0f749cb9753a32dcae31d459"],["/post/3320.html","b3b53dc935fb35ba8db226ce60ea4901"],["/post/33cb1151.html","2dd77a7c2fd3ac0a20859a5333d8a0f0"],["/post/348d4e04.html","e1f260fd97269e8a7ef05513dd472d22"],["/post/3526.html","ed73e85d282256f6979bb67b252a7fa1"],["/post/35532.html","283fa2680186a9b7205414b8a6779489"],["/post/35848.html","1f396d96564ce5ae426402ac0b36db43"],["/post/37318.html","c29bd0c4a760a592d3ba18c382340042"],["/post/37663.html","4978a6ff47cee68673cacd46a2344ecc"],["/post/38035.html","c23e9db046f8ff67111033f2b73b9822"],["/post/38072.html","c95b48b36504695ca2a11f49ff03967d"],["/post/38145.html","d300821424b87f3c8ff968307d9e4357"],["/post/39968.html","54c522a5e4dfe82c975dcde54cc5b097"],["/post/3de4bc69.html","d59d05eb5e61e6442935e799046c80ea"],["/post/40583.html","8e304f8a547fcc9730547a1135271b5b"],["/post/40997091.html","b6613961ac2835f8564d12e9ca671715"],["/post/41129.html","19b5584adfde3657932598c684621e65"],["/post/41763.html","0e807530f5f210a02691a32e56f26237"],["/post/41829.html","8745a4b036145f902bd88b5c20bc824b"],["/post/41840.html","db67ee6ac152564a6cddcf59e25a3cd8"],["/post/43817.html","baf0b921be6c7c1f53d3ba5666620a59"],["/post/43878.html","9230e2e765dbc5b4055401e7cb6e5182"],["/post/44250.html","462e651da07140676467c654d2ba524c"],["/post/44336.html","a4bc1960aa17f6c441cfd3c42c28f78b"],["/post/44454.html","937b5021a653462dca95fd629ca8d7a9"],["/post/44487.html","6bb2da117d1ca6cb7b887801c95d89a1"],["/post/44914.html","92a45b39226955f92253392fd2a8a253"],["/post/4551c130.html","5752725c897c5cd0077907feb95bfd22"],["/post/455a4c92.html","c87adbdfd0e87d06001fc057b4fe458d"],["/post/46466.html","0025969bacf548c4fbe9455240526138"],["/post/46925.html","56e111d71b2c22634cc3fe660c176d2f"],["/post/47075.html","e32db037202291cf6a7df8f6d05854d2"],["/post/48220.html","51d764e08a990412bfb65a4c8c891cfd"],["/post/4b1879e3.html","8604005e0b853ca1943e8c5b4ae114d9"],["/post/4c720881.html","884a5c10f7485aca5b8721c479949df8"],["/post/50daec4.html","29687dbba3e37fd289578d1a91eb3b94"],["/post/51491.html","16e24b0a03268935bbf59a423c15cd73"],["/post/52078.html","a18d8d41a0808dab969ba4f2457d28b0"],["/post/53677394.html","6fdf98fbf3aa965010c019d4e530bce6"],["/post/54300.html","dc1d4c63fa60ce9ad1d29ea695b4dd75"],["/post/54612.html","4bf9b34bfc04674ca38120181966be4b"],["/post/54613.html","80e911003560111352446df8a46e3720"],["/post/54708.html","7c05991c4894df30a17e17a0b54a1361"],["/post/54778.html","8c452d699d2fd80e30d7ac408a0a0456"],["/post/5490.html","83ff730dd717ac6d6068adfbe3ae3389"],["/post/55046.html","f4d1e0ba96f0b0fe53e99370fa7a1563"],["/post/56929.html","ccc46dcba811f07637b30540ee6878bc"],["/post/57339.html","e59623704576255128323b1ade517f9a"],["/post/57449.html","5803823f7f107edfb8e5ee55e0ed2f9d"],["/post/57453.html","039ba87c6fe585d99ca88239c1930651"],["/post/57671.html","80a1d77e9acd4b20ebeaff0d860ed99f"],["/post/58313.html","b50b5da837e8d999710323ada420aedd"],["/post/58481.html","e614d31bb65874e7cae11f0125260f90"],["/post/58986.html","e7bf76fa9fd058f6dc406084e17d6c92"],["/post/59431.html","244c65e35053289dfef3ff8d321f0ddd"],["/post/5951da65.html","94bc6870f49aba71d05774198c790d99"],["/post/5be7e977.html","5e11280c885d0d778e9dcd348b2ca6fc"],["/post/5f9e4eff.html","26666a4e17f340b91476a7cd6bd20469"],["/post/604b49d0.html","bb94bf2bb8a0cfc20d54599352287173"],["/post/61312.html","17abbf422c965eced01b8416f9b928a7"],["/post/61738.html","26a116789a370187e51cb40a50c2629d"],["/post/61809.html","b29cfb579cbc8d7cd6a7832bae937b2e"],["/post/61eaf19a.html","96bd91df1727d40f955876a3f7e0c0f9"],["/post/63002.html","dd650433be37d8d4c35a59591f86fe82"],["/post/63711.html","160cfb5ac0e60cef516c72a6626d0641"],["/post/6587.html","d59237d9df3de62641cb2ca117574869"],["/post/6589.html","4d39c92abfaf4f95f02d0ac38c8335a3"],["/post/6880.html","7e4e294529337f76bd0d980a323b39ff"],["/post/70263071.html","a0c051e4b4c0b8b4cc09af19c8cca620"],["/post/71038564.html","fd552806edc1ef15551488511ebe9778"],["/post/7119.html","fda3bf4bf3f5f044731449abe838cbe7"],["/post/74e7fdff.html","743a477aa86c971b8a8acfe0ffc45b99"],["/post/7502.html","196acc04da5989ebe29c42085c7d2db2"],["/post/7564.html","af6a98101b88394a929382ca2f5c7f8c"],["/post/766f9b60.html","29071e8dd177bcdcc545162a11dbd75c"],["/post/7ca31f7.html","37ab06dfeb752e18a8192a01f0f01a9c"],["/post/7d1c86da.html","dd831b6a39ffe8b6ec2a438b91bacce9"],["/post/7f3bcd7f.html","2546c91f4efac1ed12d78277b50fd00a"],["/post/8039.html","7fb95a95673764ea32be4c0fa07a7370"],["/post/8050.html","55fae235249741a077267751c1d6d497"],["/post/8072.html","1300a950b9375425bb2f0df034579f4d"],["/post/8274.html","191d65ab685f5fb892f896a2537e466d"],["/post/8372.html","7e2720e22e7de3b4fd27038b4625e904"],["/post/8498.html","a0bdc22fa594b306a803aa4ff1a65aa4"],["/post/85b4e13b.html","6b0df4e53a36528720fae46373100ab4"],["/post/912b2566.html","bb3712b8f3f0e9250327c5ee31793622"],["/post/9187.html","4b9de0d59be305df637ba200f55e2c92"],["/post/9197.html","c6516553d02f788104cdc0144ea68f75"],["/post/94ceb2fd.html","44608a050aed9efb7be76e49e880b8b7"],["/post/95495db.html","e8feb4a6c3463f1f1a456b5034593feb"],["/post/97246020.html","42a9a429fe918bb1e0ede7ac121a9a5c"],["/post/a3a786d6.html","387ea2035b23f19d67e65d46b97b5743"],["/post/a444b428.html","7c534266ae77a90513a87b4c946dd32e"],["/post/a50b8908.html","9b4b562f0fa4a8832c1310eca1fded3c"],["/post/aa1eade8.html","4ec09f5da9a28f807289ad51eff60f8c"],["/post/ade8c6d6.html","1d06614b2730cc8f6ce0cdc24f1c70a0"],["/post/ae8362df.html","7718ca29cece03d1d0d1f1d3dc461f07"],["/post/b4c1d206.html","519834c93d92b65f1151f5a4532df3e4"],["/post/d431fab4.html","d9d62db592eef9ff81d3ca2e1f319a8a"],["/post/d5381517.html","bf29607b014ebc9375611c493a59d46c"],["/post/e058ffd8.html","c5332e99a6c40227fe8d42cbbe93e00a"],["/post/e0f8cb74.html","93db3218c4816041f9e378e122fff7ff"],["/post/eefe591f.html","4fbcd4d43beba5abe9166c0cf9fb44e3"],["/post/ef296a07.html","ca4122d451aeecf31c737b60c2342e73"],["/post/f201f9fd.html","4c8eb7f41748bf5bfd5efc0cd0c89a5f"],["/post/f79e4123.html","a6b20f182062d7a1e7128b5cdffa1aa3"],["/post/f8648a1d.html","d54538eca3f92eed224afd2584dd915e"],["/post/f89cb603.html","b1d945efc9ab9f828529975a7b09e7da"],["/post/fa288682.html","aa97a0fbe07cad29d902c4e447c7ba5e"],["/tags/AT-T/index.html","da4a1f0ccd801f9b1ea3f78268793b0a"],["/tags/index.html","c51277219ed8323104a994d4f143f3c2"],["/tags/动态规划/index.html","153871a3507c2c463767aee83d255a4c"],["/tags/字符串/index.html","54f21b3fe2df29e1fcd8096ac543cf29"],["/tags/字符常量/index.html","74c9f1d1265c4617dbf20c13ffa0551e"],["/tags/快排/index.html","a9093d77ae705b540cb2a413114d7145"],["/tags/排序/index.html","44c0e29a92e7bf4a6f0c3c2c5ffc737f"]];
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
