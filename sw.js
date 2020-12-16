/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0465d5871b3a42c498a83afec95c60bc"],["/archives/2019/index.html","605e04c60ff81e350e0e7002a378073d"],["/archives/2020/01/index.html","1988d916561d344216af1c12dff16b1e"],["/archives/2020/01/page/2/index.html","3233eb649504e4e68dfd9b52b1b630ab"],["/archives/2020/01/page/3/index.html","1204bfae2dc503ec4559c427af87dc01"],["/archives/2020/01/page/4/index.html","207481f32ed600521163ea4a774274bc"],["/archives/2020/01/page/5/index.html","6873461754a6a54f1fb7a2d135489a0a"],["/archives/2020/01/page/6/index.html","d69abf0810facec7179f061c4d8e91f1"],["/archives/2020/02/index.html","2de9f22d4c6ea4302e6f894664b59e43"],["/archives/2020/02/page/2/index.html","27ab8fc864355d0ee8adc5b9ac148fc3"],["/archives/2020/02/page/3/index.html","1e2d3abfcec4b2d72e25c6e43df521a5"],["/archives/2020/03/index.html","e1091486d6b07a8d1126c0896b31acb2"],["/archives/2020/03/page/2/index.html","3340f8233b80d865a1731f1cc794d2b2"],["/archives/2020/04/index.html","b406bde221a71008246778bbbd392f4e"],["/archives/2020/04/page/2/index.html","a6a3c5e3af1ff66aa9d0345eb9ac587f"],["/archives/2020/05/index.html","a438b1cfced384e362232ec4c5f70425"],["/archives/2020/05/page/2/index.html","d14e39c9e78980fdd24ed2b3de5493b8"],["/archives/2020/06/index.html","da5baac6502c06d5ad0f5df102a09260"],["/archives/2020/07/index.html","2bb21d5f9f4be58e03ead9291afeaadb"],["/archives/2020/07/page/2/index.html","698fcb052c7b830d7e85f3c98febe910"],["/archives/2020/08/index.html","cfa67e0e5e5227df53ebb3f0bbfaf9f8"],["/archives/2020/10/index.html","aa417f754d4cc5159671a9d95a6a69bd"],["/archives/2020/11/index.html","0ca07b54c9f04f5c3fa596520763e054"],["/archives/2020/12/index.html","989e3770b750123242b46732be2649c4"],["/archives/2020/index.html","05b6464b0c50710283ee8277ab2bb4fe"],["/archives/2020/page/10/index.html","19d57450cb32535e9bb532fd4588f25d"],["/archives/2020/page/11/index.html","9bec1ac5ff68300b78a33c7154c85099"],["/archives/2020/page/12/index.html","a6bccabb3b434b1f1603a17a92946320"],["/archives/2020/page/13/index.html","d9e4e2038bff57839ccee0b785f7d724"],["/archives/2020/page/14/index.html","6bb5b5b0443ca02062dcc121b6b1cdc2"],["/archives/2020/page/15/index.html","6cc5e4db59f5018ee5e68368eb292e23"],["/archives/2020/page/16/index.html","c9171e7e53824c23acb19ab43e475610"],["/archives/2020/page/2/index.html","e31cc7953fb4629c53378df60c29143c"],["/archives/2020/page/3/index.html","bed3b1f783c8faf1900c51ba67c2cc34"],["/archives/2020/page/4/index.html","41f05dffed06fae07efa7c85f4d02218"],["/archives/2020/page/5/index.html","4a811b021a8489b593ec803cad91d4b7"],["/archives/2020/page/6/index.html","4276dc13f067029f9791fda5eefccf1b"],["/archives/2020/page/7/index.html","a59f61e7085360d153b5ccb7a4922e58"],["/archives/2020/page/8/index.html","b2b830993af98f5381ea4c72a3a277f2"],["/archives/2020/page/9/index.html","ecfe597159709f199b88924adaf14024"],["/archives/index.html","8dea533d3863a321d72b590227ef9e45"],["/archives/page/10/index.html","9207468528b29a62310d0ac614c8209e"],["/archives/page/11/index.html","5bb93067d32d67025904b931b1a0818c"],["/archives/page/12/index.html","4ec9ef5e081eb3644bb0b51f308f9feb"],["/archives/page/13/index.html","ff993708fbf31b2433287690cc36c41a"],["/archives/page/14/index.html","41ef8410d05ec1f9156aba0454e751a3"],["/archives/page/15/index.html","85f2fd089239ab3fa8135418f5636dcb"],["/archives/page/16/index.html","bbd7b1918c0d55d6b31343a1cd95a4f7"],["/archives/page/2/index.html","216bef3b1824fc71394c8e5fd5710aab"],["/archives/page/3/index.html","b776f6761314c8a16ee2b44111c9a4b5"],["/archives/page/4/index.html","3d264564c023e7976ce599dcd94cc343"],["/archives/page/5/index.html","aa1f6dca9104c236274b438ff18e2732"],["/archives/page/6/index.html","c262aeedd9ff34e3f0771e936ebf9d8e"],["/archives/page/7/index.html","259afd3a810020a1398c7ba034fb0ee9"],["/archives/page/8/index.html","246eb89f88cbf16a553dd73231c54d21"],["/archives/page/9/index.html","65871bf4a82acfc543f6cd2011e1e33d"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","967e2bc9be2cd1d30734ab30f5a46dd5"],["/categories/Linux/page/2/index.html","6ae0d9bbfc9cb92cd987e2366725e862"],["/categories/Python/index.html","e678eaae6057acba6bd4703872368dd4"],["/categories/c/index.html","b65fb296fa5ac2d0952e8083c2388b62"],["/categories/index.html","a4583e3c93759602079e04ef16d30409"],["/categories/java/index.html","0b28c32658525f489003b7e736b2c0eb"],["/categories/java/page/2/index.html","2bcbb83d801944176e037e516309e7f1"],["/categories/java/page/3/index.html","92daad5af6fc053db5a6cb32fe363fed"],["/categories/next/index.html","8d04cb9a4e31fa614bdbd3d0a84ac029"],["/categories/stl/index.html","187382c22175275e9d8987836ccacf04"],["/categories/windows/index.html","9beafaeb16a61b82f9b3dc590e9f3785"],["/categories/基础/c/index.html","06d33777116ff3459f3a081fd4df0b8a"],["/categories/基础/index.html","7d6dec47e4b427d3886e69d7dcf2881e"],["/categories/基础/page/2/index.html","bbfffedd0da75b3a060d91c616466ae0"],["/categories/数学/index.html","c39208da2e624f11c009fd3bd68670f7"],["/categories/数学/概率论/index.html","ae034186366c90b19c1cc9b565620b0e"],["/categories/数据结构/index.html","a283b9bd6c440ebd6971fafe4d4c43e0"],["/categories/数据结构/算法/index.html","2789cd6d7648f20eb9c16a5df21a4559"],["/categories/机器学习/index.html","9d1469eacc9ec1d1deaece26cb11d439"],["/categories/杂项/index.html","b02d4a4bc1a7de6d46650f4b415bd925"],["/categories/汇编/AT-T/index.html","875712bc85667d610132dc0d3f588af4"],["/categories/汇编/index.html","db34be024552c0c76220d7d2b934e7cd"],["/categories/汇编/page/2/index.html","97a9cf1088905e313837d1802042bb59"],["/categories/汇编/page/3/index.html","4f735e5fe9a9fefbcdb8cc3bb1218ff8"],["/categories/算法/index.html","a64f5bda6de11dc375f76492d78cd604"],["/categories/算法/page/2/index.html","bea03d51567621b544b68d7fce809b64"],["/categories/算法/page/3/index.html","59185d9f5cff5e605f62570d9d8cc5a5"],["/categories/计算机系统基础/index.html","b738de3847c142802fa075c3441f363f"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7881db3b302dd7493b3acc1ab690a1db"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","092db622f6f94af68398715d56bd850b"],["/page/11/index.html","e07dda3b254c8e03348cc1ab09529c30"],["/page/12/index.html","f384b751b35a774299f7e55ba05b0d8d"],["/page/13/index.html","243b2c61c81af99e636f508deaaae386"],["/page/14/index.html","bab37959e7202ddb62fe3129d9dea7f8"],["/page/15/index.html","6d3641f1e51b8df4d76a34dd932b80a7"],["/page/16/index.html","8a022f56c6401549043e1b2528923fe7"],["/page/2/index.html","b4cd9ce05dea1a524990d0a7cff379f9"],["/page/3/index.html","923f121d6a5f1a50ffe39e6bb335567f"],["/page/4/index.html","47f47e5a6aa96e2376c6649ed755ea98"],["/page/5/index.html","af0314e0ee5ed87d27ac5afebb5b22cf"],["/page/6/index.html","3395bef2cac9f528ba73d831a20a4e40"],["/page/7/index.html","df243de9c4f92cac779a6e541b80861c"],["/page/8/index.html","93f87432d22f92e95e0a7f9ae8d2d71e"],["/page/9/index.html","178321d3a0d3bba2c895da4220d1d11c"],["/post/10919.html","7247925c54f77a203f049d8693fd2e7e"],["/post/11051.html","ff2db568d2d5c67fbe4100332c798fee"],["/post/11306.html","995ea1da478a74a3c324c21a6c857fc6"],["/post/11491.html","30055ffc0d463888e8addbaffe320684"],["/post/11799.html","ba1c4ebf6e3f9dbda776e18c0aa4ac1a"],["/post/12334.html","ce616b9c67dc431ac418a492f901bbb3"],["/post/1326.html","50de5e601d3cd96dcf09c50874cd0e54"],["/post/14379.html","6613954cf345990a37351c2ca979f38a"],["/post/14511.html","1fa6b82c9fc53d90c213048dc6c610c7"],["/post/15201.html","884b15415a5bd872ebbe2ad1c3c00d61"],["/post/15425.html","853d1a76f8deb96e81ad81c38e9e7f4f"],["/post/16107.html","1566e838aee24fe8ed2b8f3a25ec4fff"],["/post/17862176.html","8dd1a489fae9c38981829cd8d99cab0e"],["/post/18431.html","0f48c6ea71a2f7be7ce936483dabdf6c"],["/post/18912.html","31866b81f3f56d156fa25f11af84a495"],["/post/1b9c8662.html","8955a91d03b08a056e5cffe6e758ba4b"],["/post/20198.html","c5d26f52cc8dd607adad388b044669e2"],["/post/20ff5ccb.html","0702450f8ccd078e93b6639305368ac7"],["/post/21624.html","8c563cff3a7a293762e167afe0bfedc0"],["/post/2170659a.html","b5654f1fbdd1101e6b532c1d9c1f6b85"],["/post/22102.html","f292822db4e73da354c4d346073351dd"],["/post/22493.html","9067a235ec9672ec089067e57f1c6c84"],["/post/235252ea.html","dc6b1ee8a02533578c92d433ad5fad98"],["/post/25699.html","c095a07639fd00bd32bdfcb34290a3d6"],["/post/2647.html","d703b0c472f29bba02f592209f2fe499"],["/post/26477.html","e62629f3bb60e881696d74f7b4ba08e7"],["/post/26671.html","ab505d093d048d383ffc65fe2154d5f1"],["/post/26737.html","b5f48f379e4fea8ca7a1180133beaab4"],["/post/27045.html","5ae44d47c14dbc64bd037b0a1f5d1f57"],["/post/27621.html","c29c5cfc3bf4ea8472e264ab36bb5af6"],["/post/27890.html","c4b9e7494b65e099116631c1b0675f7c"],["/post/27980.html","7591dde30bc3192f046994157086da52"],["/post/280b588e.html","4df71ff2f2be2871d10ac360110e84e6"],["/post/28579.html","b5d4fbda15f7a605a6744fd28615b4ef"],["/post/28877bf.html","2c4e35653cddd94c275584fb7c569cb3"],["/post/28954.html","341268e411bd23f1a4313b2f9e91a994"],["/post/29378.html","0eb8435506a57aff12af6a9375f61ab3"],["/post/29949.html","b86910dbc0c37ffb514e03b66e9e955e"],["/post/2ae43b86.html","a067a1d1f84c50f2911b7fdf75b4a141"],["/post/2ba82a45.html","503084f2fef8aeb661ea4074b9814521"],["/post/30072.html","9c9d6f039d05b8736221b9b64e01fa09"],["/post/30479.html","b8c2a6fcedb5b6e9e748d80de920b5d5"],["/post/31a6b40.html","46d16db1b30a8fe696a9c62f81c35635"],["/post/325cdbf2.html","6413e0b6864c01bef4c81fd8e757d0de"],["/post/3319ed9a.html","bbe3af175daa62cc5103f9ed89cf724c"],["/post/3320.html","42c694e5e7413e7e22216406ace07716"],["/post/33cb1151.html","01f452e2166dff6b13391a256709f238"],["/post/34811d5f.html","72d33fd8333a2db1a38f63e5fc32b2ee"],["/post/348d4e04.html","352cca04c338003c905ebeeb7f45e1fc"],["/post/3526.html","1afbd0c1d156e66c34f4cd805bbe996f"],["/post/35532.html","b2b1fcbdcae16c0e3cebe2d7dec5ee46"],["/post/35848.html","179928f580ea4cf3ad30582028a7fbce"],["/post/37318.html","6e3b59af2adc2c6423fae79837223cbc"],["/post/37663.html","753dd5d8ff5b085547ea624c1656feb5"],["/post/38035.html","1ddc518e45fa81e3cf04612377f34866"],["/post/38072.html","1848fdde4fe826e435046462ddce3496"],["/post/38145.html","a2f3042413cad6da5192ec43de1bf9ea"],["/post/39968.html","f174ed42acabec0b4a9509bc2524fca6"],["/post/3de4bc69.html","ef892b2efc77711a921e3093f211b737"],["/post/40583.html","44b10d0c34f9c661e0ab5d909b52fb5d"],["/post/40997091.html","c645c86be3486d8ef19762b9f92372ab"],["/post/41129.html","8eaff03628057f6f74b8a70e5f1bab3f"],["/post/41763.html","ef7d8cd38ea486dbd74761abbe667dbf"],["/post/41829.html","331a18b61a8c77ee50aa61fc540a7556"],["/post/41840.html","fb10c52d56ed2a8a36a3cc3948c3e014"],["/post/43817.html","58d9ceb4a54787ae3976bb4b3aeb93a4"],["/post/43878.html","51482f474698145f3cf89167241df820"],["/post/44250.html","04547c6d86895bb824b6d9f8553a01a4"],["/post/44336.html","def566b68c0166b18d6ea77cd7d63fc5"],["/post/44454.html","5aca6ff792a1851493a903262fd95b83"],["/post/44487.html","6bf7db4d4a1458fc646f76cd6be8a07d"],["/post/44914.html","48a98d986925706e6ac1b08df7f1b889"],["/post/4551c130.html","5da8ae6f6ff57e357003e49ed4cb633c"],["/post/455a4c92.html","ce13f2c529bd3a608f9b14bb97c1cf79"],["/post/46466.html","23085c5b0a8f474316cf3076d9d0d30a"],["/post/46925.html","d10df19614dee2ad7d877b57fdb0f2e9"],["/post/47075.html","2cfd5ff4831aebf10936d222c2ff66aa"],["/post/48220.html","e8e1b183927049519aacb9b4f4aacccb"],["/post/4b1879e3.html","94456222e9d0004ef67747ccb4875b12"],["/post/4c720881.html","e66051080ee02b82a68afa9ecd2b380d"],["/post/50daec4.html","6b3d3e649f33f16dea7207419e5a4e25"],["/post/51491.html","30f11ac30ee5c91fcb59996f3d3522fa"],["/post/51e63dcf.html","610fb599136a6d5b3ceb55b2d844241a"],["/post/52078.html","b9260af2b26bd080c08b65d9b04c11f2"],["/post/53677394.html","eaae7c71a20fe7c15d096aadfe543954"],["/post/54300.html","bf3a4d2256fce8d8c4eefa559c1e2183"],["/post/54612.html","a495b77053c034bb0038a5c6071821ec"],["/post/54613.html","b70016523f3dc442e5f8775591bf7395"],["/post/54708.html","863bdcd91049bceb9b58a428204ebc39"],["/post/54778.html","05a1bbbf11b6c4291eea1f20cf74b62f"],["/post/5490.html","d3dfc5ed25be00c9f6b0f9b24821779f"],["/post/55046.html","a5b44c17459ab056c39c45abd815ebb9"],["/post/56929.html","7478515614baf89c4c688bc88ac0dac7"],["/post/57339.html","30ebd3575f11bd3b89528feb2adedff0"],["/post/57449.html","660aa1ac5135c8d5ac93bec8428e27f9"],["/post/57453.html","fefa207acec6a38935ab8cc562dce9a7"],["/post/57671.html","30a62f936533ca8ba68f73a07d0f84bc"],["/post/58313.html","e7a24fc01c935f363228592b263edc51"],["/post/58481.html","3722c343df121c4450584b0220fed466"],["/post/58986.html","cc465dbe060d0b58b3c3d2a2ab07bb45"],["/post/59431.html","b47bae93159542928c08ed530d665508"],["/post/5951da65.html","0e71e430ad7f3cf752cbee886f65d88f"],["/post/5be7e977.html","8d5dae5ee6f99e547b4b43c36e21e453"],["/post/5f9e4eff.html","d0cf1de8e1bcb120f3aa7cba70a73cec"],["/post/604b49d0.html","f8901f2ca2b7e6b5cb9bab2488fa012e"],["/post/61312.html","32657e4d78f62699c595311accd94643"],["/post/61738.html","397ecfb1c41a0ab77535ec712722967e"],["/post/61809.html","9198c0a94a49fca9a66d0ac2d7f38402"],["/post/61eaf19a.html","a5b30d8ab835915d91e34a96442e1280"],["/post/63002.html","888555c0a12e74bbe40e2b7858f3dc18"],["/post/63711.html","221b81c865d07010ff34efb2f7b4f53b"],["/post/6587.html","99bd39e0d99873e441e8fab1cf97f35f"],["/post/6589.html","2849b0e097dba31b2f972ac927efedf1"],["/post/6880.html","9112175ceb8b1d8b8353268a73e60e97"],["/post/70263071.html","aa86dc49748f7c78d959ae9ee7891233"],["/post/71038564.html","45d0d8e43bd2f699b17e1240fb5df04c"],["/post/7119.html","51d9811d929246a029d843c529f2ec90"],["/post/74e7fdff.html","d4396c61de476d1643a2a336b92078ab"],["/post/7502.html","060c7b5b0aa86c6306505c67974b2f67"],["/post/7564.html","cfebc91f693b56777b5259fa6ae9a17a"],["/post/766f9b60.html","2ca1ac58a593e8423db53f15ce43376e"],["/post/7ca31f7.html","681eb596daff62f38d82cc9a25fa129e"],["/post/7d1c86da.html","a5820d953214da1e6b103a1693f2d6ba"],["/post/7f3bcd7f.html","4edf508a2b99b67e52ac8594ad993895"],["/post/8039.html","2a9cfc3021bcc49354396a175793b506"],["/post/8050.html","43d077aacc48f229afeb02fc1105fc96"],["/post/8072.html","7e6a7a0d39f360ac1eb4c72552c0489f"],["/post/8274.html","0f1ada53d1e4184b655725beebfb9316"],["/post/8372.html","031d63fdc1be5ca531bf9e8295191e91"],["/post/8498.html","40cc9b39aaa8e57fc113df41e7fe6512"],["/post/85b4e13b.html","e937cf445507a1064fb70af747f86bbb"],["/post/912b2566.html","59689f9068c181e1461a1eae304948bd"],["/post/9187.html","9cfd09aab8d2a99db876befb23c92c4f"],["/post/9197.html","42a6202efb9660c08babee127658fb9f"],["/post/94ceb2fd.html","3a1b8306dc2fdcfc0aeb1cb8d98982ca"],["/post/95495db.html","2673e0122496b0365fb5131aa799694f"],["/post/97246020.html","abd7699decf1ca9c2816fea62eb7de51"],["/post/a3a786d6.html","6ec9de528a3d4fc21e9906064dfa2412"],["/post/a444b428.html","19c02295c006281abcb701626c49be7b"],["/post/a50b8908.html","67af137c90d78bd22b9def840dc47b0a"],["/post/aa1eade8.html","a6d5f990eb1c978ba760d580260a7a12"],["/post/ade8c6d6.html","57733f41ca41e886d57d2106d9343344"],["/post/ae8362df.html","3d7e5d4fd7c74dc41e8c77ceccf456f9"],["/post/b4c1d206.html","7884eca570230bf50922ad0a97b9e530"],["/post/d431fab4.html","11a23d2c84bceeb602923ef71b4ab400"],["/post/d5381517.html","cc24a0fb2f5902544e8e8013ba9756a5"],["/post/e058ffd8.html","ecd0f44c538b68b225e99e68a8e35fe0"],["/post/e0f8cb74.html","dc13cce62e8182194b2df3eced288e66"],["/post/eefe591f.html","ae9c72ab629f75577a84fafb14111246"],["/post/ef296a07.html","5fda1d86b9b384f90baafda832894dd2"],["/post/f201f9fd.html","bc687303363702c7579230a96362aa09"],["/post/f79e4123.html","3d264c3952fced2a711051f6a32027d7"],["/post/f8648a1d.html","bd8c2541ab6d85b73ac10ecbfad9105c"],["/post/f89cb603.html","277f2e8b4069269741be7cf05771c974"],["/post/fa288682.html","9098c9533246699aac0500d8f3d51f74"],["/post/fb98053e.html","2ff1f3848ac1917e1064879567796421"],["/sw-register.js","4799d0f6ef73c001425c6f69148bdee1"],["/tags/AT-T/index.html","59fa954b8c1a9e44c4798bddd6e99a5d"],["/tags/index.html","f122022297658ba58066bc668e086904"],["/tags/动态规划/index.html","c353780115e5c7ec2ab4db87368acfc2"],["/tags/字符串/index.html","69bec5f87d60931904b32112f1267d0e"],["/tags/字符常量/index.html","1f8230603b7a3d0ced926b50a5c32804"],["/tags/快排/index.html","e28565cb656ab9264b2fb95d77141d08"],["/tags/排序/index.html","4181b146380c8a0266d105ac6d232d4a"]];
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
