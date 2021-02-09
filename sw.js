/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0973a80f4248b2a95cb35d67b87aca4c"],["/archives/2019/index.html","431955f4ae805cc2ecee78c590c8f8c8"],["/archives/2020/01/index.html","4127cdbdfeea58a2d1d66c45ec5125ad"],["/archives/2020/01/page/2/index.html","930e66f3b576bba55e1b4948c1aacedd"],["/archives/2020/01/page/3/index.html","52f2634bb33cc3b49fb969f2d88317dd"],["/archives/2020/01/page/4/index.html","c6226f46319e09811bae5f6395c095a5"],["/archives/2020/01/page/5/index.html","7002c8e3058479c26c4ef65fc308d9f6"],["/archives/2020/01/page/6/index.html","e5d90e3d5bfd76d591450b30b04be72c"],["/archives/2020/02/index.html","c3b3216707d39170c09be54b2d565ca8"],["/archives/2020/02/page/2/index.html","a40c9500a71bf0a6d4c076e11a95569b"],["/archives/2020/02/page/3/index.html","cc90615cd3eef52985348f6155adbd69"],["/archives/2020/03/index.html","80d0501248d9699f60a44793f5d81bd7"],["/archives/2020/03/page/2/index.html","4860ecaf594cf7a86886af5e2abc78ab"],["/archives/2020/04/index.html","3ae9f8c9dd207ab7851ee3f96867ae73"],["/archives/2020/04/page/2/index.html","dc6551e15b1689d70b92f7afb6e21e71"],["/archives/2020/05/index.html","f520db38d09083f20c5a1f0ba19dc8dd"],["/archives/2020/05/page/2/index.html","a33d0497bdddfa81d6e58651161bb6c6"],["/archives/2020/06/index.html","8bb2973aafac445ee4b08ae249f86456"],["/archives/2020/07/index.html","556206b20e5f95a702aa0069af42746d"],["/archives/2020/07/page/2/index.html","1217e9978a31a326364e8d7973049684"],["/archives/2020/08/index.html","119c646274d3522357a814bd343c8f8c"],["/archives/2020/10/index.html","f93a60aebf43e60163328a300f16ff59"],["/archives/2020/11/index.html","23d478fd8775c4e12cf7a9e0c3acb705"],["/archives/2020/12/index.html","412e26640156a18d11a9885b5779ad7d"],["/archives/2020/index.html","3142e39961c26112ea47bd69c0580266"],["/archives/2020/page/10/index.html","4eb85153fe0c510841b34a717e848cef"],["/archives/2020/page/11/index.html","44b750defb3f1eaa284772fdb588b3ad"],["/archives/2020/page/12/index.html","0abcc13feea45d151c24d4cbc3911ec1"],["/archives/2020/page/13/index.html","4ef26a9e65088d3d1efbb24bff69aeb9"],["/archives/2020/page/14/index.html","1e9c20acce9eeec2927ca0bd62531766"],["/archives/2020/page/15/index.html","b4894ce301e8eb295a70796799083dbc"],["/archives/2020/page/16/index.html","8a789df8269abbb016879d0775d2b96d"],["/archives/2020/page/2/index.html","54356f1dbc1c21730183b182806744d2"],["/archives/2020/page/3/index.html","3f72fbe36d11f9df449f261753b04499"],["/archives/2020/page/4/index.html","c0104b8b663fd55389fbcd9969894f99"],["/archives/2020/page/5/index.html","890dbd86bae69744f6f0d7507969a3e5"],["/archives/2020/page/6/index.html","e65770485e1b144afe0c78032a3d7650"],["/archives/2020/page/7/index.html","6c0ee9f5f5c292f831ee2c5b7a041190"],["/archives/2020/page/8/index.html","4a7b89aaeeb2c1bf08b53cfc72a22d1c"],["/archives/2020/page/9/index.html","d77e95a297de4d406b5091e079d0f2a1"],["/archives/2021/01/index.html","54b5bcc93c7d586b13934e6b6082c4c7"],["/archives/2021/02/index.html","faa4ea0fc6d03d2b5552d06fc69b96dc"],["/archives/2021/index.html","b305ab1dc7f791ee5eccb603de745bbc"],["/archives/index.html","e9e81fb95bbd4bb43296a2ae089ac287"],["/archives/page/10/index.html","cdcf9cc2ffded4e6753e7faf08c2e8e6"],["/archives/page/11/index.html","166a4e271b1c62517f479d83d21d8286"],["/archives/page/12/index.html","204876665a600dfa9cab9f9e273b38ec"],["/archives/page/13/index.html","3c65f9d65386d478659e79ecd92977b2"],["/archives/page/14/index.html","f0b6cd13d7b3b50cb06ff5d07c6fe1ac"],["/archives/page/15/index.html","cfded2d05250349fe5f9514b194cba0a"],["/archives/page/16/index.html","0487b064782a3750e6c3b00345b08813"],["/archives/page/17/index.html","0170125240be40a445f339091d8a1342"],["/archives/page/2/index.html","81976393fc5b48447c1fca2c240f8a29"],["/archives/page/3/index.html","bde0b9d9dfba47dae7a44d22ab232ed3"],["/archives/page/4/index.html","408981685935a4b1f7a3ad2c75a79bef"],["/archives/page/5/index.html","4a00436b5118d8ce74b23d073142a00d"],["/archives/page/6/index.html","10f5e557f07e54f740f7b199bcedce54"],["/archives/page/7/index.html","2fb39b47285122755f982b7a8dcd2f28"],["/archives/page/8/index.html","21c3294e914ae748e459e165966b78b6"],["/archives/page/9/index.html","ff15a1177327d1a1fd9403fdae61fe4b"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e6cbb1d21704080565527b8f215bcde3"],["/categories/Linux/page/2/index.html","929bb5ae70c571687e8755d66d422352"],["/categories/MySQL/index.html","b3c6128d322fa94350687f992cdcd2af"],["/categories/Python/index.html","941a082b15a88b9aedf7f1e3b760c1a6"],["/categories/c/index.html","9aa07704baa73a0f63f3cb4940838894"],["/categories/index.html","4f4ede2496330ad9e08cb7d332565e82"],["/categories/java/index.html","ab3b008db8530885b483b094a22997ef"],["/categories/java/page/2/index.html","2e4ec7427b43f73ece42ecc87a7ead69"],["/categories/java/page/3/index.html","b9f754e81feef5c0df4563eba4f38080"],["/categories/next/index.html","1cf56085be6928a2385da4c71daba103"],["/categories/stl/index.html","98944de0b9d24f61780b13c2275306d8"],["/categories/windows/index.html","6e2f2e82a8d43eed7acb2a73e3e120b5"],["/categories/基础/c/index.html","d1dbc138d4e946d27207c72eb038cc88"],["/categories/基础/index.html","68487ffeb3c005ed3e15d0c9b08c2a93"],["/categories/基础/page/2/index.html","1d90994f88a8f67f17ec75b71f0e4f14"],["/categories/数学/index.html","614882ce8b3ffd29de278de1951a6c9c"],["/categories/数学/概率论/index.html","931a38bc667695f0370de363076bc5d9"],["/categories/数据结构/index.html","198578386246ef2920e8a854f181fe46"],["/categories/数据结构/算法/index.html","db912f3f6686873bc69c6f50be0e8bb1"],["/categories/机器学习/index.html","ff61f0e668cc0835fdf7ed26f350179b"],["/categories/杂项/index.html","069c8a6438966d21a37fa440d93f9591"],["/categories/汇编/AT-T/index.html","293132ea41c7d7fc259944085b0a4775"],["/categories/汇编/index.html","9d0f8d1e38b265bd46220819c1264d2f"],["/categories/汇编/page/2/index.html","6b934ae175fa72e28deb7e010062f0ae"],["/categories/汇编/page/3/index.html","6aa2557d1d8abbb685d618c65727af7c"],["/categories/算法/index.html","6131dd03ff34c055dd45e516d72fafa4"],["/categories/算法/page/2/index.html","3c54f9c7ccd031c058485f49c3149ac0"],["/categories/算法/page/3/index.html","d5a381994b2012daf56784141bca040b"],["/categories/网络/index.html","8d23fb8cf1c9ba8915f682b390b6228c"],["/categories/计算机系统基础/index.html","96778d4e22428fbea16371e7501639fa"],["/categories/计算机系统基础/page/2/index.html","03a1f657a74fd7a0248bf9814fbb1ff8"],["/categories/逆向/index.html","0e27a34459b66d371c5077a6dd592751"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","789138bc5ab8c10670115115083d7b7d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","32b6d13926f18bbfeafc3ca9cc9d7c10"],["/page/11/index.html","6d5cdaff3c0505d087f1467f4ed72004"],["/page/12/index.html","c0c3e883f9901afe557efeb4ffcfcd35"],["/page/13/index.html","31e950a93c6427470e9b986490ce094a"],["/page/14/index.html","c42e7d8fca654494535dd1569c121279"],["/page/15/index.html","51f858d69709df78029f092173c39e17"],["/page/16/index.html","90f016b1a653c59dca94d1e33e15a29c"],["/page/17/index.html","e1c7b61d58f96507586e2cbb153b726b"],["/page/2/index.html","617258bf8e6bfba9c029e9cbc14837a6"],["/page/3/index.html","d0c729aaa3d264038fe501d6d3316fd8"],["/page/4/index.html","8c8f8fbc5409873817b6af3af416c749"],["/page/5/index.html","7da18eba0aacc172dd6d02249e8df1ab"],["/page/6/index.html","c70c99a28b07a76033e704751fe972b2"],["/page/7/index.html","ac4976cc1441cf45f7544228689e8697"],["/page/8/index.html","69750754036c7a8e5ea0c2109dc9e74e"],["/page/9/index.html","c7b22da8491e208f9fdf5bef3496e41c"],["/post/10919.html","c7843f68909a6799ddc0e0179bd7ad23"],["/post/11051.html","0f925fe6ce86b8ad1a6403105940aad5"],["/post/11306.html","c467ed48424202e2d0b6c3240041d73e"],["/post/11491.html","2fb0df206662b4ebc56c1466ff3c5bbd"],["/post/11799.html","fd33999157c82fda2cabded93a04b1da"],["/post/12334.html","c142e55339713e8bdbb6bdcc4b56bcc4"],["/post/1326.html","77c12640f98996df521a1189b687844f"],["/post/14379.html","99faaac736b50ec0a4d0bacd01094a6f"],["/post/14511.html","24216a0113f4586e623322fff08644d7"],["/post/15201.html","ea0122320fc072c73b1d61d8da1672ca"],["/post/15425.html","086d2b6d4ff0d663d23a28b6bc48560b"],["/post/16107.html","95886f24e3f5fa8d0e302196b902e74a"],["/post/16e2846c.html","5cde963ba74759fe193a3962cb2fa26c"],["/post/17862176.html","236b62357ff6888a05bbc4dda5232b40"],["/post/18431.html","b73b07180e4fab764ea16024848dc6e6"],["/post/18912.html","ff1cf4dc3bb678663a9fea0588fe38f8"],["/post/1b9c8662.html","dd9cc94eeadd3df80680b06aba2b85a2"],["/post/20198.html","7fa5a3cd9b1109dcc0be6b3829f832fe"],["/post/20ff5ccb.html","cdf7fd426f80187edeae0087cc4827c6"],["/post/21624.html","8dcb1e285a28fb34fd69df5e35976bfb"],["/post/2170659a.html","11211f7f4f510e2209deb64946d059b9"],["/post/22102.html","2b10dfc9937fdffbb2a1750c6ed8a19b"],["/post/22493.html","f5d372619f2678137a93bca8e4278a87"],["/post/235252ea.html","b4393c4fb0788e3679a4d49e79513fed"],["/post/25699.html","c0dbfe4afa609bebde0da42729c96f93"],["/post/2647.html","4063af1eec5934ac97ac3c35bca92075"],["/post/26477.html","af45e17c4dd60ead36f0f1510421b9e0"],["/post/26671.html","3da5bb1267e3395c448bdb45c34e2840"],["/post/26737.html","fa866fc865ccd46de52a787cf9bb6ca9"],["/post/27045.html","39fd9e3bb734f58f14ff80b3280eae62"],["/post/27621.html","195ae0aa16bc69164cd6ca6b18ce594a"],["/post/27890.html","427b8f3ccbe5906e059e7e80d6449887"],["/post/27980.html","45724aca9830cbc25b0282fa06bf2556"],["/post/280b588e.html","1ae9d3f30237a562e1c6cb364599facb"],["/post/28579.html","b02cf1067568abd6bac7b88481f6a279"],["/post/28877bf.html","4365b71d489c02a94c37b9c28f4437f7"],["/post/28954.html","0b908a444cbf638320469c6e1b102339"],["/post/29378.html","acea0860c7235c1f73eca8fb2e695c72"],["/post/29949.html","f67993e268e6d3b3fea51fbd3c9bfcc1"],["/post/2ae43b86.html","1ceb1db437c09f5ada9f69f9c3083596"],["/post/2ba82a45.html","53a91da6a9415352ebc8d3f7693dbe59"],["/post/2cad8b04.html","0879eda38fe594525e16646be0a903c9"],["/post/30072.html","a4264c416f6c69a8bf4b1bddcaabd73e"],["/post/30479.html","d2490df12fac008281ad54945b243cd2"],["/post/31a6b40.html","27278512f0ad0ae1ca68eccb2443d1df"],["/post/325cdbf2.html","73b3853709fd39badca266d251c8f207"],["/post/3319ed9a.html","df50bea1d32bcb6e6f196cb18600e856"],["/post/3320.html","08b02d2b5ca92bbdd831800e9b6bc1e6"],["/post/33cb1151.html","adc973e3df75fe8c6f5022651187ca2f"],["/post/34811d5f.html","d88656c4183d27e8432e019efb79edd7"],["/post/348d4e04.html","f6365662f9739216e2be573ab55a0793"],["/post/3526.html","82092160aaf1c7d056f222e1c2ba1aee"],["/post/35532.html","fc19aef76b3476cff275f010914362c8"],["/post/35848.html","c89a2a493088b4372c5581979e744041"],["/post/37318.html","ec684758c306476c2e4d01ca15b40026"],["/post/37663.html","cc1f90ffe3ae6e5df1429838cf0574e8"],["/post/38035.html","6d376cc7052c8ffe43f4be5490d6b8da"],["/post/38072.html","e9955d8329d9e19171d35a6567d0ef3e"],["/post/38145.html","68bca817bf6b0508dc310f3457eb1d26"],["/post/39968.html","430437bd79b397b320d5e582618ba204"],["/post/3de4bc69.html","65cf30d31f887a9f666004616a952e7d"],["/post/40583.html","8bc83478072ffa2c81aa62e52b041a4b"],["/post/40997091.html","fe7eea045f69fa0d7bfec48e25c99f70"],["/post/41129.html","7605ac91e1488b438517f84f06d3f69e"],["/post/41763.html","523f66f55e3910731787c9e8e631e746"],["/post/41829.html","555b56fe08d0301d7c23870fbdca8ed4"],["/post/41840.html","ec4f93711f573bc9cd6afa2dd8728aac"],["/post/41e39f2b.html","34b60cadfdb1bd2732dd3df273cf43aa"],["/post/43817.html","1e2f7fc69116dbd0187505f96f7fa39b"],["/post/43878.html","83515771525546db84999631132ccbad"],["/post/44250.html","aacbc8c86b46500166ccd3946f73ec65"],["/post/44336.html","a2b0eb6599eba9833e0cbbee7c53134f"],["/post/44454.html","259cdda59c7eed35ea6f7a5d262dce9e"],["/post/44487.html","b4ad184dc986a2abc45e043c0be9f7f1"],["/post/44914.html","ef469daf4d5e6edb0250a09d77330bac"],["/post/4551c130.html","96ab35dc5beb758e7b7982ce09591f47"],["/post/455a4c92.html","872b87c5c9539cb9cbff0b5fb00cfa1f"],["/post/46466.html","f6ca93b29e7ccb068a3b848067683ca7"],["/post/46925.html","b0dfb56055070a1b184fc7835c65c740"],["/post/47075.html","d0c5f9a9193abb3c85f0bf87d8b64926"],["/post/48220.html","481aed99b27f333d19b8628fbd9b3105"],["/post/4b1879e3.html","41faf27bb7a57a8234950e3e2ffe89ca"],["/post/4c720881.html","c95c54c4dbe8afea6782a211257d659f"],["/post/50daec4.html","af5ac56d178e6664c8bb0b472eeb1ce3"],["/post/51491.html","e01683367288ee3a3fe1f23eac5e7245"],["/post/51e63dcf.html","6f154a62635f8b4ff7ab861216ab7f98"],["/post/52078.html","e2eac2162d0d0dce5b8751da85b58bb5"],["/post/53677394.html","d435c68dcab6812f76277a0c07bfb707"],["/post/54300.html","11703ca362f3d84438c8cdb2951ad91e"],["/post/54612.html","b622861bd9b07e48dd9da6ddda5c8948"],["/post/54613.html","be465be51710ed4824f4f22b2b8afa55"],["/post/54708.html","0a58bb0bd90df73b050e33e4eda53eac"],["/post/54778.html","6d465b946ec17fdc875fcba6e60eb8a7"],["/post/5490.html","e9e6c325a53c1e4881b5fad186e5371d"],["/post/55046.html","e49ceeba88405af9e8c3e4a160dc50b5"],["/post/56929.html","da9a78a5e36675df8364e84f4a3b3321"],["/post/57339.html","00ad190e6bd3e66ee45eae60a72df8d4"],["/post/57449.html","7c7b0c66c3f5a3410d7d3a0a4431ceaa"],["/post/57453.html","ed94a8716af847b6fb827ff667abfbde"],["/post/57671.html","243ae947b8cf766cd27d192a89f44233"],["/post/58313.html","b62d034bcd9a21942f87e240e319d3af"],["/post/58481.html","47058de91524a72c08c4470cfbdef5e8"],["/post/58986.html","d4576e4650a37867f0657f72f58abd4c"],["/post/59431.html","49e4fa718f2ac7a77f31547a640191bd"],["/post/5951da65.html","b6b27ddfbabbc3e1373d24a5c10a78a0"],["/post/5be7e977.html","564dfa8965a4cb07639a3b5ec4f485e8"],["/post/5f9e4eff.html","68e5065380c1bac01b81e4194391af48"],["/post/604b49d0.html","e9d88c950cf6ad5588d8efb1e34dba9c"],["/post/61312.html","dc2aaea55261a0502e561ca81160d61f"],["/post/61738.html","f26315574c512ea0e241d5828a31e3a5"],["/post/61809.html","37eacd6a765ed0a317a604654d5589e9"],["/post/61eaf19a.html","3178eeed8d90847c830c060b103e1088"],["/post/63002.html","9e192cf182c88dc7077de84d283496cc"],["/post/63711.html","961856bf59f0a232c0949874bd04ca45"],["/post/6587.html","a61b47b78f6c9db55f82f6775fcff84c"],["/post/6589.html","842c1033f1c0e03333bb9e2718d666df"],["/post/67454659.html","770aaaa1edea2807028d41787e343684"],["/post/6880.html","230063a739fd11caab47700ddf30122b"],["/post/70263071.html","2d7316598204fe612cf6f43a14934132"],["/post/71038564.html","f5399c4361c4148eae6165ef26100830"],["/post/7119.html","f342b37b1c0c51339ca17b87bd39794a"],["/post/74e7fdff.html","041a30492f00fa26d28991f3054544e1"],["/post/7502.html","1f1a6d7b675090d119eacaa95bbffc16"],["/post/7564.html","a27f304cf7e5d2f669240021d8efc9c7"],["/post/766f9b60.html","13fba616b318d8f7bdf1ce0051a26411"],["/post/7ca31f7.html","21ced75eb263126ba7ea9399394d9bcc"],["/post/7d1c86da.html","5c4e52b8a9ff0c2548508f5cfc4f4b12"],["/post/7f3bcd7f.html","fb8e18ede8c0a8cea2bfaf75bf952f91"],["/post/8039.html","12a3e97c921d0551881789fa4ac8a238"],["/post/8050.html","d2f200587d147883f38447eeed3e7d0d"],["/post/8072.html","0528a732d3eceedf880984dde33e7b92"],["/post/8274.html","8fc8c605ff20728c756c6acbe6432745"],["/post/8372.html","691e394afd02d7899b5a8c8c02e25f3f"],["/post/8498.html","297f9963395e7adea12dd8a4b27a161d"],["/post/85b4e13b.html","8019dfc5196421668a9d859d8ad95d57"],["/post/912b2566.html","f948dfb1b12ac8b189c7dec2e87ce265"],["/post/9187.html","3b1b5060997df91880ea5f9fbe219a6e"],["/post/9197.html","aadb4716c1867d4c13f90976e682e190"],["/post/94ceb2fd.html","229fe0f3b2985b07c4ac77a96933db21"],["/post/95495db.html","3a9db5999050e60318df35844da7b157"],["/post/97246020.html","d7c03e55b5c92b771837ff6ed6bdb55a"],["/post/9954ba8e.html","427255864ce73aaca5ec1cfe15b3bb52"],["/post/9d855db5.html","8e67021ec3e45f45a74081c43fa91f4e"],["/post/a3a786d6.html","6f57e4d95f8256ab88c791e4d0f19a9d"],["/post/a444b428.html","e37e4b97a65282e78d60a2a7cd03fa24"],["/post/a50b8908.html","b9d6b3503d3481c9440ee65cb7e77701"],["/post/aa1eade8.html","1a7b049c3bac7f38b1190b6679b66cfd"],["/post/ade8c6d6.html","1408d5ff01e0c7801c8c6930d8095a15"],["/post/ae8362df.html","916ee44941cfdc2badb1b302e9f7f7d9"],["/post/af3eed3c.html","7cc40c5a354046fbebc424f73927dc63"],["/post/b4c1d206.html","f9fd5516ef702de4714bda39862797d5"],["/post/c82a1c99.html","7ed93f032444fe4fbff823526d2d8510"],["/post/d213fc7f.html","154c3c58d1b812c1608c188653e17b84"],["/post/d431fab4.html","9382ec04d2ef20a565f305ad90e89634"],["/post/d5381517.html","1a14943e8623b3cfa9e496dfc80339de"],["/post/d94f88de.html","d8300945365f131a9f27279576de4b2c"],["/post/e058ffd8.html","c76b1d6132c66d52d20799811704edfe"],["/post/e0f8cb74.html","8019ea3815d057c23fc85f33e1378a51"],["/post/eefe591f.html","12940d1055d2160279dd4272753872b6"],["/post/ef296a07.html","5ea8cb86608c2b2d72c73ad6050810c2"],["/post/ef3a3fcc.html","ee679661c351e76649c778b879308869"],["/post/f201f9fd.html","25e48cc712fe92ae9295cfb35cd5fff3"],["/post/f79e4123.html","6d7fa6e802585c7056b0f8a21d6e219e"],["/post/f8648a1d.html","ff1c74e83300948aafe95b098bb88704"],["/post/f89cb603.html","3913004b77981463c9a20bfe55766172"],["/post/fa288682.html","d968e7cbb0d118470d6d38bc41fb2380"],["/post/fb98053e.html","37d424a2e84c9eeb54039d36aa99e07b"],["/sw-register.js","aed3f53fd8153a0c864df85bcb040301"],["/tags/AT-T/index.html","c0053135d9bb87ed30adfc5e692d28f7"],["/tags/index.html","e4008a9ca75277e9cd7880cf11ee19bc"],["/tags/动态规划/index.html","d2b7e8c1079eb4a71be9e6b0f944eead"],["/tags/字符串/index.html","795d71855ddc412a01bb2489cec1559d"],["/tags/字符常量/index.html","6767cd42d56a479b9aabafec11b0b62c"],["/tags/快排/index.html","86cfb75c00d31a9d85b77a40c1603511"],["/tags/排序/index.html","b03bc0374c9bb7c6f3d0dc0019ad9bfb"]];
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
