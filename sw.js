/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","301c78c55abd15ab6ad936f4e380807b"],["/archives/2019/index.html","419a31d5cd80860898e143928489001f"],["/archives/2020/01/index.html","1033e4d554e3dd13ff3edbc57cf17145"],["/archives/2020/01/page/2/index.html","d21db77855f986fa9c2ca6e8b68ba12b"],["/archives/2020/01/page/3/index.html","69b91d62bdda62e7e02081a3f54a5ba5"],["/archives/2020/01/page/4/index.html","08dd3ccf088d0cab7e724555afafd7a5"],["/archives/2020/01/page/5/index.html","1f77d9dacef9fe52a3d83a220ce32992"],["/archives/2020/01/page/6/index.html","f853d57516e18fc83b5c8fc12582fccc"],["/archives/2020/02/index.html","146ef1af9791754dd2a00a2e5e3bf65f"],["/archives/2020/02/page/2/index.html","5c5c1f41d0836135199e301cf1ebc19c"],["/archives/2020/02/page/3/index.html","760c7b21ecc7039c7130fd633d8a6a24"],["/archives/2020/03/index.html","8cdbf518a7bc3e71c9b788e3dca78b2a"],["/archives/2020/03/page/2/index.html","42934128abfdb740a60a4cff8c32dec6"],["/archives/2020/04/index.html","f668c7f46869af4bccbfab3d4fa6a1f8"],["/archives/2020/04/page/2/index.html","5b1d7bf3348568de11977f23db7a1bc6"],["/archives/2020/05/index.html","81073df2d37085d5299c7910c2f0d7eb"],["/archives/2020/05/page/2/index.html","ab5c858abe05ea6425897048dce10dde"],["/archives/2020/06/index.html","a4eda25c2240691356914c9a8c253dc2"],["/archives/2020/07/index.html","34c50a71c2af68ca111d6c68976717e1"],["/archives/2020/07/page/2/index.html","e258bef94f5733394fcf0a3bbf3ab30e"],["/archives/2020/08/index.html","da1802abf3b0171ad81257e3d02f606c"],["/archives/2020/10/index.html","5d51c057344c5482753ec470764a3ce0"],["/archives/2020/11/index.html","dffab25f18b70b9cc572c04a5addb4b4"],["/archives/2020/12/index.html","9502b61b37390c3c46ff7dbb5db3a88e"],["/archives/2020/index.html","1193aee4adbd403f4f2e38a5ac959299"],["/archives/2020/page/10/index.html","2bd7ae60ec03990d02a69b0a3351e6df"],["/archives/2020/page/11/index.html","419237168dd3f1391f97f271acf3ccbc"],["/archives/2020/page/12/index.html","3fbffe2b306f7ca095679ce01093ed83"],["/archives/2020/page/13/index.html","19af66ede449172b3d01d3d6506e5140"],["/archives/2020/page/14/index.html","50dada31edbea14c46281840ea44c6f4"],["/archives/2020/page/15/index.html","fe4fb8a1a44a3aef7db6d29737dd441d"],["/archives/2020/page/16/index.html","dddd07e661fa86f155f321c9c11ad9d4"],["/archives/2020/page/2/index.html","4e7bcd6b1efa4724129acdb3f2017cdf"],["/archives/2020/page/3/index.html","bee07d49c5e85aaa98dc1812455ae1d4"],["/archives/2020/page/4/index.html","d1608d8eabd763ca22b633d6d0e07435"],["/archives/2020/page/5/index.html","5db3976f1c2a6a668c4aaa3cce2d7b27"],["/archives/2020/page/6/index.html","16ae938bb78eb3a1c94eba91a4bb1d23"],["/archives/2020/page/7/index.html","9ff170e8df2d9897cfc1a51ed142dbc2"],["/archives/2020/page/8/index.html","790fe1f2021f65046ecb031c3a8441d3"],["/archives/2020/page/9/index.html","72e9ec2793d667a1797b93f8681b5b6c"],["/archives/2021/01/index.html","f193d1474c6fee3904dd728f227fc4c0"],["/archives/2021/index.html","2fbc3db590c3ced687f4b82f12a0ef0b"],["/archives/index.html","07fb7755ebfdf660a4cffc0606e6ad43"],["/archives/page/10/index.html","025c7b84402a180cd427304c621ac749"],["/archives/page/11/index.html","f67af9ce6184582be57a9239c3410f80"],["/archives/page/12/index.html","43c1e482499c9be722f849f9c2d8792e"],["/archives/page/13/index.html","b0c4003780363c490f78c4845c452b9d"],["/archives/page/14/index.html","911e6ea85a44f663356b2ed0a8f12994"],["/archives/page/15/index.html","8f61a97fa2ccc387c933abb1dff719fe"],["/archives/page/16/index.html","d9310a48a75e0c399aa2f4fd7e96e24d"],["/archives/page/17/index.html","139ba4ce1e3cba854c38d68384bbe441"],["/archives/page/2/index.html","ed8f99019eaa2a79d49744bf53acae1f"],["/archives/page/3/index.html","4995e8ab7ce88ccb478cea5ffd0a3889"],["/archives/page/4/index.html","78255371fc88541e58c3f429d09907fa"],["/archives/page/5/index.html","df943dd7e2fb8890735475c2a00be1b0"],["/archives/page/6/index.html","d24ee430e9c8f5b40df213785d3b7f83"],["/archives/page/7/index.html","ec3bdd3b5ecc35f4f633241cc161bca0"],["/archives/page/8/index.html","1be85cfa671b5315e969d6fb6ac82f3f"],["/archives/page/9/index.html","ae6111e586cf75258551d3a12fea9f7f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","2435c8ba485180db622ea8c33a162524"],["/categories/Linux/page/2/index.html","d0fb1a7f7cb92eaa0d4bf1358d911920"],["/categories/MySQL/index.html","2d289750fbc021b2733494b8a98d0a30"],["/categories/Python/index.html","b0fb03b540ba2e7b3465577f64359c72"],["/categories/c/index.html","a3f6a379fae3fc49aaa7a520f8214fa2"],["/categories/index.html","76b8fed093286ce5cd3df020ee1b5ff6"],["/categories/java/index.html","fe02956168d0fceb9e9168f7db370102"],["/categories/java/page/2/index.html","32268b437358724ac364a5b56eaa2c8b"],["/categories/java/page/3/index.html","fd7ec05242fb8ea4d81cc2ab243b8b67"],["/categories/next/index.html","d7159faa650f11e3492a09d53d65be81"],["/categories/stl/index.html","a388e778a6b63197f2f40b97f2beac74"],["/categories/windows/index.html","e4ae5c3e00fa412b222ddcf79aa224ec"],["/categories/基础/c/index.html","612cf95a9a07960d3334ae7d96ec9f97"],["/categories/基础/index.html","19211e4fe1330a83b46bdff08dad0e9f"],["/categories/基础/page/2/index.html","dc3eedbdcc5d9954e477061fc75e6a9a"],["/categories/数学/index.html","d4c8dc20f2ec687bb0b85db9aa0d0ce5"],["/categories/数学/概率论/index.html","2da028ffabfaceefc1761e2ffe2f6e15"],["/categories/数据结构/index.html","8c33ea5ca785b5b35f4c68b31bbc130b"],["/categories/数据结构/算法/index.html","5e79f90a57bb228a713302039322cb12"],["/categories/机器学习/index.html","28012b089f541f738856372d08521834"],["/categories/杂项/index.html","4a4dec8e15843f79f157120060326514"],["/categories/汇编/AT-T/index.html","7c9f4c23d66191a834f0cd030d7eef3a"],["/categories/汇编/index.html","f88baf9cc29015fde48e8a7ac426303c"],["/categories/汇编/page/2/index.html","3e5e6963e7d33bd84a1815859564d19e"],["/categories/汇编/page/3/index.html","18832982264d7af3dd6e8da4907b3cfc"],["/categories/算法/index.html","f7a77c149a516d02e1e3bec6232586c9"],["/categories/算法/page/2/index.html","38d24d1fcb505f8948f1a19af25183d5"],["/categories/算法/page/3/index.html","6cedcedcca2a5cdf02906be110883e05"],["/categories/计算机系统基础/index.html","c2a4f4555cba92e639d18e1d334936f7"],["/categories/计算机系统基础/page/2/index.html","01e9b1563fa826b8b83c043642cb9c6d"],["/categories/逆向/index.html","2d8916a6dcbeaa6a17eb41b385c145de"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c10661f970ce0842f0c66abe044b3f74"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","d91157658a4ff16192243e5167ba99d1"],["/page/11/index.html","579b153bbbfe0562cfc9cca8d08a465e"],["/page/12/index.html","5cc5a120bba529bd02d4869757437550"],["/page/13/index.html","8347a42f763fb053a7800b3112aa64f0"],["/page/14/index.html","92f002332c5a3d5ba78b70bca97c233e"],["/page/15/index.html","3e0535104bef075e996e16c5c43c6f1e"],["/page/16/index.html","64d836c2c55890d4bbd65db4674a9e3a"],["/page/17/index.html","0647709ebfe5c12ea9485302ce0d65b6"],["/page/2/index.html","250505b19a3f11fd7213664c6b6ac3bb"],["/page/3/index.html","84e6d8929381c2f15c71f7b4d203dd31"],["/page/4/index.html","0a5045feb52f0d484fddd10f02d2989c"],["/page/5/index.html","c8739a72d354b7b68d04afb816942f89"],["/page/6/index.html","e20be125fc184cf04682c66d8149801c"],["/page/7/index.html","7a47f32bc3be96399e6bce581ef9d828"],["/page/8/index.html","e4d91739169aeceb3065dff164fbc660"],["/page/9/index.html","d4218c1ad93b35c20fbf57cfb57d7479"],["/post/10919.html","2f2ce4181f0fee88ef56fa611de83bd7"],["/post/11051.html","f41de92ca03010f3eb3800d03895f427"],["/post/11306.html","79f981b47ef05e62c1b05a53b5e81b40"],["/post/11491.html","7731e00d510562057bd4c9a0dfb8dc9e"],["/post/11799.html","28fe05c79e4165c5461ad5d053ae32a4"],["/post/12334.html","a24b287f7a72aaba3b4e177da37dc61c"],["/post/1326.html","f2a30ea14759dc06095f8985df30dc0e"],["/post/14379.html","aa35bfc5b057a9bb0ef795bf0d389304"],["/post/14511.html","0916c0562c9bd603ea8a8fc6afcb8c29"],["/post/15201.html","c3c78d6e32c81ac1edd9d6822b38588e"],["/post/15425.html","07681b3944f9e555ca36d52127a4ebd8"],["/post/16107.html","65bd3a18010a34c75a26596b4f187f7e"],["/post/16e2846c.html","3656e20a76ff3abbb731e1229637c93e"],["/post/17862176.html","344d74a859d247313f0a973465ae3ca9"],["/post/18431.html","07d166d45fb4c3795038f543a3aa6e9a"],["/post/18912.html","9ce9f7055679a764d030f21207289844"],["/post/1b9c8662.html","1bd769749b003f22ac590ca2ef7d360e"],["/post/20198.html","f9f11a4b38161a6078f390cbeab6c5af"],["/post/20ff5ccb.html","1dec0d2e218ff6f91259628587970f84"],["/post/21624.html","84677f2546824754ba3c2ff2eaf10ad2"],["/post/2170659a.html","0ac049fb1084b7555b1f916841f1ab71"],["/post/22102.html","171c3f73dd3b5cca50e0eaadb98c47eb"],["/post/22493.html","10f5075ed150a36c8a9e56338dd7a406"],["/post/235252ea.html","f37d428399195807724122e25efdbcfb"],["/post/25699.html","b6559da60e27a393cbe6e82755620f6d"],["/post/2647.html","133ac15049704433b1e2619198b7fff1"],["/post/26477.html","00ced97e99de91cfc37c351799e409f6"],["/post/26671.html","e1b614ca3bdcaa221d8474a5e71fbf64"],["/post/26737.html","8ded8f101558b04d6cf01dc51837c0a5"],["/post/27045.html","5116968a08e52335704407d738c430a8"],["/post/27621.html","5502531f5a5a990c24c78d54adb9eb2a"],["/post/27890.html","1dc2b96d6520f65e0163678104d75a82"],["/post/27980.html","e4ca3d451e22aa62523c82a57ece3178"],["/post/280b588e.html","09cc77360662bff9a200e9aba87f80f5"],["/post/28579.html","2addeaf8b379cba3c43887bf4bb594ca"],["/post/28877bf.html","6d23cff1a1626926ae7f8236f8edffda"],["/post/28954.html","9f750e39f3f110b1122a125443d9c1a2"],["/post/29378.html","43cd4fa306e59dc8b38fe7c81c0c60e4"],["/post/29949.html","f3daa04c2f3add90e94b444c9e88b0df"],["/post/2ae43b86.html","42d23eaabe147386b22d51e2c44f56b0"],["/post/2ba82a45.html","b2bb65535e172522a6e684a4db233cf7"],["/post/30072.html","e55a1707f1503fed437e2809918f16f2"],["/post/30479.html","9eb5f9f3eaec2740fb070169039f40fe"],["/post/31a6b40.html","dbeab419d8db8a5a147630400173843b"],["/post/325cdbf2.html","646d779058c94b1d115a30e31c77c1b0"],["/post/3319ed9a.html","53171adbfe19cde03749b1d9b49111e6"],["/post/3320.html","e6f7aa06377b3a51b0c215b7b8a6fec8"],["/post/33cb1151.html","9b03e432a6fcf321e6ff4f84923c8fe1"],["/post/34811d5f.html","220761f8552262a6d40eed2eaa514a11"],["/post/348d4e04.html","0a2d7f0d3cd173d33d6329eed3c72d33"],["/post/3526.html","50efbe1f0fa191d008edac692398f2f6"],["/post/35532.html","e7c342564d37029ba57e85cd95cb4eaf"],["/post/35848.html","1594e9173f82810a97d927160ec1ab48"],["/post/37318.html","442f285c63dcd72d64d4374d7216f510"],["/post/37663.html","197eb3ae457c1ee45774e4f8fddd5db0"],["/post/38035.html","e5aaeb5bd178e8ac57fec254fa0e9a7d"],["/post/38072.html","ac7f46c91834b5cc8e3f2a6468fcb0bd"],["/post/38145.html","dc6570e69204df9b5ab6956485d5cf15"],["/post/39968.html","8e1b1cc03da5bb913627da7df5c05341"],["/post/3de4bc69.html","4eb07c2574b8d42b98851dc935066656"],["/post/40583.html","ecbec33cfaab0862a4c0f3621b527435"],["/post/40997091.html","07ed67e643fa584bca344e43cdcab074"],["/post/41129.html","7319075bad3852435583be18d9632956"],["/post/41763.html","b3e80d7ccf59e07473e06c2c903dc439"],["/post/41829.html","92db5c788b4aa9836f840b857ecff5c8"],["/post/41840.html","b31cf7946b6e022b9a7da277fab399fe"],["/post/41e39f2b.html","3fe74aff6284282c04bf08cb340ca7f4"],["/post/43817.html","3e5edae5c794858b35b8125981b58287"],["/post/43878.html","4ac327badb1fe80a8cdfb6a740bae8d5"],["/post/44250.html","131b8c6a0102da77290f0d78f5fe8d64"],["/post/44336.html","7b0efa9a1e66b3f075c855c0354e7b44"],["/post/44454.html","bd040280835946e6bad5d9212ca618bf"],["/post/44487.html","cd1a114454d704845aa988c661814eb9"],["/post/44914.html","6e0b310cc86b418a25f5c50d4ab7bc37"],["/post/4551c130.html","88912db5d960e42c04dd5a32bffedeaa"],["/post/455a4c92.html","1f6904a923ff394be1049d29c25cf871"],["/post/46466.html","c350ae6267853cd65fbcc76e2a562425"],["/post/46925.html","486190c5166aa770dacb3e0ac217a36c"],["/post/47075.html","4511d0ddc19d0b01bcdfea34d4a44cca"],["/post/48220.html","76356c3bbc664180b4fdaf34c6905ae8"],["/post/4b1879e3.html","b5435d2e17773024fa41c13476d87aa1"],["/post/4c720881.html","171a40910381f9d17805933198fda9e5"],["/post/50daec4.html","1ff233babe255ca8c5fae6ec3856d05b"],["/post/51491.html","4fb4f50e27b5f0577c14de799dfbda84"],["/post/51e63dcf.html","0901f6d900bd2ce546cdcd5bdc62aed0"],["/post/52078.html","9391a512a05bc78dda3b833f764a8bef"],["/post/53677394.html","0d3d68c580e13693abe96603dd76fc6a"],["/post/54300.html","7706e88f3ab69a00c553f5653a8f3859"],["/post/54612.html","b0cdc4e5c977122bd3c1d50e0cd4f468"],["/post/54613.html","121431ad45f1f7630fdfae9922fc1ac2"],["/post/54708.html","4091aa551c8d736bf3a691190b013972"],["/post/54778.html","2642a114999fb4b5bd8ac1d772dad37b"],["/post/5490.html","5bf5c527291eb73c08d33b3faa8714e9"],["/post/55046.html","fe80e18dcafbb1720aa7488d187c57e4"],["/post/56929.html","276d1518595c98f854e837e093842222"],["/post/57339.html","dea1a6b9fa5cb676f128b10c91ef1399"],["/post/57449.html","0c0ff753ae3107ede76b57abdfe1dcb5"],["/post/57453.html","a53b2f5804928b54c01f9f50f2ee6910"],["/post/57671.html","b645fc70c8d34ccdbc61335fc548b754"],["/post/58313.html","5f5e95bec791e5d55de4aa7940664921"],["/post/58481.html","58dcee82a40f95c27c54c4e497a1ad33"],["/post/58986.html","d777a4680701c762cfd9491638721cda"],["/post/59431.html","c5b670585dc4e69bbf7a0786fa224579"],["/post/5951da65.html","0e4a234509c39973206999bad316bba2"],["/post/5be7e977.html","c10cf5feee1218c86cddb2352174fd66"],["/post/5f9e4eff.html","5efd7807bd1bd796c7f1f0d32a7b879d"],["/post/604b49d0.html","f23d9600732f3d8cb8393793da1a726f"],["/post/61312.html","062d19206d74e568df6eb5150280fcdb"],["/post/61738.html","12abef1924a87089c23db47a3c245364"],["/post/61809.html","e225ed9b7775fe64bce09f0b02c7bd4f"],["/post/61eaf19a.html","cfaefd5bb1341fd38702c74ce9d03164"],["/post/63002.html","4942fb7b06e1e84f8f5ea650e78407d8"],["/post/63711.html","d81102e6a507078fcd9f24ace406a152"],["/post/6587.html","1f751df3ecaea20c887b20a46af5831b"],["/post/6589.html","b873a88abe13a05eb6665e75afda48c3"],["/post/67454659.html","142d3985e77ae890159e99558c0d5d35"],["/post/6880.html","ab7899c17e4cba264796bc722a43c833"],["/post/70263071.html","1b6b845487925498608da92581f202a4"],["/post/71038564.html","1f62b004b58425bf09fa5f7b1ad36429"],["/post/7119.html","4448a856c8e091c60d7e0e69b0dbad92"],["/post/74e7fdff.html","844e294f6c7c738e1f45c22a3a7a827d"],["/post/7502.html","738ee2929ac52c659ae2d4078a4031e8"],["/post/7564.html","956011978a8e5fc6ae19de54f70ecbdd"],["/post/766f9b60.html","2ae689e991bafdfa113bdafdd10e9a69"],["/post/7ca31f7.html","b3fc4aa3094e05de71071e97dd3ce2e2"],["/post/7d1c86da.html","0fce40a1e8c357d8a194161340e36229"],["/post/7f3bcd7f.html","5832927b08ca489801721820d2f09af0"],["/post/8039.html","895e722954fd4df1b3fa944c5ba8b0dc"],["/post/8050.html","934cb12e50dd515b72b6b0273aafa47c"],["/post/8072.html","922920df34d54bf2164181267299ea06"],["/post/8274.html","a975ed0e962241a1089438ce27d61347"],["/post/8372.html","02c44b267f14bcff6c386e001e56f06c"],["/post/8498.html","71404b8180ed37f3ff678758fc601490"],["/post/85b4e13b.html","185c2eb1999fae1640f453f6e98a615b"],["/post/912b2566.html","248a031c245cd757c407864a801eb5ca"],["/post/9187.html","469d13f86157b1161a4d14cddbb30ab8"],["/post/9197.html","b0b9406fba0b62f6be19bc0af597830d"],["/post/94ceb2fd.html","ec6b9d6536dd32205d7c661344e20b72"],["/post/95495db.html","8b0af9323c99adbb72c0cc74d8b59ad0"],["/post/97246020.html","d563474a204a35dba001145dbb048c02"],["/post/9954ba8e.html","1c5b0bc5aae5d25160f82754a363bb69"],["/post/9d855db5.html","d249d067b23bf7f3293ad1ef7dcd2157"],["/post/a3a786d6.html","98ae667c26c8d2451bf6dc0c319f569f"],["/post/a444b428.html","aa71bfa9255c03bcb52127e415774c2d"],["/post/a50b8908.html","11860457a3b69821c4424ef787af1c07"],["/post/aa1eade8.html","2bcd1c7e04d1618ad446af99f1de6822"],["/post/ade8c6d6.html","7519d3b87b04dea05ccded339201ba5a"],["/post/ae8362df.html","2b61511c916bec064bbd70e8b6b44f81"],["/post/b4c1d206.html","7a43bcf530c37da6201efa5dd3fc9e52"],["/post/c82a1c99.html","853bb175ef581cb576ffccfcb48a15c0"],["/post/d213fc7f.html","e1466892f7e9d4d344ba671964a655f4"],["/post/d431fab4.html","9115447f3dee0ecd7191e6e57bd9cc6e"],["/post/d5381517.html","ae8d60b15dd5c0e7c8dd35d6ed64dd3c"],["/post/d94f88de.html","28bf977265741b93648491938971ff78"],["/post/e058ffd8.html","1c91b57f20cd6e32a6950eebb58b0866"],["/post/e0f8cb74.html","75db682b41deaad3585670cd6694a01f"],["/post/eefe591f.html","f3f0cb3e4ec8bd78173688ebd4cd088b"],["/post/ef296a07.html","b330e6d04e9729e4048a1fea9c7ec8ae"],["/post/ef3a3fcc.html","05dacc66e8faf8d9f5bb7f0dec4b7cfc"],["/post/f201f9fd.html","2c274ce169f28f7c4ea505d7fe0ce50b"],["/post/f79e4123.html","257b140d235c53848936afef46ee9854"],["/post/f8648a1d.html","cbdd5da73971a81e66237e0af1505b49"],["/post/f89cb603.html","38584935b5c9215e61dec2a5a1d035d6"],["/post/fa288682.html","0c9599612939bc9fbca8857277089784"],["/post/fb98053e.html","a84b9f94926c01a272e12e465f69d325"],["/sw-register.js","e29d6a03d20a3139b337748b4a85659a"],["/tags/AT-T/index.html","4d00e8561532a016a5930ded73869a29"],["/tags/index.html","b91b74ebe141e28d0d6b5462de7fab4d"],["/tags/动态规划/index.html","8b7a4b365d4c0e0ef130ab06cff3d5b1"],["/tags/字符串/index.html","fba60ae450151300c79a418d17a71836"],["/tags/字符常量/index.html","eaabe40c5ff438715058e695b069cf0e"],["/tags/快排/index.html","1d7207650dcb1081ff159168b13d2190"],["/tags/排序/index.html","25aa96df167d3904c2020831c9ce0929"]];
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
