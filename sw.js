/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","2e7ab4478267c646aca920a745f5a7aa"],["/archives/2019/index.html","d0237c527886395a2014d87cf34029ba"],["/archives/2020/01/index.html","4b502aa25929169d249a39186c22aadc"],["/archives/2020/01/page/2/index.html","2579d8fff3e1b387a74db807562bcfe5"],["/archives/2020/01/page/3/index.html","b453025944ac129edc180f60832b70d8"],["/archives/2020/01/page/4/index.html","8fe0dc43d4184362fabb59ee0bd5bcc4"],["/archives/2020/01/page/5/index.html","35e4683c5853446820393d6366da4a6b"],["/archives/2020/01/page/6/index.html","0c26cc9e4bc983655943dfe4d124e287"],["/archives/2020/02/index.html","14d98724aa97cdd51789d2f10dec125d"],["/archives/2020/02/page/2/index.html","9a1b5614595b48efdd2176c92592cecb"],["/archives/2020/02/page/3/index.html","3c0422301cf3e3a6e64536156a453b2b"],["/archives/2020/03/index.html","d1c82418bde759c051dd287ca7ce3f80"],["/archives/2020/03/page/2/index.html","8332e72838b7a2c6260b61eb1eda38e9"],["/archives/2020/04/index.html","c35d32a7f03348f9d07d4dc41803f0c2"],["/archives/2020/04/page/2/index.html","fec80d002fbcfe5c7de62894b9f34bef"],["/archives/2020/05/index.html","73818a3535f745e9626c0216b5c311cb"],["/archives/2020/05/page/2/index.html","cc803a74c09a77e4f1f732cdb48f9871"],["/archives/2020/06/index.html","e8fa20424dfba8366577adaaa7092810"],["/archives/2020/07/index.html","1b9e153db248054178cabd605b4da570"],["/archives/2020/07/page/2/index.html","f5c051ec7091cdd8dbccb644e2b37ada"],["/archives/2020/08/index.html","3502ec26b26d66d497ee3e9cf9e4001e"],["/archives/2020/10/index.html","976af6a191a2903b92473b803ca8b8d1"],["/archives/2020/11/index.html","8a81fd3a64c1527f8e3175125c2cc1b4"],["/archives/2020/12/index.html","7bebab22b365b35b14e9206cde046b24"],["/archives/2020/index.html","6504f16e8738acf7a4a1507a1edfe626"],["/archives/2020/page/10/index.html","fe1a1a288171dd04664de11729647c5e"],["/archives/2020/page/11/index.html","0228786069f964b068500443ee827985"],["/archives/2020/page/12/index.html","65e043ddad36465dca313fc2b58a22a9"],["/archives/2020/page/13/index.html","978f99ee1b56c65d14d22f94e777629e"],["/archives/2020/page/14/index.html","10f0130aa74849e03fd6f56ae08837a8"],["/archives/2020/page/15/index.html","0e71c4a258a6b8a1eb079bf6075423e8"],["/archives/2020/page/16/index.html","74e3359ef9d427bd5840e0e888995617"],["/archives/2020/page/2/index.html","cf14f5ddda8a72af3b3e65818867437f"],["/archives/2020/page/3/index.html","c73e867ca06858c5688326935f9eb678"],["/archives/2020/page/4/index.html","c81df9c89fc06ec7d13a719180be3153"],["/archives/2020/page/5/index.html","181923f1945d13d5ec0aa4fdc9826a3f"],["/archives/2020/page/6/index.html","5f9f2af1e1b87aa96651be12fcc0b095"],["/archives/2020/page/7/index.html","efc2d06df8298df9dcbd44adc70b6033"],["/archives/2020/page/8/index.html","84742b1719328e1f99842fecb7cc0bf9"],["/archives/2020/page/9/index.html","45e8d37c6ca8aa961077ca4933a88945"],["/archives/2021/01/index.html","264d430cc11f55d6a323cea32418c30a"],["/archives/2021/index.html","6602298c42cdd63c88713aa9366fce1f"],["/archives/index.html","3dbb68aa5008b70889448b0196b638c8"],["/archives/page/10/index.html","3e154f3d2715c7b21e8803382cd8a56c"],["/archives/page/11/index.html","ab0bc12c9434e34bd0a14aca15fe70cb"],["/archives/page/12/index.html","fdae2623d43565049dfa47a59abad651"],["/archives/page/13/index.html","b120a0a9820f7d0bb4558bd03d15f341"],["/archives/page/14/index.html","b399411f74e38b8e6115c5d37b4a84b8"],["/archives/page/15/index.html","8b7cdaa14f9e7469997d826e0509d302"],["/archives/page/16/index.html","b2cfd492ffe7d017f8cb1635f3e165cf"],["/archives/page/17/index.html","f9ce7c0fe3a0347d00ffe2835a8819b4"],["/archives/page/2/index.html","03358a9356103ce36f6848c136168082"],["/archives/page/3/index.html","afca318d74d14e999a92c3c6ed8dd5e9"],["/archives/page/4/index.html","1a29e8bcdb3d5f8ea509cab5946c0207"],["/archives/page/5/index.html","d74a8f6a5597e0cf4811e1e10aa6b313"],["/archives/page/6/index.html","e60aa6aba0886212d91082b7e122ddb4"],["/archives/page/7/index.html","97186dc85ec9b3db5331f7bbebce5d29"],["/archives/page/8/index.html","a7a0d0ae4efa5dcd3d62a10080fbc994"],["/archives/page/9/index.html","ed8e63ea6dd5a36fe010c140a6653d44"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","5aa0a3aed4b84a3551de772e3b8c7500"],["/categories/Linux/page/2/index.html","0beb001b645b5ed696afaa4e08be0029"],["/categories/MySQL/index.html","c561dab94db7149431f62fef58861e3a"],["/categories/Python/index.html","f3b6eb8a6d9e3ec4ff7aa425ab229ee9"],["/categories/c/index.html","03992d1db42b0b2f90dbeffc1479b2cd"],["/categories/index.html","64209d7b8910fe25355eb94361e47448"],["/categories/java/index.html","1d6ba2ba73ad8d9a84b8d45755de2c8a"],["/categories/java/page/2/index.html","5ee69acc23c588b2d6cd5230cc66e304"],["/categories/java/page/3/index.html","9004f57ca5e6fbba8396fa2ed814d3ac"],["/categories/next/index.html","66939c3dcf5e0f59ff42cf29e2713ab3"],["/categories/stl/index.html","2f82b91fc39f6bf73da3b6eac054fc6e"],["/categories/windows/index.html","3ee485cf6c459540ec163f5c78410579"],["/categories/基础/c/index.html","77323327f85f65d2e820fd65d65bf6eb"],["/categories/基础/index.html","f5b18920c7c7d378c51e9d15d7178833"],["/categories/基础/page/2/index.html","ebcda1f01608e9d93f17ab8f956c1b28"],["/categories/数学/index.html","abead4e706c52de638a7825ac9645c2f"],["/categories/数学/概率论/index.html","ead277563a9e85d7231d4de71e38bcd8"],["/categories/数据结构/index.html","7f6c35e7c5b882cc55599a70b508e4c1"],["/categories/数据结构/算法/index.html","4ed2e7667cacb5b3847530dd2a408d48"],["/categories/机器学习/index.html","92f42e421d319202a500fdecf117e6cd"],["/categories/杂项/index.html","949a5f0f17c8273dcbac752891384d32"],["/categories/汇编/AT-T/index.html","e384e04d124798681cdcc92bd1925e0c"],["/categories/汇编/index.html","e41be4506b8ae3b172e318c1d90705f7"],["/categories/汇编/page/2/index.html","a7c5befee2b1db9e5559fa34dbc018d0"],["/categories/汇编/page/3/index.html","b076d0157c5097e0121e4c3f37839a07"],["/categories/算法/index.html","0b3ce365762790173a694f341088d77c"],["/categories/算法/page/2/index.html","fc1b7ba70940d006d0db580717e06b4a"],["/categories/算法/page/3/index.html","d3b1db18ecb5a3ea4b82fac0b2aaa58c"],["/categories/计算机系统基础/index.html","ecb076cc9520286259989ca4b8f6c7d7"],["/categories/计算机系统基础/page/2/index.html","39ab529eb17a947d1d14c0855cf7cb0c"],["/categories/逆向/index.html","5ef3538f72694d7a54b0806841eecefb"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8a0dde627f64bc3d86faf6d71c413d00"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","f45781ed952dc6cbb6e4c1bbc4b92547"],["/page/11/index.html","c038e8f98f4a35869d0fd4df89e31be8"],["/page/12/index.html","7097697c3b0862b1b71f569fc54681a3"],["/page/13/index.html","43eee359fcd785a7eea5094a6112459f"],["/page/14/index.html","a7c6f71ab1bb4d0d2fbccdde17cb7dc9"],["/page/15/index.html","8737d5fc7df399c1cf130c1595a0828c"],["/page/16/index.html","02ca567e37d1e30ed65a07f6e501189d"],["/page/17/index.html","8ecc81f1431ce517624f89a284c1a656"],["/page/2/index.html","b12410f3a8fe55bcbc4ebcb5e102ab16"],["/page/3/index.html","c9cb0f1fe842188f92726d51ae19bd25"],["/page/4/index.html","4b0cb5477bf14b046ba8df0a08f4748f"],["/page/5/index.html","710f82b14b9c64baedea455dbd0bd020"],["/page/6/index.html","4c5d7e7ab238a73e77fcb29ae3fa838f"],["/page/7/index.html","7020d830271b30a1157fcdb53ade3340"],["/page/8/index.html","9ed78e56f0de7469b10d255758d95291"],["/page/9/index.html","ffb37d0df365dc3149b08cf9f2d4e998"],["/post/10919.html","c035b9012dcde700be485891f261e1de"],["/post/11051.html","7f8ad5d84dc45e5a645324c2f0c46324"],["/post/11306.html","e04348973f9766d0739fa9bb80905424"],["/post/11491.html","04a042f453e3a01ead038b4860038939"],["/post/11799.html","0e8742328809c69bc02ac8e18143b00e"],["/post/12334.html","40ac260d6c7a309f58f29a416f26ed48"],["/post/1326.html","0ddf8f9998b10fb0b717289219cd0700"],["/post/14379.html","123503ad1734791d7bc5ca6c152798db"],["/post/14511.html","76456b24880b6847821c85c82c4851a7"],["/post/15201.html","7b7a5190c159d9c7c7a04193b657a631"],["/post/15425.html","931320d13c0cbd99ff152c4be0dbc168"],["/post/16107.html","a77973d129e5e520266eb3fc9844befa"],["/post/16e2846c.html","d97a5409f50037a02c91a22d13b5b2dd"],["/post/17862176.html","4272e67e2e83d4265056edb56a1c1e99"],["/post/18431.html","72c5ad84489f547228398eef3378fe6f"],["/post/18912.html","b541c1c0592da444f1c430728eeb20d4"],["/post/1b9c8662.html","b8c0a47c0731e5b379b622838f79182b"],["/post/20198.html","d4b9f2a1d46246fc271e5161472b4e08"],["/post/20ff5ccb.html","b4388a3b5eace503931260d62fa0647e"],["/post/21624.html","287566a5783b1e2493436c3605e22fe2"],["/post/2170659a.html","53980422eb5c69e1c07fd0167e44aa25"],["/post/22102.html","735f52bf8355e8aeb007bc8a6eb83b17"],["/post/22493.html","9ddc99ab11eb08880242a593b0e1598a"],["/post/235252ea.html","fec620bcb9ddc4f8cc910de517588b27"],["/post/25699.html","c4122ae86e5c6b22d1b98d0b2d355bf1"],["/post/2647.html","9f92af4c806ff4f2a24a069244094da9"],["/post/26477.html","2d70314d56f94b293fa7a73258adf743"],["/post/26671.html","e8e71be15c4f81425c9c7b64cafdb9b7"],["/post/26737.html","d65ac095ad89fb5b91c84ce827c05eae"],["/post/27045.html","ca371302f566a901d8970c99bb18786b"],["/post/27621.html","f2da21fd237f7c6eb9a2e21af3895338"],["/post/27890.html","32c6582f93de2a0cef4ad0e711f5c0c9"],["/post/27980.html","307987bc8eda31ced6a7cd6e8ce0a4ce"],["/post/280b588e.html","0b313c5f899614fac02c795dac7a9500"],["/post/28579.html","3da7cee19012d234fb6ae628c5e34890"],["/post/28877bf.html","e6ef2a03084c1693bff6b711694bf826"],["/post/28954.html","cc00959d11540a278fe6c44ed2b1a624"],["/post/29378.html","bb65e8629bafaed6f9bb869bf8c2b9de"],["/post/29949.html","e6401d6ffb3a50e9e022148bae30dcf9"],["/post/2ae43b86.html","a717bddcf1b9d9d60627a8fcf82cfccd"],["/post/2ba82a45.html","4b6e969b0954b87a49b3dc306cd594e5"],["/post/30072.html","bb9b514a2cec547eb86be4fadb971f9b"],["/post/30479.html","c6b32528281976b53c3154dee9f0dd71"],["/post/31a6b40.html","129bfce60f8bdefe39c1d38d93a05281"],["/post/325cdbf2.html","c932a0dfbd2a4b0dfb35ec12bc469428"],["/post/3319ed9a.html","ffe23d040b747ad30d132723b0ac0d37"],["/post/3320.html","67479a712b8f34dc87a7688ee2b235b0"],["/post/33cb1151.html","ce8d3e5b2d1d3f62b980670bc29e0e14"],["/post/34811d5f.html","ec40d607f620389fd71cdcb3273a0fcf"],["/post/348d4e04.html","d19eeb21fb40843e42a5d87fabad90fd"],["/post/3526.html","ab59655c33beb7a2eea32eeda4b54668"],["/post/35532.html","839ef6942ee04bcf46d5f20ce063c8de"],["/post/35848.html","edd134288b3312db497cbf1b8e8000e9"],["/post/37318.html","cb5f62ab386f83088b8b5de4d4831945"],["/post/37663.html","e920ff1eb9f9169bfbec750667a23827"],["/post/38035.html","bc493821d239ff21f5274a059ac6bc92"],["/post/38072.html","2a937b9b892f1efacc57cba452f18bf2"],["/post/38145.html","ba882a12f4e6db596d99d32a99157766"],["/post/39968.html","391e80648c58bfa587fbb738760fe108"],["/post/3de4bc69.html","22abc06259d338cddfcdf1d1e44f2f2f"],["/post/40583.html","2931101fc837f56e563ed14a605971ab"],["/post/40997091.html","3bfa14048f39b5d4ae8a1bb059d99e70"],["/post/41129.html","accaf62473ac79968c4314d2434775f6"],["/post/41763.html","371bab52a266e0d263ba0a34cf6288a2"],["/post/41829.html","7d6134dca20a051af76e3c83f8fed212"],["/post/41840.html","3eccd2523c65fa73a27d8b2979d5c458"],["/post/41e39f2b.html","5c903e1788e0baf11975c3830763fc6b"],["/post/43817.html","d1f1f15e23a053ebbaef18b2357a3227"],["/post/43878.html","a8f139ee83496ef2a2402ce43dfdfbf8"],["/post/44250.html","a7a73ef7bd5307e1dd811d8425727811"],["/post/44336.html","018827128b49a122ed80d063b8ffec95"],["/post/44454.html","586e72d3cdf311984e1559a0a1d5ce12"],["/post/44487.html","19d5656c1989ddfdf3cefddfaacd8e02"],["/post/44914.html","313c7de2425f3db576c72ff3ecbf2c4e"],["/post/4551c130.html","596998f5c3074f58436bce6dcb5a1883"],["/post/455a4c92.html","10ee6865f4d02b3962e0451fb0f74416"],["/post/46466.html","d162f18569440a985f76fba27967c116"],["/post/46925.html","e01b5ef5be8f7386144e4ba5dcf8220e"],["/post/47075.html","cdc0d5c6f63b87f06f858bf42f2f4f17"],["/post/48220.html","172e0d63cb25435e8c3ed948b2049d64"],["/post/4b1879e3.html","baadb35a2f13da6cad54474830b21e65"],["/post/4c720881.html","35a7dd7e38bdb65fdeb20928fbd2403e"],["/post/50daec4.html","c931ce397f2bdcee4cf8df99f5bf679f"],["/post/51491.html","642976cc90c2874cd54aeef0ab3f0a81"],["/post/51e63dcf.html","f639f89fa5cf511372c457fbaf3cfa4c"],["/post/52078.html","3a15f547a96d9f783f6d47ce64a3f357"],["/post/53677394.html","8e8ddb845e7f1fbffe9eee006411d64c"],["/post/54300.html","c44921c48aec99255d2e860d70cb7889"],["/post/54612.html","79992d36a2927fda7d0b88d983285fe6"],["/post/54613.html","111268e65c2437cbbc8f54bddffe156a"],["/post/54708.html","c71c87330999ddb33e667f136b0f9046"],["/post/54778.html","4e9fb8caed233195071b31a10de1d36a"],["/post/5490.html","72caf73e84d36949b5fe51790156a195"],["/post/55046.html","bb8edde1b7c3a2e2913b72dc3e82e30d"],["/post/56929.html","951a7f954942cef41d3a9b018c19c701"],["/post/57339.html","d9b85ea63db2512623cb471f29907d90"],["/post/57449.html","fab0352ff34ea6182fca2b9dbdaecfea"],["/post/57453.html","42402f3ccf93fe6e556a7454f72f310a"],["/post/57671.html","845aaaa0367f90a45cc7d5bf356a492d"],["/post/58313.html","ccabefa7a18579b18fef67d7833ccd36"],["/post/58481.html","fc1b19d34db07ff1acff86ecfd30f6e5"],["/post/58986.html","5d7a18b367bf32551f56039afd7eaecd"],["/post/59431.html","1d27c44daa91f7701f72c3f68bae150e"],["/post/5951da65.html","c4c7899dd328eb33c8e1168a30aefd2e"],["/post/5be7e977.html","6f30af93c76539d280aa639649f1765b"],["/post/5f9e4eff.html","92c0da08e63e309b990e3b35db822469"],["/post/604b49d0.html","2b7f87872dd69814d716330176e33389"],["/post/61312.html","1865d7d8763ce18d09ba27ab63d98a94"],["/post/61738.html","4dd47bce4b017aae8c5ff3c4e41928a9"],["/post/61809.html","c222717e06431a431d01e68b423d389f"],["/post/61eaf19a.html","6b3fe89787a5d15106f4910c2faa23f9"],["/post/63002.html","08e613f2feb402cc92b952bc7cb118de"],["/post/63711.html","d092336b664653ef3e9380f0dd20068b"],["/post/6587.html","03cf9ea1fe5645aa5d275c410d74ade6"],["/post/6589.html","bff4a54c5ee0bd6d05d78ac1a196afaa"],["/post/67454659.html","06849e72f7a536bc30e61ea5c7941e91"],["/post/6880.html","7c521f1993cb1969ad4487f92115cc16"],["/post/70263071.html","4bb7e24908baca69e3bb7b07c18365ca"],["/post/71038564.html","3667735b3c87e97ad16ffdb2f9324b2a"],["/post/7119.html","0c6fdfd91caee01cc20365d724da2785"],["/post/74e7fdff.html","543b1b72b2a27ee16e58fa14893c020a"],["/post/7502.html","5cd559930162038b0d8dabd85061f0ee"],["/post/7564.html","8775101406c78b0137d11983c28ef4c8"],["/post/766f9b60.html","51d9ec3c67653e8a74a372de5ff56e80"],["/post/7ca31f7.html","1924203ea4719852a10669bec51fef52"],["/post/7d1c86da.html","424b27a3dcb44e7fab3ded06b1e5c8c9"],["/post/7f3bcd7f.html","b5fd4ac1b557af9356d9491c4bb9edfd"],["/post/8039.html","e4cd9a98cb9b62a062ea640d71cc81d8"],["/post/8050.html","b5009989ff6444fa27839aaf4581e1d8"],["/post/8072.html","a1916673e5f344a8fe978b129e0c1a28"],["/post/8274.html","0d7427ddd4b1b5b21b8dca86027eac38"],["/post/8372.html","c1d8466c2806c7ce9c696c06acb5e9d3"],["/post/8498.html","a70434c089d944545bae72a9e8382847"],["/post/85b4e13b.html","80ee0d642b20e7e7070fe4603c8ecd77"],["/post/912b2566.html","9047ca5b245c4386f20d81b84a818065"],["/post/9187.html","bd0c2416b8a2d2564e7408a507287d2a"],["/post/9197.html","33d36491f4a29a3804c5074533713e41"],["/post/94ceb2fd.html","4abfc74c5aed6c7c824b97dbcd643a66"],["/post/95495db.html","10ebc5a5300ed4c2324d9f8e14c799dc"],["/post/97246020.html","e12f6310005360e787c4d4e5d4d0eef9"],["/post/9954ba8e.html","6d6721cc529d4ff949770be3cf3bfe3d"],["/post/9d855db5.html","bc47ae5012b257f03e38b80ea5529eca"],["/post/a3a786d6.html","c8a4aeeeda0d7c2dec062dd36c6c3c2c"],["/post/a444b428.html","dbf584a0e0417c196189d5e52ff37b66"],["/post/a50b8908.html","b049150e04c5c955288785033671b383"],["/post/aa1eade8.html","afe9b2c9be8754d4f493307c7e82196c"],["/post/ade8c6d6.html","6d7b13156f5804552c0c26ea9bf0592b"],["/post/ae8362df.html","1db30e2a9c04a0537338cfc95c2ab091"],["/post/b4c1d206.html","2bf223037521960d2a881789eeed7a73"],["/post/c82a1c99.html","ac345ac8f4298002caec621c3f0a94bf"],["/post/d213fc7f.html","f11d5e53ce514d11ef93db6214e7d81c"],["/post/d431fab4.html","1c09f25e4c25aeb650fe33d3d9cc28ff"],["/post/d5381517.html","a7167389fefbf7cd6b66f55037eada9c"],["/post/d94f88de.html","0d61c7d436f80382518042d2cfce69e9"],["/post/e058ffd8.html","2346c03db3959fbf40e1651fc6771115"],["/post/e0f8cb74.html","0a3c08210af724cf5cb421e71efe52f4"],["/post/eefe591f.html","a9c2e873a2429147310192328155e586"],["/post/ef296a07.html","05aab91dff1b7829b944ee7018854234"],["/post/ef3a3fcc.html","888e78ca6ae671be669d697855c6cb69"],["/post/f201f9fd.html","f5261cfedba89e1477b1c7fb5b303b5f"],["/post/f79e4123.html","cdbff20b61076a51fe0a0704bd51a4a3"],["/post/f8648a1d.html","d8cafa2f566bb9e97c477bb432747e19"],["/post/f89cb603.html","298ee7c33652ece43229418a6d83f9eb"],["/post/fa288682.html","f6520c593b8b7139d981eb8c7e91df51"],["/post/fb98053e.html","7a4c414ae7687f8c7a62c9b0c73e0e6f"],["/sw-register.js","240c629dcded75b187672dfcac5d2947"],["/tags/AT-T/index.html","f7db2aa7a282b36cf156aaae7d8ec602"],["/tags/index.html","e24de87577f45f5b4544cf76e7d85847"],["/tags/动态规划/index.html","c1c2c7a115bfba76fc959b068f10b0eb"],["/tags/字符串/index.html","79d1a9d2f7644e4f6a29bf361de6abba"],["/tags/字符常量/index.html","581d98faa72cf6a841692f4db1e4f257"],["/tags/快排/index.html","001fb2c3d8a34f0909e7db6aa1574f45"],["/tags/排序/index.html","ca4105b95dda7138f62817a89db4bda3"]];
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
