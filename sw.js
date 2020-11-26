/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a292755b035ee52ec8a808acfa31366b"],["/archives/2019/index.html","c72d3f23405cb4e3dc3754f5a9f2b58a"],["/archives/2020/01/index.html","ec0a3380cb54f61f22f6c0b119b707ae"],["/archives/2020/01/page/2/index.html","125dbed0e4a0102678cad8b6372fbf01"],["/archives/2020/01/page/3/index.html","7c8dac3bc2069354003fd39223c4022e"],["/archives/2020/01/page/4/index.html","4823e8de3a2fbd3a3d142bb42765305b"],["/archives/2020/01/page/5/index.html","0c16921b9d3967fb0eb3e71e43d71097"],["/archives/2020/01/page/6/index.html","4fd21ab23162d83e57e7888b83ba1756"],["/archives/2020/02/index.html","08d97cc06d1d2c6c43a94b8059e6b827"],["/archives/2020/02/page/2/index.html","0ccf5f3a3e172d7fbb0a788958a11013"],["/archives/2020/02/page/3/index.html","b28cb8a86694820395fac4cb175d3210"],["/archives/2020/03/index.html","1dd5d8bed6ccecf6ffe2d5b84a5153cc"],["/archives/2020/03/page/2/index.html","5c3d425aeb24bdf809318fdf7c7196a6"],["/archives/2020/04/index.html","010c329b80810e7c6d9bacfca31fa684"],["/archives/2020/04/page/2/index.html","5c955d9f42f118b1b3905130f2bc4e73"],["/archives/2020/05/index.html","67b54c7991f4f1af3327079c11ea72a5"],["/archives/2020/05/page/2/index.html","81214544938cb2f24aab7d494c56306e"],["/archives/2020/06/index.html","6d8b60199a16f1b342bfd5abb407cf41"],["/archives/2020/07/index.html","617f5200abcf0722207a9d1f6bc14ddd"],["/archives/2020/07/page/2/index.html","672edeed9de7866565bd03af12c6b406"],["/archives/2020/08/index.html","a695f41fc4f6287ce2c15c598cafbec5"],["/archives/2020/10/index.html","483ee0c6846c47dc2ee3c9d254d64ec5"],["/archives/2020/11/index.html","710f24757f5d68c09ee09c8fad4d7b9f"],["/archives/2020/index.html","f6bd16e0115f326b618195b8c66cf056"],["/archives/2020/page/10/index.html","0ab103fb1b64dde702664d4bc13267a1"],["/archives/2020/page/11/index.html","d5f0ed561dc3f1b9622267c8490179cd"],["/archives/2020/page/12/index.html","4e812daede29a271ec3d18b3438999b2"],["/archives/2020/page/13/index.html","ea918d7bccc05ddbc2527f91f05a0b21"],["/archives/2020/page/14/index.html","155c7bc3e4af4d5e3395d087e9cff8d6"],["/archives/2020/page/15/index.html","cf6a343291baeb8b038b653968b6781a"],["/archives/2020/page/2/index.html","28c5f864834eb07d36358980af3db419"],["/archives/2020/page/3/index.html","e14a07d3c9628a3081fc2d8f0329d235"],["/archives/2020/page/4/index.html","dcdee3e25908aea3b47a9c768e3d04e0"],["/archives/2020/page/5/index.html","2c5bf67ac48bc94e068610fad1a14005"],["/archives/2020/page/6/index.html","d05a941551a3c326b4ab229da9af0385"],["/archives/2020/page/7/index.html","0c2c6952408abed939e4045d67baf752"],["/archives/2020/page/8/index.html","5f4bd155716df22617164be3290b450f"],["/archives/2020/page/9/index.html","48d64ab9ffab5e321a7a5133ca12f938"],["/archives/index.html","b15043e3d24e0955d805feea585c5eba"],["/archives/page/10/index.html","33027fa9753b926d0b703ddc7c0b0f09"],["/archives/page/11/index.html","02c58edf714716a49b845427b2da66e6"],["/archives/page/12/index.html","d277fc330319572ae3aa4bd00c5b968b"],["/archives/page/13/index.html","ff8bce64f7ff8e4a7fab15f29b050d68"],["/archives/page/14/index.html","616dab412758d8866c9ef71c57640f36"],["/archives/page/15/index.html","5f8132beae3102c341db25d29b91dbda"],["/archives/page/16/index.html","6eb9ae4f80ac14c17f43dcb07e439a52"],["/archives/page/2/index.html","d2534db0a88e273686c2714e3f32877f"],["/archives/page/3/index.html","83376e4cde84ee533a6b8b2cdbd1671e"],["/archives/page/4/index.html","beb9cc7f4823b371acf56be9f3baf3a4"],["/archives/page/5/index.html","c9e8213db9e5592ebfe05ae72724e704"],["/archives/page/6/index.html","fc40ec185a1245f72a5dbff2ac932642"],["/archives/page/7/index.html","57c73b677fcc6a2a2fac984a105092e1"],["/archives/page/8/index.html","c4389a62ccb4fc3d29ba518046dd8464"],["/archives/page/9/index.html","1593a368de8f5ca99443aadfeddf47d3"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e56437b87e09a30370a275352f520a4d"],["/categories/Linux/page/2/index.html","e27296374bcc83181639ef6ec1f940b2"],["/categories/Python/index.html","427057face2b6c679435b7a47d4add88"],["/categories/c/index.html","99166d0d7fe930ad30e5beba2b6951f1"],["/categories/index.html","35a04fd08f53e7b30e0d4121f64e2e7b"],["/categories/java/index.html","ca88692d13f0f7434dbc3a93b5566fb0"],["/categories/java/page/2/index.html","9c187d83cb86c2218a0023483d1ff0fa"],["/categories/java/page/3/index.html","27f96d924991c1246e9c8fe1ea7bd2a9"],["/categories/next/index.html","23875124a3c36090fef665d69139b1d5"],["/categories/stl/index.html","844fa5801849aa6dd6b6788995dc3d58"],["/categories/windows/index.html","0bc783002fd33a1e88e8230afaf01d33"],["/categories/基础/c/index.html","6374a52b9423ccad3c62d78684550ea1"],["/categories/基础/index.html","fa4ef6d51ac48a008280fe77e0a2c023"],["/categories/基础/page/2/index.html","a3e3c1bb5201dbb47c4ec0f902e0fb79"],["/categories/数学/index.html","9c7a74581668d74ee866cff62bff17b3"],["/categories/数学/概率论/index.html","1924854cc6f72fcd090a08f866daa918"],["/categories/数据结构/index.html","f4010215c2582c0b39b5681eafbd9b8d"],["/categories/数据结构/算法/index.html","c35a3609c76cd23ffbf128249235f63c"],["/categories/机器学习/index.html","9dde9af78d6e2f6808a62534252375a5"],["/categories/汇编/AT-T/index.html","04e2ad7d028913885f3e17119a446607"],["/categories/汇编/index.html","1c492e22f8687df2b06efd1461d1adc0"],["/categories/汇编/page/2/index.html","e7a0376cc1fdbb0c76b81efb835c6953"],["/categories/汇编/page/3/index.html","1f197546d04cfde209df86726c5f3262"],["/categories/算法/index.html","56a8b4b7cef9e55c0ed94f9848f0eaab"],["/categories/算法/page/2/index.html","bb66e5a2c91479187f83f33192cd9a11"],["/categories/计算机系统基础/index.html","ea4756702b903cbac6a3610aace15e55"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","beb55e6caa9f17f6458085aa179bb14d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","c37ebf3aeb79aafed153d8a2c67cf1c8"],["/page/11/index.html","03984eaa159ccfe1b1f2b4f23259de2f"],["/page/12/index.html","85b174b4970ec4683c4f777c13c5f1a2"],["/page/13/index.html","593bbfbf128a4514842621e0de457478"],["/page/14/index.html","2d214fac81f01f46d2f63f9e84239b9f"],["/page/15/index.html","caeea7b27801cbbf06c28febe6394358"],["/page/16/index.html","519170e81af3b927a2a973a430ca9d44"],["/page/2/index.html","05cb8231ff469278732089d8ac5d8e71"],["/page/3/index.html","bccfe83336e22e5467c6c98e570326ed"],["/page/4/index.html","8176168d62e0b9ae51c4dffe34a9c351"],["/page/5/index.html","7480515204bca428c139cf2f76b00b1d"],["/page/6/index.html","388447c03f4c0e73ce7d71da6805d375"],["/page/7/index.html","ea374121e8edbf21868ebb4fdae7ff69"],["/page/8/index.html","eaaca05782e065968627859cc0b0e8d5"],["/page/9/index.html","413056ef10a946a40f233c9acf465786"],["/post/10919.html","8fea7d5f4ee263aa42960b8f9e75b7d7"],["/post/11051.html","3c4dfbc49dff3c847186f773feb27963"],["/post/11306.html","6d1727532a7d9f86030727e933c587e4"],["/post/11491.html","20958b5db2543b0d2c557e1cf2dc6075"],["/post/11799.html","cdd24a6da7bffeca736f8418ee7aab73"],["/post/12334.html","a268853c0b39bf0d3790ca011ac4a320"],["/post/1326.html","b82056ac0ae05f79bea015ee93565bcc"],["/post/14379.html","16a7736fb4402cbb419188c6707f5532"],["/post/14511.html","89c3e15307e7ed764ad0c1fa1ca06afa"],["/post/15201.html","190d566281aab4ccb2707661f1c38b7c"],["/post/15425.html","91d620e1ea9d2c7076f1aafc22ffea6e"],["/post/16107.html","2bcbbb97279962815905872bca4540c5"],["/post/17862176.html","763bc82bae0c777032cffbcb51c13280"],["/post/18431.html","4aa0d5edc324988ccdbd54b64e9cae4b"],["/post/18912.html","a65b264f8578d13ff0782347772c12d2"],["/post/20198.html","b81d1c3ee2652eda33c93169015541ed"],["/post/20ff5ccb.html","d60b2c2e2425588c715ed64360ff8875"],["/post/21624.html","3583bce2b4790c0758d12bfda8e7a91e"],["/post/2170659a.html","4970b3271dfbbf64aa5b725aeedbd5e8"],["/post/22102.html","87d36ab88151d6629e2521b6ae891be8"],["/post/22493.html","780b4186177d7e20559344a61e3f413c"],["/post/235252ea.html","287062b059cd96d286b50e3cbc848a58"],["/post/25699.html","273751aab9e76c7e8df123b2cc88332f"],["/post/2647.html","5521a546332acacd5a468224995609c1"],["/post/26477.html","89d39585473af40568b78a8374e82244"],["/post/26671.html","94dee2b50b2eb1d1a9bba8ad0797dfb7"],["/post/26737.html","b44bf9e9e595cbd21eb731d9003f489a"],["/post/27045.html","4ee92eb9e2c54ecccbbdac4c5a5c45ff"],["/post/27621.html","ca1b35ff22c4efc6a3b2c1fb15f55819"],["/post/27890.html","d4beb5450353654bde81662dd3670ed2"],["/post/27980.html","cc47c3274d190e0ffad806107649b597"],["/post/280b588e.html","46e18b176f505b695de28a4193fff244"],["/post/28579.html","1630acd6799077fe4974e130e9305ddb"],["/post/28877bf.html","f2a4cba0a51593e1aa765fd9ed2f8a3f"],["/post/28954.html","9be585041739c5e3ae8389ee339507fb"],["/post/29378.html","2153fc8d73b81c9561bff24a2beb1fb1"],["/post/29949.html","167530e935c146d8f8c20e8d0eed9c86"],["/post/2ae43b86.html","90d98a3b5805edbf91e8f93392061ad7"],["/post/2ba82a45.html","60e67007b2d10b1090255327fbaa03c7"],["/post/30072.html","6eec138903745799d1ce8f989ce84efa"],["/post/30479.html","691421e775e0ebf5c78324d62b3736f7"],["/post/31a6b40.html","fb9b5d965af5ced22a638d8672ce5d21"],["/post/325cdbf2.html","c7ebca362ce1a87d43849b025c2c57d3"],["/post/3319ed9a.html","99410e467ef9e45ee36282009afeef5a"],["/post/3320.html","1512312ee320f7c75a9b1052fc9fa7f3"],["/post/33cb1151.html","a6601c0e6438472e079ab5d1dd4a35af"],["/post/348d4e04.html","6747460e61af4e39d16cb1d15feb5ca2"],["/post/3526.html","0cc22eb0d9820878219d39b969ba4919"],["/post/35532.html","f1c4d707c99039029c7530bac93bdd2e"],["/post/35848.html","310c23a7403202f6afa6ed01e0b4e1d9"],["/post/37318.html","a0ce926b65c742c0f9cabf796b44db44"],["/post/37663.html","3f51398ddfed4b31929ec0ef00c709ab"],["/post/38035.html","5dee142948bcc15ccc89f0d9fcb07cf5"],["/post/38072.html","f55cfb97d3448a68448d433789a09075"],["/post/38145.html","78ac6a0ed8affefaceaf4163ec6385cf"],["/post/39968.html","6f46e735beeffdeb543e6b0df1b54683"],["/post/3de4bc69.html","0fac3c945c6d7474f59a6b68af14902d"],["/post/40583.html","5100a2597d2345bea1df65fddfdf9c51"],["/post/40997091.html","20a9cfe19a0d5d9826a904ccba32e10c"],["/post/41129.html","0c4c0234b26a81ce63b51c69568cafd7"],["/post/41763.html","f950447e026136ad64d086335cc2b19d"],["/post/41829.html","69fea072589fe631cd32cf34c0e2f745"],["/post/41840.html","a94e46dd20888cf2452dd9180bedfa6b"],["/post/43817.html","65329d905b7b6811850266fb234f3500"],["/post/43878.html","4bd800da8b859770319ad300aa95f2eb"],["/post/44250.html","6eb2e6ca23cce5ed2ce4d55c7a1bff2c"],["/post/44336.html","3c206aaecba2630653fbfc92a854be6a"],["/post/44454.html","1336a4af6c9a6e831fc76126d1516e9e"],["/post/44487.html","27f4db5d20d6dfa39043515eb3722495"],["/post/44914.html","67ef1d38f1ad8571ea879443e7ec09db"],["/post/4551c130.html","16a9e0c9ecb7a37532ca0b8fffe3e2cf"],["/post/455a4c92.html","53f15a2fa12bb620d4478187ce4010cf"],["/post/46466.html","d2c7d08d4853cdf2d49e551aa6ecede8"],["/post/46925.html","8c99f949f0be112a4fc2cb7cf4283ef2"],["/post/47075.html","5528e2b786c72e03341cb85c83ede09e"],["/post/48220.html","e04a7087ab537db7fb36c3fca9cfad09"],["/post/4b1879e3.html","2ec891b689940cdbd992f3f095042983"],["/post/4c720881.html","5336d414c5fced0716973add724010bd"],["/post/50daec4.html","fdeb96e0fee934000b3a6d1e4e41531d"],["/post/51491.html","bace7960ea750311225aed363c1796a5"],["/post/52078.html","a754e1f011d8e80d8d058048ed00a080"],["/post/53677394.html","37345924a816946cadabaecaf693d742"],["/post/54300.html","212850df1ee796234b52cffef5d38ed0"],["/post/54612.html","2d71d93e620aa1173f3de5b3bc5ed309"],["/post/54613.html","472f06e1fcac4da9238768f8771f5ac1"],["/post/54708.html","1ba5b08571decfb6dd01ab33cfe47bca"],["/post/54778.html","8ffb14cbe2206e23dd98aaa4d485a44f"],["/post/5490.html","15c43a2d88d53829cb01c61c7d9499b5"],["/post/55046.html","deaa314301600d629e916795643a323f"],["/post/56929.html","ea2226e9846b8a4fb84366fa056f6821"],["/post/57339.html","1c58de2256d36f8660d51a4efb9521d6"],["/post/57449.html","471d07b9aa527aa91240dbab00317a4a"],["/post/57453.html","16b2a454cc0c77fb426889536d5d2da9"],["/post/57671.html","35b5c262169d3ba752b3c7f77ecc7bc9"],["/post/58313.html","44dbd6c97e6aca716fa668117a6fbed2"],["/post/58481.html","dcdc1000a36bcb92c296d5074583c0d8"],["/post/58986.html","8c22464d449753ced89f617e4d31d561"],["/post/59431.html","38a44fea5344bcbdb958ff51a4786361"],["/post/5951da65.html","c48289fb5910fe891fb3671f67d9743d"],["/post/5be7e977.html","b04f11adc9914e6ba9abb2073a88d523"],["/post/5f9e4eff.html","a4b36812e25c4cd37f49382d30ffd7a7"],["/post/604b49d0.html","5b163d5e17cae866e01fb0bd81829d86"],["/post/61312.html","655c32c9886ed9a00e52fa73e397b329"],["/post/61738.html","9dcc98e99eaf6fee5fcc836e73a307d9"],["/post/61809.html","39643c8dd297a48c87688ce5555d8b28"],["/post/61eaf19a.html","fcf45e779a04a91adca5a2cb89d6f4ff"],["/post/63002.html","fa6da376df03e53d7d2161115b04777d"],["/post/63711.html","008e0c1c5cce15071e16d2945a0ff1c6"],["/post/6587.html","70445255211485451fdf2160111c469d"],["/post/6589.html","4db90d00baf7b38e95ca0c6929384968"],["/post/6880.html","31d575f5165f4b8625f38e5d9bab2f15"],["/post/70263071.html","e10e567d8ad9adc1810a0ce3e95d2926"],["/post/71038564.html","af579c9cb8fd0e724b8ee6c82dba8d19"],["/post/7119.html","6ba37c0e13df06481e2d1dc4abbdcf10"],["/post/74e7fdff.html","0cf70451b8b1226ea30ff9b7b8254d1b"],["/post/7502.html","1ac76e70d73699f5ef90abd7ee973ef8"],["/post/7564.html","5de05ad42547c384862337bcd7230f60"],["/post/766f9b60.html","288cebdadde7f9f65c5e28f419249440"],["/post/7ca31f7.html","09295992d7239bcf268e2141f06e761e"],["/post/7d1c86da.html","3c507c4cd4a40d83ea08f68cf694b444"],["/post/7f3bcd7f.html","5d92ef7353fec42efd53a28cff93fcc6"],["/post/8039.html","6e71c1b03bfbc3c166253869db429f69"],["/post/8050.html","c4fa9553168bcc2591f19f56f3e3128f"],["/post/8072.html","3bebee45cd2f37b1cc025656780f61df"],["/post/8274.html","785f63288d4dad7a7ccccb8745451b68"],["/post/8372.html","d5f6756dac883c8ce9c7e9862b6ee605"],["/post/8498.html","6868a048eac3eecc0fb5782d925fcb78"],["/post/85b4e13b.html","bff946eb573ec5031d99f40bab4ae5e5"],["/post/912b2566.html","c4a2f6d3da643207777e0eb55e15f01c"],["/post/9187.html","a9669235c99f10a34aff57b080cad522"],["/post/9197.html","f7a4f21ecef4ade7dc6a31d2395ec56d"],["/post/94ceb2fd.html","f716030b5ec9d0f0c32177d06701961e"],["/post/95495db.html","788f3c8829a362c1cf9d1e4c3b9ce5dd"],["/post/97246020.html","a04cd94618770a9d81db5ca40b77070b"],["/post/a3a786d6.html","bd3060203786118bbce71ce895c4ca80"],["/post/a444b428.html","da45c5e894137c8febcdc04abd789439"],["/post/a50b8908.html","760b5a402603bbd63613084eef88e187"],["/post/aa1eade8.html","1c0e8a1a368797cceb289eb479cfa842"],["/post/ade8c6d6.html","e168b366f2e0c37a5bab167adcc5993f"],["/post/ae8362df.html","3189de050d9859111f517b482af705e8"],["/post/b4c1d206.html","375bf05d47cb2786da5f74bfc6ccc6ce"],["/post/d431fab4.html","b0ef00d26c0031ae8ee865614d4f2a2c"],["/post/d5381517.html","8becc4c58d72f04cd039c64311b98bdd"],["/post/e058ffd8.html","e43113526bf9cac3132c50156010bf81"],["/post/e0f8cb74.html","73b76c9c5cd7f57b0f2e28fdd90f433f"],["/post/eefe591f.html","43c3a385ffbc996c2cc4863249ffc01d"],["/post/ef296a07.html","0f683d67a5c5801ca01b0746b8434390"],["/post/f201f9fd.html","90fd39bc2a630a7ed4a2f16019f8dd05"],["/post/f79e4123.html","0106795c2f6472dd32350d3dbdf0f0a9"],["/post/f8648a1d.html","52f91ca0ee0e8664ac1cc68a33f6aa3a"],["/post/f89cb603.html","03d37185670a3aca89d7588037f7e123"],["/post/fa288682.html","3387dae6a7807f5694547fd9e59d6621"],["/sw-register.js","ddc90984636d0510a79abb0e01edbcb0"],["/tags/AT-T/index.html","6da1bedd5859c94f5bf08f7a4be8b06f"],["/tags/index.html","ba191b62b433edb6435c7f7619b1841e"],["/tags/动态规划/index.html","3b41fefde53ffd5dac4a827b0152da57"],["/tags/字符串/index.html","d47510c60f1ba685c66b1a3d9fd14ea6"],["/tags/字符常量/index.html","47d00ae8cde3588fb450ad501d836a13"],["/tags/快排/index.html","f4fc263ef927ba3656c5cbd14f4776ad"],["/tags/排序/index.html","cc0992e68fc1cf7521947bf978f98ced"]];
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
